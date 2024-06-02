import BaseService from '@src/database/system/base/serviceBase';

class GetCountAllOrdersService extends BaseService {
  protected async transation(): Promise<any> {
    const count = await this.database.Order.count();
    return count;
  }
}

export default GetCountAllOrdersService;
