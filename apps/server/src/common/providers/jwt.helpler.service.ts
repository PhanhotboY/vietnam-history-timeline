import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from '@shared/dto/auth/jwt-payload.dto';

@Injectable()
export class JwtHelperService {
  constructor(private readonly jwtService: JwtService) {}

  parseAuthJwt = (token: string): JwtPayloadDto => {
    try {
      return JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
      );
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid Request!');
    }
  };

  verifyJwt = (token: string, keySecret: string): JwtPayloadDto => {
    try {
      return this.jwtService.verify(token, {
        publicKey: keySecret,
      }) as JwtPayloadDto;
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid token!');
    }
  };
}
