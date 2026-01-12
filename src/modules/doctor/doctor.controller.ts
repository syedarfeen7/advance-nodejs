import { HTTPStatusCodes } from "../../config/http.config";
import { asyncHandler } from "../../shared/middlewares";
import { doctorProfileSchema } from "../../shared/validators/doctor.validator";
import { DoctorService } from "./doctor.service";
import { Request, Response } from "express";

export class DoctorController {
  private doctorService: DoctorService;

  constructor(doctorService: DoctorService) {
    this.doctorService = doctorService;
  }

  completeProfile = asyncHandler(async (req: Request, res: Response) => {
    const { error, value } = doctorProfileSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(HTTPStatusCodes.BAD_REQUEST).json({
        message: "Invalid input",
        errors: error.details.map((d: any) => d?.message),
      });
    }
    const profile = await this.doctorService.createOrUpdateProfile(
      req.user!.userId,
      req.body
    );

    res.status(200).json({
      message: "Profile completed successfully",
      profile,
    });
  });
}
