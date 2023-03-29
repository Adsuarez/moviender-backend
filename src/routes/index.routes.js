import { Router } from "express";
import { ping, data } from "#Controllers/index.controller.js";

const router = Router();

router.get("/ping", ping);
router.get("/data", data);

export default router;
