import bcrypt from "bcrypt";

export async function encryptPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}
