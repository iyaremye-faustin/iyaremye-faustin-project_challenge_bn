import PostOrdersRoute from "@src/app/routes/order/route.order.create";
import GetAllOrdersRoute from "./route.order.get.all";

const postOrder = new PostOrdersRoute();
const getOrders = new GetAllOrdersRoute();

const OrderRoutes ={postOrder, getOrders};

export default OrderRoutes;
