import BaseService from '@src/database/system/base/serviceBase';

class GetOneCategoryService extends BaseService {
  protected async transation(categoryId: number): Promise<any> {
    const category = await this.database.Category.findOne({
      raw: true,
      where: { categ_id: categoryId },
    });

    if (!category) return null;

    return category;
  }
}

export default GetOneCategoryService;
