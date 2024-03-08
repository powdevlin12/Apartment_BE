import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ObjectId } from 'mongodb'
import HTTP_STATUS from '~/constants/httpStatus'
import { IUserApartment } from '~/models/schemas/UserApartment.schema'
import { TokenPayload } from '~/models/schemas/requests/User.request'
import userApartmentService from '~/services/userApartment.service'

class UsersApartmentsController {
  async create(req: Request<ParamsDictionary, any, Omit<Omit<IUserApartment, '_id'>, 'userId'>>, res: Response) {
    const { user_id } = req.decoded_authorization as TokenPayload
    const result = await userApartmentService.create({
      apartment_id: new ObjectId(req.body.apartment_id),
      user_id: new ObjectId(user_id)
    })

    return res.status(HTTP_STATUS.CREATED).json(result)
  }

  async readAll(req: Request, res: Response) {
    const { user_id } = req.decoded_authorization as TokenPayload
    const result = await userApartmentService.readAll(user_id)
    return res.json(result)
  }
}

const usersApartmentsController = new UsersApartmentsController()
export default usersApartmentsController
