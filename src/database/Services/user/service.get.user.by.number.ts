import BaseService from '@src/database/system/base/serviceBase';

class GetUserByNumberService extends BaseService {
  protected async transation(phonenumber: string): Promise<any> {
    const user = await this.database.User.findOne({
      raw: true,
      where: { phone_number: phonenumber },
    });

    if (!user) return null;

    return user;
  }
}

export default GetUserByNumberService;
