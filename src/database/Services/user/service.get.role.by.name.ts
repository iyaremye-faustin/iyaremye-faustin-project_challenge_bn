import BaseService from '@src/database/system/base/serviceBase';

class GetRoleByNameService extends BaseService {
  protected async transation(role_name: string): Promise<any> {
    const role = await this.database.Role.findOne({
      raw: true,
      where: { role_name },
    });
    if (!role) return null;
    return role;
  }
}

export default GetRoleByNameService;
