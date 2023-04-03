import { isEmailInDB } from "#Helpers/isEmailInDB.js";

export const emailSchema = {
  type: "string",
  require: true,
  unique: true,
  format: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
};

export const verifyEmailSchema = async (email) => {
  console.log("email is not passed");
  if (email === null) return false;
  console.clear();
  console.log("email is passed");
  console.log("email is not in correct format");
  if (typeof email !== emailSchema.type) return false;
  console.clear();
  console.log("email is in correct format");
  console.log("email exist yet in database");
  if (await isEmailInDB(email)) return false;
  console.clear();
  console.log("email not exist in database");
  return true;
};