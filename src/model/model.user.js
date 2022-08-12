import HttpError from "../helpers/httperror.js";
const getAllUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    return await response.json();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const getUserById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    return await response.json();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const getLimitUser = async (limit) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/users?limit=${limit}`
    );
    return await response.json();
  } catch {
    return new HttpError("not found", 404);
  }
};

export default {
  getAllUsers,
  getUserById,
  getLimitUser,
};
