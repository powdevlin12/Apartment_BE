import User from '~/models/schemas/User.schema'
import { instanceDatabase } from './database.service'

class UserService {
  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await instanceDatabase().users.insertOne(
      new User({
        email,
        password
      })
    )

    return result
  }

  async checkExistEmail(email: string) {
    const result = await instanceDatabase().users.findOne({ email })
    return Boolean(result)
  }
}

const userService = new UserService()
export default userService
