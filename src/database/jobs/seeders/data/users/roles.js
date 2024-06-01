/* eslint-disable @typescript-eslint/no-var-requires */

const moment = require('moment');

const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

module.exports = [
	{
		role_id: 1,
		role_name: "administrator",
		description: 'Administrator Role',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
	{
		role_id: 2,
		role_name: "store keeper",
		description: 'Store Keeper Role',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
	{
		role_id: 3,
		role_name: "farmer",
		description: 'Farmer Role',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
];
