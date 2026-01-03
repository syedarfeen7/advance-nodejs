import { HTTPStausMessages } from "../../config/http.config";
import { User } from "../../database";

export class UserService {
  async getUserById(userId: string | undefined) {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw new Error(HTTPStausMessages.USER_NOT_FOUND);
    }
    return user;
  }
}
