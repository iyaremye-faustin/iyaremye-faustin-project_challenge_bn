import request from 'supertest';

import App from '@src/app/App';
import routes from '@src/app/routes';
import db from '@src/database/definitions/models';

import { prefix } from '@src/__mocks__/variables.mock';
import { route, productData } from '@src/__mocks__/products.mock';
import {
  loginData,
  adminLoginData,
  route as userRoute,
} from '@src/__mocks__/user.mock';

const app = new App(routes).getApp();

describe('Products', () => {
  let token: string;
  beforeAll(async () => {
    const res = await request(app)
      .post(`${prefix}${userRoute}/signin`)
      .send(adminLoginData);
    token = res.body.data.token;
  });

  it('should create a new product with seed category', async () => {
    const res = await request(app)
      .post(`${prefix}${route}`)
      .set('Authorization', `Bearer ${token}`)
      .send(productData);
    expect(res.body.status).toBe(201);
  });

  it('Should to Fetch All Products with no page and limit parameters', async () => {
    const res = await request(app)
      .get(`${prefix}${route}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.body.status).toBe(400);
  });

  it('Fetch All Products', async () => {
    const res = await request(app)
      .get(`${prefix}${route}?page=1&limit=10`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.body.status).toBe(200);
  });

  it('Fetch one product by id', async () => {
    const res = await request(app).get(`${prefix}${route}/1`);
    expect(res.body.status).toBe(200);
  });
});
