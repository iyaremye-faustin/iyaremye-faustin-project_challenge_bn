import { Request, Response } from 'express';
import BaseModule from '@src/core/base/baseModule';

class PostOrderModule extends BaseModule {
  protected async module(req: Request, res: Response): Promise<any> {
    const { user }: any = req;
    const order = await this.Service.Orders.PostOrder.call({
      farmer_id: user.user_id,
    });
    if (!order) {
      return this.badRequest(res);
    }

    return this.responseHandler(res, this.CREATED_CODE, this.SUCCESS_MSG, {});
  }
}

export default PostOrderModule;
