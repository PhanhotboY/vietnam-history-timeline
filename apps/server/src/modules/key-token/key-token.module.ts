import { Module } from '@nestjs/common';
import { KeyTokenService } from './key-token.service';
import { KeyTokenController } from './key-token.controller';

@Module({
  controllers: [KeyTokenController],
  providers: [KeyTokenService],
})
export class KeyTokenModule {}
