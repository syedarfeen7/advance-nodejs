import { User } from "../../database";
import { SignupDTO } from "./dtos";

export class AuthService {
  async signup(data: SignupDTO) {
    const { name, email, password } = data;

    const existing = await User.findOne({ email });
    if (existing) throw new Error("Email already exists");

    const user = await User.create({
      name,
      email,
      password,
    });

    return user;
  }
}
