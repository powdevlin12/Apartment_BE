import { NextFunction, Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import User from '~/models/schemas/User.schema'
import userService from '~/services/user.service'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterRequestBody } from '~/models/schemas/requests/User.request'

export const loginController = async (req: Request, res: Response) => {
  const user = req.user as User
  const token = await userService.login(user._id.toString())
  return res.status(200).json({
    message: 'Login successfully',
    token
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterRequestBody>,
  res: Response,
  next: NextFunction
) => {
  const result = await userService.register(req.body)
  if (result) {
    return res.status(200).json({
      message: 'Created successfully',
      result
    })
  }
}

export const testValidatorController = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req)
  if (result.isEmpty()) {
    const data = matchedData(req)
    console.log('🚀 ~ file: users.controller.ts:46 ~ testValidatorController ~ data:', data)
    return res.status(200).json({
      message: data.name
    })
  }
  console.log(`Hello ${req.query?.name}`)
  return res.status(400).json({
    message: 'Error'
  })
}
