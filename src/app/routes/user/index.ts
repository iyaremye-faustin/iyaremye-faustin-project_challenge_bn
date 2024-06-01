import UserSignupRoute from '@src/app/routes/user/route.user.signup';
import UserSigninRoute from '@src/app/routes/user/route.user.signin';
import GetAllRolesRoute from '@src/app/routes/user/route.role.get.all';
import GetAllUsersRoute from './route.users.get.all';
import UpdateUserRoleRoute from './route.user.update.role';

const userSignup = new UserSignupRoute();
const userSignin = new UserSigninRoute();
const userRole = new GetAllRolesRoute();
const users = new GetAllUsersRoute();
const changeRole = new UpdateUserRoleRoute();

const UserRoutes = { userSignup, userSignin, userRole, users, changeRole };

export default UserRoutes;
