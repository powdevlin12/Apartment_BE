import express from 'express'
import apartmentsController from '~/controllers/apartments.controller'
import { wrapRequestHandler } from '~/utils/handlers'

const apartmentRouter = express.Router()
apartmentRouter.post('/create', wrapRequestHandler(apartmentsController.create))

export default apartmentRouter
