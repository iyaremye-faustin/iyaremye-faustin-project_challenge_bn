import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class PostProductModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    try {
      const {
        name,
        price,
        category_id,
        fertilizer_id,
        description,
        image_url,
				quantity_per_acre
      } = req.body;
			if (category_id == 2 && (quantity_per_acre > 3)) {
				return this.responseHandler(res, this.BAD_REQUEST_CODE, 'Fertilizer quantity cannot exceed 3Kgs Per Acre', {});
			}
			if (category_id == 1 && (quantity_per_acre > 1)) {
				return this.responseHandler(res, this.BAD_REQUEST_CODE, 'Seeds quantity cannot exceed 1Kg Per  Acre', {});
			}
			if (category_id == 2 && !fertilizer_id) {
				return this.responseHandler(res, this.BAD_REQUEST_CODE, 'Fertilizer is required', {});
			}
      const product = await this.Service.Products.PostProduct.call({
        name,
        price,
        category_id,
        fertilizer_id,
        description,
        image_url,
				quantity_per_acre
      });
      if (!product) {
        return this.badRequest(res);
      }
      return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {});
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

export default PostProductModule;
