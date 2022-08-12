import usersRepository from "../repositories/users.repository";

const getAllUsers = async () => {
  try {
    return await usersRepository.getAllUsers();
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const getUserById = async (id) => {
  try {
    return await usersRepository.getUserById(id);
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const getFirsts = async () => {
  const LIMIT = 3;
  try {
    return await usersRepository.getLimitUser(LIMIT);
  } catch (error) {
    return new HttpError("not found", 404);
  }
};
export default {
  getAllUsers,
  getUserById,
  getFirsts,
};
