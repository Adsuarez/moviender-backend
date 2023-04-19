export const passwordSchema = {
  require: true,
  type: 'string',
  format: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  unique: false,
}

export async function verifyPasswordSchema(password) {
  if (!password) return false
  if (typeof password !== passwordSchema.type) return false
  if (passwordSchema.format.test(password) !== true) return false
  return true
}
