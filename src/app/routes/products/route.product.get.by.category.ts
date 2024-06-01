import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Validators from '@src/app/validator';
import Modules from '@src/app/modules';

class GetProductsByCategoryRoute implements IRoute {
  path = '/product';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/category/:category`).get(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.Products.GetProductByCategory.run(req, res, next),

      (req: Request, res: Response) =>
        Modules.ProductsModules.GetByCategory.execute(req, res)
    );
  }
}

export default GetProductsByCategoryRoute;
