import modelCarts from "../model/model.carts.js";
import getBigCarts from "../helpers/bigcarts.js";
const responseCarts = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    const carts = await modelCarts.getAllCarts();
    if (limit && offset) {
      carts = carts.slice(offset, limit);
    } else if (limit) {
      carts = carts.slice(0, limit);
    } else if (offset) {
      carts = carts.slice(offset, carts.length);
    }
    return carts.length > 0
      ? res.status(200).json(carts)
      : res.status(400).json({ message: "Bad request" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const responseCartsById = async (req, res) => {
  try {
    const { id } = req.params;
    const carts = await modelCarts.getCartById(id);
    return res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const resposeBigsCarts = async (req, res) => {
  try {
    const carts = await modelCarts.getAllCarts();
    const bigCarts = await getBigCarts(carts);
    return res.status(200).json(bigCarts);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  responseCarts,
  responseCartsById,
  resposeBigsCarts,
};
