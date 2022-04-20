import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCateogoryUseCase } from "./ImportCateogoryUseCase";

class ImportCateogoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCateogoryUseCase);

    await importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCateogoryController };
