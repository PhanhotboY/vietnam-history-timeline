import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthUtilService } from '../util';
import { HEADER } from '@phanhotboy/nsv-common';
import { JwtPayloadDto } from '../dto';
import { Request } from 'express';
import { JwtOptionsDto } from '../dto/module-option.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authUtilService: AuthUtilService,
    @Inject('JWT_OPTIONS') private readonly options: JwtOptionsDto
  ) {
    super({
      jwtFromRequest: (req: Request) => {
        const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        if (!token) throw new UnauthorizedException('Invalid request');

        return token;
      },
      ignoreExpiration: false,
      algorithms: ['RS256'],
      // fetch public key dynamically
      secretOrKeyProvider: async (request, rawJwtToken, done) => {
        try {
          const clientId = request.headers[HEADER.CLIENT_ID];
          if (!clientId)
            return done(new UnauthorizedException('Invalid request'));

          if (!rawJwtToken)
            return done(new UnauthorizedException('Invalid request'));
          const { userId, browserId } =
            this.authUtilService.decodeAuthToken(rawJwtToken);

          if (clientId !== userId)
            return done(new UnauthorizedException('Invalid token'));

          // return key to verify token
          done(null, this.options.publicKey);
        } catch (error: any) {
          done(new InternalServerErrorException(error.message));
        }
      },
    });
  }

  validate(payload: JwtPayloadDto) {
    // assigned to req.user
    return payload;
  }
}
