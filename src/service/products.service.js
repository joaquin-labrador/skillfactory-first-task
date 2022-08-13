/*funciones propias de la API getProductsInCategory()
 getProductsOrderedByPrice()
 getMostExpensiveByCategory() */

import productsRepository from "../repositories/products.repository.js";
import HttpError from "../helpers/httperror.js";
import mostExpensive from "../helpers/mostexpensive.js";
const getAllProducts = async (limit,offset) => {
  try {
    let response = await productsRepository.getAllProducts();
    if (limit && offset) {
      response = response.slice(offset, limit);
    } else if (limit) {
      response = response.slice(0, limit);
    } else if (offset) {
      response = response.slice(offset, response.length);
    }
    return response;
  } catch (error) {
    return new HttpError("not found", 404);
  }
};
const getProductById = async (id) => {
  try {
    return await productsRepository.getProductById(id);
  } catch (error) {
    return new HttpError("not found", 404);
  }
};
const getCategories = async () => {
  try {
    return await productsRepository.getCategories();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};
const getProductByCategory = async (category) => {
  try {
    return await productsRepository.getProductByCategory(category);
  } catch (error) {
    return new HttpError("not found", 404);
  }
};
const getProductsInCategory = async () => {
  try {
    return await productsRepository.getProductsInCategory();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};
const getProductsOrderedByPrice = async (order) => {
  try {
    let products = await productsRepository.getAllProducts();
    products.map((product) => {
      return { id: product.id, title: product.title, price: product.price };
    });
    if (order === "asc") return products.sort((a, b) => a.price - b.price);
    return products.sort((a, b) => b.price - a.price);
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const getMostExpensiveProducts = async () => {
  try {
    let products = await productsRepository.getProductsInCategory();
    products = mostExpensive(products);
    return products;
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

export default {
  getAllProducts,
  getProductById,
  getMostExpensiveProducts,
  getCategories,
  getProductByCategory,
  getProductsInCategory,
  getProductsOrderedByPrice,
  
};
