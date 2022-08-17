import serviceUsers from "../service/users.service.js";
import HttpRespose from "../helpers/http/HttpResponse.js";
const USER_FIRSTS = 3; //numero de usuarios que se mostraran en la peticion /users/firsts
//aplico limit and offset
const resposeAllUsers = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const { limit, offset } = req.query;
    const user = await serviceUsers.getAllUsers(limit, offset);
    return response.success(user);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const resposeUserFirsts = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const user = await serviceUsers.getFirsts(USER_FIRSTS);
    return response.success(user);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const resposeUserById = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const { id } = req.params;
    const user = await serviceUsers.getUserById(id);
    return response.success(user);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

export default {
  resposeAllUsers,
  resposeUserFirsts,
  resposeUserById,
};
