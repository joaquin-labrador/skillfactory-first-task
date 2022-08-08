import { Router } from "express";
import loggerDate from "../middleware/requestdate.js";
import requestQuery from "../middleware/limitoffset.js";
import requestId from "../middleware/validators.id.js";
import controllerCarts from "../controllers/controller.carts.js";

const router = Router();

router.use(loggerDate);
router.get("/carts", requestQuery, controllerCarts.responseCarts);
router.get("/carts/bigcarts", controllerCarts.resposeBigsCarts);
router.get("/carts/:id", requestId, controllerCarts.responseCartsById);



export default router;