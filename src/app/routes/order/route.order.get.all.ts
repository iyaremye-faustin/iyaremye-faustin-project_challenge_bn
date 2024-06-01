import { Router, Request, Response } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';

class GetAllOrdersRoute implements IRoute {
  path = '/orders';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router
      .route(`${this.path}`)
      .get((req: Request, res: Response) =>
        Modules.OrderModules.GetOrders.execute(req, res)
      );
  }
}

export default GetAllOrdersRoute;
