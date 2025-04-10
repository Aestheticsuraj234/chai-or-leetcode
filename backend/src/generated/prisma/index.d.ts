
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
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model ProblemSolved
 * 
 */
export type ProblemSolved = $Result.DefaultSelection<Prisma.$ProblemSolvedPayload>
/**
 * Model Sheet
 * 
 */
export type Sheet = $Result.DefaultSelection<Prisma.$SheetPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Subtopic
 * 
 */
export type Subtopic = $Result.DefaultSelection<Prisma.$SubtopicPayload>
/**
 * Model ProblemInSubtopic
 * 
 */
export type ProblemInSubtopic = $Result.DefaultSelection<Prisma.$ProblemInSubtopicPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **ProblemSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemSolveds
    * const problemSolveds = await prisma.problemSolved.findMany()
    * ```
    */
  get problemSolved(): Prisma.ProblemSolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheet`: Exposes CRUD operations for the **Sheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheet.findMany()
    * ```
    */
  get sheet(): Prisma.SheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subtopic`: Exposes CRUD operations for the **Subtopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtopics
    * const subtopics = await prisma.subtopic.findMany()
    * ```
    */
  get subtopic(): Prisma.SubtopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInSubtopic`: Exposes CRUD operations for the **ProblemInSubtopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemInSubtopics
    * const problemInSubtopics = await prisma.problemInSubtopic.findMany()
    * ```
    */
  get problemInSubtopic(): Prisma.ProblemInSubtopicDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Problem: 'Problem',
    Submission: 'Submission',
    ProblemSolved: 'ProblemSolved',
    Sheet: 'Sheet',
    Topic: 'Topic',
    Subtopic: 'Subtopic',
    ProblemInSubtopic: 'ProblemInSubtopic'
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
      modelProps: "user" | "problem" | "submission" | "problemSolved" | "sheet" | "topic" | "subtopic" | "problemInSubtopic"
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
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      ProblemSolved: {
        payload: Prisma.$ProblemSolvedPayload<ExtArgs>
        fields: Prisma.ProblemSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          findFirst: {
            args: Prisma.ProblemSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          findMany: {
            args: Prisma.ProblemSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          create: {
            args: Prisma.ProblemSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          createMany: {
            args: Prisma.ProblemSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          delete: {
            args: Prisma.ProblemSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          update: {
            args: Prisma.ProblemSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          deleteMany: {
            args: Prisma.ProblemSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          upsert: {
            args: Prisma.ProblemSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemSolved>
          }
          groupBy: {
            args: Prisma.ProblemSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedCountAggregateOutputType> | number
          }
        }
      }
      Sheet: {
        payload: Prisma.$SheetPayload<ExtArgs>
        fields: Prisma.SheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findFirst: {
            args: Prisma.SheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findMany: {
            args: Prisma.SheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          create: {
            args: Prisma.SheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          createMany: {
            args: Prisma.SheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          delete: {
            args: Prisma.SheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          update: {
            args: Prisma.SheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          deleteMany: {
            args: Prisma.SheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          upsert: {
            args: Prisma.SheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          aggregate: {
            args: Prisma.SheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheet>
          }
          groupBy: {
            args: Prisma.SheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetCountArgs<ExtArgs>
            result: $Utils.Optional<SheetCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Subtopic: {
        payload: Prisma.$SubtopicPayload<ExtArgs>
        fields: Prisma.SubtopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          findFirst: {
            args: Prisma.SubtopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          findMany: {
            args: Prisma.SubtopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>[]
          }
          create: {
            args: Prisma.SubtopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          createMany: {
            args: Prisma.SubtopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubtopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>[]
          }
          delete: {
            args: Prisma.SubtopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          update: {
            args: Prisma.SubtopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          deleteMany: {
            args: Prisma.SubtopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubtopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubtopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>[]
          }
          upsert: {
            args: Prisma.SubtopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          aggregate: {
            args: Prisma.SubtopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtopic>
          }
          groupBy: {
            args: Prisma.SubtopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubtopicCountArgs<ExtArgs>
            result: $Utils.Optional<SubtopicCountAggregateOutputType> | number
          }
        }
      }
      ProblemInSubtopic: {
        payload: Prisma.$ProblemInSubtopicPayload<ExtArgs>
        fields: Prisma.ProblemInSubtopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemInSubtopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemInSubtopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>
          }
          findFirst: {
            args: Prisma.ProblemInSubtopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemInSubtopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>
          }
          findMany: {
            args: Prisma.ProblemInSubtopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>[]
          }
          create: {
            args: Prisma.ProblemInSubtopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>
          }
          createMany: {
            args: Prisma.ProblemInSubtopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemInSubtopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>[]
          }
          delete: {
            args: Prisma.ProblemInSubtopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>
          }
          update: {
            args: Prisma.ProblemInSubtopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>
          }
          deleteMany: {
            args: Prisma.ProblemInSubtopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemInSubtopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemInSubtopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>[]
          }
          upsert: {
            args: Prisma.ProblemInSubtopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSubtopicPayload>
          }
          aggregate: {
            args: Prisma.ProblemInSubtopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemInSubtopic>
          }
          groupBy: {
            args: Prisma.ProblemInSubtopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemInSubtopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemInSubtopicCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemInSubtopicCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    problem?: ProblemOmit
    submission?: SubmissionOmit
    problemSolved?: ProblemSolvedOmit
    sheet?: SheetOmit
    topic?: TopicOmit
    subtopic?: SubtopicOmit
    problemInSubtopic?: ProblemInSubtopicOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    problems: number
    submissions: number
    solvedProblems: number
    Sheets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    solvedProblems?: boolean | UserCountOutputTypeCountSolvedProblemsArgs
    Sheets?: boolean | UserCountOutputTypeCountSheetsArgs
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
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submissions: number
    solvedBy: number
    subtopics: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ProblemCountOutputTypeCountSubmissionsArgs
    solvedBy?: boolean | ProblemCountOutputTypeCountSolvedByArgs
    subtopics?: boolean | ProblemCountOutputTypeCountSubtopicsArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInSubtopicWhereInput
  }


  /**
   * Count Type SheetCountOutputType
   */

  export type SheetCountOutputType = {
    topics: number
  }

  export type SheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | SheetCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes
  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetCountOutputType
     */
    select?: SheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    subtopics: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopics?: boolean | TopicCountOutputTypeCountSubtopicsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountSubtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtopicWhereInput
  }


  /**
   * Count Type SubtopicCountOutputType
   */

  export type SubtopicCountOutputType = {
    problems: number
  }

  export type SubtopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | SubtopicCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtopicCountOutputType
     */
    select?: SubtopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInSubtopicWhereInput
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
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
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
    name: string | null
    email: string
    image: string | null
    role: $Enums.UserRole
    password: string
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
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    Sheets?: boolean | User$SheetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    Sheets?: boolean | User$SheetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      solvedProblems: Prisma.$ProblemSolvedPayload<ExtArgs>[]
      Sheets: Prisma.$SheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      image: string | null
      role: $Enums.UserRole
      password: string
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
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedProblems<T extends User$solvedProblemsArgs<ExtArgs> = {}>(args?: Subset<T, User$solvedProblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sheets<T extends User$SheetsArgs<ExtArgs> = {}>(args?: Subset<T, User$SheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.solvedProblems
   */
  export type User$solvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    cursor?: ProblemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * User.Sheets
   */
  export type User$SheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    cursor?: SheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
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
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    testCases: number
    codeSnippets: number
    referenceSolutions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    testCases?: true
    codeSnippets?: true
    referenceSolutions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    userId: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorial: string | null
    testCases: JsonValue
    codeSnippets: JsonValue
    referenceSolutions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    subtopics?: boolean | Problem$subtopicsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "testCases" | "codeSnippets" | "referenceSolutions" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    subtopics?: boolean | Problem$subtopicsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      solvedBy: Prisma.$ProblemSolvedPayload<ExtArgs>[]
      subtopics: Prisma.$ProblemInSubtopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorial: string | null
      testCases: Prisma.JsonValue
      codeSnippets: Prisma.JsonValue
      referenceSolutions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Problem$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedBy<T extends Problem$solvedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subtopics<T extends Problem$subtopicsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$subtopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'Difficulty'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'String'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly testCases: FieldRef<"Problem", 'Json'>
    readonly codeSnippets: FieldRef<"Problem", 'Json'>
    readonly referenceSolutions: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.submissions
   */
  export type Problem$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.solvedBy
   */
  export type Problem$solvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    cursor?: ProblemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * Problem.subtopics
   */
  export type Problem$subtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    where?: ProblemInSubtopicWhereInput
    orderBy?: ProblemInSubtopicOrderByWithRelationInput | ProblemInSubtopicOrderByWithRelationInput[]
    cursor?: ProblemInSubtopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInSubtopicScalarFieldEnum | ProblemInSubtopicScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    sourceCode: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    sourceCode: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    sourceCode: number
    language: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    sourceCode: string
    language: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "sourceCode" | "language" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      sourceCode: string
      language: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly problemId: FieldRef<"Submission", 'String'>
    readonly sourceCode: FieldRef<"Submission", 'String'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly stdin: FieldRef<"Submission", 'String'>
    readonly stdout: FieldRef<"Submission", 'String'>
    readonly stderr: FieldRef<"Submission", 'String'>
    readonly compileOutput: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model ProblemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
  }

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
  }

  export type ProblemSolvedCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createdAt: number
    _all: number
  }


  export type ProblemSolvedMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
  }

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
  }

  export type ProblemSolvedCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    _all?: true
  }

  export type ProblemSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemSolved to aggregate.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemSolveds
    **/
    _count?: true | ProblemSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type GetProblemSolvedAggregateType<T extends ProblemSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>
  }




  export type ProblemSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithAggregationInput | ProblemSolvedOrderByWithAggregationInput[]
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum
    having?: ProblemSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemSolvedCountAggregateInputType | true
    _min?: ProblemSolvedMinAggregateInputType
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type ProblemSolvedGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    createdAt: Date
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  type GetProblemSolvedGroupByPayload<T extends ProblemSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
  }

  export type ProblemSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createdAt", ExtArgs["result"]["problemSolved"]>
  export type ProblemSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemSolved"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      createdAt: Date
    }, ExtArgs["result"]["problemSolved"]>
    composites: {}
  }

  type ProblemSolvedGetPayload<S extends boolean | null | undefined | ProblemSolvedDefaultArgs> = $Result.GetResult<Prisma.$ProblemSolvedPayload, S>

  type ProblemSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemSolvedCountAggregateInputType | true
    }

  export interface ProblemSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemSolved'], meta: { name: 'ProblemSolved' } }
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {ProblemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemSolvedFindUniqueArgs>(args: SelectSubset<T, ProblemSolvedFindUniqueArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemSolvedFindFirstArgs>(args?: SelectSubset<T, ProblemSolvedFindFirstArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     * 
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemSolvedFindManyArgs>(args?: SelectSubset<T, ProblemSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemSolved.
     * @param {ProblemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     * 
     */
    create<T extends ProblemSolvedCreateArgs>(args: SelectSubset<T, ProblemSolvedCreateArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemSolveds.
     * @param {ProblemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemSolvedCreateManyArgs>(args?: SelectSubset<T, ProblemSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {ProblemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemSolved.
     * @param {ProblemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     * 
     */
    delete<T extends ProblemSolvedDeleteArgs>(args: SelectSubset<T, ProblemSolvedDeleteArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemSolved.
     * @param {ProblemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemSolvedUpdateArgs>(args: SelectSubset<T, ProblemSolvedUpdateArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemSolveds.
     * @param {ProblemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemSolvedDeleteManyArgs>(args?: SelectSubset<T, ProblemSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemSolvedUpdateManyArgs>(args: SelectSubset<T, ProblemSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {ProblemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemSolved.
     * @param {ProblemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends ProblemSolvedUpsertArgs>(args: SelectSubset<T, ProblemSolvedUpsertArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
    **/
    count<T extends ProblemSolvedCountArgs>(
      args?: Subset<T, ProblemSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemSolvedAggregateArgs>(args: Subset<T, ProblemSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedGroupByArgs} args - Group by arguments.
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
      T extends ProblemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemSolvedGroupByArgs['orderBy'] }
        : { orderBy?: ProblemSolvedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemSolved model
   */
  readonly fields: ProblemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemSolved model
   */
  interface ProblemSolvedFieldRefs {
    readonly id: FieldRef<"ProblemSolved", 'String'>
    readonly userId: FieldRef<"ProblemSolved", 'String'>
    readonly problemId: FieldRef<"ProblemSolved", 'String'>
    readonly createdAt: FieldRef<"ProblemSolved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemSolved findUnique
   */
  export type ProblemSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved findUniqueOrThrow
   */
  export type ProblemSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved findFirst
   */
  export type ProblemSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved findFirstOrThrow
   */
  export type ProblemSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved findMany
   */
  export type ProblemSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolveds to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved create
   */
  export type ProblemSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemSolved.
     */
    data: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>
  }

  /**
   * ProblemSolved createMany
   */
  export type ProblemSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemSolved createManyAndReturn
   */
  export type ProblemSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemSolved update
   */
  export type ProblemSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemSolved.
     */
    data: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>
    /**
     * Choose, which ProblemSolved to update.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved updateMany
   */
  export type ProblemSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number
  }

  /**
   * ProblemSolved updateManyAndReturn
   */
  export type ProblemSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemSolved upsert
   */
  export type ProblemSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemSolved to update in case it exists.
     */
    where: ProblemSolvedWhereUniqueInput
    /**
     * In case the ProblemSolved found by the `where` argument doesn't exist, create a new ProblemSolved with this data.
     */
    create: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>
    /**
     * In case the ProblemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>
  }

  /**
   * ProblemSolved delete
   */
  export type ProblemSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter which ProblemSolved to delete.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved deleteMany
   */
  export type ProblemSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemSolveds to delete
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to delete.
     */
    limit?: number
  }

  /**
   * ProblemSolved without action
   */
  export type ProblemSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
  }


  /**
   * Model Sheet
   */

  export type AggregateSheet = {
    _count: SheetCountAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  export type SheetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SheetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheet to aggregate.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sheets
    **/
    _count?: true | SheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetMaxAggregateInputType
  }

  export type GetSheetAggregateType<T extends SheetAggregateArgs> = {
        [P in keyof T & keyof AggregateSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheet[P]>
      : GetScalarType<T[P], AggregateSheet[P]>
  }




  export type SheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithAggregationInput | SheetOrderByWithAggregationInput[]
    by: SheetScalarFieldEnum[] | SheetScalarFieldEnum
    having?: SheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetCountAggregateInputType | true
    _min?: SheetMinAggregateInputType
    _max?: SheetMaxAggregateInputType
  }

  export type SheetGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SheetCountAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  type GetSheetGroupByPayload<T extends SheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetGroupByOutputType[P]>
            : GetScalarType<T[P], SheetGroupByOutputType[P]>
        }
      >
    >


  export type SheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topics?: boolean | Sheet$topicsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["sheet"]>
  export type SheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | Sheet$topicsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sheet"
    objects: {
      topics: Prisma.$TopicPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sheet"]>
    composites: {}
  }

  type SheetGetPayload<S extends boolean | null | undefined | SheetDefaultArgs> = $Result.GetResult<Prisma.$SheetPayload, S>

  type SheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetCountAggregateInputType | true
    }

  export interface SheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sheet'], meta: { name: 'Sheet' } }
    /**
     * Find zero or one Sheet that matches the filter.
     * @param {SheetFindUniqueArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetFindUniqueArgs>(args: SelectSubset<T, SheetFindUniqueArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetFindUniqueOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetFindFirstArgs>(args?: SelectSubset<T, SheetFindFirstArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheet.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetWithIdOnly = await prisma.sheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetFindManyArgs>(args?: SelectSubset<T, SheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheet.
     * @param {SheetCreateArgs} args - Arguments to create a Sheet.
     * @example
     * // Create one Sheet
     * const Sheet = await prisma.sheet.create({
     *   data: {
     *     // ... data to create a Sheet
     *   }
     * })
     * 
     */
    create<T extends SheetCreateArgs>(args: SelectSubset<T, SheetCreateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {SheetCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetCreateManyArgs>(args?: SelectSubset<T, SheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {SheetCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheet.
     * @param {SheetDeleteArgs} args - Arguments to delete one Sheet.
     * @example
     * // Delete one Sheet
     * const Sheet = await prisma.sheet.delete({
     *   where: {
     *     // ... filter to delete one Sheet
     *   }
     * })
     * 
     */
    delete<T extends SheetDeleteArgs>(args: SelectSubset<T, SheetDeleteArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheet.
     * @param {SheetUpdateArgs} args - Arguments to update one Sheet.
     * @example
     * // Update one Sheet
     * const sheet = await prisma.sheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetUpdateArgs>(args: SelectSubset<T, SheetUpdateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {SheetDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetDeleteManyArgs>(args?: SelectSubset<T, SheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetUpdateManyArgs>(args: SelectSubset<T, SheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {SheetUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.updateManyAndReturn({
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
    updateManyAndReturn<T extends SheetUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheet.
     * @param {SheetUpsertArgs} args - Arguments to update or create a Sheet.
     * @example
     * // Update or create a Sheet
     * const sheet = await prisma.sheet.upsert({
     *   create: {
     *     // ... data to create a Sheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheet we want to update
     *   }
     * })
     */
    upsert<T extends SheetUpsertArgs>(args: SelectSubset<T, SheetUpsertArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheet.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends SheetCountArgs>(
      args?: Subset<T, SheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetAggregateArgs>(args: Subset<T, SheetAggregateArgs>): Prisma.PrismaPromise<GetSheetAggregateType<T>>

    /**
     * Group by Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetGroupByArgs} args - Group by arguments.
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
      T extends SheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetGroupByArgs['orderBy'] }
        : { orderBy?: SheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sheet model
   */
  readonly fields: SheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topics<T extends Sheet$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sheet model
   */
  interface SheetFieldRefs {
    readonly id: FieldRef<"Sheet", 'String'>
    readonly name: FieldRef<"Sheet", 'String'>
    readonly description: FieldRef<"Sheet", 'String'>
    readonly userId: FieldRef<"Sheet", 'String'>
    readonly createdAt: FieldRef<"Sheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Sheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sheet findUnique
   */
  export type SheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findUniqueOrThrow
   */
  export type SheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findFirst
   */
  export type SheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findFirstOrThrow
   */
  export type SheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findMany
   */
  export type SheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheets to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet create
   */
  export type SheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Sheet.
     */
    data: XOR<SheetCreateInput, SheetUncheckedCreateInput>
  }

  /**
   * Sheet createMany
   */
  export type SheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sheet createManyAndReturn
   */
  export type SheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet update
   */
  export type SheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Sheet.
     */
    data: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
    /**
     * Choose, which Sheet to update.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet updateMany
   */
  export type SheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
  }

  /**
   * Sheet updateManyAndReturn
   */
  export type SheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet upsert
   */
  export type SheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Sheet to update in case it exists.
     */
    where: SheetWhereUniqueInput
    /**
     * In case the Sheet found by the `where` argument doesn't exist, create a new Sheet with this data.
     */
    create: XOR<SheetCreateInput, SheetUncheckedCreateInput>
    /**
     * In case the Sheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
  }

  /**
   * Sheet delete
   */
  export type SheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter which Sheet to delete.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet deleteMany
   */
  export type SheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheets to delete
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to delete.
     */
    limit?: number
  }

  /**
   * Sheet.topics
   */
  export type Sheet$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Sheet without action
   */
  export type SheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    name: string | null
    sheetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sheetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    sheetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    sheetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    sheetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    sheetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    name: string
    sheetId: string
    createdAt: Date
    updatedAt: Date
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subtopics?: boolean | Topic$subtopicsArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    name?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sheetId" | "createdAt" | "updatedAt", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopics?: boolean | Topic$subtopicsArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      subtopics: Prisma.$SubtopicPayload<ExtArgs>[]
      sheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sheetId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
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
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
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
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtopics<T extends Topic$subtopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$subtopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly sheetId: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.subtopics
   */
  export type Topic$subtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    cursor?: SubtopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model Subtopic
   */

  export type AggregateSubtopic = {
    _count: SubtopicCountAggregateOutputType | null
    _min: SubtopicMinAggregateOutputType | null
    _max: SubtopicMaxAggregateOutputType | null
  }

  export type SubtopicMinAggregateOutputType = {
    id: string | null
    name: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtopicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtopicCountAggregateOutputType = {
    id: number
    name: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubtopicMinAggregateInputType = {
    id?: true
    name?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtopicMaxAggregateInputType = {
    id?: true
    name?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtopicCountAggregateInputType = {
    id?: true
    name?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubtopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtopic to aggregate.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subtopics
    **/
    _count?: true | SubtopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtopicMaxAggregateInputType
  }

  export type GetSubtopicAggregateType<T extends SubtopicAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtopic[P]>
      : GetScalarType<T[P], AggregateSubtopic[P]>
  }




  export type SubtopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtopicWhereInput
    orderBy?: SubtopicOrderByWithAggregationInput | SubtopicOrderByWithAggregationInput[]
    by: SubtopicScalarFieldEnum[] | SubtopicScalarFieldEnum
    having?: SubtopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtopicCountAggregateInputType | true
    _min?: SubtopicMinAggregateInputType
    _max?: SubtopicMaxAggregateInputType
  }

  export type SubtopicGroupByOutputType = {
    id: string
    name: string
    topicId: string
    createdAt: Date
    updatedAt: Date
    _count: SubtopicCountAggregateOutputType | null
    _min: SubtopicMinAggregateOutputType | null
    _max: SubtopicMaxAggregateOutputType | null
  }

  type GetSubtopicGroupByPayload<T extends SubtopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtopicGroupByOutputType[P]>
            : GetScalarType<T[P], SubtopicGroupByOutputType[P]>
        }
      >
    >


  export type SubtopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | Subtopic$problemsArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    _count?: boolean | SubtopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtopic"]>

  export type SubtopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtopic"]>

  export type SubtopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtopic"]>

  export type SubtopicSelectScalar = {
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubtopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "topicId" | "createdAt" | "updatedAt", ExtArgs["result"]["subtopic"]>
  export type SubtopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | Subtopic$problemsArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    _count?: boolean | SubtopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubtopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type SubtopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $SubtopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subtopic"
    objects: {
      problems: Prisma.$ProblemInSubtopicPayload<ExtArgs>[]
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      topicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subtopic"]>
    composites: {}
  }

  type SubtopicGetPayload<S extends boolean | null | undefined | SubtopicDefaultArgs> = $Result.GetResult<Prisma.$SubtopicPayload, S>

  type SubtopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubtopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubtopicCountAggregateInputType | true
    }

  export interface SubtopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subtopic'], meta: { name: 'Subtopic' } }
    /**
     * Find zero or one Subtopic that matches the filter.
     * @param {SubtopicFindUniqueArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubtopicFindUniqueArgs>(args: SelectSubset<T, SubtopicFindUniqueArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subtopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubtopicFindUniqueOrThrowArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubtopicFindUniqueOrThrowArgs>(args: SelectSubset<T, SubtopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindFirstArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubtopicFindFirstArgs>(args?: SelectSubset<T, SubtopicFindFirstArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindFirstOrThrowArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubtopicFindFirstOrThrowArgs>(args?: SelectSubset<T, SubtopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subtopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtopics
     * const subtopics = await prisma.subtopic.findMany()
     * 
     * // Get first 10 Subtopics
     * const subtopics = await prisma.subtopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtopicWithIdOnly = await prisma.subtopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubtopicFindManyArgs>(args?: SelectSubset<T, SubtopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subtopic.
     * @param {SubtopicCreateArgs} args - Arguments to create a Subtopic.
     * @example
     * // Create one Subtopic
     * const Subtopic = await prisma.subtopic.create({
     *   data: {
     *     // ... data to create a Subtopic
     *   }
     * })
     * 
     */
    create<T extends SubtopicCreateArgs>(args: SelectSubset<T, SubtopicCreateArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subtopics.
     * @param {SubtopicCreateManyArgs} args - Arguments to create many Subtopics.
     * @example
     * // Create many Subtopics
     * const subtopic = await prisma.subtopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubtopicCreateManyArgs>(args?: SelectSubset<T, SubtopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subtopics and returns the data saved in the database.
     * @param {SubtopicCreateManyAndReturnArgs} args - Arguments to create many Subtopics.
     * @example
     * // Create many Subtopics
     * const subtopic = await prisma.subtopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subtopics and only return the `id`
     * const subtopicWithIdOnly = await prisma.subtopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubtopicCreateManyAndReturnArgs>(args?: SelectSubset<T, SubtopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subtopic.
     * @param {SubtopicDeleteArgs} args - Arguments to delete one Subtopic.
     * @example
     * // Delete one Subtopic
     * const Subtopic = await prisma.subtopic.delete({
     *   where: {
     *     // ... filter to delete one Subtopic
     *   }
     * })
     * 
     */
    delete<T extends SubtopicDeleteArgs>(args: SelectSubset<T, SubtopicDeleteArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subtopic.
     * @param {SubtopicUpdateArgs} args - Arguments to update one Subtopic.
     * @example
     * // Update one Subtopic
     * const subtopic = await prisma.subtopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubtopicUpdateArgs>(args: SelectSubset<T, SubtopicUpdateArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subtopics.
     * @param {SubtopicDeleteManyArgs} args - Arguments to filter Subtopics to delete.
     * @example
     * // Delete a few Subtopics
     * const { count } = await prisma.subtopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubtopicDeleteManyArgs>(args?: SelectSubset<T, SubtopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtopics
     * const subtopic = await prisma.subtopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubtopicUpdateManyArgs>(args: SelectSubset<T, SubtopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtopics and returns the data updated in the database.
     * @param {SubtopicUpdateManyAndReturnArgs} args - Arguments to update many Subtopics.
     * @example
     * // Update many Subtopics
     * const subtopic = await prisma.subtopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subtopics and only return the `id`
     * const subtopicWithIdOnly = await prisma.subtopic.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubtopicUpdateManyAndReturnArgs>(args: SelectSubset<T, SubtopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subtopic.
     * @param {SubtopicUpsertArgs} args - Arguments to update or create a Subtopic.
     * @example
     * // Update or create a Subtopic
     * const subtopic = await prisma.subtopic.upsert({
     *   create: {
     *     // ... data to create a Subtopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtopic we want to update
     *   }
     * })
     */
    upsert<T extends SubtopicUpsertArgs>(args: SelectSubset<T, SubtopicUpsertArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicCountArgs} args - Arguments to filter Subtopics to count.
     * @example
     * // Count the number of Subtopics
     * const count = await prisma.subtopic.count({
     *   where: {
     *     // ... the filter for the Subtopics we want to count
     *   }
     * })
    **/
    count<T extends SubtopicCountArgs>(
      args?: Subset<T, SubtopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtopicAggregateArgs>(args: Subset<T, SubtopicAggregateArgs>): Prisma.PrismaPromise<GetSubtopicAggregateType<T>>

    /**
     * Group by Subtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicGroupByArgs} args - Group by arguments.
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
      T extends SubtopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtopicGroupByArgs['orderBy'] }
        : { orderBy?: SubtopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubtopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subtopic model
   */
  readonly fields: SubtopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subtopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends Subtopic$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Subtopic$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subtopic model
   */
  interface SubtopicFieldRefs {
    readonly id: FieldRef<"Subtopic", 'String'>
    readonly name: FieldRef<"Subtopic", 'String'>
    readonly topicId: FieldRef<"Subtopic", 'String'>
    readonly createdAt: FieldRef<"Subtopic", 'DateTime'>
    readonly updatedAt: FieldRef<"Subtopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subtopic findUnique
   */
  export type SubtopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic findUniqueOrThrow
   */
  export type SubtopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic findFirst
   */
  export type SubtopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtopics.
     */
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic findFirstOrThrow
   */
  export type SubtopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtopics.
     */
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic findMany
   */
  export type SubtopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopics to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic create
   */
  export type SubtopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Subtopic.
     */
    data: XOR<SubtopicCreateInput, SubtopicUncheckedCreateInput>
  }

  /**
   * Subtopic createMany
   */
  export type SubtopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subtopics.
     */
    data: SubtopicCreateManyInput | SubtopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subtopic createManyAndReturn
   */
  export type SubtopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * The data used to create many Subtopics.
     */
    data: SubtopicCreateManyInput | SubtopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subtopic update
   */
  export type SubtopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Subtopic.
     */
    data: XOR<SubtopicUpdateInput, SubtopicUncheckedUpdateInput>
    /**
     * Choose, which Subtopic to update.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic updateMany
   */
  export type SubtopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subtopics.
     */
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyInput>
    /**
     * Filter which Subtopics to update
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to update.
     */
    limit?: number
  }

  /**
   * Subtopic updateManyAndReturn
   */
  export type SubtopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * The data used to update Subtopics.
     */
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyInput>
    /**
     * Filter which Subtopics to update
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subtopic upsert
   */
  export type SubtopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Subtopic to update in case it exists.
     */
    where: SubtopicWhereUniqueInput
    /**
     * In case the Subtopic found by the `where` argument doesn't exist, create a new Subtopic with this data.
     */
    create: XOR<SubtopicCreateInput, SubtopicUncheckedCreateInput>
    /**
     * In case the Subtopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtopicUpdateInput, SubtopicUncheckedUpdateInput>
  }

  /**
   * Subtopic delete
   */
  export type SubtopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter which Subtopic to delete.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic deleteMany
   */
  export type SubtopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtopics to delete
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to delete.
     */
    limit?: number
  }

  /**
   * Subtopic.problems
   */
  export type Subtopic$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    where?: ProblemInSubtopicWhereInput
    orderBy?: ProblemInSubtopicOrderByWithRelationInput | ProblemInSubtopicOrderByWithRelationInput[]
    cursor?: ProblemInSubtopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInSubtopicScalarFieldEnum | ProblemInSubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic without action
   */
  export type SubtopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
  }


  /**
   * Model ProblemInSubtopic
   */

  export type AggregateProblemInSubtopic = {
    _count: ProblemInSubtopicCountAggregateOutputType | null
    _min: ProblemInSubtopicMinAggregateOutputType | null
    _max: ProblemInSubtopicMaxAggregateOutputType | null
  }

  export type ProblemInSubtopicMinAggregateOutputType = {
    id: string | null
    subtopicId: string | null
    problemId: string | null
    createdAt: Date | null
  }

  export type ProblemInSubtopicMaxAggregateOutputType = {
    id: string | null
    subtopicId: string | null
    problemId: string | null
    createdAt: Date | null
  }

  export type ProblemInSubtopicCountAggregateOutputType = {
    id: number
    subtopicId: number
    problemId: number
    createdAt: number
    _all: number
  }


  export type ProblemInSubtopicMinAggregateInputType = {
    id?: true
    subtopicId?: true
    problemId?: true
    createdAt?: true
  }

  export type ProblemInSubtopicMaxAggregateInputType = {
    id?: true
    subtopicId?: true
    problemId?: true
    createdAt?: true
  }

  export type ProblemInSubtopicCountAggregateInputType = {
    id?: true
    subtopicId?: true
    problemId?: true
    createdAt?: true
    _all?: true
  }

  export type ProblemInSubtopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInSubtopic to aggregate.
     */
    where?: ProblemInSubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSubtopics to fetch.
     */
    orderBy?: ProblemInSubtopicOrderByWithRelationInput | ProblemInSubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemInSubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSubtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSubtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemInSubtopics
    **/
    _count?: true | ProblemInSubtopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemInSubtopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemInSubtopicMaxAggregateInputType
  }

  export type GetProblemInSubtopicAggregateType<T extends ProblemInSubtopicAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemInSubtopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInSubtopic[P]>
      : GetScalarType<T[P], AggregateProblemInSubtopic[P]>
  }




  export type ProblemInSubtopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInSubtopicWhereInput
    orderBy?: ProblemInSubtopicOrderByWithAggregationInput | ProblemInSubtopicOrderByWithAggregationInput[]
    by: ProblemInSubtopicScalarFieldEnum[] | ProblemInSubtopicScalarFieldEnum
    having?: ProblemInSubtopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemInSubtopicCountAggregateInputType | true
    _min?: ProblemInSubtopicMinAggregateInputType
    _max?: ProblemInSubtopicMaxAggregateInputType
  }

  export type ProblemInSubtopicGroupByOutputType = {
    id: string
    subtopicId: string
    problemId: string
    createdAt: Date
    _count: ProblemInSubtopicCountAggregateOutputType | null
    _min: ProblemInSubtopicMinAggregateOutputType | null
    _max: ProblemInSubtopicMaxAggregateOutputType | null
  }

  type GetProblemInSubtopicGroupByPayload<T extends ProblemInSubtopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInSubtopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemInSubtopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemInSubtopicGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemInSubtopicGroupByOutputType[P]>
        }
      >
    >


  export type ProblemInSubtopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subtopicId?: boolean
    problemId?: boolean
    createdAt?: boolean
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInSubtopic"]>

  export type ProblemInSubtopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subtopicId?: boolean
    problemId?: boolean
    createdAt?: boolean
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInSubtopic"]>

  export type ProblemInSubtopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subtopicId?: boolean
    problemId?: boolean
    createdAt?: boolean
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInSubtopic"]>

  export type ProblemInSubtopicSelectScalar = {
    id?: boolean
    subtopicId?: boolean
    problemId?: boolean
    createdAt?: boolean
  }

  export type ProblemInSubtopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subtopicId" | "problemId" | "createdAt", ExtArgs["result"]["problemInSubtopic"]>
  export type ProblemInSubtopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInSubtopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInSubtopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemInSubtopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemInSubtopic"
    objects: {
      subtopic: Prisma.$SubtopicPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subtopicId: string
      problemId: string
      createdAt: Date
    }, ExtArgs["result"]["problemInSubtopic"]>
    composites: {}
  }

  type ProblemInSubtopicGetPayload<S extends boolean | null | undefined | ProblemInSubtopicDefaultArgs> = $Result.GetResult<Prisma.$ProblemInSubtopicPayload, S>

  type ProblemInSubtopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemInSubtopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemInSubtopicCountAggregateInputType | true
    }

  export interface ProblemInSubtopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemInSubtopic'], meta: { name: 'ProblemInSubtopic' } }
    /**
     * Find zero or one ProblemInSubtopic that matches the filter.
     * @param {ProblemInSubtopicFindUniqueArgs} args - Arguments to find a ProblemInSubtopic
     * @example
     * // Get one ProblemInSubtopic
     * const problemInSubtopic = await prisma.problemInSubtopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemInSubtopicFindUniqueArgs>(args: SelectSubset<T, ProblemInSubtopicFindUniqueArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemInSubtopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemInSubtopicFindUniqueOrThrowArgs} args - Arguments to find a ProblemInSubtopic
     * @example
     * // Get one ProblemInSubtopic
     * const problemInSubtopic = await prisma.problemInSubtopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemInSubtopicFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemInSubtopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInSubtopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSubtopicFindFirstArgs} args - Arguments to find a ProblemInSubtopic
     * @example
     * // Get one ProblemInSubtopic
     * const problemInSubtopic = await prisma.problemInSubtopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemInSubtopicFindFirstArgs>(args?: SelectSubset<T, ProblemInSubtopicFindFirstArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInSubtopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSubtopicFindFirstOrThrowArgs} args - Arguments to find a ProblemInSubtopic
     * @example
     * // Get one ProblemInSubtopic
     * const problemInSubtopic = await prisma.problemInSubtopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemInSubtopicFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemInSubtopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemInSubtopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSubtopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInSubtopics
     * const problemInSubtopics = await prisma.problemInSubtopic.findMany()
     * 
     * // Get first 10 ProblemInSubtopics
     * const problemInSubtopics = await prisma.problemInSubtopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemInSubtopicWithIdOnly = await prisma.problemInSubtopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemInSubtopicFindManyArgs>(args?: SelectSubset<T, ProblemInSubtopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemInSubtopic.
     * @param {ProblemInSubtopicCreateArgs} args - Arguments to create a ProblemInSubtopic.
     * @example
     * // Create one ProblemInSubtopic
     * const ProblemInSubtopic = await prisma.problemInSubtopic.create({
     *   data: {
     *     // ... data to create a ProblemInSubtopic
     *   }
     * })
     * 
     */
    create<T extends ProblemInSubtopicCreateArgs>(args: SelectSubset<T, ProblemInSubtopicCreateArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemInSubtopics.
     * @param {ProblemInSubtopicCreateManyArgs} args - Arguments to create many ProblemInSubtopics.
     * @example
     * // Create many ProblemInSubtopics
     * const problemInSubtopic = await prisma.problemInSubtopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemInSubtopicCreateManyArgs>(args?: SelectSubset<T, ProblemInSubtopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemInSubtopics and returns the data saved in the database.
     * @param {ProblemInSubtopicCreateManyAndReturnArgs} args - Arguments to create many ProblemInSubtopics.
     * @example
     * // Create many ProblemInSubtopics
     * const problemInSubtopic = await prisma.problemInSubtopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemInSubtopics and only return the `id`
     * const problemInSubtopicWithIdOnly = await prisma.problemInSubtopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemInSubtopicCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemInSubtopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemInSubtopic.
     * @param {ProblemInSubtopicDeleteArgs} args - Arguments to delete one ProblemInSubtopic.
     * @example
     * // Delete one ProblemInSubtopic
     * const ProblemInSubtopic = await prisma.problemInSubtopic.delete({
     *   where: {
     *     // ... filter to delete one ProblemInSubtopic
     *   }
     * })
     * 
     */
    delete<T extends ProblemInSubtopicDeleteArgs>(args: SelectSubset<T, ProblemInSubtopicDeleteArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemInSubtopic.
     * @param {ProblemInSubtopicUpdateArgs} args - Arguments to update one ProblemInSubtopic.
     * @example
     * // Update one ProblemInSubtopic
     * const problemInSubtopic = await prisma.problemInSubtopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemInSubtopicUpdateArgs>(args: SelectSubset<T, ProblemInSubtopicUpdateArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemInSubtopics.
     * @param {ProblemInSubtopicDeleteManyArgs} args - Arguments to filter ProblemInSubtopics to delete.
     * @example
     * // Delete a few ProblemInSubtopics
     * const { count } = await prisma.problemInSubtopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemInSubtopicDeleteManyArgs>(args?: SelectSubset<T, ProblemInSubtopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInSubtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSubtopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInSubtopics
     * const problemInSubtopic = await prisma.problemInSubtopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemInSubtopicUpdateManyArgs>(args: SelectSubset<T, ProblemInSubtopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInSubtopics and returns the data updated in the database.
     * @param {ProblemInSubtopicUpdateManyAndReturnArgs} args - Arguments to update many ProblemInSubtopics.
     * @example
     * // Update many ProblemInSubtopics
     * const problemInSubtopic = await prisma.problemInSubtopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemInSubtopics and only return the `id`
     * const problemInSubtopicWithIdOnly = await prisma.problemInSubtopic.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemInSubtopicUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemInSubtopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemInSubtopic.
     * @param {ProblemInSubtopicUpsertArgs} args - Arguments to update or create a ProblemInSubtopic.
     * @example
     * // Update or create a ProblemInSubtopic
     * const problemInSubtopic = await prisma.problemInSubtopic.upsert({
     *   create: {
     *     // ... data to create a ProblemInSubtopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInSubtopic we want to update
     *   }
     * })
     */
    upsert<T extends ProblemInSubtopicUpsertArgs>(args: SelectSubset<T, ProblemInSubtopicUpsertArgs<ExtArgs>>): Prisma__ProblemInSubtopicClient<$Result.GetResult<Prisma.$ProblemInSubtopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemInSubtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSubtopicCountArgs} args - Arguments to filter ProblemInSubtopics to count.
     * @example
     * // Count the number of ProblemInSubtopics
     * const count = await prisma.problemInSubtopic.count({
     *   where: {
     *     // ... the filter for the ProblemInSubtopics we want to count
     *   }
     * })
    **/
    count<T extends ProblemInSubtopicCountArgs>(
      args?: Subset<T, ProblemInSubtopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemInSubtopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemInSubtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSubtopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemInSubtopicAggregateArgs>(args: Subset<T, ProblemInSubtopicAggregateArgs>): Prisma.PrismaPromise<GetProblemInSubtopicAggregateType<T>>

    /**
     * Group by ProblemInSubtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSubtopicGroupByArgs} args - Group by arguments.
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
      T extends ProblemInSubtopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemInSubtopicGroupByArgs['orderBy'] }
        : { orderBy?: ProblemInSubtopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemInSubtopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemInSubtopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemInSubtopic model
   */
  readonly fields: ProblemInSubtopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemInSubtopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemInSubtopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtopic<T extends SubtopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubtopicDefaultArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemInSubtopic model
   */
  interface ProblemInSubtopicFieldRefs {
    readonly id: FieldRef<"ProblemInSubtopic", 'String'>
    readonly subtopicId: FieldRef<"ProblemInSubtopic", 'String'>
    readonly problemId: FieldRef<"ProblemInSubtopic", 'String'>
    readonly createdAt: FieldRef<"ProblemInSubtopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemInSubtopic findUnique
   */
  export type ProblemInSubtopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSubtopic to fetch.
     */
    where: ProblemInSubtopicWhereUniqueInput
  }

  /**
   * ProblemInSubtopic findUniqueOrThrow
   */
  export type ProblemInSubtopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSubtopic to fetch.
     */
    where: ProblemInSubtopicWhereUniqueInput
  }

  /**
   * ProblemInSubtopic findFirst
   */
  export type ProblemInSubtopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSubtopic to fetch.
     */
    where?: ProblemInSubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSubtopics to fetch.
     */
    orderBy?: ProblemInSubtopicOrderByWithRelationInput | ProblemInSubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInSubtopics.
     */
    cursor?: ProblemInSubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSubtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSubtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInSubtopics.
     */
    distinct?: ProblemInSubtopicScalarFieldEnum | ProblemInSubtopicScalarFieldEnum[]
  }

  /**
   * ProblemInSubtopic findFirstOrThrow
   */
  export type ProblemInSubtopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSubtopic to fetch.
     */
    where?: ProblemInSubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSubtopics to fetch.
     */
    orderBy?: ProblemInSubtopicOrderByWithRelationInput | ProblemInSubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInSubtopics.
     */
    cursor?: ProblemInSubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSubtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSubtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInSubtopics.
     */
    distinct?: ProblemInSubtopicScalarFieldEnum | ProblemInSubtopicScalarFieldEnum[]
  }

  /**
   * ProblemInSubtopic findMany
   */
  export type ProblemInSubtopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSubtopics to fetch.
     */
    where?: ProblemInSubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSubtopics to fetch.
     */
    orderBy?: ProblemInSubtopicOrderByWithRelationInput | ProblemInSubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemInSubtopics.
     */
    cursor?: ProblemInSubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSubtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSubtopics.
     */
    skip?: number
    distinct?: ProblemInSubtopicScalarFieldEnum | ProblemInSubtopicScalarFieldEnum[]
  }

  /**
   * ProblemInSubtopic create
   */
  export type ProblemInSubtopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemInSubtopic.
     */
    data: XOR<ProblemInSubtopicCreateInput, ProblemInSubtopicUncheckedCreateInput>
  }

  /**
   * ProblemInSubtopic createMany
   */
  export type ProblemInSubtopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemInSubtopics.
     */
    data: ProblemInSubtopicCreateManyInput | ProblemInSubtopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemInSubtopic createManyAndReturn
   */
  export type ProblemInSubtopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemInSubtopics.
     */
    data: ProblemInSubtopicCreateManyInput | ProblemInSubtopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInSubtopic update
   */
  export type ProblemInSubtopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemInSubtopic.
     */
    data: XOR<ProblemInSubtopicUpdateInput, ProblemInSubtopicUncheckedUpdateInput>
    /**
     * Choose, which ProblemInSubtopic to update.
     */
    where: ProblemInSubtopicWhereUniqueInput
  }

  /**
   * ProblemInSubtopic updateMany
   */
  export type ProblemInSubtopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemInSubtopics.
     */
    data: XOR<ProblemInSubtopicUpdateManyMutationInput, ProblemInSubtopicUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInSubtopics to update
     */
    where?: ProblemInSubtopicWhereInput
    /**
     * Limit how many ProblemInSubtopics to update.
     */
    limit?: number
  }

  /**
   * ProblemInSubtopic updateManyAndReturn
   */
  export type ProblemInSubtopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * The data used to update ProblemInSubtopics.
     */
    data: XOR<ProblemInSubtopicUpdateManyMutationInput, ProblemInSubtopicUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInSubtopics to update
     */
    where?: ProblemInSubtopicWhereInput
    /**
     * Limit how many ProblemInSubtopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInSubtopic upsert
   */
  export type ProblemInSubtopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemInSubtopic to update in case it exists.
     */
    where: ProblemInSubtopicWhereUniqueInput
    /**
     * In case the ProblemInSubtopic found by the `where` argument doesn't exist, create a new ProblemInSubtopic with this data.
     */
    create: XOR<ProblemInSubtopicCreateInput, ProblemInSubtopicUncheckedCreateInput>
    /**
     * In case the ProblemInSubtopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemInSubtopicUpdateInput, ProblemInSubtopicUncheckedUpdateInput>
  }

  /**
   * ProblemInSubtopic delete
   */
  export type ProblemInSubtopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
    /**
     * Filter which ProblemInSubtopic to delete.
     */
    where: ProblemInSubtopicWhereUniqueInput
  }

  /**
   * ProblemInSubtopic deleteMany
   */
  export type ProblemInSubtopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInSubtopics to delete
     */
    where?: ProblemInSubtopicWhereInput
    /**
     * Limit how many ProblemInSubtopics to delete.
     */
    limit?: number
  }

  /**
   * ProblemInSubtopic without action
   */
  export type ProblemInSubtopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSubtopic
     */
    select?: ProblemInSubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSubtopic
     */
    omit?: ProblemInSubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSubtopicInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    image: 'image',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    testCases: 'testCases',
    codeSnippets: 'codeSnippets',
    referenceSolutions: 'referenceSolutions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    sourceCode: 'sourceCode',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const ProblemSolvedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createdAt: 'createdAt'
  };

  export type ProblemSolvedScalarFieldEnum = (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum]


  export const SheetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SheetScalarFieldEnum = (typeof SheetScalarFieldEnum)[keyof typeof SheetScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sheetId: 'sheetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const SubtopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubtopicScalarFieldEnum = (typeof SubtopicScalarFieldEnum)[keyof typeof SubtopicScalarFieldEnum]


  export const ProblemInSubtopicScalarFieldEnum: {
    id: 'id',
    subtopicId: 'subtopicId',
    problemId: 'problemId',
    createdAt: 'createdAt'
  };

  export type ProblemInSubtopicScalarFieldEnum = (typeof ProblemInSubtopicScalarFieldEnum)[keyof typeof ProblemInSubtopicScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solvedProblems?: ProblemSolvedListRelationFilter
    Sheets?: SheetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    solvedProblems?: ProblemSolvedOrderByRelationAggregateInput
    Sheets?: SheetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solvedProblems?: ProblemSolvedListRelationFilter
    Sheets?: SheetListRelationFilter
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testCases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    subtopics?: ProblemInSubtopicListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
    solvedBy?: ProblemSolvedOrderByRelationAggregateInput
    subtopics?: ProblemInSubtopicOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testCases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    subtopics?: ProblemInSubtopicListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    testCases?: JsonWithAggregatesFilter<"Problem">
    codeSnippets?: JsonWithAggregatesFilter<"Problem">
    referenceSolutions?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    problemId?: StringWithAggregatesFilter<"Submission"> | string
    sourceCode?: StringWithAggregatesFilter<"Submission"> | string
    language?: StringWithAggregatesFilter<"Submission"> | string
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type ProblemSolvedWhereInput = {
    AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    OR?: ProblemSolvedWhereInput[]
    NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    id?: StringFilter<"ProblemSolved"> | string
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemSolvedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: ProblemSolvedUserIdProblemIdCompoundUniqueInput
    AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    OR?: ProblemSolvedWhereInput[]
    NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type ProblemSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    _count?: ProblemSolvedCountOrderByAggregateInput
    _max?: ProblemSolvedMaxOrderByAggregateInput
    _min?: ProblemSolvedMinOrderByAggregateInput
  }

  export type ProblemSolvedScalarWhereWithAggregatesInput = {
    AND?: ProblemSolvedScalarWhereWithAggregatesInput | ProblemSolvedScalarWhereWithAggregatesInput[]
    OR?: ProblemSolvedScalarWhereWithAggregatesInput[]
    NOT?: ProblemSolvedScalarWhereWithAggregatesInput | ProblemSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemSolved"> | string
    userId?: StringWithAggregatesFilter<"ProblemSolved"> | string
    problemId?: StringWithAggregatesFilter<"ProblemSolved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemSolved"> | Date | string
  }

  export type SheetWhereInput = {
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    id?: StringFilter<"Sheet"> | string
    name?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    userId?: StringFilter<"Sheet"> | string
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    topics?: TopicListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SheetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topics?: TopicOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    name?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    userId?: StringFilter<"Sheet"> | string
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    topics?: TopicListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SheetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SheetCountOrderByAggregateInput
    _max?: SheetMaxOrderByAggregateInput
    _min?: SheetMinOrderByAggregateInput
  }

  export type SheetScalarWhereWithAggregatesInput = {
    AND?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    OR?: SheetScalarWhereWithAggregatesInput[]
    NOT?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sheet"> | string
    name?: StringWithAggregatesFilter<"Sheet"> | string
    description?: StringNullableWithAggregatesFilter<"Sheet"> | string | null
    userId?: StringWithAggregatesFilter<"Sheet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    sheetId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    subtopics?: SubtopicListRelationFilter
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subtopics?: SubtopicOrderByRelationAggregateInput
    sheet?: SheetOrderByWithRelationInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    name?: StringFilter<"Topic"> | string
    sheetId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    subtopics?: SubtopicListRelationFilter
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    name?: StringWithAggregatesFilter<"Topic"> | string
    sheetId?: StringWithAggregatesFilter<"Topic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type SubtopicWhereInput = {
    AND?: SubtopicWhereInput | SubtopicWhereInput[]
    OR?: SubtopicWhereInput[]
    NOT?: SubtopicWhereInput | SubtopicWhereInput[]
    id?: StringFilter<"Subtopic"> | string
    name?: StringFilter<"Subtopic"> | string
    topicId?: StringFilter<"Subtopic"> | string
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
    problems?: ProblemInSubtopicListRelationFilter
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type SubtopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemInSubtopicOrderByRelationAggregateInput
    topic?: TopicOrderByWithRelationInput
  }

  export type SubtopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubtopicWhereInput | SubtopicWhereInput[]
    OR?: SubtopicWhereInput[]
    NOT?: SubtopicWhereInput | SubtopicWhereInput[]
    name?: StringFilter<"Subtopic"> | string
    topicId?: StringFilter<"Subtopic"> | string
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
    problems?: ProblemInSubtopicListRelationFilter
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id">

  export type SubtopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubtopicCountOrderByAggregateInput
    _max?: SubtopicMaxOrderByAggregateInput
    _min?: SubtopicMinOrderByAggregateInput
  }

  export type SubtopicScalarWhereWithAggregatesInput = {
    AND?: SubtopicScalarWhereWithAggregatesInput | SubtopicScalarWhereWithAggregatesInput[]
    OR?: SubtopicScalarWhereWithAggregatesInput[]
    NOT?: SubtopicScalarWhereWithAggregatesInput | SubtopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subtopic"> | string
    name?: StringWithAggregatesFilter<"Subtopic"> | string
    topicId?: StringWithAggregatesFilter<"Subtopic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subtopic"> | Date | string
  }

  export type ProblemInSubtopicWhereInput = {
    AND?: ProblemInSubtopicWhereInput | ProblemInSubtopicWhereInput[]
    OR?: ProblemInSubtopicWhereInput[]
    NOT?: ProblemInSubtopicWhereInput | ProblemInSubtopicWhereInput[]
    id?: StringFilter<"ProblemInSubtopic"> | string
    subtopicId?: StringFilter<"ProblemInSubtopic"> | string
    problemId?: StringFilter<"ProblemInSubtopic"> | string
    createdAt?: DateTimeFilter<"ProblemInSubtopic"> | Date | string
    subtopic?: XOR<SubtopicScalarRelationFilter, SubtopicWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemInSubtopicOrderByWithRelationInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    subtopic?: SubtopicOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemInSubtopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subtopicId_problemId?: ProblemInSubtopicSubtopicIdProblemIdCompoundUniqueInput
    AND?: ProblemInSubtopicWhereInput | ProblemInSubtopicWhereInput[]
    OR?: ProblemInSubtopicWhereInput[]
    NOT?: ProblemInSubtopicWhereInput | ProblemInSubtopicWhereInput[]
    subtopicId?: StringFilter<"ProblemInSubtopic"> | string
    problemId?: StringFilter<"ProblemInSubtopic"> | string
    createdAt?: DateTimeFilter<"ProblemInSubtopic"> | Date | string
    subtopic?: XOR<SubtopicScalarRelationFilter, SubtopicWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "subtopicId_problemId">

  export type ProblemInSubtopicOrderByWithAggregationInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    _count?: ProblemInSubtopicCountOrderByAggregateInput
    _max?: ProblemInSubtopicMaxOrderByAggregateInput
    _min?: ProblemInSubtopicMinOrderByAggregateInput
  }

  export type ProblemInSubtopicScalarWhereWithAggregatesInput = {
    AND?: ProblemInSubtopicScalarWhereWithAggregatesInput | ProblemInSubtopicScalarWhereWithAggregatesInput[]
    OR?: ProblemInSubtopicScalarWhereWithAggregatesInput[]
    NOT?: ProblemInSubtopicScalarWhereWithAggregatesInput | ProblemInSubtopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemInSubtopic"> | string
    subtopicId?: StringWithAggregatesFilter<"ProblemInSubtopic"> | string
    problemId?: StringWithAggregatesFilter<"ProblemInSubtopic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemInSubtopic"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedCreateNestedManyWithoutUserInput
    Sheets?: SheetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    Sheets?: SheetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUpdateManyWithoutUserNestedInput
    Sheets?: SheetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    Sheets?: SheetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedProblemsInput
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type ProblemSolvedUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
  }

  export type ProblemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type ProblemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
  }

  export type ProblemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicCreateNestedManyWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUpdateManyWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicCreateNestedManyWithoutTopicInput
    sheet: SheetCreateNestedOneWithoutTopicsInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    name: string
    sheetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUpdateManyWithoutTopicNestedInput
    sheet?: SheetUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    name: string
    sheetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSubtopicCreateNestedManyWithoutSubtopicInput
    topic: TopicCreateNestedOneWithoutSubtopicsInput
  }

  export type SubtopicUncheckedCreateInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSubtopicUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSubtopicUpdateManyWithoutSubtopicNestedInput
    topic?: TopicUpdateOneRequiredWithoutSubtopicsNestedInput
  }

  export type SubtopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSubtopicUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicCreateManyInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicCreateInput = {
    id?: string
    createdAt?: Date | string
    subtopic: SubtopicCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutSubtopicsInput
  }

  export type ProblemInSubtopicUncheckedCreateInput = {
    id?: string
    subtopicId: string
    problemId: string
    createdAt?: Date | string
  }

  export type ProblemInSubtopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopic?: SubtopicUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubtopicsNestedInput
  }

  export type ProblemInSubtopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicCreateManyInput = {
    id?: string
    subtopicId: string
    problemId: string
    createdAt?: Date | string
  }

  export type ProblemInSubtopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ProblemSolvedListRelationFilter = {
    every?: ProblemSolvedWhereInput
    some?: ProblemSolvedWhereInput
    none?: ProblemSolvedWhereInput
  }

  export type SheetListRelationFilter = {
    every?: SheetWhereInput
    some?: SheetWhereInput
    none?: SheetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProblemInSubtopicListRelationFilter = {
    every?: ProblemInSubtopicWhereInput
    some?: ProblemInSubtopicWhereInput
    none?: ProblemInSubtopicWhereInput
  }

  export type ProblemInSubtopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    testCases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type ProblemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type ProblemSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProblemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProblemSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicListRelationFilter = {
    every?: SubtopicWhereInput
    some?: SubtopicWhereInput
    none?: SubtopicWhereInput
  }

  export type SheetScalarRelationFilter = {
    is?: SheetWhereInput
    isNot?: SheetWhereInput
  }

  export type SubtopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type SubtopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicScalarRelationFilter = {
    is?: SubtopicWhereInput
    isNot?: SubtopicWhereInput
  }

  export type ProblemInSubtopicSubtopicIdProblemIdCompoundUniqueInput = {
    subtopicId: string
    problemId: string
  }

  export type ProblemInSubtopicCountOrderByAggregateInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProblemInSubtopicMaxOrderByAggregateInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProblemInSubtopicMinOrderByAggregateInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type SheetCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type SheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutUserInput | ProblemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type SheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutUserInput | SheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutUserInput | SheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutUserInput | SheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutUserInput | ProblemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type SheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutUserInput | SheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutUserInput | SheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutUserInput | SheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type ProblemInSubtopicCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutProblemInput, ProblemInSubtopicUncheckedCreateWithoutProblemInput> | ProblemInSubtopicCreateWithoutProblemInput[] | ProblemInSubtopicUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutProblemInput | ProblemInSubtopicCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInSubtopicCreateManyProblemInputEnvelope
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type ProblemInSubtopicUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutProblemInput, ProblemInSubtopicUncheckedCreateWithoutProblemInput> | ProblemInSubtopicCreateWithoutProblemInput[] | ProblemInSubtopicUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutProblemInput | ProblemInSubtopicCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInSubtopicCreateManyProblemInputEnvelope
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutProblemInput | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type ProblemInSubtopicUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutProblemInput, ProblemInSubtopicUncheckedCreateWithoutProblemInput> | ProblemInSubtopicCreateWithoutProblemInput[] | ProblemInSubtopicUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutProblemInput | ProblemInSubtopicCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInSubtopicUpsertWithWhereUniqueWithoutProblemInput | ProblemInSubtopicUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInSubtopicCreateManyProblemInputEnvelope
    set?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    disconnect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    delete?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    update?: ProblemInSubtopicUpdateWithWhereUniqueWithoutProblemInput | ProblemInSubtopicUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInSubtopicUpdateManyWithWhereWithoutProblemInput | ProblemInSubtopicUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInSubtopicScalarWhereInput | ProblemInSubtopicScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutProblemInput | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type ProblemInSubtopicUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutProblemInput, ProblemInSubtopicUncheckedCreateWithoutProblemInput> | ProblemInSubtopicCreateWithoutProblemInput[] | ProblemInSubtopicUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutProblemInput | ProblemInSubtopicCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInSubtopicUpsertWithWhereUniqueWithoutProblemInput | ProblemInSubtopicUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInSubtopicCreateManyProblemInputEnvelope
    set?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    disconnect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    delete?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    update?: ProblemInSubtopicUpdateWithWhereUniqueWithoutProblemInput | ProblemInSubtopicUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInSubtopicUpdateManyWithWhereWithoutProblemInput | ProblemInSubtopicUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInSubtopicScalarWhereInput | ProblemInSubtopicScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    upsert?: ProblemUpsertWithoutSubmissionsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionsInput, ProblemUpdateWithoutSubmissionsInput>, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserCreateNestedOneWithoutSolvedProblemsInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSolvedProblemsNestedInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    upsert?: UserUpsertWithoutSolvedProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolvedProblemsInput, UserUpdateWithoutSolvedProblemsInput>, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSolvedByNestedInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    upsert?: ProblemUpsertWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolvedByInput, ProblemUpdateWithoutSolvedByInput>, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type TopicCreateNestedManyWithoutSheetInput = {
    create?: XOR<TopicCreateWithoutSheetInput, TopicUncheckedCreateWithoutSheetInput> | TopicCreateWithoutSheetInput[] | TopicUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutSheetInput | TopicCreateOrConnectWithoutSheetInput[]
    createMany?: TopicCreateManySheetInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSheetsInput = {
    create?: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetsInput
    connect?: UserWhereUniqueInput
  }

  export type TopicUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<TopicCreateWithoutSheetInput, TopicUncheckedCreateWithoutSheetInput> | TopicCreateWithoutSheetInput[] | TopicUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutSheetInput | TopicCreateOrConnectWithoutSheetInput[]
    createMany?: TopicCreateManySheetInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type TopicUpdateManyWithoutSheetNestedInput = {
    create?: XOR<TopicCreateWithoutSheetInput, TopicUncheckedCreateWithoutSheetInput> | TopicCreateWithoutSheetInput[] | TopicUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutSheetInput | TopicCreateOrConnectWithoutSheetInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutSheetInput | TopicUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: TopicCreateManySheetInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutSheetInput | TopicUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutSheetInput | TopicUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetsInput
    upsert?: UserUpsertWithoutSheetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSheetsInput, UserUpdateWithoutSheetsInput>, UserUncheckedUpdateWithoutSheetsInput>
  }

  export type TopicUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<TopicCreateWithoutSheetInput, TopicUncheckedCreateWithoutSheetInput> | TopicCreateWithoutSheetInput[] | TopicUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutSheetInput | TopicCreateOrConnectWithoutSheetInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutSheetInput | TopicUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: TopicCreateManySheetInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutSheetInput | TopicUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutSheetInput | TopicUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type SubtopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
  }

  export type SheetCreateNestedOneWithoutTopicsInput = {
    create?: XOR<SheetCreateWithoutTopicsInput, SheetUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutTopicsInput
    connect?: SheetWhereUniqueInput
  }

  export type SubtopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
  }

  export type SubtopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    upsert?: SubtopicUpsertWithWhereUniqueWithoutTopicInput | SubtopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    set?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    disconnect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    delete?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    update?: SubtopicUpdateWithWhereUniqueWithoutTopicInput | SubtopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SubtopicUpdateManyWithWhereWithoutTopicInput | SubtopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
  }

  export type SheetUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<SheetCreateWithoutTopicsInput, SheetUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutTopicsInput
    upsert?: SheetUpsertWithoutTopicsInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutTopicsInput, SheetUpdateWithoutTopicsInput>, SheetUncheckedUpdateWithoutTopicsInput>
  }

  export type SubtopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    upsert?: SubtopicUpsertWithWhereUniqueWithoutTopicInput | SubtopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    set?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    disconnect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    delete?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    update?: SubtopicUpdateWithWhereUniqueWithoutTopicInput | SubtopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SubtopicUpdateManyWithWhereWithoutTopicInput | SubtopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
  }

  export type ProblemInSubtopicCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutSubtopicInput, ProblemInSubtopicUncheckedCreateWithoutSubtopicInput> | ProblemInSubtopicCreateWithoutSubtopicInput[] | ProblemInSubtopicUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutSubtopicInput | ProblemInSubtopicCreateOrConnectWithoutSubtopicInput[]
    createMany?: ProblemInSubtopicCreateManySubtopicInputEnvelope
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
  }

  export type TopicCreateNestedOneWithoutSubtopicsInput = {
    create?: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type ProblemInSubtopicUncheckedCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutSubtopicInput, ProblemInSubtopicUncheckedCreateWithoutSubtopicInput> | ProblemInSubtopicCreateWithoutSubtopicInput[] | ProblemInSubtopicUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutSubtopicInput | ProblemInSubtopicCreateOrConnectWithoutSubtopicInput[]
    createMany?: ProblemInSubtopicCreateManySubtopicInputEnvelope
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
  }

  export type ProblemInSubtopicUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutSubtopicInput, ProblemInSubtopicUncheckedCreateWithoutSubtopicInput> | ProblemInSubtopicCreateWithoutSubtopicInput[] | ProblemInSubtopicUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutSubtopicInput | ProblemInSubtopicCreateOrConnectWithoutSubtopicInput[]
    upsert?: ProblemInSubtopicUpsertWithWhereUniqueWithoutSubtopicInput | ProblemInSubtopicUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: ProblemInSubtopicCreateManySubtopicInputEnvelope
    set?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    disconnect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    delete?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    update?: ProblemInSubtopicUpdateWithWhereUniqueWithoutSubtopicInput | ProblemInSubtopicUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: ProblemInSubtopicUpdateManyWithWhereWithoutSubtopicInput | ProblemInSubtopicUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: ProblemInSubtopicScalarWhereInput | ProblemInSubtopicScalarWhereInput[]
  }

  export type TopicUpdateOneRequiredWithoutSubtopicsNestedInput = {
    create?: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicsInput
    upsert?: TopicUpsertWithoutSubtopicsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutSubtopicsInput, TopicUpdateWithoutSubtopicsInput>, TopicUncheckedUpdateWithoutSubtopicsInput>
  }

  export type ProblemInSubtopicUncheckedUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<ProblemInSubtopicCreateWithoutSubtopicInput, ProblemInSubtopicUncheckedCreateWithoutSubtopicInput> | ProblemInSubtopicCreateWithoutSubtopicInput[] | ProblemInSubtopicUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: ProblemInSubtopicCreateOrConnectWithoutSubtopicInput | ProblemInSubtopicCreateOrConnectWithoutSubtopicInput[]
    upsert?: ProblemInSubtopicUpsertWithWhereUniqueWithoutSubtopicInput | ProblemInSubtopicUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: ProblemInSubtopicCreateManySubtopicInputEnvelope
    set?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    disconnect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    delete?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    connect?: ProblemInSubtopicWhereUniqueInput | ProblemInSubtopicWhereUniqueInput[]
    update?: ProblemInSubtopicUpdateWithWhereUniqueWithoutSubtopicInput | ProblemInSubtopicUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: ProblemInSubtopicUpdateManyWithWhereWithoutSubtopicInput | ProblemInSubtopicUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: ProblemInSubtopicScalarWhereInput | ProblemInSubtopicScalarWhereInput[]
  }

  export type SubtopicCreateNestedOneWithoutProblemsInput = {
    create?: XOR<SubtopicCreateWithoutProblemsInput, SubtopicUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutProblemsInput
    connect?: SubtopicWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubtopicsInput = {
    create?: XOR<ProblemCreateWithoutSubtopicsInput, ProblemUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubtopicsInput
    connect?: ProblemWhereUniqueInput
  }

  export type SubtopicUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<SubtopicCreateWithoutProblemsInput, SubtopicUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutProblemsInput
    upsert?: SubtopicUpsertWithoutProblemsInput
    connect?: SubtopicWhereUniqueInput
    update?: XOR<XOR<SubtopicUpdateToOneWithWhereWithoutProblemsInput, SubtopicUpdateWithoutProblemsInput>, SubtopicUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubtopicsNestedInput = {
    create?: XOR<ProblemCreateWithoutSubtopicsInput, ProblemUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubtopicsInput
    upsert?: ProblemUpsertWithoutSubtopicsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubtopicsInput, ProblemUpdateWithoutSubtopicsInput>, ProblemUncheckedUpdateWithoutSubtopicsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemSolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type ProblemSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
  }

  export type ProblemSolvedCreateOrConnectWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    create: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemSolvedCreateManyUserInputEnvelope = {
    data: ProblemSolvedCreateManyUserInput | ProblemSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SheetCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutUserInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput>
  }

  export type SheetCreateManyUserInputEnvelope = {
    data: SheetCreateManyUserInput | SheetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testCases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type ProblemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    update: XOR<ProblemSolvedUpdateWithoutUserInput, ProblemSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    data: XOR<ProblemSolvedUpdateWithoutUserInput, ProblemSolvedUncheckedUpdateWithoutUserInput>
  }

  export type ProblemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: ProblemSolvedScalarWhereInput
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemSolvedScalarWhereInput = {
    AND?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
    OR?: ProblemSolvedScalarWhereInput[]
    NOT?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
    id?: StringFilter<"ProblemSolved"> | string
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
  }

  export type SheetUpsertWithWhereUniqueWithoutUserInput = {
    where: SheetWhereUniqueInput
    update: XOR<SheetUpdateWithoutUserInput, SheetUncheckedUpdateWithoutUserInput>
    create: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput>
  }

  export type SheetUpdateWithWhereUniqueWithoutUserInput = {
    where: SheetWhereUniqueInput
    data: XOR<SheetUpdateWithoutUserInput, SheetUncheckedUpdateWithoutUserInput>
  }

  export type SheetUpdateManyWithWhereWithoutUserInput = {
    where: SheetScalarWhereInput
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyWithoutUserInput>
  }

  export type SheetScalarWhereInput = {
    AND?: SheetScalarWhereInput | SheetScalarWhereInput[]
    OR?: SheetScalarWhereInput[]
    NOT?: SheetScalarWhereInput | SheetScalarWhereInput[]
    id?: StringFilter<"Sheet"> | string
    name?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    userId?: StringFilter<"Sheet"> | string
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedCreateNestedManyWithoutUserInput
    Sheets?: SheetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    Sheets?: SheetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemSolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedProblemsInput
  }

  export type ProblemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ProblemSolvedCreateOrConnectWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    create: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemSolvedCreateManyProblemInputEnvelope = {
    data: ProblemSolvedCreateManyProblemInput | ProblemSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemInSubtopicCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    subtopic: SubtopicCreateNestedOneWithoutProblemsInput
  }

  export type ProblemInSubtopicUncheckedCreateWithoutProblemInput = {
    id?: string
    subtopicId: string
    createdAt?: Date | string
  }

  export type ProblemInSubtopicCreateOrConnectWithoutProblemInput = {
    where: ProblemInSubtopicWhereUniqueInput
    create: XOR<ProblemInSubtopicCreateWithoutProblemInput, ProblemInSubtopicUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInSubtopicCreateManyProblemInputEnvelope = {
    data: ProblemInSubtopicCreateManyProblemInput | ProblemInSubtopicCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUpdateManyWithoutUserNestedInput
    Sheets?: SheetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    Sheets?: SheetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    update: XOR<ProblemSolvedUpdateWithoutProblemInput, ProblemSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    data: XOR<ProblemSolvedUpdateWithoutProblemInput, ProblemSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemSolvedScalarWhereInput
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInSubtopicUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemInSubtopicWhereUniqueInput
    update: XOR<ProblemInSubtopicUpdateWithoutProblemInput, ProblemInSubtopicUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemInSubtopicCreateWithoutProblemInput, ProblemInSubtopicUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInSubtopicUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemInSubtopicWhereUniqueInput
    data: XOR<ProblemInSubtopicUpdateWithoutProblemInput, ProblemInSubtopicUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemInSubtopicUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemInSubtopicScalarWhereInput
    data: XOR<ProblemInSubtopicUpdateManyMutationInput, ProblemInSubtopicUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInSubtopicScalarWhereInput = {
    AND?: ProblemInSubtopicScalarWhereInput | ProblemInSubtopicScalarWhereInput[]
    OR?: ProblemInSubtopicScalarWhereInput[]
    NOT?: ProblemInSubtopicScalarWhereInput | ProblemInSubtopicScalarWhereInput[]
    id?: StringFilter<"ProblemInSubtopic"> | string
    subtopicId?: StringFilter<"ProblemInSubtopic"> | string
    problemId?: StringFilter<"ProblemInSubtopic"> | string
    createdAt?: DateTimeFilter<"ProblemInSubtopic"> | Date | string
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedCreateNestedManyWithoutUserInput
    Sheets?: SheetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    Sheets?: SheetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ProblemCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUpdateManyWithoutUserNestedInput
    Sheets?: SheetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    Sheets?: SheetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionsInput = {
    update: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserCreateWithoutSolvedProblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    Sheets?: SheetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolvedProblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    Sheets?: SheetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolvedProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
  }

  export type ProblemCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    subtopics?: ProblemInSubtopicUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSolvedByInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
  }

  export type UserUpsertWithoutSolvedProblemsInput = {
    update: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolvedProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type UserUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    Sheets?: SheetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    Sheets?: SheetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSolvedByInput = {
    update: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TopicCreateWithoutSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutSheetInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutSheetInput, TopicUncheckedCreateWithoutSheetInput>
  }

  export type TopicCreateManySheetInputEnvelope = {
    data: TopicCreateManySheetInput | TopicCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSheetsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSheetsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSheetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
  }

  export type TopicUpsertWithWhereUniqueWithoutSheetInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutSheetInput, TopicUncheckedUpdateWithoutSheetInput>
    create: XOR<TopicCreateWithoutSheetInput, TopicUncheckedCreateWithoutSheetInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutSheetInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutSheetInput, TopicUncheckedUpdateWithoutSheetInput>
  }

  export type TopicUpdateManyWithWhereWithoutSheetInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutSheetInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: StringFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    sheetId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
  }

  export type UserUpsertWithoutSheetsInput = {
    update: XOR<UserUpdateWithoutSheetsInput, UserUncheckedUpdateWithoutSheetsInput>
    create: XOR<UserCreateWithoutSheetsInput, UserUncheckedCreateWithoutSheetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSheetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSheetsInput, UserUncheckedUpdateWithoutSheetsInput>
  }

  export type UserUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubtopicCreateWithoutTopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSubtopicCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutTopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSubtopicUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutTopicInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput>
  }

  export type SubtopicCreateManyTopicInputEnvelope = {
    data: SubtopicCreateManyTopicInput | SubtopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type SheetCreateWithoutTopicsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateWithoutTopicsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetCreateOrConnectWithoutTopicsInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutTopicsInput, SheetUncheckedCreateWithoutTopicsInput>
  }

  export type SubtopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: SubtopicWhereUniqueInput
    update: XOR<SubtopicUpdateWithoutTopicInput, SubtopicUncheckedUpdateWithoutTopicInput>
    create: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput>
  }

  export type SubtopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: SubtopicWhereUniqueInput
    data: XOR<SubtopicUpdateWithoutTopicInput, SubtopicUncheckedUpdateWithoutTopicInput>
  }

  export type SubtopicUpdateManyWithWhereWithoutTopicInput = {
    where: SubtopicScalarWhereInput
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type SubtopicScalarWhereInput = {
    AND?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
    OR?: SubtopicScalarWhereInput[]
    NOT?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
    id?: StringFilter<"Subtopic"> | string
    name?: StringFilter<"Subtopic"> | string
    topicId?: StringFilter<"Subtopic"> | string
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
  }

  export type SheetUpsertWithoutTopicsInput = {
    update: XOR<SheetUpdateWithoutTopicsInput, SheetUncheckedUpdateWithoutTopicsInput>
    create: XOR<SheetCreateWithoutTopicsInput, SheetUncheckedCreateWithoutTopicsInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutTopicsInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutTopicsInput, SheetUncheckedUpdateWithoutTopicsInput>
  }

  export type SheetUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicCreateWithoutSubtopicInput = {
    id?: string
    createdAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubtopicsInput
  }

  export type ProblemInSubtopicUncheckedCreateWithoutSubtopicInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
  }

  export type ProblemInSubtopicCreateOrConnectWithoutSubtopicInput = {
    where: ProblemInSubtopicWhereUniqueInput
    create: XOR<ProblemInSubtopicCreateWithoutSubtopicInput, ProblemInSubtopicUncheckedCreateWithoutSubtopicInput>
  }

  export type ProblemInSubtopicCreateManySubtopicInputEnvelope = {
    data: ProblemInSubtopicCreateManySubtopicInput | ProblemInSubtopicCreateManySubtopicInput[]
    skipDuplicates?: boolean
  }

  export type TopicCreateWithoutSubtopicsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: SheetCreateNestedOneWithoutTopicsInput
  }

  export type TopicUncheckedCreateWithoutSubtopicsInput = {
    id?: string
    name: string
    sheetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicCreateOrConnectWithoutSubtopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
  }

  export type ProblemInSubtopicUpsertWithWhereUniqueWithoutSubtopicInput = {
    where: ProblemInSubtopicWhereUniqueInput
    update: XOR<ProblemInSubtopicUpdateWithoutSubtopicInput, ProblemInSubtopicUncheckedUpdateWithoutSubtopicInput>
    create: XOR<ProblemInSubtopicCreateWithoutSubtopicInput, ProblemInSubtopicUncheckedCreateWithoutSubtopicInput>
  }

  export type ProblemInSubtopicUpdateWithWhereUniqueWithoutSubtopicInput = {
    where: ProblemInSubtopicWhereUniqueInput
    data: XOR<ProblemInSubtopicUpdateWithoutSubtopicInput, ProblemInSubtopicUncheckedUpdateWithoutSubtopicInput>
  }

  export type ProblemInSubtopicUpdateManyWithWhereWithoutSubtopicInput = {
    where: ProblemInSubtopicScalarWhereInput
    data: XOR<ProblemInSubtopicUpdateManyMutationInput, ProblemInSubtopicUncheckedUpdateManyWithoutSubtopicInput>
  }

  export type TopicUpsertWithoutSubtopicsInput = {
    update: XOR<TopicUpdateWithoutSubtopicsInput, TopicUncheckedUpdateWithoutSubtopicsInput>
    create: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutSubtopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutSubtopicsInput, TopicUncheckedUpdateWithoutSubtopicsInput>
  }

  export type TopicUpdateWithoutSubtopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type TopicUncheckedUpdateWithoutSubtopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicCreateWithoutProblemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutSubtopicsInput
  }

  export type SubtopicUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtopicCreateOrConnectWithoutProblemsInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutProblemsInput, SubtopicUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutSubtopicsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubtopicsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubtopicsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubtopicsInput, ProblemUncheckedCreateWithoutSubtopicsInput>
  }

  export type SubtopicUpsertWithoutProblemsInput = {
    update: XOR<SubtopicUpdateWithoutProblemsInput, SubtopicUncheckedUpdateWithoutProblemsInput>
    create: XOR<SubtopicCreateWithoutProblemsInput, SubtopicUncheckedCreateWithoutProblemsInput>
    where?: SubtopicWhereInput
  }

  export type SubtopicUpdateToOneWithWhereWithoutProblemsInput = {
    where?: SubtopicWhereInput
    data: XOR<SubtopicUpdateWithoutProblemsInput, SubtopicUncheckedUpdateWithoutProblemsInput>
  }

  export type SubtopicUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutSubtopicsNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpsertWithoutSubtopicsInput = {
    update: XOR<ProblemUpdateWithoutSubtopicsInput, ProblemUncheckedUpdateWithoutSubtopicsInput>
    create: XOR<ProblemCreateWithoutSubtopicsInput, ProblemUncheckedCreateWithoutSubtopicsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubtopicsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubtopicsInput, ProblemUncheckedUpdateWithoutSubtopicsInput>
  }

  export type ProblemUpdateWithoutSubtopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubtopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    problemId: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type ProblemSolvedCreateManyUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
  }

  export type SheetCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    subtopics?: ProblemInSubtopicUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type ProblemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: string
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type ProblemSolvedCreateManyProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ProblemInSubtopicCreateManyProblemInput = {
    id?: string
    subtopicId: string
    createdAt?: Date | string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedProblemsNestedInput
  }

  export type ProblemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopic?: SubtopicUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemInSubtopicUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateManySheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicCreateManyTopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtopicUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSubtopicUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSubtopicUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicCreateManySubtopicInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
  }

  export type ProblemInSubtopicUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubtopicsNestedInput
  }

  export type ProblemInSubtopicUncheckedUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSubtopicUncheckedUpdateManyWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
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