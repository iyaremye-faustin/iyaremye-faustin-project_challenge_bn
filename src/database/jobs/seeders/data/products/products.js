/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

module.exports = [
  {
    name: 'Lime',
		price: 300,
    category_id: 1,
    description: 'Lime Fertilizer',
		quantity_per_acre: 2,
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/green_bMiHY2G2d.webp?updatedAt=1691276240000',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    name: 'Beans',
		price: 500,
    category_id: 2,
		quantity_per_acre: 1,
    description: 'Nutritious  beans for convenient meals seeds.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/redChili_q7KRdx7Wd.jpg?updatedAt=1691276244775',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    name: 'Rice',
		price: 400,
    category_id: 2,
		quantity_per_acre: 1,
    description: 'High-quality rice seeds.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/eggplant_bS_KkD3Oa.jpg?updatedAt=1691276245072',
    createdAt: currentDate,
    updatedAt: currentDate,
  }
];
