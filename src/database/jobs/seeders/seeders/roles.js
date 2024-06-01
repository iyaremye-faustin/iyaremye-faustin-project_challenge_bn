/* eslint-disable @typescript-eslint/no-var-requires */
const data = require('../data/users/roles');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('roles', data, {}),

  down: queryInterface => queryInterface.bulkDelete('roles', null, {}),
};
