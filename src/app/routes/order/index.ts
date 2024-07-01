import PostOrdersRoute from '@src/app/routes/order/route.order.create';
import GetAllOrdersRoute from './route.order.get.all';
import ApproveOrderRoute from './route.order.approve';

const postOrder = new PostOrdersRoute();
const getOrders = new GetAllOrdersRoute();
const orderApprove = new ApproveOrderRoute();

const OrderRoutes = { postOrder, getOrders, orderApprove };

export default OrderRoutes;
