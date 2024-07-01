import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetAllProductsModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    try {
      const { query } = req;
      const { page, limit } = query;
      const products = await this.Service.Products.GetAllProducts.call({
        page,
        limit,
      });
      if (!products) {
        return this.badRequest(res);
      }
      const count = await this.Service.Products.CountProducts.call();
      return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {
        products,
        count,
      });
    } catch (error) {
      return this.responseHandler(
        res,
        this.INTERNAL_SERVER_ERROR_CODE,
        'Internal Server Error',
        []
      );
    }
  }
}

export default GetAllProductsModule;
