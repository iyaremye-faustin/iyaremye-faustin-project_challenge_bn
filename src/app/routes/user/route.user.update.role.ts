import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Validators from '@src/app/validator';
import Middlewares from '@src/app/middlewares';
import Modules from '@src/app/modules';

class UpdateUserRoleRoute implements IRoute {
  path = '/users';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router.route(`${this.path}/change-role`).put(
      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.CheckUserAdmin.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        Validators.User.UpdateRole.run(req, res, next),
      (req: Request, res: Response) =>
        Modules.UserModules.UpdateRole.execute(req, res)
    );
  }
}

export default UpdateUserRoleRoute;
