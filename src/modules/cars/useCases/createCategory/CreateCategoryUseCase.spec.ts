import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositorieInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be create a new cateogry", async () => {
    const cateogry = {
      name: "Cateogory teste",
      description: "Category description test",
    };

    await createCategoryUseCase.execute({
      name: cateogry.name,
      description: cateogry.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      cateogry.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able a new cateogry with same name", async () => {
    expect(async () => {
      const cateogry = {
        name: "Cateogory teste",
        description: "Category description test",
      };

      await createCategoryUseCase.execute({
        name: cateogry.name,
        description: cateogry.description,
      });

      await createCategoryUseCase.execute({
        name: cateogry.name,
        description: cateogry.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
