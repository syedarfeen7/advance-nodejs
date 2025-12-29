import { getActivityMessage } from "../../common/utils/activity-message.util";
import { UserActivity } from "../../database/models/user-activity.model";

interface GetActivitiesInput {
  userId: string | undefined;
  page: number;
  limit: number;
}

export class ActivityService {
  async getUserActivities({ userId, page, limit }: GetActivitiesInput) {
    const skip = (page - 1) * limit;

    const [activities, total] = await Promise.all([
      UserActivity.find({ userId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      UserActivity.countDocuments({ userId }),
    ]);

    return {
      items: activities?.map((activity) => ({
        id: activity._id,
        message: getActivityMessage(activity),
        createdAt: activity.createdAt,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
