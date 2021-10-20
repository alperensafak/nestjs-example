import { HttpException, Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import environment from '../../tools/environment/environment';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const authJsonWebToken = req.headers.authorization; //bearer token

    if (req.baseUrl !== '/api/login') {
      if (!authJsonWebToken) {
        next();
        throw new HttpException(
          'Jwt could not fount',
          HttpStatus.FORBIDDEN,
        );
      } else {
        try {
          const user = jwt.verify(authJsonWebToken.slice(7, authJsonWebToken.length), environment.jwtText);//del bearer
          if (user) {
            req['user'] = user; //save encode user
            next();
          } else {
            throw new HttpException(
              'Something went wrong',
              HttpStatus.GATEWAY_TIMEOUT,
            );
          }

        } catch (e) {
          throw new HttpException(
            'e.message',
            HttpStatus.UNAUTHORIZED,
          );

        }
      }
    }else{
      next();
      return;
    }

    next();
  }
}
