import PostOrderModule from '@src/app/modules/order/module.order.post';
import GetAllOrdersModule from '@src/app/modules/order/module.order.get.all';
const NewOrder = new PostOrderModule();
const GetOrders = new GetAllOrdersModule();

const OrderModules = { NewOrder, GetOrders };

export default OrderModules;
