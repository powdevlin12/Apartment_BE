import { ObjectId } from 'mongodb'

interface IServiceType {
  _id?: ObjectId
  name: string
  description?: string
  icon: string
  created_at?: Date
}

export default class Service {
  _id?: ObjectId
  name: string
  description?: string
  icon: string
  created_at?: Date

  constructor(service: IServiceType) {
    this._id = service._id ?? new ObjectId()
    this.name = service.name
    this.description = service.description ?? ''
    this.icon = service.icon
    this.created_at = service.created_at ?? new Date()
  }
}
