import { Router } from "express";
import { activityController } from ".";
import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { roleGuard } from "../../common/middlewares/role.guard";
import { UserRole } from "../../common/enums/user-role.enum";

const router = Router();

router.get(
  "/admin/activity",
  authMiddleware,
  roleGuard(UserRole.ADMIN),
  activityController.getMyActivities
);

export default router;
