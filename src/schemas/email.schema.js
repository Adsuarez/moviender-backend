import { isEmailInDB } from '#Helpers/isEmailInDB.js'

export const emailSchema = {
  require: true,
  type: 'string',
  format: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  unique: true,
}

export const verifyEmailSchema = async (email) => {
  if (!email) return false
  if (typeof email !== emailSchema.type) return false
  if (emailSchema.format.test(email) !== true) return false
  const isEmailRepeated = await isEmailInDB(email)
  if (isEmailRepeated) return false
  return true
}
