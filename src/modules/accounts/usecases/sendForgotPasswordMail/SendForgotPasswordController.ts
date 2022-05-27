import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendForgotPasswordUseCase } from "./SendForgotPasswordUseCase";

class SendForgotPasswordController {
  async execute(request: Request, response: Response): Promise<Response> {
    const sendForGotPasswordMailUseCase = container.resolve(
      SendForgotPasswordUseCase
    );
  }
}

export { SendForgotPasswordController };
