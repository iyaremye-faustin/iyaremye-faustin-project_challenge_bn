import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';
import Util from '@src/core/utils';

class CheckUserAuthenticatedMiddleware extends BaseMiddleware {
	private Utils = Util;

  protected async middleware(
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const token = this.Utils.Token.extract(req);

    if (!token) {
      return this.responseHandler(res, this.UNAUTHORIZED_CODE, 'Please Login');
    }

    const decoded = this.Utils.Token.decode(token);

    if (decoded.errors) {
      return this.responseHandler(res, this.UNAUTHORIZED_CODE, 'Invalid Authentication');
    }
    req.user = decoded.payload;

    return next();
  }
}

export default CheckUserAuthenticatedMiddleware;
