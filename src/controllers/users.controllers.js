import { pool } from "#Config/db.js";
import { notFound } from "#Helpers/notFound.js";

export const getUsers = (req, res, next) => {
  pool
    .query("SELECT * FROM user")
    .then(([rows]) => res.json(rows))
    .catch(next);
};

export const getUser = (req, res, next) => {
  const { id } = req.params;

  if (/[a-zA-Z]/g.test(id)) return notFound(res, "user");

  pool
    .query(`SELECT * FROM user WHERE id = ${id}`)
    .then(([[rows]]) => {
      if (rows === undefined) return notFound(res, "user");
      return res.json(rows);
    })
    .catch(next);
};

export const createUser = (req, res, next) => {
  const { userName, email, myMovies, schedule } = req.body;
  pool
    .query(
      "INSERT INTO user (userName, email, myMovies, schedule) VALUES (?, ?, ?, ?)",
      [userName, email, myMovies, schedule]
    )
    .then(([rows]) =>
      res.status(201).json({
        id: rows.insertId,
        userName,
        email,
        myMovies,
        schedule,
      })
    )
    .catch(next);
};

export const updateUser = (req, res, next) => {
  const { id } = req.params;
  const { userName, myMovies, schedule } = req.body;
  if (/[a-zA-Z]/g.test(id)) return notFound(res, "user");
  pool
    .query(
      "UPDATE user SET userName = IFNULL(?, userName), myMovies = IFNULL(?, myMovies), schedule = IFNULL(?, schedule) WHERE id = ?",
      [userName, myMovies, schedule, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) return notFound(res, "user");
      pool
        .query("SELECT * FROM user WHERE id = ?", [id])
        .then(([[rows]]) => res.json(rows))
        .catch(next);
    })
    .catch(next);
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (/[a-zA-Z]/g.test(id)) return notFound(res, "user");
  pool
    .query("DELETE FROM user WHERE id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) return notFound(res, "user");
      res.sendStatus(204);
    })
    .catch(next);
};
