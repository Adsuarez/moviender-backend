export const passwordSchema = {
  type: "string",
  require: true,
  unique: false,
};

export const verifyPasswordSchema = async (password) => {
  if (!password) return false;
};
