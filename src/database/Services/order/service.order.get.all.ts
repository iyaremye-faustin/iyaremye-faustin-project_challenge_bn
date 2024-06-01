import BaseService from "@src/database/system/base/serviceBase";

class GetAllOrdersService extends BaseService {
  protected async transation(): Promise<any> {
    const orders = await this.database.Order.findAll({
      raw: true,
    });

    if (!orders) return null;

    return orders;
  }
}

export default GetAllOrdersService;
