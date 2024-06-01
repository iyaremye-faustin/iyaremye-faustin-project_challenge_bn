import BaseService from '@src/database/system/base/serviceBase';

class GetCountAllUsersService extends BaseService {
  protected async transation(): Promise<any> {
    const count = await this.database.User.count();
    return count;
  }
}

export default GetCountAllUsersService;
