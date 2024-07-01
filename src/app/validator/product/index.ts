import GetProductByCategoryValodator from '@src/app/validator/product/validator.product.get.by.category';
import GetProductByIdValodator from '@src/app/validator/product/validator.product.get.by.id';
import PostProductValidator from './validator.product.post';
import GetAllProductsValidator from './validator.product.get.all';

const GetProductById = new GetProductByIdValodator();
const GetProductByCategory = new GetProductByCategoryValodator();
const PostProduct = new PostProductValidator();
const GetProducts = new GetAllProductsValidator();

const Products = {
  GetProductByCategory,
  GetProductById,
  PostProduct,
  GetProducts,
};

export default Products;
