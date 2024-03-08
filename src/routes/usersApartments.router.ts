import express from 'express'
import usersApartmentsController from '~/controllers/users-apartments.controller'
import { accessTokenValidator } from '~/middlewares/users.middleware'
import { wrapRequestHandler } from '~/utils/handlers'
import { validate } from '~/utils/validation'
const usersAprtmentsRouter = express.Router()

usersAprtmentsRouter
  .post('/create', validate(accessTokenValidator), wrapRequestHandler(usersApartmentsController.create))
  .get('/read-all', validate(accessTokenValidator), wrapRequestHandler(usersApartmentsController.readAll))

export default usersAprtmentsRouter
