/* eslint-disable @typescript-eslint/no-var-requires */
const data = require('../data/users/superadmin');


module.exports = {
  up: queryInterface => queryInterface.bulkInsert('users', data, {}),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
