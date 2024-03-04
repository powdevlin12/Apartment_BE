import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import HTTP_STATUS from '~/constants/httpStatus'
import { TypeApartmentRequestBody } from '~/models/schemas/requests/TypeRoom.request'
import typeApartmentService from '~/services/typeApartments.service'

class TypeApartmentsController {
  async create(req: Request<ParamsDictionary, any, TypeApartmentRequestBody>, res: Response) {
    const result = await typeApartmentService.create(req.body)

    if (result) {
      return res.status(HTTP_STATUS.CREATED).json({
        result
      })
    }
  }
}

const typeApartmentsController = new TypeApartmentsController()
export default typeApartmentsController
