import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class GetProductByCategoryValodator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const schema = this.joi.object().keys({
      category: this.joi.string().required(),
    });

    this.paramsHandler(req, res, schema, next);
  }
}

export default GetProductByCategoryValodator;
