import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthUtilService } from '@/common';
import { KeyTokenService } from '@/modules/key-token';
import { HEADER } from '@shared/constants';
import { JwtPayloadDto } from '@shared/dto/auth';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly keyTokenService: KeyTokenService,
    private readonly authUtilService: AuthUtilService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
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

          const keyToken = await this.keyTokenService.findByUserId(
            userId,
            browserId,
          );
          if (!keyToken)
            return done(new BadRequestException('Invalid request'));

          // return key to verify token
          done(null, keyToken.publicKey);
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
