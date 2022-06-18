"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateRoutes = void 0;

var _authenticateUserController = require("../../../../modules/accounts/usecases/authenticateUser/authenticateUserController");

var _refreshTokenController = require("../../../../modules/accounts/usecases/refreshToken/refreshTokenController");

var _express = require("express");

const authenticateRoutes = (0, _express.Router)();
exports.authenticateRoutes = authenticateRoutes;
const authenticateUserController = new _authenticateUserController.AuthenticateUserController();
const refreshTokenController = new _refreshTokenController.RefreshTokenController();
authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);