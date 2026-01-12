import { Router } from "express";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { UserRole } from "../../shared/enums/user-role.enum";
import { roleGuard } from "../../shared/middlewares/role.guard";
import { doctorController } from "./index";

const router = Router();

router.post(
  "/profile",
  authMiddleware,
  roleGuard(UserRole.DOCTOR),
  doctorController.completeProfile
);
export default router;
