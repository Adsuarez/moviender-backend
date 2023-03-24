import { Router } from "express";
import { ping, data } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", ping);
router.get("/data", data);

export default router;
