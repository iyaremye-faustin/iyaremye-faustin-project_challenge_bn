import BaseService from '@src/database/system/base/serviceBase';

class GetAllRolesService extends BaseService {
  protected async transation(): Promise<any> {
    const role = await this.database.Role.findAll({
      raw: true,
    });

    if (!role) return null;

    return role;
  }
}

export default GetAllRolesService;
