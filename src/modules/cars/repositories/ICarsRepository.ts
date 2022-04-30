import { ICreateCarDTO } from "../dtos/ICreateCarDT0";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  finfByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository };
