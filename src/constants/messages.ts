export const USER_MESSAGE = {
  VALIDATION_ERROR: 'Validation error',
  NAME_IS_REQUESTED: 'Name is requested',
  NAME_LENGTH_MUST_BE_FROM_5_TO_100: 'Name must be from 5 to 100 characters',
  EMAIL_IS_NOT_VALID: 'Email is not valid',
  EMAIL_IS_NOT_EMPTY: 'Email is not empty',
  EMAIL_IS_ALREADY_IN_USE: 'Email is already in use',
  PASSWORD_IS_REQUESTED: 'Password is requested',
  PASSWORD_MUST_BE_STRONG: 'Password must be strong',
  PASSWORD_MUST_BE_FROM_8_TO_50: 'Password must be from 8 to 50 characters',
  PASSWORD_NOT_MATCH: 'Password not match',
  DATE_OF_BIRTH_MUST_BE_IOS8601: 'Date of birth must be IO8601',
  USER_NOT_FOUND: 'User not found',
  LOGIN_SUCCESS: 'Login success',
  REGISTERE_SUCCESS: 'Register success',
  EMAIL_OR_PASSWORD_INCORRECT: 'Email or password incorrect',
  ACCCESS_TOKEN_IS_REQUESTED: 'Access token is requested',
  ACCESS_TOKEN_INVALID: 'Access token is invalid',
  REFRESH_TOKEN_IS_REQUESTED: 'Refresh token is requested',
  REFRESH_TOKEN_INVALID: 'Refresh token is invalid',
  USED_REFRESH_TOKEN_OR_NOT_EXIST: 'Used refresh token or not exist',
  LOGOUT_SUCCESSFULLY: 'Logout successfully',
  EMAIL_VERIFY_TOKEN_IS_REQUESTED: 'Email verify token is requested',
  EMAIL_VERIFIED_BEFORE: 'Email verified before',
  EMAIL_TOKEN_INVALID: 'email verify token is invalid',
  VERIFY_ACCOUNT_SUCCESS: 'Verify account success',
  RESEND_EMAIL_SUCCESS: 'Email sent successfully',
  CHECK_EMAIL_TO_RESET_PASSWORD: 'Check email to reset password',
  FORGOT_PASSWORD_TOKEN_IS_REQUIRED: 'Forgot password is required',
  FORGOT_PASSWORD_TOKEN_INVALID: 'Forgot password token invalid',
  VERIFY_FORGOT_PASSWORD_SUCCESS: 'Verify forgot password successfully',
  RESET_PASSWORD_SUCCESS: 'Reset password successfully',
  GET_ME_SUCCESS: 'Get me successful',
  YOU_RE_NOT_FORBIDDEN: "You're not forbidden",
  PHOTO_MUST_BE_BETWEEN_10_AND_100_CHARACTERS_LONG: 'Photos must be between 10 and 100 characters long',
  BIO_MUST_BE_STRING: 'Bio must be a string',
  BIO_MUST_BE_BETWEEN_10_AND_200_CHARACTERS_LONG: 'Bio must be between 10 and 200 characters long',
  WEBSITE_MUST_BE_STRING: 'Website must be a string',
  WEBSITE_MUST_BE_BETWEEN_10_AND_200_CHARACTERS_LONG: 'Website must be between 10 and 200 characters long',
  LOCATION_MUST_BE_STRING: 'Location must be a string',
  LOCATION_MUST_BE_BETWEEN_10_AND_200_CHARACTERS_LONG: 'Location must be between 10 and 200 characters long',
  USERNAME_MUST_BE_STRING: 'Username must be a string',
  USERNAME_MUST_BE_BETWEEN_10_AND_100_CHARACTERS_LONG: 'Username must be between 10 and 100 characters long',
  UPDATE_ME_SUCCESSFULLY: 'Update me successfully',
  FOLLOWED_USER_ID_IS_NOT_VALID: 'followed_user_id is not valid',
  USER_FOLLOWED_BEFORE: 'user followed before',
  FOLLOWED_USER_ID_NOT_EMPTY: 'followed user id is not empty',
  FOLLOW_SUCCESSFULLY: 'followed successfully',
  UN_FOLLOW_SUCCESSFULLY: 'Unfollowed successfully',
  FOLLOW_USER_ID_MUST_BE_STRING: 'follow_user_id must be string',
  NOT_DATA_FOLLOW: 'No data follow',
  USER_NAME_IS_NOT_VALID: 'user name is not valid',
  USERNAME_IS_EXIST: 'user name is exist',
  PASSWORD_IS_NOT_EXACTLY: 'password is not exactly',
  CHANGE_PASSWORD_SUCCESSFULLY: 'change password successfully',
  GMAIL_NOT_VERIFIED: 'gmail not verified',
  REFRESH_TOKEN_SUCCESSFULLY: 'refresh token successfully'
} as const

export const MEDIA_MESSAGE = {
  UPLOAD_IMAGE_SUCCESSFULLY: 'Upload image successfully'
} as const

export const UTILITIES_MESSAGE = {
  CREATE_UTILITY_SUCCESS: 'Create utility success',
  NAME_UTILITY_IS_NOT_EMPTY: 'Name utility is not empty',
  NAME_LENGTH_MUST_BE_FROM_6_TO_30: 'Name length must be from from 6 to 30',
  UTILITY_IS_EXIST: 'Utility is exist'
} as const

export const TYPE_APARTMENTS_MESSAGE = {
  CREATE_TYPE_APARTMENT_SUCCESS: 'Create type apartment success',
  NAME_TYPE_APARTMENT_IS_NOT_EMPTY: 'Name type apartment is not empty',
  NAME_LENGTH_MUST_BE_FROM_6_TO_30: 'Name length must be from from 6 to 30',
  TYPE_APARTMENT_IS_EXIST: 'type apartment is exist'
} as const

export const APARTMENTS_MESSAGE = {
  CREATE_APARTMENT_SUCCESS: 'Create type apartment success',
  NAME_APARTMENT_IS_NOT_EMPTY: 'Name type apartment is not empty',
  NAME_LENGTH_MUST_BE_FROM_6_TO_30: 'Name length must be from from 6 to 30',
  APARTMENT_IS_EXIST: 'type apartment is exist'
} as const

export const USERS_APARTMENTS_MESSAGE = {
  SAVE_APARTMENT_SUCCESS: 'Save apartment success',
  APARTMENT_ID_IS_NOT_EMPTY: 'apartment_id is not empty',
  THIS_APARTMENT_IS_SAVED: 'This apartment is saved'
} as const
