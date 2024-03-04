import { ObjectId } from 'mongodb'

export type TStatus = 'free' | 'busy'

export interface ApartmentTypes {
  _id?: ObjectId
  name: string
  price: number
  bed: number
  max_people: number
  status: TStatus
  type_apartmentId: ObjectId
  images?: string[]
  created_at?: Date
  utilities?: ObjectId[]
}

export default class Apartment {
  _id?: ObjectId
  name: string
  price: number
  bed: number
  max_people: number
  status: TStatus
  type_apartment_id: ObjectId
  images: string[]
  created_at: Date
  utilities: ObjectId[]

  constructor(apartment: ApartmentTypes) {
    const date = new Date()
    this._id = apartment._id ?? new ObjectId()
    this.name = apartment.name
    this.price = apartment.price
    this.bed = apartment.bed
    this.max_people = apartment.max_people
    this.status = apartment.status
    this.type_apartment_id = apartment.type_apartmentId
    this.images = apartment.images ?? []
    this.utilities = apartment.utilities ?? []
    this.created_at = apartment.created_at ?? date
  }
}
