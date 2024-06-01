/* eslint-disable @typescript-eslint/no-var-requires */
const data = require('../data/categories/categories');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('categories', data, {}),

  down: queryInterface => queryInterface.bulkDelete('categories', null, {}),
};
