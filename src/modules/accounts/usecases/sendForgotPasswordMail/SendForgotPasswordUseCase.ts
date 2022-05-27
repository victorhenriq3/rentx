import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";

import { AppError } from "@shared/errors/AppError";

@injectable()
class SendForgotPasswordUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UsersTokenRepository")
    private usersTokenRepository: IUsersTokensRepository
  ) {}
  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Users does not exist");
    }

    const token = uuidV4();
  }
}

export { SendForgotPasswordUseCase };
