import { ObjectId } from 'mongodb'

interface IUtilitiesType {
  _id?: ObjectId
  name: string
  created_at?: Date
}

export default class Utilities {
  _id?: ObjectId
  name: string
  created_at?: Date

  constructor(utilities: IUtilitiesType) {
    const date = new Date()
    this._id = utilities._id ?? new ObjectId()
    this.name = utilities.name
    this.created_at = utilities.created_at ?? date
  }
}
