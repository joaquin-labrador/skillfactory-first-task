/*funciones propias de la API getFirsts()*/
import usersRepository from "../repositories/users.repository";

const getAllUsers = async (limit,offset) => {
  try {
    let response = await usersRepository.getUsers();
    if (limit && offset) {
      response = response.slice(offset, limit);
    } else if (limit) {
      response = response.slice(0, limit);
    } else if (offset) {
      response = response.slice(offset, response.length);
    }
    return response;
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
