"use strict";

var _usersRepositoyInMemory = require("../../repositories/in-memory/usersRepositoyInMemory");

var _UsersTokensRepositoryInMemory = require("../../repositories/in-memory/UsersTokensRepositoryInMemory");

var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");

var _MailProviderInMemory = require("../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory");

var _AppError = require("../../../../shared/errors/AppError");

var _SendForgotPasswordUseCase = require("./SendForgotPasswordUseCase");

let sendForgotPasswordMailUseCase;
let usersRepositoryInMemory;
let dateProvider;
let usersTokenRepositoryInMemory;
let mailProvider;
describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _usersRepositoyInMemory.UserRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    usersTokenRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokenRepositoryInMemory();
    mailProvider = new _MailProviderInMemory.MailProviderImMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordUseCase.SendForgotPasswordUseCase(usersRepositoryInMemory, usersTokenRepositoryInMemory, dateProvider, mailProvider);
  });
  test("Should be able to send a forgot password email to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");
    await usersRepositoryInMemory.create({
      driver_license: "563840",
      email: "ki@lunsumuci.sz",
      name: "Ina Lloyd",
      password: "123456"
    });
    await sendForgotPasswordMailUseCase.execute("ki@lunsumuci.sz");
    expect(sendMail).toHaveBeenCalled();
  });
  it("Should not to be to send an email if user does not exists", async () => {
    await expect(sendForgotPasswordMailUseCase.execute("123@123.com")).rejects.toEqual(new _AppError.AppError("Users does not exist"));
  });
  it("should be able to create an users token", async () => {
    const generateTokenEmail = jest.spyOn(usersTokenRepositoryInMemory, "create");
    await usersRepositoryInMemory.create({
      driver_license: "123123",
      email: "1ki@lunsumuci.sz",
      name: "In1a Lloyd",
      password: "12345678"
    });
    await sendForgotPasswordMailUseCase.execute("1ki@lunsumuci.sz");
    expect(generateTokenEmail).toHaveBeenCalled();
  });
});