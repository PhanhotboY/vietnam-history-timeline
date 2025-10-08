import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  BadRequestException,
  Injectable,
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
        const clientId = request.headers[HEADER.CLIENT_ID];
        if (!clientId) throw new UnauthorizedException('Invalid request');

        if (!rawJwtToken) throw new UnauthorizedException('Invalid request');
        const { userId, browserId } =
          this.authUtilService.decodeAuthToken(rawJwtToken);

        if (clientId !== userId)
          throw new UnauthorizedException('Invalid token');

        const keyToken = await this.keyTokenService.findByUserId(
          userId,
          browserId,
        );
        if (!keyToken) throw new BadRequestException('Invalid request');

        // return key to verify token
        done(null, keyToken.publicKey);
      },
    });
  }

  validate(payload: JwtPayloadDto) {
    // assigned to req.user
    return payload;
  }
}
