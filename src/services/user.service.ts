import User from '~/models/schemas/User.schema'
import { instanceDatabase } from './database.service'
import { RegisterRequestBody } from '~/models/schemas/requests/User.request'
import { hashPassword } from '~/utils/cryto'
import { signToken } from '~/utils/jwt'
import { TokenType, UserVerifyStatus } from '~/constants/enums'
import refreshTokenService from './refreshToken.service'
import { ObjectId } from 'mongodb'
import { config } from 'dotenv'
import { USER_MESSAGE } from '~/constants/messages'
import { emailVerifyTokenValidator } from '../middlewares/users.middleware'
config()

class UserService {
  private signAccessToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.AccessToken
      },
      privateKey: process.env.JWT_SECRET_ACCESS_TOKEN as string,
      options: {
        algorithm: 'HS256',
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN
      }
    })
  }

  private signRefreshToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.RefreshToken
      },
      privateKey: process.env.JWT_SECRET_REFRESH_TOKEN as string,
      options: {
        algorithm: 'HS256',
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN
      }
    })
  }

  private signEmailVerifyToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.EmailVerifyToken
      },
      privateKey: process.env.JWT_SECRET_EMAIL_VERIFY_TOKEN as string,
      options: {
        algorithm: 'HS256',
        expiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRE_IN
      }
    })
  }

  private signAccessAndRefreshToken(user_id: string) {
    return Promise.all([this.signAccessToken(user_id), this.signRefreshToken(user_id)])
  }

  private signForgotPasswordToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.ForgotPasswordToken
      },
      privateKey: process.env.JWT_SECRET_FORGOT_PASSWORD_VERIFY_TOKEN as string,
      options: {
        algorithm: 'HS256',
        expiresIn: process.env.FORGOT_PASSWORD_VERIFY_TOKEN_EXPIRE_IN
      }
    })
  }

  async register(payload: RegisterRequestBody) {
    const user_id = new ObjectId()
    const email_verify_token = await this.signEmailVerifyToken(user_id.toString())
    const [resultUpdate, token] = await Promise.all([
      instanceDatabase().users.insertOne(
        new User({
          ...payload,
          _id: user_id,
          date_of_birth: new Date(payload.date_of_birth),
          password: hashPassword(payload.password),
          email_verify_token
        })
      ),
      this.signAccessAndRefreshToken(user_id.toString())
    ])

    await refreshTokenService.createRefeshToken({
      user_id: user_id,
      token: token[1]
    })

    return token
  }

  async checkExistEmail(email: string) {
    const result = await instanceDatabase().users.findOne({ email })
    return result
  }

  async login(user_id: string) {
    const token = await this.signAccessAndRefreshToken(user_id)
    await refreshTokenService.createRefeshToken({
      user_id: new ObjectId(user_id),
      token: token[1]
    })
    return token
  }

  async logout(refreshToken: string) {
    const result = await instanceDatabase().refreshTokens.deleteOne({
      token: refreshToken
    })
    console.log('🚀 ~ file: user.service.ts:82 ~ UserService ~ result ~ result:', result)
    return {
      message: USER_MESSAGE.LOGOUT_SUCCESSFULLY
    }
  }

  async verifyEmail(user_id: string) {
    // const updatedAt = new Date()
    const [token, _] = await Promise.all([
      this.signAccessAndRefreshToken(user_id),
      instanceDatabase().users.updateOne(
        {
          _id: new ObjectId(user_id)
        },
        {
          $set: {
            email_verify_token: '',
            verify: UserVerifyStatus.Verified
            // updated_at: updatedAt
          },
          $currentDate: {
            updated_at: true
          }
        }
      )
    ])

    return {
      access_token: token[0],
      refresh_token: token[1]
    }
  }

  async resendEmailVerifyToken(user_id: string) {
    const new_email_verify_token = await this.signEmailVerifyToken(user_id)

    await instanceDatabase().users.updateOne(
      {
        _id: new ObjectId(user_id)
      },
      [
        {
          $set: {
            email_verify_token: new_email_verify_token,
            updated_at: '$$NOW'
          }
        }
      ]
    )

    return {
      message: USER_MESSAGE.RESEND_EMAIL_SUCCESS
    }
  }

  async forgotPasswordToken(user_id: ObjectId) {
    const forgot_password_token = await this.signForgotPasswordToken(user_id.toString())
    await instanceDatabase().users.updateOne(
      {
        _id: user_id
      },
      [
        {
          $set: {
            forgot_password_token,
            updated_at: '$$NOW'
          }
        }
      ]
    )

    return {
      message: USER_MESSAGE.CHECK_EMAIL_TO_RESET_PASSWORD
    }
  }
}

const userService = new UserService()
export default userService
