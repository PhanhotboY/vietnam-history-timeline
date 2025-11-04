import { ConfigurableModuleBuilder } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthUtilService } from './util';
import { ModuleOptionDto } from './dto/module-option.dto';
import { JwtModule } from '@nestjs/jwt';

export const { ConfigurableModuleClass: JwtAuthModule } =
  new ConfigurableModuleBuilder<ModuleOptionDto>()
    .setExtras<ModuleOptionDto>(
      { publicKey: process.env.JWT_PUBLIC_KEY!, global: false },
      (definition, { global, ...options }) => {
        return {
          ...definition,
          imports: [
            ...(definition.imports || []),
            JwtModule.register({
              publicKey: options.publicKey,
              signOptions: {
                algorithm: 'RS256',
              },
            }),
          ],
          providers: [
            ...(definition.providers || []),
            JwtStrategy,
            AuthUtilService,
            {
              provide: 'JWT_OPTIONS',
              useValue: options,
            },
          ],
          exports: [JwtModule, AuthUtilService],
          global: !!global,
        };
      }
    )
    .build();
