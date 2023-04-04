export const passwordSchema = {
  require: true,
  type: "string",
  format: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
  unique: false,
};

export const verifyPasswordSchema = async (password) => {
  if (!password) return false;
  if (typeof password !== passwordSchema.type) return false;
  if (!passwordSchema.format.test(password)) return false;
  return true;
};
