import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/usersRepositoyInMemory";
import { UsersTokenRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";

import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderImMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";

import { SendForgotPasswordUseCase } from "./SendForgotPasswordUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordUseCase;
let usersRepositoryInMemory: UserRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokenRepositoryInMemory: UsersTokenRepositoryInMemory;
let mailProvider: MailProviderImMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokenRepositoryInMemory = new UsersTokenRepositoryInMemory();
    mailProvider = new MailProviderImMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordUseCase(
      usersRepositoryInMemory,
      usersTokenRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  test("Should be able to send a forgot password email to user", async () => {
    await usersRepositoryInMemory.create({
      driver_license: "563840",
      email: "ki@lunsumuci.sz",
      name: "Ina Lloyd",
      password: "123456",
    });
  });
});
