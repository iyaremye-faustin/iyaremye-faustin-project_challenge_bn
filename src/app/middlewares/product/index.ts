import CheckProductCategoryExistMiddleware from '@src/app/middlewares/product/middleware.product.category';

const CheckCategoryExist = new CheckProductCategoryExistMiddleware();

const ProductMiddlewares = { CheckCategoryExist };

export default ProductMiddlewares;
