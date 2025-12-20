
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
 * Model UserSkill
 * 
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model MatchHistory
 * 
 */
export type MatchHistory = $Result.DefaultSelection<Prisma.$MatchHistoryPayload>
/**
 * Model MatchFeedback
 * 
 */
export type MatchFeedback = $Result.DefaultSelection<Prisma.$MatchFeedbackPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ExperienceLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel]


export const MatchStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  EXPIRED: 'EXPIRED',
  COMPLETED: 'COMPLETED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const MatchHistoryStatus: {
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  EXPIRED: 'EXPIRED',
  COMPLETED: 'COMPLETED'
};

export type MatchHistoryStatus = (typeof MatchHistoryStatus)[keyof typeof MatchHistoryStatus]

}

export type ExperienceLevel = $Enums.ExperienceLevel

export const ExperienceLevel: typeof $Enums.ExperienceLevel

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type MatchHistoryStatus = $Enums.MatchHistoryStatus

export const MatchHistoryStatus: typeof $Enums.MatchHistoryStatus

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
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchHistory`: Exposes CRUD operations for the **MatchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchHistories
    * const matchHistories = await prisma.matchHistory.findMany()
    * ```
    */
  get matchHistory(): Prisma.MatchHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchFeedback`: Exposes CRUD operations for the **MatchFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchFeedbacks
    * const matchFeedbacks = await prisma.matchFeedback.findMany()
    * ```
    */
  get matchFeedback(): Prisma.MatchFeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    UserSkill: 'UserSkill',
    UserPreference: 'UserPreference',
    Match: 'Match',
    MatchHistory: 'MatchHistory',
    MatchFeedback: 'MatchFeedback',
    SystemConfig: 'SystemConfig'
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
      modelProps: "user" | "userSkill" | "userPreference" | "match" | "matchHistory" | "matchFeedback" | "systemConfig"
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
      UserSkill: {
        payload: Prisma.$UserSkillPayload<ExtArgs>
        fields: Prisma.UserSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findFirst: {
            args: Prisma.UserSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findMany: {
            args: Prisma.UserSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          create: {
            args: Prisma.UserSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          createMany: {
            args: Prisma.UserSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          delete: {
            args: Prisma.UserSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          update: {
            args: Prisma.UserSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.UserSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      MatchHistory: {
        payload: Prisma.$MatchHistoryPayload<ExtArgs>
        fields: Prisma.MatchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>
          }
          findFirst: {
            args: Prisma.MatchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>
          }
          findMany: {
            args: Prisma.MatchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>[]
          }
          create: {
            args: Prisma.MatchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>
          }
          createMany: {
            args: Prisma.MatchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>[]
          }
          delete: {
            args: Prisma.MatchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>
          }
          update: {
            args: Prisma.MatchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.MatchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.MatchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchHistoryPayload>
          }
          aggregate: {
            args: Prisma.MatchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchHistory>
          }
          groupBy: {
            args: Prisma.MatchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<MatchHistoryCountAggregateOutputType> | number
          }
        }
      }
      MatchFeedback: {
        payload: Prisma.$MatchFeedbackPayload<ExtArgs>
        fields: Prisma.MatchFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>
          }
          findFirst: {
            args: Prisma.MatchFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>
          }
          findMany: {
            args: Prisma.MatchFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>[]
          }
          create: {
            args: Prisma.MatchFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>
          }
          createMany: {
            args: Prisma.MatchFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>[]
          }
          delete: {
            args: Prisma.MatchFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>
          }
          update: {
            args: Prisma.MatchFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.MatchFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchFeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>[]
          }
          upsert: {
            args: Prisma.MatchFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFeedbackPayload>
          }
          aggregate: {
            args: Prisma.MatchFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchFeedback>
          }
          groupBy: {
            args: Prisma.MatchFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<MatchFeedbackCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
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
    userSkill?: UserSkillOmit
    userPreference?: UserPreferenceOmit
    match?: MatchOmit
    matchHistory?: MatchHistoryOmit
    matchFeedback?: MatchFeedbackOmit
    systemConfig?: SystemConfigOmit
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
    skills: number
    preferences: number
    matchesAsUser1: number
    matchesAsUser2: number
    feedbackGiven: number
    feedbackReceived: number
    matchHistoryAsUser1: number
    matchHistoryAsUser2: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    preferences?: boolean | UserCountOutputTypeCountPreferencesArgs
    matchesAsUser1?: boolean | UserCountOutputTypeCountMatchesAsUser1Args
    matchesAsUser2?: boolean | UserCountOutputTypeCountMatchesAsUser2Args
    feedbackGiven?: boolean | UserCountOutputTypeCountFeedbackGivenArgs
    feedbackReceived?: boolean | UserCountOutputTypeCountFeedbackReceivedArgs
    matchHistoryAsUser1?: boolean | UserCountOutputTypeCountMatchHistoryAsUser1Args
    matchHistoryAsUser2?: boolean | UserCountOutputTypeCountMatchHistoryAsUser2Args
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
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchFeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchFeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchHistoryAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchHistoryAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchHistoryWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    matchHistory: number
    feedback: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchHistory?: boolean | MatchCountOutputTypeCountMatchHistoryArgs
    feedback?: boolean | MatchCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchHistoryWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchFeedbackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    matchCooldownDays: number | null
  }

  export type UserSumAggregateOutputType = {
    matchCooldownDays: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    isActive: boolean | null
    matchCooldownDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    isActive: boolean | null
    matchCooldownDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    bio: number
    avatarUrl: number
    isActive: number
    matchCooldownDays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    matchCooldownDays?: true
  }

  export type UserSumAggregateInputType = {
    matchCooldownDays?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    bio?: true
    avatarUrl?: true
    isActive?: true
    matchCooldownDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    bio?: true
    avatarUrl?: true
    isActive?: true
    matchCooldownDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    bio?: true
    avatarUrl?: true
    isActive?: true
    matchCooldownDays?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    bio: string | null
    avatarUrl: string | null
    isActive: boolean
    matchCooldownDays: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    matchCooldownDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | User$skillsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    matchesAsUser1?: boolean | User$matchesAsUser1Args<ExtArgs>
    matchesAsUser2?: boolean | User$matchesAsUser2Args<ExtArgs>
    feedbackGiven?: boolean | User$feedbackGivenArgs<ExtArgs>
    feedbackReceived?: boolean | User$feedbackReceivedArgs<ExtArgs>
    matchHistoryAsUser1?: boolean | User$matchHistoryAsUser1Args<ExtArgs>
    matchHistoryAsUser2?: boolean | User$matchHistoryAsUser2Args<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    matchCooldownDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    matchCooldownDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    matchCooldownDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "bio" | "avatarUrl" | "isActive" | "matchCooldownDays" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | User$skillsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    matchesAsUser1?: boolean | User$matchesAsUser1Args<ExtArgs>
    matchesAsUser2?: boolean | User$matchesAsUser2Args<ExtArgs>
    feedbackGiven?: boolean | User$feedbackGivenArgs<ExtArgs>
    feedbackReceived?: boolean | User$feedbackReceivedArgs<ExtArgs>
    matchHistoryAsUser1?: boolean | User$matchHistoryAsUser1Args<ExtArgs>
    matchHistoryAsUser2?: boolean | User$matchHistoryAsUser2Args<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      skills: Prisma.$UserSkillPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencePayload<ExtArgs>[]
      matchesAsUser1: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsUser2: Prisma.$MatchPayload<ExtArgs>[]
      feedbackGiven: Prisma.$MatchFeedbackPayload<ExtArgs>[]
      feedbackReceived: Prisma.$MatchFeedbackPayload<ExtArgs>[]
      matchHistoryAsUser1: Prisma.$MatchHistoryPayload<ExtArgs>[]
      matchHistoryAsUser2: Prisma.$MatchHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      bio: string | null
      avatarUrl: string | null
      isActive: boolean
      matchCooldownDays: number
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
    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsUser1<T extends User$matchesAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsUser2<T extends User$matchesAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbackGiven<T extends User$feedbackGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbackReceived<T extends User$feedbackReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchHistoryAsUser1<T extends User$matchHistoryAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$matchHistoryAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchHistoryAsUser2<T extends User$matchHistoryAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$matchHistoryAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly matchCooldownDays: FieldRef<"User", 'Int'>
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
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    cursor?: UserPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * User.matchesAsUser1
   */
  export type User$matchesAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesAsUser2
   */
  export type User$matchesAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.feedbackGiven
   */
  export type User$feedbackGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    where?: MatchFeedbackWhereInput
    orderBy?: MatchFeedbackOrderByWithRelationInput | MatchFeedbackOrderByWithRelationInput[]
    cursor?: MatchFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchFeedbackScalarFieldEnum | MatchFeedbackScalarFieldEnum[]
  }

  /**
   * User.feedbackReceived
   */
  export type User$feedbackReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    where?: MatchFeedbackWhereInput
    orderBy?: MatchFeedbackOrderByWithRelationInput | MatchFeedbackOrderByWithRelationInput[]
    cursor?: MatchFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchFeedbackScalarFieldEnum | MatchFeedbackScalarFieldEnum[]
  }

  /**
   * User.matchHistoryAsUser1
   */
  export type User$matchHistoryAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    where?: MatchHistoryWhereInput
    orderBy?: MatchHistoryOrderByWithRelationInput | MatchHistoryOrderByWithRelationInput[]
    cursor?: MatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchHistoryScalarFieldEnum | MatchHistoryScalarFieldEnum[]
  }

  /**
   * User.matchHistoryAsUser2
   */
  export type User$matchHistoryAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    where?: MatchHistoryWhereInput
    orderBy?: MatchHistoryOrderByWithRelationInput | MatchHistoryOrderByWithRelationInput[]
    cursor?: MatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchHistoryScalarFieldEnum | MatchHistoryScalarFieldEnum[]
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
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillAvgAggregateOutputType = {
    yearsOfExperience: number | null
  }

  export type UserSkillSumAggregateOutputType = {
    yearsOfExperience: number | null
  }

  export type UserSkillMinAggregateOutputType = {
    id: string | null
    userId: string | null
    skillText: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    yearsOfExperience: number | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    skillText: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    yearsOfExperience: number | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillCountAggregateOutputType = {
    id: number
    userId: number
    skillText: number
    experienceLevel: number
    yearsOfExperience: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillAvgAggregateInputType = {
    yearsOfExperience?: true
  }

  export type UserSkillSumAggregateInputType = {
    yearsOfExperience?: true
  }

  export type UserSkillMinAggregateInputType = {
    id?: true
    userId?: true
    skillText?: true
    experienceLevel?: true
    yearsOfExperience?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    skillText?: true
    experienceLevel?: true
    yearsOfExperience?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillCountAggregateInputType = {
    id?: true
    userId?: true
    skillText?: true
    experienceLevel?: true
    yearsOfExperience?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkill to aggregate.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkills
    **/
    _count?: true | UserSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillMaxAggregateInputType
  }

  export type GetUserSkillAggregateType<T extends UserSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkill[P]>
      : GetScalarType<T[P], AggregateUserSkill[P]>
  }




  export type UserSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithAggregationInput | UserSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: UserSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillCountAggregateInputType | true
    _avg?: UserSkillAvgAggregateInputType
    _sum?: UserSkillSumAggregateInputType
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    id: string
    userId: string
    skillText: string
    experienceLevel: $Enums.ExperienceLevel
    yearsOfExperience: number | null
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends UserSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillText?: boolean
    experienceLevel?: boolean
    yearsOfExperience?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillText?: boolean
    experienceLevel?: boolean
    yearsOfExperience?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillText?: boolean
    experienceLevel?: boolean
    yearsOfExperience?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    skillText?: boolean
    experienceLevel?: boolean
    yearsOfExperience?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillText" | "experienceLevel" | "yearsOfExperience" | "isPrimary" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkill"]>
  export type UserSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skillText: string
      experienceLevel: $Enums.ExperienceLevel
      yearsOfExperience: number | null
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkill"]>
    composites: {}
  }

  type UserSkillGetPayload<S extends boolean | null | undefined | UserSkillDefaultArgs> = $Result.GetResult<Prisma.$UserSkillPayload, S>

  type UserSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface UserSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkill'], meta: { name: 'UserSkill' } }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {UserSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillFindUniqueArgs>(args: SelectSubset<T, UserSkillFindUniqueArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillFindFirstArgs>(args?: SelectSubset<T, UserSkillFindFirstArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkills
     * const userSkills = await prisma.userSkill.findMany()
     * 
     * // Get first 10 UserSkills
     * const userSkills = await prisma.userSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillFindManyArgs>(args?: SelectSubset<T, UserSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkill.
     * @param {UserSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     * 
     */
    create<T extends UserSkillCreateArgs>(args: SelectSubset<T, UserSkillCreateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkills.
     * @param {UserSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillCreateManyArgs>(args?: SelectSubset<T, UserSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkills and returns the data saved in the database.
     * @param {UserSkillCreateManyAndReturnArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkill.
     * @param {UserSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     * 
     */
    delete<T extends UserSkillDeleteArgs>(args: SelectSubset<T, UserSkillDeleteArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkill.
     * @param {UserSkillUpdateArgs} args - Arguments to update one UserSkill.
     * @example
     * // Update one UserSkill
     * const userSkill = await prisma.userSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillUpdateArgs>(args: SelectSubset<T, UserSkillUpdateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkills.
     * @param {UserSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillDeleteManyArgs>(args?: SelectSubset<T, UserSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillUpdateManyArgs>(args: SelectSubset<T, UserSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills and returns the data updated in the database.
     * @param {UserSkillUpdateManyAndReturnArgs} args - Arguments to update many UserSkills.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkill.
     * @param {UserSkillUpsertArgs} args - Arguments to update or create a UserSkill.
     * @example
     * // Update or create a UserSkill
     * const userSkill = await prisma.userSkill.upsert({
     *   create: {
     *     // ... data to create a UserSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkill we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillUpsertArgs>(args: SelectSubset<T, UserSkillUpsertArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
    **/
    count<T extends UserSkillCountArgs>(
      args?: Subset<T, UserSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillAggregateArgs>(args: Subset<T, UserSkillAggregateArgs>): Prisma.PrismaPromise<GetUserSkillAggregateType<T>>

    /**
     * Group by UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillGroupByArgs} args - Group by arguments.
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
      T extends UserSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkill model
   */
  readonly fields: UserSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserSkill model
   */
  interface UserSkillFieldRefs {
    readonly id: FieldRef<"UserSkill", 'String'>
    readonly userId: FieldRef<"UserSkill", 'String'>
    readonly skillText: FieldRef<"UserSkill", 'String'>
    readonly experienceLevel: FieldRef<"UserSkill", 'ExperienceLevel'>
    readonly yearsOfExperience: FieldRef<"UserSkill", 'Int'>
    readonly isPrimary: FieldRef<"UserSkill", 'Boolean'>
    readonly createdAt: FieldRef<"UserSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkill findUnique
   */
  export type UserSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findUniqueOrThrow
   */
  export type UserSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findFirst
   */
  export type UserSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findFirstOrThrow
   */
  export type UserSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findMany
   */
  export type UserSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkills to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill create
   */
  export type UserSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkill.
     */
    data: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
  }

  /**
   * UserSkill createMany
   */
  export type UserSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkill createManyAndReturn
   */
  export type UserSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill update
   */
  export type UserSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkill.
     */
    data: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
    /**
     * Choose, which UserSkill to update.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill updateMany
   */
  export type UserSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
  }

  /**
   * UserSkill updateManyAndReturn
   */
  export type UserSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill upsert
   */
  export type UserSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkill to update in case it exists.
     */
    where: UserSkillWhereUniqueInput
    /**
     * In case the UserSkill found by the `where` argument doesn't exist, create a new UserSkill with this data.
     */
    create: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
    /**
     * In case the UserSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
  }

  /**
   * UserSkill delete
   */
  export type UserSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter which UserSkill to delete.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill deleteMany
   */
  export type UserSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkills to delete
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to delete.
     */
    limit?: number
  }

  /**
   * UserSkill without action
   */
  export type UserSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceAvgAggregateOutputType = {
    priority: number | null
  }

  export type UserPreferenceSumAggregateOutputType = {
    priority: number | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    preferenceText: string | null
    priority: number | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    preferenceText: string | null
    priority: number | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    preferenceText: number
    priority: number
    isRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferenceAvgAggregateInputType = {
    priority?: true
  }

  export type UserPreferenceSumAggregateInputType = {
    priority?: true
  }

  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    preferenceText?: true
    priority?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    preferenceText?: true
    priority?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    preferenceText?: true
    priority?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _avg?: UserPreferenceAvgAggregateInputType
    _sum?: UserPreferenceSumAggregateInputType
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: string
    userId: string
    preferenceText: string
    priority: number
    isRequired: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    preferenceText?: boolean
    priority?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    preferenceText?: boolean
    priority?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    preferenceText?: boolean
    priority?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    preferenceText?: boolean
    priority?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "preferenceText" | "priority" | "isRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      preferenceText: string
      priority: number
      isRequired: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'String'>
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly preferenceText: FieldRef<"UserPreference", 'String'>
    readonly priority: FieldRef<"UserPreference", 'Int'>
    readonly isRequired: FieldRef<"UserPreference", 'Boolean'>
    readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    matchScore: number | null
  }

  export type MatchSumAggregateOutputType = {
    matchScore: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    externalMatchId: string | null
    matchScore: number | null
    matchReason: string | null
    status: $Enums.MatchStatus | null
    matchedAt: Date | null
    expiresAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    externalMatchId: string | null
    matchScore: number | null
    matchReason: string | null
    status: $Enums.MatchStatus | null
    matchedAt: Date | null
    expiresAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    externalMatchId: number
    matchScore: number
    matchReason: number
    status: number
    matchedAt: number
    expiresAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    matchScore?: true
  }

  export type MatchSumAggregateInputType = {
    matchScore?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    externalMatchId?: true
    matchScore?: true
    matchReason?: true
    status?: true
    matchedAt?: true
    expiresAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    externalMatchId?: true
    matchScore?: true
    matchReason?: true
    status?: true
    matchedAt?: true
    expiresAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    externalMatchId?: true
    matchScore?: true
    matchReason?: true
    status?: true
    matchedAt?: true
    expiresAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    user1Id: string
    user2Id: string
    externalMatchId: string | null
    matchScore: number | null
    matchReason: string | null
    status: $Enums.MatchStatus
    matchedAt: Date
    expiresAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    externalMatchId?: boolean
    matchScore?: boolean
    matchReason?: boolean
    status?: boolean
    matchedAt?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    matchHistory?: boolean | Match$matchHistoryArgs<ExtArgs>
    feedback?: boolean | Match$feedbackArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    externalMatchId?: boolean
    matchScore?: boolean
    matchReason?: boolean
    status?: boolean
    matchedAt?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    externalMatchId?: boolean
    matchScore?: boolean
    matchReason?: boolean
    status?: boolean
    matchedAt?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    externalMatchId?: boolean
    matchScore?: boolean
    matchReason?: boolean
    status?: boolean
    matchedAt?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "externalMatchId" | "matchScore" | "matchReason" | "status" | "matchedAt" | "expiresAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    matchHistory?: boolean | Match$matchHistoryArgs<ExtArgs>
    feedback?: boolean | Match$feedbackArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
      matchHistory: Prisma.$MatchHistoryPayload<ExtArgs>[]
      feedback: Prisma.$MatchFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1Id: string
      user2Id: string
      externalMatchId: string | null
      matchScore: number | null
      matchReason: string | null
      status: $Enums.MatchStatus
      matchedAt: Date
      expiresAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchHistory<T extends Match$matchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Match$matchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends Match$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Match$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly user1Id: FieldRef<"Match", 'String'>
    readonly user2Id: FieldRef<"Match", 'String'>
    readonly externalMatchId: FieldRef<"Match", 'String'>
    readonly matchScore: FieldRef<"Match", 'Float'>
    readonly matchReason: FieldRef<"Match", 'String'>
    readonly status: FieldRef<"Match", 'MatchStatus'>
    readonly matchedAt: FieldRef<"Match", 'DateTime'>
    readonly expiresAt: FieldRef<"Match", 'DateTime'>
    readonly completedAt: FieldRef<"Match", 'DateTime'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.matchHistory
   */
  export type Match$matchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    where?: MatchHistoryWhereInput
    orderBy?: MatchHistoryOrderByWithRelationInput | MatchHistoryOrderByWithRelationInput[]
    cursor?: MatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchHistoryScalarFieldEnum | MatchHistoryScalarFieldEnum[]
  }

  /**
   * Match.feedback
   */
  export type Match$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    where?: MatchFeedbackWhereInput
    orderBy?: MatchFeedbackOrderByWithRelationInput | MatchFeedbackOrderByWithRelationInput[]
    cursor?: MatchFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchFeedbackScalarFieldEnum | MatchFeedbackScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model MatchHistory
   */

  export type AggregateMatchHistory = {
    _count: MatchHistoryCountAggregateOutputType | null
    _min: MatchHistoryMinAggregateOutputType | null
    _max: MatchHistoryMaxAggregateOutputType | null
  }

  export type MatchHistoryMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    user1Id: string | null
    user2Id: string | null
    matchedAt: Date | null
    cooldownUntil: Date | null
    status: $Enums.MatchHistoryStatus | null
    createdAt: Date | null
  }

  export type MatchHistoryMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    user1Id: string | null
    user2Id: string | null
    matchedAt: Date | null
    cooldownUntil: Date | null
    status: $Enums.MatchHistoryStatus | null
    createdAt: Date | null
  }

  export type MatchHistoryCountAggregateOutputType = {
    id: number
    matchId: number
    user1Id: number
    user2Id: number
    matchedAt: number
    cooldownUntil: number
    status: number
    createdAt: number
    _all: number
  }


  export type MatchHistoryMinAggregateInputType = {
    id?: true
    matchId?: true
    user1Id?: true
    user2Id?: true
    matchedAt?: true
    cooldownUntil?: true
    status?: true
    createdAt?: true
  }

  export type MatchHistoryMaxAggregateInputType = {
    id?: true
    matchId?: true
    user1Id?: true
    user2Id?: true
    matchedAt?: true
    cooldownUntil?: true
    status?: true
    createdAt?: true
  }

  export type MatchHistoryCountAggregateInputType = {
    id?: true
    matchId?: true
    user1Id?: true
    user2Id?: true
    matchedAt?: true
    cooldownUntil?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MatchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchHistory to aggregate.
     */
    where?: MatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: MatchHistoryOrderByWithRelationInput | MatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchHistories
    **/
    _count?: true | MatchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchHistoryMaxAggregateInputType
  }

  export type GetMatchHistoryAggregateType<T extends MatchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchHistory[P]>
      : GetScalarType<T[P], AggregateMatchHistory[P]>
  }




  export type MatchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchHistoryWhereInput
    orderBy?: MatchHistoryOrderByWithAggregationInput | MatchHistoryOrderByWithAggregationInput[]
    by: MatchHistoryScalarFieldEnum[] | MatchHistoryScalarFieldEnum
    having?: MatchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchHistoryCountAggregateInputType | true
    _min?: MatchHistoryMinAggregateInputType
    _max?: MatchHistoryMaxAggregateInputType
  }

  export type MatchHistoryGroupByOutputType = {
    id: string
    matchId: string
    user1Id: string
    user2Id: string
    matchedAt: Date
    cooldownUntil: Date
    status: $Enums.MatchHistoryStatus
    createdAt: Date
    _count: MatchHistoryCountAggregateOutputType | null
    _min: MatchHistoryMinAggregateOutputType | null
    _max: MatchHistoryMaxAggregateOutputType | null
  }

  type GetMatchHistoryGroupByPayload<T extends MatchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MatchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type MatchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    user1Id?: boolean
    user2Id?: boolean
    matchedAt?: boolean
    cooldownUntil?: boolean
    status?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchHistory"]>

  export type MatchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    user1Id?: boolean
    user2Id?: boolean
    matchedAt?: boolean
    cooldownUntil?: boolean
    status?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchHistory"]>

  export type MatchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    user1Id?: boolean
    user2Id?: boolean
    matchedAt?: boolean
    cooldownUntil?: boolean
    status?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchHistory"]>

  export type MatchHistorySelectScalar = {
    id?: boolean
    matchId?: boolean
    user1Id?: boolean
    user2Id?: boolean
    matchedAt?: boolean
    cooldownUntil?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MatchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "user1Id" | "user2Id" | "matchedAt" | "cooldownUntil" | "status" | "createdAt", ExtArgs["result"]["matchHistory"]>
  export type MatchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchHistory"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      user1Id: string
      user2Id: string
      matchedAt: Date
      cooldownUntil: Date
      status: $Enums.MatchHistoryStatus
      createdAt: Date
    }, ExtArgs["result"]["matchHistory"]>
    composites: {}
  }

  type MatchHistoryGetPayload<S extends boolean | null | undefined | MatchHistoryDefaultArgs> = $Result.GetResult<Prisma.$MatchHistoryPayload, S>

  type MatchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchHistoryCountAggregateInputType | true
    }

  export interface MatchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchHistory'], meta: { name: 'MatchHistory' } }
    /**
     * Find zero or one MatchHistory that matches the filter.
     * @param {MatchHistoryFindUniqueArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchHistoryFindUniqueArgs>(args: SelectSubset<T, MatchHistoryFindUniqueArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchHistoryFindUniqueOrThrowArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryFindFirstArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchHistoryFindFirstArgs>(args?: SelectSubset<T, MatchHistoryFindFirstArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryFindFirstOrThrowArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchHistories
     * const matchHistories = await prisma.matchHistory.findMany()
     * 
     * // Get first 10 MatchHistories
     * const matchHistories = await prisma.matchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchHistoryWithIdOnly = await prisma.matchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchHistoryFindManyArgs>(args?: SelectSubset<T, MatchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchHistory.
     * @param {MatchHistoryCreateArgs} args - Arguments to create a MatchHistory.
     * @example
     * // Create one MatchHistory
     * const MatchHistory = await prisma.matchHistory.create({
     *   data: {
     *     // ... data to create a MatchHistory
     *   }
     * })
     * 
     */
    create<T extends MatchHistoryCreateArgs>(args: SelectSubset<T, MatchHistoryCreateArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchHistories.
     * @param {MatchHistoryCreateManyArgs} args - Arguments to create many MatchHistories.
     * @example
     * // Create many MatchHistories
     * const matchHistory = await prisma.matchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchHistoryCreateManyArgs>(args?: SelectSubset<T, MatchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchHistories and returns the data saved in the database.
     * @param {MatchHistoryCreateManyAndReturnArgs} args - Arguments to create many MatchHistories.
     * @example
     * // Create many MatchHistories
     * const matchHistory = await prisma.matchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchHistories and only return the `id`
     * const matchHistoryWithIdOnly = await prisma.matchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchHistory.
     * @param {MatchHistoryDeleteArgs} args - Arguments to delete one MatchHistory.
     * @example
     * // Delete one MatchHistory
     * const MatchHistory = await prisma.matchHistory.delete({
     *   where: {
     *     // ... filter to delete one MatchHistory
     *   }
     * })
     * 
     */
    delete<T extends MatchHistoryDeleteArgs>(args: SelectSubset<T, MatchHistoryDeleteArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchHistory.
     * @param {MatchHistoryUpdateArgs} args - Arguments to update one MatchHistory.
     * @example
     * // Update one MatchHistory
     * const matchHistory = await prisma.matchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchHistoryUpdateArgs>(args: SelectSubset<T, MatchHistoryUpdateArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchHistories.
     * @param {MatchHistoryDeleteManyArgs} args - Arguments to filter MatchHistories to delete.
     * @example
     * // Delete a few MatchHistories
     * const { count } = await prisma.matchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchHistoryDeleteManyArgs>(args?: SelectSubset<T, MatchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchHistories
     * const matchHistory = await prisma.matchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchHistoryUpdateManyArgs>(args: SelectSubset<T, MatchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchHistories and returns the data updated in the database.
     * @param {MatchHistoryUpdateManyAndReturnArgs} args - Arguments to update many MatchHistories.
     * @example
     * // Update many MatchHistories
     * const matchHistory = await prisma.matchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchHistories and only return the `id`
     * const matchHistoryWithIdOnly = await prisma.matchHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchHistory.
     * @param {MatchHistoryUpsertArgs} args - Arguments to update or create a MatchHistory.
     * @example
     * // Update or create a MatchHistory
     * const matchHistory = await prisma.matchHistory.upsert({
     *   create: {
     *     // ... data to create a MatchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchHistory we want to update
     *   }
     * })
     */
    upsert<T extends MatchHistoryUpsertArgs>(args: SelectSubset<T, MatchHistoryUpsertArgs<ExtArgs>>): Prisma__MatchHistoryClient<$Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryCountArgs} args - Arguments to filter MatchHistories to count.
     * @example
     * // Count the number of MatchHistories
     * const count = await prisma.matchHistory.count({
     *   where: {
     *     // ... the filter for the MatchHistories we want to count
     *   }
     * })
    **/
    count<T extends MatchHistoryCountArgs>(
      args?: Subset<T, MatchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchHistoryAggregateArgs>(args: Subset<T, MatchHistoryAggregateArgs>): Prisma.PrismaPromise<GetMatchHistoryAggregateType<T>>

    /**
     * Group by MatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryGroupByArgs} args - Group by arguments.
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
      T extends MatchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MatchHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchHistory model
   */
  readonly fields: MatchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchHistory model
   */
  interface MatchHistoryFieldRefs {
    readonly id: FieldRef<"MatchHistory", 'String'>
    readonly matchId: FieldRef<"MatchHistory", 'String'>
    readonly user1Id: FieldRef<"MatchHistory", 'String'>
    readonly user2Id: FieldRef<"MatchHistory", 'String'>
    readonly matchedAt: FieldRef<"MatchHistory", 'DateTime'>
    readonly cooldownUntil: FieldRef<"MatchHistory", 'DateTime'>
    readonly status: FieldRef<"MatchHistory", 'MatchHistoryStatus'>
    readonly createdAt: FieldRef<"MatchHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchHistory findUnique
   */
  export type MatchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistory to fetch.
     */
    where: MatchHistoryWhereUniqueInput
  }

  /**
   * MatchHistory findUniqueOrThrow
   */
  export type MatchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistory to fetch.
     */
    where: MatchHistoryWhereUniqueInput
  }

  /**
   * MatchHistory findFirst
   */
  export type MatchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistory to fetch.
     */
    where?: MatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: MatchHistoryOrderByWithRelationInput | MatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchHistories.
     */
    cursor?: MatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchHistories.
     */
    distinct?: MatchHistoryScalarFieldEnum | MatchHistoryScalarFieldEnum[]
  }

  /**
   * MatchHistory findFirstOrThrow
   */
  export type MatchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistory to fetch.
     */
    where?: MatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: MatchHistoryOrderByWithRelationInput | MatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchHistories.
     */
    cursor?: MatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchHistories.
     */
    distinct?: MatchHistoryScalarFieldEnum | MatchHistoryScalarFieldEnum[]
  }

  /**
   * MatchHistory findMany
   */
  export type MatchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistories to fetch.
     */
    where?: MatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: MatchHistoryOrderByWithRelationInput | MatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchHistories.
     */
    cursor?: MatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistories.
     */
    skip?: number
    distinct?: MatchHistoryScalarFieldEnum | MatchHistoryScalarFieldEnum[]
  }

  /**
   * MatchHistory create
   */
  export type MatchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchHistory.
     */
    data: XOR<MatchHistoryCreateInput, MatchHistoryUncheckedCreateInput>
  }

  /**
   * MatchHistory createMany
   */
  export type MatchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchHistories.
     */
    data: MatchHistoryCreateManyInput | MatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchHistory createManyAndReturn
   */
  export type MatchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many MatchHistories.
     */
    data: MatchHistoryCreateManyInput | MatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchHistory update
   */
  export type MatchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchHistory.
     */
    data: XOR<MatchHistoryUpdateInput, MatchHistoryUncheckedUpdateInput>
    /**
     * Choose, which MatchHistory to update.
     */
    where: MatchHistoryWhereUniqueInput
  }

  /**
   * MatchHistory updateMany
   */
  export type MatchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchHistories.
     */
    data: XOR<MatchHistoryUpdateManyMutationInput, MatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MatchHistories to update
     */
    where?: MatchHistoryWhereInput
    /**
     * Limit how many MatchHistories to update.
     */
    limit?: number
  }

  /**
   * MatchHistory updateManyAndReturn
   */
  export type MatchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update MatchHistories.
     */
    data: XOR<MatchHistoryUpdateManyMutationInput, MatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MatchHistories to update
     */
    where?: MatchHistoryWhereInput
    /**
     * Limit how many MatchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchHistory upsert
   */
  export type MatchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchHistory to update in case it exists.
     */
    where: MatchHistoryWhereUniqueInput
    /**
     * In case the MatchHistory found by the `where` argument doesn't exist, create a new MatchHistory with this data.
     */
    create: XOR<MatchHistoryCreateInput, MatchHistoryUncheckedCreateInput>
    /**
     * In case the MatchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchHistoryUpdateInput, MatchHistoryUncheckedUpdateInput>
  }

  /**
   * MatchHistory delete
   */
  export type MatchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
    /**
     * Filter which MatchHistory to delete.
     */
    where: MatchHistoryWhereUniqueInput
  }

  /**
   * MatchHistory deleteMany
   */
  export type MatchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchHistories to delete
     */
    where?: MatchHistoryWhereInput
    /**
     * Limit how many MatchHistories to delete.
     */
    limit?: number
  }

  /**
   * MatchHistory without action
   */
  export type MatchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: MatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: MatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistoryInclude<ExtArgs> | null
  }


  /**
   * Model MatchFeedback
   */

  export type AggregateMatchFeedback = {
    _count: MatchFeedbackCountAggregateOutputType | null
    _avg: MatchFeedbackAvgAggregateOutputType | null
    _sum: MatchFeedbackSumAggregateOutputType | null
    _min: MatchFeedbackMinAggregateOutputType | null
    _max: MatchFeedbackMaxAggregateOutputType | null
  }

  export type MatchFeedbackAvgAggregateOutputType = {
    rating: number | null
  }

  export type MatchFeedbackSumAggregateOutputType = {
    rating: number | null
  }

  export type MatchFeedbackMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    givenByUserId: string | null
    givenToUserId: string | null
    rating: number | null
    feedbackText: string | null
    wasGoodMatch: boolean | null
    wouldMatchAgain: boolean | null
    hasMet: boolean | null
    meetingDateTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchFeedbackMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    givenByUserId: string | null
    givenToUserId: string | null
    rating: number | null
    feedbackText: string | null
    wasGoodMatch: boolean | null
    wouldMatchAgain: boolean | null
    hasMet: boolean | null
    meetingDateTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchFeedbackCountAggregateOutputType = {
    id: number
    matchId: number
    givenByUserId: number
    givenToUserId: number
    rating: number
    feedbackText: number
    wasGoodMatch: number
    wouldMatchAgain: number
    hasMet: number
    meetingDateTime: number
    feedbackCategories: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchFeedbackAvgAggregateInputType = {
    rating?: true
  }

  export type MatchFeedbackSumAggregateInputType = {
    rating?: true
  }

  export type MatchFeedbackMinAggregateInputType = {
    id?: true
    matchId?: true
    givenByUserId?: true
    givenToUserId?: true
    rating?: true
    feedbackText?: true
    wasGoodMatch?: true
    wouldMatchAgain?: true
    hasMet?: true
    meetingDateTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchFeedbackMaxAggregateInputType = {
    id?: true
    matchId?: true
    givenByUserId?: true
    givenToUserId?: true
    rating?: true
    feedbackText?: true
    wasGoodMatch?: true
    wouldMatchAgain?: true
    hasMet?: true
    meetingDateTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchFeedbackCountAggregateInputType = {
    id?: true
    matchId?: true
    givenByUserId?: true
    givenToUserId?: true
    rating?: true
    feedbackText?: true
    wasGoodMatch?: true
    wouldMatchAgain?: true
    hasMet?: true
    meetingDateTime?: true
    feedbackCategories?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchFeedback to aggregate.
     */
    where?: MatchFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFeedbacks to fetch.
     */
    orderBy?: MatchFeedbackOrderByWithRelationInput | MatchFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchFeedbacks
    **/
    _count?: true | MatchFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchFeedbackMaxAggregateInputType
  }

  export type GetMatchFeedbackAggregateType<T extends MatchFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchFeedback[P]>
      : GetScalarType<T[P], AggregateMatchFeedback[P]>
  }




  export type MatchFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchFeedbackWhereInput
    orderBy?: MatchFeedbackOrderByWithAggregationInput | MatchFeedbackOrderByWithAggregationInput[]
    by: MatchFeedbackScalarFieldEnum[] | MatchFeedbackScalarFieldEnum
    having?: MatchFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchFeedbackCountAggregateInputType | true
    _avg?: MatchFeedbackAvgAggregateInputType
    _sum?: MatchFeedbackSumAggregateInputType
    _min?: MatchFeedbackMinAggregateInputType
    _max?: MatchFeedbackMaxAggregateInputType
  }

  export type MatchFeedbackGroupByOutputType = {
    id: string
    matchId: string
    givenByUserId: string
    givenToUserId: string
    rating: number
    feedbackText: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet: boolean
    meetingDateTime: Date | null
    feedbackCategories: string[]
    createdAt: Date
    updatedAt: Date
    _count: MatchFeedbackCountAggregateOutputType | null
    _avg: MatchFeedbackAvgAggregateOutputType | null
    _sum: MatchFeedbackSumAggregateOutputType | null
    _min: MatchFeedbackMinAggregateOutputType | null
    _max: MatchFeedbackMaxAggregateOutputType | null
  }

  type GetMatchFeedbackGroupByPayload<T extends MatchFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], MatchFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type MatchFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    givenByUserId?: boolean
    givenToUserId?: boolean
    rating?: boolean
    feedbackText?: boolean
    wasGoodMatch?: boolean
    wouldMatchAgain?: boolean
    hasMet?: boolean
    meetingDateTime?: boolean
    feedbackCategories?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    givenByUser?: boolean | UserDefaultArgs<ExtArgs>
    givenToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchFeedback"]>

  export type MatchFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    givenByUserId?: boolean
    givenToUserId?: boolean
    rating?: boolean
    feedbackText?: boolean
    wasGoodMatch?: boolean
    wouldMatchAgain?: boolean
    hasMet?: boolean
    meetingDateTime?: boolean
    feedbackCategories?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    givenByUser?: boolean | UserDefaultArgs<ExtArgs>
    givenToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchFeedback"]>

  export type MatchFeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    givenByUserId?: boolean
    givenToUserId?: boolean
    rating?: boolean
    feedbackText?: boolean
    wasGoodMatch?: boolean
    wouldMatchAgain?: boolean
    hasMet?: boolean
    meetingDateTime?: boolean
    feedbackCategories?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    givenByUser?: boolean | UserDefaultArgs<ExtArgs>
    givenToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchFeedback"]>

  export type MatchFeedbackSelectScalar = {
    id?: boolean
    matchId?: boolean
    givenByUserId?: boolean
    givenToUserId?: boolean
    rating?: boolean
    feedbackText?: boolean
    wasGoodMatch?: boolean
    wouldMatchAgain?: boolean
    hasMet?: boolean
    meetingDateTime?: boolean
    feedbackCategories?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "givenByUserId" | "givenToUserId" | "rating" | "feedbackText" | "wasGoodMatch" | "wouldMatchAgain" | "hasMet" | "meetingDateTime" | "feedbackCategories" | "createdAt" | "updatedAt", ExtArgs["result"]["matchFeedback"]>
  export type MatchFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    givenByUser?: boolean | UserDefaultArgs<ExtArgs>
    givenToUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    givenByUser?: boolean | UserDefaultArgs<ExtArgs>
    givenToUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchFeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    givenByUser?: boolean | UserDefaultArgs<ExtArgs>
    givenToUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchFeedback"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      givenByUser: Prisma.$UserPayload<ExtArgs>
      givenToUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      givenByUserId: string
      givenToUserId: string
      rating: number
      feedbackText: string | null
      wasGoodMatch: boolean
      wouldMatchAgain: boolean
      hasMet: boolean
      meetingDateTime: Date | null
      feedbackCategories: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchFeedback"]>
    composites: {}
  }

  type MatchFeedbackGetPayload<S extends boolean | null | undefined | MatchFeedbackDefaultArgs> = $Result.GetResult<Prisma.$MatchFeedbackPayload, S>

  type MatchFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchFeedbackCountAggregateInputType | true
    }

  export interface MatchFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchFeedback'], meta: { name: 'MatchFeedback' } }
    /**
     * Find zero or one MatchFeedback that matches the filter.
     * @param {MatchFeedbackFindUniqueArgs} args - Arguments to find a MatchFeedback
     * @example
     * // Get one MatchFeedback
     * const matchFeedback = await prisma.matchFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFeedbackFindUniqueArgs>(args: SelectSubset<T, MatchFeedbackFindUniqueArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFeedbackFindUniqueOrThrowArgs} args - Arguments to find a MatchFeedback
     * @example
     * // Get one MatchFeedback
     * const matchFeedback = await prisma.matchFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFeedbackFindFirstArgs} args - Arguments to find a MatchFeedback
     * @example
     * // Get one MatchFeedback
     * const matchFeedback = await prisma.matchFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFeedbackFindFirstArgs>(args?: SelectSubset<T, MatchFeedbackFindFirstArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFeedbackFindFirstOrThrowArgs} args - Arguments to find a MatchFeedback
     * @example
     * // Get one MatchFeedback
     * const matchFeedback = await prisma.matchFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchFeedbacks
     * const matchFeedbacks = await prisma.matchFeedback.findMany()
     * 
     * // Get first 10 MatchFeedbacks
     * const matchFeedbacks = await prisma.matchFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchFeedbackWithIdOnly = await prisma.matchFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFeedbackFindManyArgs>(args?: SelectSubset<T, MatchFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchFeedback.
     * @param {MatchFeedbackCreateArgs} args - Arguments to create a MatchFeedback.
     * @example
     * // Create one MatchFeedback
     * const MatchFeedback = await prisma.matchFeedback.create({
     *   data: {
     *     // ... data to create a MatchFeedback
     *   }
     * })
     * 
     */
    create<T extends MatchFeedbackCreateArgs>(args: SelectSubset<T, MatchFeedbackCreateArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchFeedbacks.
     * @param {MatchFeedbackCreateManyArgs} args - Arguments to create many MatchFeedbacks.
     * @example
     * // Create many MatchFeedbacks
     * const matchFeedback = await prisma.matchFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchFeedbackCreateManyArgs>(args?: SelectSubset<T, MatchFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchFeedbacks and returns the data saved in the database.
     * @param {MatchFeedbackCreateManyAndReturnArgs} args - Arguments to create many MatchFeedbacks.
     * @example
     * // Create many MatchFeedbacks
     * const matchFeedback = await prisma.matchFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchFeedbacks and only return the `id`
     * const matchFeedbackWithIdOnly = await prisma.matchFeedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchFeedback.
     * @param {MatchFeedbackDeleteArgs} args - Arguments to delete one MatchFeedback.
     * @example
     * // Delete one MatchFeedback
     * const MatchFeedback = await prisma.matchFeedback.delete({
     *   where: {
     *     // ... filter to delete one MatchFeedback
     *   }
     * })
     * 
     */
    delete<T extends MatchFeedbackDeleteArgs>(args: SelectSubset<T, MatchFeedbackDeleteArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchFeedback.
     * @param {MatchFeedbackUpdateArgs} args - Arguments to update one MatchFeedback.
     * @example
     * // Update one MatchFeedback
     * const matchFeedback = await prisma.matchFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchFeedbackUpdateArgs>(args: SelectSubset<T, MatchFeedbackUpdateArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchFeedbacks.
     * @param {MatchFeedbackDeleteManyArgs} args - Arguments to filter MatchFeedbacks to delete.
     * @example
     * // Delete a few MatchFeedbacks
     * const { count } = await prisma.matchFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchFeedbackDeleteManyArgs>(args?: SelectSubset<T, MatchFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchFeedbacks
     * const matchFeedback = await prisma.matchFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchFeedbackUpdateManyArgs>(args: SelectSubset<T, MatchFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchFeedbacks and returns the data updated in the database.
     * @param {MatchFeedbackUpdateManyAndReturnArgs} args - Arguments to update many MatchFeedbacks.
     * @example
     * // Update many MatchFeedbacks
     * const matchFeedback = await prisma.matchFeedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchFeedbacks and only return the `id`
     * const matchFeedbackWithIdOnly = await prisma.matchFeedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchFeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchFeedback.
     * @param {MatchFeedbackUpsertArgs} args - Arguments to update or create a MatchFeedback.
     * @example
     * // Update or create a MatchFeedback
     * const matchFeedback = await prisma.matchFeedback.upsert({
     *   create: {
     *     // ... data to create a MatchFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchFeedback we want to update
     *   }
     * })
     */
    upsert<T extends MatchFeedbackUpsertArgs>(args: SelectSubset<T, MatchFeedbackUpsertArgs<ExtArgs>>): Prisma__MatchFeedbackClient<$Result.GetResult<Prisma.$MatchFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFeedbackCountArgs} args - Arguments to filter MatchFeedbacks to count.
     * @example
     * // Count the number of MatchFeedbacks
     * const count = await prisma.matchFeedback.count({
     *   where: {
     *     // ... the filter for the MatchFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends MatchFeedbackCountArgs>(
      args?: Subset<T, MatchFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchFeedbackAggregateArgs>(args: Subset<T, MatchFeedbackAggregateArgs>): Prisma.PrismaPromise<GetMatchFeedbackAggregateType<T>>

    /**
     * Group by MatchFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFeedbackGroupByArgs} args - Group by arguments.
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
      T extends MatchFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: MatchFeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchFeedback model
   */
  readonly fields: MatchFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    givenByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    givenToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchFeedback model
   */
  interface MatchFeedbackFieldRefs {
    readonly id: FieldRef<"MatchFeedback", 'String'>
    readonly matchId: FieldRef<"MatchFeedback", 'String'>
    readonly givenByUserId: FieldRef<"MatchFeedback", 'String'>
    readonly givenToUserId: FieldRef<"MatchFeedback", 'String'>
    readonly rating: FieldRef<"MatchFeedback", 'Int'>
    readonly feedbackText: FieldRef<"MatchFeedback", 'String'>
    readonly wasGoodMatch: FieldRef<"MatchFeedback", 'Boolean'>
    readonly wouldMatchAgain: FieldRef<"MatchFeedback", 'Boolean'>
    readonly hasMet: FieldRef<"MatchFeedback", 'Boolean'>
    readonly meetingDateTime: FieldRef<"MatchFeedback", 'DateTime'>
    readonly feedbackCategories: FieldRef<"MatchFeedback", 'String[]'>
    readonly createdAt: FieldRef<"MatchFeedback", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchFeedback findUnique
   */
  export type MatchFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MatchFeedback to fetch.
     */
    where: MatchFeedbackWhereUniqueInput
  }

  /**
   * MatchFeedback findUniqueOrThrow
   */
  export type MatchFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MatchFeedback to fetch.
     */
    where: MatchFeedbackWhereUniqueInput
  }

  /**
   * MatchFeedback findFirst
   */
  export type MatchFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MatchFeedback to fetch.
     */
    where?: MatchFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFeedbacks to fetch.
     */
    orderBy?: MatchFeedbackOrderByWithRelationInput | MatchFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchFeedbacks.
     */
    cursor?: MatchFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchFeedbacks.
     */
    distinct?: MatchFeedbackScalarFieldEnum | MatchFeedbackScalarFieldEnum[]
  }

  /**
   * MatchFeedback findFirstOrThrow
   */
  export type MatchFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MatchFeedback to fetch.
     */
    where?: MatchFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFeedbacks to fetch.
     */
    orderBy?: MatchFeedbackOrderByWithRelationInput | MatchFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchFeedbacks.
     */
    cursor?: MatchFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchFeedbacks.
     */
    distinct?: MatchFeedbackScalarFieldEnum | MatchFeedbackScalarFieldEnum[]
  }

  /**
   * MatchFeedback findMany
   */
  export type MatchFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MatchFeedbacks to fetch.
     */
    where?: MatchFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFeedbacks to fetch.
     */
    orderBy?: MatchFeedbackOrderByWithRelationInput | MatchFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchFeedbacks.
     */
    cursor?: MatchFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFeedbacks.
     */
    skip?: number
    distinct?: MatchFeedbackScalarFieldEnum | MatchFeedbackScalarFieldEnum[]
  }

  /**
   * MatchFeedback create
   */
  export type MatchFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchFeedback.
     */
    data: XOR<MatchFeedbackCreateInput, MatchFeedbackUncheckedCreateInput>
  }

  /**
   * MatchFeedback createMany
   */
  export type MatchFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchFeedbacks.
     */
    data: MatchFeedbackCreateManyInput | MatchFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchFeedback createManyAndReturn
   */
  export type MatchFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many MatchFeedbacks.
     */
    data: MatchFeedbackCreateManyInput | MatchFeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchFeedback update
   */
  export type MatchFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchFeedback.
     */
    data: XOR<MatchFeedbackUpdateInput, MatchFeedbackUncheckedUpdateInput>
    /**
     * Choose, which MatchFeedback to update.
     */
    where: MatchFeedbackWhereUniqueInput
  }

  /**
   * MatchFeedback updateMany
   */
  export type MatchFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchFeedbacks.
     */
    data: XOR<MatchFeedbackUpdateManyMutationInput, MatchFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which MatchFeedbacks to update
     */
    where?: MatchFeedbackWhereInput
    /**
     * Limit how many MatchFeedbacks to update.
     */
    limit?: number
  }

  /**
   * MatchFeedback updateManyAndReturn
   */
  export type MatchFeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * The data used to update MatchFeedbacks.
     */
    data: XOR<MatchFeedbackUpdateManyMutationInput, MatchFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which MatchFeedbacks to update
     */
    where?: MatchFeedbackWhereInput
    /**
     * Limit how many MatchFeedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchFeedback upsert
   */
  export type MatchFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchFeedback to update in case it exists.
     */
    where: MatchFeedbackWhereUniqueInput
    /**
     * In case the MatchFeedback found by the `where` argument doesn't exist, create a new MatchFeedback with this data.
     */
    create: XOR<MatchFeedbackCreateInput, MatchFeedbackUncheckedCreateInput>
    /**
     * In case the MatchFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchFeedbackUpdateInput, MatchFeedbackUncheckedUpdateInput>
  }

  /**
   * MatchFeedback delete
   */
  export type MatchFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
    /**
     * Filter which MatchFeedback to delete.
     */
    where: MatchFeedbackWhereUniqueInput
  }

  /**
   * MatchFeedback deleteMany
   */
  export type MatchFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchFeedbacks to delete
     */
    where?: MatchFeedbackWhereInput
    /**
     * Limit how many MatchFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * MatchFeedback without action
   */
  export type MatchFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFeedback
     */
    select?: MatchFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFeedback
     */
    omit?: MatchFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type SystemConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "updatedAt" | "updatedBy", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      updatedAt: Date
      updatedBy: string | null
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
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
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly key: FieldRef<"SystemConfig", 'String'>
    readonly value: FieldRef<"SystemConfig", 'String'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedBy: FieldRef<"SystemConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    matchCooldownDays: 'matchCooldownDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillText: 'skillText',
    experienceLevel: 'experienceLevel',
    yearsOfExperience: 'yearsOfExperience',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    preferenceText: 'preferenceText',
    priority: 'priority',
    isRequired: 'isRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    externalMatchId: 'externalMatchId',
    matchScore: 'matchScore',
    matchReason: 'matchReason',
    status: 'status',
    matchedAt: 'matchedAt',
    expiresAt: 'expiresAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MatchHistoryScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    matchedAt: 'matchedAt',
    cooldownUntil: 'cooldownUntil',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MatchHistoryScalarFieldEnum = (typeof MatchHistoryScalarFieldEnum)[keyof typeof MatchHistoryScalarFieldEnum]


  export const MatchFeedbackScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    givenByUserId: 'givenByUserId',
    givenToUserId: 'givenToUserId',
    rating: 'rating',
    feedbackText: 'feedbackText',
    wasGoodMatch: 'wasGoodMatch',
    wouldMatchAgain: 'wouldMatchAgain',
    hasMet: 'hasMet',
    meetingDateTime: 'meetingDateTime',
    feedbackCategories: 'feedbackCategories',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchFeedbackScalarFieldEnum = (typeof MatchFeedbackScalarFieldEnum)[keyof typeof MatchFeedbackScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExperienceLevel'
   */
  export type EnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel'>
    


  /**
   * Reference to a field of type 'ExperienceLevel[]'
   */
  export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'MatchHistoryStatus'
   */
  export type EnumMatchHistoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchHistoryStatus'>
    


  /**
   * Reference to a field of type 'MatchHistoryStatus[]'
   */
  export type ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchHistoryStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    matchCooldownDays?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skills?: UserSkillListRelationFilter
    preferences?: UserPreferenceListRelationFilter
    matchesAsUser1?: MatchListRelationFilter
    matchesAsUser2?: MatchListRelationFilter
    feedbackGiven?: MatchFeedbackListRelationFilter
    feedbackReceived?: MatchFeedbackListRelationFilter
    matchHistoryAsUser1?: MatchHistoryListRelationFilter
    matchHistoryAsUser2?: MatchHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    matchCooldownDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: UserSkillOrderByRelationAggregateInput
    preferences?: UserPreferenceOrderByRelationAggregateInput
    matchesAsUser1?: MatchOrderByRelationAggregateInput
    matchesAsUser2?: MatchOrderByRelationAggregateInput
    feedbackGiven?: MatchFeedbackOrderByRelationAggregateInput
    feedbackReceived?: MatchFeedbackOrderByRelationAggregateInput
    matchHistoryAsUser1?: MatchHistoryOrderByRelationAggregateInput
    matchHistoryAsUser2?: MatchHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    matchCooldownDays?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skills?: UserSkillListRelationFilter
    preferences?: UserPreferenceListRelationFilter
    matchesAsUser1?: MatchListRelationFilter
    matchesAsUser2?: MatchListRelationFilter
    feedbackGiven?: MatchFeedbackListRelationFilter
    feedbackReceived?: MatchFeedbackListRelationFilter
    matchHistoryAsUser1?: MatchHistoryListRelationFilter
    matchHistoryAsUser2?: MatchHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    matchCooldownDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    matchCooldownDays?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: StringFilter<"UserSkill"> | string
    skillText?: StringFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelFilter<"UserSkill"> | $Enums.ExperienceLevel
    yearsOfExperience?: IntNullableFilter<"UserSkill"> | number | null
    isPrimary?: BoolFilter<"UserSkill"> | boolean
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillText?: SortOrder
    experienceLevel?: SortOrder
    yearsOfExperience?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    userId?: StringFilter<"UserSkill"> | string
    skillText?: StringFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelFilter<"UserSkill"> | $Enums.ExperienceLevel
    yearsOfExperience?: IntNullableFilter<"UserSkill"> | number | null
    isPrimary?: BoolFilter<"UserSkill"> | boolean
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillText?: SortOrder
    experienceLevel?: SortOrder
    yearsOfExperience?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillCountOrderByAggregateInput
    _avg?: UserSkillAvgOrderByAggregateInput
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
    _sum?: UserSkillSumOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkill"> | string
    userId?: StringWithAggregatesFilter<"UserSkill"> | string
    skillText?: StringWithAggregatesFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelWithAggregatesFilter<"UserSkill"> | $Enums.ExperienceLevel
    yearsOfExperience?: IntNullableWithAggregatesFilter<"UserSkill"> | number | null
    isPrimary?: BoolWithAggregatesFilter<"UserSkill"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: StringFilter<"UserPreference"> | string
    userId?: StringFilter<"UserPreference"> | string
    preferenceText?: StringFilter<"UserPreference"> | string
    priority?: IntFilter<"UserPreference"> | number
    isRequired?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    preferenceText?: SortOrder
    priority?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    userId?: StringFilter<"UserPreference"> | string
    preferenceText?: StringFilter<"UserPreference"> | string
    priority?: IntFilter<"UserPreference"> | number
    isRequired?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    preferenceText?: SortOrder
    priority?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _avg?: UserPreferenceAvgOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
    _sum?: UserPreferenceSumOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreference"> | string
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
    preferenceText?: StringWithAggregatesFilter<"UserPreference"> | string
    priority?: IntWithAggregatesFilter<"UserPreference"> | number
    isRequired?: BoolWithAggregatesFilter<"UserPreference"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    user1Id?: StringFilter<"Match"> | string
    user2Id?: StringFilter<"Match"> | string
    externalMatchId?: StringNullableFilter<"Match"> | string | null
    matchScore?: FloatNullableFilter<"Match"> | number | null
    matchReason?: StringNullableFilter<"Match"> | string | null
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    matchedAt?: DateTimeFilter<"Match"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchHistory?: MatchHistoryListRelationFilter
    feedback?: MatchFeedbackListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    externalMatchId?: SortOrderInput | SortOrder
    matchScore?: SortOrderInput | SortOrder
    matchReason?: SortOrderInput | SortOrder
    status?: SortOrder
    matchedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    matchHistory?: MatchHistoryOrderByRelationAggregateInput
    feedback?: MatchFeedbackOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    user1Id?: StringFilter<"Match"> | string
    user2Id?: StringFilter<"Match"> | string
    externalMatchId?: StringNullableFilter<"Match"> | string | null
    matchScore?: FloatNullableFilter<"Match"> | number | null
    matchReason?: StringNullableFilter<"Match"> | string | null
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    matchedAt?: DateTimeFilter<"Match"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchHistory?: MatchHistoryListRelationFilter
    feedback?: MatchFeedbackListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    externalMatchId?: SortOrderInput | SortOrder
    matchScore?: SortOrderInput | SortOrder
    matchReason?: SortOrderInput | SortOrder
    status?: SortOrder
    matchedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    user1Id?: StringWithAggregatesFilter<"Match"> | string
    user2Id?: StringWithAggregatesFilter<"Match"> | string
    externalMatchId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    matchScore?: FloatNullableWithAggregatesFilter<"Match"> | number | null
    matchReason?: StringNullableWithAggregatesFilter<"Match"> | string | null
    status?: EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus
    matchedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type MatchHistoryWhereInput = {
    AND?: MatchHistoryWhereInput | MatchHistoryWhereInput[]
    OR?: MatchHistoryWhereInput[]
    NOT?: MatchHistoryWhereInput | MatchHistoryWhereInput[]
    id?: StringFilter<"MatchHistory"> | string
    matchId?: StringFilter<"MatchHistory"> | string
    user1Id?: StringFilter<"MatchHistory"> | string
    user2Id?: StringFilter<"MatchHistory"> | string
    matchedAt?: DateTimeFilter<"MatchHistory"> | Date | string
    cooldownUntil?: DateTimeFilter<"MatchHistory"> | Date | string
    status?: EnumMatchHistoryStatusFilter<"MatchHistory"> | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFilter<"MatchHistory"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    matchedAt?: SortOrder
    cooldownUntil?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
  }

  export type MatchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchHistoryWhereInput | MatchHistoryWhereInput[]
    OR?: MatchHistoryWhereInput[]
    NOT?: MatchHistoryWhereInput | MatchHistoryWhereInput[]
    matchId?: StringFilter<"MatchHistory"> | string
    user1Id?: StringFilter<"MatchHistory"> | string
    user2Id?: StringFilter<"MatchHistory"> | string
    matchedAt?: DateTimeFilter<"MatchHistory"> | Date | string
    cooldownUntil?: DateTimeFilter<"MatchHistory"> | Date | string
    status?: EnumMatchHistoryStatusFilter<"MatchHistory"> | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFilter<"MatchHistory"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    matchedAt?: SortOrder
    cooldownUntil?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MatchHistoryCountOrderByAggregateInput
    _max?: MatchHistoryMaxOrderByAggregateInput
    _min?: MatchHistoryMinOrderByAggregateInput
  }

  export type MatchHistoryScalarWhereWithAggregatesInput = {
    AND?: MatchHistoryScalarWhereWithAggregatesInput | MatchHistoryScalarWhereWithAggregatesInput[]
    OR?: MatchHistoryScalarWhereWithAggregatesInput[]
    NOT?: MatchHistoryScalarWhereWithAggregatesInput | MatchHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchHistory"> | string
    matchId?: StringWithAggregatesFilter<"MatchHistory"> | string
    user1Id?: StringWithAggregatesFilter<"MatchHistory"> | string
    user2Id?: StringWithAggregatesFilter<"MatchHistory"> | string
    matchedAt?: DateTimeWithAggregatesFilter<"MatchHistory"> | Date | string
    cooldownUntil?: DateTimeWithAggregatesFilter<"MatchHistory"> | Date | string
    status?: EnumMatchHistoryStatusWithAggregatesFilter<"MatchHistory"> | $Enums.MatchHistoryStatus
    createdAt?: DateTimeWithAggregatesFilter<"MatchHistory"> | Date | string
  }

  export type MatchFeedbackWhereInput = {
    AND?: MatchFeedbackWhereInput | MatchFeedbackWhereInput[]
    OR?: MatchFeedbackWhereInput[]
    NOT?: MatchFeedbackWhereInput | MatchFeedbackWhereInput[]
    id?: StringFilter<"MatchFeedback"> | string
    matchId?: StringFilter<"MatchFeedback"> | string
    givenByUserId?: StringFilter<"MatchFeedback"> | string
    givenToUserId?: StringFilter<"MatchFeedback"> | string
    rating?: IntFilter<"MatchFeedback"> | number
    feedbackText?: StringNullableFilter<"MatchFeedback"> | string | null
    wasGoodMatch?: BoolFilter<"MatchFeedback"> | boolean
    wouldMatchAgain?: BoolFilter<"MatchFeedback"> | boolean
    hasMet?: BoolFilter<"MatchFeedback"> | boolean
    meetingDateTime?: DateTimeNullableFilter<"MatchFeedback"> | Date | string | null
    feedbackCategories?: StringNullableListFilter<"MatchFeedback">
    createdAt?: DateTimeFilter<"MatchFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"MatchFeedback"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    givenByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    givenToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    givenByUserId?: SortOrder
    givenToUserId?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrderInput | SortOrder
    wasGoodMatch?: SortOrder
    wouldMatchAgain?: SortOrder
    hasMet?: SortOrder
    meetingDateTime?: SortOrderInput | SortOrder
    feedbackCategories?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    givenByUser?: UserOrderByWithRelationInput
    givenToUser?: UserOrderByWithRelationInput
  }

  export type MatchFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId_givenByUserId?: MatchFeedbackMatchIdGivenByUserIdCompoundUniqueInput
    AND?: MatchFeedbackWhereInput | MatchFeedbackWhereInput[]
    OR?: MatchFeedbackWhereInput[]
    NOT?: MatchFeedbackWhereInput | MatchFeedbackWhereInput[]
    matchId?: StringFilter<"MatchFeedback"> | string
    givenByUserId?: StringFilter<"MatchFeedback"> | string
    givenToUserId?: StringFilter<"MatchFeedback"> | string
    rating?: IntFilter<"MatchFeedback"> | number
    feedbackText?: StringNullableFilter<"MatchFeedback"> | string | null
    wasGoodMatch?: BoolFilter<"MatchFeedback"> | boolean
    wouldMatchAgain?: BoolFilter<"MatchFeedback"> | boolean
    hasMet?: BoolFilter<"MatchFeedback"> | boolean
    meetingDateTime?: DateTimeNullableFilter<"MatchFeedback"> | Date | string | null
    feedbackCategories?: StringNullableListFilter<"MatchFeedback">
    createdAt?: DateTimeFilter<"MatchFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"MatchFeedback"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    givenByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    givenToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "matchId_givenByUserId">

  export type MatchFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    givenByUserId?: SortOrder
    givenToUserId?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrderInput | SortOrder
    wasGoodMatch?: SortOrder
    wouldMatchAgain?: SortOrder
    hasMet?: SortOrder
    meetingDateTime?: SortOrderInput | SortOrder
    feedbackCategories?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchFeedbackCountOrderByAggregateInput
    _avg?: MatchFeedbackAvgOrderByAggregateInput
    _max?: MatchFeedbackMaxOrderByAggregateInput
    _min?: MatchFeedbackMinOrderByAggregateInput
    _sum?: MatchFeedbackSumOrderByAggregateInput
  }

  export type MatchFeedbackScalarWhereWithAggregatesInput = {
    AND?: MatchFeedbackScalarWhereWithAggregatesInput | MatchFeedbackScalarWhereWithAggregatesInput[]
    OR?: MatchFeedbackScalarWhereWithAggregatesInput[]
    NOT?: MatchFeedbackScalarWhereWithAggregatesInput | MatchFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchFeedback"> | string
    matchId?: StringWithAggregatesFilter<"MatchFeedback"> | string
    givenByUserId?: StringWithAggregatesFilter<"MatchFeedback"> | string
    givenToUserId?: StringWithAggregatesFilter<"MatchFeedback"> | string
    rating?: IntWithAggregatesFilter<"MatchFeedback"> | number
    feedbackText?: StringNullableWithAggregatesFilter<"MatchFeedback"> | string | null
    wasGoodMatch?: BoolWithAggregatesFilter<"MatchFeedback"> | boolean
    wouldMatchAgain?: BoolWithAggregatesFilter<"MatchFeedback"> | boolean
    hasMet?: BoolWithAggregatesFilter<"MatchFeedback"> | boolean
    meetingDateTime?: DateTimeNullableWithAggregatesFilter<"MatchFeedback"> | Date | string | null
    feedbackCategories?: StringNullableListFilter<"MatchFeedback">
    createdAt?: DateTimeWithAggregatesFilter<"MatchFeedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchFeedback"> | Date | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: StringFilter<"SystemConfig"> | string
    key?: StringFilter<"SystemConfig"> | string
    value?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedBy?: StringNullableFilter<"SystemConfig"> | string | null
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    value?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedBy?: StringNullableFilter<"SystemConfig"> | string | null
  }, "id" | "key">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemConfig"> | string
    key?: StringWithAggregatesFilter<"SystemConfig"> | string
    value?: StringWithAggregatesFilter<"SystemConfig"> | string
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateInput = {
    id?: string
    skillText: string
    experienceLevel: $Enums.ExperienceLevel
    yearsOfExperience?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type UserSkillUncheckedCreateInput = {
    id?: string
    userId: string
    skillText: string
    experienceLevel: $Enums.ExperienceLevel
    yearsOfExperience?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillText?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillText?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyInput = {
    id?: string
    userId: string
    skillText: string
    experienceLevel: $Enums.ExperienceLevel
    yearsOfExperience?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillText?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillText?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateInput = {
    id?: string
    preferenceText: string
    priority?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    preferenceText: string
    priority?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceText?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferenceText?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: string
    userId: string
    preferenceText: string
    priority?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceText?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferenceText?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user1: UserCreateNestedOneWithoutMatchesAsUser1Input
    user2: UserCreateNestedOneWithoutMatchesAsUser2Input
    matchHistory?: MatchHistoryCreateNestedManyWithoutMatchInput
    feedback?: MatchFeedbackCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    user1Id: string
    user2Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchHistory?: MatchHistoryUncheckedCreateNestedManyWithoutMatchInput
    feedback?: MatchFeedbackUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput
    matchHistory?: MatchHistoryUpdateManyWithoutMatchNestedInput
    feedback?: MatchFeedbackUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchHistory?: MatchHistoryUncheckedUpdateManyWithoutMatchNestedInput
    feedback?: MatchFeedbackUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    user1Id: string
    user2Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryCreateInput = {
    id?: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchHistoryInput
    user1: UserCreateNestedOneWithoutMatchHistoryAsUser1Input
    user2: UserCreateNestedOneWithoutMatchHistoryAsUser2Input
  }

  export type MatchHistoryUncheckedCreateInput = {
    id?: string
    matchId: string
    user1Id: string
    user2Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type MatchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchHistoryNestedInput
    user1?: UserUpdateOneRequiredWithoutMatchHistoryAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatchHistoryAsUser2NestedInput
  }

  export type MatchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryCreateManyInput = {
    id?: string
    matchId: string
    user1Id: string
    user2Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type MatchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackCreateInput = {
    id?: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutFeedbackInput
    givenByUser: UserCreateNestedOneWithoutFeedbackGivenInput
    givenToUser: UserCreateNestedOneWithoutFeedbackReceivedInput
  }

  export type MatchFeedbackUncheckedCreateInput = {
    id?: string
    matchId: string
    givenByUserId: string
    givenToUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutFeedbackNestedInput
    givenByUser?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput
    givenToUser?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput
  }

  export type MatchFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    givenByUserId?: StringFieldUpdateOperationsInput | string
    givenToUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackCreateManyInput = {
    id?: string
    matchId: string
    givenByUserId: string
    givenToUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    givenByUserId?: StringFieldUpdateOperationsInput | string
    givenToUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserSkillListRelationFilter = {
    every?: UserSkillWhereInput
    some?: UserSkillWhereInput
    none?: UserSkillWhereInput
  }

  export type UserPreferenceListRelationFilter = {
    every?: UserPreferenceWhereInput
    some?: UserPreferenceWhereInput
    none?: UserPreferenceWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchFeedbackListRelationFilter = {
    every?: MatchFeedbackWhereInput
    some?: MatchFeedbackWhereInput
    none?: MatchFeedbackWhereInput
  }

  export type MatchHistoryListRelationFilter = {
    every?: MatchHistoryWhereInput
    some?: MatchHistoryWhereInput
    none?: MatchHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    matchCooldownDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    matchCooldownDays?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    matchCooldownDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    matchCooldownDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    matchCooldownDays?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillText?: SortOrder
    experienceLevel?: SortOrder
    yearsOfExperience?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillAvgOrderByAggregateInput = {
    yearsOfExperience?: SortOrder
  }

  export type UserSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillText?: SortOrder
    experienceLevel?: SortOrder
    yearsOfExperience?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillText?: SortOrder
    experienceLevel?: SortOrder
    yearsOfExperience?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillSumOrderByAggregateInput = {
    yearsOfExperience?: SortOrder
  }

  export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
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

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    preferenceText?: SortOrder
    priority?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    preferenceText?: SortOrder
    priority?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    preferenceText?: SortOrder
    priority?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
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

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    externalMatchId?: SortOrder
    matchScore?: SortOrder
    matchReason?: SortOrder
    status?: SortOrder
    matchedAt?: SortOrder
    expiresAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    externalMatchId?: SortOrder
    matchScore?: SortOrder
    matchReason?: SortOrder
    status?: SortOrder
    matchedAt?: SortOrder
    expiresAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    externalMatchId?: SortOrder
    matchScore?: SortOrder
    matchReason?: SortOrder
    status?: SortOrder
    matchedAt?: SortOrder
    expiresAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
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

  export type EnumMatchHistoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchHistoryStatus | EnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchHistoryStatusFilter<$PrismaModel> | $Enums.MatchHistoryStatus
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MatchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    matchedAt?: SortOrder
    cooldownUntil?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    matchedAt?: SortOrder
    cooldownUntil?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    matchedAt?: SortOrder
    cooldownUntil?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMatchHistoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchHistoryStatus | EnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchHistoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchHistoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchHistoryStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchHistoryStatusFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MatchFeedbackMatchIdGivenByUserIdCompoundUniqueInput = {
    matchId: string
    givenByUserId: string
  }

  export type MatchFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    givenByUserId?: SortOrder
    givenToUserId?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrder
    wasGoodMatch?: SortOrder
    wouldMatchAgain?: SortOrder
    hasMet?: SortOrder
    meetingDateTime?: SortOrder
    feedbackCategories?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchFeedbackAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type MatchFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    givenByUserId?: SortOrder
    givenToUserId?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrder
    wasGoodMatch?: SortOrder
    wouldMatchAgain?: SortOrder
    hasMet?: SortOrder
    meetingDateTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    givenByUserId?: SortOrder
    givenToUserId?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrder
    wasGoodMatch?: SortOrder
    wouldMatchAgain?: SortOrder
    hasMet?: SortOrder
    meetingDateTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchFeedbackSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserSkillCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserPreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchFeedbackCreateNestedManyWithoutGivenByUserInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenByUserInput, MatchFeedbackUncheckedCreateWithoutGivenByUserInput> | MatchFeedbackCreateWithoutGivenByUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenByUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenByUserInput | MatchFeedbackCreateOrConnectWithoutGivenByUserInput[]
    createMany?: MatchFeedbackCreateManyGivenByUserInputEnvelope
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
  }

  export type MatchFeedbackCreateNestedManyWithoutGivenToUserInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenToUserInput, MatchFeedbackUncheckedCreateWithoutGivenToUserInput> | MatchFeedbackCreateWithoutGivenToUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenToUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenToUserInput | MatchFeedbackCreateOrConnectWithoutGivenToUserInput[]
    createMany?: MatchFeedbackCreateManyGivenToUserInputEnvelope
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
  }

  export type MatchHistoryCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchHistoryCreateWithoutUser1Input, MatchHistoryUncheckedCreateWithoutUser1Input> | MatchHistoryCreateWithoutUser1Input[] | MatchHistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser1Input | MatchHistoryCreateOrConnectWithoutUser1Input[]
    createMany?: MatchHistoryCreateManyUser1InputEnvelope
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
  }

  export type MatchHistoryCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchHistoryCreateWithoutUser2Input, MatchHistoryUncheckedCreateWithoutUser2Input> | MatchHistoryCreateWithoutUser2Input[] | MatchHistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser2Input | MatchHistoryCreateOrConnectWithoutUser2Input[]
    createMany?: MatchHistoryCreateManyUser2InputEnvelope
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenByUserInput, MatchFeedbackUncheckedCreateWithoutGivenByUserInput> | MatchFeedbackCreateWithoutGivenByUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenByUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenByUserInput | MatchFeedbackCreateOrConnectWithoutGivenByUserInput[]
    createMany?: MatchFeedbackCreateManyGivenByUserInputEnvelope
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
  }

  export type MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenToUserInput, MatchFeedbackUncheckedCreateWithoutGivenToUserInput> | MatchFeedbackCreateWithoutGivenToUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenToUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenToUserInput | MatchFeedbackCreateOrConnectWithoutGivenToUserInput[]
    createMany?: MatchFeedbackCreateManyGivenToUserInputEnvelope
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
  }

  export type MatchHistoryUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchHistoryCreateWithoutUser1Input, MatchHistoryUncheckedCreateWithoutUser1Input> | MatchHistoryCreateWithoutUser1Input[] | MatchHistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser1Input | MatchHistoryCreateOrConnectWithoutUser1Input[]
    createMany?: MatchHistoryCreateManyUser1InputEnvelope
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
  }

  export type MatchHistoryUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchHistoryCreateWithoutUser2Input, MatchHistoryUncheckedCreateWithoutUser2Input> | MatchHistoryCreateWithoutUser2Input[] | MatchHistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser2Input | MatchHistoryCreateOrConnectWithoutUser2Input[]
    createMany?: MatchHistoryCreateManyUser2InputEnvelope
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserInput | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserInput | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserInput | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserPreferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutUserInput | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutUserInput | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutUserInput | UserPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser1Input | MatchUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser1Input | MatchUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser1Input | MatchUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser2Input | MatchUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser2Input | MatchUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser2Input | MatchUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchFeedbackUpdateManyWithoutGivenByUserNestedInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenByUserInput, MatchFeedbackUncheckedCreateWithoutGivenByUserInput> | MatchFeedbackCreateWithoutGivenByUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenByUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenByUserInput | MatchFeedbackCreateOrConnectWithoutGivenByUserInput[]
    upsert?: MatchFeedbackUpsertWithWhereUniqueWithoutGivenByUserInput | MatchFeedbackUpsertWithWhereUniqueWithoutGivenByUserInput[]
    createMany?: MatchFeedbackCreateManyGivenByUserInputEnvelope
    set?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    disconnect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    delete?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    update?: MatchFeedbackUpdateWithWhereUniqueWithoutGivenByUserInput | MatchFeedbackUpdateWithWhereUniqueWithoutGivenByUserInput[]
    updateMany?: MatchFeedbackUpdateManyWithWhereWithoutGivenByUserInput | MatchFeedbackUpdateManyWithWhereWithoutGivenByUserInput[]
    deleteMany?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
  }

  export type MatchFeedbackUpdateManyWithoutGivenToUserNestedInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenToUserInput, MatchFeedbackUncheckedCreateWithoutGivenToUserInput> | MatchFeedbackCreateWithoutGivenToUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenToUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenToUserInput | MatchFeedbackCreateOrConnectWithoutGivenToUserInput[]
    upsert?: MatchFeedbackUpsertWithWhereUniqueWithoutGivenToUserInput | MatchFeedbackUpsertWithWhereUniqueWithoutGivenToUserInput[]
    createMany?: MatchFeedbackCreateManyGivenToUserInputEnvelope
    set?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    disconnect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    delete?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    update?: MatchFeedbackUpdateWithWhereUniqueWithoutGivenToUserInput | MatchFeedbackUpdateWithWhereUniqueWithoutGivenToUserInput[]
    updateMany?: MatchFeedbackUpdateManyWithWhereWithoutGivenToUserInput | MatchFeedbackUpdateManyWithWhereWithoutGivenToUserInput[]
    deleteMany?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
  }

  export type MatchHistoryUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchHistoryCreateWithoutUser1Input, MatchHistoryUncheckedCreateWithoutUser1Input> | MatchHistoryCreateWithoutUser1Input[] | MatchHistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser1Input | MatchHistoryCreateOrConnectWithoutUser1Input[]
    upsert?: MatchHistoryUpsertWithWhereUniqueWithoutUser1Input | MatchHistoryUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchHistoryCreateManyUser1InputEnvelope
    set?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    disconnect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    delete?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    update?: MatchHistoryUpdateWithWhereUniqueWithoutUser1Input | MatchHistoryUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchHistoryUpdateManyWithWhereWithoutUser1Input | MatchHistoryUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
  }

  export type MatchHistoryUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchHistoryCreateWithoutUser2Input, MatchHistoryUncheckedCreateWithoutUser2Input> | MatchHistoryCreateWithoutUser2Input[] | MatchHistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser2Input | MatchHistoryCreateOrConnectWithoutUser2Input[]
    upsert?: MatchHistoryUpsertWithWhereUniqueWithoutUser2Input | MatchHistoryUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchHistoryCreateManyUser2InputEnvelope
    set?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    disconnect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    delete?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    update?: MatchHistoryUpdateWithWhereUniqueWithoutUser2Input | MatchHistoryUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchHistoryUpdateManyWithWhereWithoutUser2Input | MatchHistoryUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserInput | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserInput | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserInput | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutUserInput | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutUserInput | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutUserInput | UserPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser1Input | MatchUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser1Input | MatchUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser1Input | MatchUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser2Input | MatchUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser2Input | MatchUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser2Input | MatchUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenByUserInput, MatchFeedbackUncheckedCreateWithoutGivenByUserInput> | MatchFeedbackCreateWithoutGivenByUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenByUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenByUserInput | MatchFeedbackCreateOrConnectWithoutGivenByUserInput[]
    upsert?: MatchFeedbackUpsertWithWhereUniqueWithoutGivenByUserInput | MatchFeedbackUpsertWithWhereUniqueWithoutGivenByUserInput[]
    createMany?: MatchFeedbackCreateManyGivenByUserInputEnvelope
    set?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    disconnect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    delete?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    update?: MatchFeedbackUpdateWithWhereUniqueWithoutGivenByUserInput | MatchFeedbackUpdateWithWhereUniqueWithoutGivenByUserInput[]
    updateMany?: MatchFeedbackUpdateManyWithWhereWithoutGivenByUserInput | MatchFeedbackUpdateManyWithWhereWithoutGivenByUserInput[]
    deleteMany?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
  }

  export type MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput = {
    create?: XOR<MatchFeedbackCreateWithoutGivenToUserInput, MatchFeedbackUncheckedCreateWithoutGivenToUserInput> | MatchFeedbackCreateWithoutGivenToUserInput[] | MatchFeedbackUncheckedCreateWithoutGivenToUserInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutGivenToUserInput | MatchFeedbackCreateOrConnectWithoutGivenToUserInput[]
    upsert?: MatchFeedbackUpsertWithWhereUniqueWithoutGivenToUserInput | MatchFeedbackUpsertWithWhereUniqueWithoutGivenToUserInput[]
    createMany?: MatchFeedbackCreateManyGivenToUserInputEnvelope
    set?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    disconnect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    delete?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    update?: MatchFeedbackUpdateWithWhereUniqueWithoutGivenToUserInput | MatchFeedbackUpdateWithWhereUniqueWithoutGivenToUserInput[]
    updateMany?: MatchFeedbackUpdateManyWithWhereWithoutGivenToUserInput | MatchFeedbackUpdateManyWithWhereWithoutGivenToUserInput[]
    deleteMany?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
  }

  export type MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchHistoryCreateWithoutUser1Input, MatchHistoryUncheckedCreateWithoutUser1Input> | MatchHistoryCreateWithoutUser1Input[] | MatchHistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser1Input | MatchHistoryCreateOrConnectWithoutUser1Input[]
    upsert?: MatchHistoryUpsertWithWhereUniqueWithoutUser1Input | MatchHistoryUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchHistoryCreateManyUser1InputEnvelope
    set?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    disconnect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    delete?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    update?: MatchHistoryUpdateWithWhereUniqueWithoutUser1Input | MatchHistoryUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchHistoryUpdateManyWithWhereWithoutUser1Input | MatchHistoryUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
  }

  export type MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchHistoryCreateWithoutUser2Input, MatchHistoryUncheckedCreateWithoutUser2Input> | MatchHistoryCreateWithoutUser2Input[] | MatchHistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutUser2Input | MatchHistoryCreateOrConnectWithoutUser2Input[]
    upsert?: MatchHistoryUpsertWithWhereUniqueWithoutUser2Input | MatchHistoryUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchHistoryCreateManyUser2InputEnvelope
    set?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    disconnect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    delete?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    update?: MatchHistoryUpdateWithWhereUniqueWithoutUser2Input | MatchHistoryUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchHistoryUpdateManyWithWhereWithoutUser2Input | MatchHistoryUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumExperienceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceLevel
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutMatchesAsUser1Input = {
    create?: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsUser2Input = {
    create?: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type MatchHistoryCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchHistoryCreateWithoutMatchInput, MatchHistoryUncheckedCreateWithoutMatchInput> | MatchHistoryCreateWithoutMatchInput[] | MatchHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutMatchInput | MatchHistoryCreateOrConnectWithoutMatchInput[]
    createMany?: MatchHistoryCreateManyMatchInputEnvelope
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
  }

  export type MatchFeedbackCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchFeedbackCreateWithoutMatchInput, MatchFeedbackUncheckedCreateWithoutMatchInput> | MatchFeedbackCreateWithoutMatchInput[] | MatchFeedbackUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutMatchInput | MatchFeedbackCreateOrConnectWithoutMatchInput[]
    createMany?: MatchFeedbackCreateManyMatchInputEnvelope
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
  }

  export type MatchHistoryUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchHistoryCreateWithoutMatchInput, MatchHistoryUncheckedCreateWithoutMatchInput> | MatchHistoryCreateWithoutMatchInput[] | MatchHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutMatchInput | MatchHistoryCreateOrConnectWithoutMatchInput[]
    createMany?: MatchHistoryCreateManyMatchInputEnvelope
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
  }

  export type MatchFeedbackUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchFeedbackCreateWithoutMatchInput, MatchFeedbackUncheckedCreateWithoutMatchInput> | MatchFeedbackCreateWithoutMatchInput[] | MatchFeedbackUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutMatchInput | MatchFeedbackCreateOrConnectWithoutMatchInput[]
    createMany?: MatchFeedbackCreateManyMatchInputEnvelope
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser1Input
    upsert?: UserUpsertWithoutMatchesAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsUser1Input, UserUpdateWithoutMatchesAsUser1Input>, UserUncheckedUpdateWithoutMatchesAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser2Input
    upsert?: UserUpsertWithoutMatchesAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsUser2Input, UserUpdateWithoutMatchesAsUser2Input>, UserUncheckedUpdateWithoutMatchesAsUser2Input>
  }

  export type MatchHistoryUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchHistoryCreateWithoutMatchInput, MatchHistoryUncheckedCreateWithoutMatchInput> | MatchHistoryCreateWithoutMatchInput[] | MatchHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutMatchInput | MatchHistoryCreateOrConnectWithoutMatchInput[]
    upsert?: MatchHistoryUpsertWithWhereUniqueWithoutMatchInput | MatchHistoryUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchHistoryCreateManyMatchInputEnvelope
    set?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    disconnect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    delete?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    update?: MatchHistoryUpdateWithWhereUniqueWithoutMatchInput | MatchHistoryUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchHistoryUpdateManyWithWhereWithoutMatchInput | MatchHistoryUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
  }

  export type MatchFeedbackUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchFeedbackCreateWithoutMatchInput, MatchFeedbackUncheckedCreateWithoutMatchInput> | MatchFeedbackCreateWithoutMatchInput[] | MatchFeedbackUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutMatchInput | MatchFeedbackCreateOrConnectWithoutMatchInput[]
    upsert?: MatchFeedbackUpsertWithWhereUniqueWithoutMatchInput | MatchFeedbackUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchFeedbackCreateManyMatchInputEnvelope
    set?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    disconnect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    delete?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    update?: MatchFeedbackUpdateWithWhereUniqueWithoutMatchInput | MatchFeedbackUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchFeedbackUpdateManyWithWhereWithoutMatchInput | MatchFeedbackUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
  }

  export type MatchHistoryUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchHistoryCreateWithoutMatchInput, MatchHistoryUncheckedCreateWithoutMatchInput> | MatchHistoryCreateWithoutMatchInput[] | MatchHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchHistoryCreateOrConnectWithoutMatchInput | MatchHistoryCreateOrConnectWithoutMatchInput[]
    upsert?: MatchHistoryUpsertWithWhereUniqueWithoutMatchInput | MatchHistoryUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchHistoryCreateManyMatchInputEnvelope
    set?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    disconnect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    delete?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    connect?: MatchHistoryWhereUniqueInput | MatchHistoryWhereUniqueInput[]
    update?: MatchHistoryUpdateWithWhereUniqueWithoutMatchInput | MatchHistoryUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchHistoryUpdateManyWithWhereWithoutMatchInput | MatchHistoryUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
  }

  export type MatchFeedbackUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchFeedbackCreateWithoutMatchInput, MatchFeedbackUncheckedCreateWithoutMatchInput> | MatchFeedbackCreateWithoutMatchInput[] | MatchFeedbackUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchFeedbackCreateOrConnectWithoutMatchInput | MatchFeedbackCreateOrConnectWithoutMatchInput[]
    upsert?: MatchFeedbackUpsertWithWhereUniqueWithoutMatchInput | MatchFeedbackUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchFeedbackCreateManyMatchInputEnvelope
    set?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    disconnect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    delete?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    connect?: MatchFeedbackWhereUniqueInput | MatchFeedbackWhereUniqueInput[]
    update?: MatchFeedbackUpdateWithWhereUniqueWithoutMatchInput | MatchFeedbackUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchFeedbackUpdateManyWithWhereWithoutMatchInput | MatchFeedbackUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutMatchHistoryInput = {
    create?: XOR<MatchCreateWithoutMatchHistoryInput, MatchUncheckedCreateWithoutMatchHistoryInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchHistoryInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchHistoryAsUser1Input = {
    create?: XOR<UserCreateWithoutMatchHistoryAsUser1Input, UserUncheckedCreateWithoutMatchHistoryAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchHistoryAsUser2Input = {
    create?: XOR<UserCreateWithoutMatchHistoryAsUser2Input, UserUncheckedCreateWithoutMatchHistoryAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type EnumMatchHistoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchHistoryStatus
  }

  export type MatchUpdateOneRequiredWithoutMatchHistoryNestedInput = {
    create?: XOR<MatchCreateWithoutMatchHistoryInput, MatchUncheckedCreateWithoutMatchHistoryInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchHistoryInput
    upsert?: MatchUpsertWithoutMatchHistoryInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMatchHistoryInput, MatchUpdateWithoutMatchHistoryInput>, MatchUncheckedUpdateWithoutMatchHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutMatchHistoryAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutMatchHistoryAsUser1Input, UserUncheckedCreateWithoutMatchHistoryAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryAsUser1Input
    upsert?: UserUpsertWithoutMatchHistoryAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchHistoryAsUser1Input, UserUpdateWithoutMatchHistoryAsUser1Input>, UserUncheckedUpdateWithoutMatchHistoryAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutMatchHistoryAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutMatchHistoryAsUser2Input, UserUncheckedCreateWithoutMatchHistoryAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryAsUser2Input
    upsert?: UserUpsertWithoutMatchHistoryAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchHistoryAsUser2Input, UserUpdateWithoutMatchHistoryAsUser2Input>, UserUncheckedUpdateWithoutMatchHistoryAsUser2Input>
  }

  export type MatchFeedbackCreatefeedbackCategoriesInput = {
    set: string[]
  }

  export type MatchCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<MatchCreateWithoutFeedbackInput, MatchUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: MatchCreateOrConnectWithoutFeedbackInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackGivenInput = {
    create?: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackReceivedInput = {
    create?: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type MatchFeedbackUpdatefeedbackCategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MatchUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<MatchCreateWithoutFeedbackInput, MatchUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: MatchCreateOrConnectWithoutFeedbackInput
    upsert?: MatchUpsertWithoutFeedbackInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutFeedbackInput, MatchUpdateWithoutFeedbackInput>, MatchUncheckedUpdateWithoutFeedbackInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackGivenNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackGivenInput
    upsert?: UserUpsertWithoutFeedbackGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackGivenInput, UserUpdateWithoutFeedbackGivenInput>, UserUncheckedUpdateWithoutFeedbackGivenInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackReceivedInput
    upsert?: UserUpsertWithoutFeedbackReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackReceivedInput, UserUpdateWithoutFeedbackReceivedInput>, UserUncheckedUpdateWithoutFeedbackReceivedInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
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

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
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

  export type NestedEnumMatchHistoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchHistoryStatus | EnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchHistoryStatusFilter<$PrismaModel> | $Enums.MatchHistoryStatus
  }

  export type NestedEnumMatchHistoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchHistoryStatus | EnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchHistoryStatus[] | ListEnumMatchHistoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchHistoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchHistoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchHistoryStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchHistoryStatusFilter<$PrismaModel>
  }

  export type UserSkillCreateWithoutUserInput = {
    id?: string
    skillText: string
    experienceLevel: $Enums.ExperienceLevel
    yearsOfExperience?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUncheckedCreateWithoutUserInput = {
    id?: string
    skillText: string
    experienceLevel: $Enums.ExperienceLevel
    yearsOfExperience?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillCreateManyUserInputEnvelope = {
    data: UserSkillCreateManyUserInput | UserSkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutUserInput = {
    id?: string
    preferenceText: string
    priority?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    preferenceText: string
    priority?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceCreateManyUserInputEnvelope = {
    data: UserPreferenceCreateManyUserInput | UserPreferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUser1Input = {
    id?: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user2: UserCreateNestedOneWithoutMatchesAsUser2Input
    matchHistory?: MatchHistoryCreateNestedManyWithoutMatchInput
    feedback?: MatchFeedbackCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutUser1Input = {
    id?: string
    user2Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchHistory?: MatchHistoryUncheckedCreateNestedManyWithoutMatchInput
    feedback?: MatchFeedbackUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutUser1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input>
  }

  export type MatchCreateManyUser1InputEnvelope = {
    data: MatchCreateManyUser1Input | MatchCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUser2Input = {
    id?: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user1: UserCreateNestedOneWithoutMatchesAsUser1Input
    matchHistory?: MatchHistoryCreateNestedManyWithoutMatchInput
    feedback?: MatchFeedbackCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutUser2Input = {
    id?: string
    user1Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchHistory?: MatchHistoryUncheckedCreateNestedManyWithoutMatchInput
    feedback?: MatchFeedbackUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutUser2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input>
  }

  export type MatchCreateManyUser2InputEnvelope = {
    data: MatchCreateManyUser2Input | MatchCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type MatchFeedbackCreateWithoutGivenByUserInput = {
    id?: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutFeedbackInput
    givenToUser: UserCreateNestedOneWithoutFeedbackReceivedInput
  }

  export type MatchFeedbackUncheckedCreateWithoutGivenByUserInput = {
    id?: string
    matchId: string
    givenToUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFeedbackCreateOrConnectWithoutGivenByUserInput = {
    where: MatchFeedbackWhereUniqueInput
    create: XOR<MatchFeedbackCreateWithoutGivenByUserInput, MatchFeedbackUncheckedCreateWithoutGivenByUserInput>
  }

  export type MatchFeedbackCreateManyGivenByUserInputEnvelope = {
    data: MatchFeedbackCreateManyGivenByUserInput | MatchFeedbackCreateManyGivenByUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchFeedbackCreateWithoutGivenToUserInput = {
    id?: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutFeedbackInput
    givenByUser: UserCreateNestedOneWithoutFeedbackGivenInput
  }

  export type MatchFeedbackUncheckedCreateWithoutGivenToUserInput = {
    id?: string
    matchId: string
    givenByUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFeedbackCreateOrConnectWithoutGivenToUserInput = {
    where: MatchFeedbackWhereUniqueInput
    create: XOR<MatchFeedbackCreateWithoutGivenToUserInput, MatchFeedbackUncheckedCreateWithoutGivenToUserInput>
  }

  export type MatchFeedbackCreateManyGivenToUserInputEnvelope = {
    data: MatchFeedbackCreateManyGivenToUserInput | MatchFeedbackCreateManyGivenToUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchHistoryCreateWithoutUser1Input = {
    id?: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchHistoryInput
    user2: UserCreateNestedOneWithoutMatchHistoryAsUser2Input
  }

  export type MatchHistoryUncheckedCreateWithoutUser1Input = {
    id?: string
    matchId: string
    user2Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type MatchHistoryCreateOrConnectWithoutUser1Input = {
    where: MatchHistoryWhereUniqueInput
    create: XOR<MatchHistoryCreateWithoutUser1Input, MatchHistoryUncheckedCreateWithoutUser1Input>
  }

  export type MatchHistoryCreateManyUser1InputEnvelope = {
    data: MatchHistoryCreateManyUser1Input | MatchHistoryCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type MatchHistoryCreateWithoutUser2Input = {
    id?: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchHistoryInput
    user1: UserCreateNestedOneWithoutMatchHistoryAsUser1Input
  }

  export type MatchHistoryUncheckedCreateWithoutUser2Input = {
    id?: string
    matchId: string
    user1Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type MatchHistoryCreateOrConnectWithoutUser2Input = {
    where: MatchHistoryWhereUniqueInput
    create: XOR<MatchHistoryCreateWithoutUser2Input, MatchHistoryUncheckedCreateWithoutUser2Input>
  }

  export type MatchHistoryCreateManyUser2InputEnvelope = {
    data: MatchHistoryCreateManyUser2Input | MatchHistoryCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutUserInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSkillScalarWhereInput = {
    AND?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    OR?: UserSkillScalarWhereInput[]
    NOT?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: StringFilter<"UserSkill"> | string
    skillText?: StringFilter<"UserSkill"> | string
    experienceLevel?: EnumExperienceLevelFilter<"UserSkill"> | $Enums.ExperienceLevel
    yearsOfExperience?: IntNullableFilter<"UserSkill"> | number | null
    isPrimary?: BoolFilter<"UserSkill"> | boolean
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
  }

  export type UserPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferenceScalarWhereInput
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPreferenceScalarWhereInput = {
    AND?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
    OR?: UserPreferenceScalarWhereInput[]
    NOT?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
    id?: StringFilter<"UserPreference"> | string
    userId?: StringFilter<"UserPreference"> | string
    preferenceText?: StringFilter<"UserPreference"> | string
    priority?: IntFilter<"UserPreference"> | number
    isRequired?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUser1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUser1Input, MatchUncheckedUpdateWithoutUser1Input>
    create: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutUser1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUser1Input, MatchUncheckedUpdateWithoutUser1Input>
  }

  export type MatchUpdateManyWithWhereWithoutUser1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUser1Input>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    user1Id?: StringFilter<"Match"> | string
    user2Id?: StringFilter<"Match"> | string
    externalMatchId?: StringNullableFilter<"Match"> | string | null
    matchScore?: FloatNullableFilter<"Match"> | number | null
    matchReason?: StringNullableFilter<"Match"> | string | null
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    matchedAt?: DateTimeFilter<"Match"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUser2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUser2Input, MatchUncheckedUpdateWithoutUser2Input>
    create: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutUser2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUser2Input, MatchUncheckedUpdateWithoutUser2Input>
  }

  export type MatchUpdateManyWithWhereWithoutUser2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUser2Input>
  }

  export type MatchFeedbackUpsertWithWhereUniqueWithoutGivenByUserInput = {
    where: MatchFeedbackWhereUniqueInput
    update: XOR<MatchFeedbackUpdateWithoutGivenByUserInput, MatchFeedbackUncheckedUpdateWithoutGivenByUserInput>
    create: XOR<MatchFeedbackCreateWithoutGivenByUserInput, MatchFeedbackUncheckedCreateWithoutGivenByUserInput>
  }

  export type MatchFeedbackUpdateWithWhereUniqueWithoutGivenByUserInput = {
    where: MatchFeedbackWhereUniqueInput
    data: XOR<MatchFeedbackUpdateWithoutGivenByUserInput, MatchFeedbackUncheckedUpdateWithoutGivenByUserInput>
  }

  export type MatchFeedbackUpdateManyWithWhereWithoutGivenByUserInput = {
    where: MatchFeedbackScalarWhereInput
    data: XOR<MatchFeedbackUpdateManyMutationInput, MatchFeedbackUncheckedUpdateManyWithoutGivenByUserInput>
  }

  export type MatchFeedbackScalarWhereInput = {
    AND?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
    OR?: MatchFeedbackScalarWhereInput[]
    NOT?: MatchFeedbackScalarWhereInput | MatchFeedbackScalarWhereInput[]
    id?: StringFilter<"MatchFeedback"> | string
    matchId?: StringFilter<"MatchFeedback"> | string
    givenByUserId?: StringFilter<"MatchFeedback"> | string
    givenToUserId?: StringFilter<"MatchFeedback"> | string
    rating?: IntFilter<"MatchFeedback"> | number
    feedbackText?: StringNullableFilter<"MatchFeedback"> | string | null
    wasGoodMatch?: BoolFilter<"MatchFeedback"> | boolean
    wouldMatchAgain?: BoolFilter<"MatchFeedback"> | boolean
    hasMet?: BoolFilter<"MatchFeedback"> | boolean
    meetingDateTime?: DateTimeNullableFilter<"MatchFeedback"> | Date | string | null
    feedbackCategories?: StringNullableListFilter<"MatchFeedback">
    createdAt?: DateTimeFilter<"MatchFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"MatchFeedback"> | Date | string
  }

  export type MatchFeedbackUpsertWithWhereUniqueWithoutGivenToUserInput = {
    where: MatchFeedbackWhereUniqueInput
    update: XOR<MatchFeedbackUpdateWithoutGivenToUserInput, MatchFeedbackUncheckedUpdateWithoutGivenToUserInput>
    create: XOR<MatchFeedbackCreateWithoutGivenToUserInput, MatchFeedbackUncheckedCreateWithoutGivenToUserInput>
  }

  export type MatchFeedbackUpdateWithWhereUniqueWithoutGivenToUserInput = {
    where: MatchFeedbackWhereUniqueInput
    data: XOR<MatchFeedbackUpdateWithoutGivenToUserInput, MatchFeedbackUncheckedUpdateWithoutGivenToUserInput>
  }

  export type MatchFeedbackUpdateManyWithWhereWithoutGivenToUserInput = {
    where: MatchFeedbackScalarWhereInput
    data: XOR<MatchFeedbackUpdateManyMutationInput, MatchFeedbackUncheckedUpdateManyWithoutGivenToUserInput>
  }

  export type MatchHistoryUpsertWithWhereUniqueWithoutUser1Input = {
    where: MatchHistoryWhereUniqueInput
    update: XOR<MatchHistoryUpdateWithoutUser1Input, MatchHistoryUncheckedUpdateWithoutUser1Input>
    create: XOR<MatchHistoryCreateWithoutUser1Input, MatchHistoryUncheckedCreateWithoutUser1Input>
  }

  export type MatchHistoryUpdateWithWhereUniqueWithoutUser1Input = {
    where: MatchHistoryWhereUniqueInput
    data: XOR<MatchHistoryUpdateWithoutUser1Input, MatchHistoryUncheckedUpdateWithoutUser1Input>
  }

  export type MatchHistoryUpdateManyWithWhereWithoutUser1Input = {
    where: MatchHistoryScalarWhereInput
    data: XOR<MatchHistoryUpdateManyMutationInput, MatchHistoryUncheckedUpdateManyWithoutUser1Input>
  }

  export type MatchHistoryScalarWhereInput = {
    AND?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
    OR?: MatchHistoryScalarWhereInput[]
    NOT?: MatchHistoryScalarWhereInput | MatchHistoryScalarWhereInput[]
    id?: StringFilter<"MatchHistory"> | string
    matchId?: StringFilter<"MatchHistory"> | string
    user1Id?: StringFilter<"MatchHistory"> | string
    user2Id?: StringFilter<"MatchHistory"> | string
    matchedAt?: DateTimeFilter<"MatchHistory"> | Date | string
    cooldownUntil?: DateTimeFilter<"MatchHistory"> | Date | string
    status?: EnumMatchHistoryStatusFilter<"MatchHistory"> | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFilter<"MatchHistory"> | Date | string
  }

  export type MatchHistoryUpsertWithWhereUniqueWithoutUser2Input = {
    where: MatchHistoryWhereUniqueInput
    update: XOR<MatchHistoryUpdateWithoutUser2Input, MatchHistoryUncheckedUpdateWithoutUser2Input>
    create: XOR<MatchHistoryCreateWithoutUser2Input, MatchHistoryUncheckedCreateWithoutUser2Input>
  }

  export type MatchHistoryUpdateWithWhereUniqueWithoutUser2Input = {
    where: MatchHistoryWhereUniqueInput
    data: XOR<MatchHistoryUpdateWithoutUser2Input, MatchHistoryUncheckedUpdateWithoutUser2Input>
  }

  export type MatchHistoryUpdateManyWithWhereWithoutUser2Input = {
    where: MatchHistoryScalarWhereInput
    data: XOR<MatchHistoryUpdateManyMutationInput, MatchHistoryUncheckedUpdateManyWithoutUser2Input>
  }

  export type UserCreateWithoutSkillsInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type UserCreateWithoutMatchesAsUser1Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutMatchesAsUser1Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutMatchesAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
  }

  export type UserCreateWithoutMatchesAsUser2Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutMatchesAsUser2Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutMatchesAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
  }

  export type MatchHistoryCreateWithoutMatchInput = {
    id?: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutMatchHistoryAsUser1Input
    user2: UserCreateNestedOneWithoutMatchHistoryAsUser2Input
  }

  export type MatchHistoryUncheckedCreateWithoutMatchInput = {
    id?: string
    user1Id: string
    user2Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type MatchHistoryCreateOrConnectWithoutMatchInput = {
    where: MatchHistoryWhereUniqueInput
    create: XOR<MatchHistoryCreateWithoutMatchInput, MatchHistoryUncheckedCreateWithoutMatchInput>
  }

  export type MatchHistoryCreateManyMatchInputEnvelope = {
    data: MatchHistoryCreateManyMatchInput | MatchHistoryCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type MatchFeedbackCreateWithoutMatchInput = {
    id?: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    givenByUser: UserCreateNestedOneWithoutFeedbackGivenInput
    givenToUser: UserCreateNestedOneWithoutFeedbackReceivedInput
  }

  export type MatchFeedbackUncheckedCreateWithoutMatchInput = {
    id?: string
    givenByUserId: string
    givenToUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFeedbackCreateOrConnectWithoutMatchInput = {
    where: MatchFeedbackWhereUniqueInput
    create: XOR<MatchFeedbackCreateWithoutMatchInput, MatchFeedbackUncheckedCreateWithoutMatchInput>
  }

  export type MatchFeedbackCreateManyMatchInputEnvelope = {
    data: MatchFeedbackCreateManyMatchInput | MatchFeedbackCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMatchesAsUser1Input = {
    update: XOR<UserUpdateWithoutMatchesAsUser1Input, UserUncheckedUpdateWithoutMatchesAsUser1Input>
    create: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsUser1Input, UserUncheckedUpdateWithoutMatchesAsUser1Input>
  }

  export type UserUpdateWithoutMatchesAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type UserUpsertWithoutMatchesAsUser2Input = {
    update: XOR<UserUpdateWithoutMatchesAsUser2Input, UserUncheckedUpdateWithoutMatchesAsUser2Input>
    create: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsUser2Input, UserUncheckedUpdateWithoutMatchesAsUser2Input>
  }

  export type UserUpdateWithoutMatchesAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type MatchHistoryUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchHistoryWhereUniqueInput
    update: XOR<MatchHistoryUpdateWithoutMatchInput, MatchHistoryUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchHistoryCreateWithoutMatchInput, MatchHistoryUncheckedCreateWithoutMatchInput>
  }

  export type MatchHistoryUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchHistoryWhereUniqueInput
    data: XOR<MatchHistoryUpdateWithoutMatchInput, MatchHistoryUncheckedUpdateWithoutMatchInput>
  }

  export type MatchHistoryUpdateManyWithWhereWithoutMatchInput = {
    where: MatchHistoryScalarWhereInput
    data: XOR<MatchHistoryUpdateManyMutationInput, MatchHistoryUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchFeedbackUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchFeedbackWhereUniqueInput
    update: XOR<MatchFeedbackUpdateWithoutMatchInput, MatchFeedbackUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchFeedbackCreateWithoutMatchInput, MatchFeedbackUncheckedCreateWithoutMatchInput>
  }

  export type MatchFeedbackUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchFeedbackWhereUniqueInput
    data: XOR<MatchFeedbackUpdateWithoutMatchInput, MatchFeedbackUncheckedUpdateWithoutMatchInput>
  }

  export type MatchFeedbackUpdateManyWithWhereWithoutMatchInput = {
    where: MatchFeedbackScalarWhereInput
    data: XOR<MatchFeedbackUpdateManyMutationInput, MatchFeedbackUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchCreateWithoutMatchHistoryInput = {
    id?: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user1: UserCreateNestedOneWithoutMatchesAsUser1Input
    user2: UserCreateNestedOneWithoutMatchesAsUser2Input
    feedback?: MatchFeedbackCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutMatchHistoryInput = {
    id?: string
    user1Id: string
    user2Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: MatchFeedbackUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutMatchHistoryInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchHistoryInput, MatchUncheckedCreateWithoutMatchHistoryInput>
  }

  export type UserCreateWithoutMatchHistoryAsUser1Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutMatchHistoryAsUser1Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutMatchHistoryAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchHistoryAsUser1Input, UserUncheckedCreateWithoutMatchHistoryAsUser1Input>
  }

  export type UserCreateWithoutMatchHistoryAsUser2Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
  }

  export type UserUncheckedCreateWithoutMatchHistoryAsUser2Input = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
  }

  export type UserCreateOrConnectWithoutMatchHistoryAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchHistoryAsUser2Input, UserUncheckedCreateWithoutMatchHistoryAsUser2Input>
  }

  export type MatchUpsertWithoutMatchHistoryInput = {
    update: XOR<MatchUpdateWithoutMatchHistoryInput, MatchUncheckedUpdateWithoutMatchHistoryInput>
    create: XOR<MatchCreateWithoutMatchHistoryInput, MatchUncheckedCreateWithoutMatchHistoryInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMatchHistoryInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMatchHistoryInput, MatchUncheckedUpdateWithoutMatchHistoryInput>
  }

  export type MatchUpdateWithoutMatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput
    feedback?: MatchFeedbackUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: MatchFeedbackUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutMatchHistoryAsUser1Input = {
    update: XOR<UserUpdateWithoutMatchHistoryAsUser1Input, UserUncheckedUpdateWithoutMatchHistoryAsUser1Input>
    create: XOR<UserCreateWithoutMatchHistoryAsUser1Input, UserUncheckedCreateWithoutMatchHistoryAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchHistoryAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchHistoryAsUser1Input, UserUncheckedUpdateWithoutMatchHistoryAsUser1Input>
  }

  export type UserUpdateWithoutMatchHistoryAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutMatchHistoryAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type UserUpsertWithoutMatchHistoryAsUser2Input = {
    update: XOR<UserUpdateWithoutMatchHistoryAsUser2Input, UserUncheckedUpdateWithoutMatchHistoryAsUser2Input>
    create: XOR<UserCreateWithoutMatchHistoryAsUser2Input, UserUncheckedCreateWithoutMatchHistoryAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchHistoryAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchHistoryAsUser2Input, UserUncheckedUpdateWithoutMatchHistoryAsUser2Input>
  }

  export type UserUpdateWithoutMatchHistoryAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
  }

  export type UserUncheckedUpdateWithoutMatchHistoryAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
  }

  export type MatchCreateWithoutFeedbackInput = {
    id?: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user1: UserCreateNestedOneWithoutMatchesAsUser1Input
    user2: UserCreateNestedOneWithoutMatchesAsUser2Input
    matchHistory?: MatchHistoryCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutFeedbackInput = {
    id?: string
    user1Id: string
    user2Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchHistory?: MatchHistoryUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutFeedbackInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutFeedbackInput, MatchUncheckedCreateWithoutFeedbackInput>
  }

  export type UserCreateWithoutFeedbackGivenInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackReceived?: MatchFeedbackCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutFeedbackGivenInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackReceived?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenToUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutFeedbackGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
  }

  export type UserCreateWithoutFeedbackReceivedInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackCreateNestedManyWithoutGivenByUserInput
    matchHistoryAsUser1?: MatchHistoryCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutFeedbackReceivedInput = {
    id?: string
    email: string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    matchCooldownDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    feedbackGiven?: MatchFeedbackUncheckedCreateNestedManyWithoutGivenByUserInput
    matchHistoryAsUser1?: MatchHistoryUncheckedCreateNestedManyWithoutUser1Input
    matchHistoryAsUser2?: MatchHistoryUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutFeedbackReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
  }

  export type MatchUpsertWithoutFeedbackInput = {
    update: XOR<MatchUpdateWithoutFeedbackInput, MatchUncheckedUpdateWithoutFeedbackInput>
    create: XOR<MatchCreateWithoutFeedbackInput, MatchUncheckedCreateWithoutFeedbackInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutFeedbackInput, MatchUncheckedUpdateWithoutFeedbackInput>
  }

  export type MatchUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput
    matchHistory?: MatchHistoryUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchHistory?: MatchHistoryUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutFeedbackGivenInput = {
    update: XOR<UserUpdateWithoutFeedbackGivenInput, UserUncheckedUpdateWithoutFeedbackGivenInput>
    create: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackGivenInput, UserUncheckedUpdateWithoutFeedbackGivenInput>
  }

  export type UserUpdateWithoutFeedbackGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackReceived?: MatchFeedbackUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackReceived?: MatchFeedbackUncheckedUpdateManyWithoutGivenToUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type UserUpsertWithoutFeedbackReceivedInput = {
    update: XOR<UserUpdateWithoutFeedbackReceivedInput, UserUncheckedUpdateWithoutFeedbackReceivedInput>
    create: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackReceivedInput, UserUncheckedUpdateWithoutFeedbackReceivedInput>
  }

  export type UserUpdateWithoutFeedbackReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUpdateManyWithoutGivenByUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    matchCooldownDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    feedbackGiven?: MatchFeedbackUncheckedUpdateManyWithoutGivenByUserNestedInput
    matchHistoryAsUser1?: MatchHistoryUncheckedUpdateManyWithoutUser1NestedInput
    matchHistoryAsUser2?: MatchHistoryUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type UserSkillCreateManyUserInput = {
    id?: string
    skillText: string
    experienceLevel: $Enums.ExperienceLevel
    yearsOfExperience?: number | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateManyUserInput = {
    id?: string
    preferenceText: string
    priority?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyUser1Input = {
    id?: string
    user2Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyUser2Input = {
    id?: string
    user1Id: string
    externalMatchId?: string | null
    matchScore?: number | null
    matchReason?: string | null
    status?: $Enums.MatchStatus
    matchedAt?: Date | string
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFeedbackCreateManyGivenByUserInput = {
    id?: string
    matchId: string
    givenToUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFeedbackCreateManyGivenToUserInput = {
    id?: string
    matchId: string
    givenByUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchHistoryCreateManyUser1Input = {
    id?: string
    matchId: string
    user2Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type MatchHistoryCreateManyUser2Input = {
    id?: string
    matchId: string
    user1Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type UserSkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillText?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillText?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillText?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    yearsOfExperience?: NullableIntFieldUpdateOperationsInput | number | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceText?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceText?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceText?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput
    matchHistory?: MatchHistoryUpdateManyWithoutMatchNestedInput
    feedback?: MatchFeedbackUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchHistory?: MatchHistoryUncheckedUpdateManyWithoutMatchNestedInput
    feedback?: MatchFeedbackUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput
    matchHistory?: MatchHistoryUpdateManyWithoutMatchNestedInput
    feedback?: MatchFeedbackUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchHistory?: MatchHistoryUncheckedUpdateManyWithoutMatchNestedInput
    feedback?: MatchFeedbackUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    externalMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableFloatFieldUpdateOperationsInput | number | null
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackUpdateWithoutGivenByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutFeedbackNestedInput
    givenToUser?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput
  }

  export type MatchFeedbackUncheckedUpdateWithoutGivenByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    givenToUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackUncheckedUpdateManyWithoutGivenByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    givenToUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackUpdateWithoutGivenToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutFeedbackNestedInput
    givenByUser?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput
  }

  export type MatchFeedbackUncheckedUpdateWithoutGivenToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    givenByUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackUncheckedUpdateManyWithoutGivenToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    givenByUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchHistoryNestedInput
    user2?: UserUpdateOneRequiredWithoutMatchHistoryAsUser2NestedInput
  }

  export type MatchHistoryUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchHistoryNestedInput
    user1?: UserUpdateOneRequiredWithoutMatchHistoryAsUser1NestedInput
  }

  export type MatchHistoryUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryCreateManyMatchInput = {
    id?: string
    user1Id: string
    user2Id: string
    matchedAt: Date | string
    cooldownUntil: Date | string
    status: $Enums.MatchHistoryStatus
    createdAt?: Date | string
  }

  export type MatchFeedbackCreateManyMatchInput = {
    id?: string
    givenByUserId: string
    givenToUserId: string
    rating: number
    feedbackText?: string | null
    wasGoodMatch: boolean
    wouldMatchAgain: boolean
    hasMet?: boolean
    meetingDateTime?: Date | string | null
    feedbackCategories?: MatchFeedbackCreatefeedbackCategoriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchHistoryUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutMatchHistoryAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatchHistoryAsUser2NestedInput
  }

  export type MatchHistoryUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchHistoryUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    matchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cooldownUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMatchHistoryStatusFieldUpdateOperationsInput | $Enums.MatchHistoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    givenByUser?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput
    givenToUser?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput
  }

  export type MatchFeedbackUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    givenByUserId?: StringFieldUpdateOperationsInput | string
    givenToUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFeedbackUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    givenByUserId?: StringFieldUpdateOperationsInput | string
    givenToUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    wasGoodMatch?: BoolFieldUpdateOperationsInput | boolean
    wouldMatchAgain?: BoolFieldUpdateOperationsInput | boolean
    hasMet?: BoolFieldUpdateOperationsInput | boolean
    meetingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackCategories?: MatchFeedbackUpdatefeedbackCategoriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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