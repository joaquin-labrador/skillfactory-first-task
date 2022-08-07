const responserQuery = (req, res, next) => {
    let { limit, offset } = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    req.query.limit = isNaN(limit) ? 0 : limit;
    req.query.offset = isNaN(offset) ? 0 : offset - 1; 
    /*menos 1 ya que si por ejemplo quiero mostrar del producto con id 8,
     para arriba me muestra a partir del 9 */
    next(); 
}

export default responserQuery;



