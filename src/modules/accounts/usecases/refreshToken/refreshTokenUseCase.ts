import auth from "@config/auth";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { verify } from "jsonwebtoken";
import { inject } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokenRepository")
    private usersTokenRepository: IUsersTokensRepository
  ) {}
  async execute(token: string) {
    const decode = verify(token, auth.secret_refresh_token) as IPayload;

    const user_id = decode.sub;

    const userToken =
      await this.usersTokenRepository.findByUserIdAndRefreshToken(
        user_id,
        token
      );

    if (!userToken) {
      throw new AppError("Refresh token does not exists!");
    }

    await this.usersTokenRepository.deleteById(userToken.id);
  }
}

export { RefreshTokenUseCase };
