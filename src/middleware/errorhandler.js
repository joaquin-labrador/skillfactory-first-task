import HttpResponse from '../helpers/http/HttpResponse.js';
const errorHandler = (req, res, next) => {
    return HttpResponse(res).notFound('Invalid route');
};
export default errorHandler;
