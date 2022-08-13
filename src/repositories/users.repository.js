import usersModel from "../model/model.user.js";

const getUsers = async () => {
  return await usersModel.getAllUsers();
};
const getUserById = async (id) => {
  return await usersModel.getUserById(id);
};
const getLimitUser = async (limit) => {
  return await usersModel.getLimitUser(limit);
};

export default {
  getUsers,
  getUserById,
  getLimitUser,
};
