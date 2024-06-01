/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

module.exports = [
  {
    product_id: 1,
    name: 'Apples',
    category_id: 1,
    description: 'Fresh and juicy apples, perfect for snacking or baking.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/smt5_NpsW2Z3n4.webp?updatedAt=1691276240141',

    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 2,
    name: 'Carrots',
    category_id: 1,
    description: 'Sweet and crunchy carrots, great for salads and cooking.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/green_bMiHY2G2d.webp?updatedAt=1691276240000',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 3,
    name: 'Milk',
    category_id: 1,
    description: 'Fresh and creamy milk for all your dairy needs.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/cabage_k9Wd4thMc.webp?updatedAt=1691276238471',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 4,
    name: 'Bread',
    category_id: 1,
    description: 'Soft and delicious bread, perfect for sandwiches.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/corn_yxSrNJiTK.jpg?updatedAt=1691276237389',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 5,
    name: 'Chicken',
    category_id: 2,
    description: 'Fresh chicken for your favorite recipes.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/green1_8sug-j5fm.png?updatedAt=1691276244425',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 6,
    name: 'Canned Beans',
    category_id: 2,
    description: 'Nutritious canned beans for convenient meals.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/redChili_q7KRdx7Wd.jpg?updatedAt=1691276244775',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 7,
    name: 'Rice',
    category_id: 2,
    description: 'High-quality rice for a variety of dishes.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/eggplant_bS_KkD3Oa.jpg?updatedAt=1691276245072',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 8,
    name: 'Chips',
    category_id: 2,
    description: 'Crunchy and flavorful chips for snacking.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/greenbeans_H1LY8kKO_.webp?updatedAt=1691276247814',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 9,
    name: 'Water',
    category_id: 2,
    description: 'Refreshing bottled water to keep you hydrated.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/oignons_chSUTh2ex.jpg?updatedAt=1691276248308',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    product_id: 10,
    name: 'Ketchup',
    category_id: 2,
    description: 'Classic ketchup to enhance your meals.',
    image_url:
      'https://ik.imagekit.io/2ujnunod7moo/products/img3_DlkogF2R_.jpg?updatedAt=1691276247768',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
];
