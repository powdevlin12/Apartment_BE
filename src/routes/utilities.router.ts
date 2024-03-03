import express from 'express'
import utilitiesController from '~/controllers/utilities.controller'
import { createUtilitiesMiddleware } from '~/middlewares/utilities.middleware'
import { wrapRequestHandler } from '~/utils/handlers'
import { validate } from '~/utils/validation'

const utilitesRouter = express.Router()

utilitesRouter.post(
  '/create',
  validate(createUtilitiesMiddleware),
  wrapRequestHandler(utilitiesController.createUtitlitiesController)
)

export default utilitesRouter
