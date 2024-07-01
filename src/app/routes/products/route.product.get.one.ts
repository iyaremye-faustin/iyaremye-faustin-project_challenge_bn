import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Validators from '@src/app/validator';
import Modules from '@src/app/modules';

class GetOneProductRoute implements IRoute {
  path = '/products';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/:productId`).get(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.Products.GetProductById.run(req, res, next),

      (req: Request, res: Response) =>
        Modules.ProductsModules.GetOne.execute(req, res)
    );
  }
}

export default GetOneProductRoute;
