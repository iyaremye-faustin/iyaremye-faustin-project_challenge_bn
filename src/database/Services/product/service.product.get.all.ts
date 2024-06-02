import BaseService from '@src/database/system/base/serviceBase';

class GetAllProductsService extends BaseService {
  protected async transation(): Promise<any> {
    const products = await this.database.Product.findAll({
      raw: false,
      include: [
        {
          model: this.database.Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
    });

    if (!products) return null;

    return products;
  }
}

export default GetAllProductsService;
