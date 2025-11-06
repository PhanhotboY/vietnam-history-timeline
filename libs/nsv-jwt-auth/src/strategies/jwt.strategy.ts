import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { HEADER } from '@phanhotboy/nsv-common';

import { AuthUtilService } from '../util';
import { JwtPayloadDto } from '../dto';
import { JwtOptionsDto } from '../dto/module-option.dto';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from '../auth.module-definition';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authUtilService: AuthUtilService,
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: typeof OPTIONS_TYPE,
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
      secretOrKeyProvider: async (request: Request, rawJwtToken, done) => {
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
