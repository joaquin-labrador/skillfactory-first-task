import express from "express";
import routerProducts from "./router/productsrouter.js";
import routerUsers from "./router/usersrouter.js";
import error404 from "./middleware/404.js";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", routerProducts , routerUsers);



//error handler 404
app.use(error404);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
