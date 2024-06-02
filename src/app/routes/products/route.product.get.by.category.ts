import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Validators from '@src/app/validator';
import Modules from '@src/app/modules';
import Middlewares from '@src/app/middlewares';

class GetProductsByCategoryRoute implements IRoute {
  path = '/products';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/category/:category`).get(
			(req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.CheckUserAuthenticated.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        Validators.Products.GetProductByCategory.run(req, res, next),
      (req: Request, res: Response) =>
        Modules.ProductsModules.GetByCategory.execute(req, res)
    );
  }
}

export default GetProductsByCategoryRoute;
