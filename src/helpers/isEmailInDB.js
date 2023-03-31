import { pool } from "#Config/db.js";

export async function isEmailInDB(email) {
  pool
    .query("SELECT email FROM user WHERE email = ?", [email])
    .then(([[rows]]) => {
      console.log({ rows });
      if (rows === undefined) return false;
      return true;
    })
    .catch((error) => {
      console.error(error);
    });
}
