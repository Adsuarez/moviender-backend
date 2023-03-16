import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "admintest",
  port: 3306,
  database: "moviender_db",
});
