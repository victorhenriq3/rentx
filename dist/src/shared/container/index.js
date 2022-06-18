"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
var UsersRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UsersRepository");
var CarsImagesRepository_1 = require("@modules/cars/infra/typeorm/repositories/CarsImagesRepository");
var CarsRepository_1 = require("@modules/cars/infra/typeorm/repositories/CarsRepository");
var CategoriesRepository_1 = require("@modules/cars/infra/typeorm/repositories/CategoriesRepository");
var SpecificationRepository_1 = require("@modules/cars/infra/typeorm/repositories/SpecificationRepository");
var RentalsRepository_1 = require("@modules/rentals/infra/typeorm/repositories/RentalsRepository");
var tsyringe_1 = require("tsyringe");
require("@shared/container/providers");
var UsersTokenRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UsersTokenRepository");
// ICategoryRepository
tsyringe_1.container.registerSingleton("CategoriesRepository", CategoriesRepository_1.CategoriesRepository);
tsyringe_1.container.registerSingleton("SpecificationsRepository", SpecificationRepository_1.SpecificationsRepository);
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton("CarsRepository", CarsRepository_1.CarsRespository);
tsyringe_1.container.registerSingleton("CarsImageRepository", CarsImagesRepository_1.CarsImagesRepository);
tsyringe_1.container.registerSingleton("RentalsRepository", RentalsRepository_1.RentalsRepository);
tsyringe_1.container.registerSingleton("UsersTokenRepository", UsersTokenRepository_1.UsersTokenRepository);
