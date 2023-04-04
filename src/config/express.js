import express from "express";
import cors from "cors";
import indexRoutes from "#Routes/index.routes.js";
import usersRoutes from "#Routes/users.routes.js";
import { notFound } from "#Helpers/errors.js";

const expressApp = express();
console.clear();
expressApp.use(cors());
expressApp.use(express.json()); //Transform datas in JSON to NodeJS can recognize them.
expressApp.use(express.text());
expressApp.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.body);
  console.log("------");
  next();
}); //this is a way to intercept any query
expressApp.use(indexRoutes);
expressApp.use("/api", usersRoutes);
expressApp.use((req, res, next) => {
  return notFound(res, "endpoint");
});
expressApp.use((error, req, res, next) => {
  console.log("from middleware to errors: ", error.code);
  if (error.name === "CastError")
    return res.status(400).json({
      message: error.message,
    });

  if (error.code === "ER_DUP_ENTRY")
    return res.status(409).json({
      message: error.message,
    });

  return res.status(500).json({
    message: error.message,
  });
});

export default expressApp;
