import { AuthenticateUserController } from "@modules/accounts/usecases/authenticateUser/authenticateUserController";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticaseUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticaseUserController.handle);

export { authenticateRoutes };
