import { Request } from 'express'
import { checkSchema } from 'express-validator'
import { ObjectId } from 'mongodb'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_APARTMENTS_MESSAGE } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import { TokenPayload } from '~/models/schemas/requests/User.request'
import { instanceDatabase } from '~/services/database.service'

export const createUsersApartmentsValidator = checkSchema({
  apartment_id: {
    notEmpty: {
      errorMessage: USERS_APARTMENTS_MESSAGE.APARTMENT_ID_IS_NOT_EMPTY
    },
    custom: {
      options: async (value: string, { req }) => {
        const { user_id } = (req as Request).decoded_authorization as TokenPayload
        const apartmentSaved = await instanceDatabase().usersApartments.findOne({
          apartment_id: new ObjectId(value),
          user_id: new ObjectId(user_id)
        })
        console.log('🚀 ~ apartmentSaved ~ apartmentSaved:', apartmentSaved)
        if (apartmentSaved !== null) {
          throw new ErrorWithStatus({
            message: USERS_APARTMENTS_MESSAGE.THIS_APARTMENT_IS_SAVED,
            status: HTTP_STATUS.BAD_REQUEST
          })
        }
        return true
      }
    }
  }
})
