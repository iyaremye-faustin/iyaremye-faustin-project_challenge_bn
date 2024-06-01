import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetAllCategoriesModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    const categories = await this.Service.Products.GetAllCategories.call();

    if (!categories) {
      return this.badRequest(res);
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      categories
    );
  }
}

export default GetAllCategoriesModule;
