import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetAllProductsModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
		try {
			const products = await this.Service.Products.GetAllProducts.call();
			if (!products) {
				return this.badRequest(res);
			}
			return this.responseHandler(res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      products
    );
		} catch (error) {
			return this.responseHandler(
				res,
				this.INTERNAL_SERVER_ERROR_CODE,
				"Internal Server Error",
				[]
			);
		}
  }
}

export default GetAllProductsModule;
