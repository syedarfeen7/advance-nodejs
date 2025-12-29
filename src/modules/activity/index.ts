import { ActivityController } from "./activity.controller";
import { ActivityService } from "./activity.service";

const activityService = new ActivityService();
const activityController = new ActivityController(activityService);

export { activityService, activityController };
