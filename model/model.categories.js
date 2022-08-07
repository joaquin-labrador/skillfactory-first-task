import HttpError from "../helpers/httperror.js";
const getAllCategories = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    return await response.json();
  } catch (error) {
    return new HttpError("not found", 404);

  }
};

const getProductByCategory = async (category) => { 
  try{  
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return  response.json();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

export default {
  getAllCategories,
  getProductByCategory,
};
