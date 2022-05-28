import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject("UsersTokenRepository")
    private usersTokenRepository: IUsersTokensRepository
  ) {}
  async execute({ token, password }: IRequest) {
    const userToken = await this.usersTokenRepository.findByRefreshToken(token);

    if (!userToken) {
      throw new AppError("Token invalid!");
    }
  }
}

export { ResetPasswordUserUseCase };
