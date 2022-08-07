import userController from '../model/model.user.js';
const USER_FIRSTS = 3; //numero de usuarios que se mostraran en la peticion /users/firsts 
//aplico limit and offset
const resposeAllUsers = async (req, res) => {
    let response = await userController.getAllUsers();
    let { limit, offset } = req.query;
    if (limit && offset) {
        response = response.slice(offset, limit);
    } else if (limit) {
        response = response.slice(0, limit);
    } else if (offset) {
        response = response.slice(offset, response.length);
    }
    return response.length > 0
        ? res.status(200).json(response)
        : res.status(400).json({ message: "Bad request" });
}

const resposeUserFirsts = async (req, res) => {
    let response = await userController.getLimitUser(USER_FIRSTS);
    return res.status(200).json(response);
}

const resposeUserById = async (req, res) => {
    let { id } = req.params;
    let response = await userController.getUserById(id);
    return res.status(200).json(response);
}

export default {
    resposeAllUsers,
    resposeUserFirsts,
    resposeUserById,
}