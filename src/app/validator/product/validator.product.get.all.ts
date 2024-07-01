import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class GetAllProductsValidator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const schema = this.joi.object().keys({
      page: this.joi.number().min(1).required(),
      limit: this.joi.number().min(1).max(10).required(),
    });

    this.queryHandler(req, res, schema, next);
  }
}

export default GetAllProductsValidator;
