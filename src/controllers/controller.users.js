import serviceUsers from "../service/users.service.js";
const USER_FIRSTS = 3; //numero de usuarios que se mostraran en la peticion /users/firsts
//aplico limit and offset
const resposeAllUsers = async (req, res) => {
  try {
    const { limit, offset } = req.query;
    const response = await serviceUsers.getAllUsers(limit, offset);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const resposeUserFirsts = async (req, res) => {
  try {
    const response = await serviceUsers.getFirsts(USER_FIRSTS);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const resposeUserById = async (req, res) => {
  try {
    let { id } = req.params;
    let response = await serviceUsers.getUserById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  resposeAllUsers,
  resposeUserFirsts,
  resposeUserById,
};
