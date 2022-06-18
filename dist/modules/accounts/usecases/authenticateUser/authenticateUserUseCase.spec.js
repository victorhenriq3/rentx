"use strict";

var _usersRepositoyInMemory = require("../../repositories/in-memory/usersRepositoyInMemory");

var _UsersTokensRepositoryInMemory = require("../../repositories/in-memory/UsersTokensRepositoryInMemory");

var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");

var _AppError = require("../../../../shared/errors/AppError");

var _CreateUserUseCase = require("../createUser/CreateUserUseCase");

var _authenticaseUserUseCase = require("./authenticaseUserUseCase");

let authenticateUserUseCase;
let userTokensRepositoryInMemory;
let usersRepositoryInMemory;
let createUserUseCase;
let dateProvider;
describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _usersRepositoyInMemory.UserRepositoryInMemory();
    userTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokenRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    authenticateUserUseCase = new _authenticaseUserUseCase.AuthenticateUserUseCase(usersRepositoryInMemory, userTokensRepositoryInMemory, dateProvider);
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(usersRepositoryInMemory);
  });
  it("should be able to authenticate an user", async () => {
    const user = {
      driver_license: "0909090",
      email: "user@test.com",
      password: "1234",
      name: "user test"
    };
    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });
  it("should not be able to authenticate an nonexistent user", async () => {
    await expect(authenticateUserUseCase.execute({
      email: "false@email.com",
      password: "123123"
    })).rejects.toEqual(new _AppError.AppError("Email or password incorrect"));
  });
  it("should not be able authenticate with incorrect password", async () => {
    const user = {
      driver_license: "99999",
      email: "user@user.com",
      password: "1234",
      name: "user test error"
    };
    await createUserUseCase.execute(user);
    await expect(authenticateUserUseCase.execute({
      email: user.email,
      password: "incorrect password"
    })).rejects.toEqual(new _AppError.AppError("Email or password incorrect"));
  });
});