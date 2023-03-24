import express from "express";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); //Transform datas in JSON to NodeJS can recognize them.
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.body);
  console.log("------");
  next();
}); //this is a way to intercept any query
app.use(indexRoutes);
app.use("/api", usersRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
}); //this is a middleware function

export default app;
