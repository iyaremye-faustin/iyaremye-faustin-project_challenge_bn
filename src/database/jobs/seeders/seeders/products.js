/* eslint-disable @typescript-eslint/no-var-requires */
const data = require('../data/products/products');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('products', data, {}),

  down: queryInterface => queryInterface.bulkDelete('pruducts', null, {}),
};
