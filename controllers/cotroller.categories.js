import categories from "../model/model.categories.js";
import getMostExpensiveByCategory from "../helpers/mostexpensive.js";
import grouper from "../helpers/groupcategoriesproducts.js";

const responseCategories = async (req, res) => {
  try {
    let responseCategory = await categories.getAllCategories();
    let products = await grouper(responseCategory);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const responseProductsByCategory = async (req, res) => {
  try {
    let { category } = req.params;
    let response = await categories.getProductByCategory(category);
    return response.length > 0 ? res.status(200).json(response) : res.status(404).json({ message: "not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

const resposeMostExpensiveProducs = async (req, res) => {
  try{
  let response = await categories.getAllCategories();
  let categoriesAndProducts = await grouper(response);
  let mostExpensive = await getMostExpensiveByCategory(categoriesAndProducts);
  return res.status(200).json(mostExpensive);
  }catch(error){
    return res.status(500).json({ message: "Internal server error" });
  }
}
export default {
  responseCategories,
  responseProductsByCategory,
  resposeMostExpensiveProducs,
};
