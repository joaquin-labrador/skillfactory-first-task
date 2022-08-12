import { Router } from "express";
import controllerUsers from "../controllers/controller.users.js";
import loggerDate from "../middleware/requestdate.js";
import requestQuery from "../middleware/limitoffset.js";
import requestId from "../middleware/validators.id.js";
const router = Router();

router.use(loggerDate);

router
  .get("/users", requestQuery, controllerUsers.resposeAllUsers)
  .get("/users/firsts", controllerUsers.resposeUserFirsts)
  .get("/users/:id", requestId, controllerUsers.resposeUserById);

export default router;
