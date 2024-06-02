import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';
import Middlewares from '@src/app/middlewares';

class GetAllOrdersRoute implements IRoute {
  path = '/orders';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router
      .route(`${this.path}`)
      .get(
				(req: Request, res: Response, next: NextFunction) =>
					Middlewares.UserMiddlewares.CheckUserAuthenticated.run(req, res, next),
				(req: Request, res: Response) =>
        Modules.OrderModules.GetOrders.execute(req, res)
      );
  }
}

export default GetAllOrdersRoute;
