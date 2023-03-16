import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser); //:id es el parámetro que puedo obtener gracias a express

router.post("/users", createUser);

router.patch("/users/:id", updateUser); //patch es una forma establecida por REST para referirme a los PUT que sean parciales

router.delete("/users/:id", deleteUser);

export default router;
