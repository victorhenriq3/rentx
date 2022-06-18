"use strict";

var _UsersRepository = require("../../modules/accounts/infra/typeorm/repositories/UsersRepository");

var _CarsImagesRepository = require("../../modules/cars/infra/typeorm/repositories/CarsImagesRepository");

var _CarsRepository = require("../../modules/cars/infra/typeorm/repositories/CarsRepository");

var _CategoriesRepository = require("../../modules/cars/infra/typeorm/repositories/CategoriesRepository");

var _SpecificationRepository = require("../../modules/cars/infra/typeorm/repositories/SpecificationRepository");

var _RentalsRepository = require("../../modules/rentals/infra/typeorm/repositories/RentalsRepository");

var _tsyringe = require("tsyringe");

require("./providers");

var _UsersTokenRepository = require("../../modules/accounts/infra/typeorm/repositories/UsersTokenRepository");

/* eslint-disable import/no-unresolved */
// ICategoryRepository
_tsyringe.container.registerSingleton("CategoriesRepository", _CategoriesRepository.CategoriesRepository);

_tsyringe.container.registerSingleton("SpecificationsRepository", _SpecificationRepository.SpecificationsRepository);

_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UsersRepository);

_tsyringe.container.registerSingleton("CarsRepository", _CarsRepository.CarsRespository);

_tsyringe.container.registerSingleton("CarsImageRepository", _CarsImagesRepository.CarsImagesRepository);

_tsyringe.container.registerSingleton("RentalsRepository", _RentalsRepository.RentalsRepository);

_tsyringe.container.registerSingleton("UsersTokenRepository", _UsersTokenRepository.UsersTokenRepository);