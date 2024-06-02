import request from 'supertest';

import App from '@src/app/App';
import routes from '@src/app/routes';
import db from '@src/database/definitions/models';

import { prefix } from '@src/__mocks__/variables.mock';
import { route } from '@src/__mocks__/products.mock';

const app = new App(routes).getApp();

const database: any = db;

describe('Products', () => {
  it('Fetch All Products', async () => {
    const res = await request(app).get(`${prefix}${route}`);
    expect(res.body.status).toBe(200);
  });

  it('Fetch one product by id', async () => {
    const res = await request(app).get(`${prefix}${route}/1`);
    expect(res.body.status).toBe(200);
  });
});
