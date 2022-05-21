import { AuthenticateUserController } from "@modules/accounts/usecases/authenticateUser/authenticateUserController";
import { RefreshTokenController } from "@modules/accounts/usecases/refreshToken/refreshTokenController";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };
