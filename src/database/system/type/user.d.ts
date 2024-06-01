export type TCreateUserType = {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
  user_name: string;
	id_passport_number: String;
};

export type TLoginUserType = {
  login: string;
  password: string;
};

export type IUSER = {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
  user_name: string;
	id_passport_number: String;
};
