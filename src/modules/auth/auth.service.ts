import { VerificationEnum } from "../../common/enums/verification-code.enum";
import { fortyFiveMinutesFromNow } from "../../common/utils/date-time";
import { config } from "../../config/env";
import { HTTPStausMessages } from "../../config/http.config";
import { User } from "../../database";
import VerificationCodeModel from "../../database/models/verification.model";
import { SignupDTO } from "./dtos";

export class AuthService {
  async signup(data: SignupDTO) {
    const { name, email, password } = data;

    const existing = await User.findOne({ email });
    if (existing) throw new Error(HTTPStausMessages.ALREADY_EXISTS);

    const user = await User.create({
      name,
      email,
      password,
    });

    const verificationCode = await VerificationCodeModel.create({
      userId: user?._id,
      type: VerificationEnum.EMAIL_VERIFICATION,
      expiresAt: fortyFiveMinutesFromNow(),
    });

    const verificationLink = `${config.APP_ORIGIN}/verify-email?code=${verificationCode.code}`;

    // TODO: Send verification email
    console.log(
      `Send verification email to ${email} with link: ${verificationLink}`
    );

    return user;
  }
}
