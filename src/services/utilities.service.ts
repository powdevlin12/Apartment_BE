import { ObjectId } from 'mongodb'
import Utilities, { IUtilitiesType } from '~/models/schemas/Utilities.schema'
import { instanceDatabase } from './database.service'
import { UTILITIES_MESSAGE } from '~/constants/messages'

class UtilitiesService {
  async createUtility(payload: IUtilitiesType) {
    const utility_id = new ObjectId()

    await instanceDatabase().utilities.insertOne(
      new Utilities({
        ...payload,
        name: payload.name.toLowerCase(),
        _id: utility_id
      })
    )

    return {
      isSuccess: true,
      message: UTILITIES_MESSAGE.CREATE_UTILITY_SUCCESS
    }
  }
}

const utilitiesService = new UtilitiesService()
export default utilitiesService
