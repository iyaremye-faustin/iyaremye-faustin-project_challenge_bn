import BaseService from '@src/database/system/base/serviceBase';
import { TCreateProductType } from '@src/database/system/type/product';

class PostProductService extends BaseService {
  protected async transation(data: TCreateProductType): Promise<any> {
    const { name, price, category_id, fertilizer_id, description, image_url } =
      data;
    const product = await this.database.Product.create({
      name,
      price,
      category_id,
      fertilizer_id,
      description,
      image_url,
    });

    if (!product) return null;

    return product;
  }
}

export default PostProductService;
