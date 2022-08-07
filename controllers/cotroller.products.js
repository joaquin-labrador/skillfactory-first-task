/**
 *crear las distinas funciones que se pueden realizar en el store, para las rutas del localhost:3000
 */

import products from "../model/model.products.js";
import _ from "lodash";
import sortProduct from "../helpers/sortproducts.js";

/*Aplico limit and offset, para poder filtrar todos los productos por id, las rutas son:
    localhost:3000/api/products?limit=10&offset=0 , ejemplo
    si la ruta es localhost:3000/api/products:
    se develven la integridad de los productos
*/



const responseProducts = async (req, res) => {
  let response = await products.getAllProducts();
  let { limit, offset } = req.query;
  if (limit && offset) {
    response = response.slice(offset, limit);
  } else if (limit) {
    response = response.slice(0, limit);
  } else if (offset) {
    response = response.slice(offset , response.length);
  }
  return response.length > 0
    ? res.status(200).json(response)
    : res.status(400).json({ message: "Bad request" });
};

const responseProductsById = async (req, res) => {
  let { id } = req.params;
  let response = await products.getProductById(id);
  return res.status(200).json(response);
};

const responseProductsByPrice = async (req, res) => {
  let { order } = req.query;
  let resposeProducts = await products.getAllProducts();
  let response = sortProduct(resposeProducts, order);
  return res.status(200).json(response);

}

export default {
  responseProducts,
  responseProductsById,
  responseProductsByPrice,
};
