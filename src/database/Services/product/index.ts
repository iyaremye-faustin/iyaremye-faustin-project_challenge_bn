import GetAllProductsService from '@src/database/Services/product/service.product.get.all';
import GetOneProductService from '@src/database/Services/product/service.product.get.one';
import GetProductByCategoryService from '@src/database/Services/product/service.product.get.by.category';
import GetAllCategoriesService from '@src/database/Services/product/service.category.all';
import PostProductService from '@src/database/Services/product/service.product.post';
import GetOneCategoryService from '@src/database/Services/product/service.category.get.one';
import GetCountAllProductsService from './service.product.count';

const GetAllProducts = new GetAllProductsService();
const GetOne = new GetOneProductService();
const GetByCategory = new GetProductByCategoryService();
const GetAllCategories = new GetAllCategoriesService();
const PostProduct = new PostProductService();
const GetOneCategory = new GetOneCategoryService();
const CountProducts = new GetCountAllProductsService();

const Products = {
  GetAllProducts,
  GetOne,
  GetByCategory,
  GetAllCategories,
  PostProduct,
  GetOneCategory,
  CountProducts,
};

export default Products;
