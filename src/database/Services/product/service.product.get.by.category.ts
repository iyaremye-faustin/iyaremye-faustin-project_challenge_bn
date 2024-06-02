import BaseService from '@src/database/system/base/serviceBase';

class GetProductByCategoryService extends BaseService {
  protected async transation(category_id: string): Promise<any> {
    const products = await this.database.Product.findAll({
      raw: true,
      where: { category_id },
    });

    if (!products) return null;

    return products;
  }
}

export default GetProductByCategoryService;
