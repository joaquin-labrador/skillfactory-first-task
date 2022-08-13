import modelCarts from "../model/model.carts.js";

const getAllCarts = async () => {
  return await modelCarts.getAllCarts();
};
const getCartById = async (id) => {
  return await modelCarts.getCartById(id);
};

export default {
  getAllCarts,
  getCartById,
};
