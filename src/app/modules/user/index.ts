import UserSignupModule from '@src/app/modules/user/module.user.signup';
import UserSigninModule from '@src/app/modules/user/module.user.signin';
import GetAllRolesModule from '@src/app/modules/user/module.user.role';
import GetAllUsersModule from '@src/app/modules/user/module.user.all';
import PostUpdateUserRoleModule from './module.user.role.update';

const Signup = new UserSignupModule();
const Signin = new UserSigninModule();
const GetRoles = new GetAllRolesModule();
const GetUsers = new GetAllUsersModule();
const UpdateRole = new PostUpdateUserRoleModule();

const UserModules = { Signup, Signin, GetRoles, GetUsers, UpdateRole };

export default UserModules;
