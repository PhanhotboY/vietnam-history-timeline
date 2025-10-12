
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
 * Model HistoricalEvent
 * 
 */
export type HistoricalEvent = $Result.DefaultSelection<Prisma.$HistoricalEventPayload>
/**
 * Model EventEdit
 * 
 */
export type EventEdit = $Result.DefaultSelection<Prisma.$EventEditPayload>
/**
 * Model EventPeriod
 * 
 */
export type EventPeriod = $Result.DefaultSelection<Prisma.$EventPeriodPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model BlogAuthor
 * 
 */
export type BlogAuthor = $Result.DefaultSelection<Prisma.$BlogAuthorPayload>

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

  /**
   * `prisma.historicalEvent`: Exposes CRUD operations for the **HistoricalEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricalEvents
    * const historicalEvents = await prisma.historicalEvent.findMany()
    * ```
    */
  get historicalEvent(): Prisma.HistoricalEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventEdit`: Exposes CRUD operations for the **EventEdit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventEdits
    * const eventEdits = await prisma.eventEdit.findMany()
    * ```
    */
  get eventEdit(): Prisma.EventEditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventPeriod`: Exposes CRUD operations for the **EventPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventPeriods
    * const eventPeriods = await prisma.eventPeriod.findMany()
    * ```
    */
  get eventPeriod(): Prisma.EventPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogAuthor`: Exposes CRUD operations for the **BlogAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogAuthors
    * const blogAuthors = await prisma.blogAuthor.findMany()
    * ```
    */
  get blogAuthor(): Prisma.BlogAuthorDelegate<ExtArgs, ClientOptions>;
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
    KeyToken: 'KeyToken',
    HistoricalEvent: 'HistoricalEvent',
    EventEdit: 'EventEdit',
    EventPeriod: 'EventPeriod',
    BlogPost: 'BlogPost',
    BlogAuthor: 'BlogAuthor'
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
      modelProps: "user" | "resource" | "role" | "grant" | "oTP" | "apiKey" | "keyToken" | "historicalEvent" | "eventEdit" | "eventPeriod" | "blogPost" | "blogAuthor"
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
      HistoricalEvent: {
        payload: Prisma.$HistoricalEventPayload<ExtArgs>
        fields: Prisma.HistoricalEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricalEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricalEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>
          }
          findFirst: {
            args: Prisma.HistoricalEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricalEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>
          }
          findMany: {
            args: Prisma.HistoricalEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>[]
          }
          create: {
            args: Prisma.HistoricalEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>
          }
          createMany: {
            args: Prisma.HistoricalEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricalEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>[]
          }
          delete: {
            args: Prisma.HistoricalEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>
          }
          update: {
            args: Prisma.HistoricalEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>
          }
          deleteMany: {
            args: Prisma.HistoricalEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricalEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricalEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>[]
          }
          upsert: {
            args: Prisma.HistoricalEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalEventPayload>
          }
          aggregate: {
            args: Prisma.HistoricalEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricalEvent>
          }
          groupBy: {
            args: Prisma.HistoricalEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricalEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricalEventCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricalEventCountAggregateOutputType> | number
          }
        }
      }
      EventEdit: {
        payload: Prisma.$EventEditPayload<ExtArgs>
        fields: Prisma.EventEditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventEditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventEditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>
          }
          findFirst: {
            args: Prisma.EventEditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventEditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>
          }
          findMany: {
            args: Prisma.EventEditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>[]
          }
          create: {
            args: Prisma.EventEditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>
          }
          createMany: {
            args: Prisma.EventEditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventEditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>[]
          }
          delete: {
            args: Prisma.EventEditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>
          }
          update: {
            args: Prisma.EventEditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>
          }
          deleteMany: {
            args: Prisma.EventEditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventEditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventEditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>[]
          }
          upsert: {
            args: Prisma.EventEditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventEditPayload>
          }
          aggregate: {
            args: Prisma.EventEditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventEdit>
          }
          groupBy: {
            args: Prisma.EventEditGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventEditGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventEditCountArgs<ExtArgs>
            result: $Utils.Optional<EventEditCountAggregateOutputType> | number
          }
        }
      }
      EventPeriod: {
        payload: Prisma.$EventPeriodPayload<ExtArgs>
        fields: Prisma.EventPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>
          }
          findFirst: {
            args: Prisma.EventPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>
          }
          findMany: {
            args: Prisma.EventPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>[]
          }
          create: {
            args: Prisma.EventPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>
          }
          createMany: {
            args: Prisma.EventPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>[]
          }
          delete: {
            args: Prisma.EventPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>
          }
          update: {
            args: Prisma.EventPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>
          }
          deleteMany: {
            args: Prisma.EventPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventPeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>[]
          }
          upsert: {
            args: Prisma.EventPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPeriodPayload>
          }
          aggregate: {
            args: Prisma.EventPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventPeriod>
          }
          groupBy: {
            args: Prisma.EventPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<EventPeriodCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      BlogAuthor: {
        payload: Prisma.$BlogAuthorPayload<ExtArgs>
        fields: Prisma.BlogAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>
          }
          findFirst: {
            args: Prisma.BlogAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>
          }
          findMany: {
            args: Prisma.BlogAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>[]
          }
          create: {
            args: Prisma.BlogAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>
          }
          createMany: {
            args: Prisma.BlogAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>[]
          }
          delete: {
            args: Prisma.BlogAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>
          }
          update: {
            args: Prisma.BlogAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>
          }
          deleteMany: {
            args: Prisma.BlogAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>[]
          }
          upsert: {
            args: Prisma.BlogAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAuthorPayload>
          }
          aggregate: {
            args: Prisma.BlogAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogAuthor>
          }
          groupBy: {
            args: Prisma.BlogAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<BlogAuthorCountAggregateOutputType> | number
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
    historicalEvent?: HistoricalEventOmit
    eventEdit?: EventEditOmit
    eventPeriod?: EventPeriodOmit
    blogPost?: BlogPostOmit
    blogAuthor?: BlogAuthorOmit
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
    createdEvents: number
    editedEvents: number
    blogPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyToken?: boolean | UserCountOutputTypeCountKeyTokenArgs
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs
    editedEvents?: boolean | UserCountOutputTypeCountEditedEventsArgs
    blogPosts?: boolean | UserCountOutputTypeCountBlogPostsArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricalEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventEditWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogAuthorWhereInput
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
   * Count Type HistoricalEventCountOutputType
   */

  export type HistoricalEventCountOutputType = {
    editors: number
    categories: number
  }

  export type HistoricalEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editors?: boolean | HistoricalEventCountOutputTypeCountEditorsArgs
    categories?: boolean | HistoricalEventCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * HistoricalEventCountOutputType without action
   */
  export type HistoricalEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEventCountOutputType
     */
    select?: HistoricalEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HistoricalEventCountOutputType without action
   */
  export type HistoricalEventCountOutputTypeCountEditorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventEditWhereInput
  }

  /**
   * HistoricalEventCountOutputType without action
   */
  export type HistoricalEventCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPeriodWhereInput
  }


  /**
   * Count Type EventPeriodCountOutputType
   */

  export type EventPeriodCountOutputType = {
    events: number
  }

  export type EventPeriodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventPeriodCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * EventPeriodCountOutputType without action
   */
  export type EventPeriodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriodCountOutputType
     */
    select?: EventPeriodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventPeriodCountOutputType without action
   */
  export type EventPeriodCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricalEventWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    authors: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | BlogPostCountOutputTypeCountAuthorsArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogAuthorWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
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
    createdAt: Date | null
    updatedAt: Date | null
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
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
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
    createdAt?: true
    updatedAt?: true
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
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    keyToken?: boolean | User$keyTokenArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    editedEvents?: boolean | User$editedEventsArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "firstName" | "lastName" | "slug" | "password" | "salt" | "avatar" | "address" | "birthdate" | "msisdn" | "sex" | "status" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    keyToken?: boolean | User$keyTokenArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    editedEvents?: boolean | User$editedEventsArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
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
      createdEvents: Prisma.$HistoricalEventPayload<ExtArgs>[]
      editedEvents: Prisma.$EventEditPayload<ExtArgs>[]
      blogPosts: Prisma.$BlogAuthorPayload<ExtArgs>[]
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
      createdAt: Date
      updatedAt: Date
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
    createdEvents<T extends User$createdEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editedEvents<T extends User$editedEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$editedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPosts<T extends User$blogPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.createdEvents
   */
  export type User$createdEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    where?: HistoricalEventWhereInput
    orderBy?: HistoricalEventOrderByWithRelationInput | HistoricalEventOrderByWithRelationInput[]
    cursor?: HistoricalEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricalEventScalarFieldEnum | HistoricalEventScalarFieldEnum[]
  }

  /**
   * User.editedEvents
   */
  export type User$editedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    where?: EventEditWhereInput
    orderBy?: EventEditOrderByWithRelationInput | EventEditOrderByWithRelationInput[]
    cursor?: EventEditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventEditScalarFieldEnum | EventEditScalarFieldEnum[]
  }

  /**
   * User.blogPosts
   */
  export type User$blogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    where?: BlogAuthorWhereInput
    orderBy?: BlogAuthorOrderByWithRelationInput | BlogAuthorOrderByWithRelationInput[]
    cursor?: BlogAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogAuthorScalarFieldEnum | BlogAuthorScalarFieldEnum[]
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTPMaxAggregateOutputType = {
    id: string | null
    token: string | null
    email: string | null
    status: $Enums.OTPStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OTPCountAggregateOutputType = {
    id: number
    token: number
    email: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OTPMinAggregateInputType = {
    id?: true
    token?: true
    email?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTPMaxAggregateInputType = {
    id?: true
    token?: true
    email?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OTPCountAggregateInputType = {
    id?: true
    token?: true
    email?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    email?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectScalar = {
    id?: boolean
    token?: boolean
    email?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "email" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["oTP"]>

  export type $OTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      email: string
      status: $Enums.OTPStatus
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
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
    readonly createdAt: FieldRef<"OTP", 'DateTime'>
    readonly updatedAt: FieldRef<"OTP", 'DateTime'>
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    status: number
    permissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    status?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    status?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "status" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKey"]>

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      status: boolean
      permissions: $Enums.ApiKeyPermission[]
      createdAt: Date
      updatedAt: Date
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
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeyTokenMaxAggregateOutputType = {
    id: string | null
    browserId: string | null
    publicKey: string | null
    privateKey: string | null
    refreshToken: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeyTokenCountAggregateOutputType = {
    id: number
    browserId: number
    publicKey: number
    privateKey: number
    refreshTokensUsed: number
    refreshToken: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KeyTokenMinAggregateInputType = {
    id?: true
    browserId?: true
    publicKey?: true
    privateKey?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeyTokenMaxAggregateInputType = {
    id?: true
    browserId?: true
    publicKey?: true
    privateKey?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeyTokenCountAggregateInputType = {
    id?: true
    browserId?: true
    publicKey?: true
    privateKey?: true
    refreshTokensUsed?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KeyTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "browserId" | "publicKey" | "privateKey" | "refreshTokensUsed" | "refreshToken" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["keyToken"]>
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
      createdAt: Date
      updatedAt: Date
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
    readonly createdAt: FieldRef<"KeyToken", 'DateTime'>
    readonly updatedAt: FieldRef<"KeyToken", 'DateTime'>
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
   * Model HistoricalEvent
   */

  export type AggregateHistoricalEvent = {
    _count: HistoricalEventCountAggregateOutputType | null
    _avg: HistoricalEventAvgAggregateOutputType | null
    _sum: HistoricalEventSumAggregateOutputType | null
    _min: HistoricalEventMinAggregateOutputType | null
    _max: HistoricalEventMaxAggregateOutputType | null
  }

  export type HistoricalEventAvgAggregateOutputType = {
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
  }

  export type HistoricalEventSumAggregateOutputType = {
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
  }

  export type HistoricalEventMinAggregateOutputType = {
    id: string | null
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
    content: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HistoricalEventMaxAggregateOutputType = {
    id: string | null
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
    content: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HistoricalEventCountAggregateOutputType = {
    id: number
    fromDay: number
    fromMonth: number
    fromYear: number
    toDay: number
    toMonth: number
    toYear: number
    content: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HistoricalEventAvgAggregateInputType = {
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
  }

  export type HistoricalEventSumAggregateInputType = {
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
  }

  export type HistoricalEventMinAggregateInputType = {
    id?: true
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HistoricalEventMaxAggregateInputType = {
    id?: true
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HistoricalEventCountAggregateInputType = {
    id?: true
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HistoricalEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricalEvent to aggregate.
     */
    where?: HistoricalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalEvents to fetch.
     */
    orderBy?: HistoricalEventOrderByWithRelationInput | HistoricalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricalEvents
    **/
    _count?: true | HistoricalEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricalEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricalEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricalEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricalEventMaxAggregateInputType
  }

  export type GetHistoricalEventAggregateType<T extends HistoricalEventAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricalEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricalEvent[P]>
      : GetScalarType<T[P], AggregateHistoricalEvent[P]>
  }




  export type HistoricalEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricalEventWhereInput
    orderBy?: HistoricalEventOrderByWithAggregationInput | HistoricalEventOrderByWithAggregationInput[]
    by: HistoricalEventScalarFieldEnum[] | HistoricalEventScalarFieldEnum
    having?: HistoricalEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricalEventCountAggregateInputType | true
    _avg?: HistoricalEventAvgAggregateInputType
    _sum?: HistoricalEventSumAggregateInputType
    _min?: HistoricalEventMinAggregateInputType
    _max?: HistoricalEventMaxAggregateInputType
  }

  export type HistoricalEventGroupByOutputType = {
    id: string
    fromDay: number | null
    fromMonth: number | null
    fromYear: number
    toDay: number | null
    toMonth: number | null
    toYear: number
    content: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: HistoricalEventCountAggregateOutputType | null
    _avg: HistoricalEventAvgAggregateOutputType | null
    _sum: HistoricalEventSumAggregateOutputType | null
    _min: HistoricalEventMinAggregateOutputType | null
    _max: HistoricalEventMaxAggregateOutputType | null
  }

  type GetHistoricalEventGroupByPayload<T extends HistoricalEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricalEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricalEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricalEventGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricalEventGroupByOutputType[P]>
        }
      >
    >


  export type HistoricalEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    editors?: boolean | HistoricalEvent$editorsArgs<ExtArgs>
    categories?: boolean | HistoricalEvent$categoriesArgs<ExtArgs>
    _count?: boolean | HistoricalEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicalEvent"]>

  export type HistoricalEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicalEvent"]>

  export type HistoricalEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicalEvent"]>

  export type HistoricalEventSelectScalar = {
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HistoricalEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromDay" | "fromMonth" | "fromYear" | "toDay" | "toMonth" | "toYear" | "content" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["historicalEvent"]>
  export type HistoricalEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    editors?: boolean | HistoricalEvent$editorsArgs<ExtArgs>
    categories?: boolean | HistoricalEvent$categoriesArgs<ExtArgs>
    _count?: boolean | HistoricalEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HistoricalEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoricalEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoricalEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricalEvent"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      editors: Prisma.$EventEditPayload<ExtArgs>[]
      categories: Prisma.$EventPeriodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromDay: number | null
      fromMonth: number | null
      fromYear: number
      toDay: number | null
      toMonth: number | null
      toYear: number
      content: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["historicalEvent"]>
    composites: {}
  }

  type HistoricalEventGetPayload<S extends boolean | null | undefined | HistoricalEventDefaultArgs> = $Result.GetResult<Prisma.$HistoricalEventPayload, S>

  type HistoricalEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricalEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricalEventCountAggregateInputType | true
    }

  export interface HistoricalEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricalEvent'], meta: { name: 'HistoricalEvent' } }
    /**
     * Find zero or one HistoricalEvent that matches the filter.
     * @param {HistoricalEventFindUniqueArgs} args - Arguments to find a HistoricalEvent
     * @example
     * // Get one HistoricalEvent
     * const historicalEvent = await prisma.historicalEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricalEventFindUniqueArgs>(args: SelectSubset<T, HistoricalEventFindUniqueArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricalEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricalEventFindUniqueOrThrowArgs} args - Arguments to find a HistoricalEvent
     * @example
     * // Get one HistoricalEvent
     * const historicalEvent = await prisma.historicalEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricalEventFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricalEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricalEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalEventFindFirstArgs} args - Arguments to find a HistoricalEvent
     * @example
     * // Get one HistoricalEvent
     * const historicalEvent = await prisma.historicalEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricalEventFindFirstArgs>(args?: SelectSubset<T, HistoricalEventFindFirstArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricalEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalEventFindFirstOrThrowArgs} args - Arguments to find a HistoricalEvent
     * @example
     * // Get one HistoricalEvent
     * const historicalEvent = await prisma.historicalEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricalEventFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricalEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricalEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricalEvents
     * const historicalEvents = await prisma.historicalEvent.findMany()
     * 
     * // Get first 10 HistoricalEvents
     * const historicalEvents = await prisma.historicalEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicalEventWithIdOnly = await prisma.historicalEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricalEventFindManyArgs>(args?: SelectSubset<T, HistoricalEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricalEvent.
     * @param {HistoricalEventCreateArgs} args - Arguments to create a HistoricalEvent.
     * @example
     * // Create one HistoricalEvent
     * const HistoricalEvent = await prisma.historicalEvent.create({
     *   data: {
     *     // ... data to create a HistoricalEvent
     *   }
     * })
     * 
     */
    create<T extends HistoricalEventCreateArgs>(args: SelectSubset<T, HistoricalEventCreateArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricalEvents.
     * @param {HistoricalEventCreateManyArgs} args - Arguments to create many HistoricalEvents.
     * @example
     * // Create many HistoricalEvents
     * const historicalEvent = await prisma.historicalEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricalEventCreateManyArgs>(args?: SelectSubset<T, HistoricalEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricalEvents and returns the data saved in the database.
     * @param {HistoricalEventCreateManyAndReturnArgs} args - Arguments to create many HistoricalEvents.
     * @example
     * // Create many HistoricalEvents
     * const historicalEvent = await prisma.historicalEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricalEvents and only return the `id`
     * const historicalEventWithIdOnly = await prisma.historicalEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricalEventCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricalEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricalEvent.
     * @param {HistoricalEventDeleteArgs} args - Arguments to delete one HistoricalEvent.
     * @example
     * // Delete one HistoricalEvent
     * const HistoricalEvent = await prisma.historicalEvent.delete({
     *   where: {
     *     // ... filter to delete one HistoricalEvent
     *   }
     * })
     * 
     */
    delete<T extends HistoricalEventDeleteArgs>(args: SelectSubset<T, HistoricalEventDeleteArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricalEvent.
     * @param {HistoricalEventUpdateArgs} args - Arguments to update one HistoricalEvent.
     * @example
     * // Update one HistoricalEvent
     * const historicalEvent = await prisma.historicalEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricalEventUpdateArgs>(args: SelectSubset<T, HistoricalEventUpdateArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricalEvents.
     * @param {HistoricalEventDeleteManyArgs} args - Arguments to filter HistoricalEvents to delete.
     * @example
     * // Delete a few HistoricalEvents
     * const { count } = await prisma.historicalEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricalEventDeleteManyArgs>(args?: SelectSubset<T, HistoricalEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricalEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricalEvents
     * const historicalEvent = await prisma.historicalEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricalEventUpdateManyArgs>(args: SelectSubset<T, HistoricalEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricalEvents and returns the data updated in the database.
     * @param {HistoricalEventUpdateManyAndReturnArgs} args - Arguments to update many HistoricalEvents.
     * @example
     * // Update many HistoricalEvents
     * const historicalEvent = await prisma.historicalEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricalEvents and only return the `id`
     * const historicalEventWithIdOnly = await prisma.historicalEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoricalEventUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricalEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricalEvent.
     * @param {HistoricalEventUpsertArgs} args - Arguments to update or create a HistoricalEvent.
     * @example
     * // Update or create a HistoricalEvent
     * const historicalEvent = await prisma.historicalEvent.upsert({
     *   create: {
     *     // ... data to create a HistoricalEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricalEvent we want to update
     *   }
     * })
     */
    upsert<T extends HistoricalEventUpsertArgs>(args: SelectSubset<T, HistoricalEventUpsertArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricalEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalEventCountArgs} args - Arguments to filter HistoricalEvents to count.
     * @example
     * // Count the number of HistoricalEvents
     * const count = await prisma.historicalEvent.count({
     *   where: {
     *     // ... the filter for the HistoricalEvents we want to count
     *   }
     * })
    **/
    count<T extends HistoricalEventCountArgs>(
      args?: Subset<T, HistoricalEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricalEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricalEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricalEventAggregateArgs>(args: Subset<T, HistoricalEventAggregateArgs>): Prisma.PrismaPromise<GetHistoricalEventAggregateType<T>>

    /**
     * Group by HistoricalEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalEventGroupByArgs} args - Group by arguments.
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
      T extends HistoricalEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricalEventGroupByArgs['orderBy'] }
        : { orderBy?: HistoricalEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricalEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricalEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricalEvent model
   */
  readonly fields: HistoricalEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricalEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricalEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editors<T extends HistoricalEvent$editorsArgs<ExtArgs> = {}>(args?: Subset<T, HistoricalEvent$editorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends HistoricalEvent$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, HistoricalEvent$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HistoricalEvent model
   */
  interface HistoricalEventFieldRefs {
    readonly id: FieldRef<"HistoricalEvent", 'String'>
    readonly fromDay: FieldRef<"HistoricalEvent", 'Int'>
    readonly fromMonth: FieldRef<"HistoricalEvent", 'Int'>
    readonly fromYear: FieldRef<"HistoricalEvent", 'Int'>
    readonly toDay: FieldRef<"HistoricalEvent", 'Int'>
    readonly toMonth: FieldRef<"HistoricalEvent", 'Int'>
    readonly toYear: FieldRef<"HistoricalEvent", 'Int'>
    readonly content: FieldRef<"HistoricalEvent", 'String'>
    readonly authorId: FieldRef<"HistoricalEvent", 'String'>
    readonly createdAt: FieldRef<"HistoricalEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"HistoricalEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoricalEvent findUnique
   */
  export type HistoricalEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalEvent to fetch.
     */
    where: HistoricalEventWhereUniqueInput
  }

  /**
   * HistoricalEvent findUniqueOrThrow
   */
  export type HistoricalEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalEvent to fetch.
     */
    where: HistoricalEventWhereUniqueInput
  }

  /**
   * HistoricalEvent findFirst
   */
  export type HistoricalEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalEvent to fetch.
     */
    where?: HistoricalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalEvents to fetch.
     */
    orderBy?: HistoricalEventOrderByWithRelationInput | HistoricalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricalEvents.
     */
    cursor?: HistoricalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricalEvents.
     */
    distinct?: HistoricalEventScalarFieldEnum | HistoricalEventScalarFieldEnum[]
  }

  /**
   * HistoricalEvent findFirstOrThrow
   */
  export type HistoricalEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalEvent to fetch.
     */
    where?: HistoricalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalEvents to fetch.
     */
    orderBy?: HistoricalEventOrderByWithRelationInput | HistoricalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricalEvents.
     */
    cursor?: HistoricalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricalEvents.
     */
    distinct?: HistoricalEventScalarFieldEnum | HistoricalEventScalarFieldEnum[]
  }

  /**
   * HistoricalEvent findMany
   */
  export type HistoricalEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalEvents to fetch.
     */
    where?: HistoricalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalEvents to fetch.
     */
    orderBy?: HistoricalEventOrderByWithRelationInput | HistoricalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricalEvents.
     */
    cursor?: HistoricalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalEvents.
     */
    skip?: number
    distinct?: HistoricalEventScalarFieldEnum | HistoricalEventScalarFieldEnum[]
  }

  /**
   * HistoricalEvent create
   */
  export type HistoricalEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricalEvent.
     */
    data: XOR<HistoricalEventCreateInput, HistoricalEventUncheckedCreateInput>
  }

  /**
   * HistoricalEvent createMany
   */
  export type HistoricalEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricalEvents.
     */
    data: HistoricalEventCreateManyInput | HistoricalEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricalEvent createManyAndReturn
   */
  export type HistoricalEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricalEvents.
     */
    data: HistoricalEventCreateManyInput | HistoricalEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricalEvent update
   */
  export type HistoricalEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricalEvent.
     */
    data: XOR<HistoricalEventUpdateInput, HistoricalEventUncheckedUpdateInput>
    /**
     * Choose, which HistoricalEvent to update.
     */
    where: HistoricalEventWhereUniqueInput
  }

  /**
   * HistoricalEvent updateMany
   */
  export type HistoricalEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricalEvents.
     */
    data: XOR<HistoricalEventUpdateManyMutationInput, HistoricalEventUncheckedUpdateManyInput>
    /**
     * Filter which HistoricalEvents to update
     */
    where?: HistoricalEventWhereInput
    /**
     * Limit how many HistoricalEvents to update.
     */
    limit?: number
  }

  /**
   * HistoricalEvent updateManyAndReturn
   */
  export type HistoricalEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * The data used to update HistoricalEvents.
     */
    data: XOR<HistoricalEventUpdateManyMutationInput, HistoricalEventUncheckedUpdateManyInput>
    /**
     * Filter which HistoricalEvents to update
     */
    where?: HistoricalEventWhereInput
    /**
     * Limit how many HistoricalEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricalEvent upsert
   */
  export type HistoricalEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricalEvent to update in case it exists.
     */
    where: HistoricalEventWhereUniqueInput
    /**
     * In case the HistoricalEvent found by the `where` argument doesn't exist, create a new HistoricalEvent with this data.
     */
    create: XOR<HistoricalEventCreateInput, HistoricalEventUncheckedCreateInput>
    /**
     * In case the HistoricalEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricalEventUpdateInput, HistoricalEventUncheckedUpdateInput>
  }

  /**
   * HistoricalEvent delete
   */
  export type HistoricalEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    /**
     * Filter which HistoricalEvent to delete.
     */
    where: HistoricalEventWhereUniqueInput
  }

  /**
   * HistoricalEvent deleteMany
   */
  export type HistoricalEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricalEvents to delete
     */
    where?: HistoricalEventWhereInput
    /**
     * Limit how many HistoricalEvents to delete.
     */
    limit?: number
  }

  /**
   * HistoricalEvent.editors
   */
  export type HistoricalEvent$editorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    where?: EventEditWhereInput
    orderBy?: EventEditOrderByWithRelationInput | EventEditOrderByWithRelationInput[]
    cursor?: EventEditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventEditScalarFieldEnum | EventEditScalarFieldEnum[]
  }

  /**
   * HistoricalEvent.categories
   */
  export type HistoricalEvent$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    where?: EventPeriodWhereInput
    orderBy?: EventPeriodOrderByWithRelationInput | EventPeriodOrderByWithRelationInput[]
    cursor?: EventPeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventPeriodScalarFieldEnum | EventPeriodScalarFieldEnum[]
  }

  /**
   * HistoricalEvent without action
   */
  export type HistoricalEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
  }


  /**
   * Model EventEdit
   */

  export type AggregateEventEdit = {
    _count: EventEditCountAggregateOutputType | null
    _avg: EventEditAvgAggregateOutputType | null
    _sum: EventEditSumAggregateOutputType | null
    _min: EventEditMinAggregateOutputType | null
    _max: EventEditMaxAggregateOutputType | null
  }

  export type EventEditAvgAggregateOutputType = {
    prevFromDay: number | null
    prevFromMonth: number | null
    prevFromYear: number | null
    prevToDay: number | null
    prevToMonth: number | null
    prevToYear: number | null
    newFromDay: number | null
    newFromMonth: number | null
    newFromYear: number | null
    newToDay: number | null
    newToMonth: number | null
    newToYear: number | null
  }

  export type EventEditSumAggregateOutputType = {
    prevFromDay: number | null
    prevFromMonth: number | null
    prevFromYear: number | null
    prevToDay: number | null
    prevToMonth: number | null
    prevToYear: number | null
    newFromDay: number | null
    newFromMonth: number | null
    newFromYear: number | null
    newToDay: number | null
    newToMonth: number | null
    newToYear: number | null
  }

  export type EventEditMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    editorId: string | null
    editedAt: Date | null
    prevContent: string | null
    newContent: string | null
    prevFromDay: number | null
    prevFromMonth: number | null
    prevFromYear: number | null
    prevToDay: number | null
    prevToMonth: number | null
    prevToYear: number | null
    newFromDay: number | null
    newFromMonth: number | null
    newFromYear: number | null
    newToDay: number | null
    newToMonth: number | null
    newToYear: number | null
  }

  export type EventEditMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    editorId: string | null
    editedAt: Date | null
    prevContent: string | null
    newContent: string | null
    prevFromDay: number | null
    prevFromMonth: number | null
    prevFromYear: number | null
    prevToDay: number | null
    prevToMonth: number | null
    prevToYear: number | null
    newFromDay: number | null
    newFromMonth: number | null
    newFromYear: number | null
    newToDay: number | null
    newToMonth: number | null
    newToYear: number | null
  }

  export type EventEditCountAggregateOutputType = {
    id: number
    eventId: number
    editorId: number
    editedAt: number
    prevContent: number
    newContent: number
    prevFromDay: number
    prevFromMonth: number
    prevFromYear: number
    prevToDay: number
    prevToMonth: number
    prevToYear: number
    newFromDay: number
    newFromMonth: number
    newFromYear: number
    newToDay: number
    newToMonth: number
    newToYear: number
    _all: number
  }


  export type EventEditAvgAggregateInputType = {
    prevFromDay?: true
    prevFromMonth?: true
    prevFromYear?: true
    prevToDay?: true
    prevToMonth?: true
    prevToYear?: true
    newFromDay?: true
    newFromMonth?: true
    newFromYear?: true
    newToDay?: true
    newToMonth?: true
    newToYear?: true
  }

  export type EventEditSumAggregateInputType = {
    prevFromDay?: true
    prevFromMonth?: true
    prevFromYear?: true
    prevToDay?: true
    prevToMonth?: true
    prevToYear?: true
    newFromDay?: true
    newFromMonth?: true
    newFromYear?: true
    newToDay?: true
    newToMonth?: true
    newToYear?: true
  }

  export type EventEditMinAggregateInputType = {
    id?: true
    eventId?: true
    editorId?: true
    editedAt?: true
    prevContent?: true
    newContent?: true
    prevFromDay?: true
    prevFromMonth?: true
    prevFromYear?: true
    prevToDay?: true
    prevToMonth?: true
    prevToYear?: true
    newFromDay?: true
    newFromMonth?: true
    newFromYear?: true
    newToDay?: true
    newToMonth?: true
    newToYear?: true
  }

  export type EventEditMaxAggregateInputType = {
    id?: true
    eventId?: true
    editorId?: true
    editedAt?: true
    prevContent?: true
    newContent?: true
    prevFromDay?: true
    prevFromMonth?: true
    prevFromYear?: true
    prevToDay?: true
    prevToMonth?: true
    prevToYear?: true
    newFromDay?: true
    newFromMonth?: true
    newFromYear?: true
    newToDay?: true
    newToMonth?: true
    newToYear?: true
  }

  export type EventEditCountAggregateInputType = {
    id?: true
    eventId?: true
    editorId?: true
    editedAt?: true
    prevContent?: true
    newContent?: true
    prevFromDay?: true
    prevFromMonth?: true
    prevFromYear?: true
    prevToDay?: true
    prevToMonth?: true
    prevToYear?: true
    newFromDay?: true
    newFromMonth?: true
    newFromYear?: true
    newToDay?: true
    newToMonth?: true
    newToYear?: true
    _all?: true
  }

  export type EventEditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventEdit to aggregate.
     */
    where?: EventEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEdits to fetch.
     */
    orderBy?: EventEditOrderByWithRelationInput | EventEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventEdits
    **/
    _count?: true | EventEditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventEditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventEditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventEditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventEditMaxAggregateInputType
  }

  export type GetEventEditAggregateType<T extends EventEditAggregateArgs> = {
        [P in keyof T & keyof AggregateEventEdit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventEdit[P]>
      : GetScalarType<T[P], AggregateEventEdit[P]>
  }




  export type EventEditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventEditWhereInput
    orderBy?: EventEditOrderByWithAggregationInput | EventEditOrderByWithAggregationInput[]
    by: EventEditScalarFieldEnum[] | EventEditScalarFieldEnum
    having?: EventEditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventEditCountAggregateInputType | true
    _avg?: EventEditAvgAggregateInputType
    _sum?: EventEditSumAggregateInputType
    _min?: EventEditMinAggregateInputType
    _max?: EventEditMaxAggregateInputType
  }

  export type EventEditGroupByOutputType = {
    id: string
    eventId: string
    editorId: string
    editedAt: Date
    prevContent: string
    newContent: string
    prevFromDay: number | null
    prevFromMonth: number | null
    prevFromYear: number
    prevToDay: number | null
    prevToMonth: number | null
    prevToYear: number
    newFromDay: number | null
    newFromMonth: number | null
    newFromYear: number
    newToDay: number | null
    newToMonth: number | null
    newToYear: number
    _count: EventEditCountAggregateOutputType | null
    _avg: EventEditAvgAggregateOutputType | null
    _sum: EventEditSumAggregateOutputType | null
    _min: EventEditMinAggregateOutputType | null
    _max: EventEditMaxAggregateOutputType | null
  }

  type GetEventEditGroupByPayload<T extends EventEditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventEditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventEditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventEditGroupByOutputType[P]>
            : GetScalarType<T[P], EventEditGroupByOutputType[P]>
        }
      >
    >


  export type EventEditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    editorId?: boolean
    editedAt?: boolean
    prevContent?: boolean
    newContent?: boolean
    prevFromDay?: boolean
    prevFromMonth?: boolean
    prevFromYear?: boolean
    prevToDay?: boolean
    prevToMonth?: boolean
    prevToYear?: boolean
    newFromDay?: boolean
    newFromMonth?: boolean
    newFromYear?: boolean
    newToDay?: boolean
    newToMonth?: boolean
    newToYear?: boolean
    event?: boolean | HistoricalEventDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventEdit"]>

  export type EventEditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    editorId?: boolean
    editedAt?: boolean
    prevContent?: boolean
    newContent?: boolean
    prevFromDay?: boolean
    prevFromMonth?: boolean
    prevFromYear?: boolean
    prevToDay?: boolean
    prevToMonth?: boolean
    prevToYear?: boolean
    newFromDay?: boolean
    newFromMonth?: boolean
    newFromYear?: boolean
    newToDay?: boolean
    newToMonth?: boolean
    newToYear?: boolean
    event?: boolean | HistoricalEventDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventEdit"]>

  export type EventEditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    editorId?: boolean
    editedAt?: boolean
    prevContent?: boolean
    newContent?: boolean
    prevFromDay?: boolean
    prevFromMonth?: boolean
    prevFromYear?: boolean
    prevToDay?: boolean
    prevToMonth?: boolean
    prevToYear?: boolean
    newFromDay?: boolean
    newFromMonth?: boolean
    newFromYear?: boolean
    newToDay?: boolean
    newToMonth?: boolean
    newToYear?: boolean
    event?: boolean | HistoricalEventDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventEdit"]>

  export type EventEditSelectScalar = {
    id?: boolean
    eventId?: boolean
    editorId?: boolean
    editedAt?: boolean
    prevContent?: boolean
    newContent?: boolean
    prevFromDay?: boolean
    prevFromMonth?: boolean
    prevFromYear?: boolean
    prevToDay?: boolean
    prevToMonth?: boolean
    prevToYear?: boolean
    newFromDay?: boolean
    newFromMonth?: boolean
    newFromYear?: boolean
    newToDay?: boolean
    newToMonth?: boolean
    newToYear?: boolean
  }

  export type EventEditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "editorId" | "editedAt" | "prevContent" | "newContent" | "prevFromDay" | "prevFromMonth" | "prevFromYear" | "prevToDay" | "prevToMonth" | "prevToYear" | "newFromDay" | "newFromMonth" | "newFromYear" | "newToDay" | "newToMonth" | "newToYear", ExtArgs["result"]["eventEdit"]>
  export type EventEditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | HistoricalEventDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventEditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | HistoricalEventDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventEditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | HistoricalEventDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventEditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventEdit"
    objects: {
      event: Prisma.$HistoricalEventPayload<ExtArgs>
      editor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      editorId: string
      editedAt: Date
      prevContent: string
      newContent: string
      prevFromDay: number | null
      prevFromMonth: number | null
      prevFromYear: number
      prevToDay: number | null
      prevToMonth: number | null
      prevToYear: number
      newFromDay: number | null
      newFromMonth: number | null
      newFromYear: number
      newToDay: number | null
      newToMonth: number | null
      newToYear: number
    }, ExtArgs["result"]["eventEdit"]>
    composites: {}
  }

  type EventEditGetPayload<S extends boolean | null | undefined | EventEditDefaultArgs> = $Result.GetResult<Prisma.$EventEditPayload, S>

  type EventEditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventEditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventEditCountAggregateInputType | true
    }

  export interface EventEditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventEdit'], meta: { name: 'EventEdit' } }
    /**
     * Find zero or one EventEdit that matches the filter.
     * @param {EventEditFindUniqueArgs} args - Arguments to find a EventEdit
     * @example
     * // Get one EventEdit
     * const eventEdit = await prisma.eventEdit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventEditFindUniqueArgs>(args: SelectSubset<T, EventEditFindUniqueArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventEdit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventEditFindUniqueOrThrowArgs} args - Arguments to find a EventEdit
     * @example
     * // Get one EventEdit
     * const eventEdit = await prisma.eventEdit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventEditFindUniqueOrThrowArgs>(args: SelectSubset<T, EventEditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventEdit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEditFindFirstArgs} args - Arguments to find a EventEdit
     * @example
     * // Get one EventEdit
     * const eventEdit = await prisma.eventEdit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventEditFindFirstArgs>(args?: SelectSubset<T, EventEditFindFirstArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventEdit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEditFindFirstOrThrowArgs} args - Arguments to find a EventEdit
     * @example
     * // Get one EventEdit
     * const eventEdit = await prisma.eventEdit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventEditFindFirstOrThrowArgs>(args?: SelectSubset<T, EventEditFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventEdits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventEdits
     * const eventEdits = await prisma.eventEdit.findMany()
     * 
     * // Get first 10 EventEdits
     * const eventEdits = await prisma.eventEdit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventEditWithIdOnly = await prisma.eventEdit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventEditFindManyArgs>(args?: SelectSubset<T, EventEditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventEdit.
     * @param {EventEditCreateArgs} args - Arguments to create a EventEdit.
     * @example
     * // Create one EventEdit
     * const EventEdit = await prisma.eventEdit.create({
     *   data: {
     *     // ... data to create a EventEdit
     *   }
     * })
     * 
     */
    create<T extends EventEditCreateArgs>(args: SelectSubset<T, EventEditCreateArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventEdits.
     * @param {EventEditCreateManyArgs} args - Arguments to create many EventEdits.
     * @example
     * // Create many EventEdits
     * const eventEdit = await prisma.eventEdit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventEditCreateManyArgs>(args?: SelectSubset<T, EventEditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventEdits and returns the data saved in the database.
     * @param {EventEditCreateManyAndReturnArgs} args - Arguments to create many EventEdits.
     * @example
     * // Create many EventEdits
     * const eventEdit = await prisma.eventEdit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventEdits and only return the `id`
     * const eventEditWithIdOnly = await prisma.eventEdit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventEditCreateManyAndReturnArgs>(args?: SelectSubset<T, EventEditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventEdit.
     * @param {EventEditDeleteArgs} args - Arguments to delete one EventEdit.
     * @example
     * // Delete one EventEdit
     * const EventEdit = await prisma.eventEdit.delete({
     *   where: {
     *     // ... filter to delete one EventEdit
     *   }
     * })
     * 
     */
    delete<T extends EventEditDeleteArgs>(args: SelectSubset<T, EventEditDeleteArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventEdit.
     * @param {EventEditUpdateArgs} args - Arguments to update one EventEdit.
     * @example
     * // Update one EventEdit
     * const eventEdit = await prisma.eventEdit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventEditUpdateArgs>(args: SelectSubset<T, EventEditUpdateArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventEdits.
     * @param {EventEditDeleteManyArgs} args - Arguments to filter EventEdits to delete.
     * @example
     * // Delete a few EventEdits
     * const { count } = await prisma.eventEdit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventEditDeleteManyArgs>(args?: SelectSubset<T, EventEditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventEdits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventEdits
     * const eventEdit = await prisma.eventEdit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventEditUpdateManyArgs>(args: SelectSubset<T, EventEditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventEdits and returns the data updated in the database.
     * @param {EventEditUpdateManyAndReturnArgs} args - Arguments to update many EventEdits.
     * @example
     * // Update many EventEdits
     * const eventEdit = await prisma.eventEdit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventEdits and only return the `id`
     * const eventEditWithIdOnly = await prisma.eventEdit.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventEditUpdateManyAndReturnArgs>(args: SelectSubset<T, EventEditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventEdit.
     * @param {EventEditUpsertArgs} args - Arguments to update or create a EventEdit.
     * @example
     * // Update or create a EventEdit
     * const eventEdit = await prisma.eventEdit.upsert({
     *   create: {
     *     // ... data to create a EventEdit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventEdit we want to update
     *   }
     * })
     */
    upsert<T extends EventEditUpsertArgs>(args: SelectSubset<T, EventEditUpsertArgs<ExtArgs>>): Prisma__EventEditClient<$Result.GetResult<Prisma.$EventEditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventEdits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEditCountArgs} args - Arguments to filter EventEdits to count.
     * @example
     * // Count the number of EventEdits
     * const count = await prisma.eventEdit.count({
     *   where: {
     *     // ... the filter for the EventEdits we want to count
     *   }
     * })
    **/
    count<T extends EventEditCountArgs>(
      args?: Subset<T, EventEditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventEditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventEdit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventEditAggregateArgs>(args: Subset<T, EventEditAggregateArgs>): Prisma.PrismaPromise<GetEventEditAggregateType<T>>

    /**
     * Group by EventEdit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEditGroupByArgs} args - Group by arguments.
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
      T extends EventEditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventEditGroupByArgs['orderBy'] }
        : { orderBy?: EventEditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventEditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventEditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventEdit model
   */
  readonly fields: EventEditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventEdit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventEditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends HistoricalEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoricalEventDefaultArgs<ExtArgs>>): Prisma__HistoricalEventClient<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventEdit model
   */
  interface EventEditFieldRefs {
    readonly id: FieldRef<"EventEdit", 'String'>
    readonly eventId: FieldRef<"EventEdit", 'String'>
    readonly editorId: FieldRef<"EventEdit", 'String'>
    readonly editedAt: FieldRef<"EventEdit", 'DateTime'>
    readonly prevContent: FieldRef<"EventEdit", 'String'>
    readonly newContent: FieldRef<"EventEdit", 'String'>
    readonly prevFromDay: FieldRef<"EventEdit", 'Int'>
    readonly prevFromMonth: FieldRef<"EventEdit", 'Int'>
    readonly prevFromYear: FieldRef<"EventEdit", 'Int'>
    readonly prevToDay: FieldRef<"EventEdit", 'Int'>
    readonly prevToMonth: FieldRef<"EventEdit", 'Int'>
    readonly prevToYear: FieldRef<"EventEdit", 'Int'>
    readonly newFromDay: FieldRef<"EventEdit", 'Int'>
    readonly newFromMonth: FieldRef<"EventEdit", 'Int'>
    readonly newFromYear: FieldRef<"EventEdit", 'Int'>
    readonly newToDay: FieldRef<"EventEdit", 'Int'>
    readonly newToMonth: FieldRef<"EventEdit", 'Int'>
    readonly newToYear: FieldRef<"EventEdit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EventEdit findUnique
   */
  export type EventEditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * Filter, which EventEdit to fetch.
     */
    where: EventEditWhereUniqueInput
  }

  /**
   * EventEdit findUniqueOrThrow
   */
  export type EventEditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * Filter, which EventEdit to fetch.
     */
    where: EventEditWhereUniqueInput
  }

  /**
   * EventEdit findFirst
   */
  export type EventEditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * Filter, which EventEdit to fetch.
     */
    where?: EventEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEdits to fetch.
     */
    orderBy?: EventEditOrderByWithRelationInput | EventEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventEdits.
     */
    cursor?: EventEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventEdits.
     */
    distinct?: EventEditScalarFieldEnum | EventEditScalarFieldEnum[]
  }

  /**
   * EventEdit findFirstOrThrow
   */
  export type EventEditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * Filter, which EventEdit to fetch.
     */
    where?: EventEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEdits to fetch.
     */
    orderBy?: EventEditOrderByWithRelationInput | EventEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventEdits.
     */
    cursor?: EventEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventEdits.
     */
    distinct?: EventEditScalarFieldEnum | EventEditScalarFieldEnum[]
  }

  /**
   * EventEdit findMany
   */
  export type EventEditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * Filter, which EventEdits to fetch.
     */
    where?: EventEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventEdits to fetch.
     */
    orderBy?: EventEditOrderByWithRelationInput | EventEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventEdits.
     */
    cursor?: EventEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventEdits.
     */
    skip?: number
    distinct?: EventEditScalarFieldEnum | EventEditScalarFieldEnum[]
  }

  /**
   * EventEdit create
   */
  export type EventEditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * The data needed to create a EventEdit.
     */
    data: XOR<EventEditCreateInput, EventEditUncheckedCreateInput>
  }

  /**
   * EventEdit createMany
   */
  export type EventEditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventEdits.
     */
    data: EventEditCreateManyInput | EventEditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventEdit createManyAndReturn
   */
  export type EventEditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * The data used to create many EventEdits.
     */
    data: EventEditCreateManyInput | EventEditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventEdit update
   */
  export type EventEditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * The data needed to update a EventEdit.
     */
    data: XOR<EventEditUpdateInput, EventEditUncheckedUpdateInput>
    /**
     * Choose, which EventEdit to update.
     */
    where: EventEditWhereUniqueInput
  }

  /**
   * EventEdit updateMany
   */
  export type EventEditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventEdits.
     */
    data: XOR<EventEditUpdateManyMutationInput, EventEditUncheckedUpdateManyInput>
    /**
     * Filter which EventEdits to update
     */
    where?: EventEditWhereInput
    /**
     * Limit how many EventEdits to update.
     */
    limit?: number
  }

  /**
   * EventEdit updateManyAndReturn
   */
  export type EventEditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * The data used to update EventEdits.
     */
    data: XOR<EventEditUpdateManyMutationInput, EventEditUncheckedUpdateManyInput>
    /**
     * Filter which EventEdits to update
     */
    where?: EventEditWhereInput
    /**
     * Limit how many EventEdits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventEdit upsert
   */
  export type EventEditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * The filter to search for the EventEdit to update in case it exists.
     */
    where: EventEditWhereUniqueInput
    /**
     * In case the EventEdit found by the `where` argument doesn't exist, create a new EventEdit with this data.
     */
    create: XOR<EventEditCreateInput, EventEditUncheckedCreateInput>
    /**
     * In case the EventEdit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventEditUpdateInput, EventEditUncheckedUpdateInput>
  }

  /**
   * EventEdit delete
   */
  export type EventEditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
    /**
     * Filter which EventEdit to delete.
     */
    where: EventEditWhereUniqueInput
  }

  /**
   * EventEdit deleteMany
   */
  export type EventEditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventEdits to delete
     */
    where?: EventEditWhereInput
    /**
     * Limit how many EventEdits to delete.
     */
    limit?: number
  }

  /**
   * EventEdit without action
   */
  export type EventEditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEdit
     */
    select?: EventEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventEdit
     */
    omit?: EventEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventEditInclude<ExtArgs> | null
  }


  /**
   * Model EventPeriod
   */

  export type AggregateEventPeriod = {
    _count: EventPeriodCountAggregateOutputType | null
    _avg: EventPeriodAvgAggregateOutputType | null
    _sum: EventPeriodSumAggregateOutputType | null
    _min: EventPeriodMinAggregateOutputType | null
    _max: EventPeriodMaxAggregateOutputType | null
  }

  export type EventPeriodAvgAggregateOutputType = {
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
  }

  export type EventPeriodSumAggregateOutputType = {
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
  }

  export type EventPeriodMinAggregateOutputType = {
    id: string | null
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
    name: string | null
    slug: string | null
    description: string | null
  }

  export type EventPeriodMaxAggregateOutputType = {
    id: string | null
    fromDay: number | null
    fromMonth: number | null
    fromYear: number | null
    toDay: number | null
    toMonth: number | null
    toYear: number | null
    name: string | null
    slug: string | null
    description: string | null
  }

  export type EventPeriodCountAggregateOutputType = {
    id: number
    fromDay: number
    fromMonth: number
    fromYear: number
    toDay: number
    toMonth: number
    toYear: number
    name: number
    slug: number
    description: number
    _all: number
  }


  export type EventPeriodAvgAggregateInputType = {
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
  }

  export type EventPeriodSumAggregateInputType = {
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
  }

  export type EventPeriodMinAggregateInputType = {
    id?: true
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
    name?: true
    slug?: true
    description?: true
  }

  export type EventPeriodMaxAggregateInputType = {
    id?: true
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
    name?: true
    slug?: true
    description?: true
  }

  export type EventPeriodCountAggregateInputType = {
    id?: true
    fromDay?: true
    fromMonth?: true
    fromYear?: true
    toDay?: true
    toMonth?: true
    toYear?: true
    name?: true
    slug?: true
    description?: true
    _all?: true
  }

  export type EventPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPeriod to aggregate.
     */
    where?: EventPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPeriods to fetch.
     */
    orderBy?: EventPeriodOrderByWithRelationInput | EventPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventPeriods
    **/
    _count?: true | EventPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventPeriodMaxAggregateInputType
  }

  export type GetEventPeriodAggregateType<T extends EventPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateEventPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventPeriod[P]>
      : GetScalarType<T[P], AggregateEventPeriod[P]>
  }




  export type EventPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPeriodWhereInput
    orderBy?: EventPeriodOrderByWithAggregationInput | EventPeriodOrderByWithAggregationInput[]
    by: EventPeriodScalarFieldEnum[] | EventPeriodScalarFieldEnum
    having?: EventPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventPeriodCountAggregateInputType | true
    _avg?: EventPeriodAvgAggregateInputType
    _sum?: EventPeriodSumAggregateInputType
    _min?: EventPeriodMinAggregateInputType
    _max?: EventPeriodMaxAggregateInputType
  }

  export type EventPeriodGroupByOutputType = {
    id: string
    fromDay: number | null
    fromMonth: number | null
    fromYear: number
    toDay: number | null
    toMonth: number | null
    toYear: number
    name: string
    slug: string
    description: string | null
    _count: EventPeriodCountAggregateOutputType | null
    _avg: EventPeriodAvgAggregateOutputType | null
    _sum: EventPeriodSumAggregateOutputType | null
    _min: EventPeriodMinAggregateOutputType | null
    _max: EventPeriodMaxAggregateOutputType | null
  }

  type GetEventPeriodGroupByPayload<T extends EventPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], EventPeriodGroupByOutputType[P]>
        }
      >
    >


  export type EventPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    events?: boolean | EventPeriod$eventsArgs<ExtArgs>
    _count?: boolean | EventPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventPeriod"]>

  export type EventPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["eventPeriod"]>

  export type EventPeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["eventPeriod"]>

  export type EventPeriodSelectScalar = {
    id?: boolean
    fromDay?: boolean
    fromMonth?: boolean
    fromYear?: boolean
    toDay?: boolean
    toMonth?: boolean
    toYear?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }

  export type EventPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromDay" | "fromMonth" | "fromYear" | "toDay" | "toMonth" | "toYear" | "name" | "slug" | "description", ExtArgs["result"]["eventPeriod"]>
  export type EventPeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventPeriod$eventsArgs<ExtArgs>
    _count?: boolean | EventPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventPeriodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventPeriodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventPeriod"
    objects: {
      events: Prisma.$HistoricalEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromDay: number | null
      fromMonth: number | null
      fromYear: number
      toDay: number | null
      toMonth: number | null
      toYear: number
      name: string
      slug: string
      description: string | null
    }, ExtArgs["result"]["eventPeriod"]>
    composites: {}
  }

  type EventPeriodGetPayload<S extends boolean | null | undefined | EventPeriodDefaultArgs> = $Result.GetResult<Prisma.$EventPeriodPayload, S>

  type EventPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventPeriodCountAggregateInputType | true
    }

  export interface EventPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventPeriod'], meta: { name: 'EventPeriod' } }
    /**
     * Find zero or one EventPeriod that matches the filter.
     * @param {EventPeriodFindUniqueArgs} args - Arguments to find a EventPeriod
     * @example
     * // Get one EventPeriod
     * const eventPeriod = await prisma.eventPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventPeriodFindUniqueArgs>(args: SelectSubset<T, EventPeriodFindUniqueArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventPeriodFindUniqueOrThrowArgs} args - Arguments to find a EventPeriod
     * @example
     * // Get one EventPeriod
     * const eventPeriod = await prisma.eventPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, EventPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPeriodFindFirstArgs} args - Arguments to find a EventPeriod
     * @example
     * // Get one EventPeriod
     * const eventPeriod = await prisma.eventPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventPeriodFindFirstArgs>(args?: SelectSubset<T, EventPeriodFindFirstArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPeriodFindFirstOrThrowArgs} args - Arguments to find a EventPeriod
     * @example
     * // Get one EventPeriod
     * const eventPeriod = await prisma.eventPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, EventPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventPeriods
     * const eventPeriods = await prisma.eventPeriod.findMany()
     * 
     * // Get first 10 EventPeriods
     * const eventPeriods = await prisma.eventPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventPeriodWithIdOnly = await prisma.eventPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventPeriodFindManyArgs>(args?: SelectSubset<T, EventPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventPeriod.
     * @param {EventPeriodCreateArgs} args - Arguments to create a EventPeriod.
     * @example
     * // Create one EventPeriod
     * const EventPeriod = await prisma.eventPeriod.create({
     *   data: {
     *     // ... data to create a EventPeriod
     *   }
     * })
     * 
     */
    create<T extends EventPeriodCreateArgs>(args: SelectSubset<T, EventPeriodCreateArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventPeriods.
     * @param {EventPeriodCreateManyArgs} args - Arguments to create many EventPeriods.
     * @example
     * // Create many EventPeriods
     * const eventPeriod = await prisma.eventPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventPeriodCreateManyArgs>(args?: SelectSubset<T, EventPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventPeriods and returns the data saved in the database.
     * @param {EventPeriodCreateManyAndReturnArgs} args - Arguments to create many EventPeriods.
     * @example
     * // Create many EventPeriods
     * const eventPeriod = await prisma.eventPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventPeriods and only return the `id`
     * const eventPeriodWithIdOnly = await prisma.eventPeriod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, EventPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventPeriod.
     * @param {EventPeriodDeleteArgs} args - Arguments to delete one EventPeriod.
     * @example
     * // Delete one EventPeriod
     * const EventPeriod = await prisma.eventPeriod.delete({
     *   where: {
     *     // ... filter to delete one EventPeriod
     *   }
     * })
     * 
     */
    delete<T extends EventPeriodDeleteArgs>(args: SelectSubset<T, EventPeriodDeleteArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventPeriod.
     * @param {EventPeriodUpdateArgs} args - Arguments to update one EventPeriod.
     * @example
     * // Update one EventPeriod
     * const eventPeriod = await prisma.eventPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventPeriodUpdateArgs>(args: SelectSubset<T, EventPeriodUpdateArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventPeriods.
     * @param {EventPeriodDeleteManyArgs} args - Arguments to filter EventPeriods to delete.
     * @example
     * // Delete a few EventPeriods
     * const { count } = await prisma.eventPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventPeriodDeleteManyArgs>(args?: SelectSubset<T, EventPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventPeriods
     * const eventPeriod = await prisma.eventPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventPeriodUpdateManyArgs>(args: SelectSubset<T, EventPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventPeriods and returns the data updated in the database.
     * @param {EventPeriodUpdateManyAndReturnArgs} args - Arguments to update many EventPeriods.
     * @example
     * // Update many EventPeriods
     * const eventPeriod = await prisma.eventPeriod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventPeriods and only return the `id`
     * const eventPeriodWithIdOnly = await prisma.eventPeriod.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventPeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, EventPeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventPeriod.
     * @param {EventPeriodUpsertArgs} args - Arguments to update or create a EventPeriod.
     * @example
     * // Update or create a EventPeriod
     * const eventPeriod = await prisma.eventPeriod.upsert({
     *   create: {
     *     // ... data to create a EventPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventPeriod we want to update
     *   }
     * })
     */
    upsert<T extends EventPeriodUpsertArgs>(args: SelectSubset<T, EventPeriodUpsertArgs<ExtArgs>>): Prisma__EventPeriodClient<$Result.GetResult<Prisma.$EventPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPeriodCountArgs} args - Arguments to filter EventPeriods to count.
     * @example
     * // Count the number of EventPeriods
     * const count = await prisma.eventPeriod.count({
     *   where: {
     *     // ... the filter for the EventPeriods we want to count
     *   }
     * })
    **/
    count<T extends EventPeriodCountArgs>(
      args?: Subset<T, EventPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventPeriodAggregateArgs>(args: Subset<T, EventPeriodAggregateArgs>): Prisma.PrismaPromise<GetEventPeriodAggregateType<T>>

    /**
     * Group by EventPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPeriodGroupByArgs} args - Group by arguments.
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
      T extends EventPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventPeriodGroupByArgs['orderBy'] }
        : { orderBy?: EventPeriodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventPeriod model
   */
  readonly fields: EventPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends EventPeriod$eventsArgs<ExtArgs> = {}>(args?: Subset<T, EventPeriod$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EventPeriod model
   */
  interface EventPeriodFieldRefs {
    readonly id: FieldRef<"EventPeriod", 'String'>
    readonly fromDay: FieldRef<"EventPeriod", 'Int'>
    readonly fromMonth: FieldRef<"EventPeriod", 'Int'>
    readonly fromYear: FieldRef<"EventPeriod", 'Int'>
    readonly toDay: FieldRef<"EventPeriod", 'Int'>
    readonly toMonth: FieldRef<"EventPeriod", 'Int'>
    readonly toYear: FieldRef<"EventPeriod", 'Int'>
    readonly name: FieldRef<"EventPeriod", 'String'>
    readonly slug: FieldRef<"EventPeriod", 'String'>
    readonly description: FieldRef<"EventPeriod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventPeriod findUnique
   */
  export type EventPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * Filter, which EventPeriod to fetch.
     */
    where: EventPeriodWhereUniqueInput
  }

  /**
   * EventPeriod findUniqueOrThrow
   */
  export type EventPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * Filter, which EventPeriod to fetch.
     */
    where: EventPeriodWhereUniqueInput
  }

  /**
   * EventPeriod findFirst
   */
  export type EventPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * Filter, which EventPeriod to fetch.
     */
    where?: EventPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPeriods to fetch.
     */
    orderBy?: EventPeriodOrderByWithRelationInput | EventPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPeriods.
     */
    cursor?: EventPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPeriods.
     */
    distinct?: EventPeriodScalarFieldEnum | EventPeriodScalarFieldEnum[]
  }

  /**
   * EventPeriod findFirstOrThrow
   */
  export type EventPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * Filter, which EventPeriod to fetch.
     */
    where?: EventPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPeriods to fetch.
     */
    orderBy?: EventPeriodOrderByWithRelationInput | EventPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPeriods.
     */
    cursor?: EventPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPeriods.
     */
    distinct?: EventPeriodScalarFieldEnum | EventPeriodScalarFieldEnum[]
  }

  /**
   * EventPeriod findMany
   */
  export type EventPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * Filter, which EventPeriods to fetch.
     */
    where?: EventPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPeriods to fetch.
     */
    orderBy?: EventPeriodOrderByWithRelationInput | EventPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventPeriods.
     */
    cursor?: EventPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPeriods.
     */
    skip?: number
    distinct?: EventPeriodScalarFieldEnum | EventPeriodScalarFieldEnum[]
  }

  /**
   * EventPeriod create
   */
  export type EventPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a EventPeriod.
     */
    data: XOR<EventPeriodCreateInput, EventPeriodUncheckedCreateInput>
  }

  /**
   * EventPeriod createMany
   */
  export type EventPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventPeriods.
     */
    data: EventPeriodCreateManyInput | EventPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventPeriod createManyAndReturn
   */
  export type EventPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * The data used to create many EventPeriods.
     */
    data: EventPeriodCreateManyInput | EventPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventPeriod update
   */
  export type EventPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a EventPeriod.
     */
    data: XOR<EventPeriodUpdateInput, EventPeriodUncheckedUpdateInput>
    /**
     * Choose, which EventPeriod to update.
     */
    where: EventPeriodWhereUniqueInput
  }

  /**
   * EventPeriod updateMany
   */
  export type EventPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventPeriods.
     */
    data: XOR<EventPeriodUpdateManyMutationInput, EventPeriodUncheckedUpdateManyInput>
    /**
     * Filter which EventPeriods to update
     */
    where?: EventPeriodWhereInput
    /**
     * Limit how many EventPeriods to update.
     */
    limit?: number
  }

  /**
   * EventPeriod updateManyAndReturn
   */
  export type EventPeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * The data used to update EventPeriods.
     */
    data: XOR<EventPeriodUpdateManyMutationInput, EventPeriodUncheckedUpdateManyInput>
    /**
     * Filter which EventPeriods to update
     */
    where?: EventPeriodWhereInput
    /**
     * Limit how many EventPeriods to update.
     */
    limit?: number
  }

  /**
   * EventPeriod upsert
   */
  export type EventPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the EventPeriod to update in case it exists.
     */
    where: EventPeriodWhereUniqueInput
    /**
     * In case the EventPeriod found by the `where` argument doesn't exist, create a new EventPeriod with this data.
     */
    create: XOR<EventPeriodCreateInput, EventPeriodUncheckedCreateInput>
    /**
     * In case the EventPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventPeriodUpdateInput, EventPeriodUncheckedUpdateInput>
  }

  /**
   * EventPeriod delete
   */
  export type EventPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
    /**
     * Filter which EventPeriod to delete.
     */
    where: EventPeriodWhereUniqueInput
  }

  /**
   * EventPeriod deleteMany
   */
  export type EventPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPeriods to delete
     */
    where?: EventPeriodWhereInput
    /**
     * Limit how many EventPeriods to delete.
     */
    limit?: number
  }

  /**
   * EventPeriod.events
   */
  export type EventPeriod$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalEvent
     */
    select?: HistoricalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalEvent
     */
    omit?: HistoricalEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalEventInclude<ExtArgs> | null
    where?: HistoricalEventWhereInput
    orderBy?: HistoricalEventOrderByWithRelationInput | HistoricalEventOrderByWithRelationInput[]
    cursor?: HistoricalEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricalEventScalarFieldEnum | HistoricalEventScalarFieldEnum[]
  }

  /**
   * EventPeriod without action
   */
  export type EventPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPeriod
     */
    select?: EventPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPeriod
     */
    omit?: EventPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPeriodInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authors?: boolean | BlogPost$authorsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | BlogPost$authorsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      authors: Prisma.$BlogAuthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
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
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors<T extends BlogPost$authorsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.authors
   */
  export type BlogPost$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    where?: BlogAuthorWhereInput
    orderBy?: BlogAuthorOrderByWithRelationInput | BlogAuthorOrderByWithRelationInput[]
    cursor?: BlogAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogAuthorScalarFieldEnum | BlogAuthorScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model BlogAuthor
   */

  export type AggregateBlogAuthor = {
    _count: BlogAuthorCountAggregateOutputType | null
    _min: BlogAuthorMinAggregateOutputType | null
    _max: BlogAuthorMaxAggregateOutputType | null
  }

  export type BlogAuthorMinAggregateOutputType = {
    authorId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type BlogAuthorMaxAggregateOutputType = {
    authorId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type BlogAuthorCountAggregateOutputType = {
    authorId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type BlogAuthorMinAggregateInputType = {
    authorId?: true
    postId?: true
    createdAt?: true
  }

  export type BlogAuthorMaxAggregateInputType = {
    authorId?: true
    postId?: true
    createdAt?: true
  }

  export type BlogAuthorCountAggregateInputType = {
    authorId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type BlogAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogAuthor to aggregate.
     */
    where?: BlogAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAuthors to fetch.
     */
    orderBy?: BlogAuthorOrderByWithRelationInput | BlogAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogAuthors
    **/
    _count?: true | BlogAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogAuthorMaxAggregateInputType
  }

  export type GetBlogAuthorAggregateType<T extends BlogAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogAuthor[P]>
      : GetScalarType<T[P], AggregateBlogAuthor[P]>
  }




  export type BlogAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogAuthorWhereInput
    orderBy?: BlogAuthorOrderByWithAggregationInput | BlogAuthorOrderByWithAggregationInput[]
    by: BlogAuthorScalarFieldEnum[] | BlogAuthorScalarFieldEnum
    having?: BlogAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogAuthorCountAggregateInputType | true
    _min?: BlogAuthorMinAggregateInputType
    _max?: BlogAuthorMaxAggregateInputType
  }

  export type BlogAuthorGroupByOutputType = {
    authorId: string
    postId: string
    createdAt: Date
    _count: BlogAuthorCountAggregateOutputType | null
    _min: BlogAuthorMinAggregateOutputType | null
    _max: BlogAuthorMaxAggregateOutputType | null
  }

  type GetBlogAuthorGroupByPayload<T extends BlogAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], BlogAuthorGroupByOutputType[P]>
        }
      >
    >


  export type BlogAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogAuthor"]>

  export type BlogAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogAuthor"]>

  export type BlogAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogAuthor"]>

  export type BlogAuthorSelectScalar = {
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type BlogAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authorId" | "postId" | "createdAt", ExtArgs["result"]["blogAuthor"]>
  export type BlogAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type BlogAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type BlogAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }

  export type $BlogAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogAuthor"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$BlogPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      authorId: string
      postId: string
      createdAt: Date
    }, ExtArgs["result"]["blogAuthor"]>
    composites: {}
  }

  type BlogAuthorGetPayload<S extends boolean | null | undefined | BlogAuthorDefaultArgs> = $Result.GetResult<Prisma.$BlogAuthorPayload, S>

  type BlogAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogAuthorCountAggregateInputType | true
    }

  export interface BlogAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogAuthor'], meta: { name: 'BlogAuthor' } }
    /**
     * Find zero or one BlogAuthor that matches the filter.
     * @param {BlogAuthorFindUniqueArgs} args - Arguments to find a BlogAuthor
     * @example
     * // Get one BlogAuthor
     * const blogAuthor = await prisma.blogAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogAuthorFindUniqueArgs>(args: SelectSubset<T, BlogAuthorFindUniqueArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogAuthorFindUniqueOrThrowArgs} args - Arguments to find a BlogAuthor
     * @example
     * // Get one BlogAuthor
     * const blogAuthor = await prisma.blogAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAuthorFindFirstArgs} args - Arguments to find a BlogAuthor
     * @example
     * // Get one BlogAuthor
     * const blogAuthor = await prisma.blogAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogAuthorFindFirstArgs>(args?: SelectSubset<T, BlogAuthorFindFirstArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAuthorFindFirstOrThrowArgs} args - Arguments to find a BlogAuthor
     * @example
     * // Get one BlogAuthor
     * const blogAuthor = await prisma.blogAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogAuthors
     * const blogAuthors = await prisma.blogAuthor.findMany()
     * 
     * // Get first 10 BlogAuthors
     * const blogAuthors = await prisma.blogAuthor.findMany({ take: 10 })
     * 
     * // Only select the `authorId`
     * const blogAuthorWithAuthorIdOnly = await prisma.blogAuthor.findMany({ select: { authorId: true } })
     * 
     */
    findMany<T extends BlogAuthorFindManyArgs>(args?: SelectSubset<T, BlogAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogAuthor.
     * @param {BlogAuthorCreateArgs} args - Arguments to create a BlogAuthor.
     * @example
     * // Create one BlogAuthor
     * const BlogAuthor = await prisma.blogAuthor.create({
     *   data: {
     *     // ... data to create a BlogAuthor
     *   }
     * })
     * 
     */
    create<T extends BlogAuthorCreateArgs>(args: SelectSubset<T, BlogAuthorCreateArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogAuthors.
     * @param {BlogAuthorCreateManyArgs} args - Arguments to create many BlogAuthors.
     * @example
     * // Create many BlogAuthors
     * const blogAuthor = await prisma.blogAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogAuthorCreateManyArgs>(args?: SelectSubset<T, BlogAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogAuthors and returns the data saved in the database.
     * @param {BlogAuthorCreateManyAndReturnArgs} args - Arguments to create many BlogAuthors.
     * @example
     * // Create many BlogAuthors
     * const blogAuthor = await prisma.blogAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogAuthors and only return the `authorId`
     * const blogAuthorWithAuthorIdOnly = await prisma.blogAuthor.createManyAndReturn({
     *   select: { authorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogAuthor.
     * @param {BlogAuthorDeleteArgs} args - Arguments to delete one BlogAuthor.
     * @example
     * // Delete one BlogAuthor
     * const BlogAuthor = await prisma.blogAuthor.delete({
     *   where: {
     *     // ... filter to delete one BlogAuthor
     *   }
     * })
     * 
     */
    delete<T extends BlogAuthorDeleteArgs>(args: SelectSubset<T, BlogAuthorDeleteArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogAuthor.
     * @param {BlogAuthorUpdateArgs} args - Arguments to update one BlogAuthor.
     * @example
     * // Update one BlogAuthor
     * const blogAuthor = await prisma.blogAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogAuthorUpdateArgs>(args: SelectSubset<T, BlogAuthorUpdateArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogAuthors.
     * @param {BlogAuthorDeleteManyArgs} args - Arguments to filter BlogAuthors to delete.
     * @example
     * // Delete a few BlogAuthors
     * const { count } = await prisma.blogAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogAuthorDeleteManyArgs>(args?: SelectSubset<T, BlogAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogAuthors
     * const blogAuthor = await prisma.blogAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogAuthorUpdateManyArgs>(args: SelectSubset<T, BlogAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogAuthors and returns the data updated in the database.
     * @param {BlogAuthorUpdateManyAndReturnArgs} args - Arguments to update many BlogAuthors.
     * @example
     * // Update many BlogAuthors
     * const blogAuthor = await prisma.blogAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogAuthors and only return the `authorId`
     * const blogAuthorWithAuthorIdOnly = await prisma.blogAuthor.updateManyAndReturn({
     *   select: { authorId: true },
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
    updateManyAndReturn<T extends BlogAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogAuthor.
     * @param {BlogAuthorUpsertArgs} args - Arguments to update or create a BlogAuthor.
     * @example
     * // Update or create a BlogAuthor
     * const blogAuthor = await prisma.blogAuthor.upsert({
     *   create: {
     *     // ... data to create a BlogAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogAuthor we want to update
     *   }
     * })
     */
    upsert<T extends BlogAuthorUpsertArgs>(args: SelectSubset<T, BlogAuthorUpsertArgs<ExtArgs>>): Prisma__BlogAuthorClient<$Result.GetResult<Prisma.$BlogAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAuthorCountArgs} args - Arguments to filter BlogAuthors to count.
     * @example
     * // Count the number of BlogAuthors
     * const count = await prisma.blogAuthor.count({
     *   where: {
     *     // ... the filter for the BlogAuthors we want to count
     *   }
     * })
    **/
    count<T extends BlogAuthorCountArgs>(
      args?: Subset<T, BlogAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAuthorAggregateArgs>(args: Subset<T, BlogAuthorAggregateArgs>): Prisma.PrismaPromise<GetBlogAuthorAggregateType<T>>

    /**
     * Group by BlogAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAuthorGroupByArgs} args - Group by arguments.
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
      T extends BlogAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogAuthorGroupByArgs['orderBy'] }
        : { orderBy?: BlogAuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogAuthor model
   */
  readonly fields: BlogAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlogAuthor model
   */
  interface BlogAuthorFieldRefs {
    readonly authorId: FieldRef<"BlogAuthor", 'String'>
    readonly postId: FieldRef<"BlogAuthor", 'String'>
    readonly createdAt: FieldRef<"BlogAuthor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogAuthor findUnique
   */
  export type BlogAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BlogAuthor to fetch.
     */
    where: BlogAuthorWhereUniqueInput
  }

  /**
   * BlogAuthor findUniqueOrThrow
   */
  export type BlogAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BlogAuthor to fetch.
     */
    where: BlogAuthorWhereUniqueInput
  }

  /**
   * BlogAuthor findFirst
   */
  export type BlogAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BlogAuthor to fetch.
     */
    where?: BlogAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAuthors to fetch.
     */
    orderBy?: BlogAuthorOrderByWithRelationInput | BlogAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogAuthors.
     */
    cursor?: BlogAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogAuthors.
     */
    distinct?: BlogAuthorScalarFieldEnum | BlogAuthorScalarFieldEnum[]
  }

  /**
   * BlogAuthor findFirstOrThrow
   */
  export type BlogAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BlogAuthor to fetch.
     */
    where?: BlogAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAuthors to fetch.
     */
    orderBy?: BlogAuthorOrderByWithRelationInput | BlogAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogAuthors.
     */
    cursor?: BlogAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogAuthors.
     */
    distinct?: BlogAuthorScalarFieldEnum | BlogAuthorScalarFieldEnum[]
  }

  /**
   * BlogAuthor findMany
   */
  export type BlogAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BlogAuthors to fetch.
     */
    where?: BlogAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAuthors to fetch.
     */
    orderBy?: BlogAuthorOrderByWithRelationInput | BlogAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogAuthors.
     */
    cursor?: BlogAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAuthors.
     */
    skip?: number
    distinct?: BlogAuthorScalarFieldEnum | BlogAuthorScalarFieldEnum[]
  }

  /**
   * BlogAuthor create
   */
  export type BlogAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogAuthor.
     */
    data: XOR<BlogAuthorCreateInput, BlogAuthorUncheckedCreateInput>
  }

  /**
   * BlogAuthor createMany
   */
  export type BlogAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogAuthors.
     */
    data: BlogAuthorCreateManyInput | BlogAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogAuthor createManyAndReturn
   */
  export type BlogAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many BlogAuthors.
     */
    data: BlogAuthorCreateManyInput | BlogAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogAuthor update
   */
  export type BlogAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogAuthor.
     */
    data: XOR<BlogAuthorUpdateInput, BlogAuthorUncheckedUpdateInput>
    /**
     * Choose, which BlogAuthor to update.
     */
    where: BlogAuthorWhereUniqueInput
  }

  /**
   * BlogAuthor updateMany
   */
  export type BlogAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogAuthors.
     */
    data: XOR<BlogAuthorUpdateManyMutationInput, BlogAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BlogAuthors to update
     */
    where?: BlogAuthorWhereInput
    /**
     * Limit how many BlogAuthors to update.
     */
    limit?: number
  }

  /**
   * BlogAuthor updateManyAndReturn
   */
  export type BlogAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * The data used to update BlogAuthors.
     */
    data: XOR<BlogAuthorUpdateManyMutationInput, BlogAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BlogAuthors to update
     */
    where?: BlogAuthorWhereInput
    /**
     * Limit how many BlogAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogAuthor upsert
   */
  export type BlogAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogAuthor to update in case it exists.
     */
    where: BlogAuthorWhereUniqueInput
    /**
     * In case the BlogAuthor found by the `where` argument doesn't exist, create a new BlogAuthor with this data.
     */
    create: XOR<BlogAuthorCreateInput, BlogAuthorUncheckedCreateInput>
    /**
     * In case the BlogAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogAuthorUpdateInput, BlogAuthorUncheckedUpdateInput>
  }

  /**
   * BlogAuthor delete
   */
  export type BlogAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
    /**
     * Filter which BlogAuthor to delete.
     */
    where: BlogAuthorWhereUniqueInput
  }

  /**
   * BlogAuthor deleteMany
   */
  export type BlogAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogAuthors to delete
     */
    where?: BlogAuthorWhereInput
    /**
     * Limit how many BlogAuthors to delete.
     */
    limit?: number
  }

  /**
   * BlogAuthor without action
   */
  export type BlogAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAuthor
     */
    select?: BlogAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAuthor
     */
    omit?: BlogAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAuthorInclude<ExtArgs> | null
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
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    status: 'status',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const KeyTokenScalarFieldEnum: {
    id: 'id',
    browserId: 'browserId',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    refreshTokensUsed: 'refreshTokensUsed',
    refreshToken: 'refreshToken',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KeyTokenScalarFieldEnum = (typeof KeyTokenScalarFieldEnum)[keyof typeof KeyTokenScalarFieldEnum]


  export const HistoricalEventScalarFieldEnum: {
    id: 'id',
    fromDay: 'fromDay',
    fromMonth: 'fromMonth',
    fromYear: 'fromYear',
    toDay: 'toDay',
    toMonth: 'toMonth',
    toYear: 'toYear',
    content: 'content',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HistoricalEventScalarFieldEnum = (typeof HistoricalEventScalarFieldEnum)[keyof typeof HistoricalEventScalarFieldEnum]


  export const EventEditScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    editorId: 'editorId',
    editedAt: 'editedAt',
    prevContent: 'prevContent',
    newContent: 'newContent',
    prevFromDay: 'prevFromDay',
    prevFromMonth: 'prevFromMonth',
    prevFromYear: 'prevFromYear',
    prevToDay: 'prevToDay',
    prevToMonth: 'prevToMonth',
    prevToYear: 'prevToYear',
    newFromDay: 'newFromDay',
    newFromMonth: 'newFromMonth',
    newFromYear: 'newFromYear',
    newToDay: 'newToDay',
    newToMonth: 'newToMonth',
    newToYear: 'newToYear'
  };

  export type EventEditScalarFieldEnum = (typeof EventEditScalarFieldEnum)[keyof typeof EventEditScalarFieldEnum]


  export const EventPeriodScalarFieldEnum: {
    id: 'id',
    fromDay: 'fromDay',
    fromMonth: 'fromMonth',
    fromYear: 'fromYear',
    toDay: 'toDay',
    toMonth: 'toMonth',
    toYear: 'toYear',
    name: 'name',
    slug: 'slug',
    description: 'description'
  };

  export type EventPeriodScalarFieldEnum = (typeof EventPeriodScalarFieldEnum)[keyof typeof EventPeriodScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BlogAuthorScalarFieldEnum: {
    authorId: 'authorId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type BlogAuthorScalarFieldEnum = (typeof BlogAuthorScalarFieldEnum)[keyof typeof BlogAuthorScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
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
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    keyToken?: KeyTokenListRelationFilter
    createdEvents?: HistoricalEventListRelationFilter
    editedEvents?: EventEditListRelationFilter
    blogPosts?: BlogAuthorListRelationFilter
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    keyToken?: KeyTokenOrderByRelationAggregateInput
    createdEvents?: HistoricalEventOrderByRelationAggregateInput
    editedEvents?: EventEditOrderByRelationAggregateInput
    blogPosts?: BlogAuthorOrderByRelationAggregateInput
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
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    keyToken?: KeyTokenListRelationFilter
    createdEvents?: HistoricalEventListRelationFilter
    editedEvents?: EventEditListRelationFilter
    blogPosts?: BlogAuthorListRelationFilter
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
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
    roleId?: UuidWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: UuidFilter<"Resource"> | string
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
    id?: UuidWithAggregatesFilter<"Resource"> | string
    name?: StringWithAggregatesFilter<"Resource"> | string
    slug?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: UuidFilter<"Role"> | string
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
    id?: UuidWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    slug?: StringWithAggregatesFilter<"Role"> | string
    status?: EnumRoleStatusWithAggregatesFilter<"Role"> | $Enums.RoleStatus
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type GrantWhereInput = {
    AND?: GrantWhereInput | GrantWhereInput[]
    OR?: GrantWhereInput[]
    NOT?: GrantWhereInput | GrantWhereInput[]
    id?: UuidFilter<"Grant"> | string
    roleId?: UuidFilter<"Grant"> | string
    resourceId?: UuidFilter<"Grant"> | string
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
    roleId?: UuidFilter<"Grant"> | string
    resourceId?: UuidFilter<"Grant"> | string
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
    id?: UuidWithAggregatesFilter<"Grant"> | string
    roleId?: UuidWithAggregatesFilter<"Grant"> | string
    resourceId?: UuidWithAggregatesFilter<"Grant"> | string
    action?: StringWithAggregatesFilter<"Grant"> | string
    attribute?: StringWithAggregatesFilter<"Grant"> | string
  }

  export type OTPWhereInput = {
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    id?: UuidFilter<"OTP"> | string
    token?: StringFilter<"OTP"> | string
    email?: StringFilter<"OTP"> | string
    status?: EnumOTPStatusFilter<"OTP"> | $Enums.OTPStatus
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    updatedAt?: DateTimeFilter<"OTP"> | Date | string
  }

  export type OTPOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    updatedAt?: DateTimeFilter<"OTP"> | Date | string
  }, "id" | "token">

  export type OTPOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OTPCountOrderByAggregateInput
    _max?: OTPMaxOrderByAggregateInput
    _min?: OTPMinOrderByAggregateInput
  }

  export type OTPScalarWhereWithAggregatesInput = {
    AND?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    OR?: OTPScalarWhereWithAggregatesInput[]
    NOT?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OTP"> | string
    token?: StringWithAggregatesFilter<"OTP"> | string
    email?: StringWithAggregatesFilter<"OTP"> | string
    status?: EnumOTPStatusWithAggregatesFilter<"OTP"> | $Enums.OTPStatus
    expiresAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: UuidFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    status?: BoolFilter<"ApiKey"> | boolean
    permissions?: EnumApiKeyPermissionNullableListFilter<"ApiKey">
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    status?: BoolFilter<"ApiKey"> | boolean
    permissions?: EnumApiKeyPermissionNullableListFilter<"ApiKey">
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    status?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    permissions?: EnumApiKeyPermissionNullableListFilter<"ApiKey">
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type KeyTokenWhereInput = {
    AND?: KeyTokenWhereInput | KeyTokenWhereInput[]
    OR?: KeyTokenWhereInput[]
    NOT?: KeyTokenWhereInput | KeyTokenWhereInput[]
    id?: UuidFilter<"KeyToken"> | string
    browserId?: StringFilter<"KeyToken"> | string
    publicKey?: StringFilter<"KeyToken"> | string
    privateKey?: StringFilter<"KeyToken"> | string
    refreshTokensUsed?: StringNullableListFilter<"KeyToken">
    refreshToken?: StringFilter<"KeyToken"> | string
    userId?: UuidFilter<"KeyToken"> | string
    createdAt?: DateTimeFilter<"KeyToken"> | Date | string
    updatedAt?: DateTimeFilter<"KeyToken"> | Date | string
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    userId?: UuidFilter<"KeyToken"> | string
    createdAt?: DateTimeFilter<"KeyToken"> | Date | string
    updatedAt?: DateTimeFilter<"KeyToken"> | Date | string
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KeyTokenCountOrderByAggregateInput
    _max?: KeyTokenMaxOrderByAggregateInput
    _min?: KeyTokenMinOrderByAggregateInput
  }

  export type KeyTokenScalarWhereWithAggregatesInput = {
    AND?: KeyTokenScalarWhereWithAggregatesInput | KeyTokenScalarWhereWithAggregatesInput[]
    OR?: KeyTokenScalarWhereWithAggregatesInput[]
    NOT?: KeyTokenScalarWhereWithAggregatesInput | KeyTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"KeyToken"> | string
    browserId?: StringWithAggregatesFilter<"KeyToken"> | string
    publicKey?: StringWithAggregatesFilter<"KeyToken"> | string
    privateKey?: StringWithAggregatesFilter<"KeyToken"> | string
    refreshTokensUsed?: StringNullableListFilter<"KeyToken">
    refreshToken?: StringWithAggregatesFilter<"KeyToken"> | string
    userId?: UuidWithAggregatesFilter<"KeyToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KeyToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KeyToken"> | Date | string
  }

  export type HistoricalEventWhereInput = {
    AND?: HistoricalEventWhereInput | HistoricalEventWhereInput[]
    OR?: HistoricalEventWhereInput[]
    NOT?: HistoricalEventWhereInput | HistoricalEventWhereInput[]
    id?: UuidFilter<"HistoricalEvent"> | string
    fromDay?: IntNullableFilter<"HistoricalEvent"> | number | null
    fromMonth?: IntNullableFilter<"HistoricalEvent"> | number | null
    fromYear?: IntFilter<"HistoricalEvent"> | number
    toDay?: IntNullableFilter<"HistoricalEvent"> | number | null
    toMonth?: IntNullableFilter<"HistoricalEvent"> | number | null
    toYear?: IntFilter<"HistoricalEvent"> | number
    content?: StringFilter<"HistoricalEvent"> | string
    authorId?: UuidFilter<"HistoricalEvent"> | string
    createdAt?: DateTimeFilter<"HistoricalEvent"> | Date | string
    updatedAt?: DateTimeFilter<"HistoricalEvent"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    editors?: EventEditListRelationFilter
    categories?: EventPeriodListRelationFilter
  }

  export type HistoricalEventOrderByWithRelationInput = {
    id?: SortOrder
    fromDay?: SortOrderInput | SortOrder
    fromMonth?: SortOrderInput | SortOrder
    fromYear?: SortOrder
    toDay?: SortOrderInput | SortOrder
    toMonth?: SortOrderInput | SortOrder
    toYear?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    editors?: EventEditOrderByRelationAggregateInput
    categories?: EventPeriodOrderByRelationAggregateInput
  }

  export type HistoricalEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricalEventWhereInput | HistoricalEventWhereInput[]
    OR?: HistoricalEventWhereInput[]
    NOT?: HistoricalEventWhereInput | HistoricalEventWhereInput[]
    fromDay?: IntNullableFilter<"HistoricalEvent"> | number | null
    fromMonth?: IntNullableFilter<"HistoricalEvent"> | number | null
    fromYear?: IntFilter<"HistoricalEvent"> | number
    toDay?: IntNullableFilter<"HistoricalEvent"> | number | null
    toMonth?: IntNullableFilter<"HistoricalEvent"> | number | null
    toYear?: IntFilter<"HistoricalEvent"> | number
    content?: StringFilter<"HistoricalEvent"> | string
    authorId?: UuidFilter<"HistoricalEvent"> | string
    createdAt?: DateTimeFilter<"HistoricalEvent"> | Date | string
    updatedAt?: DateTimeFilter<"HistoricalEvent"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    editors?: EventEditListRelationFilter
    categories?: EventPeriodListRelationFilter
  }, "id">

  export type HistoricalEventOrderByWithAggregationInput = {
    id?: SortOrder
    fromDay?: SortOrderInput | SortOrder
    fromMonth?: SortOrderInput | SortOrder
    fromYear?: SortOrder
    toDay?: SortOrderInput | SortOrder
    toMonth?: SortOrderInput | SortOrder
    toYear?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HistoricalEventCountOrderByAggregateInput
    _avg?: HistoricalEventAvgOrderByAggregateInput
    _max?: HistoricalEventMaxOrderByAggregateInput
    _min?: HistoricalEventMinOrderByAggregateInput
    _sum?: HistoricalEventSumOrderByAggregateInput
  }

  export type HistoricalEventScalarWhereWithAggregatesInput = {
    AND?: HistoricalEventScalarWhereWithAggregatesInput | HistoricalEventScalarWhereWithAggregatesInput[]
    OR?: HistoricalEventScalarWhereWithAggregatesInput[]
    NOT?: HistoricalEventScalarWhereWithAggregatesInput | HistoricalEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HistoricalEvent"> | string
    fromDay?: IntNullableWithAggregatesFilter<"HistoricalEvent"> | number | null
    fromMonth?: IntNullableWithAggregatesFilter<"HistoricalEvent"> | number | null
    fromYear?: IntWithAggregatesFilter<"HistoricalEvent"> | number
    toDay?: IntNullableWithAggregatesFilter<"HistoricalEvent"> | number | null
    toMonth?: IntNullableWithAggregatesFilter<"HistoricalEvent"> | number | null
    toYear?: IntWithAggregatesFilter<"HistoricalEvent"> | number
    content?: StringWithAggregatesFilter<"HistoricalEvent"> | string
    authorId?: UuidWithAggregatesFilter<"HistoricalEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HistoricalEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HistoricalEvent"> | Date | string
  }

  export type EventEditWhereInput = {
    AND?: EventEditWhereInput | EventEditWhereInput[]
    OR?: EventEditWhereInput[]
    NOT?: EventEditWhereInput | EventEditWhereInput[]
    id?: UuidFilter<"EventEdit"> | string
    eventId?: UuidFilter<"EventEdit"> | string
    editorId?: UuidFilter<"EventEdit"> | string
    editedAt?: DateTimeFilter<"EventEdit"> | Date | string
    prevContent?: StringFilter<"EventEdit"> | string
    newContent?: StringFilter<"EventEdit"> | string
    prevFromDay?: IntNullableFilter<"EventEdit"> | number | null
    prevFromMonth?: IntNullableFilter<"EventEdit"> | number | null
    prevFromYear?: IntFilter<"EventEdit"> | number
    prevToDay?: IntNullableFilter<"EventEdit"> | number | null
    prevToMonth?: IntNullableFilter<"EventEdit"> | number | null
    prevToYear?: IntFilter<"EventEdit"> | number
    newFromDay?: IntNullableFilter<"EventEdit"> | number | null
    newFromMonth?: IntNullableFilter<"EventEdit"> | number | null
    newFromYear?: IntFilter<"EventEdit"> | number
    newToDay?: IntNullableFilter<"EventEdit"> | number | null
    newToMonth?: IntNullableFilter<"EventEdit"> | number | null
    newToYear?: IntFilter<"EventEdit"> | number
    event?: XOR<HistoricalEventScalarRelationFilter, HistoricalEventWhereInput>
    editor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventEditOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    editorId?: SortOrder
    editedAt?: SortOrder
    prevContent?: SortOrder
    newContent?: SortOrder
    prevFromDay?: SortOrderInput | SortOrder
    prevFromMonth?: SortOrderInput | SortOrder
    prevFromYear?: SortOrder
    prevToDay?: SortOrderInput | SortOrder
    prevToMonth?: SortOrderInput | SortOrder
    prevToYear?: SortOrder
    newFromDay?: SortOrderInput | SortOrder
    newFromMonth?: SortOrderInput | SortOrder
    newFromYear?: SortOrder
    newToDay?: SortOrderInput | SortOrder
    newToMonth?: SortOrderInput | SortOrder
    newToYear?: SortOrder
    event?: HistoricalEventOrderByWithRelationInput
    editor?: UserOrderByWithRelationInput
  }

  export type EventEditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventEditWhereInput | EventEditWhereInput[]
    OR?: EventEditWhereInput[]
    NOT?: EventEditWhereInput | EventEditWhereInput[]
    eventId?: UuidFilter<"EventEdit"> | string
    editorId?: UuidFilter<"EventEdit"> | string
    editedAt?: DateTimeFilter<"EventEdit"> | Date | string
    prevContent?: StringFilter<"EventEdit"> | string
    newContent?: StringFilter<"EventEdit"> | string
    prevFromDay?: IntNullableFilter<"EventEdit"> | number | null
    prevFromMonth?: IntNullableFilter<"EventEdit"> | number | null
    prevFromYear?: IntFilter<"EventEdit"> | number
    prevToDay?: IntNullableFilter<"EventEdit"> | number | null
    prevToMonth?: IntNullableFilter<"EventEdit"> | number | null
    prevToYear?: IntFilter<"EventEdit"> | number
    newFromDay?: IntNullableFilter<"EventEdit"> | number | null
    newFromMonth?: IntNullableFilter<"EventEdit"> | number | null
    newFromYear?: IntFilter<"EventEdit"> | number
    newToDay?: IntNullableFilter<"EventEdit"> | number | null
    newToMonth?: IntNullableFilter<"EventEdit"> | number | null
    newToYear?: IntFilter<"EventEdit"> | number
    event?: XOR<HistoricalEventScalarRelationFilter, HistoricalEventWhereInput>
    editor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EventEditOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    editorId?: SortOrder
    editedAt?: SortOrder
    prevContent?: SortOrder
    newContent?: SortOrder
    prevFromDay?: SortOrderInput | SortOrder
    prevFromMonth?: SortOrderInput | SortOrder
    prevFromYear?: SortOrder
    prevToDay?: SortOrderInput | SortOrder
    prevToMonth?: SortOrderInput | SortOrder
    prevToYear?: SortOrder
    newFromDay?: SortOrderInput | SortOrder
    newFromMonth?: SortOrderInput | SortOrder
    newFromYear?: SortOrder
    newToDay?: SortOrderInput | SortOrder
    newToMonth?: SortOrderInput | SortOrder
    newToYear?: SortOrder
    _count?: EventEditCountOrderByAggregateInput
    _avg?: EventEditAvgOrderByAggregateInput
    _max?: EventEditMaxOrderByAggregateInput
    _min?: EventEditMinOrderByAggregateInput
    _sum?: EventEditSumOrderByAggregateInput
  }

  export type EventEditScalarWhereWithAggregatesInput = {
    AND?: EventEditScalarWhereWithAggregatesInput | EventEditScalarWhereWithAggregatesInput[]
    OR?: EventEditScalarWhereWithAggregatesInput[]
    NOT?: EventEditScalarWhereWithAggregatesInput | EventEditScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventEdit"> | string
    eventId?: UuidWithAggregatesFilter<"EventEdit"> | string
    editorId?: UuidWithAggregatesFilter<"EventEdit"> | string
    editedAt?: DateTimeWithAggregatesFilter<"EventEdit"> | Date | string
    prevContent?: StringWithAggregatesFilter<"EventEdit"> | string
    newContent?: StringWithAggregatesFilter<"EventEdit"> | string
    prevFromDay?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    prevFromMonth?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    prevFromYear?: IntWithAggregatesFilter<"EventEdit"> | number
    prevToDay?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    prevToMonth?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    prevToYear?: IntWithAggregatesFilter<"EventEdit"> | number
    newFromDay?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    newFromMonth?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    newFromYear?: IntWithAggregatesFilter<"EventEdit"> | number
    newToDay?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    newToMonth?: IntNullableWithAggregatesFilter<"EventEdit"> | number | null
    newToYear?: IntWithAggregatesFilter<"EventEdit"> | number
  }

  export type EventPeriodWhereInput = {
    AND?: EventPeriodWhereInput | EventPeriodWhereInput[]
    OR?: EventPeriodWhereInput[]
    NOT?: EventPeriodWhereInput | EventPeriodWhereInput[]
    id?: UuidFilter<"EventPeriod"> | string
    fromDay?: IntNullableFilter<"EventPeriod"> | number | null
    fromMonth?: IntNullableFilter<"EventPeriod"> | number | null
    fromYear?: IntFilter<"EventPeriod"> | number
    toDay?: IntNullableFilter<"EventPeriod"> | number | null
    toMonth?: IntNullableFilter<"EventPeriod"> | number | null
    toYear?: IntFilter<"EventPeriod"> | number
    name?: StringFilter<"EventPeriod"> | string
    slug?: StringFilter<"EventPeriod"> | string
    description?: StringNullableFilter<"EventPeriod"> | string | null
    events?: HistoricalEventListRelationFilter
  }

  export type EventPeriodOrderByWithRelationInput = {
    id?: SortOrder
    fromDay?: SortOrderInput | SortOrder
    fromMonth?: SortOrderInput | SortOrder
    fromYear?: SortOrder
    toDay?: SortOrderInput | SortOrder
    toMonth?: SortOrderInput | SortOrder
    toYear?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    events?: HistoricalEventOrderByRelationAggregateInput
  }

  export type EventPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: EventPeriodWhereInput | EventPeriodWhereInput[]
    OR?: EventPeriodWhereInput[]
    NOT?: EventPeriodWhereInput | EventPeriodWhereInput[]
    fromDay?: IntNullableFilter<"EventPeriod"> | number | null
    fromMonth?: IntNullableFilter<"EventPeriod"> | number | null
    fromYear?: IntFilter<"EventPeriod"> | number
    toDay?: IntNullableFilter<"EventPeriod"> | number | null
    toMonth?: IntNullableFilter<"EventPeriod"> | number | null
    toYear?: IntFilter<"EventPeriod"> | number
    description?: StringNullableFilter<"EventPeriod"> | string | null
    events?: HistoricalEventListRelationFilter
  }, "id" | "name" | "slug">

  export type EventPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    fromDay?: SortOrderInput | SortOrder
    fromMonth?: SortOrderInput | SortOrder
    fromYear?: SortOrder
    toDay?: SortOrderInput | SortOrder
    toMonth?: SortOrderInput | SortOrder
    toYear?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: EventPeriodCountOrderByAggregateInput
    _avg?: EventPeriodAvgOrderByAggregateInput
    _max?: EventPeriodMaxOrderByAggregateInput
    _min?: EventPeriodMinOrderByAggregateInput
    _sum?: EventPeriodSumOrderByAggregateInput
  }

  export type EventPeriodScalarWhereWithAggregatesInput = {
    AND?: EventPeriodScalarWhereWithAggregatesInput | EventPeriodScalarWhereWithAggregatesInput[]
    OR?: EventPeriodScalarWhereWithAggregatesInput[]
    NOT?: EventPeriodScalarWhereWithAggregatesInput | EventPeriodScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventPeriod"> | string
    fromDay?: IntNullableWithAggregatesFilter<"EventPeriod"> | number | null
    fromMonth?: IntNullableWithAggregatesFilter<"EventPeriod"> | number | null
    fromYear?: IntWithAggregatesFilter<"EventPeriod"> | number
    toDay?: IntNullableWithAggregatesFilter<"EventPeriod"> | number | null
    toMonth?: IntNullableWithAggregatesFilter<"EventPeriod"> | number | null
    toYear?: IntWithAggregatesFilter<"EventPeriod"> | number
    name?: StringWithAggregatesFilter<"EventPeriod"> | string
    slug?: StringWithAggregatesFilter<"EventPeriod"> | string
    description?: StringNullableWithAggregatesFilter<"EventPeriod"> | string | null
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: UuidFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    authors?: BlogAuthorListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authors?: BlogAuthorOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    authors?: BlogAuthorListRelationFilter
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type BlogAuthorWhereInput = {
    AND?: BlogAuthorWhereInput | BlogAuthorWhereInput[]
    OR?: BlogAuthorWhereInput[]
    NOT?: BlogAuthorWhereInput | BlogAuthorWhereInput[]
    authorId?: UuidFilter<"BlogAuthor"> | string
    postId?: UuidFilter<"BlogAuthor"> | string
    createdAt?: DateTimeFilter<"BlogAuthor"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }

  export type BlogAuthorOrderByWithRelationInput = {
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    post?: BlogPostOrderByWithRelationInput
  }

  export type BlogAuthorWhereUniqueInput = Prisma.AtLeast<{
    authorId_postId?: BlogAuthorAuthorIdPostIdCompoundUniqueInput
    AND?: BlogAuthorWhereInput | BlogAuthorWhereInput[]
    OR?: BlogAuthorWhereInput[]
    NOT?: BlogAuthorWhereInput | BlogAuthorWhereInput[]
    authorId?: UuidFilter<"BlogAuthor"> | string
    postId?: UuidFilter<"BlogAuthor"> | string
    createdAt?: DateTimeFilter<"BlogAuthor"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }, "authorId_postId">

  export type BlogAuthorOrderByWithAggregationInput = {
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: BlogAuthorCountOrderByAggregateInput
    _max?: BlogAuthorMaxOrderByAggregateInput
    _min?: BlogAuthorMinOrderByAggregateInput
  }

  export type BlogAuthorScalarWhereWithAggregatesInput = {
    AND?: BlogAuthorScalarWhereWithAggregatesInput | BlogAuthorScalarWhereWithAggregatesInput[]
    OR?: BlogAuthorScalarWhereWithAggregatesInput[]
    NOT?: BlogAuthorScalarWhereWithAggregatesInput | BlogAuthorScalarWhereWithAggregatesInput[]
    authorId?: UuidWithAggregatesFilter<"BlogAuthor"> | string
    postId?: UuidWithAggregatesFilter<"BlogAuthor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogAuthor"> | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    keyToken?: KeyTokenCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorCreateNestedManyWithoutAuthorInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    keyToken?: KeyTokenUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventUncheckedCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditUncheckedCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorUncheckedCreateNestedManyWithoutAuthorInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    keyToken?: KeyTokenUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUpdateManyWithoutAuthorNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyToken?: KeyTokenUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUncheckedUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUncheckedUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUncheckedUpdateManyWithoutAuthorNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OTPUncheckedCreateInput = {
    id?: string
    token: string
    email: string
    status?: $Enums.OTPStatus
    expiresAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OTPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateManyInput = {
    id?: string
    token: string
    email: string
    status?: $Enums.OTPStatus
    expiresAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OTPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumOTPStatusFieldUpdateOperationsInput | $Enums.OTPStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    key: string
    status?: boolean
    permissions?: ApiKeyCreatepermissionsInput | $Enums.ApiKeyPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key: string
    status?: boolean
    permissions?: ApiKeyCreatepermissionsInput | $Enums.ApiKeyPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key: string
    status?: boolean
    permissions?: ApiKeyCreatepermissionsInput | $Enums.ApiKeyPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    permissions?: ApiKeyUpdatepermissionsInput | $Enums.ApiKeyPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyTokenCreateInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyTokenCreateManyInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricalEventCreateInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCreatedEventsInput
    editors?: EventEditCreateNestedManyWithoutEventInput
    categories?: EventPeriodCreateNestedManyWithoutEventsInput
  }

  export type HistoricalEventUncheckedCreateInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editors?: EventEditUncheckedCreateNestedManyWithoutEventInput
    categories?: EventPeriodUncheckedCreateNestedManyWithoutEventsInput
  }

  export type HistoricalEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    editors?: EventEditUpdateManyWithoutEventNestedInput
    categories?: EventPeriodUpdateManyWithoutEventsNestedInput
  }

  export type HistoricalEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editors?: EventEditUncheckedUpdateManyWithoutEventNestedInput
    categories?: EventPeriodUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type HistoricalEventCreateManyInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoricalEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricalEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventEditCreateInput = {
    id?: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
    event: HistoricalEventCreateNestedOneWithoutEditorsInput
    editor: UserCreateNestedOneWithoutEditedEventsInput
  }

  export type EventEditUncheckedCreateInput = {
    id?: string
    eventId: string
    editorId: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
  }

  export type EventEditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
    event?: HistoricalEventUpdateOneRequiredWithoutEditorsNestedInput
    editor?: UserUpdateOneRequiredWithoutEditedEventsNestedInput
  }

  export type EventEditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
  }

  export type EventEditCreateManyInput = {
    id?: string
    eventId: string
    editorId: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
  }

  export type EventEditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
  }

  export type EventEditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
  }

  export type EventPeriodCreateInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    name: string
    slug: string
    description?: string | null
    events?: HistoricalEventCreateNestedManyWithoutCategoriesInput
  }

  export type EventPeriodUncheckedCreateInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    name: string
    slug: string
    description?: string | null
    events?: HistoricalEventUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type EventPeriodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    events?: HistoricalEventUpdateManyWithoutCategoriesNestedInput
  }

  export type EventPeriodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    events?: HistoricalEventUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type EventPeriodCreateManyInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    name: string
    slug: string
    description?: string | null
  }

  export type EventPeriodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventPeriodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: BlogAuthorCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: BlogAuthorUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: BlogAuthorUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: BlogAuthorUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAuthorCreateInput = {
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutBlogPostsInput
    post: BlogPostCreateNestedOneWithoutAuthorsInput
  }

  export type BlogAuthorUncheckedCreateInput = {
    authorId: string
    postId: string
    createdAt?: Date | string
  }

  export type BlogAuthorUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutBlogPostsNestedInput
    post?: BlogPostUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type BlogAuthorUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAuthorCreateManyInput = {
    authorId: string
    postId: string
    createdAt?: Date | string
  }

  export type BlogAuthorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAuthorUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type KeyTokenListRelationFilter = {
    every?: KeyTokenWhereInput
    some?: KeyTokenWhereInput
    none?: KeyTokenWhereInput
  }

  export type HistoricalEventListRelationFilter = {
    every?: HistoricalEventWhereInput
    some?: HistoricalEventWhereInput
    none?: HistoricalEventWhereInput
  }

  export type EventEditListRelationFilter = {
    every?: EventEditWhereInput
    some?: EventEditWhereInput
    none?: EventEditWhereInput
  }

  export type BlogAuthorListRelationFilter = {
    every?: BlogAuthorWhereInput
    some?: BlogAuthorWhereInput
    none?: BlogAuthorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KeyTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricalEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventEditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogAuthorOrderByRelationAggregateInput = {
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type OTPCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTPMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OTPMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    email?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    browserId?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeyTokenMinOrderByAggregateInput = {
    id?: SortOrder
    browserId?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EventPeriodListRelationFilter = {
    every?: EventPeriodWhereInput
    some?: EventPeriodWhereInput
    none?: EventPeriodWhereInput
  }

  export type EventPeriodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricalEventCountOrderByAggregateInput = {
    id?: SortOrder
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoricalEventAvgOrderByAggregateInput = {
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
  }

  export type HistoricalEventMaxOrderByAggregateInput = {
    id?: SortOrder
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoricalEventMinOrderByAggregateInput = {
    id?: SortOrder
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoricalEventSumOrderByAggregateInput = {
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type HistoricalEventScalarRelationFilter = {
    is?: HistoricalEventWhereInput
    isNot?: HistoricalEventWhereInput
  }

  export type EventEditCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    editorId?: SortOrder
    editedAt?: SortOrder
    prevContent?: SortOrder
    newContent?: SortOrder
    prevFromDay?: SortOrder
    prevFromMonth?: SortOrder
    prevFromYear?: SortOrder
    prevToDay?: SortOrder
    prevToMonth?: SortOrder
    prevToYear?: SortOrder
    newFromDay?: SortOrder
    newFromMonth?: SortOrder
    newFromYear?: SortOrder
    newToDay?: SortOrder
    newToMonth?: SortOrder
    newToYear?: SortOrder
  }

  export type EventEditAvgOrderByAggregateInput = {
    prevFromDay?: SortOrder
    prevFromMonth?: SortOrder
    prevFromYear?: SortOrder
    prevToDay?: SortOrder
    prevToMonth?: SortOrder
    prevToYear?: SortOrder
    newFromDay?: SortOrder
    newFromMonth?: SortOrder
    newFromYear?: SortOrder
    newToDay?: SortOrder
    newToMonth?: SortOrder
    newToYear?: SortOrder
  }

  export type EventEditMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    editorId?: SortOrder
    editedAt?: SortOrder
    prevContent?: SortOrder
    newContent?: SortOrder
    prevFromDay?: SortOrder
    prevFromMonth?: SortOrder
    prevFromYear?: SortOrder
    prevToDay?: SortOrder
    prevToMonth?: SortOrder
    prevToYear?: SortOrder
    newFromDay?: SortOrder
    newFromMonth?: SortOrder
    newFromYear?: SortOrder
    newToDay?: SortOrder
    newToMonth?: SortOrder
    newToYear?: SortOrder
  }

  export type EventEditMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    editorId?: SortOrder
    editedAt?: SortOrder
    prevContent?: SortOrder
    newContent?: SortOrder
    prevFromDay?: SortOrder
    prevFromMonth?: SortOrder
    prevFromYear?: SortOrder
    prevToDay?: SortOrder
    prevToMonth?: SortOrder
    prevToYear?: SortOrder
    newFromDay?: SortOrder
    newFromMonth?: SortOrder
    newFromYear?: SortOrder
    newToDay?: SortOrder
    newToMonth?: SortOrder
    newToYear?: SortOrder
  }

  export type EventEditSumOrderByAggregateInput = {
    prevFromDay?: SortOrder
    prevFromMonth?: SortOrder
    prevFromYear?: SortOrder
    prevToDay?: SortOrder
    prevToMonth?: SortOrder
    prevToYear?: SortOrder
    newFromDay?: SortOrder
    newFromMonth?: SortOrder
    newFromYear?: SortOrder
    newToDay?: SortOrder
    newToMonth?: SortOrder
    newToYear?: SortOrder
  }

  export type EventPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type EventPeriodAvgOrderByAggregateInput = {
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
  }

  export type EventPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type EventPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type EventPeriodSumOrderByAggregateInput = {
    fromDay?: SortOrder
    fromMonth?: SortOrder
    fromYear?: SortOrder
    toDay?: SortOrder
    toMonth?: SortOrder
    toYear?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type BlogAuthorAuthorIdPostIdCompoundUniqueInput = {
    authorId: string
    postId: string
  }

  export type BlogAuthorCountOrderByAggregateInput = {
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogAuthorMaxOrderByAggregateInput = {
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogAuthorMinOrderByAggregateInput = {
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
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

  export type HistoricalEventCreateNestedManyWithoutAuthorInput = {
    create?: XOR<HistoricalEventCreateWithoutAuthorInput, HistoricalEventUncheckedCreateWithoutAuthorInput> | HistoricalEventCreateWithoutAuthorInput[] | HistoricalEventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutAuthorInput | HistoricalEventCreateOrConnectWithoutAuthorInput[]
    createMany?: HistoricalEventCreateManyAuthorInputEnvelope
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
  }

  export type EventEditCreateNestedManyWithoutEditorInput = {
    create?: XOR<EventEditCreateWithoutEditorInput, EventEditUncheckedCreateWithoutEditorInput> | EventEditCreateWithoutEditorInput[] | EventEditUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEditorInput | EventEditCreateOrConnectWithoutEditorInput[]
    createMany?: EventEditCreateManyEditorInputEnvelope
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
  }

  export type BlogAuthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogAuthorCreateWithoutAuthorInput, BlogAuthorUncheckedCreateWithoutAuthorInput> | BlogAuthorCreateWithoutAuthorInput[] | BlogAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutAuthorInput | BlogAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogAuthorCreateManyAuthorInputEnvelope
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
  }

  export type KeyTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput> | KeyTokenCreateWithoutUserInput[] | KeyTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KeyTokenCreateOrConnectWithoutUserInput | KeyTokenCreateOrConnectWithoutUserInput[]
    createMany?: KeyTokenCreateManyUserInputEnvelope
    connect?: KeyTokenWhereUniqueInput | KeyTokenWhereUniqueInput[]
  }

  export type HistoricalEventUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<HistoricalEventCreateWithoutAuthorInput, HistoricalEventUncheckedCreateWithoutAuthorInput> | HistoricalEventCreateWithoutAuthorInput[] | HistoricalEventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutAuthorInput | HistoricalEventCreateOrConnectWithoutAuthorInput[]
    createMany?: HistoricalEventCreateManyAuthorInputEnvelope
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
  }

  export type EventEditUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<EventEditCreateWithoutEditorInput, EventEditUncheckedCreateWithoutEditorInput> | EventEditCreateWithoutEditorInput[] | EventEditUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEditorInput | EventEditCreateOrConnectWithoutEditorInput[]
    createMany?: EventEditCreateManyEditorInputEnvelope
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
  }

  export type BlogAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogAuthorCreateWithoutAuthorInput, BlogAuthorUncheckedCreateWithoutAuthorInput> | BlogAuthorCreateWithoutAuthorInput[] | BlogAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutAuthorInput | BlogAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogAuthorCreateManyAuthorInputEnvelope
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type HistoricalEventUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<HistoricalEventCreateWithoutAuthorInput, HistoricalEventUncheckedCreateWithoutAuthorInput> | HistoricalEventCreateWithoutAuthorInput[] | HistoricalEventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutAuthorInput | HistoricalEventCreateOrConnectWithoutAuthorInput[]
    upsert?: HistoricalEventUpsertWithWhereUniqueWithoutAuthorInput | HistoricalEventUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: HistoricalEventCreateManyAuthorInputEnvelope
    set?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    disconnect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    delete?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    update?: HistoricalEventUpdateWithWhereUniqueWithoutAuthorInput | HistoricalEventUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: HistoricalEventUpdateManyWithWhereWithoutAuthorInput | HistoricalEventUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: HistoricalEventScalarWhereInput | HistoricalEventScalarWhereInput[]
  }

  export type EventEditUpdateManyWithoutEditorNestedInput = {
    create?: XOR<EventEditCreateWithoutEditorInput, EventEditUncheckedCreateWithoutEditorInput> | EventEditCreateWithoutEditorInput[] | EventEditUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEditorInput | EventEditCreateOrConnectWithoutEditorInput[]
    upsert?: EventEditUpsertWithWhereUniqueWithoutEditorInput | EventEditUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: EventEditCreateManyEditorInputEnvelope
    set?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    disconnect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    delete?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    update?: EventEditUpdateWithWhereUniqueWithoutEditorInput | EventEditUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: EventEditUpdateManyWithWhereWithoutEditorInput | EventEditUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: EventEditScalarWhereInput | EventEditScalarWhereInput[]
  }

  export type BlogAuthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogAuthorCreateWithoutAuthorInput, BlogAuthorUncheckedCreateWithoutAuthorInput> | BlogAuthorCreateWithoutAuthorInput[] | BlogAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutAuthorInput | BlogAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogAuthorUpsertWithWhereUniqueWithoutAuthorInput | BlogAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogAuthorCreateManyAuthorInputEnvelope
    set?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    disconnect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    delete?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    update?: BlogAuthorUpdateWithWhereUniqueWithoutAuthorInput | BlogAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogAuthorUpdateManyWithWhereWithoutAuthorInput | BlogAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogAuthorScalarWhereInput | BlogAuthorScalarWhereInput[]
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

  export type HistoricalEventUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<HistoricalEventCreateWithoutAuthorInput, HistoricalEventUncheckedCreateWithoutAuthorInput> | HistoricalEventCreateWithoutAuthorInput[] | HistoricalEventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutAuthorInput | HistoricalEventCreateOrConnectWithoutAuthorInput[]
    upsert?: HistoricalEventUpsertWithWhereUniqueWithoutAuthorInput | HistoricalEventUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: HistoricalEventCreateManyAuthorInputEnvelope
    set?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    disconnect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    delete?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    update?: HistoricalEventUpdateWithWhereUniqueWithoutAuthorInput | HistoricalEventUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: HistoricalEventUpdateManyWithWhereWithoutAuthorInput | HistoricalEventUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: HistoricalEventScalarWhereInput | HistoricalEventScalarWhereInput[]
  }

  export type EventEditUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<EventEditCreateWithoutEditorInput, EventEditUncheckedCreateWithoutEditorInput> | EventEditCreateWithoutEditorInput[] | EventEditUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEditorInput | EventEditCreateOrConnectWithoutEditorInput[]
    upsert?: EventEditUpsertWithWhereUniqueWithoutEditorInput | EventEditUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: EventEditCreateManyEditorInputEnvelope
    set?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    disconnect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    delete?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    update?: EventEditUpdateWithWhereUniqueWithoutEditorInput | EventEditUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: EventEditUpdateManyWithWhereWithoutEditorInput | EventEditUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: EventEditScalarWhereInput | EventEditScalarWhereInput[]
  }

  export type BlogAuthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogAuthorCreateWithoutAuthorInput, BlogAuthorUncheckedCreateWithoutAuthorInput> | BlogAuthorCreateWithoutAuthorInput[] | BlogAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutAuthorInput | BlogAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogAuthorUpsertWithWhereUniqueWithoutAuthorInput | BlogAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogAuthorCreateManyAuthorInputEnvelope
    set?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    disconnect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    delete?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    update?: BlogAuthorUpdateWithWhereUniqueWithoutAuthorInput | BlogAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogAuthorUpdateManyWithWhereWithoutAuthorInput | BlogAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogAuthorScalarWhereInput | BlogAuthorScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutCreatedEventsInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventEditCreateNestedManyWithoutEventInput = {
    create?: XOR<EventEditCreateWithoutEventInput, EventEditUncheckedCreateWithoutEventInput> | EventEditCreateWithoutEventInput[] | EventEditUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEventInput | EventEditCreateOrConnectWithoutEventInput[]
    createMany?: EventEditCreateManyEventInputEnvelope
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
  }

  export type EventPeriodCreateNestedManyWithoutEventsInput = {
    create?: XOR<EventPeriodCreateWithoutEventsInput, EventPeriodUncheckedCreateWithoutEventsInput> | EventPeriodCreateWithoutEventsInput[] | EventPeriodUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: EventPeriodCreateOrConnectWithoutEventsInput | EventPeriodCreateOrConnectWithoutEventsInput[]
    connect?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
  }

  export type EventEditUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventEditCreateWithoutEventInput, EventEditUncheckedCreateWithoutEventInput> | EventEditCreateWithoutEventInput[] | EventEditUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEventInput | EventEditCreateOrConnectWithoutEventInput[]
    createMany?: EventEditCreateManyEventInputEnvelope
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
  }

  export type EventPeriodUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<EventPeriodCreateWithoutEventsInput, EventPeriodUncheckedCreateWithoutEventsInput> | EventPeriodCreateWithoutEventsInput[] | EventPeriodUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: EventPeriodCreateOrConnectWithoutEventsInput | EventPeriodCreateOrConnectWithoutEventsInput[]
    connect?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreatedEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    upsert?: UserUpsertWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedEventsInput, UserUpdateWithoutCreatedEventsInput>, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type EventEditUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventEditCreateWithoutEventInput, EventEditUncheckedCreateWithoutEventInput> | EventEditCreateWithoutEventInput[] | EventEditUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEventInput | EventEditCreateOrConnectWithoutEventInput[]
    upsert?: EventEditUpsertWithWhereUniqueWithoutEventInput | EventEditUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventEditCreateManyEventInputEnvelope
    set?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    disconnect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    delete?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    update?: EventEditUpdateWithWhereUniqueWithoutEventInput | EventEditUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventEditUpdateManyWithWhereWithoutEventInput | EventEditUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventEditScalarWhereInput | EventEditScalarWhereInput[]
  }

  export type EventPeriodUpdateManyWithoutEventsNestedInput = {
    create?: XOR<EventPeriodCreateWithoutEventsInput, EventPeriodUncheckedCreateWithoutEventsInput> | EventPeriodCreateWithoutEventsInput[] | EventPeriodUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: EventPeriodCreateOrConnectWithoutEventsInput | EventPeriodCreateOrConnectWithoutEventsInput[]
    upsert?: EventPeriodUpsertWithWhereUniqueWithoutEventsInput | EventPeriodUpsertWithWhereUniqueWithoutEventsInput[]
    set?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    disconnect?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    delete?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    connect?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    update?: EventPeriodUpdateWithWhereUniqueWithoutEventsInput | EventPeriodUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: EventPeriodUpdateManyWithWhereWithoutEventsInput | EventPeriodUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: EventPeriodScalarWhereInput | EventPeriodScalarWhereInput[]
  }

  export type EventEditUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventEditCreateWithoutEventInput, EventEditUncheckedCreateWithoutEventInput> | EventEditCreateWithoutEventInput[] | EventEditUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventEditCreateOrConnectWithoutEventInput | EventEditCreateOrConnectWithoutEventInput[]
    upsert?: EventEditUpsertWithWhereUniqueWithoutEventInput | EventEditUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventEditCreateManyEventInputEnvelope
    set?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    disconnect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    delete?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    connect?: EventEditWhereUniqueInput | EventEditWhereUniqueInput[]
    update?: EventEditUpdateWithWhereUniqueWithoutEventInput | EventEditUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventEditUpdateManyWithWhereWithoutEventInput | EventEditUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventEditScalarWhereInput | EventEditScalarWhereInput[]
  }

  export type EventPeriodUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<EventPeriodCreateWithoutEventsInput, EventPeriodUncheckedCreateWithoutEventsInput> | EventPeriodCreateWithoutEventsInput[] | EventPeriodUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: EventPeriodCreateOrConnectWithoutEventsInput | EventPeriodCreateOrConnectWithoutEventsInput[]
    upsert?: EventPeriodUpsertWithWhereUniqueWithoutEventsInput | EventPeriodUpsertWithWhereUniqueWithoutEventsInput[]
    set?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    disconnect?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    delete?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    connect?: EventPeriodWhereUniqueInput | EventPeriodWhereUniqueInput[]
    update?: EventPeriodUpdateWithWhereUniqueWithoutEventsInput | EventPeriodUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: EventPeriodUpdateManyWithWhereWithoutEventsInput | EventPeriodUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: EventPeriodScalarWhereInput | EventPeriodScalarWhereInput[]
  }

  export type HistoricalEventCreateNestedOneWithoutEditorsInput = {
    create?: XOR<HistoricalEventCreateWithoutEditorsInput, HistoricalEventUncheckedCreateWithoutEditorsInput>
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutEditorsInput
    connect?: HistoricalEventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEditedEventsInput = {
    create?: XOR<UserCreateWithoutEditedEventsInput, UserUncheckedCreateWithoutEditedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type HistoricalEventUpdateOneRequiredWithoutEditorsNestedInput = {
    create?: XOR<HistoricalEventCreateWithoutEditorsInput, HistoricalEventUncheckedCreateWithoutEditorsInput>
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutEditorsInput
    upsert?: HistoricalEventUpsertWithoutEditorsInput
    connect?: HistoricalEventWhereUniqueInput
    update?: XOR<XOR<HistoricalEventUpdateToOneWithWhereWithoutEditorsInput, HistoricalEventUpdateWithoutEditorsInput>, HistoricalEventUncheckedUpdateWithoutEditorsInput>
  }

  export type UserUpdateOneRequiredWithoutEditedEventsNestedInput = {
    create?: XOR<UserCreateWithoutEditedEventsInput, UserUncheckedCreateWithoutEditedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedEventsInput
    upsert?: UserUpsertWithoutEditedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditedEventsInput, UserUpdateWithoutEditedEventsInput>, UserUncheckedUpdateWithoutEditedEventsInput>
  }

  export type HistoricalEventCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<HistoricalEventCreateWithoutCategoriesInput, HistoricalEventUncheckedCreateWithoutCategoriesInput> | HistoricalEventCreateWithoutCategoriesInput[] | HistoricalEventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutCategoriesInput | HistoricalEventCreateOrConnectWithoutCategoriesInput[]
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
  }

  export type HistoricalEventUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<HistoricalEventCreateWithoutCategoriesInput, HistoricalEventUncheckedCreateWithoutCategoriesInput> | HistoricalEventCreateWithoutCategoriesInput[] | HistoricalEventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutCategoriesInput | HistoricalEventCreateOrConnectWithoutCategoriesInput[]
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
  }

  export type HistoricalEventUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<HistoricalEventCreateWithoutCategoriesInput, HistoricalEventUncheckedCreateWithoutCategoriesInput> | HistoricalEventCreateWithoutCategoriesInput[] | HistoricalEventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutCategoriesInput | HistoricalEventCreateOrConnectWithoutCategoriesInput[]
    upsert?: HistoricalEventUpsertWithWhereUniqueWithoutCategoriesInput | HistoricalEventUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    disconnect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    delete?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    update?: HistoricalEventUpdateWithWhereUniqueWithoutCategoriesInput | HistoricalEventUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: HistoricalEventUpdateManyWithWhereWithoutCategoriesInput | HistoricalEventUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: HistoricalEventScalarWhereInput | HistoricalEventScalarWhereInput[]
  }

  export type HistoricalEventUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<HistoricalEventCreateWithoutCategoriesInput, HistoricalEventUncheckedCreateWithoutCategoriesInput> | HistoricalEventCreateWithoutCategoriesInput[] | HistoricalEventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: HistoricalEventCreateOrConnectWithoutCategoriesInput | HistoricalEventCreateOrConnectWithoutCategoriesInput[]
    upsert?: HistoricalEventUpsertWithWhereUniqueWithoutCategoriesInput | HistoricalEventUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    disconnect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    delete?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    connect?: HistoricalEventWhereUniqueInput | HistoricalEventWhereUniqueInput[]
    update?: HistoricalEventUpdateWithWhereUniqueWithoutCategoriesInput | HistoricalEventUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: HistoricalEventUpdateManyWithWhereWithoutCategoriesInput | HistoricalEventUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: HistoricalEventScalarWhereInput | HistoricalEventScalarWhereInput[]
  }

  export type BlogAuthorCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogAuthorCreateWithoutPostInput, BlogAuthorUncheckedCreateWithoutPostInput> | BlogAuthorCreateWithoutPostInput[] | BlogAuthorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutPostInput | BlogAuthorCreateOrConnectWithoutPostInput[]
    createMany?: BlogAuthorCreateManyPostInputEnvelope
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
  }

  export type BlogAuthorUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogAuthorCreateWithoutPostInput, BlogAuthorUncheckedCreateWithoutPostInput> | BlogAuthorCreateWithoutPostInput[] | BlogAuthorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutPostInput | BlogAuthorCreateOrConnectWithoutPostInput[]
    createMany?: BlogAuthorCreateManyPostInputEnvelope
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
  }

  export type BlogAuthorUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogAuthorCreateWithoutPostInput, BlogAuthorUncheckedCreateWithoutPostInput> | BlogAuthorCreateWithoutPostInput[] | BlogAuthorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutPostInput | BlogAuthorCreateOrConnectWithoutPostInput[]
    upsert?: BlogAuthorUpsertWithWhereUniqueWithoutPostInput | BlogAuthorUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogAuthorCreateManyPostInputEnvelope
    set?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    disconnect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    delete?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    update?: BlogAuthorUpdateWithWhereUniqueWithoutPostInput | BlogAuthorUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogAuthorUpdateManyWithWhereWithoutPostInput | BlogAuthorUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogAuthorScalarWhereInput | BlogAuthorScalarWhereInput[]
  }

  export type BlogAuthorUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogAuthorCreateWithoutPostInput, BlogAuthorUncheckedCreateWithoutPostInput> | BlogAuthorCreateWithoutPostInput[] | BlogAuthorUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogAuthorCreateOrConnectWithoutPostInput | BlogAuthorCreateOrConnectWithoutPostInput[]
    upsert?: BlogAuthorUpsertWithWhereUniqueWithoutPostInput | BlogAuthorUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogAuthorCreateManyPostInputEnvelope
    set?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    disconnect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    delete?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    connect?: BlogAuthorWhereUniqueInput | BlogAuthorWhereUniqueInput[]
    update?: BlogAuthorUpdateWithWhereUniqueWithoutPostInput | BlogAuthorUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogAuthorUpdateManyWithWhereWithoutPostInput | BlogAuthorUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogAuthorScalarWhereInput | BlogAuthorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogPostsInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<BlogPostCreateWithoutAuthorsInput, BlogPostUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlogPostsNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    upsert?: UserUpsertWithoutBlogPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostsInput, UserUpdateWithoutBlogPostsInput>, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type BlogPostUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorsInput, BlogPostUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorsInput
    upsert?: BlogPostUpsertWithoutAuthorsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutAuthorsInput, BlogPostUpdateWithoutAuthorsInput>, BlogPostUncheckedUpdateWithoutAuthorsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPStatus | EnumOTPStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OTPStatus[] | ListEnumOTPStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOTPStatusWithAggregatesFilter<$PrismaModel> | $Enums.OTPStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOTPStatusFilter<$PrismaModel>
    _max?: NestedEnumOTPStatusFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyTokenUncheckedCreateWithoutUserInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeyTokenCreateOrConnectWithoutUserInput = {
    where: KeyTokenWhereUniqueInput
    create: XOR<KeyTokenCreateWithoutUserInput, KeyTokenUncheckedCreateWithoutUserInput>
  }

  export type KeyTokenCreateManyUserInputEnvelope = {
    data: KeyTokenCreateManyUserInput | KeyTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoricalEventCreateWithoutAuthorInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editors?: EventEditCreateNestedManyWithoutEventInput
    categories?: EventPeriodCreateNestedManyWithoutEventsInput
  }

  export type HistoricalEventUncheckedCreateWithoutAuthorInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editors?: EventEditUncheckedCreateNestedManyWithoutEventInput
    categories?: EventPeriodUncheckedCreateNestedManyWithoutEventsInput
  }

  export type HistoricalEventCreateOrConnectWithoutAuthorInput = {
    where: HistoricalEventWhereUniqueInput
    create: XOR<HistoricalEventCreateWithoutAuthorInput, HistoricalEventUncheckedCreateWithoutAuthorInput>
  }

  export type HistoricalEventCreateManyAuthorInputEnvelope = {
    data: HistoricalEventCreateManyAuthorInput | HistoricalEventCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EventEditCreateWithoutEditorInput = {
    id?: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
    event: HistoricalEventCreateNestedOneWithoutEditorsInput
  }

  export type EventEditUncheckedCreateWithoutEditorInput = {
    id?: string
    eventId: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
  }

  export type EventEditCreateOrConnectWithoutEditorInput = {
    where: EventEditWhereUniqueInput
    create: XOR<EventEditCreateWithoutEditorInput, EventEditUncheckedCreateWithoutEditorInput>
  }

  export type EventEditCreateManyEditorInputEnvelope = {
    data: EventEditCreateManyEditorInput | EventEditCreateManyEditorInput[]
    skipDuplicates?: boolean
  }

  export type BlogAuthorCreateWithoutAuthorInput = {
    createdAt?: Date | string
    post: BlogPostCreateNestedOneWithoutAuthorsInput
  }

  export type BlogAuthorUncheckedCreateWithoutAuthorInput = {
    postId: string
    createdAt?: Date | string
  }

  export type BlogAuthorCreateOrConnectWithoutAuthorInput = {
    where: BlogAuthorWhereUniqueInput
    create: XOR<BlogAuthorCreateWithoutAuthorInput, BlogAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BlogAuthorCreateManyAuthorInputEnvelope = {
    data: BlogAuthorCreateManyAuthorInput | BlogAuthorCreateManyAuthorInput[]
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
    id?: UuidFilter<"KeyToken"> | string
    browserId?: StringFilter<"KeyToken"> | string
    publicKey?: StringFilter<"KeyToken"> | string
    privateKey?: StringFilter<"KeyToken"> | string
    refreshTokensUsed?: StringNullableListFilter<"KeyToken">
    refreshToken?: StringFilter<"KeyToken"> | string
    userId?: UuidFilter<"KeyToken"> | string
    createdAt?: DateTimeFilter<"KeyToken"> | Date | string
    updatedAt?: DateTimeFilter<"KeyToken"> | Date | string
  }

  export type HistoricalEventUpsertWithWhereUniqueWithoutAuthorInput = {
    where: HistoricalEventWhereUniqueInput
    update: XOR<HistoricalEventUpdateWithoutAuthorInput, HistoricalEventUncheckedUpdateWithoutAuthorInput>
    create: XOR<HistoricalEventCreateWithoutAuthorInput, HistoricalEventUncheckedCreateWithoutAuthorInput>
  }

  export type HistoricalEventUpdateWithWhereUniqueWithoutAuthorInput = {
    where: HistoricalEventWhereUniqueInput
    data: XOR<HistoricalEventUpdateWithoutAuthorInput, HistoricalEventUncheckedUpdateWithoutAuthorInput>
  }

  export type HistoricalEventUpdateManyWithWhereWithoutAuthorInput = {
    where: HistoricalEventScalarWhereInput
    data: XOR<HistoricalEventUpdateManyMutationInput, HistoricalEventUncheckedUpdateManyWithoutAuthorInput>
  }

  export type HistoricalEventScalarWhereInput = {
    AND?: HistoricalEventScalarWhereInput | HistoricalEventScalarWhereInput[]
    OR?: HistoricalEventScalarWhereInput[]
    NOT?: HistoricalEventScalarWhereInput | HistoricalEventScalarWhereInput[]
    id?: UuidFilter<"HistoricalEvent"> | string
    fromDay?: IntNullableFilter<"HistoricalEvent"> | number | null
    fromMonth?: IntNullableFilter<"HistoricalEvent"> | number | null
    fromYear?: IntFilter<"HistoricalEvent"> | number
    toDay?: IntNullableFilter<"HistoricalEvent"> | number | null
    toMonth?: IntNullableFilter<"HistoricalEvent"> | number | null
    toYear?: IntFilter<"HistoricalEvent"> | number
    content?: StringFilter<"HistoricalEvent"> | string
    authorId?: UuidFilter<"HistoricalEvent"> | string
    createdAt?: DateTimeFilter<"HistoricalEvent"> | Date | string
    updatedAt?: DateTimeFilter<"HistoricalEvent"> | Date | string
  }

  export type EventEditUpsertWithWhereUniqueWithoutEditorInput = {
    where: EventEditWhereUniqueInput
    update: XOR<EventEditUpdateWithoutEditorInput, EventEditUncheckedUpdateWithoutEditorInput>
    create: XOR<EventEditCreateWithoutEditorInput, EventEditUncheckedCreateWithoutEditorInput>
  }

  export type EventEditUpdateWithWhereUniqueWithoutEditorInput = {
    where: EventEditWhereUniqueInput
    data: XOR<EventEditUpdateWithoutEditorInput, EventEditUncheckedUpdateWithoutEditorInput>
  }

  export type EventEditUpdateManyWithWhereWithoutEditorInput = {
    where: EventEditScalarWhereInput
    data: XOR<EventEditUpdateManyMutationInput, EventEditUncheckedUpdateManyWithoutEditorInput>
  }

  export type EventEditScalarWhereInput = {
    AND?: EventEditScalarWhereInput | EventEditScalarWhereInput[]
    OR?: EventEditScalarWhereInput[]
    NOT?: EventEditScalarWhereInput | EventEditScalarWhereInput[]
    id?: UuidFilter<"EventEdit"> | string
    eventId?: UuidFilter<"EventEdit"> | string
    editorId?: UuidFilter<"EventEdit"> | string
    editedAt?: DateTimeFilter<"EventEdit"> | Date | string
    prevContent?: StringFilter<"EventEdit"> | string
    newContent?: StringFilter<"EventEdit"> | string
    prevFromDay?: IntNullableFilter<"EventEdit"> | number | null
    prevFromMonth?: IntNullableFilter<"EventEdit"> | number | null
    prevFromYear?: IntFilter<"EventEdit"> | number
    prevToDay?: IntNullableFilter<"EventEdit"> | number | null
    prevToMonth?: IntNullableFilter<"EventEdit"> | number | null
    prevToYear?: IntFilter<"EventEdit"> | number
    newFromDay?: IntNullableFilter<"EventEdit"> | number | null
    newFromMonth?: IntNullableFilter<"EventEdit"> | number | null
    newFromYear?: IntFilter<"EventEdit"> | number
    newToDay?: IntNullableFilter<"EventEdit"> | number | null
    newToMonth?: IntNullableFilter<"EventEdit"> | number | null
    newToYear?: IntFilter<"EventEdit"> | number
  }

  export type BlogAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogAuthorWhereUniqueInput
    update: XOR<BlogAuthorUpdateWithoutAuthorInput, BlogAuthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogAuthorCreateWithoutAuthorInput, BlogAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BlogAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogAuthorWhereUniqueInput
    data: XOR<BlogAuthorUpdateWithoutAuthorInput, BlogAuthorUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogAuthorScalarWhereInput
    data: XOR<BlogAuthorUpdateManyMutationInput, BlogAuthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogAuthorScalarWhereInput = {
    AND?: BlogAuthorScalarWhereInput | BlogAuthorScalarWhereInput[]
    OR?: BlogAuthorScalarWhereInput[]
    NOT?: BlogAuthorScalarWhereInput | BlogAuthorScalarWhereInput[]
    authorId?: UuidFilter<"BlogAuthor"> | string
    postId?: UuidFilter<"BlogAuthor"> | string
    createdAt?: DateTimeFilter<"BlogAuthor"> | Date | string
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
    id?: UuidFilter<"Grant"> | string
    roleId?: UuidFilter<"Grant"> | string
    resourceId?: UuidFilter<"Grant"> | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    keyToken?: KeyTokenCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorCreateNestedManyWithoutAuthorInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    keyToken?: KeyTokenUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventUncheckedCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditUncheckedCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorUncheckedCreateNestedManyWithoutAuthorInput
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
    id?: UuidFilter<"User"> | string
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
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    createdEvents?: HistoricalEventCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorCreateNestedManyWithoutAuthorInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: HistoricalEventUncheckedCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditUncheckedCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorUncheckedCreateNestedManyWithoutAuthorInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    createdEvents?: HistoricalEventUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUpdateManyWithoutAuthorNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: HistoricalEventUncheckedUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUncheckedUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutCreatedEventsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    keyToken?: KeyTokenCreateNestedManyWithoutUserInput
    editedEvents?: EventEditCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCreatedEventsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    keyToken?: KeyTokenUncheckedCreateNestedManyWithoutUserInput
    editedEvents?: EventEditUncheckedCreateNestedManyWithoutEditorInput
    blogPosts?: BlogAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
  }

  export type EventEditCreateWithoutEventInput = {
    id?: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
    editor: UserCreateNestedOneWithoutEditedEventsInput
  }

  export type EventEditUncheckedCreateWithoutEventInput = {
    id?: string
    editorId: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
  }

  export type EventEditCreateOrConnectWithoutEventInput = {
    where: EventEditWhereUniqueInput
    create: XOR<EventEditCreateWithoutEventInput, EventEditUncheckedCreateWithoutEventInput>
  }

  export type EventEditCreateManyEventInputEnvelope = {
    data: EventEditCreateManyEventInput | EventEditCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventPeriodCreateWithoutEventsInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    name: string
    slug: string
    description?: string | null
  }

  export type EventPeriodUncheckedCreateWithoutEventsInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    name: string
    slug: string
    description?: string | null
  }

  export type EventPeriodCreateOrConnectWithoutEventsInput = {
    where: EventPeriodWhereUniqueInput
    create: XOR<EventPeriodCreateWithoutEventsInput, EventPeriodUncheckedCreateWithoutEventsInput>
  }

  export type UserUpsertWithoutCreatedEventsInput = {
    update: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type UserUpdateWithoutCreatedEventsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    keyToken?: KeyTokenUpdateManyWithoutUserNestedInput
    editedEvents?: EventEditUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEventsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyToken?: KeyTokenUncheckedUpdateManyWithoutUserNestedInput
    editedEvents?: EventEditUncheckedUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EventEditUpsertWithWhereUniqueWithoutEventInput = {
    where: EventEditWhereUniqueInput
    update: XOR<EventEditUpdateWithoutEventInput, EventEditUncheckedUpdateWithoutEventInput>
    create: XOR<EventEditCreateWithoutEventInput, EventEditUncheckedCreateWithoutEventInput>
  }

  export type EventEditUpdateWithWhereUniqueWithoutEventInput = {
    where: EventEditWhereUniqueInput
    data: XOR<EventEditUpdateWithoutEventInput, EventEditUncheckedUpdateWithoutEventInput>
  }

  export type EventEditUpdateManyWithWhereWithoutEventInput = {
    where: EventEditScalarWhereInput
    data: XOR<EventEditUpdateManyMutationInput, EventEditUncheckedUpdateManyWithoutEventInput>
  }

  export type EventPeriodUpsertWithWhereUniqueWithoutEventsInput = {
    where: EventPeriodWhereUniqueInput
    update: XOR<EventPeriodUpdateWithoutEventsInput, EventPeriodUncheckedUpdateWithoutEventsInput>
    create: XOR<EventPeriodCreateWithoutEventsInput, EventPeriodUncheckedCreateWithoutEventsInput>
  }

  export type EventPeriodUpdateWithWhereUniqueWithoutEventsInput = {
    where: EventPeriodWhereUniqueInput
    data: XOR<EventPeriodUpdateWithoutEventsInput, EventPeriodUncheckedUpdateWithoutEventsInput>
  }

  export type EventPeriodUpdateManyWithWhereWithoutEventsInput = {
    where: EventPeriodScalarWhereInput
    data: XOR<EventPeriodUpdateManyMutationInput, EventPeriodUncheckedUpdateManyWithoutEventsInput>
  }

  export type EventPeriodScalarWhereInput = {
    AND?: EventPeriodScalarWhereInput | EventPeriodScalarWhereInput[]
    OR?: EventPeriodScalarWhereInput[]
    NOT?: EventPeriodScalarWhereInput | EventPeriodScalarWhereInput[]
    id?: UuidFilter<"EventPeriod"> | string
    fromDay?: IntNullableFilter<"EventPeriod"> | number | null
    fromMonth?: IntNullableFilter<"EventPeriod"> | number | null
    fromYear?: IntFilter<"EventPeriod"> | number
    toDay?: IntNullableFilter<"EventPeriod"> | number | null
    toMonth?: IntNullableFilter<"EventPeriod"> | number | null
    toYear?: IntFilter<"EventPeriod"> | number
    name?: StringFilter<"EventPeriod"> | string
    slug?: StringFilter<"EventPeriod"> | string
    description?: StringNullableFilter<"EventPeriod"> | string | null
  }

  export type HistoricalEventCreateWithoutEditorsInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCreatedEventsInput
    categories?: EventPeriodCreateNestedManyWithoutEventsInput
  }

  export type HistoricalEventUncheckedCreateWithoutEditorsInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: EventPeriodUncheckedCreateNestedManyWithoutEventsInput
  }

  export type HistoricalEventCreateOrConnectWithoutEditorsInput = {
    where: HistoricalEventWhereUniqueInput
    create: XOR<HistoricalEventCreateWithoutEditorsInput, HistoricalEventUncheckedCreateWithoutEditorsInput>
  }

  export type UserCreateWithoutEditedEventsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    keyToken?: KeyTokenCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventCreateNestedManyWithoutAuthorInput
    blogPosts?: BlogAuthorCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutEditedEventsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    keyToken?: KeyTokenUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventUncheckedCreateNestedManyWithoutAuthorInput
    blogPosts?: BlogAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutEditedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditedEventsInput, UserUncheckedCreateWithoutEditedEventsInput>
  }

  export type HistoricalEventUpsertWithoutEditorsInput = {
    update: XOR<HistoricalEventUpdateWithoutEditorsInput, HistoricalEventUncheckedUpdateWithoutEditorsInput>
    create: XOR<HistoricalEventCreateWithoutEditorsInput, HistoricalEventUncheckedCreateWithoutEditorsInput>
    where?: HistoricalEventWhereInput
  }

  export type HistoricalEventUpdateToOneWithWhereWithoutEditorsInput = {
    where?: HistoricalEventWhereInput
    data: XOR<HistoricalEventUpdateWithoutEditorsInput, HistoricalEventUncheckedUpdateWithoutEditorsInput>
  }

  export type HistoricalEventUpdateWithoutEditorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    categories?: EventPeriodUpdateManyWithoutEventsNestedInput
  }

  export type HistoricalEventUncheckedUpdateWithoutEditorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: EventPeriodUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type UserUpsertWithoutEditedEventsInput = {
    update: XOR<UserUpdateWithoutEditedEventsInput, UserUncheckedUpdateWithoutEditedEventsInput>
    create: XOR<UserCreateWithoutEditedEventsInput, UserUncheckedCreateWithoutEditedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditedEventsInput, UserUncheckedUpdateWithoutEditedEventsInput>
  }

  export type UserUpdateWithoutEditedEventsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    keyToken?: KeyTokenUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUpdateManyWithoutAuthorNestedInput
    blogPosts?: BlogAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutEditedEventsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyToken?: KeyTokenUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUncheckedUpdateManyWithoutAuthorNestedInput
    blogPosts?: BlogAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type HistoricalEventCreateWithoutCategoriesInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCreatedEventsInput
    editors?: EventEditCreateNestedManyWithoutEventInput
  }

  export type HistoricalEventUncheckedCreateWithoutCategoriesInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editors?: EventEditUncheckedCreateNestedManyWithoutEventInput
  }

  export type HistoricalEventCreateOrConnectWithoutCategoriesInput = {
    where: HistoricalEventWhereUniqueInput
    create: XOR<HistoricalEventCreateWithoutCategoriesInput, HistoricalEventUncheckedCreateWithoutCategoriesInput>
  }

  export type HistoricalEventUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: HistoricalEventWhereUniqueInput
    update: XOR<HistoricalEventUpdateWithoutCategoriesInput, HistoricalEventUncheckedUpdateWithoutCategoriesInput>
    create: XOR<HistoricalEventCreateWithoutCategoriesInput, HistoricalEventUncheckedCreateWithoutCategoriesInput>
  }

  export type HistoricalEventUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: HistoricalEventWhereUniqueInput
    data: XOR<HistoricalEventUpdateWithoutCategoriesInput, HistoricalEventUncheckedUpdateWithoutCategoriesInput>
  }

  export type HistoricalEventUpdateManyWithWhereWithoutCategoriesInput = {
    where: HistoricalEventScalarWhereInput
    data: XOR<HistoricalEventUpdateManyMutationInput, HistoricalEventUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type BlogAuthorCreateWithoutPostInput = {
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutBlogPostsInput
  }

  export type BlogAuthorUncheckedCreateWithoutPostInput = {
    authorId: string
    createdAt?: Date | string
  }

  export type BlogAuthorCreateOrConnectWithoutPostInput = {
    where: BlogAuthorWhereUniqueInput
    create: XOR<BlogAuthorCreateWithoutPostInput, BlogAuthorUncheckedCreateWithoutPostInput>
  }

  export type BlogAuthorCreateManyPostInputEnvelope = {
    data: BlogAuthorCreateManyPostInput | BlogAuthorCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type BlogAuthorUpsertWithWhereUniqueWithoutPostInput = {
    where: BlogAuthorWhereUniqueInput
    update: XOR<BlogAuthorUpdateWithoutPostInput, BlogAuthorUncheckedUpdateWithoutPostInput>
    create: XOR<BlogAuthorCreateWithoutPostInput, BlogAuthorUncheckedCreateWithoutPostInput>
  }

  export type BlogAuthorUpdateWithWhereUniqueWithoutPostInput = {
    where: BlogAuthorWhereUniqueInput
    data: XOR<BlogAuthorUpdateWithoutPostInput, BlogAuthorUncheckedUpdateWithoutPostInput>
  }

  export type BlogAuthorUpdateManyWithWhereWithoutPostInput = {
    where: BlogAuthorScalarWhereInput
    data: XOR<BlogAuthorUpdateManyMutationInput, BlogAuthorUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutBlogPostsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    keyToken?: KeyTokenCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutBlogPostsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    keyToken?: KeyTokenUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: HistoricalEventUncheckedCreateNestedManyWithoutAuthorInput
    editedEvents?: EventEditUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutBlogPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
  }

  export type BlogPostCreateWithoutAuthorsInput = {
    id?: string
    title: string
    slug: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUncheckedCreateWithoutAuthorsInput = {
    id?: string
    title: string
    slug: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutAuthorsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutAuthorsInput, BlogPostUncheckedCreateWithoutAuthorsInput>
  }

  export type UserUpsertWithoutBlogPostsInput = {
    update: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type UserUpdateWithoutBlogPostsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    keyToken?: KeyTokenUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyToken?: KeyTokenUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUncheckedUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type BlogPostUpsertWithoutAuthorsInput = {
    update: XOR<BlogPostUpdateWithoutAuthorsInput, BlogPostUncheckedUpdateWithoutAuthorsInput>
    create: XOR<BlogPostCreateWithoutAuthorsInput, BlogPostUncheckedCreateWithoutAuthorsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutAuthorsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutAuthorsInput, BlogPostUncheckedUpdateWithoutAuthorsInput>
  }

  export type BlogPostUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyTokenCreateManyUserInput = {
    id?: string
    browserId: string
    publicKey: string
    privateKey: string
    refreshTokensUsed?: KeyTokenCreaterefreshTokensUsedInput | string[]
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoricalEventCreateManyAuthorInput = {
    id?: string
    fromDay?: number | null
    fromMonth?: number | null
    fromYear: number
    toDay?: number | null
    toMonth?: number | null
    toYear: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventEditCreateManyEditorInput = {
    id?: string
    eventId: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
  }

  export type BlogAuthorCreateManyAuthorInput = {
    postId: string
    createdAt?: Date | string
  }

  export type KeyTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    refreshTokensUsed?: KeyTokenUpdaterefreshTokensUsedInput | string[]
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricalEventUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editors?: EventEditUpdateManyWithoutEventNestedInput
    categories?: EventPeriodUpdateManyWithoutEventsNestedInput
  }

  export type HistoricalEventUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editors?: EventEditUncheckedUpdateManyWithoutEventNestedInput
    categories?: EventPeriodUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type HistoricalEventUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventEditUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
    event?: HistoricalEventUpdateOneRequiredWithoutEditorsNestedInput
  }

  export type EventEditUncheckedUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
  }

  export type EventEditUncheckedUpdateManyWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
  }

  export type BlogAuthorUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: BlogPostUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type BlogAuthorUncheckedUpdateWithoutAuthorInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAuthorUncheckedUpdateManyWithoutAuthorInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyToken?: KeyTokenUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUpdateManyWithoutAuthorNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyToken?: KeyTokenUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: HistoricalEventUncheckedUpdateManyWithoutAuthorNestedInput
    editedEvents?: EventEditUncheckedUpdateManyWithoutEditorNestedInput
    blogPosts?: BlogAuthorUncheckedUpdateManyWithoutAuthorNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventEditCreateManyEventInput = {
    id?: string
    editorId: string
    editedAt?: Date | string
    prevContent: string
    newContent: string
    prevFromDay?: number | null
    prevFromMonth?: number | null
    prevFromYear: number
    prevToDay?: number | null
    prevToMonth?: number | null
    prevToYear: number
    newFromDay?: number | null
    newFromMonth?: number | null
    newFromYear: number
    newToDay?: number | null
    newToMonth?: number | null
    newToYear: number
  }

  export type EventEditUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
    editor?: UserUpdateOneRequiredWithoutEditedEventsNestedInput
  }

  export type EventEditUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
  }

  export type EventEditUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    editedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    prevFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevFromYear?: IntFieldUpdateOperationsInput | number
    prevToDay?: NullableIntFieldUpdateOperationsInput | number | null
    prevToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    prevToYear?: IntFieldUpdateOperationsInput | number
    newFromDay?: NullableIntFieldUpdateOperationsInput | number | null
    newFromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newFromYear?: IntFieldUpdateOperationsInput | number
    newToDay?: NullableIntFieldUpdateOperationsInput | number | null
    newToMonth?: NullableIntFieldUpdateOperationsInput | number | null
    newToYear?: IntFieldUpdateOperationsInput | number
  }

  export type EventPeriodUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventPeriodUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventPeriodUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricalEventUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    editors?: EventEditUpdateManyWithoutEventNestedInput
  }

  export type HistoricalEventUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editors?: EventEditUncheckedUpdateManyWithoutEventNestedInput
  }

  export type HistoricalEventUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromDay?: NullableIntFieldUpdateOperationsInput | number | null
    fromMonth?: NullableIntFieldUpdateOperationsInput | number | null
    fromYear?: IntFieldUpdateOperationsInput | number
    toDay?: NullableIntFieldUpdateOperationsInput | number | null
    toMonth?: NullableIntFieldUpdateOperationsInput | number | null
    toYear?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAuthorCreateManyPostInput = {
    authorId: string
    createdAt?: Date | string
  }

  export type BlogAuthorUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutBlogPostsNestedInput
  }

  export type BlogAuthorUncheckedUpdateWithoutPostInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAuthorUncheckedUpdateManyWithoutPostInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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