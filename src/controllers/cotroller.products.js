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
  try {
    let response = await products.getAllProducts();
    const { limit, offset } = req.query;
    if (limit && offset) {
      response = response.slice(offset, limit);
    } else if (limit) {
      response = response.slice(0, limit);
    } else if (offset) {
      response = response.slice(offset, response.length);
    }
    return response.length > 0
      ? res.status(200).json(response)
      : res.status(400).json({ message: "Bad request" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const responseProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await products.getProductById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const responseProductsByPrice = async (req, res) => {
  try {
    const { order } = req.query;
    const resposeProducts = await products.getAllProducts();
    const response = sortProduct(resposeProducts, order);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  responseProducts,
  responseProductsById,
  responseProductsByPrice,
};
