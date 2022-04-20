import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/usecases/authenticateUser/authenticateUserController";

const authenticateRoutes = Router();

const authenticaseUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticaseUserController.handle);

export { authenticateRoutes };
