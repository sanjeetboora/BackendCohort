/**
 * This file is having the loggic of mock request and response
 */

module.exports = {
    mockRequest: () => {
        const req = {};
        /**
         * body
         * params
         * query
         */

        req.body = jest.fn().mockReturnValue(req);
        req.params = jest.fn().mockReturnValue(req);
        req.query = jest.fn().mockReturnValue(req);
        return req;
    },

    mockResponse: () => {
        const res = {};
        /**
         * status
         * send
         */
        res.status = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        res.sendStatus = jest.fn().mockReturnValue(res);
        return res;
    }
}