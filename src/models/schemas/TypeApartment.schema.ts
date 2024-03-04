import { ObjectId } from 'mongodb'

export interface ITypeApartment {
  _id?: ObjectId
  name: string
  created_at?: Date
}

export default class TypeApartment {
  _id?: ObjectId
  name: string
  created_at?: Date

  constructor(typeApartment: ITypeApartment) {
    const date = new Date()
    this._id = typeApartment._id ?? new ObjectId()
    this.name = typeApartment.name
    this.created_at = typeApartment.created_at ?? date
  }
}
