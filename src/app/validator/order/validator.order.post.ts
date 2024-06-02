import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';
import Joi from 'joi';

class PostOrderValidator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const itemSchema = Joi.object({
      product_id: Joi.number().required(),
      price: Joi.number().required(),
      quantity: Joi.number().integer().positive().required(),
    });

    const schema = Joi.object({
      items: Joi.array().items(itemSchema).min(1).required(),
    });
    this.bodyHandler(req, res, schema, next);
  }
}

export default PostOrderValidator;
