/* eslint-disable @typescript-eslint/no-var-requires */

const moment = require('moment');

const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

module.exports = [
  {
		name: "fertilizer",
		description: 'Feritilizer',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
		name: "seed",
		description: 'Seedes',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
];
