import { UserRole } from "../../../common/enums/user-role.enum";

export interface SignupDTO {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
