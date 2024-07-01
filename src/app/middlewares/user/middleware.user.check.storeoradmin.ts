import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';
import Util from '@src/core/utils';

class CheckUserIsStoreKeeperOrAdminMiddleware extends BaseMiddleware {
  private Utils = Util;

  protected async middleware(
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const token = this.Utils.Token.extract(req);

    if (!token) {
      return this.responseHandler(
        res,
        this.UNAUTHORIZED_CODE,
        'Not Authorized'
      );
    }

    const decoded = this.Utils.Token.decode(token);

    if (decoded.errors) {
      return this.responseHandler(
        res,
        this.UNAUTHORIZED_CODE,
        'Invalid Authentication'
      );
    }
    const { payload } = decoded;
    if (
      payload.role.role_name !== 'administrator' ||
      payload.role.role_name !== 'store keeper'
    ) {
      return this.responseHandler(
        res,
        this.UNAUTHORIZED_CODE,
        'Only Administrator or store keeper can perform the operation'
      );
    }
    req.user = payload;
    return next();
  }
}

export default CheckUserIsStoreKeeperOrAdminMiddleware;
