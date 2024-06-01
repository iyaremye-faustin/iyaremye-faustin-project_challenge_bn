import BaseService from '@src/database/system/base/serviceBase';

class GetAllUsersService extends BaseService {
  protected async transation(user_id: string): Promise<any> {
    const users = await this.database.User.findAll({
			attributes: {
        exclude: ['password', 'salt']
      },
      raw: false,
			where: {
        user_id: {
          [this.op.ne]: user_id,
        },
      },
			include: [
				{
					model: this.database.Role,
					as: 'role',
					attributes:['role_name'],
				},
			],
    });

    if (!users) return null;

    return users;
  }
}

export default GetAllUsersService;
