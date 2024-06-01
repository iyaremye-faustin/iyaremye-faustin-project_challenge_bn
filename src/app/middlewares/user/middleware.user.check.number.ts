import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class CheckNumberExistMiddleware extends BaseMiddleware {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { telephone } = req.body;

    const user = await this.Service.User.GetUserByNumber.call(telephone);

    if (user) {
      return this.responseHandler(res, this.BAD_REQUEST_CODE, 'Telephone already exists');
    }

    return next();
  }
}

export default CheckNumberExistMiddleware;
