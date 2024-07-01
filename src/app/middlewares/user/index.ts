import CheckEmailExistMiddleware from '@src/app/middlewares/user/middleware.user.check.email';
import CheckNumberExistMiddleware from '@src/app/middlewares/user/middleware.user.check.number';
import CheckUserAuthenticatedMiddleware from '@src/app/middlewares/user/middleware.user.check.auth';
import CheckUserIsAdminMiddleware from './middleware.user.check.admin';
import CheckUserIsStoreKeeperOrAdminMiddleware from './middleware.user.check.storeoradmin';

const CheckUserEmailExist = new CheckEmailExistMiddleware();
const CheckUserNumberExist = new CheckNumberExistMiddleware();
const CheckUserAuthenticated = new CheckUserAuthenticatedMiddleware();
const CheckUserAdmin = new CheckUserIsAdminMiddleware();
const CheckUserIsAdminOrStoreKeeper =
  new CheckUserIsStoreKeeperOrAdminMiddleware();

const UserMiddlewares = {
  CheckUserEmailExist,
  CheckUserNumberExist,
  CheckUserAuthenticated,
  CheckUserAdmin,
  CheckUserIsAdminOrStoreKeeper,
};

export default UserMiddlewares;
