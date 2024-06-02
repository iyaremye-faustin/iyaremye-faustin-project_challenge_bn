import BaseService from '@src/database/system/base/serviceBase';

class UpdateUserService extends BaseService {
  protected async transation(data: any): Promise<any> {
    const { user_id, role_id } = data;
    try {
      const user = await this.database.User.findByPk(user_id);
      if (!user) {
        return null;
      }
      await user.update({ role_id: role_id });
      return user;
    } catch (error) {
      return null;
    }
  }
}

export default UpdateUserService;
