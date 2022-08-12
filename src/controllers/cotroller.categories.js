import categories from "../model/model.categories.js";
import getMostExpensiveByCategory from "../helpers/mostexpensive.js";
import grouper from "./groupcategoriesproducts.js";

const responseCategories = async (req, res) => {
  try {
    const responseCategory = await categories.getAllCategories();
    const products = await grouper(responseCategory);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const responseProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const response = await categories.getProductByCategory(category);
    return response.length > 0
      ? res.status(200).json(response)
      : res.status(404).json({ message: "not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const resposeMostExpensiveProducs = async (req, res) => {
  try {
    const response = await categories.getAllCategories();
    const categoriesAndProducts = await grouper(response);
    const mostExpensive = await getMostExpensiveByCategory(
      categoriesAndProducts
    );
    return res.status(200).json(mostExpensive);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export default {
  responseCategories,
  responseProductsByCategory,
  resposeMostExpensiveProducs,
};
