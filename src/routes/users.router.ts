import express from 'express'
import { query } from 'express-validator'
import { loginController, registerController, testValidatorController } from '~/controllers/users.controller'
import { loginValidator, registerValidator } from '~/middlewares/users.middleware'
import { validate } from '../utils/validation'
const userRouter = express.Router()

userRouter
  .post('/login', loginValidator, loginController)
  .post('/register', validate(registerValidator), registerController)
  .get(
    '/test',
    query('name').notEmpty().withMessage('Nhap name di'),
    query('age').notEmpty().withMessage('Nhap age di'),
    testValidatorController
  )
export default userRouter
