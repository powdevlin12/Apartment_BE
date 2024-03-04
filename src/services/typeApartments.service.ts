import TypeApartment, { ITypeApartment } from '~/models/schemas/TypeApartment.schema'
import { instanceDatabase } from './database.service'
import { TYPE_APARTMENTS_MESSAGE } from '~/constants/messages'

class TypeApartmentService {
  async create(payload: ITypeApartment) {
    await instanceDatabase().typeApartments.insertOne(
      new TypeApartment({
        ...payload,
        name: payload.name.toLocaleLowerCase()
      })
    )

    return {
      isSuccess: true,
      message: TYPE_APARTMENTS_MESSAGE.CREATE_TYPE_APARTMENT_SUCCESS
    }
  }
}

const typeApartmentService = new TypeApartmentService()
export default typeApartmentService
