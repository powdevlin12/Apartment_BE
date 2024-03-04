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

  async readAll() {
    const result = await instanceDatabase()
      .apartments.aggregate([
        {
          $lookup: {
            from: process.env.DB_COLLECTION_TYPE_APARTMENTS,
            localField: 'type_apartment_id',
            foreignField: '_id',
            as: 'typeApartment'
          }
        },
        {
          $lookup: {
            from: process.env.DB_COLLECTION_UTILITIES,
            localField: 'utilities',
            foreignField: '_id',
            as: 'utilities'
          }
        }
      ])
      .toArray()
    return result
  }
}

const apartmentsService = new ApartmentsService()
export default apartmentsService
