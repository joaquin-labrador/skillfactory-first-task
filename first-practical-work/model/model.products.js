/*Para el trabajo entregable los datos a utilizar provienen de la api:
https://fakestoreapi.com/
Gracias, thanks! */
import HttpError from "../helpers/httperror.js";
const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const getProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  } catch (error) {
    return new HttpError("We have 20 products", 404);

  }
};

//Export all the functions
export default {
  getAllProducts,
  getProductById,
};
