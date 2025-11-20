import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ModuleOptionDto } from './dto/module-option.dto';
import { JwtModule } from '@nestjs/jwt';

export const {
  ConfigurableModuleClass,
  ASYNC_OPTIONS_TYPE,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<ModuleOptionDto>()
  .setExtras<ModuleOptionDto>(
    {
      publicKey: process.env.JWT_PUBLIC_KEY || '',
    },
    (definition, extras) => {
      return {
        ...definition,
        imports: [
          ...(definition.imports || []),
          JwtModule.register({
            signOptions: {
              algorithm: 'RS256',
            },
            publicKey: extras.publicKey,
          }),
        ],
        exports: [...(definition.exports || []), JwtModule],
      };
    },
  )
  .build();
