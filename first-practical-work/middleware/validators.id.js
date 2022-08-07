
const validateReqId = async (req, res, next) => {
    let id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: 'Bad request' });
    }
    req.params.id = id;
    next();
}
export default validateReqId;