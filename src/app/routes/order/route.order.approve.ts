import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';

class ApproveOrderRoute implements IRoute {
  path = '/orders';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/:order_id/approve`).put(
      (req: Request, res: Response) =>
        Modules.OrderModules.ApproveOrder.execute(req, res)
    );
  }
}

export default ApproveOrderRoute;
