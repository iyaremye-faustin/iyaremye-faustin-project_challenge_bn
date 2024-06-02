import PostOrderService from './service.order.post';
import GetAllOrdersService from './service.order.get.all';
import GetCountAllOrdersService from './service.order.count';
import GetAllOrdersByUserService from './service.order.get.by.user';

const PostOrder = new PostOrderService();
const GetAll = new GetAllOrdersService();
const CountOrders = new GetCountAllOrdersService();
const OrdersByUser = new GetAllOrdersByUserService();

const Orders = { PostOrder, GetAll, CountOrders, OrdersByUser };

export default Orders;
