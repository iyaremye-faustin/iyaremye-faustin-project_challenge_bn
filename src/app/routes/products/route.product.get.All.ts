import { Router, Request, Response } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';

class GetAllProductsRoute implements IRoute {
  path = '/products';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router
      .route(`${this.path}`)
      .get((req: Request, res: Response) =>
        Modules.ProductsModules.GetAll.execute(req, res)
      );
  }
}

export default GetAllProductsRoute;
