import HttpError from "../helpers/httperror.js";
const getAllCarts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    return await response.json();
  } catch (error) {
    return new HttpError("not found", 404);
  }

};

const getSingleCart = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
    return await response.json();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

export default {
  getAllCarts,
  getSingleCart,
};
