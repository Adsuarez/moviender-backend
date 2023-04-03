import { pool } from "#Config/db.js";

export async function isEmailInDB(emailToSearch) {
  pool
    .query("SELECT email FROM user WHERE email = ?", [emailToSearch])
    .then(([[rows]]) => {
      console.log(rows);
      if (typeof rows === "object") return true;
      return false;
    })
    .catch((error) => {
      console.error(error);
    });
}
