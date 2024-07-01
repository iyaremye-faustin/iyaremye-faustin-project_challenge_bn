export const route = '/users';

export const userData = {
  names: 'Random Name',
  email: 'random@email.com',
  password: 'randompassword',
  telephone: '25707888887',
  idpassportnumber: '1212121212121212',
  username: 'randomusername',
};

export const incompleteUserData = {
  username: 'gala',
  password: '000000',
  telephone: '',
  names: 'Gala',
};

export const loginData = {
  login: 'random@email.com',
  password: 'randompassword',
};
export const adminLoginData = {
  login: 'iyaremyef@gmail.com',
  password: 'password',
};

export const withNoPasswordData = {
  login: 'random@email.com',
};

export const wrongLoginData = {
  login: '',
};

export const wrongPasswordData = {
  login: 'random@email.com',
  password: '123456',
};
