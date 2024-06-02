import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class PostUpdateUserRoleModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    try {
      const { role_name, user_id } = req.body;
      const role = await this.Service.User.GetRoleByName.call(role_name);
      if (!role) {
        return this.responseHandler(res, this.NOT_FOUND_CODE, 'Role Not Found');
      }
      const user = await this.Service.User.GetUserById.call(user_id);
      if (!user) {
        return this.responseHandler(res, this.NOT_FOUND_CODE, 'User Not Found');
      }
      await this.Service.User.UpdateUser.call({
        role_id: role.role_id,
        user_id: user.user_id,
      });
      return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, []);
    } catch (error) {
      return this.responseHandler(
        res,
        this.INTERNAL_SERVER_ERROR_CODE,
        'Internal Server Error',
        []
      );
    }
  }
}

export default PostUpdateUserRoleModule;
