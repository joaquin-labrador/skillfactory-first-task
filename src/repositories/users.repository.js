import productModel from "../models/product.model";

const getUsers = async () => {
  return await productModel.getUsers();
};
const getUserById = async (id) => {
  return await productModel.getUserById(id);
};
const getLimitUser = async (limit) => {
  return await productModel.getLimitUser(limit);
};

export default {
  getUsers,
  getUserById,
  getLimitUser,
};
