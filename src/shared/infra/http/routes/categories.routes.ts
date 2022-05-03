import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoyController";
import { ImportCateogoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategory/ListCategoriesController";
import { Router } from "express";
import multer from "multer";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCateogoryController = new ImportCateogoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCateogoryController.handle
);

categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
