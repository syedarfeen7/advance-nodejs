import { Router } from "express";
import { authController } from "./index";

const router = Router();

router.post("/signup", authController.signup);

export default router;
