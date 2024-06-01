import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Validators from '@src/app/validator';
import Middlewares from '@src/app/middlewares';
import Modules from '@src/app/modules';

class UserSignupRoute implements IRoute {
  path = '/users';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/signup`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.User.Signup.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.CheckUserEmailExist.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.CheckUserNumberExist.run(req, res, next),

      (req: Request, res: Response) =>
        Modules.UserModules.Signup.execute(req, res)
    );
  }
}

export default UserSignupRoute;
