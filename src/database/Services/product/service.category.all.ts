import BaseService from '@src/database/system/base/serviceBase';

class GetAllCategoriesService extends BaseService {
  protected async transation(): Promise<any> {
    const category = await this.database.Category.findAll({
      raw: true,
    });

    if (!category) return null;

    return category;
  }
}

export default GetAllCategoriesService;
