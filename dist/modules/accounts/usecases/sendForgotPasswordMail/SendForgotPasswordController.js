"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendForgotPasswordController = void 0;

var _tsyringe = require("tsyringe");

var _SendForgotPasswordUseCase = require("./SendForgotPasswordUseCase");

class SendForgotPasswordController {
  async handle(request, response) {
    const {
      email
    } = request.body;

    const sendForGotPasswordMailUseCase = _tsyringe.container.resolve(_SendForgotPasswordUseCase.SendForgotPasswordUseCase);

    await sendForGotPasswordMailUseCase.execute(email);
    return response.send();
  }

}

exports.SendForgotPasswordController = SendForgotPasswordController;