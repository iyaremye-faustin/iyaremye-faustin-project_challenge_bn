import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class CheckProductCategoryExistMiddleware extends BaseMiddleware {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { category_id } = req.body;

    const category = await this.Service.Products.GetOneCategory.call(category_id);

    if (!category) {
      return this.responseHandler(res, this.NOT_FOUND_CODE, 'category not found');
    }

    return next();
  }
}

export default CheckProductCategoryExistMiddleware;
