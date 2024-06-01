import BaseService from '@src/database/system/base/serviceBase';

class GetUserByEmailService extends BaseService {
  protected async transation(email: string): Promise<any> {
    const user = await this.database.User.findOne({
      raw: true,
      where: { email },
    });

    if (!user) return null;

    return user;
  }
}

export default GetUserByEmailService;
