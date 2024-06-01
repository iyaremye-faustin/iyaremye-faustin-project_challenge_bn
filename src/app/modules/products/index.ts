import GetAllProductsModule from '@src/app/modules/products/module.product.get.all';
import GetProductByCategoryModule from '@src/app/modules/products/module.product.get.by.category';
import GetOneProductModule from '@src/app/modules/products/module.product.get.one';
import GetAllCategoriesModule from '@src/app/modules/products/module.categories.get.all';
import PostProductModule from '@src/app/modules/products/module.product.post';

const GetAll = new GetAllProductsModule();
const GetOne = new GetOneProductModule();
const GetByCategory = new GetProductByCategoryModule();
const GetCategories = new GetAllCategoriesModule();
const PostProduct = new PostProductModule();

const ProductsModules = { GetOne, GetAll, GetByCategory, GetCategories, PostProduct };

export default ProductsModules;
