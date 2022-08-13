import modelProducts from "../model/model.products.js";

const getAllProducts = async () => {
  return await modelProducts.getAllProducts();
};

const getProductById = async (id) => {
  return await modelProducts.getProductById(id);
};
const getCategories = async () => {
  return await modelProducts.getAllCategories();
};
const getProductByCategory = async (category) => {
  return await modelProducts.getProductByCategory(category);
};
const getProductsInCategory = async () => {
  return await modelProducts.getProductsInCategory();
};

export default {
  getAllProducts,
  getProductById,
  getCategories,
  getProductByCategory,
  getProductsInCategory,
};
