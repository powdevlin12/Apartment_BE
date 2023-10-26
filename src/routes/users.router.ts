import express from 'express'
import {
  forgotPasswordTokenController,
  loginController,
  logoutController,
  registerController,
  resendEmailVerifyToken,
  verifyEmailController,
  verifyForgotPasswordTokenController
} from '~/controllers/users.controller'
import {
  accessTokenValidator,
  emailVerifyTokenValidator,
  forgotPasswordValidate,
  loginValidator,
  refreshTokenValidator,
  registerValidator,
  verifyForgotPasswordValidate
} from '~/middlewares/users.middleware'
import { validate } from '../utils/validation'
import { wrapRequestHandler } from '../utils/handlers'
const userRouter = express.Router()

userRouter
  .post('/login', validate(loginValidator), wrapRequestHandler(loginController))
  .post('/register', validate(registerValidator), wrapRequestHandler(registerController))
  .post(
    '/logout',
    validate(accessTokenValidator),
    validate(refreshTokenValidator),
    wrapRequestHandler(logoutController)
  )
  .post('/verify-email', validate(emailVerifyTokenValidator), wrapRequestHandler(verifyEmailController))
  .post('/resend-verify-email', validate(accessTokenValidator), wrapRequestHandler(resendEmailVerifyToken))
  .post('/forgot-password-token', validate(forgotPasswordValidate), wrapRequestHandler(forgotPasswordTokenController))
  .post(
    '/verify-forgot-password-token',
    validate(verifyForgotPasswordValidate),
    wrapRequestHandler(verifyForgotPasswordTokenController)
  )

export default userRouter
