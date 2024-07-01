export const route = '/orders';

export const farmerUserData = {
  names: 'Random Farmer Name',
  email: 'randomfarmer@email.com',
  password: 'randompassword',
  telephone: '257078888871',
  idpassportnumber: '1212151212121212',
  username: 'randomfarmer',
};

export const farmerLoginData = {
  login: 'randomfarmer@email.com',
  password: 'randompassword',
};

export const orderRequest = {
  items: [
    {
      product_id: 1,
      quantity: 1,
      price: 200,
    },
  ],
  land_size_acre: 2,
  total_amount: 400,
};
