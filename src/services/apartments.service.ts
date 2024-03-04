import { ObjectId } from 'mongodb'
import { APARTMENTS_MESSAGE } from '~/constants/messages'
import Apartment from '~/models/schemas/Apartment.schema'
import { ApartmentRequestBody } from '~/models/schemas/requests/Apartment.resquest'
import { instanceDatabase } from './database.service'

class ApartmentsService {
  async create(payload: ApartmentRequestBody) {
    await instanceDatabase().apartments.insertOne(
      new Apartment({
        ...payload,
        status: 'free',
        type_apartmentId: new ObjectId(payload.type_apartmentId),
        utilities: payload.utilities?.map((utility) => new ObjectId(utility))
      })
    )

    return {
      message: APARTMENTS_MESSAGE.CREATE_APARTMENT_SUCCESS,
      isSuccess: true
    }
  }
}

const apartmentsService = new ApartmentsService()
export default apartmentsService
