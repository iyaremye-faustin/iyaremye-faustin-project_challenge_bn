import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';
import Util from '@src/core/utils';

class UserSignupModule extends BaseModule {
  private Utils = Util;

  protected async module(req: Request, res: Response): Promise<any> {
    try {
      const { names, telephone, email, password, username, idpassportnumber } =
        req.body;

      const user = await this.Service.User.Signup.call({
        full_name: names,
        phone_number: telephone,
        email,
        password,
        user_name: username,
        id_passport_number: idpassportnumber,
      });

      if (!user) {
        return this.responseHandler(
          res,
          this.BAD_REQUEST_CODE,
          this.BAD_REQUEST_MSG
        );
      }

      this.Utils.deleteProps(user, ['password', 'salt']);

      const token = await this.Utils.Token.generate(user);

      return this.responseHandler(res, this.CREATED_CODE, this.CREATED_MSG, {
        ...user,
        token,
      });
    } catch (error) {
      console.log(error);
      return this.responseHandler(
        res,
        this.INTERNAL_SERVER_ERROR_CODE,
        'Internal Server Error',
        []
      );
    }
  }
}

export default UserSignupModule;
