import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import apartmentsService from '~/services/apartments.service'
import { ParamsDictionary } from 'express-serve-static-core'
import { ApartmentRequestBody } from '~/models/schemas/requests/Apartment.resquest'

class ApartmentsController {
  async create(req: Request<ParamsDictionary, any, ApartmentRequestBody>, res: Response) {
    console.log('🚀 ~ ApartmentsController ~ create ~ req:', req.body)
    const result = await apartmentsService.create(req.body)

    if (result) {
      res.status(HTTP_STATUS.CREATED).json(result)
    }
  }
}

const apartmentsController = new ApartmentsController()
export default apartmentsController
