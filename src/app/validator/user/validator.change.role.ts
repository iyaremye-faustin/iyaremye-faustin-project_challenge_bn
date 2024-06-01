import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class ChangeRoleValidator extends BaseMiddleware {
  async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    const schema = this.joi.object().keys({
      role_name: this.joi.string().required(),
      user_id: this.joi.number().required(),
    });
    this.bodyHandler(req, res, schema, next);
  }
}

export default ChangeRoleValidator;
