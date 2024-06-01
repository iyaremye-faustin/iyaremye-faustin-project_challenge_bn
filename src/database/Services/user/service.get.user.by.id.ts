import BaseService from '@src/database/system/base/serviceBase';

class GetUserByIdService extends BaseService {
  protected async transation(user_id: string): Promise<any> {
    const user = await this.database.User.findOne({
      raw: true,
      where: { user_id },
    });

    if (!user) return null;

    return user;
  }
}

export default GetUserByIdService;
