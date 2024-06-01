import BaseService from '@src/database/system/base/serviceBase';

class GetProductByCategoryService extends BaseService {
  protected async transation(category: string): Promise<any> {
    const product = await this.database.Product.findAll({
      raw: true,
      where: { category },
    });

    if (!product) return null;

    return product;
  }
}

export default GetProductByCategoryService;
