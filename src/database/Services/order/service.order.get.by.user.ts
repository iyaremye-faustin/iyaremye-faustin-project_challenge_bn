import BaseService from '@src/database/system/base/serviceBase';

class GetAllOrdersByUserService extends BaseService {
  protected async transation(data:any): Promise<any> {
		const {user_id, page, limit} = data;
		const offset = (page - 1) * limit;
    const orders = await this.database.Order.findAll({
      raw: true,
      where: { farmer_id: user_id },
			limit: limit,
      offset: offset,
    });

    if (!orders) return null;
		const count = await this.database.Order.count({
			raw: true,
      where: { farmer_id: user_id },
    });
    return {orders, count};
  }
}

export default GetAllOrdersByUserService;
