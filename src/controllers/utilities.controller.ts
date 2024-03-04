import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import HTTP_STATUS from '~/constants/httpStatus'
import { UtilitiesRequestBody } from '~/models/schemas/requests/Utilities.request'
import utilitiesService from '~/services/utilities.service'

class UtilitiesController {
  async createUtitlitiesController(req: Request<ParamsDictionary, any, UtilitiesRequestBody>, res: Response) {
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
