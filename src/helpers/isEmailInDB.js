import { pool } from "#Config/db.js";

export async function isEmailInDB(email) {
  return pool
    .query("SELECT email FROM user WHERE email = ?", [email])
    .then(([[rows]]) => {
      if (rows) return true;
      return false;
    })
    .catch((error) => {
      console.log("from isEmailInDB");
      console.error(error);
    });
}
