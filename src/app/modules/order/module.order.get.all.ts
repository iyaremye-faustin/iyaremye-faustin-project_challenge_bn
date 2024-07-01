import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetAllOrdersModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    try {
      const { user, query }: any = req;
      const { user_id } = user;
      const { page, limit } = query;
      const { role_name } = user.role;
      const role = await this.Service.User.GetRoleByName.call(role_name);
      if (role.role_name == 'farmer') {
        const orders = await this.Service.Orders.OrdersByUser.call({
          user_id,
          page,
          limit,
        });
        return this.responseHandler(
          res,
          this.SUCCESS_CODE,
          this.SUCCESS_MSG,
          orders
        );
      }

      const orders = await this.Service.Orders.GetAll.call({
        user_id,
        page,
        limit,
      });
      if (!orders) {
        return this.badRequest(res);
      }
      const count = await this.Service.Orders.CountOrders.call();
      return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {
        orders,
        count,
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

export default GetAllOrdersModule;
