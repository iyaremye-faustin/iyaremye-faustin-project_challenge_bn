import BaseService from '@src/database/system/base/serviceBase';

class ApproveOrderService extends BaseService {
  protected async transation(order_id: number): Promise<any> {
    try {
      const order = await this.database.Order.findByPk(order_id);
      if (!order) {
        return null;
      }
      await order.update({ is_paid: 1 });
      return order;
    } catch (error) {
      return null;
    }
  }
}

export default ApproveOrderService;
