import BaseService from '@src/database/system/base/serviceBase';
import { TCreateOrderType } from '@src/database/system/type/order';

class PostOrderService extends BaseService {
  protected async transation(data: TCreateOrderType): Promise<any> {
		const{
			farmer_id
		} = data
    const order = await this.database.Order.create({
			farmer_id,
    });

    if (!order) return null;
    return order;
  }
}

export default PostOrderService;
