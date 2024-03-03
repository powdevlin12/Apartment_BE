import { NextFunction, Request, Response } from 'express'
import utilitiesService from '~/services/utilities.service'
import { ParamsDictionary } from 'express-serve-static-core'
import { UtilitiesRequestBody } from '~/models/schemas/requests/Utilities.request'
import HTTP_STATUS from '~/constants/httpStatus'

class UtilitiesController {
  async createUtitlitiesController(
    req: Request<ParamsDictionary, any, UtilitiesRequestBody>,
    res: Response,
    next: NextFunction
  ) {
    const result = await utilitiesService.createUtility(req.body)
    if (result) {
      return res.status(HTTP_STATUS.CREATED).json({
        result
      })
    }
  }
}

const utilitiesController = new UtilitiesController()

export default utilitiesController
