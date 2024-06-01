import BaseService from '@src/database/system/base/serviceBase';

class GetOneProductService extends BaseService {
  protected async transation(productId: number): Promise<any> {
    const product = await this.database.Product.findOne({
      raw: true,
      where: { product_id: productId },
    });

    if (!product) return null;

    return product;
  }
}

export default GetOneProductService;
