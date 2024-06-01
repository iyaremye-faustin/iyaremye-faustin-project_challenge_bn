import PostOrderService from "./service.order.post";
import GetAllOrdersService from "./service.order.get.all";

const PostOrder = new PostOrderService();
const GetAll = new GetAllOrdersService();

const Orders ={PostOrder,GetAll};

export default Orders
