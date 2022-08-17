/**
 *crear las distinas funciones que se pueden realizar en el store, para las rutas del localhost:3000
 */

import productsService from "../service/products.service.js";

import sortProduct from "../helpers/sortproducts.js";
import HttpRespose from "../helpers/http/HttpResponse.js";


const responseProducts = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const { limit, offset } = req.query;
    const products = await productsService.getAllProducts(limit, offset);
    return products.length > 0
      ? response.success(products)
      : response.notFound("No products found");
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const responseProductsById = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const { id } = req.params;
    const products = await productsService.getProductById(id);
    return response.success(products);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const responseProductsByPrice = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const { order } = req.query;
    const resposeProducts = await productsService.getAllProducts();
    const products = sortProduct(resposeProducts, order);
    return response.success(products);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const responseCategories = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const responseCategory = await productsService.getProductsInCategory();
    return response.success(responseCategory);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const responseProductsByCategory = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const { category } = req.params;
    const products = await productsService.getProductByCategory(category);
    return products.length > 0
      ? response.success(products)
      : response.notFound("No products found");
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const resposeMostExpensiveProducs = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const mostExpensive = await productsService.getMostExpensiveProducts();
    return response.success(mostExpensive);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

export default {
  responseProducts,
  responseProductsById,
  responseProductsByPrice,
  responseCategories,
  responseProductsByCategory,
  resposeMostExpensiveProducs,
};
