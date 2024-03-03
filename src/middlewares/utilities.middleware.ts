import { checkSchema } from 'express-validator'
import { UTILITIES_MESSAGE } from '~/constants/messages'
import { instanceDatabase } from '~/services/database.service'

export const createUtilitiesMiddleware = checkSchema({
  name: {
    notEmpty: {
      errorMessage: UTILITIES_MESSAGE.NAME_UTILITY_IS_NOT_EMPTY
    },
    isLength: {
      options: {
        max: 30,
        min: 6
      },
      errorMessage: UTILITIES_MESSAGE.NAME_LENGTH_MUST_BE_FROM_6_TO_30
    },
    custom: {
      options: async (value: string, { req }) => {
        const utility = await instanceDatabase().utilities.findOne({
          name: value.toLocaleLowerCase()
        })

        if (utility) {
          throw Error(UTILITIES_MESSAGE.UTILITY_IS_EXIST)
        }

        return true
      }
    }
  }
})
