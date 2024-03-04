export interface ApartmentRequestBody {
  name: string
  price: number
  bed: number
  max_people: number
  type_apartmentId: string
  created_at?: Date
  utilities?: string[]
}
