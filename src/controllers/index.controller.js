import { pool } from "#Config/db.js";
import { data as fakeData } from "../../fakeResponse.js";

export const ping = async (req, res) => {
  const [[result]] = await pool.query(`SELECT "pong" AS result`);
  res.json(result);
};

export const data = async (req, res) => {
  const [[result]] = await pool.query("SELECT ?, ?, ?, ? AS result", [
    fakeData.title,
    fakeData.id,
    fakeData.poster_path,
    fakeData.genres,
  ]);
  res.json(result);
};
