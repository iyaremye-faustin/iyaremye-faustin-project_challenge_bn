import BaseService from '@src/database/system/base/serviceBase';

class GetCountAllProductsService extends BaseService {
  protected async transation(): Promise<any> {
    const count = await this.database.Product.count();
    return count;
  }
}

export default GetCountAllProductsService;
