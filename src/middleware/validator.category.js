const validateReqCategory = (req, res, next) => {
  const category = req.params.category;
  if (typeof category !== "string") {
    return res.status(400).json({ message: "Bad request" });
  }
  req.params.category = category;
  next();
};

export default validateReqCategory;
