import UserSignupService from '@src/database/Services/user/service.user.signup';
import GetUserByEmailService from '@src/database/Services/user/service.get.user.by.email';
import GetUserByNumberService from '@src/database/Services/user/service.get.user.by.number';
import UserSigninService from '@src/database/Services/user/service.user.signin';
import GetAllRolesService from '@src/database/Services/user/service.user.role';
import GetAllUsersService from '@src/database/Services/user/service.user.get.all';
import GetRoleByNameService from '@src/database/Services/user/service.get.role.by.name';
import GetUserByIdService from '@src/database/Services/user/service.get.user.by.id';
import UpdateUserService from '@src/database/Services/user/service.update.user';
import GetCountAllUsersService from '@src/database/Services/user/service.user.count';

const Signup = new UserSignupService();
const GetUserByEmail = new GetUserByEmailService();
const GetUserByNumber = new GetUserByNumberService();
const Signin = new UserSigninService();
const GetAllRoles = new GetAllRolesService();
const GetAllUsers = new GetAllUsersService();
const GetRoleByName = new GetRoleByNameService();
const GetUserById = new GetUserByIdService();
const UpdateUser = new UpdateUserService();
const CountUsers = new GetCountAllUsersService();

const User = {
  Signup,
  GetUserByEmail,
  GetUserByNumber,
  Signin,
  GetAllRoles,
  GetAllUsers,
  GetRoleByName,
  GetUserById,
  UpdateUser,
  CountUsers,
};

export default User;
