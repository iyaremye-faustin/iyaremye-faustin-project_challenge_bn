import GetAllProductsRoute from '@src/app/routes/products/route.product.get.All';
import GetOneProductRoute from './route.product.get.one';
import GetProductsByCategoryRoute from './route.product.get.by.category';
import GetAllProductCategoriesRoute from './route.product.categories.all';
import PostProductsRoute from './route.product.post';

const getAllProducts = new GetAllProductsRoute();
const getOneProduct = new GetOneProductRoute();
const getProductsByCategory = new GetProductsByCategoryRoute();
const getAllcategories = new GetAllProductCategoriesRoute();
const postProduct = new PostProductsRoute();

const ProductRoutes = { getAllProducts, getOneProduct, getProductsByCategory, getAllcategories, postProduct };

export default ProductRoutes;
