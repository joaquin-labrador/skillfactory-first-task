import serviceCarts from "../service/carts.service.js";
import getBigCarts from "../helpers/bigcarts.js";
import HttpRespose from "../helpers/http/HttpResponse.js"
const responseCarts = async (req, res) => {
  const response = HttpRespose(res);
  try {
    let { limit, offset } = req.query;
    const carts = await serviceCarts.getAllCarts(limit, offset);
    return carts.length > 0
      ? response.success(carts)
      : response.notFound("No carts found");
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const responseCartsById = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const { id } = req.params;
    const carts = await serviceCarts.getCartById(id);
    return response.success(carts);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};

const resposeBigsCarts = async (req, res) => {
  const response = HttpRespose(res);
  try {
    const carts = await serviceCarts.getAllCarts();
    const bigCarts = await getBigCarts(carts);
    return response.success(bigCarts);
  } catch (error) {
    return response.serviceUnavailable(error);
  }
};


export default {
  responseCarts,
  responseCartsById,
  resposeBigsCarts,
};
