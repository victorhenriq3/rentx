import { ResetPasswordUserController } from "@modules/accounts/usecases/ResetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordController } from "@modules/accounts/usecases/sendForgotPasswordMail/SendForgotPasswordController";
import { Router } from "express";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordController();
const resetPasswordUserController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordUserController.handle);

export { passwordRoutes };
