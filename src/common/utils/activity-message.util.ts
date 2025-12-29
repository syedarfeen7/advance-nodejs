import { UserActionEnum } from "../enums/user-activity.enum";
import { parseUserAgent } from "./user-agent.util";

export const getActivityMessage = (activity: any): string => {
  const { action, userAgent, metadata } = activity;
  const { browser, os } = parseUserAgent(userAgent);

  const deviceInfo =
    browser && os
      ? ` from ${browser} on ${os}`
      : browser
      ? ` from ${browser}`
      : "";

  switch (action) {
    case UserActionEnum.REGISTER:
      return "You created your account";

    case UserActionEnum.LOGIN:
      return `You logged in${deviceInfo}`;

    case UserActionEnum.LOGOUT:
      return "You logged out";

    case UserActionEnum.FORGOT_PASSWORD:
      return "You requested a password reset";

    case UserActionEnum.RESET_PASSWORD:
      return "You reset your password";

    case UserActionEnum.EMAIL_VERIFIED:
      return "You verified your email address";

    case UserActionEnum.PROFILE_UPDATED:
      return "You updated your profile";

    case UserActionEnum.APPOINTMENT_CREATED:
      return "You booked an appointment";

    case UserActionEnum.APPOINTMENT_CANCELLED:
      return "You cancelled an appointment";

    default:
      return "You performed an action";
  }
};
