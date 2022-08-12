//funciones propias de la API bigsCart()

import cartsRepository from "../repositories/carts.repository";
import usersRepository from "../repositories/users.repository";
import HttpError from "../helpers/httperror.js";

const getAllCarts = async (limit, offset) => {
  try {
    let carts = await cartsRepository.getAllCarts();
    if (limit && offset) {
      carts = carts.slice(offset, limit);
    } else if (limit) {
      carts = carts.slice(0, limit);
    } else if (offset) {
      carts = carts.slice(offset, carts.length);
    }
    return carts;
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const getCartById = async (id) => {
  try {
    return await cartsRepository.getCartById(id);
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

const bigsCart = async () => {
  const MIN_LEGTH = 2;
  try {
    const carts = await cartsRepository.getAllCarts();
    const users = await usersRepository.getAllUsers();
    const biggerCarts = carts.filter((cart) => {
      //aprovecho el callback para filtrar los usuarios que tienen mas de 2 productos
      if (cart.products.length > MIN_LEGTH) {
        //agregar el usatio por carts.userID
        let user = users.find((user) => cart.userId === user.id);
        //agregar el usatio por carts.userID
        cart.userName = user.username;
        return cart;
      }
    });
    return biggerCarts;
  } catch (error) {
    return new HttpError("not found", 404);
  }
};

export default {
  getAllCarts,
  getCartById,
  bigsCart,
};
