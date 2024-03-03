import { ObjectId } from 'mongodb'

type TStatus = 'free' | 'busy'

interface ApartmentTypes {
  _id?: ObjectId
  name: string
  price: number
  bed: number
  maxPeople: number
  status: TStatus
  created_at?: Date
  utilities?: ObjectId[]
}

export default class Apartment {
  _id?: ObjectId
  name: string
  price: number
  bed: number
  maxPeople: number
  status: TStatus
  created_at?: Date
  utilities?: ObjectId[]

  constructor(apartment: ApartmentTypes) {
    const date = new Date()
    this._id = apartment._id ?? new ObjectId()
    this.name = apartment.name
    this.price = apartment.price
    this.bed = apartment.bed
    this.maxPeople = apartment.maxPeople
    this.status = apartment.status
    this.utilities = apartment.utilities ?? []
    this.created_at = apartment.created_at ?? date
  }
}
