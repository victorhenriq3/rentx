import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDT0";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { getRepository, Repository } from "typeorm";

import { Car } from "../entities/Car";

class CarsRespository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    await this.repository.save(car);

    return car;
  }

  async finfByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      license_plate,
    });

    return car;
  }
}

export { CarsRespository };
