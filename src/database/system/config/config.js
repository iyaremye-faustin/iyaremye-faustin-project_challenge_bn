require('dotenv/config');

const dbconfig = {
  development: {
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: process.env.DB_DIALECT_DEV,
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: process.env.DB_DIALECT_TEST,
		logging: false,
  },
  production: {
    username: process.env.DB_USERNAME_PROD,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST_PROD,
		port: process.env.DB_PORT_PROD,
    dialect: process.env.DB_DIALECT_PROD,
    dialectoptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};

module.exports = dbconfig;
