
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Laboratorios
 * 
 */
export type Laboratorios = $Result.DefaultSelection<Prisma.$LaboratoriosPayload>
/**
 * Model Carreras
 * 
 */
export type Carreras = $Result.DefaultSelection<Prisma.$CarrerasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Laboratorios
 * const laboratorios = await prisma.laboratorios.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Laboratorios
   * const laboratorios = await prisma.laboratorios.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.laboratorios`: Exposes CRUD operations for the **Laboratorios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laboratorios
    * const laboratorios = await prisma.laboratorios.findMany()
    * ```
    */
  get laboratorios(): Prisma.LaboratoriosDelegate<ExtArgs>;

  /**
   * `prisma.carreras`: Exposes CRUD operations for the **Carreras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carreras.findMany()
    * ```
    */
  get carreras(): Prisma.CarrerasDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Laboratorios: 'Laboratorios',
    Carreras: 'Carreras'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'laboratorios' | 'carreras'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Laboratorios: {
        payload: Prisma.$LaboratoriosPayload<ExtArgs>
        fields: Prisma.LaboratoriosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaboratoriosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaboratoriosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload>
          }
          findFirst: {
            args: Prisma.LaboratoriosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaboratoriosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload>
          }
          findMany: {
            args: Prisma.LaboratoriosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload>[]
          }
          create: {
            args: Prisma.LaboratoriosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload>
          }
          createMany: {
            args: Prisma.LaboratoriosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LaboratoriosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload>
          }
          update: {
            args: Prisma.LaboratoriosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload>
          }
          deleteMany: {
            args: Prisma.LaboratoriosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LaboratoriosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LaboratoriosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LaboratoriosPayload>
          }
          aggregate: {
            args: Prisma.LaboratoriosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLaboratorios>
          }
          groupBy: {
            args: Prisma.LaboratoriosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LaboratoriosGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaboratoriosCountArgs<ExtArgs>,
            result: $Utils.Optional<LaboratoriosCountAggregateOutputType> | number
          }
        }
      }
      Carreras: {
        payload: Prisma.$CarrerasPayload<ExtArgs>
        fields: Prisma.CarrerasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarrerasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarrerasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload>
          }
          findFirst: {
            args: Prisma.CarrerasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarrerasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload>
          }
          findMany: {
            args: Prisma.CarrerasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload>[]
          }
          create: {
            args: Prisma.CarrerasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload>
          }
          createMany: {
            args: Prisma.CarrerasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarrerasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload>
          }
          update: {
            args: Prisma.CarrerasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload>
          }
          deleteMany: {
            args: Prisma.CarrerasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarrerasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarrerasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarrerasPayload>
          }
          aggregate: {
            args: Prisma.CarrerasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarreras>
          }
          groupBy: {
            args: Prisma.CarrerasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarrerasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarrerasCountArgs<ExtArgs>,
            result: $Utils.Optional<CarrerasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model Laboratorios
   */

  export type AggregateLaboratorios = {
    _count: LaboratoriosCountAggregateOutputType | null
    _avg: LaboratoriosAvgAggregateOutputType | null
    _sum: LaboratoriosSumAggregateOutputType | null
    _min: LaboratoriosMinAggregateOutputType | null
    _max: LaboratoriosMaxAggregateOutputType | null
  }

  export type LaboratoriosAvgAggregateOutputType = {
    id: number | null
  }

  export type LaboratoriosSumAggregateOutputType = {
    id: number | null
  }

  export type LaboratoriosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type LaboratoriosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type LaboratoriosCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type LaboratoriosAvgAggregateInputType = {
    id?: true
  }

  export type LaboratoriosSumAggregateInputType = {
    id?: true
  }

  export type LaboratoriosMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type LaboratoriosMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type LaboratoriosCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type LaboratoriosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laboratorios to aggregate.
     */
    where?: LaboratoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratorios to fetch.
     */
    orderBy?: LaboratoriosOrderByWithRelationInput | LaboratoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaboratoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laboratorios
    **/
    _count?: true | LaboratoriosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaboratoriosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaboratoriosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaboratoriosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaboratoriosMaxAggregateInputType
  }

  export type GetLaboratoriosAggregateType<T extends LaboratoriosAggregateArgs> = {
        [P in keyof T & keyof AggregateLaboratorios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaboratorios[P]>
      : GetScalarType<T[P], AggregateLaboratorios[P]>
  }




  export type LaboratoriosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaboratoriosWhereInput
    orderBy?: LaboratoriosOrderByWithAggregationInput | LaboratoriosOrderByWithAggregationInput[]
    by: LaboratoriosScalarFieldEnum[] | LaboratoriosScalarFieldEnum
    having?: LaboratoriosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaboratoriosCountAggregateInputType | true
    _avg?: LaboratoriosAvgAggregateInputType
    _sum?: LaboratoriosSumAggregateInputType
    _min?: LaboratoriosMinAggregateInputType
    _max?: LaboratoriosMaxAggregateInputType
  }

  export type LaboratoriosGroupByOutputType = {
    id: number
    nombre: string
    _count: LaboratoriosCountAggregateOutputType | null
    _avg: LaboratoriosAvgAggregateOutputType | null
    _sum: LaboratoriosSumAggregateOutputType | null
    _min: LaboratoriosMinAggregateOutputType | null
    _max: LaboratoriosMaxAggregateOutputType | null
  }

  type GetLaboratoriosGroupByPayload<T extends LaboratoriosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaboratoriosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaboratoriosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaboratoriosGroupByOutputType[P]>
            : GetScalarType<T[P], LaboratoriosGroupByOutputType[P]>
        }
      >
    >


  export type LaboratoriosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["laboratorios"]>

  export type LaboratoriosSelectScalar = {
    id?: boolean
    nombre?: boolean
  }


  export type $LaboratoriosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laboratorios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["laboratorios"]>
    composites: {}
  }


  type LaboratoriosGetPayload<S extends boolean | null | undefined | LaboratoriosDefaultArgs> = $Result.GetResult<Prisma.$LaboratoriosPayload, S>

  type LaboratoriosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LaboratoriosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LaboratoriosCountAggregateInputType | true
    }

  export interface LaboratoriosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laboratorios'], meta: { name: 'Laboratorios' } }
    /**
     * Find zero or one Laboratorios that matches the filter.
     * @param {LaboratoriosFindUniqueArgs} args - Arguments to find a Laboratorios
     * @example
     * // Get one Laboratorios
     * const laboratorios = await prisma.laboratorios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LaboratoriosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LaboratoriosFindUniqueArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Laboratorios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LaboratoriosFindUniqueOrThrowArgs} args - Arguments to find a Laboratorios
     * @example
     * // Get one Laboratorios
     * const laboratorios = await prisma.laboratorios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LaboratoriosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LaboratoriosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Laboratorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoriosFindFirstArgs} args - Arguments to find a Laboratorios
     * @example
     * // Get one Laboratorios
     * const laboratorios = await prisma.laboratorios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LaboratoriosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LaboratoriosFindFirstArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Laboratorios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoriosFindFirstOrThrowArgs} args - Arguments to find a Laboratorios
     * @example
     * // Get one Laboratorios
     * const laboratorios = await prisma.laboratorios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LaboratoriosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LaboratoriosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Laboratorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoriosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laboratorios
     * const laboratorios = await prisma.laboratorios.findMany()
     * 
     * // Get first 10 Laboratorios
     * const laboratorios = await prisma.laboratorios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laboratoriosWithIdOnly = await prisma.laboratorios.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LaboratoriosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LaboratoriosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Laboratorios.
     * @param {LaboratoriosCreateArgs} args - Arguments to create a Laboratorios.
     * @example
     * // Create one Laboratorios
     * const Laboratorios = await prisma.laboratorios.create({
     *   data: {
     *     // ... data to create a Laboratorios
     *   }
     * })
     * 
    **/
    create<T extends LaboratoriosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LaboratoriosCreateArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Laboratorios.
     *     @param {LaboratoriosCreateManyArgs} args - Arguments to create many Laboratorios.
     *     @example
     *     // Create many Laboratorios
     *     const laboratorios = await prisma.laboratorios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LaboratoriosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LaboratoriosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Laboratorios.
     * @param {LaboratoriosDeleteArgs} args - Arguments to delete one Laboratorios.
     * @example
     * // Delete one Laboratorios
     * const Laboratorios = await prisma.laboratorios.delete({
     *   where: {
     *     // ... filter to delete one Laboratorios
     *   }
     * })
     * 
    **/
    delete<T extends LaboratoriosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LaboratoriosDeleteArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Laboratorios.
     * @param {LaboratoriosUpdateArgs} args - Arguments to update one Laboratorios.
     * @example
     * // Update one Laboratorios
     * const laboratorios = await prisma.laboratorios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LaboratoriosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LaboratoriosUpdateArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Laboratorios.
     * @param {LaboratoriosDeleteManyArgs} args - Arguments to filter Laboratorios to delete.
     * @example
     * // Delete a few Laboratorios
     * const { count } = await prisma.laboratorios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LaboratoriosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LaboratoriosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laboratorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoriosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laboratorios
     * const laboratorios = await prisma.laboratorios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LaboratoriosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LaboratoriosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Laboratorios.
     * @param {LaboratoriosUpsertArgs} args - Arguments to update or create a Laboratorios.
     * @example
     * // Update or create a Laboratorios
     * const laboratorios = await prisma.laboratorios.upsert({
     *   create: {
     *     // ... data to create a Laboratorios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laboratorios we want to update
     *   }
     * })
    **/
    upsert<T extends LaboratoriosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LaboratoriosUpsertArgs<ExtArgs>>
    ): Prisma__LaboratoriosClient<$Result.GetResult<Prisma.$LaboratoriosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Laboratorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoriosCountArgs} args - Arguments to filter Laboratorios to count.
     * @example
     * // Count the number of Laboratorios
     * const count = await prisma.laboratorios.count({
     *   where: {
     *     // ... the filter for the Laboratorios we want to count
     *   }
     * })
    **/
    count<T extends LaboratoriosCountArgs>(
      args?: Subset<T, LaboratoriosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaboratoriosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laboratorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoriosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaboratoriosAggregateArgs>(args: Subset<T, LaboratoriosAggregateArgs>): Prisma.PrismaPromise<GetLaboratoriosAggregateType<T>>

    /**
     * Group by Laboratorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoriosGroupByArgs} args - Group by arguments.
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
      T extends LaboratoriosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaboratoriosGroupByArgs['orderBy'] }
        : { orderBy?: LaboratoriosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LaboratoriosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaboratoriosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laboratorios model
   */
  readonly fields: LaboratoriosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laboratorios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaboratoriosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Laboratorios model
   */ 
  interface LaboratoriosFieldRefs {
    readonly id: FieldRef<"Laboratorios", 'Int'>
    readonly nombre: FieldRef<"Laboratorios", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Laboratorios findUnique
   */
  export type LaboratoriosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * Filter, which Laboratorios to fetch.
     */
    where: LaboratoriosWhereUniqueInput
  }


  /**
   * Laboratorios findUniqueOrThrow
   */
  export type LaboratoriosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * Filter, which Laboratorios to fetch.
     */
    where: LaboratoriosWhereUniqueInput
  }


  /**
   * Laboratorios findFirst
   */
  export type LaboratoriosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * Filter, which Laboratorios to fetch.
     */
    where?: LaboratoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratorios to fetch.
     */
    orderBy?: LaboratoriosOrderByWithRelationInput | LaboratoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laboratorios.
     */
    cursor?: LaboratoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laboratorios.
     */
    distinct?: LaboratoriosScalarFieldEnum | LaboratoriosScalarFieldEnum[]
  }


  /**
   * Laboratorios findFirstOrThrow
   */
  export type LaboratoriosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * Filter, which Laboratorios to fetch.
     */
    where?: LaboratoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratorios to fetch.
     */
    orderBy?: LaboratoriosOrderByWithRelationInput | LaboratoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laboratorios.
     */
    cursor?: LaboratoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laboratorios.
     */
    distinct?: LaboratoriosScalarFieldEnum | LaboratoriosScalarFieldEnum[]
  }


  /**
   * Laboratorios findMany
   */
  export type LaboratoriosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * Filter, which Laboratorios to fetch.
     */
    where?: LaboratoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratorios to fetch.
     */
    orderBy?: LaboratoriosOrderByWithRelationInput | LaboratoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laboratorios.
     */
    cursor?: LaboratoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratorios.
     */
    skip?: number
    distinct?: LaboratoriosScalarFieldEnum | LaboratoriosScalarFieldEnum[]
  }


  /**
   * Laboratorios create
   */
  export type LaboratoriosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * The data needed to create a Laboratorios.
     */
    data: XOR<LaboratoriosCreateInput, LaboratoriosUncheckedCreateInput>
  }


  /**
   * Laboratorios createMany
   */
  export type LaboratoriosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laboratorios.
     */
    data: LaboratoriosCreateManyInput | LaboratoriosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Laboratorios update
   */
  export type LaboratoriosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * The data needed to update a Laboratorios.
     */
    data: XOR<LaboratoriosUpdateInput, LaboratoriosUncheckedUpdateInput>
    /**
     * Choose, which Laboratorios to update.
     */
    where: LaboratoriosWhereUniqueInput
  }


  /**
   * Laboratorios updateMany
   */
  export type LaboratoriosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laboratorios.
     */
    data: XOR<LaboratoriosUpdateManyMutationInput, LaboratoriosUncheckedUpdateManyInput>
    /**
     * Filter which Laboratorios to update
     */
    where?: LaboratoriosWhereInput
  }


  /**
   * Laboratorios upsert
   */
  export type LaboratoriosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * The filter to search for the Laboratorios to update in case it exists.
     */
    where: LaboratoriosWhereUniqueInput
    /**
     * In case the Laboratorios found by the `where` argument doesn't exist, create a new Laboratorios with this data.
     */
    create: XOR<LaboratoriosCreateInput, LaboratoriosUncheckedCreateInput>
    /**
     * In case the Laboratorios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaboratoriosUpdateInput, LaboratoriosUncheckedUpdateInput>
  }


  /**
   * Laboratorios delete
   */
  export type LaboratoriosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
    /**
     * Filter which Laboratorios to delete.
     */
    where: LaboratoriosWhereUniqueInput
  }


  /**
   * Laboratorios deleteMany
   */
  export type LaboratoriosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laboratorios to delete
     */
    where?: LaboratoriosWhereInput
  }


  /**
   * Laboratorios without action
   */
  export type LaboratoriosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratorios
     */
    select?: LaboratoriosSelect<ExtArgs> | null
  }



  /**
   * Model Carreras
   */

  export type AggregateCarreras = {
    _count: CarrerasCountAggregateOutputType | null
    _avg: CarrerasAvgAggregateOutputType | null
    _sum: CarrerasSumAggregateOutputType | null
    _min: CarrerasMinAggregateOutputType | null
    _max: CarrerasMaxAggregateOutputType | null
  }

  export type CarrerasAvgAggregateOutputType = {
    id: number | null
  }

  export type CarrerasSumAggregateOutputType = {
    id: number | null
  }

  export type CarrerasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarrerasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarrerasCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CarrerasAvgAggregateInputType = {
    id?: true
  }

  export type CarrerasSumAggregateInputType = {
    id?: true
  }

  export type CarrerasMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarrerasMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarrerasCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CarrerasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to aggregate.
     */
    where?: CarrerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarrerasOrderByWithRelationInput | CarrerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarrerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarrerasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrerasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrerasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrerasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrerasMaxAggregateInputType
  }

  export type GetCarrerasAggregateType<T extends CarrerasAggregateArgs> = {
        [P in keyof T & keyof AggregateCarreras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarreras[P]>
      : GetScalarType<T[P], AggregateCarreras[P]>
  }




  export type CarrerasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrerasWhereInput
    orderBy?: CarrerasOrderByWithAggregationInput | CarrerasOrderByWithAggregationInput[]
    by: CarrerasScalarFieldEnum[] | CarrerasScalarFieldEnum
    having?: CarrerasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrerasCountAggregateInputType | true
    _avg?: CarrerasAvgAggregateInputType
    _sum?: CarrerasSumAggregateInputType
    _min?: CarrerasMinAggregateInputType
    _max?: CarrerasMaxAggregateInputType
  }

  export type CarrerasGroupByOutputType = {
    id: number
    nombre: string
    _count: CarrerasCountAggregateOutputType | null
    _avg: CarrerasAvgAggregateOutputType | null
    _sum: CarrerasSumAggregateOutputType | null
    _min: CarrerasMinAggregateOutputType | null
    _max: CarrerasMaxAggregateOutputType | null
  }

  type GetCarrerasGroupByPayload<T extends CarrerasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrerasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrerasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrerasGroupByOutputType[P]>
            : GetScalarType<T[P], CarrerasGroupByOutputType[P]>
        }
      >
    >


  export type CarrerasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["carreras"]>

  export type CarrerasSelectScalar = {
    id?: boolean
    nombre?: boolean
  }


  export type $CarrerasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carreras"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["carreras"]>
    composites: {}
  }


  type CarrerasGetPayload<S extends boolean | null | undefined | CarrerasDefaultArgs> = $Result.GetResult<Prisma.$CarrerasPayload, S>

  type CarrerasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarrerasFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CarrerasCountAggregateInputType | true
    }

  export interface CarrerasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carreras'], meta: { name: 'Carreras' } }
    /**
     * Find zero or one Carreras that matches the filter.
     * @param {CarrerasFindUniqueArgs} args - Arguments to find a Carreras
     * @example
     * // Get one Carreras
     * const carreras = await prisma.carreras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarrerasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarrerasFindUniqueArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Carreras that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarrerasFindUniqueOrThrowArgs} args - Arguments to find a Carreras
     * @example
     * // Get one Carreras
     * const carreras = await prisma.carreras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarrerasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarrerasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrerasFindFirstArgs} args - Arguments to find a Carreras
     * @example
     * // Get one Carreras
     * const carreras = await prisma.carreras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarrerasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarrerasFindFirstArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Carreras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrerasFindFirstOrThrowArgs} args - Arguments to find a Carreras
     * @example
     * // Get one Carreras
     * const carreras = await prisma.carreras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarrerasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarrerasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrerasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carreras.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carreras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrerasWithIdOnly = await prisma.carreras.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CarrerasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarrerasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Carreras.
     * @param {CarrerasCreateArgs} args - Arguments to create a Carreras.
     * @example
     * // Create one Carreras
     * const Carreras = await prisma.carreras.create({
     *   data: {
     *     // ... data to create a Carreras
     *   }
     * })
     * 
    **/
    create<T extends CarrerasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarrerasCreateArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Carreras.
     *     @param {CarrerasCreateManyArgs} args - Arguments to create many Carreras.
     *     @example
     *     // Create many Carreras
     *     const carreras = await prisma.carreras.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarrerasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarrerasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carreras.
     * @param {CarrerasDeleteArgs} args - Arguments to delete one Carreras.
     * @example
     * // Delete one Carreras
     * const Carreras = await prisma.carreras.delete({
     *   where: {
     *     // ... filter to delete one Carreras
     *   }
     * })
     * 
    **/
    delete<T extends CarrerasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarrerasDeleteArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Carreras.
     * @param {CarrerasUpdateArgs} args - Arguments to update one Carreras.
     * @example
     * // Update one Carreras
     * const carreras = await prisma.carreras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarrerasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarrerasUpdateArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Carreras.
     * @param {CarrerasDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carreras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarrerasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarrerasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrerasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carreras = await prisma.carreras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarrerasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarrerasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carreras.
     * @param {CarrerasUpsertArgs} args - Arguments to update or create a Carreras.
     * @example
     * // Update or create a Carreras
     * const carreras = await prisma.carreras.upsert({
     *   create: {
     *     // ... data to create a Carreras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carreras we want to update
     *   }
     * })
    **/
    upsert<T extends CarrerasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarrerasUpsertArgs<ExtArgs>>
    ): Prisma__CarrerasClient<$Result.GetResult<Prisma.$CarrerasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrerasCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carreras.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarrerasCountArgs>(
      args?: Subset<T, CarrerasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrerasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrerasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarrerasAggregateArgs>(args: Subset<T, CarrerasAggregateArgs>): Prisma.PrismaPromise<GetCarrerasAggregateType<T>>

    /**
     * Group by Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrerasGroupByArgs} args - Group by arguments.
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
      T extends CarrerasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarrerasGroupByArgs['orderBy'] }
        : { orderBy?: CarrerasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarrerasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrerasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carreras model
   */
  readonly fields: CarrerasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carreras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarrerasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Carreras model
   */ 
  interface CarrerasFieldRefs {
    readonly id: FieldRef<"Carreras", 'Int'>
    readonly nombre: FieldRef<"Carreras", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Carreras findUnique
   */
  export type CarrerasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where: CarrerasWhereUniqueInput
  }


  /**
   * Carreras findUniqueOrThrow
   */
  export type CarrerasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where: CarrerasWhereUniqueInput
  }


  /**
   * Carreras findFirst
   */
  export type CarrerasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarrerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarrerasOrderByWithRelationInput | CarrerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarrerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarrerasScalarFieldEnum | CarrerasScalarFieldEnum[]
  }


  /**
   * Carreras findFirstOrThrow
   */
  export type CarrerasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarrerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarrerasOrderByWithRelationInput | CarrerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarrerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarrerasScalarFieldEnum | CarrerasScalarFieldEnum[]
  }


  /**
   * Carreras findMany
   */
  export type CarrerasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarrerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarrerasOrderByWithRelationInput | CarrerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarrerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarrerasScalarFieldEnum | CarrerasScalarFieldEnum[]
  }


  /**
   * Carreras create
   */
  export type CarrerasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * The data needed to create a Carreras.
     */
    data: XOR<CarrerasCreateInput, CarrerasUncheckedCreateInput>
  }


  /**
   * Carreras createMany
   */
  export type CarrerasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarrerasCreateManyInput | CarrerasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Carreras update
   */
  export type CarrerasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * The data needed to update a Carreras.
     */
    data: XOR<CarrerasUpdateInput, CarrerasUncheckedUpdateInput>
    /**
     * Choose, which Carreras to update.
     */
    where: CarrerasWhereUniqueInput
  }


  /**
   * Carreras updateMany
   */
  export type CarrerasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarrerasUpdateManyMutationInput, CarrerasUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarrerasWhereInput
  }


  /**
   * Carreras upsert
   */
  export type CarrerasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * The filter to search for the Carreras to update in case it exists.
     */
    where: CarrerasWhereUniqueInput
    /**
     * In case the Carreras found by the `where` argument doesn't exist, create a new Carreras with this data.
     */
    create: XOR<CarrerasCreateInput, CarrerasUncheckedCreateInput>
    /**
     * In case the Carreras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarrerasUpdateInput, CarrerasUncheckedUpdateInput>
  }


  /**
   * Carreras delete
   */
  export type CarrerasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
    /**
     * Filter which Carreras to delete.
     */
    where: CarrerasWhereUniqueInput
  }


  /**
   * Carreras deleteMany
   */
  export type CarrerasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarrerasWhereInput
  }


  /**
   * Carreras without action
   */
  export type CarrerasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carreras
     */
    select?: CarrerasSelect<ExtArgs> | null
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


  export const LaboratoriosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type LaboratoriosScalarFieldEnum = (typeof LaboratoriosScalarFieldEnum)[keyof typeof LaboratoriosScalarFieldEnum]


  export const CarrerasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CarrerasScalarFieldEnum = (typeof CarrerasScalarFieldEnum)[keyof typeof CarrerasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LaboratoriosWhereInput = {
    AND?: LaboratoriosWhereInput | LaboratoriosWhereInput[]
    OR?: LaboratoriosWhereInput[]
    NOT?: LaboratoriosWhereInput | LaboratoriosWhereInput[]
    id?: IntFilter<"Laboratorios"> | number
    nombre?: StringFilter<"Laboratorios"> | string
  }

  export type LaboratoriosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type LaboratoriosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LaboratoriosWhereInput | LaboratoriosWhereInput[]
    OR?: LaboratoriosWhereInput[]
    NOT?: LaboratoriosWhereInput | LaboratoriosWhereInput[]
    nombre?: StringFilter<"Laboratorios"> | string
  }, "id">

  export type LaboratoriosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: LaboratoriosCountOrderByAggregateInput
    _avg?: LaboratoriosAvgOrderByAggregateInput
    _max?: LaboratoriosMaxOrderByAggregateInput
    _min?: LaboratoriosMinOrderByAggregateInput
    _sum?: LaboratoriosSumOrderByAggregateInput
  }

  export type LaboratoriosScalarWhereWithAggregatesInput = {
    AND?: LaboratoriosScalarWhereWithAggregatesInput | LaboratoriosScalarWhereWithAggregatesInput[]
    OR?: LaboratoriosScalarWhereWithAggregatesInput[]
    NOT?: LaboratoriosScalarWhereWithAggregatesInput | LaboratoriosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Laboratorios"> | number
    nombre?: StringWithAggregatesFilter<"Laboratorios"> | string
  }

  export type CarrerasWhereInput = {
    AND?: CarrerasWhereInput | CarrerasWhereInput[]
    OR?: CarrerasWhereInput[]
    NOT?: CarrerasWhereInput | CarrerasWhereInput[]
    id?: IntFilter<"Carreras"> | number
    nombre?: StringFilter<"Carreras"> | string
  }

  export type CarrerasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarrerasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarrerasWhereInput | CarrerasWhereInput[]
    OR?: CarrerasWhereInput[]
    NOT?: CarrerasWhereInput | CarrerasWhereInput[]
    nombre?: StringFilter<"Carreras"> | string
  }, "id">

  export type CarrerasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CarrerasCountOrderByAggregateInput
    _avg?: CarrerasAvgOrderByAggregateInput
    _max?: CarrerasMaxOrderByAggregateInput
    _min?: CarrerasMinOrderByAggregateInput
    _sum?: CarrerasSumOrderByAggregateInput
  }

  export type CarrerasScalarWhereWithAggregatesInput = {
    AND?: CarrerasScalarWhereWithAggregatesInput | CarrerasScalarWhereWithAggregatesInput[]
    OR?: CarrerasScalarWhereWithAggregatesInput[]
    NOT?: CarrerasScalarWhereWithAggregatesInput | CarrerasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carreras"> | number
    nombre?: StringWithAggregatesFilter<"Carreras"> | string
  }

  export type LaboratoriosCreateInput = {
    nombre: string
  }

  export type LaboratoriosUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type LaboratoriosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LaboratoriosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LaboratoriosCreateManyInput = {
    id?: number
    nombre: string
  }

  export type LaboratoriosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LaboratoriosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarrerasCreateInput = {
    nombre: string
  }

  export type CarrerasUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type CarrerasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarrerasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarrerasCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CarrerasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarrerasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LaboratoriosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type LaboratoriosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LaboratoriosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type LaboratoriosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type LaboratoriosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type CarrerasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarrerasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarrerasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarrerasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarrerasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LaboratoriosDefaultArgs instead
     */
    export type LaboratoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaboratoriosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarrerasDefaultArgs instead
     */
    export type CarrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarrerasDefaultArgs<ExtArgs>

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