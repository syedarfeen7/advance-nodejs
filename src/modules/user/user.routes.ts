import { Router } from "express";
import { userController } from "./index";

const router = Router();

router.get("/me", userController.getMe);

export default router;
