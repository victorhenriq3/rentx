"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportCateogoryController = void 0;

var _tsyringe = require("tsyringe");

var _ImportCateogoryUseCase = require("./ImportCateogoryUseCase");

class ImportCateogoryController {
  async handle(request, response) {
    const {
      file
    } = request;

    const importCategoryUseCase = _tsyringe.container.resolve(_ImportCateogoryUseCase.ImportCateogoryUseCase);

    await importCategoryUseCase.execute(file);
    return response.send();
  }

}

exports.ImportCateogoryController = ImportCateogoryController;