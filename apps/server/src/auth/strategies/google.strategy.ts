import { ConfigService } from '@/common';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('google.clientID')!,
      clientSecret: configService.get('google.clientSecret')!,
      callbackURL: configService.get('google.callbackURL'),
      passReqToCallback: true,
    });
  }

  validate(req: Request) {}
}
