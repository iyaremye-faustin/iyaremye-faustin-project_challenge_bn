import request from 'supertest';

import App from '@src/app/App';
import routes from '@src/app/routes';

import { prefix } from '@src/__mocks__/variables.mock';
import {
  route,
  farmerUserData,
  farmerLoginData,
  orderRequest,
} from '@src/__mocks__/order.mock';
import { adminLoginData, route as userRoute } from '@src/__mocks__/user.mock';
import {
  route as productRoute,
  productData,
} from '@src/__mocks__/products.mock';

const app = new App(routes).getApp();
describe('Orders', () => {
  let adminAuthToken: string;
  let farmerAuthToken: string;
  beforeAll(async () => {
    await request(app)
      .post(`${prefix}${userRoute}/signup`)
      .send(farmerUserData);
    const adminUser = await request(app)
      .post(`${prefix}${userRoute}/signin`)
      .send(adminLoginData);
    adminAuthToken = adminUser.body.data.token;

    const farmerUser = await request(app)
      .post(`${prefix}${userRoute}/signin`)
      .send(farmerLoginData);
    farmerAuthToken = farmerUser.body.data.token;
    await request(app)
      .post(`${prefix}${route}`)
      .set('Authorization', `Bearer ${adminAuthToken}`)
      .send(productData);
  });

  it('should create a new order', async () => {
    const res = await request(app)
      .post(`${prefix}${route}`)
      .set('Authorization', `Bearer ${farmerAuthToken}`)
      .send(orderRequest);
    expect(res.body.status).toBe(201);
  });

  it('should approve an order', async () => {
    const res = await request(app)
      .put(`${prefix}${route}/1/approve`)
      .set('Authorization', `Bearer ${adminAuthToken}`)
      .send(orderRequest);
    expect(res.body.status).toBe(200);
  });

  it('should get orders by user', async () => {
    const res = await request(app)
      .get(`${prefix}${route}?page=1&limit=10`)
      .set('Authorization', `Bearer ${farmerAuthToken}`)
      .send(orderRequest);
    expect(res.body.status).toBe(200);
  });

  it('should fail to approve an order by the creator', async () => {
    const res = await request(app)
      .put(`${prefix}${route}/1/approve`)
      .set('Authorization', `Bearer ${farmerAuthToken}`)
      .send(orderRequest);
    expect(res.body.status).toBe(401);
  });
});
