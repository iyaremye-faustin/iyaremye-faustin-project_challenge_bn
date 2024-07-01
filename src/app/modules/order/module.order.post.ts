import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class PostOrderModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    try {
      const { user }: any = req;
      const { land_size_acre, total_amount } = req.body;
      const order: any = await this.Service.Orders.PostOrder.call({
        farmer_id: user.user_id,
        land_size_acre: land_size_acre,
        total_amount: total_amount,
      });
      if (!order) {
        return this.badRequest(res);
      }
      const { items } = req.body;
      for (const item of items) {
        await this.Service.Orders.NewOrderItem.call({
          order_id: order.order_id,
          product_id: item.product_id,
          price: item.price,
          quantity: item.quantity,
        });
      }
      return this.responseHandler(res, this.CREATED_CODE, this.SUCCESS_MSG, {});
    } catch (error) {
      return this.responseHandler(
        res,
        this.INTERNAL_SERVER_ERROR_CODE,
        'Internal Error',
        {}
      );
    }
  }
}

export default PostOrderModule;
