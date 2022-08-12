const error404 = (req, res, next) => {
  return res.status(404).send("404 Not Found");
};
export default error404;
