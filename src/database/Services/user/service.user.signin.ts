import BaseService from '@src/database/system/base/serviceBase';
import { TLoginUserType } from '@src/database/system/type/user';

class UserSigninService extends BaseService {
  protected async transation(data: TLoginUserType): Promise<any> {
    const user = await this.database.User.findOne({
      where: {
        [this.op.or]: [
          { user_name: data.login },
          { email: data.login },
          { phone_number: data.login },
        ],
      },
			include: [
				{
					model: this.database.Role,
					as: 'role',
					attributes:['role_name'],
				},
			],
    });

    if (!user) return null;

    const isPassword = this.Password.compare(
      data.password,
      user.password,
      user.salt as string
    );

    if (!isPassword) return null;
    return user.toJSON();
  }
}

export default UserSigninService;
