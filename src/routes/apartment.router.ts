import express from 'express'
import apartmentsController from '~/controllers/apartments.controller'
import { wrapRequestHandler } from '~/utils/handlers'

const apartmentRouter = express.Router()
apartmentRouter
  .post('/create', wrapRequestHandler(apartmentsController.create))
  .get('/read-all', wrapRequestHandler(apartmentsController.readAll))
export default apartmentRouter
