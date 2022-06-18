"use strict";

var _AppError = require("../../../../shared/errors/AppError");

var _CategoryRepositorieInMemory = require("../../repositories/in-memory/CategoryRepositorieInMemory");

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

let createCategoryUseCase;
let categoriesRepositoryInMemory;
describe("Create Category", () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new _CategoryRepositorieInMemory.CategoriesRepositoryInMemory();
    createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
  });
  it("should be create a new cateogry", async () => {
    const cateogry = {
      name: "Cateogory teste",
      description: "Category description test"
    };
    await createCategoryUseCase.execute({
      name: cateogry.name,
      description: cateogry.description
    });
    const categoryCreated = await categoriesRepositoryInMemory.findByName(cateogry.name);
    expect(categoryCreated).toHaveProperty("id");
  });
  it("should not be able a new cateogry with same name", async () => {
    const cateogry = {
      name: "Cateogory teste",
      description: "Category description test"
    };
    await createCategoryUseCase.execute({
      name: cateogry.name,
      description: cateogry.description
    });
    await expect(createCategoryUseCase.execute({
      name: cateogry.name,
      description: cateogry.description
    })).rejects.toEqual(new _AppError.AppError("Category already existis"));
  });
});