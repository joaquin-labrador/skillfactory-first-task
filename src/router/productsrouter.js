import { Router } from "express";
const router = Router();
import controllerProducts from "../controllers/cotroller.products.js";
import controllerCategories from "../controllers/cotroller.categories.js";

import loggerDate from "../middleware/requestdate.js";
import requestQuery from "../middleware/limitoffset.js";
import requestCategory from "../middleware/validator.category.js";
import requestId from "../middleware/validators.id.js";
import validatorQueryOrder from "../middleware/orderquery.js";

//levantamos las rutas del localhost : 3000 con el router
router.use(loggerDate);
router
  .get("/products", requestQuery, controllerProducts.responseProducts)
  .get("/products/categories", controllerCategories.responseCategories)
  .get(
    "/products/categories/expensive",
    controllerCategories.resposeMostExpensiveProducs
  )
  .get(
    "/products/prices",
    validatorQueryOrder,
    controllerProducts.responseProductsByPrice
  )
  .get(
    "/products/category/:category",
    requestCategory,
    controllerCategories.responseProductsByCategory
  )
  .get("/products/:id", requestId, controllerProducts.responseProductsById);

export default router;
