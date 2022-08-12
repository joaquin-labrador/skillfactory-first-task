import modelProducts from "../model/model.products";

const getAllProducts = async () => {
  return await modelProducts.getAllProducts();
};

const getProductById = async (id) => {
  return await modelProducts.getProductById(id);
};
const getCategories = async () => {
  return await modelProducts.getCategories();
};
const getProductByCategory = async (category) => {
  return await modelProducts.getProductByCategory(category);
};
const getProductsInCategory = async () => {
  return await modelProducts.productsInCategory();
};

export default {
  getAllProducts,
  getProductById,
  getCategories,
  getProductByCategory,
  getProductsInCategory,
};
