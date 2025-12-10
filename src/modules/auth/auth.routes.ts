import { Router } from "express";
import { authController } from "./index";

const router = Router();

router.post("/signup", authController.signup);
router.post("/verify/email", authController.verifyEmail);

export default router;
