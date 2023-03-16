import express from "express";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json()); //transformo los datos en json para que NodeJs los pueda reconocer
app.use(indexRoutes);
app.use("/api", usersRoutes);
app.use((req, res, next) => {});

app.listen(3000);
console.log("Server is running on port 3000");
