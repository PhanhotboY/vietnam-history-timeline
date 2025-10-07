import crypto from 'crypto';
import { Injectable } from '@nestjs/common';
import { JwtPayloadDto } from '@shared/dto/auth/jwt-payload.dto';
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
    publicKey: string;
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
}
