import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';
import Joi from 'joi';

class PostProductValidator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const itemSchema = Joi.object({
      category_id: Joi.number().required(),
      price: Joi.number().required(),
      fertilizer_id: Joi.number().integer().positive(),
      name: this.joi.string().required(),
      image_url: this.joi.string().uri(),
      description: this.joi.string().required(),
      quantity_per_acre: Joi.number().integer().positive().required(),
    });
    this.bodyHandler(req, res, itemSchema, next);
  }
}

export default PostProductValidator;
