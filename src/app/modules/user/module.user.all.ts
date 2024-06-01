import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetAllUsersModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
		const { user }:any = req;
    const users = await this.Service.User.GetAllUsers.call(user.user_id);
    if (!users) {
      return this.badRequest(res);
    }
		const count = await this.Service.User.CountUsers.call();
    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      {users,count}
    );
  }
}

export default GetAllUsersModule;
