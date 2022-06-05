import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/usecases/createUser/CreateUserController";
import { ProfileUserController } from "@modules/accounts/usecases/profileUser/ProfileUserController";
import { UpdateUserAvatarController } from "@modules/accounts/usecases/updateUserAvatar/UpdateUserAvatarController";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

const profileUserController = new ProfileUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

usersRoutes.get("/", ensureAuthenticated, profileUserController.handle);

export { usersRoutes };
