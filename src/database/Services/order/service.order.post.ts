import BaseService from '@src/database/system/base/serviceBase';
import { TCreateOrderType } from '@src/database/system/type/order';

class PostOrderService extends BaseService {
  protected async transation(data: TCreateOrderType): Promise<any> {
    const { farmer_id, land_size_acre, total_amount } = data;
    const order = await this.database.Order.create({
      farmer_id,
      land_size_acre,
      total_amount,
    });

    if (!order) return null;
    return order;
  }
}

export default PostOrderService;
