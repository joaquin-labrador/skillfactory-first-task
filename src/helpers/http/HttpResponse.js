import code from './statusCode.js'

const HttpResponse = (res) => {

    return {

        success: (data) => res.status(code.OK).json(data),

        created: (data) => res.status(code.CREATED).json(data),

        badRequest: (data) => res.status(code.BAD_REQUEST).json(data),

        unauthorized: (data) => res.status(code.UNAUTHORIZED).json(data),

        notFound: (data) => res.status(code.NOT_FOUND).json(data),

        serviceUnavailable: (data) => res.status(code.SERVICE_UNAVAILABLE).json(data)


    }

}

export default HttpResponse;