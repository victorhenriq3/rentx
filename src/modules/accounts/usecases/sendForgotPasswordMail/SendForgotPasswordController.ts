import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendForgotPasswordUseCase } from "./SendForgotPasswordUseCase";

class SendForgotPasswordController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForGotPasswordMailUseCase = container.resolve(
      SendForgotPasswordUseCase
    );

    await sendForGotPasswordMailUseCase.execute(email);

    return response.send();
  }
}

export { SendForgotPasswordController };
