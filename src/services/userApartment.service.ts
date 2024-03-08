import UserApartment, { IUserApartment } from '~/models/schemas/UserApartment.schema'
import { instanceDatabase } from './database.service'
import { USERS_APARTMENTS_MESSAGE } from '~/constants/messages'
import { ObjectId } from 'mongodb'

class UserApartmentService {
  async create(payload: Omit<IUserApartment, '_id'>) {
    await instanceDatabase().usersApartments.insertOne(
      new UserApartment({
        ...payload,
        user_id: payload.user_id,
        apartment_id: payload.apartment_id
      })
    )
    return {
      message: USERS_APARTMENTS_MESSAGE.SAVE_APARTMENT_SUCCESS,
      isSuccess: true
    }
  }

  async readAll(user_id: string) {
    const data = await instanceDatabase()
      .usersApartments.find({
        user_id: new ObjectId(user_id)
      })
      .toArray()
    return data
  }
}

const userApartmentService = new UserApartmentService()
export default userApartmentService
