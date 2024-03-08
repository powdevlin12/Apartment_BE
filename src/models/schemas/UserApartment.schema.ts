import { ObjectId } from 'mongodb'

export interface IUserApartment {
  _id?: ObjectId
  user_id: ObjectId
  apartment_id: ObjectId
}

export default class UserApartment {
  _id?: ObjectId
  user_id: ObjectId
  apartment_id: ObjectId
  created_at?: Date

  constructor(userApartment: UserApartment) {
    this._id = userApartment._id ?? new ObjectId()
    this.apartment_id = new ObjectId(userApartment.apartment_id)
    this.user_id = new ObjectId(userApartment.user_id)
    this.created_at = new Date()
  }
}
