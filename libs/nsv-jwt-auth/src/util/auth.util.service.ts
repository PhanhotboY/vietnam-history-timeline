import crypto from 'crypto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayloadDto } from '@phanhotboy/nsv-common/dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUtilService {
  constructor(private readonly jwtService: JwtService) {}

  createTokenPair({
    payload,
    privateKey,
  }: {
    payload: JwtPayloadDto;
    privateKey: string;
  }) {
    const accessToken = this.jwtService.sign(payload, {
      privateKey,
      algorithm: 'RS256',
      expiresIn: '1d',
    });

    const refreshToken = this.jwtService.sign(payload, {
      privateKey,
      algorithm: 'RS256',
      expiresIn: '7 days',
    });

    return { accessToken, refreshToken };
  }

  generateKeyPair() {
    // const privateKey = crypto.randomBytes(64).toString('hex');
    // const publicKey = crypto.randomBytes(64).toString('hex');

    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
    });

    return { privateKey, publicKey };
  }

  verifyAuthTokenOrThrow(token: string, publicKey: string) {
    try {
      return this.jwtService.verify<JwtPayloadDto>(token, { publicKey });
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  decodeAuthToken(token: string) {
    try {
      return this.jwtService.decode<JwtPayloadDto>(token) || {};
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
