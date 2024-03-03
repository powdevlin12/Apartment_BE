import { ObjectId } from 'mongodb'

interface IApartmentServiceType {
  _id?: ObjectId
  serviceId: ObjectId
  apartmentId: ObjectId
  created_at?: Date
}

export default class Service {
  _id?: ObjectId
  serviceId: ObjectId
  apartmentId: ObjectId
  created_at?: Date

  constructor(apartmentService: IApartmentServiceType) {
    this._id = apartmentService._id ?? new ObjectId()
    this.apartmentId = apartmentService.apartmentId
    this.serviceId = apartmentService.serviceId
    this.created_at = apartmentService.created_at ?? new Date()
  }
}
