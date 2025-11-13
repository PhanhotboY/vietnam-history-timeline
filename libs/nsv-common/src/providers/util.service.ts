import { Inject, Injectable } from '@nestjs/common';
import _ from 'lodash';
import {
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from '../common.module-definition';

@Injectable()
export class UtilService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: typeof OPTIONS_TYPE,
  ) {}

  omit<T = Object>(obj: T, fields?: string[]): Partial<T> {
    if (!fields || !fields.length) return obj;

    return (Object.keys(obj as Object) as Array<keyof typeof obj>).reduce<
      Partial<T>
    >((object, field) => {
      if (!fields.includes(field as string)) object[field] = obj[field];

      return object;
    }, {});
  }

  isNullish = (val: any) => (val ?? null) === null;
  isEmptyObj = (obj: Object) => !Object.keys(obj).length;
  getSkipNumber = (limit: number, page: number) => limit * (page - 1);
  isObj = (obj: any) => obj instanceof Object && !Array.isArray(obj);
  capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  removeNullishElements(arr: Array<any>) {
    const final: typeof arr = [];

    arr.forEach((ele) => {
      if (!this.isNullish(ele) && ele !== '') {
        const result = this.removeNestedNullish(ele);
        if (result instanceof Object && this.isEmptyObj(result)) return;

        final[final.length] = result;
      }
    });

    return final.filter((ele) => !this.isNullish(ele) && ele);
  }

  removeNullishAttributes(obj: Record<string, any>) {
    const final: typeof obj = {};

    (Object.keys(obj) as Array<keyof typeof obj>).forEach((key) => {
      if (!this.isNullish(obj[key]) && obj[key] !== '') {
        const result = this.removeNestedNullish(obj[key]);

        if (result instanceof Object && this.isEmptyObj(result)) return;

        final[key] = result;
      }
    });

    return final;
  }

  removeNestedNullish<T>(any: any): T {
    if (any instanceof Array)
      return this.removeNullishElements(any as Array<any>) as T;
    if (any instanceof Object)
      return this.removeNullishAttributes(any as Object) as T;

    return any;
  }

  genCacheKey(...args: any[]) {
    return (
      this.options.cachePrefix +
      '|' +
      args.map((arg) => JSON.stringify(arg)).join(':')
    );
  }
}
