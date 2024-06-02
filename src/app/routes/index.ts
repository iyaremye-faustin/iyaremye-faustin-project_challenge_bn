import { IRoute } from '@src/core/interfaces/routeInterface';
import UserRoutes from '@src/app/routes/user';
import ProductRoutes from '@src/app/routes/products';
import OrderRoutes from './order';

const { userSignup, userSignin, userRole, users, changeRole } = UserRoutes;
const {
  getAllProducts,
  getOneProduct,
  getProductsByCategory,
  getAllcategories,
  postProduct,
} = ProductRoutes;
const { postOrder, getOrders, orderApprove } = OrderRoutes;
const routes: IRoute[] = [
  userSignup,
  userSignin,
  userRole,
  getAllProducts,
  getProductsByCategory,
  getOneProduct,
  getAllcategories,
  postProduct,
  postOrder,
  getOrders,
  users,
  changeRole,
	orderApprove
];

export default routes;
