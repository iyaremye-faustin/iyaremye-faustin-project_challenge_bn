import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';
import Middlewares from '@src/app/middlewares';

class ApproveOrderRoute implements IRoute {
  path = '/orders';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/:order_id/approve`).put(
      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.CheckUserIsAdminOrStoreKeeper.run(
          req,
          res,
          next
        ),

      (req: Request, res: Response) =>
        Modules.OrderModules.ApproveOrder.execute(req, res)
    );
  }
}

export default ApproveOrderRoute;
