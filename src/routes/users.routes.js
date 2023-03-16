import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUser);

router.post("/users", createUser);

router.put("/users", updateUser);

router.delete("/users", deleteUser);

export default router;
