import express from "express";
import routerProducts from "./router/productsrouter.js";
import routerUsers from "./router/usersrouter.js";
import routerCarts from "./router/cartsrouter.js";
import errorHandler from "./middleware/errorhandler.js";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1.0", routerProducts, routerUsers, routerCarts);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
