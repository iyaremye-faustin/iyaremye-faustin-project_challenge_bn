import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Validators from '@src/app/validator';
import Modules from '@src/app/modules';

class UserSigninRoute implements IRoute {
  path = '/users';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/signin`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.User.Signin.run(req, res, next),

      (req: Request, res: Response) =>
        Modules.UserModules.Signin.execute(req, res)
    );
  }
}

export default UserSigninRoute;
