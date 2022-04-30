import { ICreateCarDTO } from "../dtos/ICreateCarDT0";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository };
