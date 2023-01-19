import boom from '@hapi/boom';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { User } from '../db/models/index.js';

export async function protect(req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, config.jwtSecret);
      // console.log(decoded);
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      next(boom.unauthorized('Not authorized, no valid token'));
    }
  }
}
