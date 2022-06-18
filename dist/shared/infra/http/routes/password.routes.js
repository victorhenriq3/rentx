"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordRoutes = void 0;

var _ResetPasswordUserController = require("../../../../modules/accounts/usecases/ResetPasswordUser/ResetPasswordUserController");

var _SendForgotPasswordController = require("../../../../modules/accounts/usecases/sendForgotPasswordMail/SendForgotPasswordController");

var _express = require("express");

const passwordRoutes = (0, _express.Router)();
exports.passwordRoutes = passwordRoutes;
const sendForgotPasswordMailController = new _SendForgotPasswordController.SendForgotPasswordController();
const resetPasswordUserController = new _ResetPasswordUserController.ResetPasswordUserController();
passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordUserController.handle);