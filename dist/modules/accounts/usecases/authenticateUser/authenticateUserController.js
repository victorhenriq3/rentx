"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserController = void 0;

var _tsyringe = require("tsyringe");

var _authenticaseUserUseCase = require("./authenticaseUserUseCase");

class AuthenticateUserController {
  async handle(request, response) {
    const {
      password,
      email
    } = request.body;

    const authenticateUserUseCase = _tsyringe.container.resolve(_authenticaseUserUseCase.AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({
      password,
      email
    });
    return response.json(token);
  }

}

exports.AuthenticateUserController = AuthenticateUserController;