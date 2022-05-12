import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createCarSpecficationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const cars = await createCarSpecficationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.json(cars);
  }
}

export { CreateCarSpecificationController };
