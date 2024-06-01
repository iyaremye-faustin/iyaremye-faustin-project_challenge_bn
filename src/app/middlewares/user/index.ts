import CheckEmailExistMiddleware from '@src/app/middlewares/user/middleware.user.check.email';
import CheckNumberExistMiddleware from '@src/app/middlewares/user/middleware.user.check.number';
import CheckUserAuthenticatedMiddleware from '@src/app/middlewares/user/middleware.user.check.auth';
import CheckUserIsAdminMiddleware from './middleware.user.check.admin';

const CheckUserEmailExist = new CheckEmailExistMiddleware();
const CheckUserNumberExist = new CheckNumberExistMiddleware();
const CheckUserAuthenticated = new CheckUserAuthenticatedMiddleware();
const CheckUserAdmin = new CheckUserIsAdminMiddleware();

const UserMiddlewares = { CheckUserEmailExist, CheckUserNumberExist, CheckUserAuthenticated, CheckUserAdmin };

export default UserMiddlewares;
