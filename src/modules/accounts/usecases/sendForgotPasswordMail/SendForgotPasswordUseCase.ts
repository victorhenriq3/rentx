import { injectable } from "tsyringe";

@injectable()
class SendForgotPasswordUseCase {
  async execute(email: string) {}
}

export { SendForgotPasswordUseCase };
