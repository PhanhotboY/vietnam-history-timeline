
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Grant
 * 
 */
export type Grant = $Result.DefaultSelection<Prisma.$GrantPayload>
/**
 * Model OTP
 * 
 */
export type OTP = $Result.DefaultSelection<Prisma.$OTPPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model KeyToken
 * 
 */
export type KeyToken = $Result.DefaultSelection<Prisma.$KeyTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserSex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type UserSex = (typeof UserSex)[keyof typeof UserSex]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const RoleStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type RoleStatus = (typeof RoleStatus)[keyof typeof RoleStatus]


export const OTPStatus: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  BLOCKED: 'BLOCKED'
};

export type OTPStatus = (typeof OTPStatus)[keyof typeof OTPStatus]


export const ApiKeyPermission: {
  READ: 'READ',
  WRITE: 'WRITE',
  DELETE: 'DELETE',
  ALL: 'ALL'
};

export type ApiKeyPermission = (typeof ApiKeyPermission)[keyof typeof ApiKeyPermission]

}

export type UserSex = $Enums.UserSex

export const UserSex: typeof $Enums.UserSex

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type RoleStatus = $Enums.RoleStatus

export const RoleStatus: typeof $Enums.RoleStatus

export type OTPStatus = $Enums.OTPStatus

export const OTPStatus: typeof $Enums.OTPStatus

export type ApiKeyPermission = $Enums.ApiKeyPermission

export const ApiKeyPermission: typeof $Enums.ApiKeyPermission

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grant`: Exposes CRUD operations for the **Grant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grants
    * const grants = await prisma.grant.findMany()
    * ```
    */
  get grant(): Prisma.GrantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPS
    * const oTPS = await prisma.oTP.findMany()
    * ```
    */
  get oTP(): Prisma.OTPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyToken`: Exposes CRUD operations for the **KeyToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeyTokens
    * const keyTokens = await prisma.keyToken.findMany()
    * ```
    */
  get keyToken(): Prisma.KeyTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resource: 'Resource',
    Role: 'Role',
    Grant: 'Grant',
    OTP: 'OTP',
    ApiKey: 'ApiKey',
    KeyToken: 'KeyToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resource" | "role" | "grant" | "oTP" | "apiKey" | "keyToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Grant: {
        payload: Prisma.$GrantPayload<ExtArgs>
        fields: Prisma.GrantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>
          }
          findFirst: {
            args: Prisma.GrantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>
          }
          findMany: {
            args: Prisma.GrantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>[]
          }
          create: {
            args: Prisma.GrantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>
          }
          createMany: {
            args: Prisma.GrantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>[]
          }
          delete: {
            args: Prisma.GrantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>
          }
          update: {
            args: Prisma.GrantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>
          }
          deleteMany: {
            args: Prisma.GrantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>[]
          }
          upsert: {
            args: Prisma.GrantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrantPayload>
          }
          aggregate: {
            args: Prisma.GrantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrant>
          }
          groupBy: {
            args: Prisma.GrantGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrantGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrantCountArgs<ExtArgs>
            result: $Utils.Optional<GrantCountAggregateOutputType> | number
          }
        }
      }
      OTP: {
        payload: Prisma.$OTPPayload<ExtArgs>
        fields: Prisma.OTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findFirst: {
            args: Prisma.OTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findMany: {
            args: Prisma.OTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          create: {
            args: Prisma.OTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          createMany: {
            args: Prisma.OTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          delete: {
            args: Prisma.OTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          update: {
            args: Prisma.OTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          deleteMany: {
            args: Prisma.OTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OTPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          upsert: {
            args: Prisma.OTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          aggregate: {
            args: Prisma.OTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTP>
          }
          groupBy: {
            args: Prisma.OTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTPCountArgs<ExtArgs>
            result: $Utils.Optional<OTPCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      KeyToken: {
        payload: Prisma.$KeyTokenPayload<ExtArgs>
        fields: Prisma.KeyTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>
          }
          findFirst: {
            args: Prisma.KeyTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>
          }
          findMany: {
            args: Prisma.KeyTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>[]
          }
          create: {
            args: Prisma.KeyTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>
          }
          createMany: {
            args: Prisma.KeyTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>[]
          }
          delete: {
            args: Prisma.KeyTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>
          }
          update: {
            args: Prisma.KeyTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>
          }
          deleteMany: {
            args: Prisma.KeyTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>[]
          }
          upsert: {
            args: Prisma.KeyTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyTokenPayload>
          }
          aggregate: {
            args: Prisma.KeyTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyToken>
          }
          groupBy: {
            args: Prisma.KeyTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyTokenCountArgs<ExtArgs>
            result: $Utils.Optional<KeyTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resource?: ResourceOmit
    role?: RoleOmit
    grant?: GrantOmit
    oTP?: OTPOmit
    apiKey?: ApiKeyOmit
    keyToken?: KeyTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    keyToken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyToken?: boolean | UserCountOutputTypeCountKeyTokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKeyTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyTokenWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    roles: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | ResourceCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrantWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    grants: number
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grants?: boolean | RoleCountOutputTypeCountGrantsArgs
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountGrantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrantWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    slug: string | null
    password: string | null
    salt: string | null
    avatar: string | null
    address: string | null
    birthdate: Date | null
    msisdn: string | null
    sex: $Enums.UserSex | null
    status: $Enums.UserStatus | null
    roleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    slug: string | null
    password: string | null
    salt: string | null
    avatar: string | null
    address: string | null
    birthdate: Date | null
    msisdn: string | null
    sex: $Enums.UserSex | null
    status: $Enums.UserStatus | null
    roleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    firstName: number
    lastName: number
    slug: number
    password: number
    salt: number
    avatar: number
    address: number
    birthdate: number
    msisdn: number
    sex: number
    status: number
    roleId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    slug?: true
    password?: true
    salt?: true
    avatar?: true
    address?: true
    birthdate?: true
    msisdn?: true
    sex?: true
    status?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    slug?: true
    password?: true
    salt?: true
    avatar?: true
    address?: true
    birthdate?: true
    msisdn?: true
    sex?: true
    status?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    slug?: true
    password?: true
    salt?: true
    avatar?: true
    address?: true
    birthdate?: true
    msisdn?: true
    sex?: true
    status?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    firstName: string
    lastName: string | null
    slug: string
    password: string
    salt: string
    avatar: string | null
    address: string | null
    birthdate: Date | null
    msisdn: string | null
    sex: $Enums.UserSex | null
    status: $Enums.UserStatus
    roleId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    slug?: boolean
    password?: boolean
    salt?: boolean
    avatar?: boolean
    address?: boolean
    birthdate?: boolean
    msisdn?: boolean
    sex?: boolean
    status?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    keyToken?: boolean | User$keyTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    slug?: boolean
    password?: boolean
    salt?: boolean
    avatar?: boolean
    address?: boolean
    birthdate?: boolean
    msisdn?: boolean
    sex?: boolean
    status?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    slug?: boolean
    password?: boolean
    salt?: boolean
    avatar?: boolean
    address?: boolean
    birthdate?: boolean
    msisdn?: boolean
    sex?: boolean
    status?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    slug?: boolean
    password?: boolean
    salt?: boolean
    avatar?: boolean
    address?: boolean
    birthdate?: boolean
    msisdn?: boolean
    sex?: boolean
    status?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "firstName" | "lastName" | "slug" | "password" | "salt" | "avatar" | "address" | "birthdate" | "msisdn" | "sex" | "status" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    keyToken?: boolean | User$keyTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      keyToken: Prisma.$KeyTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      firstName: string
      lastName: string | null
      slug: string
      password: string
      salt: string
      avatar: string | null
      address: string | null
      birthdate: Date | null
      msisdn: string | null
      sex: $Enums.UserSex | null
      status: $Enums.UserStatus
      roleId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keyToken<T extends User$keyTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$keyTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly slug: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly msisdn: FieldRef<"User", 'String'>
    readonly sex: FieldRef<"User", 'UserSex'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly roleId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.keyToken
   */
  export type User$keyTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    where?: KeyTokenWhereInput
    orderBy?: KeyTokenOrderByWithRelationInput | KeyTokenOrderByWithRelationInput[]
    cursor?: KeyTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeyTokenScalarFieldEnum | KeyTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    _all: number
  }


  export type ResourceMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    roles?: boolean | Resource$rolesArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Resource$rolesArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      roles: Prisma.$GrantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Resource$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Resource$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly name: FieldRef<"Resource", 'String'>
    readonly slug: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.roles
   */
  export type Resource$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    where?: GrantWhereInput
    orderBy?: GrantOrderByWithRelationInput | GrantOrderByWithRelationInput[]
    cursor?: GrantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrantScalarFieldEnum | GrantScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    status: $Enums.RoleStatus | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    status: $Enums.RoleStatus | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    status: number
    description: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    slug: string
    status: $Enums.RoleStatus
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    description?: boolean
    grants?: boolean | Role$grantsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    description?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "status" | "description", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grants?: boolean | Role$grantsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      grants: Prisma.$GrantPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      status: $Enums.RoleStatus
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grants<T extends Role$grantsArgs<ExtArgs> = {}>(args?: Subset<T, Role$grantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly slug: FieldRef<"Role", 'String'>
    readonly status: FieldRef<"Role", 'RoleStatus'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.grants
   */
  export type Role$grantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    where?: GrantWhereInput
    orderBy?: GrantOrderByWithRelationInput | GrantOrderByWithRelationInput[]
    cursor?: GrantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrantScalarFieldEnum | GrantScalarFieldEnum[]
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Grant
   */

  export type AggregateGrant = {
    _count: GrantCountAggregateOutputType | null
    _min: GrantMinAggregateOutputType | null
    _max: GrantMaxAggregateOutputType | null
  }

  export type GrantMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    resourceId: string | null
    action: string | null
    attribute: string | null
  }

  export type GrantMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    resourceId: string | null
    action: string | null
    attribute: string | null
  }

  export type GrantCountAggregateOutputType = {
    id: number
    roleId: number
    resourceId: number
    action: number
    attribute: number
    _all: number
  }


  export type GrantMinAggregateInputType = {
    id?: true
    roleId?: true
    resourceId?: true
    action?: true
    attribute?: true
  }

  export type GrantMaxAggregateInputType = {
    id?: true
    roleId?: true
    resourceId?: true
    action?: true
    attribute?: true
  }

  export type GrantCountAggregateInputType = {
    id?: true
    roleId?: true
    resourceId?: true
    action?: true
    attribute?: true
    _all?: true
  }

  export type GrantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grant to aggregate.
     */
    where?: GrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grants to fetch.
     */
    orderBy?: GrantOrderByWithRelationInput | GrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grants
    **/
    _count?: true | GrantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrantMaxAggregateInputType
  }

  export type GetGrantAggregateType<T extends GrantAggregateArgs> = {
        [P in keyof T & keyof AggregateGrant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrant[P]>
      : GetScalarType<T[P], AggregateGrant[P]>
  }




  export type GrantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrantWhereInput
    orderBy?: GrantOrderByWithAggregationInput | GrantOrderByWithAggregationInput[]
    by: GrantScalarFieldEnum[] | GrantScalarFieldEnum
    having?: GrantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrantCountAggregateInputType | true
    _min?: GrantMinAggregateInputType
    _max?: GrantMaxAggregateInputType
  }

  export type GrantGroupByOutputType = {
    id: string
    roleId: string
    resourceId: string
    action: string
    attribute: string
    _count: GrantCountAggregateOutputType | null
    _min: GrantMinAggregateOutputType | null
    _max: GrantMaxAggregateOutputType | null
  }

  type GetGrantGroupByPayload<T extends GrantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrantGroupByOutputType[P]>
            : GetScalarType<T[P], GrantGroupByOutputType[P]>
        }
      >
    >


  export type GrantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    attribute?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grant"]>

  export type GrantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    attribute?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grant"]>

  export type GrantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    attribute?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grant"]>

  export type GrantSelectScalar = {
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    attribute?: boolean
  }

  export type GrantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "resourceId" | "action" | "attribute", ExtArgs["result"]["grant"]>
  export type GrantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type GrantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type GrantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }

  export type $GrantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grant"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      resourceId: string
      action: string
      attribute: string
    }, ExtArgs["result"]["grant"]>
    composites: {}
  }

  type GrantGetPayload<S extends boolean | null | undefined | GrantDefaultArgs> = $Result.GetResult<Prisma.$GrantPayload, S>

  type GrantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrantCountAggregateInputType | true
    }

  export interface GrantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grant'], meta: { name: 'Grant' } }
    /**
     * Find zero or one Grant that matches the filter.
     * @param {GrantFindUniqueArgs} args - Arguments to find a Grant
     * @example
     * // Get one Grant
     * const grant = await prisma.grant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrantFindUniqueArgs>(args: SelectSubset<T, GrantFindUniqueArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrantFindUniqueOrThrowArgs} args - Arguments to find a Grant
     * @example
     * // Get one Grant
     * const grant = await prisma.grant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrantFindUniqueOrThrowArgs>(args: SelectSubset<T, GrantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrantFindFirstArgs} args - Arguments to find a Grant
     * @example
     * // Get one Grant
     * const grant = await prisma.grant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrantFindFirstArgs>(args?: SelectSubset<T, GrantFindFirstArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrantFindFirstOrThrowArgs} args - Arguments to find a Grant
     * @example
     * // Get one Grant
     * const grant = await prisma.grant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrantFindFirstOrThrowArgs>(args?: SelectSubset<T, GrantFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grants
     * const grants = await prisma.grant.findMany()
     * 
     * // Get first 10 Grants
     * const grants = await prisma.grant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grantWithIdOnly = await prisma.grant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrantFindManyArgs>(args?: SelectSubset<T, GrantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grant.
     * @param {GrantCreateArgs} args - Arguments to create a Grant.
     * @example
     * // Create one Grant
     * const Grant = await prisma.grant.create({
     *   data: {
     *     // ... data to create a Grant
     *   }
     * })
     * 
     */
    create<T extends GrantCreateArgs>(args: SelectSubset<T, GrantCreateArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grants.
     * @param {GrantCreateManyArgs} args - Arguments to create many Grants.
     * @example
     * // Create many Grants
     * const grant = await prisma.grant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrantCreateManyArgs>(args?: SelectSubset<T, GrantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grants and returns the data saved in the database.
     * @param {GrantCreateManyAndReturnArgs} args - Arguments to create many Grants.
     * @example
     * // Create many Grants
     * const grant = await prisma.grant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grants and only return the `id`
     * const grantWithIdOnly = await prisma.grant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrantCreateManyAndReturnArgs>(args?: SelectSubset<T, GrantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grant.
     * @param {GrantDeleteArgs} args - Arguments to delete one Grant.
     * @example
     * // Delete one Grant
     * const Grant = await prisma.grant.delete({
     *   where: {
     *     // ... filter to delete one Grant
     *   }
     * })
     * 
     */
    delete<T extends GrantDeleteArgs>(args: SelectSubset<T, GrantDeleteArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grant.
     * @param {GrantUpdateArgs} args - Arguments to update one Grant.
     * @example
     * // Update one Grant
     * const grant = await prisma.grant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrantUpdateArgs>(args: SelectSubset<T, GrantUpdateArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grants.
     * @param {GrantDeleteManyArgs} args - Arguments to filter Grants to delete.
     * @example
     * // Delete a few Grants
     * const { count } = await prisma.grant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrantDeleteManyArgs>(args?: SelectSubset<T, GrantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grants
     * const grant = await prisma.grant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrantUpdateManyArgs>(args: SelectSubset<T, GrantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grants and returns the data updated in the database.
     * @param {GrantUpdateManyAndReturnArgs} args - Arguments to update many Grants.
     * @example
     * // Update many Grants
     * const grant = await prisma.grant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grants and only return the `id`
     * const grantWithIdOnly = await prisma.grant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrantUpdateManyAndReturnArgs>(args: SelectSubset<T, GrantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grant.
     * @param {GrantUpsertArgs} args - Arguments to update or create a Grant.
     * @example
     * // Update or create a Grant
     * const grant = await prisma.grant.upsert({
     *   create: {
     *     // ... data to create a Grant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grant we want to update
     *   }
     * })
     */
    upsert<T extends GrantUpsertArgs>(args: SelectSubset<T, GrantUpsertArgs<ExtArgs>>): Prisma__GrantClient<$Result.GetResult<Prisma.$GrantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrantCountArgs} args - Arguments to filter Grants to count.
     * @example
     * // Count the number of Grants
     * const count = await prisma.grant.count({
     *   where: {
     *     // ... the filter for the Grants we want to count
     *   }
     * })
    **/
    count<T extends GrantCountArgs>(
      args?: Subset<T, GrantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrantAggregateArgs>(args: Subset<T, GrantAggregateArgs>): Prisma.PrismaPromise<GetGrantAggregateType<T>>

    /**
     * Group by Grant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrantGroupByArgs['orderBy'] }
        : { orderBy?: GrantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grant model
   */
  readonly fields: GrantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grant model
   */
  interface GrantFieldRefs {
    readonly id: FieldRef<"Grant", 'String'>
    readonly roleId: FieldRef<"Grant", 'String'>
    readonly resourceId: FieldRef<"Grant", 'String'>
    readonly action: FieldRef<"Grant", 'String'>
    readonly attribute: FieldRef<"Grant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Grant findUnique
   */
  export type GrantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * Filter, which Grant to fetch.
     */
    where: GrantWhereUniqueInput
  }

  /**
   * Grant findUniqueOrThrow
   */
  export type GrantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * Filter, which Grant to fetch.
     */
    where: GrantWhereUniqueInput
  }

  /**
   * Grant findFirst
   */
  export type GrantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * Filter, which Grant to fetch.
     */
    where?: GrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grants to fetch.
     */
    orderBy?: GrantOrderByWithRelationInput | GrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grants.
     */
    cursor?: GrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grants.
     */
    distinct?: GrantScalarFieldEnum | GrantScalarFieldEnum[]
  }

  /**
   * Grant findFirstOrThrow
   */
  export type GrantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * Filter, which Grant to fetch.
     */
    where?: GrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grants to fetch.
     */
    orderBy?: GrantOrderByWithRelationInput | GrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grants.
     */
    cursor?: GrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grants.
     */
    distinct?: GrantScalarFieldEnum | GrantScalarFieldEnum[]
  }

  /**
   * Grant findMany
   */
  export type GrantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * Filter, which Grants to fetch.
     */
    where?: GrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grants to fetch.
     */
    orderBy?: GrantOrderByWithRelationInput | GrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grants.
     */
    cursor?: GrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grants.
     */
    skip?: number
    distinct?: GrantScalarFieldEnum | GrantScalarFieldEnum[]
  }

  /**
   * Grant create
   */
  export type GrantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * The data needed to create a Grant.
     */
    data: XOR<GrantCreateInput, GrantUncheckedCreateInput>
  }

  /**
   * Grant createMany
   */
  export type GrantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grants.
     */
    data: GrantCreateManyInput | GrantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grant createManyAndReturn
   */
  export type GrantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * The data used to create many Grants.
     */
    data: GrantCreateManyInput | GrantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grant update
   */
  export type GrantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * The data needed to update a Grant.
     */
    data: XOR<GrantUpdateInput, GrantUncheckedUpdateInput>
    /**
     * Choose, which Grant to update.
     */
    where: GrantWhereUniqueInput
  }

  /**
   * Grant updateMany
   */
  export type GrantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grants.
     */
    data: XOR<GrantUpdateManyMutationInput, GrantUncheckedUpdateManyInput>
    /**
     * Filter which Grants to update
     */
    where?: GrantWhereInput
    /**
     * Limit how many Grants to update.
     */
    limit?: number
  }

  /**
   * Grant updateManyAndReturn
   */
  export type GrantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * The data used to update Grants.
     */
    data: XOR<GrantUpdateManyMutationInput, GrantUncheckedUpdateManyInput>
    /**
     * Filter which Grants to update
     */
    where?: GrantWhereInput
    /**
     * Limit how many Grants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grant upsert
   */
  export type GrantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * The filter to search for the Grant to update in case it exists.
     */
    where: GrantWhereUniqueInput
    /**
     * In case the Grant found by the `where` argument doesn't exist, create a new Grant with this data.
     */
    create: XOR<GrantCreateInput, GrantUncheckedCreateInput>
    /**
     * In case the Grant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrantUpdateInput, GrantUncheckedUpdateInput>
  }

  /**
   * Grant delete
   */
  export type GrantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
    /**
     * Filter which Grant to delete.
     */
    where: GrantWhereUniqueInput
  }

  /**
   * Grant deleteMany
   */
  export type GrantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grants to delete
     */
    where?: GrantWhereInput
    /**
     * Limit how many Grants to delete.
     */
    limit?: number
  }

  /**
   * Grant without action
   */
  export type GrantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grant
     */
    select?: GrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grant
     */
    omit?: GrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrantInclude<ExtArgs> | null
  }


  /**
   * Model OTP
   */

  export type AggregateOTP = {
    _count: OTPCountAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  export type OTPMinAggregateOutputType = {
    id: string | null
    token: string | null
    email: string | null
    status: $Enums.OTPStatus | null
    expiresAt: Date | null
  }

  export type OTPMaxAggregateOutputType = {
    id: string | null
    token: string | null
    email: string | null
    status: $Enums.OTPStatus | null
    expiresAt: Date | null
  }

  export type OTPCountAggregateOutputType = {
    id: number
    token: number
    email: number
    status: number
    expiresAt: number
    _all: number
  }


  export type OTPMinAggregateInputType = {
    id?: true
    token?: true
    email?: true
    status?: true
    expiresAt?: true
  }

  export type OTPMaxAggregateInputType = {
    id?: true
    token?: true
    email?: true
    status?: true
    expiresAt?: true
  }

  export type OTPCountAggregateInputType = {
    id?: true
    token?: true
    email?: true
    status?: true
    expiresAt?: true
    _all?: true
  }

  export type OTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTP to aggregate.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPS
    **/
    _count?: true | OTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPMaxAggregateInputType
  }

  export type GetOTPAggregateType<T extends OTPAggregateArgs> = {
        [P in keyof T & keyof AggregateOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTP[P]>
      : GetScalarType<T[P], AggregateOTP[P]>
  }




  export type OTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithAggregationInput | OTPOrderByWithAggregationInput[]
    by: OTPScalarFieldEnum[] | OTPScalarFieldEnum
    having?: OTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPCountAggregateInputType | true
    _min?: OTPMinAggregateInputType
    _max?: OTPMaxAggregateInputType
  }

  export type OTPGroupByOutputType = {
    id: string
    token: string
    email: string
    status: $Enums.OTPStatus
    expiresAt: Date
    _count: OTPCountAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  type GetOTPGroupByPayload<T extends OTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPGroupByOutputType[P]>
            : GetScalarType<T[P], OTPGroupByOutputType[P]>
        }
      >
    >


  export type OTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    status?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    status?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    status?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectScalar = {
    id?: boolean
    token?: boolean
    email?: boolean
    status?: boolean
    expiresAt?: boolean
  }

  export type OTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "email" | "status" | "expiresAt", ExtArgs["result"]["oTP"]>

  export type $OTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      email: string
      status: $Enums.OTPStatus
      expiresAt: Date
    }, ExtArgs["result"]["oTP"]>
    composites: {}
  }

  type OTPGetPayload<S extends boolean | null | undefined | OTPDefaultArgs> = $Result.GetResult<Prisma.$OTPPayload, S>

  type OTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTPCountAggregateInputType | true
    }

  export interface OTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTP'], meta: { name: 'OTP' } }
    /**
     * Find zero or one OTP that matches the filter.
     * @param {OTPFindUniqueArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPFindUniqueArgs>(args: SelectSubset<T, OTPFindUniqueArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTPFindUniqueOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPFindFirstArgs>(args?: SelectSubset<T, OTPFindFirstArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPS
     * const oTPS = await prisma.oTP.findMany()
     * 
     * // Get first 10 OTPS
     * const oTPS = await prisma.oTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPWithIdOnly = await prisma.oTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPFindManyArgs>(args?: SelectSubset<T, OTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OTP.
     * @param {OTPCreateArgs} args - Arguments to create a OTP.
     * @example
     * // Create one OTP
     * const OTP = await prisma.oTP.create({
     *   data: {
     *     // ... data to create a OTP
     *   }
     * })
     * 
     */
    create<T extends OTPCreateArgs>(args: SelectSubset<T, OTPCreateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OTPS.
     * @param {OTPCreateManyArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPCreateManyArgs>(args?: SelectSubset<T, OTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OTPS and returns the data saved in the database.
     * @param {OTPCreateManyAndReturnArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OTPCreateManyAndReturnArgs>(args?: SelectSubset<T, OTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OTP.
     * @param {OTPDeleteArgs} args - Arguments to delete one OTP.
     * @example
     * // Delete one OTP
     * const OTP = await prisma.oTP.delete({
     *   where: {
     *     // ... filter to delete one OTP
     *   }
     * })
     * 
     */
    delete<T extends OTPDeleteArgs>(args: SelectSubset<T, OTPDeleteArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OTP.
     * @param {OTPUpdateArgs} args - Arguments to update one OTP.
     * @example
     * // Update one OTP
     * const oTP = await prisma.oTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPUpdateArgs>(args: SelectSubset<T, OTPUpdateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OTPS.
     * @param {OTPDeleteManyArgs} args - Arguments to filter OTPS to delete.
     * @example
     * // Delete a few OTPS
     * const { count } = await prisma.oTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPDeleteManyArgs>(args?: SelectSubset<T, OTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPUpdateManyArgs>(args: SelectSubset<T, OTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS and returns the data updated in the database.
     * @param {OTPUpdateManyAndReturnArgs} args - Arguments to update many OTPS.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OTPUpdateManyAndReturnArgs>(args: SelectSubset<T, OTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OTP.
     * @param {OTPUpsertArgs} args - Arguments to update or create a OTP.
     * @example
     * // Update or create a OTP
     * const oTP = await prisma.oTP.upsert({
     *   create: {
     *     // ... data to create a OTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTP we want to update
     *   }
     * })
     */
    upsert<T extends OTPUpsertArgs>(args: SelectSubset<T, OTPUpsertArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPCountArgs} args - Arguments to filter OTPS to count.
     * @example
     * // Count the number of OTPS
     * const count = await prisma.oTP.count({
     *   where: {
     *     // ... the filter for the OTPS we want to count
     *   }
     * })
    **/
    count<T extends OTPCountArgs>(
      args?: Subset<T, OTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTPAggregateArgs>(args: Subset<T, OTPAggregateArgs>): Prisma.PrismaPromise<GetOTPAggregateType<T>>

    /**
     * Group by OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPGroupByArgs['orderBy'] }
        : { orderBy?: OTPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTP model
   */
  readonly fields: OTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OTP model
   */
  interface OTPFieldRefs {
    readonly id: FieldRef<"OTP", 'String'>
    readonly token: FieldRef<"OTP", 'String'>
    readonly email: FieldRef<"OTP", 'String'>
    readonly status: FieldRef<"OTP", 'OTPStatus'>
    readonly expiresAt: FieldRef<"OTP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OTP findUnique
   */
  export type OTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findUniqueOrThrow
   */
  export type OTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findFirst
   */
  export type OTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findFirstOrThrow
   */
  export type OTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findMany
   */
  export type OTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Filter, which OTPS to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP create
   */
  export type OTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data needed to create a OTP.
     */
    data: XOR<OTPCreateInput, OTPUncheckedCreateInput>
  }

  /**
   * OTP createMany
   */
  export type OTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTP createManyAndReturn
   */
  export type OTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTP update
   */
  export type OTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data needed to update a OTP.
     */
    data: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
    /**
     * Choose, which OTP to update.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP updateMany
   */
  export type OTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
  }

  /**
   * OTP updateManyAndReturn
   */
  export type OTPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
  }

  /**
   * OTP upsert
   */
  export type OTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The filter to search for the OTP to update in case it exists.
     */
    where: OTPWhereUniqueInput
    /**
     * In case the OTP found by the `where` argument doesn't exist, create a new OTP with this data.
     */
    create: XOR<OTPCreateInput, OTPUncheckedCreateInput>
    /**
     * In case the OTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
  }

  /**
   * OTP delete
   */
  export type OTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Filter which OTP to delete.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP deleteMany
   */
  export type OTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPS to delete
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to delete.
     */
    limit?: number
  }

  /**
   * OTP without action
   */
  export type OTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    status: boolean | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    status: boolean | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    status: number
    permissions: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    status?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    status?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    status?: true
    permissions?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    status: boolean
    permissions: $Enums.ApiKeyPermission[]
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    status?: boolean
    permissions?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "status" | "permissions", ExtArgs["result"]["apiKey"]>

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      status: boolean
      permissions: $Enums.ApiKeyPermission[]
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly status: FieldRef<"ApiKey", 'Boolean'>
    readonly permissions: FieldRef<"ApiKey", 'ApiKeyPermission[]'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
  }


  /**
   * Model KeyToken
   */

  export type AggregateKeyToken = {
    _count: KeyTokenCountAggregateOutputType | null
    _min: KeyTokenMinAggregateOutputType | null
    _max: KeyTokenMaxAggregateOutputType | null
  }

  export type KeyTokenMinAggregateOutputType = {
    id: string | null
    browserId: string | null
    publicKey: string | null
    privateKey: string | null
    refreshToken: string | null
    userId: string | null
  }

  export type KeyTokenMaxAggregateOutputType = {
    id: string | null
    browserId: string | null
    publicKey: string | null
    privateKey: string | null
    refreshToken: string | null
    userId: string | null
  }

  export type KeyTokenCountAggregateOutputType = {
    id: number
    browserId: number
    publicKey: number
    privateKey: number
    refreshTokensUsed: number
    refreshToken: number
    userId: number
    _all: number
  }


  export type KeyTokenMinAggregateInputType = {
    id?: true
    browserId?: true
    publicKey?: true
    privateKey?: true
    refreshToken?: true
    userId?: true
  }

  export type KeyTokenMaxAggregateInputType = {
    id?: true
    browserId?: true
    publicKey?: true
    privateKey?: true
    refreshToken?: true
    userId?: true
  }

  export type KeyTokenCountAggregateInputType = {
    id?: true
    browserId?: true
    publicKey?: true
    privateKey?: true
    refreshTokensUsed?: true
    refreshToken?: true
    userId?: true
    _all?: true
  }

  export type KeyTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyToken to aggregate.
     */
    where?: KeyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyTokens to fetch.
     */
    orderBy?: KeyTokenOrderByWithRelationInput | KeyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeyTokens
    **/
    _count?: true | KeyTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyTokenMaxAggregateInputType
  }

  export type GetKeyTokenAggregateType<T extends KeyTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyToken[P]>
      : GetScalarType<T[P], AggregateKeyToken[P]>
  }




  export type KeyTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyTokenWhereInput
    orderBy?: KeyTokenOrderByWithAggregationInput | KeyTokenOrderByWithAggregationInput[]
    by: KeyTokenScalarFieldEnum[] | KeyTokenScalarFieldEnum
    having?: KeyTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyTokenCountAggregateInputType | true
    _min?: KeyTokenMinAggregateInputType
    _max?: KeyTokenMaxAggregateInputType
  }

  export type KeyTokenGroupByOutputType = {
    id: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed: string[]
    refreshToken: string
    userId: string
    _count: KeyTokenCountAggregateOutputType | null
    _min: KeyTokenMinAggregateOutputType | null
    _max: KeyTokenMaxAggregateOutputType | null
  }

  type GetKeyTokenGroupByPayload<T extends KeyTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyTokenGroupByOutputType[P]>
            : GetScalarType<T[P], KeyTokenGroupByOutputType[P]>
        }
      >
    >


  export type KeyTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    browserId?: boolean
    publicKey?: boolean
    privateKey?: boolean
    refreshTokensUsed?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyToken"]>

  export type KeyTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    browserId?: boolean
    publicKey?: boolean
    privateKey?: boolean
    refreshTokensUsed?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyToken"]>

  export type KeyTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    browserId?: boolean
    publicKey?: boolean
    privateKey?: boolean
    refreshTokensUsed?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyToken"]>

  export type KeyTokenSelectScalar = {
    id?: boolean
    browserId?: boolean
    publicKey?: boolean
    privateKey?: boolean
    refreshTokensUsed?: boolean
    refreshToken?: boolean
    userId?: boolean
  }

  export type KeyTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "browserId" | "publicKey" | "privateKey" | "refreshTokensUsed" | "refreshToken" | "userId", ExtArgs["result"]["keyToken"]>
  export type KeyTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KeyTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KeyTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KeyTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeyToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      browserId: string
      publicKey: string
      privateKey: string
      refreshTokensUsed: string[]
      refreshToken: string
      userId: string
    }, ExtArgs["result"]["keyToken"]>
    composites: {}
  }

  type KeyTokenGetPayload<S extends boolean | null | undefined | KeyTokenDefaultArgs> = $Result.GetResult<Prisma.$KeyTokenPayload, S>

  type KeyTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyTokenCountAggregateInputType | true
    }

  export interface KeyTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeyToken'], meta: { name: 'KeyToken' } }
    /**
     * Find zero or one KeyToken that matches the filter.
     * @param {KeyTokenFindUniqueArgs} args - Arguments to find a KeyToken
     * @example
     * // Get one KeyToken
     * const keyToken = await prisma.keyToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyTokenFindUniqueArgs>(args: SelectSubset<T, KeyTokenFindUniqueArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeyToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyTokenFindUniqueOrThrowArgs} args - Arguments to find a KeyToken
     * @example
     * // Get one KeyToken
     * const keyToken = await prisma.keyToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyTokenFindFirstArgs} args - Arguments to find a KeyToken
     * @example
     * // Get one KeyToken
     * const keyToken = await prisma.keyToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyTokenFindFirstArgs>(args?: SelectSubset<T, KeyTokenFindFirstArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyTokenFindFirstOrThrowArgs} args - Arguments to find a KeyToken
     * @example
     * // Get one KeyToken
     * const keyToken = await prisma.keyToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeyTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeyTokens
     * const keyTokens = await prisma.keyToken.findMany()
     * 
     * // Get first 10 KeyTokens
     * const keyTokens = await prisma.keyToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyTokenWithIdOnly = await prisma.keyToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyTokenFindManyArgs>(args?: SelectSubset<T, KeyTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeyToken.
     * @param {KeyTokenCreateArgs} args - Arguments to create a KeyToken.
     * @example
     * // Create one KeyToken
     * const KeyToken = await prisma.keyToken.create({
     *   data: {
     *     // ... data to create a KeyToken
     *   }
     * })
     * 
     */
    create<T extends KeyTokenCreateArgs>(args: SelectSubset<T, KeyTokenCreateArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeyTokens.
     * @param {KeyTokenCreateManyArgs} args - Arguments to create many KeyTokens.
     * @example
     * // Create many KeyTokens
     * const keyToken = await prisma.keyToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyTokenCreateManyArgs>(args?: SelectSubset<T, KeyTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeyTokens and returns the data saved in the database.
     * @param {KeyTokenCreateManyAndReturnArgs} args - Arguments to create many KeyTokens.
     * @example
     * // Create many KeyTokens
     * const keyToken = await prisma.keyToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeyTokens and only return the `id`
     * const keyTokenWithIdOnly = await prisma.keyToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeyToken.
     * @param {KeyTokenDeleteArgs} args - Arguments to delete one KeyToken.
     * @example
     * // Delete one KeyToken
     * const KeyToken = await prisma.keyToken.delete({
     *   where: {
     *     // ... filter to delete one KeyToken
     *   }
     * })
     * 
     */
    delete<T extends KeyTokenDeleteArgs>(args: SelectSubset<T, KeyTokenDeleteArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeyToken.
     * @param {KeyTokenUpdateArgs} args - Arguments to update one KeyToken.
     * @example
     * // Update one KeyToken
     * const keyToken = await prisma.keyToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyTokenUpdateArgs>(args: SelectSubset<T, KeyTokenUpdateArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeyTokens.
     * @param {KeyTokenDeleteManyArgs} args - Arguments to filter KeyTokens to delete.
     * @example
     * // Delete a few KeyTokens
     * const { count } = await prisma.keyToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyTokenDeleteManyArgs>(args?: SelectSubset<T, KeyTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeyTokens
     * const keyToken = await prisma.keyToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyTokenUpdateManyArgs>(args: SelectSubset<T, KeyTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyTokens and returns the data updated in the database.
     * @param {KeyTokenUpdateManyAndReturnArgs} args - Arguments to update many KeyTokens.
     * @example
     * // Update many KeyTokens
     * const keyToken = await prisma.keyToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeyTokens and only return the `id`
     * const keyTokenWithIdOnly = await prisma.keyToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeyTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeyToken.
     * @param {KeyTokenUpsertArgs} args - Arguments to update or create a KeyToken.
     * @example
     * // Update or create a KeyToken
     * const keyToken = await prisma.keyToken.upsert({
     *   create: {
     *     // ... data to create a KeyToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeyToken we want to update
     *   }
     * })
     */
    upsert<T extends KeyTokenUpsertArgs>(args: SelectSubset<T, KeyTokenUpsertArgs<ExtArgs>>): Prisma__KeyTokenClient<$Result.GetResult<Prisma.$KeyTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyTokenCountArgs} args - Arguments to filter KeyTokens to count.
     * @example
     * // Count the number of KeyTokens
     * const count = await prisma.keyToken.count({
     *   where: {
     *     // ... the filter for the KeyTokens we want to count
     *   }
     * })
    **/
    count<T extends KeyTokenCountArgs>(
      args?: Subset<T, KeyTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeyToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeyTokenAggregateArgs>(args: Subset<T, KeyTokenAggregateArgs>): Prisma.PrismaPromise<GetKeyTokenAggregateType<T>>

    /**
     * Group by KeyToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeyTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyTokenGroupByArgs['orderBy'] }
        : { orderBy?: KeyTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeyTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeyToken model
   */
  readonly fields: KeyTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeyToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeyToken model
   */
  interface KeyTokenFieldRefs {
    readonly id: FieldRef<"KeyToken", 'String'>
    readonly browserId: FieldRef<"KeyToken", 'String'>
    readonly publicKey: FieldRef<"KeyToken", 'String'>
    readonly privateKey: FieldRef<"KeyToken", 'String'>
    readonly refreshTokensUsed: FieldRef<"KeyToken", 'String[]'>
    readonly refreshToken: FieldRef<"KeyToken", 'String'>
    readonly userId: FieldRef<"KeyToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KeyToken findUnique
   */
  export type KeyTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * Filter, which KeyToken to fetch.
     */
    where: KeyTokenWhereUniqueInput
  }

  /**
   * KeyToken findUniqueOrThrow
   */
  export type KeyTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * Filter, which KeyToken to fetch.
     */
    where: KeyTokenWhereUniqueInput
  }

  /**
   * KeyToken findFirst
   */
  export type KeyTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * Filter, which KeyToken to fetch.
     */
    where?: KeyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyTokens to fetch.
     */
    orderBy?: KeyTokenOrderByWithRelationInput | KeyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyTokens.
     */
    cursor?: KeyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyTokens.
     */
    distinct?: KeyTokenScalarFieldEnum | KeyTokenScalarFieldEnum[]
  }

  /**
   * KeyToken findFirstOrThrow
   */
  export type KeyTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * Filter, which KeyToken to fetch.
     */
    where?: KeyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyTokens to fetch.
     */
    orderBy?: KeyTokenOrderByWithRelationInput | KeyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyTokens.
     */
    cursor?: KeyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyTokens.
     */
    distinct?: KeyTokenScalarFieldEnum | KeyTokenScalarFieldEnum[]
  }

  /**
   * KeyToken findMany
   */
  export type KeyTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * Filter, which KeyTokens to fetch.
     */
    where?: KeyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyTokens to fetch.
     */
    orderBy?: KeyTokenOrderByWithRelationInput | KeyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeyTokens.
     */
    cursor?: KeyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyTokens.
     */
    skip?: number
    distinct?: KeyTokenScalarFieldEnum | KeyTokenScalarFieldEnum[]
  }

  /**
   * KeyToken create
   */
  export type KeyTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a KeyToken.
     */
    data: XOR<KeyTokenCreateInput, KeyTokenUncheckedCreateInput>
  }

  /**
   * KeyToken createMany
   */
  export type KeyTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeyTokens.
     */
    data: KeyTokenCreateManyInput | KeyTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeyToken createManyAndReturn
   */
  export type KeyTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * The data used to create many KeyTokens.
     */
    data: KeyTokenCreateManyInput | KeyTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyToken update
   */
  export type KeyTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a KeyToken.
     */
    data: XOR<KeyTokenUpdateInput, KeyTokenUncheckedUpdateInput>
    /**
     * Choose, which KeyToken to update.
     */
    where: KeyTokenWhereUniqueInput
  }

  /**
   * KeyToken updateMany
   */
  export type KeyTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeyTokens.
     */
    data: XOR<KeyTokenUpdateManyMutationInput, KeyTokenUncheckedUpdateManyInput>
    /**
     * Filter which KeyTokens to update
     */
    where?: KeyTokenWhereInput
    /**
     * Limit how many KeyTokens to update.
     */
    limit?: number
  }

  /**
   * KeyToken updateManyAndReturn
   */
  export type KeyTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * The data used to update KeyTokens.
     */
    data: XOR<KeyTokenUpdateManyMutationInput, KeyTokenUncheckedUpdateManyInput>
    /**
     * Filter which KeyTokens to update
     */
    where?: KeyTokenWhereInput
    /**
     * Limit how many KeyTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeyToken upsert
   */
  export type KeyTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the KeyToken to update in case it exists.
     */
    where: KeyTokenWhereUniqueInput
    /**
     * In case the KeyToken found by the `where` argument doesn't exist, create a new KeyToken with this data.
     */
    create: XOR<KeyTokenCreateInput, KeyTokenUncheckedCreateInput>
    /**
     * In case the KeyToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyTokenUpdateInput, KeyTokenUncheckedUpdateInput>
  }

  /**
   * KeyToken delete
   */
  export type KeyTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
    /**
     * Filter which KeyToken to delete.
     */
    where: KeyTokenWhereUniqueInput
  }

  /**
   * KeyToken deleteMany
   */
  export type KeyTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyTokens to delete
     */
    where?: KeyTokenWhereInput
    /**
     * Limit how many KeyTokens to delete.
     */
    limit?: number
  }

  /**
   * KeyToken without action
   */
  export type KeyTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyToken
     */
    select?: KeyTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyToken
     */
    omit?: KeyTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    slug: 'slug',
    password: 'password',
    salt: 'salt',
    avatar: 'avatar',
    address: 'address',
    birthdate: 'birthdate',
    msisdn: 'msisdn',
    sex: 'sex',
    status: 'status',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    status: 'status',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const GrantScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    resourceId: 'resourceId',
    action: 'action',
    attribute: 'attribute'
  };

  export type GrantScalarFieldEnum = (typeof GrantScalarFieldEnum)[keyof typeof GrantScalarFieldEnum]


  export const OTPScalarFieldEnum: {
    id: 'id',
    token: 'token',
    email: 'email',
    status: 'status',
    expiresAt: 'expiresAt'
  };

  export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    status: 'status',
    permissions: 'permissions'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const KeyTokenScalarFieldEnum: {
    id: 'id',
    browserId: 'browserId',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    refreshTokensUsed: 'refreshTokensUsed',
    refreshToken: 'refreshToken',
    userId: 'userId'
  };

  export type KeyTokenScalarFieldEnum = (typeof KeyTokenScalarFieldEnum)[keyof typeof KeyTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserSex'
   */
  export type EnumUserSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserSex'>
    


  /**
   * Reference to a field of type 'UserSex[]'
   */
  export type ListEnumUserSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserSex[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'RoleStatus'
   */
  export type EnumRoleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleStatus'>
    


  /**
   * Reference to a field of type 'RoleStatus[]'
   */
  export type ListEnumRoleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleStatus[]'>
    


  /**
   * Reference to a field of type 'OTPStatus'
   */
  export type EnumOTPStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OTPStatus'>
    


  /**
   * Reference to a field of type 'OTPStatus[]'
   */
  export type ListEnumOTPStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OTPStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApiKeyPermission[]'
   */
  export type ListEnumApiKeyPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyPermission[]'>
    


  /**
   * Reference to a field of type 'ApiKeyPermission'
   */
  export type EnumApiKeyPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyPermission'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    slug?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    msisdn?: StringNullableFilter<"User"> | string | null
    sex?: EnumUserSexNullableFilter<"User"> | $Enums.UserSex | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    roleId?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    keyToken?: KeyTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    slug?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    msisdn?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    status?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    keyToken?: KeyTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    slug?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    msisdn?: StringNullableFilter<"User"> | string | null
    sex?: EnumUserSexNullableFilter<"User"> | $Enums.UserSex | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    roleId?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    keyToken?: KeyTokenListRelationFilter
  }, "id" | "username" | "email" | "slug">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    slug?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    msisdn?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    status?: SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    slug?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    msisdn?: StringNullableWithAggregatesFilter<"User"> | string | null
    sex?: EnumUserSexNullableWithAggregatesFilter<"User"> | $Enums.UserSex | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    roleId?: StringWithAggregatesFilter<"User"> | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    name?: StringFilter<"Resource"> | string
    slug?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    roles?: GrantListRelationFilter
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    roles?: GrantOrderByRelationAggregateInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    description?: StringNullableFilter<"Resource"> | string | null
    roles?: GrantListRelationFilter
  }, "id" | "name" | "slug">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    name?: StringWithAggregatesFilter<"Resource"> | string
    slug?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    slug?: StringFilter<"Role"> | string
    status?: EnumRoleStatusFilter<"Role"> | $Enums.RoleStatus
    description?: StringNullableFilter<"Role"> | string | null
    grants?: GrantListRelationFilter
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    grants?: GrantOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    status?: EnumRoleStatusFilter<"Role"> | $Enums.RoleStatus
    description?: StringNullableFilter<"Role"> | string | null
    grants?: GrantListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name" | "slug">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    slug?: StringWithAggregatesFilter<"Role"> | string
    status?: EnumRoleStatusWithAggregatesFilter<"Role"> | $Enums.RoleStatus
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type GrantWhereInput = {
    AND?: GrantWhereInput | GrantWhereInput[]
    OR?: GrantWhereInput[]
    NOT?: GrantWhereInput | GrantWhereInput[]
    id?: StringFilter<"Grant"> | string
    roleId?: StringFilter<"Grant"> | string
    resourceId?: StringFilter<"Grant"> | string
    action?: StringFilter<"Grant"> | string
    attribute?: StringFilter<"Grant"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }

  export type GrantOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    attribute?: SortOrder
    role?: RoleOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type GrantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_role_resource_action?: GrantUnique_role_resource_actionCompoundUniqueInput
    AND?: GrantWhereInput | GrantWhereInput[]
    OR?: GrantWhereInput[]
    NOT?: GrantWhereInput | GrantWhereInput[]
    roleId?: StringFilter<"Grant"> | string
    resourceId?: StringFilter<"Grant"> | string
    action?: StringFilter<"Grant"> | string
    attribute?: StringFilter<"Grant"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }, "id" | "unique_role_resource_action">

  export type GrantOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    attribute?: SortOrder
    _count?: GrantCountOrderByAggregateInput
    _max?: GrantMaxOrderByAggregateInput
    _min?: GrantMinOrderByAggregateInput
  }

  export type GrantScalarWhereWithAggregatesInput = {
    AND?: GrantScalarWhereWithAggregatesInput | GrantScalarWhereWithAggregatesInput[]
    OR?: GrantScalarWhereWithAggregatesInput[]
    NOT?: GrantScalarWhereWithAggregatesInput | GrantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grant"> | string
    roleId?: StringWithAggregatesFilter<"Grant"> | string
    resourceId?: StringWithAggregatesFilter<"Grant"> | string
    action?: StringWithAggregatesFilter<"Grant"> | string
    attribute?: StringWithAggregatesFilter<"Grant"> | string
  }

  export type OTPWhereInput = {
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    id?: StringFilter<"OTP"> | string
    token?: StringFilter<"OTP"> | string
    email?: StringFilter<"OTP"> | string
    status?: EnumOTPStatusFilter<"OTP"> | $Enums.OTPStatus
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
  }

  export type OTPOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
  }

  export type OTPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    email?: StringFilter<"OTP"> | string
    status?: EnumOTPStatusFilter<"OTP"> | $Enums.OTPStatus
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
  }, "id" | "token">

  export type OTPOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    _count?: OTPCountOrderByAggregateInput
    _max?: OTPMaxOrderByAggregateInput
    _min?: OTPMinOrderByAggregateInput
  }

  export type OTPScalarWhereWithAggregatesInput = {
    AND?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    OR?: OTPScalarWhereWithAggregatesInput[]
    NOT?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTP"> | string
    token?: StringWithAggregatesFilter<"OTP"> | string
    email?: StringWithAggregatesFilter<"OTP"> | string
    status?: EnumOTPStatusWithAggregatesFilter<"OTP"> | $Enums.OTPStatus
    expiresAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    status?: BoolFilter<"ApiKey"> | boolean
    permissions?: EnumApiKeyPermissionNullableListFilter<"ApiKey">
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    permissions?: SortOrder
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    status?: BoolFilter<"ApiKey"> | boolean
    permissions?: EnumApiKeyPermissionNullableListFilter<"ApiKey">
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    permissions?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    status?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    permissions?: EnumApiKeyPermissionNullableListFilter<"ApiKey">
  }

  export type KeyTokenWhereInput = {
    AND?: KeyTokenWhereInput | KeyTokenWhereInput[]
    OR?: KeyTokenWhereInput[]
    NOT?: KeyTokenWhereInput | KeyTokenWhereInput[]
    id?: StringFilter<"KeyToken"> | string
    browserId?: StringFilter<"KeyToken"> | string
    publicKey?: StringFilter<"KeyToken"> | string
    privateKey?: StringFilter<"KeyToken"> | string
    refreshTokensUsed?: StringNullableListFilter<"KeyToken">
    refreshToken?: StringFilter<"KeyToken"> | string
    userId?: StringFilter<"KeyToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KeyTokenOrderByWithRelationInput = {
    id?: SortOrder
    browserId?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    refreshTokensUsed?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KeyTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_user_browser?: KeyTokenUnique_user_browserCompoundUniqueInput
    AND?: KeyTokenWhereInput | KeyTokenWhereInput[]
    OR?: KeyTokenWhereInput[]
    NOT?: KeyTokenWhereInput | KeyTokenWhereInput[]
    browserId?: StringFilter<"KeyToken"> | string
    publicKey?: StringFilter<"KeyToken"> | string
    privateKey?: StringFilter<"KeyToken"> | string
    refreshTokensUsed?: StringNullableListFilter<"KeyToken">
    refreshToken?: StringFilter<"KeyToken"> | string
    userId?: StringFilter<"KeyToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "unique_user_browser">

  export type KeyTokenOrderByWithAggregationInput = {
    id?: SortOrder
    browserId?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    refreshTokensUsed?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    _count?: KeyTokenCountOrderByAggregateInput
    _max?: KeyTokenMaxOrderByAggregateInput
    _min?: KeyTokenMinOrderByAggregateInput
  }

  export type KeyTokenScalarWhereWithAggregatesInput = {
    AND?: KeyTokenScalarWhereWithAggregatesInput | KeyTokenScalarWhereWithAggregatesInput[]
    OR?: KeyTokenScalarWhereWithAggregatesInput[]
    NOT?: KeyTokenScalarWhereWithAggregatesInput | KeyTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KeyToken"> | string
    browserId?: StringWithAggregatesFilter<"KeyToken"> | string
    publicKey?: StringWithAggregatesFilter<"KeyToken"> | string
    privateKey?: StringWithAggregatesFilter<"KeyToken"> | string
    refreshTokensUsed?: StringNullableListFilter<"KeyToken">
    refreshToken?: StringWithAggregatesFilter<"KeyToken"> | string
    userId?: StringWithAggregatesFilter<"KeyToken"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
    role: RoleCreateNestedOneWithoutUsersInput
    keyToken?: KeyTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
    roleId: string
    keyToken?: KeyTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    keyToken?: KeyTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    roleId?: StringFieldUpdateOperationsInput | string
    keyToken?: KeyTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
    roleId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    roles?: GrantCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    roles?: GrantUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: GrantUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: GrantUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.RoleStatus
    description?: string | null
    grants?: GrantCreateNestedManyWithoutRoleInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.RoleStatus
    description?: string | null
    grants?: GrantUncheckedCreateNestedManyWithoutRoleInput
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grants?: GrantUpdateManyWithoutRoleNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grants?: GrantUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.RoleStatus
    description?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrantCreateInput = {
    id?: string
    action: string
    attribute: string
    role: RoleCreateNestedOneWithoutGrantsInput
    resource: ResourceCreateNestedOneWithoutRolesInput
  }

  export type GrantUncheckedCreateInput = {
    id?: string
    roleId: string
    resourceId: string
    action: string
    attribute: string
  }

  export type GrantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutGrantsNestedInput
    resource?: ResourceUpdateOneRequiredWithoutRolesNestedInput
  }

  export type GrantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type GrantCreateManyInput = {
    id?: string
    roleId: string
    resourceId: string
    action: string
    attribute: string
  }

  export type GrantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type GrantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type OTPCreateInput = {
    id?: string
    token: string
    email: string
    status?: $Enums.OTPStatus
    expiresAt?: Date | string
  }

  export type OTPUncheckedCreateInput = {
    id?: string
    token: string
    email: string
    status?: $Enums.OTPStatus
    expiresAt?: Date | string
  }

  export type OTPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateManyInput = {
    id?: string
    token: string
    email: string
    status?: $Enums.OTPStatus
    expiresAt?: Date | string
  }

  export type OTPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    key: string
    status?: boolean
    permissions?: ApiKeyCreatepermissionsInput | $Enums.ApiKeyPermission[]
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key: string
    status?: boolean
    permissions?: ApiKeyCreatepermissionsInput | $Enums.ApiKeyPermission[]
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key: string
    status?: boolean
    permissions?: ApiKeyCreatepermissionsInput | $Enums.ApiKeyPermission[]
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
  }

  export type KeyTokenCreateInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
    user: UserCreateNestedOneWithoutKeyTokenInput
  }

  export type KeyTokenUncheckedCreateInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
    userId: string
  }

  export type KeyTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutKeyTokenNestedInput
  }

  export type KeyTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type KeyTokenCreateManyInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
    userId: string
  }

  export type KeyTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type KeyTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserSex | EnumUserSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserSexNullableFilter<$PrismaModel> | $Enums.UserSex | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type KeyTokenListRelationFilter = {
    every?: KeyTokenWhereInput
    some?: KeyTokenWhereInput
    none?: KeyTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KeyTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    slug?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    birthdate?: SortOrder
    msisdn?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    slug?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    birthdate?: SortOrder
    msisdn?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    slug?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    birthdate?: SortOrder
    msisdn?: SortOrder
    sex?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserSex | EnumUserSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserSex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserSexNullableFilter<$PrismaModel>
    _max?: NestedEnumUserSexNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type GrantListRelationFilter = {
    every?: GrantWhereInput
    some?: GrantWhereInput
    none?: GrantWhereInput
  }

  export type GrantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type EnumRoleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleStatus | EnumRoleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleStatusFilter<$PrismaModel> | $Enums.RoleStatus
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type EnumRoleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleStatus | EnumRoleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleStatusFilter<$PrismaModel>
    _max?: NestedEnumRoleStatusFilter<$PrismaModel>
  }

  export type ResourceScalarRelationFilter = {
    is?: ResourceWhereInput
    isNot?: ResourceWhereInput
  }

  export type GrantUnique_role_resource_actionCompoundUniqueInput = {
    roleId: string
    resourceId: string
    action: string
  }

  export type GrantCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    attribute?: SortOrder
  }

  export type GrantMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    attribute?: SortOrder
  }

  export type GrantMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    attribute?: SortOrder
  }

  export type EnumOTPStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusFilter<$PrismaModel> | $Enums.OTPStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OTPCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
  }

  export type OTPMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
  }

  export type OTPMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumOTPStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel> | $Enums.OTPStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOTPStatusFilter<$PrismaModel>
    _max?: NestedEnumOTPStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumApiKeyPermissionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyPermission[] | ListEnumApiKeyPermissionFieldRefInput<$PrismaModel> | null
    has?: $Enums.ApiKeyPermission | EnumApiKeyPermissionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ApiKeyPermission[] | ListEnumApiKeyPermissionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ApiKeyPermission[] | ListEnumApiKeyPermissionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    permissions?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KeyTokenUnique_user_browserCompoundUniqueInput = {
    userId: string
    browserId: string
  }

  export type KeyTokenCountOrderByAggregateInput = {
    id?: SortOrder
    browserId?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    refreshTokensUsed?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type KeyTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    browserId?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type KeyTokenMinOrderByAggregateInput = {
    id?: SortOrder
    browserId?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type KeyTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput> | KeyTokenCreateWithoutUserInput[] | KeyTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyTokenCreateOrConnectWithoutUserInput | KeyTokenCreateOrConnectWithoutUserInput[]
    createMany?: KeyTokenCreateManyUserInputEnvelope
    connect?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
  }

  export type KeyTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput> | KeyTokenCreateWithoutUserInput[] | KeyTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyTokenCreateOrConnectWithoutUserInput | KeyTokenCreateOrConnectWithoutUserInput[]
    createMany?: KeyTokenCreateManyUserInputEnvelope
    connect?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumUserSexFieldUpdateOperationsInput = {
    set?: $Enums.UserSex | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type KeyTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput> | KeyTokenCreateWithoutUserInput[] | KeyTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyTokenCreateOrConnectWithoutUserInput | KeyTokenCreateOrConnectWithoutUserInput[]
    upsert?: KeyTokenUpsertWithWhereUniqueWithoutUserInput | KeyTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KeyTokenCreateManyUserInputEnvelope
    set?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    disconnect?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    delete?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    connect?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    update?: KeyTokenUpdateWithWhereUniqueWithoutUserInput | KeyTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KeyTokenUpdateManyWithWhereWithoutUserInput | KeyTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KeyTokenScalarWhereInput | KeyTokenScalarWhereInput[]
  }

  export type KeyTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput> | KeyTokenCreateWithoutUserInput[] | KeyTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyTokenCreateOrConnectWithoutUserInput | KeyTokenCreateOrConnectWithoutUserInput[]
    upsert?: KeyTokenUpsertWithWhereUniqueWithoutUserInput | KeyTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KeyTokenCreateManyUserInputEnvelope
    set?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    disconnect?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    delete?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    connect?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
    update?: KeyTokenUpdateWithWhereUniqueWithoutUserInput | KeyTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KeyTokenUpdateManyWithWhereWithoutUserInput | KeyTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KeyTokenScalarWhereInput | KeyTokenScalarWhereInput[]
  }

  export type GrantCreateNestedManyWithoutResourceInput = {
    create?: XOR<GrantCreateWithoutResourceInput, GrantUncheckedCreateWithoutResourceInput> | GrantCreateWithoutResourceInput[] | GrantUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutResourceInput | GrantCreateOrConnectWithoutResourceInput[]
    createMany?: GrantCreateManyResourceInputEnvelope
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
  }

  export type GrantUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<GrantCreateWithoutResourceInput, GrantUncheckedCreateWithoutResourceInput> | GrantCreateWithoutResourceInput[] | GrantUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutResourceInput | GrantCreateOrConnectWithoutResourceInput[]
    createMany?: GrantCreateManyResourceInputEnvelope
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
  }

  export type GrantUpdateManyWithoutResourceNestedInput = {
    create?: XOR<GrantCreateWithoutResourceInput, GrantUncheckedCreateWithoutResourceInput> | GrantCreateWithoutResourceInput[] | GrantUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutResourceInput | GrantCreateOrConnectWithoutResourceInput[]
    upsert?: GrantUpsertWithWhereUniqueWithoutResourceInput | GrantUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: GrantCreateManyResourceInputEnvelope
    set?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    disconnect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    delete?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    update?: GrantUpdateWithWhereUniqueWithoutResourceInput | GrantUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: GrantUpdateManyWithWhereWithoutResourceInput | GrantUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: GrantScalarWhereInput | GrantScalarWhereInput[]
  }

  export type GrantUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<GrantCreateWithoutResourceInput, GrantUncheckedCreateWithoutResourceInput> | GrantCreateWithoutResourceInput[] | GrantUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutResourceInput | GrantCreateOrConnectWithoutResourceInput[]
    upsert?: GrantUpsertWithWhereUniqueWithoutResourceInput | GrantUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: GrantCreateManyResourceInputEnvelope
    set?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    disconnect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    delete?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    update?: GrantUpdateWithWhereUniqueWithoutResourceInput | GrantUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: GrantUpdateManyWithWhereWithoutResourceInput | GrantUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: GrantScalarWhereInput | GrantScalarWhereInput[]
  }

  export type GrantCreateNestedManyWithoutRoleInput = {
    create?: XOR<GrantCreateWithoutRoleInput, GrantUncheckedCreateWithoutRoleInput> | GrantCreateWithoutRoleInput[] | GrantUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutRoleInput | GrantCreateOrConnectWithoutRoleInput[]
    createMany?: GrantCreateManyRoleInputEnvelope
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GrantUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<GrantCreateWithoutRoleInput, GrantUncheckedCreateWithoutRoleInput> | GrantCreateWithoutRoleInput[] | GrantUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutRoleInput | GrantCreateOrConnectWithoutRoleInput[]
    createMany?: GrantCreateManyRoleInputEnvelope
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoleStatus
  }

  export type GrantUpdateManyWithoutRoleNestedInput = {
    create?: XOR<GrantCreateWithoutRoleInput, GrantUncheckedCreateWithoutRoleInput> | GrantCreateWithoutRoleInput[] | GrantUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutRoleInput | GrantCreateOrConnectWithoutRoleInput[]
    upsert?: GrantUpsertWithWhereUniqueWithoutRoleInput | GrantUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: GrantCreateManyRoleInputEnvelope
    set?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    disconnect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    delete?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    update?: GrantUpdateWithWhereUniqueWithoutRoleInput | GrantUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: GrantUpdateManyWithWhereWithoutRoleInput | GrantUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: GrantScalarWhereInput | GrantScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GrantUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<GrantCreateWithoutRoleInput, GrantUncheckedCreateWithoutRoleInput> | GrantCreateWithoutRoleInput[] | GrantUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GrantCreateOrConnectWithoutRoleInput | GrantCreateOrConnectWithoutRoleInput[]
    upsert?: GrantUpsertWithWhereUniqueWithoutRoleInput | GrantUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: GrantCreateManyRoleInputEnvelope
    set?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    disconnect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    delete?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    connect?: GrantWhereUniqueInput | GrantWhereUniqueInput[]
    update?: GrantUpdateWithWhereUniqueWithoutRoleInput | GrantUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: GrantUpdateManyWithWhereWithoutRoleInput | GrantUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: GrantScalarWhereInput | GrantScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutGrantsInput = {
    create?: XOR<RoleCreateWithoutGrantsInput, RoleUncheckedCreateWithoutGrantsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutGrantsInput
    connect?: RoleWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutRolesInput = {
    create?: XOR<ResourceCreateWithoutRolesInput, ResourceUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRolesInput
    connect?: ResourceWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutGrantsNestedInput = {
    create?: XOR<RoleCreateWithoutGrantsInput, RoleUncheckedCreateWithoutGrantsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutGrantsInput
    upsert?: RoleUpsertWithoutGrantsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutGrantsInput, RoleUpdateWithoutGrantsInput>, RoleUncheckedUpdateWithoutGrantsInput>
  }

  export type ResourceUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<ResourceCreateWithoutRolesInput, ResourceUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRolesInput
    upsert?: ResourceUpsertWithoutRolesInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutRolesInput, ResourceUpdateWithoutRolesInput>, ResourceUncheckedUpdateWithoutRolesInput>
  }

  export type EnumOTPStatusFieldUpdateOperationsInput = {
    set?: $Enums.OTPStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApiKeyCreatepermissionsInput = {
    set: $Enums.ApiKeyPermission[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ApiKeyUpdatepermissionsInput = {
    set?: $Enums.ApiKeyPermission[]
    push?: $Enums.ApiKeyPermission | $Enums.ApiKeyPermission[]
  }

  export type KeyTokenCreaterefreshTokensUsedInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutKeyTokenInput = {
    create?: XOR<UserCreateWithoutKeyTokenInput, UserUncheckedCreateWithoutKeyTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyTokenInput
    connect?: UserWhereUniqueInput
  }

  export type KeyTokenUpdaterefreshTokensUsedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutKeyTokenNestedInput = {
    create?: XOR<UserCreateWithoutKeyTokenInput, UserUncheckedCreateWithoutKeyTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeyTokenInput
    upsert?: UserUpsertWithoutKeyTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKeyTokenInput, UserUpdateWithoutKeyTokenInput>, UserUncheckedUpdateWithoutKeyTokenInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserSex | EnumUserSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserSexNullableFilter<$PrismaModel> | $Enums.UserSex | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserSex | EnumUserSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserSex[] | ListEnumUserSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserSex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserSexNullableFilter<$PrismaModel>
    _max?: NestedEnumUserSexNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleStatus | EnumRoleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleStatusFilter<$PrismaModel> | $Enums.RoleStatus
  }

  export type NestedEnumRoleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleStatus | EnumRoleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleStatus[] | ListEnumRoleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleStatusFilter<$PrismaModel>
    _max?: NestedEnumRoleStatusFilter<$PrismaModel>
  }

  export type NestedEnumOTPStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusFilter<$PrismaModel> | $Enums.OTPStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel> | $Enums.OTPStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOTPStatusFilter<$PrismaModel>
    _max?: NestedEnumOTPStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.RoleStatus
    description?: string | null
    grants?: GrantCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.RoleStatus
    description?: string | null
    grants?: GrantUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type KeyTokenCreateWithoutUserInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
  }

  export type KeyTokenUncheckedCreateWithoutUserInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
  }

  export type KeyTokenCreateOrConnectWithoutUserInput = {
    where: KeyTokenWhereUniqueInput
    create: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput>
  }

  export type KeyTokenCreateManyUserInputEnvelope = {
    data: KeyTokenCreateManyUserInput | KeyTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grants?: GrantUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grants?: GrantUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type KeyTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: KeyTokenWhereUniqueInput
    update: XOR<KeyTokenUpdateWithoutUserInput, KeyTokenUncheckedUpdateWithoutUserInput>
    create: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput>
  }

  export type KeyTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: KeyTokenWhereUniqueInput
    data: XOR<KeyTokenUpdateWithoutUserInput, KeyTokenUncheckedUpdateWithoutUserInput>
  }

  export type KeyTokenUpdateManyWithWhereWithoutUserInput = {
    where: KeyTokenScalarWhereInput
    data: XOR<KeyTokenUpdateManyMutationInput, KeyTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type KeyTokenScalarWhereInput = {
    AND?: KeyTokenScalarWhereInput | KeyTokenScalarWhereInput[]
    OR?: KeyTokenScalarWhereInput[]
    NOT?: KeyTokenScalarWhereInput | KeyTokenScalarWhereInput[]
    id?: StringFilter<"KeyToken"> | string
    browserId?: StringFilter<"KeyToken"> | string
    publicKey?: StringFilter<"KeyToken"> | string
    privateKey?: StringFilter<"KeyToken"> | string
    refreshTokensUsed?: StringNullableListFilter<"KeyToken">
    refreshToken?: StringFilter<"KeyToken"> | string
    userId?: StringFilter<"KeyToken"> | string
  }

  export type GrantCreateWithoutResourceInput = {
    id?: string
    action: string
    attribute: string
    role: RoleCreateNestedOneWithoutGrantsInput
  }

  export type GrantUncheckedCreateWithoutResourceInput = {
    id?: string
    roleId: string
    action: string
    attribute: string
  }

  export type GrantCreateOrConnectWithoutResourceInput = {
    where: GrantWhereUniqueInput
    create: XOR<GrantCreateWithoutResourceInput, GrantUncheckedCreateWithoutResourceInput>
  }

  export type GrantCreateManyResourceInputEnvelope = {
    data: GrantCreateManyResourceInput | GrantCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type GrantUpsertWithWhereUniqueWithoutResourceInput = {
    where: GrantWhereUniqueInput
    update: XOR<GrantUpdateWithoutResourceInput, GrantUncheckedUpdateWithoutResourceInput>
    create: XOR<GrantCreateWithoutResourceInput, GrantUncheckedCreateWithoutResourceInput>
  }

  export type GrantUpdateWithWhereUniqueWithoutResourceInput = {
    where: GrantWhereUniqueInput
    data: XOR<GrantUpdateWithoutResourceInput, GrantUncheckedUpdateWithoutResourceInput>
  }

  export type GrantUpdateManyWithWhereWithoutResourceInput = {
    where: GrantScalarWhereInput
    data: XOR<GrantUpdateManyMutationInput, GrantUncheckedUpdateManyWithoutResourceInput>
  }

  export type GrantScalarWhereInput = {
    AND?: GrantScalarWhereInput | GrantScalarWhereInput[]
    OR?: GrantScalarWhereInput[]
    NOT?: GrantScalarWhereInput | GrantScalarWhereInput[]
    id?: StringFilter<"Grant"> | string
    roleId?: StringFilter<"Grant"> | string
    resourceId?: StringFilter<"Grant"> | string
    action?: StringFilter<"Grant"> | string
    attribute?: StringFilter<"Grant"> | string
  }

  export type GrantCreateWithoutRoleInput = {
    id?: string
    action: string
    attribute: string
    resource: ResourceCreateNestedOneWithoutRolesInput
  }

  export type GrantUncheckedCreateWithoutRoleInput = {
    id?: string
    resourceId: string
    action: string
    attribute: string
  }

  export type GrantCreateOrConnectWithoutRoleInput = {
    where: GrantWhereUniqueInput
    create: XOR<GrantCreateWithoutRoleInput, GrantUncheckedCreateWithoutRoleInput>
  }

  export type GrantCreateManyRoleInputEnvelope = {
    data: GrantCreateManyRoleInput | GrantCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
    keyToken?: KeyTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
    keyToken?: KeyTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type GrantUpsertWithWhereUniqueWithoutRoleInput = {
    where: GrantWhereUniqueInput
    update: XOR<GrantUpdateWithoutRoleInput, GrantUncheckedUpdateWithoutRoleInput>
    create: XOR<GrantCreateWithoutRoleInput, GrantUncheckedCreateWithoutRoleInput>
  }

  export type GrantUpdateWithWhereUniqueWithoutRoleInput = {
    where: GrantWhereUniqueInput
    data: XOR<GrantUpdateWithoutRoleInput, GrantUncheckedUpdateWithoutRoleInput>
  }

  export type GrantUpdateManyWithWhereWithoutRoleInput = {
    where: GrantScalarWhereInput
    data: XOR<GrantUpdateManyMutationInput, GrantUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    slug?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    msisdn?: StringNullableFilter<"User"> | string | null
    sex?: EnumUserSexNullableFilter<"User"> | $Enums.UserSex | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    roleId?: StringFilter<"User"> | string
  }

  export type RoleCreateWithoutGrantsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.RoleStatus
    description?: string | null
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutGrantsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.RoleStatus
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutGrantsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutGrantsInput, RoleUncheckedCreateWithoutGrantsInput>
  }

  export type ResourceCreateWithoutRolesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
  }

  export type ResourceUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
  }

  export type ResourceCreateOrConnectWithoutRolesInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutRolesInput, ResourceUncheckedCreateWithoutRolesInput>
  }

  export type RoleUpsertWithoutGrantsInput = {
    update: XOR<RoleUpdateWithoutGrantsInput, RoleUncheckedUpdateWithoutGrantsInput>
    create: XOR<RoleCreateWithoutGrantsInput, RoleUncheckedCreateWithoutGrantsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutGrantsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutGrantsInput, RoleUncheckedUpdateWithoutGrantsInput>
  }

  export type RoleUpdateWithoutGrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutGrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumRoleStatusFieldUpdateOperationsInput | $Enums.RoleStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ResourceUpsertWithoutRolesInput = {
    update: XOR<ResourceUpdateWithoutRolesInput, ResourceUncheckedUpdateWithoutRolesInput>
    create: XOR<ResourceCreateWithoutRolesInput, ResourceUncheckedCreateWithoutRolesInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutRolesInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutRolesInput, ResourceUncheckedUpdateWithoutRolesInput>
  }

  export type ResourceUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutKeyTokenInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutKeyTokenInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
    roleId: string
  }

  export type UserCreateOrConnectWithoutKeyTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKeyTokenInput, UserUncheckedCreateWithoutKeyTokenInput>
  }

  export type UserUpsertWithoutKeyTokenInput = {
    update: XOR<UserUpdateWithoutKeyTokenInput, UserUncheckedUpdateWithoutKeyTokenInput>
    create: XOR<UserCreateWithoutKeyTokenInput, UserUncheckedCreateWithoutKeyTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKeyTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKeyTokenInput, UserUncheckedUpdateWithoutKeyTokenInput>
  }

  export type UserUpdateWithoutKeyTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutKeyTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type KeyTokenCreateManyUserInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
  }

  export type KeyTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type KeyTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type KeyTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type GrantCreateManyResourceInput = {
    id?: string
    roleId: string
    action: string
    attribute: string
  }

  export type GrantUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutGrantsNestedInput
  }

  export type GrantUncheckedUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type GrantUncheckedUpdateManyWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type GrantCreateManyRoleInput = {
    id?: string
    resourceId: string
    action: string
    attribute: string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    username: string
    email: string
    firstName: string
    lastName?: string | null
    slug: string
    password: string
    salt: string
    avatar?: string | null
    address?: string | null
    birthdate?: Date | string | null
    msisdn?: string | null
    sex?: $Enums.UserSex | null
    status?: $Enums.UserStatus
  }

  export type GrantUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    resource?: ResourceUpdateOneRequiredWithoutRolesNestedInput
  }

  export type GrantUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type GrantUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    keyToken?: KeyTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    keyToken?: KeyTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msisdn?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumUserSexFieldUpdateOperationsInput | $Enums.UserSex | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}