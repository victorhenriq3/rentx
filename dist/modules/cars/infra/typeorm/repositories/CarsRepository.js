"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarsRespository = void 0;

var _typeorm = require("typeorm");

var _Car = require("../entities/Car");

class CarsRespository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Car.Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    specifications,
    name,
    id
  }) {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      specifications,
      name,
      id
    });
    await this.repository.save(car);
    return car;
  }

  async finfByLicensePlate(license_plate) {
    const car = await this.repository.findOne({
      license_plate
    });
    return car;
  }

  async findAvailable(brand, category_id, name) {
    const carsQuery = await this.repository.createQueryBuilder("c").where("available = :available", {
      available: true
    });

    if (brand) {
      carsQuery.andWhere("c.brand = :brand", {
        brand
      });
    }

    if (name) {
      carsQuery.andWhere("c.name = :name", {
        name
      });
    }

    if (category_id) {
      carsQuery.andWhere("c.category_id = :category_id", {
        category_id
      });
    }

    const cars = await carsQuery.getMany();
    return cars;
  }

  async findById(id) {
    const car = await this.repository.findOne(id);
    return car;
  }

  async updateAvailable(id, available) {
    await this.repository.createQueryBuilder().update().set({
      available
    }).where("id = :id").setParameters({
      id
    }).execute(); // update cars set available = :true/false where id = :id
  }

}

exports.CarsRespository = CarsRespository;