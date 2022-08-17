import { expressjwt, Request as JWTRequest } from "express-jwt";
const jwt = require("jsonwebtoken");
const util = require('util');
import getConfig from 'next/config';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const { serverRuntimeConfig } = getConfig();

const excludedPaths = [
    '/api/student/login'
]

export { jwtMiddleware };

function jwtMiddleware(req: NextApiRequest, res: NextApiResponse) {
    const middleware = expressjwt({ secret: serverRuntimeConfig.JWT_SECRET, algorithms: ['HS256'] })
    .unless({
         // public routes that don't require authentication
        path: excludedPaths
    });
    
    if(req.headers.authorization)
    {
        const usertoken = req.headers.authorization;
        const token = String(usertoken).split(' ');
        const decoded = jwt.verify(token[1], serverRuntimeConfig.JWT_SECRET);
        req.headers['userid'] = decoded['userid']
    }


    return util.promisify(middleware)(req, res);
}