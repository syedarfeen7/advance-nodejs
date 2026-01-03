import { asyncHandler } from "../../common/middlewares";
import { UserService } from "./user.service";
import { Request, Response } from "express";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public getMe = asyncHandler(async (req: Request, res: Response) => {
    const userId = req?.user?.userId;
    const user = await this.userService.getUserById(userId);
    return res.status(200).json({ user });
  });
}
