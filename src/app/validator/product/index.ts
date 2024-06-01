import GetProductByCategoryValodator from '@src/app/validator/product/validator.product.get.by.category';
import GetProductByIdValodator from '@src/app/validator/product/validator.product.get.by.id';
import PostProductValidator from './validator.product.post';

const GetProductById = new GetProductByIdValodator();
const GetProductByCategory = new GetProductByCategoryValodator();
const PostProduct = new PostProductValidator();

const Products = { GetProductByCategory, GetProductById, PostProduct };

export default Products;
