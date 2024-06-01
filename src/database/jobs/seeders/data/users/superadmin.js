/* eslint-disable @typescript-eslint/no-var-requires */
const { pbkdf2Sync, randomBytes } = require('crypto');
const moment = require('moment');

const createdDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const salt = randomBytes(32).toString('hex');
const hashedPassword = pbkdf2Sync("password", salt, 100000, 64, `sha512`).toString('hex');

module.exports =[
	{
		full_name:"Faustin IYAREMYE",
		phone_number: '250738089379',
		email: 'iyaremyef@gmail.com',
		password: hashedPassword,
		user_name: 'Faustin',
		id_passport_number: '11121212121212121',
		createdAt: createdDate,
		role_id: 1,
		updatedAt: createdDate,
		salt: salt,
	}
]
