import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';
import Middlewares from '@src/app/middlewares';
import Validators from '@src/app/validator';

class PostProductsRoute implements IRoute {
  path = '/products';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.Products.PostProduct.run(req, res, next),
      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.ProductMiddlewares.CheckCategoryExist.run(req, res, next),
      (req: Request, res: Response) =>
        Modules.ProductsModules.PostProduct.execute(req, res)
    );
  }
}

export default PostProductsRoute;
