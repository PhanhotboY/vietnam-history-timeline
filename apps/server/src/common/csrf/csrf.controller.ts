import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { SetAuthMetadata } from '@/common/decorators';
import { APP } from '@shared/constants';

@Controller('csrf')
export class CsrfController {
  @Get('token')
  @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  getCsrfToken(@Req() req: Request, @Res() res: Response) {
    // The csrfToken function is attached to the request by csrf-csrf middleware
    const csrfToken = (req as any).csrfToken?.();

    if (!csrfToken) {
      return res.status(500).json({
        success: false,
        message: 'CSRF token generation failed',
      });
    }

    return res.json({
      success: true,
      data: {
        token: csrfToken,
      },
    });
  }
}
