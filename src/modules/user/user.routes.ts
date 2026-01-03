import { Router } from "express";
import { userController } from "./index";
import { authMiddleware } from "../../common/middlewares/auth.middleware";

const router = Router();

router.get("/me", authMiddleware, userController.getMe);

export default router;
