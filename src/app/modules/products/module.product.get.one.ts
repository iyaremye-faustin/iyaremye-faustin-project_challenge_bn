import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetOneProductModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    const { productId } = req.params;

    const product = await this.Service.Products.GetOne.call(productId);

    if (!product) {
      return this.badRequest(res);
    }

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {
      ...product,
    });
  }
}

export default GetOneProductModule;
