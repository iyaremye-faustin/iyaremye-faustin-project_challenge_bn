import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class ApproveOrderModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    try {
      const {order_id } = req.params;
      const order = await this.Service.Orders.approveOrder.call(order_id);
			if(!order){
				return this.responseHandler(res, this.NOT_FOUND_CODE, 'Order Not Found');
			}
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

export default ApproveOrderModule;
