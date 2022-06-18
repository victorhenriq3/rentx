"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var DayjsDateProvider_1 = require("./DateProvider/implementations/DayjsDateProvider");
var EtherealMailProvider_1 = require("./MailProvider/implementations/EtherealMailProvider");
var LocalStorageProvider_1 = require("./StorageProvider/implementations/LocalStorageProvider");
var S3StorageProvider_1 = require("./StorageProvider/implementations/S3StorageProvider");
tsyringe_1.container.registerSingleton("DayjsDateProvider", DayjsDateProvider_1.DayjsDateProvider);
tsyringe_1.container.registerInstance("EtherealMailProvider", new EtherealMailProvider_1.EtherealMailProvider());
var diskStorage = {
    local: LocalStorageProvider_1.LocalStorageProvider,
    s3: S3StorageProvider_1.S3StorageProvider,
};
tsyringe_1.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);
