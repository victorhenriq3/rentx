import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDto({
    email,
    name,
    id,
    avatar,
    driver_license,
  }: User): IUserResponseDTO {
    return {
      email,
      name,
      id,
      avatar,
      driver_license,
    };
  }
}

export { UserMap };
