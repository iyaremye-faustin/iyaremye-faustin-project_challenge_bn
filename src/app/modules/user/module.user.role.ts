import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetAllRolesModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    const roles = await this.Service.User.GetAllRoles.call();

    if (!roles) {
      return this.badRequest(res);
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      roles
    );
  }
}

export default GetAllRolesModule;
