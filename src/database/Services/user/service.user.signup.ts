import BaseService from '@src/database/system/base/serviceBase';
import { TCreateUserType } from '@src/database/system/type/user';

class UserSignupService extends BaseService {
  protected async transation(data: TCreateUserType): Promise<any> {
    const {
      full_name,
      phone_number,
      email,
      password,
      user_name,
			id_passport_number
    } = data;

    const salt = this.Password.salt();

    const hashedPassword = this.Password.hash(password, salt);
    const user = await this.database.User.create({
      full_name,
      phone_number,
      email,
      user_name,
			id_passport_number,
      password: hashedPassword,
			role_id:3,
      salt,
    });

    if (!user) return null;

    const createdUser = user.get({ plain: true });

    return createdUser;
  }
}

export default UserSignupService;
