import { Reflector } from '@nestjs/core';
import { Query } from 'accesscontrol';

export const Permissions = Reflector.createDecorator<[string, keyof Query]>();
