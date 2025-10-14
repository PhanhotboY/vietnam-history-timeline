import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { AuthService } from './auth.service';
import { SetAuthMetadata } from '@/common/decorators';
import { APP, HEADER } from '@shared/constants';
import { SignInDto, SignUpDto } from '@shared/dto/auth';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ConfigService } from '@/common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('signup')
  @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  async signUp(@Body() createUserDto: SignUpDto) {
    return await this.authService.signUp(createUserDto);
  }

  @Post('signin')
  @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  @UseGuards(LocalAuthGuard)
  async signIn(
    @Req() req: Request,
    @Headers(HEADER.REFRESH_TOKEN) refreshToken?: string,
  ) {
    return await this.authService.signIn(req.user, refreshToken);
  }

  @Get('verify-email')
  @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  async verifyEmailToken(
    @Res({ passthrough: true }) res: Response,
    @Query('token') token: string,
  ) {
    try {
      await this.authService.verifyEmailToken({ token });

      res.status(200).send(`<body style='margin:0'>
        <div style='background-color: #f3f4f6; height: 100vh; display: flex; align-items: center; justify-content: center;'>
          <div style='background-color: #ffffff; padding: 1.5rem; width: 768px;'>
            <div style='border-radius: 50%; background-color: #16a34a; width: 4rem; height: 4rem; margin: 1.5rem auto;'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                style='color: #fff;'
              >
                <path d='M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z'></path>
              </svg>
            </div>
            <div style='text-align: center;'>
              <h3 style='font-size: 1.25rem; font-weight: 600; color: #1f2937; margin: 0;'>
                Email Verify Successfully!
              </h3>
              <p style='color: #4b5563; margin: 0.5rem 0;'>
                Thank you for completing your secure online signup.
              </p>
              <p style='margin: 0.5rem 0;'>Have a great day!</p>
              <div style='padding-top: 2.5rem; text-align: center;'>
                <a
                  href="${this.configService.get('clientUrl')}"
                  style='padding: 0.75rem 3rem; background-color: #4f46e5; color: #ffffff; font-weight: 600; text-decoration: none; display: inline-block; transition: background-color 0.3s; border-radius: 0.375rem;'
                  onmouseover="this.style.backgroundColor='#6366f1';"
                  onmouseout="this.style.backgroundColor='#4f46e5';"
                >
                  GO TO WEBSITE
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>`);
    } catch (e: any) {
      res.status(500).send(`<body style='margin:0'>
        <div style='background-color: #f3f4f6; height: 100vh; display: flex; align-items: center; justify-content: center;'>
          <div style='background-color: #ffffff; padding: 1.5rem; width: 768px;'>
            <div style='border-radius: 50%; background-color: #D8453D; width: 4rem; height: 4rem; margin: 1.5rem auto;'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                style='color: #fff;'
              >
                <path d='M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'></path>
              </svg>
            </div>
            <div style='text-align: center;'>
              <h3 style='font-size: 1.25rem; font-weight: 600; color: #1f2937; margin: 0;'>
                Email Verify Failed!
              </h3>
              <p style='color: #4b5563; margin: 0.5rem 0;'>
                ${e.message}
              </p>
              <p style='margin: 0.5rem 0;'>Have a great day!</p>
              <div style='padding-top: 2.5rem; text-align: center;'>
                <a
                  href="${this.configService.get('clientUrl')}"
                  style='padding: 0.75rem 3rem; background-color: #4f46e5; color: #ffffff; font-weight: 600; text-decoration: none; display: inline-block; transition: background-color 0.3s; border-radius: 0.375rem;'
                  onmouseover="this.style.backgroundColor='#6366f1';"
                  onmouseout="this.style.backgroundColor='#4f46e5';"
                >
                  GO TO WEBSITE
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>`);
    }
  }
}
