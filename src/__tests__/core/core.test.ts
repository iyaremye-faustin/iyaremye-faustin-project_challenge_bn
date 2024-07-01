import request from 'supertest';
import App from '@src/app/App';
import routes from '@src/app/routes';

const app = new App(routes).getApp();

describe('Core tests', () => {
  it('Should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Welcome to Agro-farming web API');
  });

  it('Should Return Invalid method', async () => {
    const res = await request(app).post('/');
    expect(res.statusCode).toBe(400);
  });

  it('Should Return Invalid method', async () => {
    const res = await request(app).get('/fola');
    expect(res.statusCode).toBe(404);
  });
});
