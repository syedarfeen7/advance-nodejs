import { Router } from "express";
import { activityController } from ".";
import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { roleGuard } from "../../common/middlewares/role.guard";
import { UserRole } from "../../common/enums/user-role.enum";

const router = Router();

router.get(
  "/",
  authMiddleware,
  roleGuard(UserRole.ADMIN),
  activityController.getAllUserActivities
);

router.get(
  "/user",
  authMiddleware,
  activityController.getUserActivities
);

export default router;
