import BaseService from '@src/database/system/base/serviceBase';

class GetAllOrdersService extends BaseService {
  protected async transation(data: any): Promise<any> {
    const { page, limit } = data;
    const offset = (page - 1) * limit;
    const orders = await this.database.Order.findAll({
      raw: false,
      limit: limit,
      offset: offset,
      order: [['order_id', 'ASC']],
      include: [
        {
          model: this.database.User,
          as: 'user',
          attributes: {
            exclude: ['password', 'salt'],
          },
        },
        {
          model: this.database.OrderItem,
          as: 'items',
        },
      ],
    });

    if (!orders) return null;

    return orders;
  }
}

export default GetAllOrdersService;
