import BaseService from '@src/database/system/base/serviceBase';
import { TCreateOrderItemType } from '@src/database/system/type/order';

class PostOrderItemService extends BaseService {
  protected async transation(data: TCreateOrderItemType): Promise<any> {
    const { order_id, product_id, price, quantity } = data;
    const item = await this.database.OrderItem.create({
      order_id,
			product_id,
			price,
			quantity
    });

    if (!item) return null;
    return item;
  }
}

export default PostOrderItemService;
