import SignupValidator from '@src/app/validator/user/validator.user.signup';
import SigninValidator from '@src/app/validator/user/validator.user.singin';
import ChangeRoleValidator from './validator.change.role';

const Signup = new SignupValidator();
const Signin = new SigninValidator();
const UpdateRole = new ChangeRoleValidator();

const User = {
  Signup,
  Signin,
	UpdateRole
};

export default User;
