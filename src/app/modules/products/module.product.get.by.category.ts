import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetProductByCategoryModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    const { category } = req.params;

    const product = await this.Service.Products.GetByCategory.call(
      category.toLowerCase()
    );

    if (!product) {
      return this.badRequest(res);
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      product
    );
  }
}

export default GetProductByCategoryModule;
