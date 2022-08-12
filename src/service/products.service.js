import productsRepository from "../repositories/products.repository";
import HttpError from "../helpers/httperror.js";
import mostExpensive from "../helpers/mostexpensive.js";
const getAllProducts = async () => {
  try {
    return await productsRepository.getAllProducts();
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
const getMostExpensiveByCategory = async () => {
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
  getCategories,
  getProductByCategory,
  getProductsInCategory,
  getProductsOrderedByPrice,
  getMostExpensiveByCategory,
};

