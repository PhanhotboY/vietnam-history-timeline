import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ApiKeyService } from '@/modules/api-key';
import { HEADER } from '@shared/constants';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private apiKeyService: ApiKeyService) {}

  async canActivate(context: ExecutionContext) {
    console.log('api key guard passed!');
    return true;
    // const request = context.switchToHttp().getRequest<Request>();
    // const apiKey = request.headers[HEADER.API_KEY];

    // if (!apiKey || typeof apiKey !== 'string') {
    //   throw new ForbiddenException('You should not be here!');
    // }

    // const objKey = await this.apiKeyService.findActiveApiKey(apiKey);

    // if (!objKey) {
    //   throw new ForbiddenException('Provided Api key does not exist!');
    // }
    // request.objKey = objKey;

    // return true;
  }
}
