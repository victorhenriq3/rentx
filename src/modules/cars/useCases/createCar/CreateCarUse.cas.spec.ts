import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUse.case";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "abc-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });

  it("should not to be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "abc-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Car2",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "abc-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should to be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car available",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "abcd-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
