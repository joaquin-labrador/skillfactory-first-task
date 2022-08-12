//Esta funcion la decidi poner en el controller ya que usa el modelo de categorias y productos
import categories from "../model/model.categories.js";
const grouper = async (responseCategory) => {
  const categoriesAndProducts = await Promise.all(
    responseCategory.map(async (category) => {
      return {
        category,
        products: await categories.getProductByCategory(category),
      };
    })
  );
  return categoriesAndProducts;
};

export default grouper;
