import express from 'express'
import typeApartmentsController from '~/controllers/typeApartment.controller'
import { createTypeApartmentMiddleware } from '~/middlewares/typeApartments.middleware'
import typeApartmentService from '~/services/typeApartments.service'
import { wrapRequestHandler } from '~/utils/handlers'
import { validate } from '~/utils/validation'

const typeApartmentRouter = express.Router()
typeApartmentRouter
  .post('/create', validate(createTypeApartmentMiddleware), wrapRequestHandler(typeApartmentsController.create))
  .get('/read-all', wrapRequestHandler(typeApartmentsController.readAll))

export default typeApartmentRouter
