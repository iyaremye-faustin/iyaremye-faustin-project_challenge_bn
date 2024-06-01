import TokenUtils from '@src/core/utils/token';
import deleteProps from '@src/core/utils/deleteProps';
import PasswordUtils from '@src/core/utils/password';
import logger from '@src/core/utils/logger';
import port from '@src/core/utils/port';

const Token = new TokenUtils();
const Password = new PasswordUtils();

const Util = {
  Token,
  deleteProps,
  Password,
  logger,
  port,
};

export default Util;
