import { Options } from 'swagger-jsdoc';
const options:Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Legal-connect-app-api-center API',
      version: '1.0.0',
      description: 'Legal-connect-app-api-center API ',
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
        url: 'http://localhost:4001',
        description: 'API Server Localhost',
      },
    ],
  },
  apis: ['./**/*.yaml'],
};

export default options;
