import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class GetAllOrdersModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    const orders = await this.Service.Orders.GetAll.call();

    if (!orders) {
      return this.badRequest(res);
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,
      orders
    );
  }
}

export default GetAllOrdersModule;
