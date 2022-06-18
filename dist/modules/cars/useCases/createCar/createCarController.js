"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarController = void 0;

var _tsyringe = require("tsyringe");

var _CreateCarUse = require("./CreateCarUse.case");

class CreateCarController {
  async handle(request, response) {
    const {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    } = request.body;

    const createCarUseCase = _tsyringe.container.resolve(_CreateCarUse.CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });
    return response.status(201).json(car);
  }

}

exports.CreateCarController = CreateCarController;