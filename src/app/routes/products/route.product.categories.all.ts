import { Router, Request, Response } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';

class GetAllProductCategoriesRoute implements IRoute {
  path = '/categories';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router
      .route(`${this.path}`)
      .get((req: Request, res: Response) =>
        Modules.ProductsModules.GetCategories.execute(req, res)
      );
  }
}

export default GetAllProductCategoriesRoute;
