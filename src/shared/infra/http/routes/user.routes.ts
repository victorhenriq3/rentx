import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/usecases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/usecases/updateUserAvatar/UpdateUserAvatarController";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
