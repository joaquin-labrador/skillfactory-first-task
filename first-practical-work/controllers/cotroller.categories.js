import categories from "../model/model.categories.js";
import getMostExpensiveByCategory from "../helpers/mostexpensive.js";
import grouper from "../helpers/groupcategoriesproducts.js";

const responseCategories = async (req, res) => {
  let responseCategory = await categories.getAllCategories();
  let products =  await grouper(responseCategory);
  return res.status(200).json(products);
};

const responseProductsByCategory = async (req, res) => {
  let { category } = req.params;
  let response = await categories.getProductByCategory(category);
  return response.length > 0 ? res.status(200).json(response) : res.status(404).json({ message: "not found" });
}

const resposeMostExpensiveProducs = async (req, res) => {
  let response = await categories.getAllCategories();
  let categoriesAndProducts = await grouper(response);
  let mostExpensive = await getMostExpensiveByCategory(categoriesAndProducts);
  return res.status(200).json(mostExpensive);
}
export default {
  responseCategories,
  responseProductsByCategory,
  resposeMostExpensiveProducs,
};
