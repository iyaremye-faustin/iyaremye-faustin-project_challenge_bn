import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class CheckEmailExistMiddleware extends BaseMiddleware {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { email } = req.body;

    const user = await this.Service.User.GetUserByEmail.call(email);

    if (user) {
      return this.responseHandler(res, this.BAD_REQUEST_CODE, 'Email Already Exists');
    }

    return next();
  }
}

export default CheckEmailExistMiddleware;
