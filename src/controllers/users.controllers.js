import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [[rows]] = await pool.query(`SELECT * FROM user WHERE id = ${id}`);

    if (rows === undefined)
      return res.status(404).json({ message: "user not found" });

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { userName, myMovies } = req.body;
    /* Aquí podrían hacerse las validaciones de los datos que llegan */
    const [rows] = await pool.query(
      "INSERT INTO user (userName, myMovies) VALUES (?, ?)",
      [userName, myMovies]
    );
    res.send({
      id: rows.insertId,
      userName,
      myMovies,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, myMovies } = req.body;
    const [result] = await pool.query(
      "UPDATE user SET userName = IFNULL(?, userName), myMovies = IFNULL(?, myMovies) WHERE id = ?",
      [userName, myMovies, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "User not found",
      });

    const [[rows]] = await pool.query("SELECT * FROM user WHERE id = ?", [id]);

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      `DELETE FROM user WHERE id = ${req.params.id}`
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "User not found",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
  This sintax make an error when there are more than one variable to insert
                                  👇                   👇
  `UPDATE user SET userName = ${userName} WHERE id = ${id}`
*/
