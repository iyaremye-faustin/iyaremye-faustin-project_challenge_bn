import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';
import Util from '@src/core/utils';

class UserSigninModule extends BaseModule {
  private Utils = Util;

  protected async module(req: Request, res: Response): Promise<any> {
    const { login, password }: { login: string; password: string } = req.body;

    const user = await this.Service.User.Signin.call({ login, password });

    if (!user) {
      return this.notFound(res);
    }

    this.Utils.deleteProps(user, ['password', 'salt']);

    const token = this.Utils.Token.generate(user);

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {
      ...user,
      token,
    });
  }
}

export default UserSigninModule;
