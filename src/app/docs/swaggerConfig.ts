import { Options } from 'swagger-jsdoc';
const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Crop Production Management Web API',
      version: '1.0.0',
      description: 'Crop Production Management Web API',
    },
    path: {},
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'authorization',
          in: 'header',
        },
      },
    },
    servers: [
      {
        url: 'https://chef-dep.onrender.com',
        description: 'API Server Production',
      },
			{
        url: 'http://localhost:4001',
        description: 'API Server Localhost',
      },
    ],
  },
  apis: ['./**/*.yaml'],
};

export default options;
