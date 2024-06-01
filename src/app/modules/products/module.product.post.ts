import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class PostProductModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
		console.log(req.body)
		try {
			const {
				name,
				price,
				category_id,
				fertilizer_id,
				description,
				image_url
			} = req.body;
			const product = await this.Service.Products.PostProduct.call({
				name,
				price,
				category_id,
				fertilizer_id,
				description,
				image_url
			});
			if (!product) {
				return this.badRequest(res);
			}

			return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {});
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

export default PostProductModule;
