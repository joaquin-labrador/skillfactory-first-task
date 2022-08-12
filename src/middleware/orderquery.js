const validatorQueryOrder = (req, res, next) => {
  let { order } = req.query;
  if (order === undefined) {
    order = "asc";
  } else if (order !== "asc" && order !== "desc") {
    return res.status(400).json({ message: "Bad request" });
  }
  req.query.order = order;
  next();
};
export default validatorQueryOrder;
