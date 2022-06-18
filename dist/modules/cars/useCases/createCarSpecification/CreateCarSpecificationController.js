"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarSpecificationController = void 0;

var _tsyringe = require("tsyringe");

var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");

class CreateCarSpecificationController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      specifications_id
    } = request.body;

    const createCarSpecficationUseCase = _tsyringe.container.resolve(_CreateCarSpecificationUseCase.CreateCarSpecificationUseCase);

    const cars = await createCarSpecficationUseCase.execute({
      car_id: id,
      specifications_id
    });
    return response.json(cars);
  }

}

exports.CreateCarSpecificationController = CreateCarSpecificationController;