"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesRoutes = void 0;

var _CreateCategoyController = require("../../../../modules/cars/useCases/createCategory/CreateCategoyController");

var _ImportCategoryController = require("../../../../modules/cars/useCases/importCategory/ImportCategoryController");

var _ListCategoriesController = require("../../../../modules/cars/useCases/listCategory/ListCategoriesController");

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _ensureAdmin = require("../middlewares/ensureAdmin");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const categoriesRoutes = (0, _express.Router)();
exports.categoriesRoutes = categoriesRoutes;
const upload = (0, _multer.default)({
  dest: "./tmp"
});
const createCategoryController = new _CreateCategoyController.CreateCategoryController();
const importCateogoryController = new _ImportCategoryController.ImportCateogoryController();
const listCategoriesController = new _ListCategoriesController.ListCategoriesController();
categoriesRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createCategoryController.handle);
categoriesRoutes.post("/import", upload.single("file"), importCateogoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);