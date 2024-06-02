import PostOrderModule from '@src/app/modules/order/module.order.post';
import GetAllOrdersModule from '@src/app/modules/order/module.order.get.all';
import ApproveOrderModule from './module.order.approve';

const NewOrder = new PostOrderModule();
const GetOrders = new GetAllOrdersModule();
const ApproveOrder = new ApproveOrderModule();

const OrderModules = { NewOrder, GetOrders, ApproveOrder };

export default OrderModules;
