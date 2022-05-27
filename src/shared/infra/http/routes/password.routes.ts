import { SendForgotPasswordController } from "@modules/accounts/usecases/sendForgotPasswordMail/SendForgotPasswordController";
import { Router } from "express";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);

export { passwordRoutes };
