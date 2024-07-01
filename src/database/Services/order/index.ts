import PostOrderService from './service.order.post';
import GetAllOrdersService from './service.order.get.all';
import GetCountAllOrdersService from './service.order.count';
import GetAllOrdersByUserService from './service.order.get.by.user';
import ApproveOrderService from './service.approve.order';
import PostOrderItemService from './service.order.item.post';

const PostOrder = new PostOrderService();
const GetAll = new GetAllOrdersService();
const CountOrders = new GetCountAllOrdersService();
const OrdersByUser = new GetAllOrdersByUserService();
const approveOrder = new ApproveOrderService();
const NewOrderItem = new PostOrderItemService();

const Orders = {
  PostOrder,
  GetAll,
  CountOrders,
  OrdersByUser,
  approveOrder,
  NewOrderItem,
};

export default Orders;
