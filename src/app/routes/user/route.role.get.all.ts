import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '@src/core/interfaces/routeInterface';
import Modules from '@src/app/modules';

class GetAllRolesRoute implements IRoute {
  path = '/roles';

  router = Router();

  constructor() {
    this.initRoute();
  }

  private initRoute() {
    this.router
      .route(`${this.path}`)
      .get((req: Request, res: Response) =>
        Modules.UserModules.GetRoles.execute(req, res)
      );
  }
}

export default GetAllRolesRoute;
