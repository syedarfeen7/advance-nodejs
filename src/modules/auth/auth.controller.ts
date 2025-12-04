import { Request, Response } from "express";
import { asyncHandler } from "../../common/middlewares";
import { AuthService } from "./auth.service";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public signup = asyncHandler(async (req: Request, res: Response) => {});
}
