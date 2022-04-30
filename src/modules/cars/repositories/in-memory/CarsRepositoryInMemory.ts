import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDT0";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  create(data: ICreateCarDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { CarsRepositoryInMemory };
