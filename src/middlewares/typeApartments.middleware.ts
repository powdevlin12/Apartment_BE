import { checkSchema } from 'express-validator'
import { TYPE_APARTMENTS_MESSAGE } from '~/constants/messages'
import { instanceDatabase } from '~/services/database.service'

export const createTypeApartmentMiddleware = checkSchema(
  {
    name: {
      notEmpty: {
        errorMessage: TYPE_APARTMENTS_MESSAGE.NAME_TYPE_APARTMENT_IS_NOT_EMPTY
      },
      isLength: {
        options: {
          max: 30,
          min: 6
        },
        errorMessage: TYPE_APARTMENTS_MESSAGE.NAME_LENGTH_MUST_BE_FROM_6_TO_30
      },
      custom: {
        options: async (value: string, { req }) => {
          const utility = await instanceDatabase().typeApartments.findOne({
            name: value.toLocaleLowerCase()
          })

          if (utility) {
            throw Error(TYPE_APARTMENTS_MESSAGE.TYPE_APARTMENT_IS_EXIST)
          }

          return true
        }
      }
    }
  },
  ['body']
)
