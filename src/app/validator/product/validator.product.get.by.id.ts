import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class GetProductByIdValodator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const schema = this.joi.object().keys({
      productId: this.joi.number().required(),
    });

    this.paramsHandler(req, res, schema, next);
  }
}

export default GetProductByIdValodator;
