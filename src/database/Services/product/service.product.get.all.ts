import BaseService from '@src/database/system/base/serviceBase';

class GetAllProductsService extends BaseService {
  protected async transation(data: any): Promise<any> {
    const { page, limit } = data;
    const offset = (page - 1) * limit;
    const products = await this.database.Product.findAll({
      raw: false,
      limit: limit,
      offset: offset,
      order: [['product_id', 'ASC']],
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
