/* eslint-disable @typescript-eslint/no-var-requires */

const moment = require('moment');

const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

module.exports = [
  {
		categ_id: 1,
		name: "fertilizer",
		description: 'Feritilizer',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
		categ_id: 2,
		name: "seed",
		description: 'Seedes',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
];
