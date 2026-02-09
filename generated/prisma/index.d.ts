
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
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Direction
 * 
 */
export type Direction = $Result.DefaultSelection<Prisma.$DirectionPayload>
/**
 * Model PointPlan
 * 
 */
export type PointPlan = $Result.DefaultSelection<Prisma.$PointPlanPayload>
/**
 * Model EmployeePlan
 * 
 */
export type EmployeePlan = $Result.DefaultSelection<Prisma.$EmployeePlanPayload>
/**
 * Model PersonalPlanGoal
 * 
 */
export type PersonalPlanGoal = $Result.DefaultSelection<Prisma.$PersonalPlanGoalPayload>
/**
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model ShiftAssignment
 * 
 */
export type ShiftAssignment = $Result.DefaultSelection<Prisma.$ShiftAssignmentPayload>
/**
 * Model DailySale
 * 
 */
export type DailySale = $Result.DefaultSelection<Prisma.$DailySalePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  DM: 'DM',
  EMPLOYEE: 'EMPLOYEE',
  INTERN: 'INTERN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MetricUnit: {
  PIECES: 'PIECES',
  MONEY: 'MONEY'
};

export type MetricUnit = (typeof MetricUnit)[keyof typeof MetricUnit]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MetricUnit = $Enums.MetricUnit

export const MetricUnit: typeof $Enums.MetricUnit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
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
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
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
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.direction`: Exposes CRUD operations for the **Direction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directions
    * const directions = await prisma.direction.findMany()
    * ```
    */
  get direction(): Prisma.DirectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointPlan`: Exposes CRUD operations for the **PointPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointPlans
    * const pointPlans = await prisma.pointPlan.findMany()
    * ```
    */
  get pointPlan(): Prisma.PointPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeePlan`: Exposes CRUD operations for the **EmployeePlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeePlans
    * const employeePlans = await prisma.employeePlan.findMany()
    * ```
    */
  get employeePlan(): Prisma.EmployeePlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalPlanGoal`: Exposes CRUD operations for the **PersonalPlanGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalPlanGoals
    * const personalPlanGoals = await prisma.personalPlanGoal.findMany()
    * ```
    */
  get personalPlanGoal(): Prisma.PersonalPlanGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftAssignment`: Exposes CRUD operations for the **ShiftAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftAssignments
    * const shiftAssignments = await prisma.shiftAssignment.findMany()
    * ```
    */
  get shiftAssignment(): Prisma.ShiftAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailySale`: Exposes CRUD operations for the **DailySale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailySales
    * const dailySales = await prisma.dailySale.findMany()
    * ```
    */
  get dailySale(): Prisma.DailySaleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
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
    Post: 'Post',
    Point: 'Point',
    User: 'User',
    Direction: 'Direction',
    PointPlan: 'PointPlan',
    EmployeePlan: 'EmployeePlan',
    PersonalPlanGoal: 'PersonalPlanGoal',
    Shift: 'Shift',
    ShiftAssignment: 'ShiftAssignment',
    DailySale: 'DailySale'
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
      modelProps: "post" | "point" | "user" | "direction" | "pointPlan" | "employeePlan" | "personalPlanGoal" | "shift" | "shiftAssignment" | "dailySale"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
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
      Direction: {
        payload: Prisma.$DirectionPayload<ExtArgs>
        fields: Prisma.DirectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          findFirst: {
            args: Prisma.DirectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          findMany: {
            args: Prisma.DirectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>[]
          }
          create: {
            args: Prisma.DirectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          createMany: {
            args: Prisma.DirectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>[]
          }
          delete: {
            args: Prisma.DirectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          update: {
            args: Prisma.DirectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          deleteMany: {
            args: Prisma.DirectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>[]
          }
          upsert: {
            args: Prisma.DirectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          aggregate: {
            args: Prisma.DirectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirection>
          }
          groupBy: {
            args: Prisma.DirectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectionCountArgs<ExtArgs>
            result: $Utils.Optional<DirectionCountAggregateOutputType> | number
          }
        }
      }
      PointPlan: {
        payload: Prisma.$PointPlanPayload<ExtArgs>
        fields: Prisma.PointPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>
          }
          findFirst: {
            args: Prisma.PointPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>
          }
          findMany: {
            args: Prisma.PointPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>[]
          }
          create: {
            args: Prisma.PointPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>
          }
          createMany: {
            args: Prisma.PointPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>[]
          }
          delete: {
            args: Prisma.PointPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>
          }
          update: {
            args: Prisma.PointPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>
          }
          deleteMany: {
            args: Prisma.PointPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>[]
          }
          upsert: {
            args: Prisma.PointPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPlanPayload>
          }
          aggregate: {
            args: Prisma.PointPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointPlan>
          }
          groupBy: {
            args: Prisma.PointPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointPlanCountArgs<ExtArgs>
            result: $Utils.Optional<PointPlanCountAggregateOutputType> | number
          }
        }
      }
      EmployeePlan: {
        payload: Prisma.$EmployeePlanPayload<ExtArgs>
        fields: Prisma.EmployeePlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeePlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeePlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>
          }
          findFirst: {
            args: Prisma.EmployeePlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeePlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>
          }
          findMany: {
            args: Prisma.EmployeePlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>[]
          }
          create: {
            args: Prisma.EmployeePlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>
          }
          createMany: {
            args: Prisma.EmployeePlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeePlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>[]
          }
          delete: {
            args: Prisma.EmployeePlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>
          }
          update: {
            args: Prisma.EmployeePlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>
          }
          deleteMany: {
            args: Prisma.EmployeePlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeePlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeePlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>[]
          }
          upsert: {
            args: Prisma.EmployeePlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePlanPayload>
          }
          aggregate: {
            args: Prisma.EmployeePlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeePlan>
          }
          groupBy: {
            args: Prisma.EmployeePlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeePlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeePlanCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeePlanCountAggregateOutputType> | number
          }
        }
      }
      PersonalPlanGoal: {
        payload: Prisma.$PersonalPlanGoalPayload<ExtArgs>
        fields: Prisma.PersonalPlanGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalPlanGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalPlanGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>
          }
          findFirst: {
            args: Prisma.PersonalPlanGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalPlanGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>
          }
          findMany: {
            args: Prisma.PersonalPlanGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>[]
          }
          create: {
            args: Prisma.PersonalPlanGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>
          }
          createMany: {
            args: Prisma.PersonalPlanGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalPlanGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>[]
          }
          delete: {
            args: Prisma.PersonalPlanGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>
          }
          update: {
            args: Prisma.PersonalPlanGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>
          }
          deleteMany: {
            args: Prisma.PersonalPlanGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalPlanGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalPlanGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>[]
          }
          upsert: {
            args: Prisma.PersonalPlanGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPlanGoalPayload>
          }
          aggregate: {
            args: Prisma.PersonalPlanGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalPlanGoal>
          }
          groupBy: {
            args: Prisma.PersonalPlanGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalPlanGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalPlanGoalCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalPlanGoalCountAggregateOutputType> | number
          }
        }
      }
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          createMany: {
            args: Prisma.ShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      ShiftAssignment: {
        payload: Prisma.$ShiftAssignmentPayload<ExtArgs>
        fields: Prisma.ShiftAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ShiftAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findMany: {
            args: Prisma.ShiftAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          create: {
            args: Prisma.ShiftAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          createMany: {
            args: Prisma.ShiftAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ShiftAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          update: {
            args: Prisma.ShiftAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ShiftAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ShiftAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ShiftAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftAssignment>
          }
          groupBy: {
            args: Prisma.ShiftAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftAssignmentCountAggregateOutputType> | number
          }
        }
      }
      DailySale: {
        payload: Prisma.$DailySalePayload<ExtArgs>
        fields: Prisma.DailySaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailySaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailySaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          findFirst: {
            args: Prisma.DailySaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailySaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          findMany: {
            args: Prisma.DailySaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>[]
          }
          create: {
            args: Prisma.DailySaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          createMany: {
            args: Prisma.DailySaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailySaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>[]
          }
          delete: {
            args: Prisma.DailySaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          update: {
            args: Prisma.DailySaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          deleteMany: {
            args: Prisma.DailySaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailySaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailySaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>[]
          }
          upsert: {
            args: Prisma.DailySaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySalePayload>
          }
          aggregate: {
            args: Prisma.DailySaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailySale>
          }
          groupBy: {
            args: Prisma.DailySaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailySaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailySaleCountArgs<ExtArgs>
            result: $Utils.Optional<DailySaleCountAggregateOutputType> | number
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
    post?: PostOmit
    point?: PointOmit
    user?: UserOmit
    direction?: DirectionOmit
    pointPlan?: PointPlanOmit
    employeePlan?: EmployeePlanOmit
    personalPlanGoal?: PersonalPlanGoalOmit
    shift?: ShiftOmit
    shiftAssignment?: ShiftAssignmentOmit
    dailySale?: DailySaleOmit
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
   * Count Type PointCountOutputType
   */

  export type PointCountOutputType = {
    users: number
    shifts: number
    pointPlans: number
    employeePlan: number
    sales: number
  }

  export type PointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PointCountOutputTypeCountUsersArgs
    shifts?: boolean | PointCountOutputTypeCountShiftsArgs
    pointPlans?: boolean | PointCountOutputTypeCountPointPlansArgs
    employeePlan?: boolean | PointCountOutputTypeCountEmployeePlanArgs
    sales?: boolean | PointCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointCountOutputType
     */
    select?: PointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountPointPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointPlanWhereInput
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountEmployeePlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeePlanWhereInput
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySaleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    openedShifts: number
    closedShifts: number
    assignments: number
    sales: number
    employeePlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    openedShifts?: boolean | UserCountOutputTypeCountOpenedShiftsArgs
    closedShifts?: boolean | UserCountOutputTypeCountClosedShiftsArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    sales?: boolean | UserCountOutputTypeCountSalesArgs
    employeePlans?: boolean | UserCountOutputTypeCountEmployeePlansArgs
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
  export type UserCountOutputTypeCountOpenedShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClosedShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeePlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeePlanWhereInput
  }


  /**
   * Count Type DirectionCountOutputType
   */

  export type DirectionCountOutputType = {
    pointPlans: number
    personalGoals: number
    sales: number
  }

  export type DirectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pointPlans?: boolean | DirectionCountOutputTypeCountPointPlansArgs
    personalGoals?: boolean | DirectionCountOutputTypeCountPersonalGoalsArgs
    sales?: boolean | DirectionCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * DirectionCountOutputType without action
   */
  export type DirectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectionCountOutputType
     */
    select?: DirectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectionCountOutputType without action
   */
  export type DirectionCountOutputTypeCountPointPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointPlanWhereInput
  }

  /**
   * DirectionCountOutputType without action
   */
  export type DirectionCountOutputTypeCountPersonalGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalPlanGoalWhereInput
  }

  /**
   * DirectionCountOutputType without action
   */
  export type DirectionCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySaleWhereInput
  }


  /**
   * Count Type EmployeePlanCountOutputType
   */

  export type EmployeePlanCountOutputType = {
    goals: number
  }

  export type EmployeePlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | EmployeePlanCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * EmployeePlanCountOutputType without action
   */
  export type EmployeePlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlanCountOutputType
     */
    select?: EmployeePlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeePlanCountOutputType without action
   */
  export type EmployeePlanCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalPlanGoalWhereInput
  }


  /**
   * Count Type ShiftCountOutputType
   */

  export type ShiftCountOutputType = {
    assignments: number
  }

  export type ShiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | ShiftCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftCountOutputType
     */
    select?: ShiftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    code: number
    name: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PointMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: string
    code: string
    name: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: PointCountAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Point$usersArgs<ExtArgs>
    shifts?: boolean | Point$shiftsArgs<ExtArgs>
    pointPlans?: boolean | Point$pointPlansArgs<ExtArgs>
    employeePlan?: boolean | Point$employeePlanArgs<ExtArgs>
    sales?: boolean | Point$salesArgs<ExtArgs>
    _count?: boolean | PointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["point"]>

  export type PointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["point"]>
  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Point$usersArgs<ExtArgs>
    shifts?: boolean | Point$shiftsArgs<ExtArgs>
    pointPlans?: boolean | Point$pointPlansArgs<ExtArgs>
    employeePlan?: boolean | Point$employeePlanArgs<ExtArgs>
    sales?: boolean | Point$salesArgs<ExtArgs>
    _count?: boolean | PointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      shifts: Prisma.$ShiftPayload<ExtArgs>[]
      pointPlans: Prisma.$PointPlanPayload<ExtArgs>[]
      employeePlan: Prisma.$EmployeePlanPayload<ExtArgs>[]
      sales: Prisma.$DailySalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointUpdateManyAndReturnArgs>(args: SelectSubset<T, PointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Point$usersArgs<ExtArgs> = {}>(args?: Subset<T, Point$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shifts<T extends Point$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, Point$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointPlans<T extends Point$pointPlansArgs<ExtArgs> = {}>(args?: Subset<T, Point$pointPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employeePlan<T extends Point$employeePlanArgs<ExtArgs> = {}>(args?: Subset<T, Point$employeePlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Point$salesArgs<ExtArgs> = {}>(args?: Subset<T, Point$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Point model
   */
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'String'>
    readonly code: FieldRef<"Point", 'String'>
    readonly name: FieldRef<"Point", 'String'>
    readonly address: FieldRef<"Point", 'String'>
    readonly createdAt: FieldRef<"Point", 'DateTime'>
    readonly updatedAt: FieldRef<"Point", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point updateManyAndReturn
   */
  export type PointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Point.users
   */
  export type Point$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Point.shifts
   */
  export type Point$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Point.pointPlans
   */
  export type Point$pointPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    where?: PointPlanWhereInput
    orderBy?: PointPlanOrderByWithRelationInput | PointPlanOrderByWithRelationInput[]
    cursor?: PointPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointPlanScalarFieldEnum | PointPlanScalarFieldEnum[]
  }

  /**
   * Point.employeePlan
   */
  export type Point$employeePlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    where?: EmployeePlanWhereInput
    orderBy?: EmployeePlanOrderByWithRelationInput | EmployeePlanOrderByWithRelationInput[]
    cursor?: EmployeePlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeePlanScalarFieldEnum | EmployeePlanScalarFieldEnum[]
  }

  /**
   * Point.sales
   */
  export type Point$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    where?: DailySaleWhereInput
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    cursor?: DailySaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


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
    penaltyCount: number | null
  }

  export type UserSumAggregateOutputType = {
    penaltyCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    pointId: string | null
    penaltyCount: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    pointId: string | null
    penaltyCount: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    code: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    pointId: number
    penaltyCount: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    penaltyCount?: true
  }

  export type UserSumAggregateInputType = {
    penaltyCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    pointId?: true
    penaltyCount?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    pointId?: true
    penaltyCount?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    pointId?: true
    penaltyCount?: true
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
    code: string
    name: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    pointId: string | null
    penaltyCount: number
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
    code?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pointId?: boolean
    penaltyCount?: boolean
    point?: boolean | User$pointArgs<ExtArgs>
    openedShifts?: boolean | User$openedShiftsArgs<ExtArgs>
    closedShifts?: boolean | User$closedShiftsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    employeePlans?: boolean | User$employeePlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pointId?: boolean
    penaltyCount?: boolean
    point?: boolean | User$pointArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pointId?: boolean
    penaltyCount?: boolean
    point?: boolean | User$pointArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pointId?: boolean
    penaltyCount?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "role" | "isActive" | "createdAt" | "updatedAt" | "pointId" | "penaltyCount", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | User$pointArgs<ExtArgs>
    openedShifts?: boolean | User$openedShiftsArgs<ExtArgs>
    closedShifts?: boolean | User$closedShiftsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    employeePlans?: boolean | User$employeePlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | User$pointArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | User$pointArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      point: Prisma.$PointPayload<ExtArgs> | null
      openedShifts: Prisma.$ShiftPayload<ExtArgs>[]
      closedShifts: Prisma.$ShiftPayload<ExtArgs>[]
      assignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
      sales: Prisma.$DailySalePayload<ExtArgs>[]
      employeePlans: Prisma.$EmployeePlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      pointId: string | null
      penaltyCount: number
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
    point<T extends User$pointArgs<ExtArgs> = {}>(args?: Subset<T, User$pointArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    openedShifts<T extends User$openedShiftsArgs<ExtArgs> = {}>(args?: Subset<T, User$openedShiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    closedShifts<T extends User$closedShiftsArgs<ExtArgs> = {}>(args?: Subset<T, User$closedShiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employeePlans<T extends User$employeePlansArgs<ExtArgs> = {}>(args?: Subset<T, User$employeePlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly code: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly pointId: FieldRef<"User", 'String'>
    readonly penaltyCount: FieldRef<"User", 'Int'>
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
   * User.point
   */
  export type User$pointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
  }

  /**
   * User.openedShifts
   */
  export type User$openedShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * User.closedShifts
   */
  export type User$closedShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    where?: DailySaleWhereInput
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    cursor?: DailySaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * User.employeePlans
   */
  export type User$employeePlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    where?: EmployeePlanWhereInput
    orderBy?: EmployeePlanOrderByWithRelationInput | EmployeePlanOrderByWithRelationInput[]
    cursor?: EmployeePlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeePlanScalarFieldEnum | EmployeePlanScalarFieldEnum[]
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
   * Model Direction
   */

  export type AggregateDirection = {
    _count: DirectionCountAggregateOutputType | null
    _min: DirectionMinAggregateOutputType | null
    _max: DirectionMaxAggregateOutputType | null
  }

  export type DirectionMinAggregateOutputType = {
    id: string | null
    key: string | null
    title: string | null
    unit: $Enums.MetricUnit | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectionMaxAggregateOutputType = {
    id: string | null
    key: string | null
    title: string | null
    unit: $Enums.MetricUnit | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectionCountAggregateOutputType = {
    id: number
    key: number
    title: number
    unit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectionMinAggregateInputType = {
    id?: true
    key?: true
    title?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectionMaxAggregateInputType = {
    id?: true
    key?: true
    title?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectionCountAggregateInputType = {
    id?: true
    key?: true
    title?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direction to aggregate.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directions
    **/
    _count?: true | DirectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectionMaxAggregateInputType
  }

  export type GetDirectionAggregateType<T extends DirectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDirection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirection[P]>
      : GetScalarType<T[P], AggregateDirection[P]>
  }




  export type DirectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectionWhereInput
    orderBy?: DirectionOrderByWithAggregationInput | DirectionOrderByWithAggregationInput[]
    by: DirectionScalarFieldEnum[] | DirectionScalarFieldEnum
    having?: DirectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectionCountAggregateInputType | true
    _min?: DirectionMinAggregateInputType
    _max?: DirectionMaxAggregateInputType
  }

  export type DirectionGroupByOutputType = {
    id: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt: Date
    updatedAt: Date
    _count: DirectionCountAggregateOutputType | null
    _min: DirectionMinAggregateOutputType | null
    _max: DirectionMaxAggregateOutputType | null
  }

  type GetDirectionGroupByPayload<T extends DirectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectionGroupByOutputType[P]>
            : GetScalarType<T[P], DirectionGroupByOutputType[P]>
        }
      >
    >


  export type DirectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pointPlans?: boolean | Direction$pointPlansArgs<ExtArgs>
    personalGoals?: boolean | Direction$personalGoalsArgs<ExtArgs>
    sales?: boolean | Direction$salesArgs<ExtArgs>
    _count?: boolean | DirectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direction"]>

  export type DirectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["direction"]>

  export type DirectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["direction"]>

  export type DirectionSelectScalar = {
    id?: boolean
    key?: boolean
    title?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DirectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "title" | "unit" | "createdAt" | "updatedAt", ExtArgs["result"]["direction"]>
  export type DirectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pointPlans?: boolean | Direction$pointPlansArgs<ExtArgs>
    personalGoals?: boolean | Direction$personalGoalsArgs<ExtArgs>
    sales?: boolean | Direction$salesArgs<ExtArgs>
    _count?: boolean | DirectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DirectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DirectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direction"
    objects: {
      pointPlans: Prisma.$PointPlanPayload<ExtArgs>[]
      personalGoals: Prisma.$PersonalPlanGoalPayload<ExtArgs>[]
      sales: Prisma.$DailySalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      title: string
      unit: $Enums.MetricUnit
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["direction"]>
    composites: {}
  }

  type DirectionGetPayload<S extends boolean | null | undefined | DirectionDefaultArgs> = $Result.GetResult<Prisma.$DirectionPayload, S>

  type DirectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectionCountAggregateInputType | true
    }

  export interface DirectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direction'], meta: { name: 'Direction' } }
    /**
     * Find zero or one Direction that matches the filter.
     * @param {DirectionFindUniqueArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectionFindUniqueArgs>(args: SelectSubset<T, DirectionFindUniqueArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectionFindUniqueOrThrowArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionFindFirstArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectionFindFirstArgs>(args?: SelectSubset<T, DirectionFindFirstArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionFindFirstOrThrowArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directions
     * const directions = await prisma.direction.findMany()
     * 
     * // Get first 10 Directions
     * const directions = await prisma.direction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directionWithIdOnly = await prisma.direction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectionFindManyArgs>(args?: SelectSubset<T, DirectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direction.
     * @param {DirectionCreateArgs} args - Arguments to create a Direction.
     * @example
     * // Create one Direction
     * const Direction = await prisma.direction.create({
     *   data: {
     *     // ... data to create a Direction
     *   }
     * })
     * 
     */
    create<T extends DirectionCreateArgs>(args: SelectSubset<T, DirectionCreateArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directions.
     * @param {DirectionCreateManyArgs} args - Arguments to create many Directions.
     * @example
     * // Create many Directions
     * const direction = await prisma.direction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectionCreateManyArgs>(args?: SelectSubset<T, DirectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Directions and returns the data saved in the database.
     * @param {DirectionCreateManyAndReturnArgs} args - Arguments to create many Directions.
     * @example
     * // Create many Directions
     * const direction = await prisma.direction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Directions and only return the `id`
     * const directionWithIdOnly = await prisma.direction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectionCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Direction.
     * @param {DirectionDeleteArgs} args - Arguments to delete one Direction.
     * @example
     * // Delete one Direction
     * const Direction = await prisma.direction.delete({
     *   where: {
     *     // ... filter to delete one Direction
     *   }
     * })
     * 
     */
    delete<T extends DirectionDeleteArgs>(args: SelectSubset<T, DirectionDeleteArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direction.
     * @param {DirectionUpdateArgs} args - Arguments to update one Direction.
     * @example
     * // Update one Direction
     * const direction = await prisma.direction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectionUpdateArgs>(args: SelectSubset<T, DirectionUpdateArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directions.
     * @param {DirectionDeleteManyArgs} args - Arguments to filter Directions to delete.
     * @example
     * // Delete a few Directions
     * const { count } = await prisma.direction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectionDeleteManyArgs>(args?: SelectSubset<T, DirectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directions
     * const direction = await prisma.direction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectionUpdateManyArgs>(args: SelectSubset<T, DirectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directions and returns the data updated in the database.
     * @param {DirectionUpdateManyAndReturnArgs} args - Arguments to update many Directions.
     * @example
     * // Update many Directions
     * const direction = await prisma.direction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Directions and only return the `id`
     * const directionWithIdOnly = await prisma.direction.updateManyAndReturn({
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
    updateManyAndReturn<T extends DirectionUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Direction.
     * @param {DirectionUpsertArgs} args - Arguments to update or create a Direction.
     * @example
     * // Update or create a Direction
     * const direction = await prisma.direction.upsert({
     *   create: {
     *     // ... data to create a Direction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direction we want to update
     *   }
     * })
     */
    upsert<T extends DirectionUpsertArgs>(args: SelectSubset<T, DirectionUpsertArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionCountArgs} args - Arguments to filter Directions to count.
     * @example
     * // Count the number of Directions
     * const count = await prisma.direction.count({
     *   where: {
     *     // ... the filter for the Directions we want to count
     *   }
     * })
    **/
    count<T extends DirectionCountArgs>(
      args?: Subset<T, DirectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectionAggregateArgs>(args: Subset<T, DirectionAggregateArgs>): Prisma.PrismaPromise<GetDirectionAggregateType<T>>

    /**
     * Group by Direction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionGroupByArgs} args - Group by arguments.
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
      T extends DirectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectionGroupByArgs['orderBy'] }
        : { orderBy?: DirectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direction model
   */
  readonly fields: DirectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pointPlans<T extends Direction$pointPlansArgs<ExtArgs> = {}>(args?: Subset<T, Direction$pointPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personalGoals<T extends Direction$personalGoalsArgs<ExtArgs> = {}>(args?: Subset<T, Direction$personalGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Direction$salesArgs<ExtArgs> = {}>(args?: Subset<T, Direction$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Direction model
   */
  interface DirectionFieldRefs {
    readonly id: FieldRef<"Direction", 'String'>
    readonly key: FieldRef<"Direction", 'String'>
    readonly title: FieldRef<"Direction", 'String'>
    readonly unit: FieldRef<"Direction", 'MetricUnit'>
    readonly createdAt: FieldRef<"Direction", 'DateTime'>
    readonly updatedAt: FieldRef<"Direction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Direction findUnique
   */
  export type DirectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction findUniqueOrThrow
   */
  export type DirectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction findFirst
   */
  export type DirectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directions.
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directions.
     */
    distinct?: DirectionScalarFieldEnum | DirectionScalarFieldEnum[]
  }

  /**
   * Direction findFirstOrThrow
   */
  export type DirectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directions.
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directions.
     */
    distinct?: DirectionScalarFieldEnum | DirectionScalarFieldEnum[]
  }

  /**
   * Direction findMany
   */
  export type DirectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Directions to fetch.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directions.
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    distinct?: DirectionScalarFieldEnum | DirectionScalarFieldEnum[]
  }

  /**
   * Direction create
   */
  export type DirectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direction.
     */
    data: XOR<DirectionCreateInput, DirectionUncheckedCreateInput>
  }

  /**
   * Direction createMany
   */
  export type DirectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directions.
     */
    data: DirectionCreateManyInput | DirectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direction createManyAndReturn
   */
  export type DirectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * The data used to create many Directions.
     */
    data: DirectionCreateManyInput | DirectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direction update
   */
  export type DirectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direction.
     */
    data: XOR<DirectionUpdateInput, DirectionUncheckedUpdateInput>
    /**
     * Choose, which Direction to update.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction updateMany
   */
  export type DirectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Directions.
     */
    data: XOR<DirectionUpdateManyMutationInput, DirectionUncheckedUpdateManyInput>
    /**
     * Filter which Directions to update
     */
    where?: DirectionWhereInput
    /**
     * Limit how many Directions to update.
     */
    limit?: number
  }

  /**
   * Direction updateManyAndReturn
   */
  export type DirectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * The data used to update Directions.
     */
    data: XOR<DirectionUpdateManyMutationInput, DirectionUncheckedUpdateManyInput>
    /**
     * Filter which Directions to update
     */
    where?: DirectionWhereInput
    /**
     * Limit how many Directions to update.
     */
    limit?: number
  }

  /**
   * Direction upsert
   */
  export type DirectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direction to update in case it exists.
     */
    where: DirectionWhereUniqueInput
    /**
     * In case the Direction found by the `where` argument doesn't exist, create a new Direction with this data.
     */
    create: XOR<DirectionCreateInput, DirectionUncheckedCreateInput>
    /**
     * In case the Direction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectionUpdateInput, DirectionUncheckedUpdateInput>
  }

  /**
   * Direction delete
   */
  export type DirectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter which Direction to delete.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction deleteMany
   */
  export type DirectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directions to delete
     */
    where?: DirectionWhereInput
    /**
     * Limit how many Directions to delete.
     */
    limit?: number
  }

  /**
   * Direction.pointPlans
   */
  export type Direction$pointPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    where?: PointPlanWhereInput
    orderBy?: PointPlanOrderByWithRelationInput | PointPlanOrderByWithRelationInput[]
    cursor?: PointPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointPlanScalarFieldEnum | PointPlanScalarFieldEnum[]
  }

  /**
   * Direction.personalGoals
   */
  export type Direction$personalGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    where?: PersonalPlanGoalWhereInput
    orderBy?: PersonalPlanGoalOrderByWithRelationInput | PersonalPlanGoalOrderByWithRelationInput[]
    cursor?: PersonalPlanGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalPlanGoalScalarFieldEnum | PersonalPlanGoalScalarFieldEnum[]
  }

  /**
   * Direction.sales
   */
  export type Direction$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    where?: DailySaleWhereInput
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    cursor?: DailySaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * Direction without action
   */
  export type DirectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
  }


  /**
   * Model PointPlan
   */

  export type AggregatePointPlan = {
    _count: PointPlanCountAggregateOutputType | null
    _avg: PointPlanAvgAggregateOutputType | null
    _sum: PointPlanSumAggregateOutputType | null
    _min: PointPlanMinAggregateOutputType | null
    _max: PointPlanMaxAggregateOutputType | null
  }

  export type PointPlanAvgAggregateOutputType = {
    target: number | null
  }

  export type PointPlanSumAggregateOutputType = {
    target: number | null
  }

  export type PointPlanMinAggregateOutputType = {
    id: string | null
    pointId: string | null
    directionId: string | null
    monthStart: Date | null
    target: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointPlanMaxAggregateOutputType = {
    id: string | null
    pointId: string | null
    directionId: string | null
    monthStart: Date | null
    target: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointPlanCountAggregateOutputType = {
    id: number
    pointId: number
    directionId: number
    monthStart: number
    target: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PointPlanAvgAggregateInputType = {
    target?: true
  }

  export type PointPlanSumAggregateInputType = {
    target?: true
  }

  export type PointPlanMinAggregateInputType = {
    id?: true
    pointId?: true
    directionId?: true
    monthStart?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointPlanMaxAggregateInputType = {
    id?: true
    pointId?: true
    directionId?: true
    monthStart?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointPlanCountAggregateInputType = {
    id?: true
    pointId?: true
    directionId?: true
    monthStart?: true
    target?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PointPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointPlan to aggregate.
     */
    where?: PointPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointPlans to fetch.
     */
    orderBy?: PointPlanOrderByWithRelationInput | PointPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointPlans
    **/
    _count?: true | PointPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointPlanMaxAggregateInputType
  }

  export type GetPointPlanAggregateType<T extends PointPlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePointPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointPlan[P]>
      : GetScalarType<T[P], AggregatePointPlan[P]>
  }




  export type PointPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointPlanWhereInput
    orderBy?: PointPlanOrderByWithAggregationInput | PointPlanOrderByWithAggregationInput[]
    by: PointPlanScalarFieldEnum[] | PointPlanScalarFieldEnum
    having?: PointPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointPlanCountAggregateInputType | true
    _avg?: PointPlanAvgAggregateInputType
    _sum?: PointPlanSumAggregateInputType
    _min?: PointPlanMinAggregateInputType
    _max?: PointPlanMaxAggregateInputType
  }

  export type PointPlanGroupByOutputType = {
    id: string
    pointId: string
    directionId: string
    monthStart: Date
    target: number
    createdAt: Date
    updatedAt: Date
    _count: PointPlanCountAggregateOutputType | null
    _avg: PointPlanAvgAggregateOutputType | null
    _sum: PointPlanSumAggregateOutputType | null
    _min: PointPlanMinAggregateOutputType | null
    _max: PointPlanMaxAggregateOutputType | null
  }

  type GetPointPlanGroupByPayload<T extends PointPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointPlanGroupByOutputType[P]>
            : GetScalarType<T[P], PointPlanGroupByOutputType[P]>
        }
      >
    >


  export type PointPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    directionId?: boolean
    monthStart?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointPlan"]>

  export type PointPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    directionId?: boolean
    monthStart?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointPlan"]>

  export type PointPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    directionId?: boolean
    monthStart?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointPlan"]>

  export type PointPlanSelectScalar = {
    id?: boolean
    pointId?: boolean
    directionId?: boolean
    monthStart?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PointPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pointId" | "directionId" | "monthStart" | "target" | "createdAt" | "updatedAt", ExtArgs["result"]["pointPlan"]>
  export type PointPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }
  export type PointPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }
  export type PointPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }

  export type $PointPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointPlan"
    objects: {
      point: Prisma.$PointPayload<ExtArgs>
      direction: Prisma.$DirectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pointId: string
      directionId: string
      monthStart: Date
      target: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pointPlan"]>
    composites: {}
  }

  type PointPlanGetPayload<S extends boolean | null | undefined | PointPlanDefaultArgs> = $Result.GetResult<Prisma.$PointPlanPayload, S>

  type PointPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointPlanCountAggregateInputType | true
    }

  export interface PointPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointPlan'], meta: { name: 'PointPlan' } }
    /**
     * Find zero or one PointPlan that matches the filter.
     * @param {PointPlanFindUniqueArgs} args - Arguments to find a PointPlan
     * @example
     * // Get one PointPlan
     * const pointPlan = await prisma.pointPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointPlanFindUniqueArgs>(args: SelectSubset<T, PointPlanFindUniqueArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointPlanFindUniqueOrThrowArgs} args - Arguments to find a PointPlan
     * @example
     * // Get one PointPlan
     * const pointPlan = await prisma.pointPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PointPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointPlanFindFirstArgs} args - Arguments to find a PointPlan
     * @example
     * // Get one PointPlan
     * const pointPlan = await prisma.pointPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointPlanFindFirstArgs>(args?: SelectSubset<T, PointPlanFindFirstArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointPlanFindFirstOrThrowArgs} args - Arguments to find a PointPlan
     * @example
     * // Get one PointPlan
     * const pointPlan = await prisma.pointPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PointPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointPlans
     * const pointPlans = await prisma.pointPlan.findMany()
     * 
     * // Get first 10 PointPlans
     * const pointPlans = await prisma.pointPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointPlanWithIdOnly = await prisma.pointPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointPlanFindManyArgs>(args?: SelectSubset<T, PointPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointPlan.
     * @param {PointPlanCreateArgs} args - Arguments to create a PointPlan.
     * @example
     * // Create one PointPlan
     * const PointPlan = await prisma.pointPlan.create({
     *   data: {
     *     // ... data to create a PointPlan
     *   }
     * })
     * 
     */
    create<T extends PointPlanCreateArgs>(args: SelectSubset<T, PointPlanCreateArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointPlans.
     * @param {PointPlanCreateManyArgs} args - Arguments to create many PointPlans.
     * @example
     * // Create many PointPlans
     * const pointPlan = await prisma.pointPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointPlanCreateManyArgs>(args?: SelectSubset<T, PointPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointPlans and returns the data saved in the database.
     * @param {PointPlanCreateManyAndReturnArgs} args - Arguments to create many PointPlans.
     * @example
     * // Create many PointPlans
     * const pointPlan = await prisma.pointPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointPlans and only return the `id`
     * const pointPlanWithIdOnly = await prisma.pointPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PointPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointPlan.
     * @param {PointPlanDeleteArgs} args - Arguments to delete one PointPlan.
     * @example
     * // Delete one PointPlan
     * const PointPlan = await prisma.pointPlan.delete({
     *   where: {
     *     // ... filter to delete one PointPlan
     *   }
     * })
     * 
     */
    delete<T extends PointPlanDeleteArgs>(args: SelectSubset<T, PointPlanDeleteArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointPlan.
     * @param {PointPlanUpdateArgs} args - Arguments to update one PointPlan.
     * @example
     * // Update one PointPlan
     * const pointPlan = await prisma.pointPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointPlanUpdateArgs>(args: SelectSubset<T, PointPlanUpdateArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointPlans.
     * @param {PointPlanDeleteManyArgs} args - Arguments to filter PointPlans to delete.
     * @example
     * // Delete a few PointPlans
     * const { count } = await prisma.pointPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointPlanDeleteManyArgs>(args?: SelectSubset<T, PointPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointPlans
     * const pointPlan = await prisma.pointPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointPlanUpdateManyArgs>(args: SelectSubset<T, PointPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointPlans and returns the data updated in the database.
     * @param {PointPlanUpdateManyAndReturnArgs} args - Arguments to update many PointPlans.
     * @example
     * // Update many PointPlans
     * const pointPlan = await prisma.pointPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointPlans and only return the `id`
     * const pointPlanWithIdOnly = await prisma.pointPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PointPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointPlan.
     * @param {PointPlanUpsertArgs} args - Arguments to update or create a PointPlan.
     * @example
     * // Update or create a PointPlan
     * const pointPlan = await prisma.pointPlan.upsert({
     *   create: {
     *     // ... data to create a PointPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointPlan we want to update
     *   }
     * })
     */
    upsert<T extends PointPlanUpsertArgs>(args: SelectSubset<T, PointPlanUpsertArgs<ExtArgs>>): Prisma__PointPlanClient<$Result.GetResult<Prisma.$PointPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointPlanCountArgs} args - Arguments to filter PointPlans to count.
     * @example
     * // Count the number of PointPlans
     * const count = await prisma.pointPlan.count({
     *   where: {
     *     // ... the filter for the PointPlans we want to count
     *   }
     * })
    **/
    count<T extends PointPlanCountArgs>(
      args?: Subset<T, PointPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointPlanAggregateArgs>(args: Subset<T, PointPlanAggregateArgs>): Prisma.PrismaPromise<GetPointPlanAggregateType<T>>

    /**
     * Group by PointPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointPlanGroupByArgs} args - Group by arguments.
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
      T extends PointPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointPlanGroupByArgs['orderBy'] }
        : { orderBy?: PointPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointPlan model
   */
  readonly fields: PointPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    point<T extends PointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PointDefaultArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direction<T extends DirectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectionDefaultArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PointPlan model
   */
  interface PointPlanFieldRefs {
    readonly id: FieldRef<"PointPlan", 'String'>
    readonly pointId: FieldRef<"PointPlan", 'String'>
    readonly directionId: FieldRef<"PointPlan", 'String'>
    readonly monthStart: FieldRef<"PointPlan", 'DateTime'>
    readonly target: FieldRef<"PointPlan", 'Int'>
    readonly createdAt: FieldRef<"PointPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"PointPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointPlan findUnique
   */
  export type PointPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * Filter, which PointPlan to fetch.
     */
    where: PointPlanWhereUniqueInput
  }

  /**
   * PointPlan findUniqueOrThrow
   */
  export type PointPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * Filter, which PointPlan to fetch.
     */
    where: PointPlanWhereUniqueInput
  }

  /**
   * PointPlan findFirst
   */
  export type PointPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * Filter, which PointPlan to fetch.
     */
    where?: PointPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointPlans to fetch.
     */
    orderBy?: PointPlanOrderByWithRelationInput | PointPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointPlans.
     */
    cursor?: PointPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointPlans.
     */
    distinct?: PointPlanScalarFieldEnum | PointPlanScalarFieldEnum[]
  }

  /**
   * PointPlan findFirstOrThrow
   */
  export type PointPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * Filter, which PointPlan to fetch.
     */
    where?: PointPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointPlans to fetch.
     */
    orderBy?: PointPlanOrderByWithRelationInput | PointPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointPlans.
     */
    cursor?: PointPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointPlans.
     */
    distinct?: PointPlanScalarFieldEnum | PointPlanScalarFieldEnum[]
  }

  /**
   * PointPlan findMany
   */
  export type PointPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * Filter, which PointPlans to fetch.
     */
    where?: PointPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointPlans to fetch.
     */
    orderBy?: PointPlanOrderByWithRelationInput | PointPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointPlans.
     */
    cursor?: PointPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointPlans.
     */
    skip?: number
    distinct?: PointPlanScalarFieldEnum | PointPlanScalarFieldEnum[]
  }

  /**
   * PointPlan create
   */
  export type PointPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a PointPlan.
     */
    data: XOR<PointPlanCreateInput, PointPlanUncheckedCreateInput>
  }

  /**
   * PointPlan createMany
   */
  export type PointPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointPlans.
     */
    data: PointPlanCreateManyInput | PointPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointPlan createManyAndReturn
   */
  export type PointPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * The data used to create many PointPlans.
     */
    data: PointPlanCreateManyInput | PointPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointPlan update
   */
  export type PointPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a PointPlan.
     */
    data: XOR<PointPlanUpdateInput, PointPlanUncheckedUpdateInput>
    /**
     * Choose, which PointPlan to update.
     */
    where: PointPlanWhereUniqueInput
  }

  /**
   * PointPlan updateMany
   */
  export type PointPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointPlans.
     */
    data: XOR<PointPlanUpdateManyMutationInput, PointPlanUncheckedUpdateManyInput>
    /**
     * Filter which PointPlans to update
     */
    where?: PointPlanWhereInput
    /**
     * Limit how many PointPlans to update.
     */
    limit?: number
  }

  /**
   * PointPlan updateManyAndReturn
   */
  export type PointPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * The data used to update PointPlans.
     */
    data: XOR<PointPlanUpdateManyMutationInput, PointPlanUncheckedUpdateManyInput>
    /**
     * Filter which PointPlans to update
     */
    where?: PointPlanWhereInput
    /**
     * Limit how many PointPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointPlan upsert
   */
  export type PointPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the PointPlan to update in case it exists.
     */
    where: PointPlanWhereUniqueInput
    /**
     * In case the PointPlan found by the `where` argument doesn't exist, create a new PointPlan with this data.
     */
    create: XOR<PointPlanCreateInput, PointPlanUncheckedCreateInput>
    /**
     * In case the PointPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointPlanUpdateInput, PointPlanUncheckedUpdateInput>
  }

  /**
   * PointPlan delete
   */
  export type PointPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
    /**
     * Filter which PointPlan to delete.
     */
    where: PointPlanWhereUniqueInput
  }

  /**
   * PointPlan deleteMany
   */
  export type PointPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointPlans to delete
     */
    where?: PointPlanWhereInput
    /**
     * Limit how many PointPlans to delete.
     */
    limit?: number
  }

  /**
   * PointPlan without action
   */
  export type PointPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointPlan
     */
    select?: PointPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointPlan
     */
    omit?: PointPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointPlanInclude<ExtArgs> | null
  }


  /**
   * Model EmployeePlan
   */

  export type AggregateEmployeePlan = {
    _count: EmployeePlanCountAggregateOutputType | null
    _min: EmployeePlanMinAggregateOutputType | null
    _max: EmployeePlanMaxAggregateOutputType | null
  }

  export type EmployeePlanMinAggregateOutputType = {
    id: string | null
    pointId: string | null
    employeeId: string | null
    monthStart: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeePlanMaxAggregateOutputType = {
    id: string | null
    pointId: string | null
    employeeId: string | null
    monthStart: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeePlanCountAggregateOutputType = {
    id: number
    pointId: number
    employeeId: number
    monthStart: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeePlanMinAggregateInputType = {
    id?: true
    pointId?: true
    employeeId?: true
    monthStart?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeePlanMaxAggregateInputType = {
    id?: true
    pointId?: true
    employeeId?: true
    monthStart?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeePlanCountAggregateInputType = {
    id?: true
    pointId?: true
    employeeId?: true
    monthStart?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeePlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeePlan to aggregate.
     */
    where?: EmployeePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeePlans to fetch.
     */
    orderBy?: EmployeePlanOrderByWithRelationInput | EmployeePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeePlans
    **/
    _count?: true | EmployeePlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeePlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeePlanMaxAggregateInputType
  }

  export type GetEmployeePlanAggregateType<T extends EmployeePlanAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeePlan[P]>
      : GetScalarType<T[P], AggregateEmployeePlan[P]>
  }




  export type EmployeePlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeePlanWhereInput
    orderBy?: EmployeePlanOrderByWithAggregationInput | EmployeePlanOrderByWithAggregationInput[]
    by: EmployeePlanScalarFieldEnum[] | EmployeePlanScalarFieldEnum
    having?: EmployeePlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeePlanCountAggregateInputType | true
    _min?: EmployeePlanMinAggregateInputType
    _max?: EmployeePlanMaxAggregateInputType
  }

  export type EmployeePlanGroupByOutputType = {
    id: string
    pointId: string
    employeeId: string
    monthStart: Date
    createdAt: Date
    updatedAt: Date
    _count: EmployeePlanCountAggregateOutputType | null
    _min: EmployeePlanMinAggregateOutputType | null
    _max: EmployeePlanMaxAggregateOutputType | null
  }

  type GetEmployeePlanGroupByPayload<T extends EmployeePlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeePlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeePlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeePlanGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeePlanGroupByOutputType[P]>
        }
      >
    >


  export type EmployeePlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    employeeId?: boolean
    monthStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    goals?: boolean | EmployeePlan$goalsArgs<ExtArgs>
    _count?: boolean | EmployeePlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeePlan"]>

  export type EmployeePlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    employeeId?: boolean
    monthStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeePlan"]>

  export type EmployeePlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    employeeId?: boolean
    monthStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeePlan"]>

  export type EmployeePlanSelectScalar = {
    id?: boolean
    pointId?: boolean
    employeeId?: boolean
    monthStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeePlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pointId" | "employeeId" | "monthStart" | "createdAt" | "updatedAt", ExtArgs["result"]["employeePlan"]>
  export type EmployeePlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    goals?: boolean | EmployeePlan$goalsArgs<ExtArgs>
    _count?: boolean | EmployeePlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeePlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployeePlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmployeePlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeePlan"
    objects: {
      point: Prisma.$PointPayload<ExtArgs>
      employee: Prisma.$UserPayload<ExtArgs>
      goals: Prisma.$PersonalPlanGoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pointId: string
      employeeId: string
      monthStart: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeePlan"]>
    composites: {}
  }

  type EmployeePlanGetPayload<S extends boolean | null | undefined | EmployeePlanDefaultArgs> = $Result.GetResult<Prisma.$EmployeePlanPayload, S>

  type EmployeePlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeePlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeePlanCountAggregateInputType | true
    }

  export interface EmployeePlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeePlan'], meta: { name: 'EmployeePlan' } }
    /**
     * Find zero or one EmployeePlan that matches the filter.
     * @param {EmployeePlanFindUniqueArgs} args - Arguments to find a EmployeePlan
     * @example
     * // Get one EmployeePlan
     * const employeePlan = await prisma.employeePlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeePlanFindUniqueArgs>(args: SelectSubset<T, EmployeePlanFindUniqueArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeePlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeePlanFindUniqueOrThrowArgs} args - Arguments to find a EmployeePlan
     * @example
     * // Get one EmployeePlan
     * const employeePlan = await prisma.employeePlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeePlanFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeePlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeePlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeePlanFindFirstArgs} args - Arguments to find a EmployeePlan
     * @example
     * // Get one EmployeePlan
     * const employeePlan = await prisma.employeePlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeePlanFindFirstArgs>(args?: SelectSubset<T, EmployeePlanFindFirstArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeePlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeePlanFindFirstOrThrowArgs} args - Arguments to find a EmployeePlan
     * @example
     * // Get one EmployeePlan
     * const employeePlan = await prisma.employeePlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeePlanFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeePlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeePlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeePlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeePlans
     * const employeePlans = await prisma.employeePlan.findMany()
     * 
     * // Get first 10 EmployeePlans
     * const employeePlans = await prisma.employeePlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeePlanWithIdOnly = await prisma.employeePlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeePlanFindManyArgs>(args?: SelectSubset<T, EmployeePlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeePlan.
     * @param {EmployeePlanCreateArgs} args - Arguments to create a EmployeePlan.
     * @example
     * // Create one EmployeePlan
     * const EmployeePlan = await prisma.employeePlan.create({
     *   data: {
     *     // ... data to create a EmployeePlan
     *   }
     * })
     * 
     */
    create<T extends EmployeePlanCreateArgs>(args: SelectSubset<T, EmployeePlanCreateArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeePlans.
     * @param {EmployeePlanCreateManyArgs} args - Arguments to create many EmployeePlans.
     * @example
     * // Create many EmployeePlans
     * const employeePlan = await prisma.employeePlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeePlanCreateManyArgs>(args?: SelectSubset<T, EmployeePlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeePlans and returns the data saved in the database.
     * @param {EmployeePlanCreateManyAndReturnArgs} args - Arguments to create many EmployeePlans.
     * @example
     * // Create many EmployeePlans
     * const employeePlan = await prisma.employeePlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeePlans and only return the `id`
     * const employeePlanWithIdOnly = await prisma.employeePlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeePlanCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeePlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeePlan.
     * @param {EmployeePlanDeleteArgs} args - Arguments to delete one EmployeePlan.
     * @example
     * // Delete one EmployeePlan
     * const EmployeePlan = await prisma.employeePlan.delete({
     *   where: {
     *     // ... filter to delete one EmployeePlan
     *   }
     * })
     * 
     */
    delete<T extends EmployeePlanDeleteArgs>(args: SelectSubset<T, EmployeePlanDeleteArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeePlan.
     * @param {EmployeePlanUpdateArgs} args - Arguments to update one EmployeePlan.
     * @example
     * // Update one EmployeePlan
     * const employeePlan = await prisma.employeePlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeePlanUpdateArgs>(args: SelectSubset<T, EmployeePlanUpdateArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeePlans.
     * @param {EmployeePlanDeleteManyArgs} args - Arguments to filter EmployeePlans to delete.
     * @example
     * // Delete a few EmployeePlans
     * const { count } = await prisma.employeePlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeePlanDeleteManyArgs>(args?: SelectSubset<T, EmployeePlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeePlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeePlans
     * const employeePlan = await prisma.employeePlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeePlanUpdateManyArgs>(args: SelectSubset<T, EmployeePlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeePlans and returns the data updated in the database.
     * @param {EmployeePlanUpdateManyAndReturnArgs} args - Arguments to update many EmployeePlans.
     * @example
     * // Update many EmployeePlans
     * const employeePlan = await prisma.employeePlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeePlans and only return the `id`
     * const employeePlanWithIdOnly = await prisma.employeePlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeePlanUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeePlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeePlan.
     * @param {EmployeePlanUpsertArgs} args - Arguments to update or create a EmployeePlan.
     * @example
     * // Update or create a EmployeePlan
     * const employeePlan = await prisma.employeePlan.upsert({
     *   create: {
     *     // ... data to create a EmployeePlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeePlan we want to update
     *   }
     * })
     */
    upsert<T extends EmployeePlanUpsertArgs>(args: SelectSubset<T, EmployeePlanUpsertArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeePlanCountArgs} args - Arguments to filter EmployeePlans to count.
     * @example
     * // Count the number of EmployeePlans
     * const count = await prisma.employeePlan.count({
     *   where: {
     *     // ... the filter for the EmployeePlans we want to count
     *   }
     * })
    **/
    count<T extends EmployeePlanCountArgs>(
      args?: Subset<T, EmployeePlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeePlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeePlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeePlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeePlanAggregateArgs>(args: Subset<T, EmployeePlanAggregateArgs>): Prisma.PrismaPromise<GetEmployeePlanAggregateType<T>>

    /**
     * Group by EmployeePlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeePlanGroupByArgs} args - Group by arguments.
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
      T extends EmployeePlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeePlanGroupByArgs['orderBy'] }
        : { orderBy?: EmployeePlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeePlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeePlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeePlan model
   */
  readonly fields: EmployeePlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeePlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeePlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    point<T extends PointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PointDefaultArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goals<T extends EmployeePlan$goalsArgs<ExtArgs> = {}>(args?: Subset<T, EmployeePlan$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EmployeePlan model
   */
  interface EmployeePlanFieldRefs {
    readonly id: FieldRef<"EmployeePlan", 'String'>
    readonly pointId: FieldRef<"EmployeePlan", 'String'>
    readonly employeeId: FieldRef<"EmployeePlan", 'String'>
    readonly monthStart: FieldRef<"EmployeePlan", 'DateTime'>
    readonly createdAt: FieldRef<"EmployeePlan", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeePlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeePlan findUnique
   */
  export type EmployeePlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeePlan to fetch.
     */
    where: EmployeePlanWhereUniqueInput
  }

  /**
   * EmployeePlan findUniqueOrThrow
   */
  export type EmployeePlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeePlan to fetch.
     */
    where: EmployeePlanWhereUniqueInput
  }

  /**
   * EmployeePlan findFirst
   */
  export type EmployeePlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeePlan to fetch.
     */
    where?: EmployeePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeePlans to fetch.
     */
    orderBy?: EmployeePlanOrderByWithRelationInput | EmployeePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeePlans.
     */
    cursor?: EmployeePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeePlans.
     */
    distinct?: EmployeePlanScalarFieldEnum | EmployeePlanScalarFieldEnum[]
  }

  /**
   * EmployeePlan findFirstOrThrow
   */
  export type EmployeePlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeePlan to fetch.
     */
    where?: EmployeePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeePlans to fetch.
     */
    orderBy?: EmployeePlanOrderByWithRelationInput | EmployeePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeePlans.
     */
    cursor?: EmployeePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeePlans.
     */
    distinct?: EmployeePlanScalarFieldEnum | EmployeePlanScalarFieldEnum[]
  }

  /**
   * EmployeePlan findMany
   */
  export type EmployeePlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeePlans to fetch.
     */
    where?: EmployeePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeePlans to fetch.
     */
    orderBy?: EmployeePlanOrderByWithRelationInput | EmployeePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeePlans.
     */
    cursor?: EmployeePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeePlans.
     */
    skip?: number
    distinct?: EmployeePlanScalarFieldEnum | EmployeePlanScalarFieldEnum[]
  }

  /**
   * EmployeePlan create
   */
  export type EmployeePlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeePlan.
     */
    data: XOR<EmployeePlanCreateInput, EmployeePlanUncheckedCreateInput>
  }

  /**
   * EmployeePlan createMany
   */
  export type EmployeePlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeePlans.
     */
    data: EmployeePlanCreateManyInput | EmployeePlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeePlan createManyAndReturn
   */
  export type EmployeePlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeePlans.
     */
    data: EmployeePlanCreateManyInput | EmployeePlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeePlan update
   */
  export type EmployeePlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeePlan.
     */
    data: XOR<EmployeePlanUpdateInput, EmployeePlanUncheckedUpdateInput>
    /**
     * Choose, which EmployeePlan to update.
     */
    where: EmployeePlanWhereUniqueInput
  }

  /**
   * EmployeePlan updateMany
   */
  export type EmployeePlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeePlans.
     */
    data: XOR<EmployeePlanUpdateManyMutationInput, EmployeePlanUncheckedUpdateManyInput>
    /**
     * Filter which EmployeePlans to update
     */
    where?: EmployeePlanWhereInput
    /**
     * Limit how many EmployeePlans to update.
     */
    limit?: number
  }

  /**
   * EmployeePlan updateManyAndReturn
   */
  export type EmployeePlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * The data used to update EmployeePlans.
     */
    data: XOR<EmployeePlanUpdateManyMutationInput, EmployeePlanUncheckedUpdateManyInput>
    /**
     * Filter which EmployeePlans to update
     */
    where?: EmployeePlanWhereInput
    /**
     * Limit how many EmployeePlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeePlan upsert
   */
  export type EmployeePlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeePlan to update in case it exists.
     */
    where: EmployeePlanWhereUniqueInput
    /**
     * In case the EmployeePlan found by the `where` argument doesn't exist, create a new EmployeePlan with this data.
     */
    create: XOR<EmployeePlanCreateInput, EmployeePlanUncheckedCreateInput>
    /**
     * In case the EmployeePlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeePlanUpdateInput, EmployeePlanUncheckedUpdateInput>
  }

  /**
   * EmployeePlan delete
   */
  export type EmployeePlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
    /**
     * Filter which EmployeePlan to delete.
     */
    where: EmployeePlanWhereUniqueInput
  }

  /**
   * EmployeePlan deleteMany
   */
  export type EmployeePlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeePlans to delete
     */
    where?: EmployeePlanWhereInput
    /**
     * Limit how many EmployeePlans to delete.
     */
    limit?: number
  }

  /**
   * EmployeePlan.goals
   */
  export type EmployeePlan$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    where?: PersonalPlanGoalWhereInput
    orderBy?: PersonalPlanGoalOrderByWithRelationInput | PersonalPlanGoalOrderByWithRelationInput[]
    cursor?: PersonalPlanGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalPlanGoalScalarFieldEnum | PersonalPlanGoalScalarFieldEnum[]
  }

  /**
   * EmployeePlan without action
   */
  export type EmployeePlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeePlan
     */
    select?: EmployeePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeePlan
     */
    omit?: EmployeePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeePlanInclude<ExtArgs> | null
  }


  /**
   * Model PersonalPlanGoal
   */

  export type AggregatePersonalPlanGoal = {
    _count: PersonalPlanGoalCountAggregateOutputType | null
    _avg: PersonalPlanGoalAvgAggregateOutputType | null
    _sum: PersonalPlanGoalSumAggregateOutputType | null
    _min: PersonalPlanGoalMinAggregateOutputType | null
    _max: PersonalPlanGoalMaxAggregateOutputType | null
  }

  export type PersonalPlanGoalAvgAggregateOutputType = {
    target: number | null
  }

  export type PersonalPlanGoalSumAggregateOutputType = {
    target: number | null
  }

  export type PersonalPlanGoalMinAggregateOutputType = {
    id: string | null
    employeePlanId: string | null
    directionId: string | null
    target: number | null
    isPriority: boolean | null
  }

  export type PersonalPlanGoalMaxAggregateOutputType = {
    id: string | null
    employeePlanId: string | null
    directionId: string | null
    target: number | null
    isPriority: boolean | null
  }

  export type PersonalPlanGoalCountAggregateOutputType = {
    id: number
    employeePlanId: number
    directionId: number
    target: number
    isPriority: number
    _all: number
  }


  export type PersonalPlanGoalAvgAggregateInputType = {
    target?: true
  }

  export type PersonalPlanGoalSumAggregateInputType = {
    target?: true
  }

  export type PersonalPlanGoalMinAggregateInputType = {
    id?: true
    employeePlanId?: true
    directionId?: true
    target?: true
    isPriority?: true
  }

  export type PersonalPlanGoalMaxAggregateInputType = {
    id?: true
    employeePlanId?: true
    directionId?: true
    target?: true
    isPriority?: true
  }

  export type PersonalPlanGoalCountAggregateInputType = {
    id?: true
    employeePlanId?: true
    directionId?: true
    target?: true
    isPriority?: true
    _all?: true
  }

  export type PersonalPlanGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalPlanGoal to aggregate.
     */
    where?: PersonalPlanGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalPlanGoals to fetch.
     */
    orderBy?: PersonalPlanGoalOrderByWithRelationInput | PersonalPlanGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalPlanGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalPlanGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalPlanGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalPlanGoals
    **/
    _count?: true | PersonalPlanGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalPlanGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalPlanGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalPlanGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalPlanGoalMaxAggregateInputType
  }

  export type GetPersonalPlanGoalAggregateType<T extends PersonalPlanGoalAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalPlanGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalPlanGoal[P]>
      : GetScalarType<T[P], AggregatePersonalPlanGoal[P]>
  }




  export type PersonalPlanGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalPlanGoalWhereInput
    orderBy?: PersonalPlanGoalOrderByWithAggregationInput | PersonalPlanGoalOrderByWithAggregationInput[]
    by: PersonalPlanGoalScalarFieldEnum[] | PersonalPlanGoalScalarFieldEnum
    having?: PersonalPlanGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalPlanGoalCountAggregateInputType | true
    _avg?: PersonalPlanGoalAvgAggregateInputType
    _sum?: PersonalPlanGoalSumAggregateInputType
    _min?: PersonalPlanGoalMinAggregateInputType
    _max?: PersonalPlanGoalMaxAggregateInputType
  }

  export type PersonalPlanGoalGroupByOutputType = {
    id: string
    employeePlanId: string
    directionId: string
    target: number
    isPriority: boolean
    _count: PersonalPlanGoalCountAggregateOutputType | null
    _avg: PersonalPlanGoalAvgAggregateOutputType | null
    _sum: PersonalPlanGoalSumAggregateOutputType | null
    _min: PersonalPlanGoalMinAggregateOutputType | null
    _max: PersonalPlanGoalMaxAggregateOutputType | null
  }

  type GetPersonalPlanGoalGroupByPayload<T extends PersonalPlanGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalPlanGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalPlanGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalPlanGoalGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalPlanGoalGroupByOutputType[P]>
        }
      >
    >


  export type PersonalPlanGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeePlanId?: boolean
    directionId?: boolean
    target?: boolean
    isPriority?: boolean
    employeePlan?: boolean | EmployeePlanDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalPlanGoal"]>

  export type PersonalPlanGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeePlanId?: boolean
    directionId?: boolean
    target?: boolean
    isPriority?: boolean
    employeePlan?: boolean | EmployeePlanDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalPlanGoal"]>

  export type PersonalPlanGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeePlanId?: boolean
    directionId?: boolean
    target?: boolean
    isPriority?: boolean
    employeePlan?: boolean | EmployeePlanDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalPlanGoal"]>

  export type PersonalPlanGoalSelectScalar = {
    id?: boolean
    employeePlanId?: boolean
    directionId?: boolean
    target?: boolean
    isPriority?: boolean
  }

  export type PersonalPlanGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeePlanId" | "directionId" | "target" | "isPriority", ExtArgs["result"]["personalPlanGoal"]>
  export type PersonalPlanGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeePlan?: boolean | EmployeePlanDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }
  export type PersonalPlanGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeePlan?: boolean | EmployeePlanDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }
  export type PersonalPlanGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeePlan?: boolean | EmployeePlanDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }

  export type $PersonalPlanGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalPlanGoal"
    objects: {
      employeePlan: Prisma.$EmployeePlanPayload<ExtArgs>
      direction: Prisma.$DirectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeePlanId: string
      directionId: string
      target: number
      isPriority: boolean
    }, ExtArgs["result"]["personalPlanGoal"]>
    composites: {}
  }

  type PersonalPlanGoalGetPayload<S extends boolean | null | undefined | PersonalPlanGoalDefaultArgs> = $Result.GetResult<Prisma.$PersonalPlanGoalPayload, S>

  type PersonalPlanGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalPlanGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalPlanGoalCountAggregateInputType | true
    }

  export interface PersonalPlanGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalPlanGoal'], meta: { name: 'PersonalPlanGoal' } }
    /**
     * Find zero or one PersonalPlanGoal that matches the filter.
     * @param {PersonalPlanGoalFindUniqueArgs} args - Arguments to find a PersonalPlanGoal
     * @example
     * // Get one PersonalPlanGoal
     * const personalPlanGoal = await prisma.personalPlanGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalPlanGoalFindUniqueArgs>(args: SelectSubset<T, PersonalPlanGoalFindUniqueArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalPlanGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalPlanGoalFindUniqueOrThrowArgs} args - Arguments to find a PersonalPlanGoal
     * @example
     * // Get one PersonalPlanGoal
     * const personalPlanGoal = await prisma.personalPlanGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalPlanGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalPlanGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalPlanGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalPlanGoalFindFirstArgs} args - Arguments to find a PersonalPlanGoal
     * @example
     * // Get one PersonalPlanGoal
     * const personalPlanGoal = await prisma.personalPlanGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalPlanGoalFindFirstArgs>(args?: SelectSubset<T, PersonalPlanGoalFindFirstArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalPlanGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalPlanGoalFindFirstOrThrowArgs} args - Arguments to find a PersonalPlanGoal
     * @example
     * // Get one PersonalPlanGoal
     * const personalPlanGoal = await prisma.personalPlanGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalPlanGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalPlanGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalPlanGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalPlanGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalPlanGoals
     * const personalPlanGoals = await prisma.personalPlanGoal.findMany()
     * 
     * // Get first 10 PersonalPlanGoals
     * const personalPlanGoals = await prisma.personalPlanGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalPlanGoalWithIdOnly = await prisma.personalPlanGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalPlanGoalFindManyArgs>(args?: SelectSubset<T, PersonalPlanGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalPlanGoal.
     * @param {PersonalPlanGoalCreateArgs} args - Arguments to create a PersonalPlanGoal.
     * @example
     * // Create one PersonalPlanGoal
     * const PersonalPlanGoal = await prisma.personalPlanGoal.create({
     *   data: {
     *     // ... data to create a PersonalPlanGoal
     *   }
     * })
     * 
     */
    create<T extends PersonalPlanGoalCreateArgs>(args: SelectSubset<T, PersonalPlanGoalCreateArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalPlanGoals.
     * @param {PersonalPlanGoalCreateManyArgs} args - Arguments to create many PersonalPlanGoals.
     * @example
     * // Create many PersonalPlanGoals
     * const personalPlanGoal = await prisma.personalPlanGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalPlanGoalCreateManyArgs>(args?: SelectSubset<T, PersonalPlanGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalPlanGoals and returns the data saved in the database.
     * @param {PersonalPlanGoalCreateManyAndReturnArgs} args - Arguments to create many PersonalPlanGoals.
     * @example
     * // Create many PersonalPlanGoals
     * const personalPlanGoal = await prisma.personalPlanGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalPlanGoals and only return the `id`
     * const personalPlanGoalWithIdOnly = await prisma.personalPlanGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalPlanGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalPlanGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalPlanGoal.
     * @param {PersonalPlanGoalDeleteArgs} args - Arguments to delete one PersonalPlanGoal.
     * @example
     * // Delete one PersonalPlanGoal
     * const PersonalPlanGoal = await prisma.personalPlanGoal.delete({
     *   where: {
     *     // ... filter to delete one PersonalPlanGoal
     *   }
     * })
     * 
     */
    delete<T extends PersonalPlanGoalDeleteArgs>(args: SelectSubset<T, PersonalPlanGoalDeleteArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalPlanGoal.
     * @param {PersonalPlanGoalUpdateArgs} args - Arguments to update one PersonalPlanGoal.
     * @example
     * // Update one PersonalPlanGoal
     * const personalPlanGoal = await prisma.personalPlanGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalPlanGoalUpdateArgs>(args: SelectSubset<T, PersonalPlanGoalUpdateArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalPlanGoals.
     * @param {PersonalPlanGoalDeleteManyArgs} args - Arguments to filter PersonalPlanGoals to delete.
     * @example
     * // Delete a few PersonalPlanGoals
     * const { count } = await prisma.personalPlanGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalPlanGoalDeleteManyArgs>(args?: SelectSubset<T, PersonalPlanGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalPlanGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalPlanGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalPlanGoals
     * const personalPlanGoal = await prisma.personalPlanGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalPlanGoalUpdateManyArgs>(args: SelectSubset<T, PersonalPlanGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalPlanGoals and returns the data updated in the database.
     * @param {PersonalPlanGoalUpdateManyAndReturnArgs} args - Arguments to update many PersonalPlanGoals.
     * @example
     * // Update many PersonalPlanGoals
     * const personalPlanGoal = await prisma.personalPlanGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalPlanGoals and only return the `id`
     * const personalPlanGoalWithIdOnly = await prisma.personalPlanGoal.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonalPlanGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalPlanGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalPlanGoal.
     * @param {PersonalPlanGoalUpsertArgs} args - Arguments to update or create a PersonalPlanGoal.
     * @example
     * // Update or create a PersonalPlanGoal
     * const personalPlanGoal = await prisma.personalPlanGoal.upsert({
     *   create: {
     *     // ... data to create a PersonalPlanGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalPlanGoal we want to update
     *   }
     * })
     */
    upsert<T extends PersonalPlanGoalUpsertArgs>(args: SelectSubset<T, PersonalPlanGoalUpsertArgs<ExtArgs>>): Prisma__PersonalPlanGoalClient<$Result.GetResult<Prisma.$PersonalPlanGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalPlanGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalPlanGoalCountArgs} args - Arguments to filter PersonalPlanGoals to count.
     * @example
     * // Count the number of PersonalPlanGoals
     * const count = await prisma.personalPlanGoal.count({
     *   where: {
     *     // ... the filter for the PersonalPlanGoals we want to count
     *   }
     * })
    **/
    count<T extends PersonalPlanGoalCountArgs>(
      args?: Subset<T, PersonalPlanGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalPlanGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalPlanGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalPlanGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalPlanGoalAggregateArgs>(args: Subset<T, PersonalPlanGoalAggregateArgs>): Prisma.PrismaPromise<GetPersonalPlanGoalAggregateType<T>>

    /**
     * Group by PersonalPlanGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalPlanGoalGroupByArgs} args - Group by arguments.
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
      T extends PersonalPlanGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalPlanGoalGroupByArgs['orderBy'] }
        : { orderBy?: PersonalPlanGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonalPlanGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalPlanGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalPlanGoal model
   */
  readonly fields: PersonalPlanGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalPlanGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalPlanGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employeePlan<T extends EmployeePlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeePlanDefaultArgs<ExtArgs>>): Prisma__EmployeePlanClient<$Result.GetResult<Prisma.$EmployeePlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direction<T extends DirectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectionDefaultArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PersonalPlanGoal model
   */
  interface PersonalPlanGoalFieldRefs {
    readonly id: FieldRef<"PersonalPlanGoal", 'String'>
    readonly employeePlanId: FieldRef<"PersonalPlanGoal", 'String'>
    readonly directionId: FieldRef<"PersonalPlanGoal", 'String'>
    readonly target: FieldRef<"PersonalPlanGoal", 'Int'>
    readonly isPriority: FieldRef<"PersonalPlanGoal", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PersonalPlanGoal findUnique
   */
  export type PersonalPlanGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * Filter, which PersonalPlanGoal to fetch.
     */
    where: PersonalPlanGoalWhereUniqueInput
  }

  /**
   * PersonalPlanGoal findUniqueOrThrow
   */
  export type PersonalPlanGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * Filter, which PersonalPlanGoal to fetch.
     */
    where: PersonalPlanGoalWhereUniqueInput
  }

  /**
   * PersonalPlanGoal findFirst
   */
  export type PersonalPlanGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * Filter, which PersonalPlanGoal to fetch.
     */
    where?: PersonalPlanGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalPlanGoals to fetch.
     */
    orderBy?: PersonalPlanGoalOrderByWithRelationInput | PersonalPlanGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalPlanGoals.
     */
    cursor?: PersonalPlanGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalPlanGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalPlanGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalPlanGoals.
     */
    distinct?: PersonalPlanGoalScalarFieldEnum | PersonalPlanGoalScalarFieldEnum[]
  }

  /**
   * PersonalPlanGoal findFirstOrThrow
   */
  export type PersonalPlanGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * Filter, which PersonalPlanGoal to fetch.
     */
    where?: PersonalPlanGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalPlanGoals to fetch.
     */
    orderBy?: PersonalPlanGoalOrderByWithRelationInput | PersonalPlanGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalPlanGoals.
     */
    cursor?: PersonalPlanGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalPlanGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalPlanGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalPlanGoals.
     */
    distinct?: PersonalPlanGoalScalarFieldEnum | PersonalPlanGoalScalarFieldEnum[]
  }

  /**
   * PersonalPlanGoal findMany
   */
  export type PersonalPlanGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * Filter, which PersonalPlanGoals to fetch.
     */
    where?: PersonalPlanGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalPlanGoals to fetch.
     */
    orderBy?: PersonalPlanGoalOrderByWithRelationInput | PersonalPlanGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalPlanGoals.
     */
    cursor?: PersonalPlanGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalPlanGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalPlanGoals.
     */
    skip?: number
    distinct?: PersonalPlanGoalScalarFieldEnum | PersonalPlanGoalScalarFieldEnum[]
  }

  /**
   * PersonalPlanGoal create
   */
  export type PersonalPlanGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalPlanGoal.
     */
    data: XOR<PersonalPlanGoalCreateInput, PersonalPlanGoalUncheckedCreateInput>
  }

  /**
   * PersonalPlanGoal createMany
   */
  export type PersonalPlanGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalPlanGoals.
     */
    data: PersonalPlanGoalCreateManyInput | PersonalPlanGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalPlanGoal createManyAndReturn
   */
  export type PersonalPlanGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalPlanGoals.
     */
    data: PersonalPlanGoalCreateManyInput | PersonalPlanGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalPlanGoal update
   */
  export type PersonalPlanGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalPlanGoal.
     */
    data: XOR<PersonalPlanGoalUpdateInput, PersonalPlanGoalUncheckedUpdateInput>
    /**
     * Choose, which PersonalPlanGoal to update.
     */
    where: PersonalPlanGoalWhereUniqueInput
  }

  /**
   * PersonalPlanGoal updateMany
   */
  export type PersonalPlanGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalPlanGoals.
     */
    data: XOR<PersonalPlanGoalUpdateManyMutationInput, PersonalPlanGoalUncheckedUpdateManyInput>
    /**
     * Filter which PersonalPlanGoals to update
     */
    where?: PersonalPlanGoalWhereInput
    /**
     * Limit how many PersonalPlanGoals to update.
     */
    limit?: number
  }

  /**
   * PersonalPlanGoal updateManyAndReturn
   */
  export type PersonalPlanGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * The data used to update PersonalPlanGoals.
     */
    data: XOR<PersonalPlanGoalUpdateManyMutationInput, PersonalPlanGoalUncheckedUpdateManyInput>
    /**
     * Filter which PersonalPlanGoals to update
     */
    where?: PersonalPlanGoalWhereInput
    /**
     * Limit how many PersonalPlanGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalPlanGoal upsert
   */
  export type PersonalPlanGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalPlanGoal to update in case it exists.
     */
    where: PersonalPlanGoalWhereUniqueInput
    /**
     * In case the PersonalPlanGoal found by the `where` argument doesn't exist, create a new PersonalPlanGoal with this data.
     */
    create: XOR<PersonalPlanGoalCreateInput, PersonalPlanGoalUncheckedCreateInput>
    /**
     * In case the PersonalPlanGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalPlanGoalUpdateInput, PersonalPlanGoalUncheckedUpdateInput>
  }

  /**
   * PersonalPlanGoal delete
   */
  export type PersonalPlanGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
    /**
     * Filter which PersonalPlanGoal to delete.
     */
    where: PersonalPlanGoalWhereUniqueInput
  }

  /**
   * PersonalPlanGoal deleteMany
   */
  export type PersonalPlanGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalPlanGoals to delete
     */
    where?: PersonalPlanGoalWhereInput
    /**
     * Limit how many PersonalPlanGoals to delete.
     */
    limit?: number
  }

  /**
   * PersonalPlanGoal without action
   */
  export type PersonalPlanGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalPlanGoal
     */
    select?: PersonalPlanGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalPlanGoal
     */
    omit?: PersonalPlanGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalPlanGoalInclude<ExtArgs> | null
  }


  /**
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftMinAggregateOutputType = {
    id: string | null
    pointId: string | null
    workDate: Date | null
    openById: string | null
    closeById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: string | null
    pointId: string | null
    workDate: Date | null
    openById: string | null
    closeById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    pointId: number
    workDate: number
    openById: number
    closeById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftMinAggregateInputType = {
    id?: true
    pointId?: true
    workDate?: true
    openById?: true
    closeById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    pointId?: true
    workDate?: true
    openById?: true
    closeById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    pointId?: true
    workDate?: true
    openById?: true
    closeById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    id: string
    pointId: string
    workDate: Date
    openById: string | null
    closeById: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    workDate?: boolean
    openById?: boolean
    closeById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    openBy?: boolean | Shift$openByArgs<ExtArgs>
    closeBy?: boolean | Shift$closeByArgs<ExtArgs>
    assignments?: boolean | Shift$assignmentsArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    workDate?: boolean
    openById?: boolean
    closeById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    openBy?: boolean | Shift$openByArgs<ExtArgs>
    closeBy?: boolean | Shift$closeByArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointId?: boolean
    workDate?: boolean
    openById?: boolean
    closeById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    openBy?: boolean | Shift$openByArgs<ExtArgs>
    closeBy?: boolean | Shift$closeByArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    id?: boolean
    pointId?: boolean
    workDate?: boolean
    openById?: boolean
    closeById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pointId" | "workDate" | "openById" | "closeById" | "createdAt" | "updatedAt", ExtArgs["result"]["shift"]>
  export type ShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    openBy?: boolean | Shift$openByArgs<ExtArgs>
    closeBy?: boolean | Shift$closeByArgs<ExtArgs>
    assignments?: boolean | Shift$assignmentsArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    openBy?: boolean | Shift$openByArgs<ExtArgs>
    closeBy?: boolean | Shift$closeByArgs<ExtArgs>
  }
  export type ShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    openBy?: boolean | Shift$openByArgs<ExtArgs>
    closeBy?: boolean | Shift$closeByArgs<ExtArgs>
  }

  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {
      point: Prisma.$PointPayload<ExtArgs>
      openBy: Prisma.$UserPayload<ExtArgs> | null
      closeBy: Prisma.$UserPayload<ExtArgs> | null
      assignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pointId: string
      workDate: Date
      openById: string | null
      closeById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
     */
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shifts.
     * @param {ShiftCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftCreateManyArgs>(args?: SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {ShiftCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
     */
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftDeleteManyArgs>(args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftUpdateManyArgs>(args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts and returns the data updated in the database.
     * @param {ShiftUpdateManyAndReturnArgs} args - Arguments to update many Shifts.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
     */
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
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
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    point<T extends PointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PointDefaultArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    openBy<T extends Shift$openByArgs<ExtArgs> = {}>(args?: Subset<T, Shift$openByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    closeBy<T extends Shift$closeByArgs<ExtArgs> = {}>(args?: Subset<T, Shift$closeByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Shift$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Shift$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shift model
   */
  interface ShiftFieldRefs {
    readonly id: FieldRef<"Shift", 'String'>
    readonly pointId: FieldRef<"Shift", 'String'>
    readonly workDate: FieldRef<"Shift", 'DateTime'>
    readonly openById: FieldRef<"Shift", 'String'>
    readonly closeById: FieldRef<"Shift", 'String'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }

  /**
   * Shift createMany
   */
  export type ShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shift createManyAndReturn
   */
  export type ShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift updateManyAndReturn
   */
  export type ShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }

  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to delete.
     */
    limit?: number
  }

  /**
   * Shift.openBy
   */
  export type Shift$openByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Shift.closeBy
   */
  export type Shift$closeByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Shift.assignments
   */
  export type Shift$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
  }


  /**
   * Model ShiftAssignment
   */

  export type AggregateShiftAssignment = {
    _count: ShiftAssignmentCountAggregateOutputType | null
    _avg: ShiftAssignmentAvgAggregateOutputType | null
    _sum: ShiftAssignmentSumAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  export type ShiftAssignmentAvgAggregateOutputType = {
    hours: number | null
  }

  export type ShiftAssignmentSumAggregateOutputType = {
    hours: number | null
  }

  export type ShiftAssignmentMinAggregateOutputType = {
    id: string | null
    shiftId: string | null
    userId: string | null
    hours: number | null
    isOpen: boolean | null
    isClose: boolean | null
  }

  export type ShiftAssignmentMaxAggregateOutputType = {
    id: string | null
    shiftId: string | null
    userId: string | null
    hours: number | null
    isOpen: boolean | null
    isClose: boolean | null
  }

  export type ShiftAssignmentCountAggregateOutputType = {
    id: number
    shiftId: number
    userId: number
    hours: number
    isOpen: number
    isClose: number
    _all: number
  }


  export type ShiftAssignmentAvgAggregateInputType = {
    hours?: true
  }

  export type ShiftAssignmentSumAggregateInputType = {
    hours?: true
  }

  export type ShiftAssignmentMinAggregateInputType = {
    id?: true
    shiftId?: true
    userId?: true
    hours?: true
    isOpen?: true
    isClose?: true
  }

  export type ShiftAssignmentMaxAggregateInputType = {
    id?: true
    shiftId?: true
    userId?: true
    hours?: true
    isOpen?: true
    isClose?: true
  }

  export type ShiftAssignmentCountAggregateInputType = {
    id?: true
    shiftId?: true
    userId?: true
    hours?: true
    isOpen?: true
    isClose?: true
    _all?: true
  }

  export type ShiftAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignment to aggregate.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftAssignments
    **/
    _count?: true | ShiftAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type GetShiftAssignmentAggregateType<T extends ShiftAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftAssignment[P]>
      : GetScalarType<T[P], AggregateShiftAssignment[P]>
  }




  export type ShiftAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithAggregationInput | ShiftAssignmentOrderByWithAggregationInput[]
    by: ShiftAssignmentScalarFieldEnum[] | ShiftAssignmentScalarFieldEnum
    having?: ShiftAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftAssignmentCountAggregateInputType | true
    _avg?: ShiftAssignmentAvgAggregateInputType
    _sum?: ShiftAssignmentSumAggregateInputType
    _min?: ShiftAssignmentMinAggregateInputType
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type ShiftAssignmentGroupByOutputType = {
    id: string
    shiftId: string
    userId: string
    hours: number
    isOpen: boolean
    isClose: boolean
    _count: ShiftAssignmentCountAggregateOutputType | null
    _avg: ShiftAssignmentAvgAggregateOutputType | null
    _sum: ShiftAssignmentSumAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  type GetShiftAssignmentGroupByPayload<T extends ShiftAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ShiftAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    userId?: boolean
    hours?: boolean
    isOpen?: boolean
    isClose?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    userId?: boolean
    hours?: boolean
    isOpen?: boolean
    isClose?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    userId?: boolean
    hours?: boolean
    isOpen?: boolean
    isClose?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectScalar = {
    id?: boolean
    shiftId?: boolean
    userId?: boolean
    hours?: boolean
    isOpen?: boolean
    isClose?: boolean
  }

  export type ShiftAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftId" | "userId" | "hours" | "isOpen" | "isClose", ExtArgs["result"]["shiftAssignment"]>
  export type ShiftAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShiftAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftAssignment"
    objects: {
      shift: Prisma.$ShiftPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shiftId: string
      userId: string
      hours: number
      isOpen: boolean
      isClose: boolean
    }, ExtArgs["result"]["shiftAssignment"]>
    composites: {}
  }

  type ShiftAssignmentGetPayload<S extends boolean | null | undefined | ShiftAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ShiftAssignmentPayload, S>

  type ShiftAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftAssignmentCountAggregateInputType | true
    }

  export interface ShiftAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftAssignment'], meta: { name: 'ShiftAssignment' } }
    /**
     * Find zero or one ShiftAssignment that matches the filter.
     * @param {ShiftAssignmentFindUniqueArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftAssignmentFindUniqueArgs>(args: SelectSubset<T, ShiftAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftAssignmentFindFirstArgs>(args?: SelectSubset<T, ShiftAssignmentFindFirstArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany()
     * 
     * // Get first 10 ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftAssignmentFindManyArgs>(args?: SelectSubset<T, ShiftAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftAssignment.
     * @param {ShiftAssignmentCreateArgs} args - Arguments to create a ShiftAssignment.
     * @example
     * // Create one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.create({
     *   data: {
     *     // ... data to create a ShiftAssignment
     *   }
     * })
     * 
     */
    create<T extends ShiftAssignmentCreateArgs>(args: SelectSubset<T, ShiftAssignmentCreateArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftAssignments.
     * @param {ShiftAssignmentCreateManyArgs} args - Arguments to create many ShiftAssignments.
     * @example
     * // Create many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftAssignmentCreateManyArgs>(args?: SelectSubset<T, ShiftAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftAssignments and returns the data saved in the database.
     * @param {ShiftAssignmentCreateManyAndReturnArgs} args - Arguments to create many ShiftAssignments.
     * @example
     * // Create many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftAssignments and only return the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftAssignment.
     * @param {ShiftAssignmentDeleteArgs} args - Arguments to delete one ShiftAssignment.
     * @example
     * // Delete one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.delete({
     *   where: {
     *     // ... filter to delete one ShiftAssignment
     *   }
     * })
     * 
     */
    delete<T extends ShiftAssignmentDeleteArgs>(args: SelectSubset<T, ShiftAssignmentDeleteArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftAssignment.
     * @param {ShiftAssignmentUpdateArgs} args - Arguments to update one ShiftAssignment.
     * @example
     * // Update one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftAssignmentUpdateArgs>(args: SelectSubset<T, ShiftAssignmentUpdateArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftAssignments.
     * @param {ShiftAssignmentDeleteManyArgs} args - Arguments to filter ShiftAssignments to delete.
     * @example
     * // Delete a few ShiftAssignments
     * const { count } = await prisma.shiftAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftAssignmentDeleteManyArgs>(args?: SelectSubset<T, ShiftAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftAssignmentUpdateManyArgs>(args: SelectSubset<T, ShiftAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftAssignments and returns the data updated in the database.
     * @param {ShiftAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ShiftAssignments.
     * @example
     * // Update many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftAssignments and only return the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShiftAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftAssignment.
     * @param {ShiftAssignmentUpsertArgs} args - Arguments to update or create a ShiftAssignment.
     * @example
     * // Update or create a ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.upsert({
     *   create: {
     *     // ... data to create a ShiftAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ShiftAssignmentUpsertArgs>(args: SelectSubset<T, ShiftAssignmentUpsertArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentCountArgs} args - Arguments to filter ShiftAssignments to count.
     * @example
     * // Count the number of ShiftAssignments
     * const count = await prisma.shiftAssignment.count({
     *   where: {
     *     // ... the filter for the ShiftAssignments we want to count
     *   }
     * })
    **/
    count<T extends ShiftAssignmentCountArgs>(
      args?: Subset<T, ShiftAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAssignmentAggregateArgs>(args: Subset<T, ShiftAssignmentAggregateArgs>): Prisma.PrismaPromise<GetShiftAssignmentAggregateType<T>>

    /**
     * Group by ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ShiftAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ShiftAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftAssignment model
   */
  readonly fields: ShiftAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shift<T extends ShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftDefaultArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShiftAssignment model
   */
  interface ShiftAssignmentFieldRefs {
    readonly id: FieldRef<"ShiftAssignment", 'String'>
    readonly shiftId: FieldRef<"ShiftAssignment", 'String'>
    readonly userId: FieldRef<"ShiftAssignment", 'String'>
    readonly hours: FieldRef<"ShiftAssignment", 'Int'>
    readonly isOpen: FieldRef<"ShiftAssignment", 'Boolean'>
    readonly isClose: FieldRef<"ShiftAssignment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShiftAssignment findUnique
   */
  export type ShiftAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment findUniqueOrThrow
   */
  export type ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment findFirst
   */
  export type ShiftAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment findFirstOrThrow
   */
  export type ShiftAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment findMany
   */
  export type ShiftAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignments to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment create
   */
  export type ShiftAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
  }

  /**
   * ShiftAssignment createMany
   */
  export type ShiftAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftAssignments.
     */
    data: ShiftAssignmentCreateManyInput | ShiftAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftAssignment createManyAndReturn
   */
  export type ShiftAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftAssignments.
     */
    data: ShiftAssignmentCreateManyInput | ShiftAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftAssignment update
   */
  export type ShiftAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ShiftAssignment to update.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment updateMany
   */
  export type ShiftAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftAssignments.
     */
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ShiftAssignments to update
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to update.
     */
    limit?: number
  }

  /**
   * ShiftAssignment updateManyAndReturn
   */
  export type ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ShiftAssignments.
     */
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ShiftAssignments to update
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftAssignment upsert
   */
  export type ShiftAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftAssignment to update in case it exists.
     */
    where: ShiftAssignmentWhereUniqueInput
    /**
     * In case the ShiftAssignment found by the `where` argument doesn't exist, create a new ShiftAssignment with this data.
     */
    create: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
    /**
     * In case the ShiftAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
  }

  /**
   * ShiftAssignment delete
   */
  export type ShiftAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ShiftAssignment to delete.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment deleteMany
   */
  export type ShiftAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignments to delete
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to delete.
     */
    limit?: number
  }

  /**
   * ShiftAssignment without action
   */
  export type ShiftAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model DailySale
   */

  export type AggregateDailySale = {
    _count: DailySaleCountAggregateOutputType | null
    _avg: DailySaleAvgAggregateOutputType | null
    _sum: DailySaleSumAggregateOutputType | null
    _min: DailySaleMinAggregateOutputType | null
    _max: DailySaleMaxAggregateOutputType | null
  }

  export type DailySaleAvgAggregateOutputType = {
    quantity: number | null
    amount: number | null
  }

  export type DailySaleSumAggregateOutputType = {
    quantity: number | null
    amount: number | null
  }

  export type DailySaleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pointId: string | null
    directionId: string | null
    saleDate: Date | null
    quantity: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type DailySaleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pointId: string | null
    directionId: string | null
    saleDate: Date | null
    quantity: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type DailySaleCountAggregateOutputType = {
    id: number
    userId: number
    pointId: number
    directionId: number
    saleDate: number
    quantity: number
    amount: number
    createdAt: number
    _all: number
  }


  export type DailySaleAvgAggregateInputType = {
    quantity?: true
    amount?: true
  }

  export type DailySaleSumAggregateInputType = {
    quantity?: true
    amount?: true
  }

  export type DailySaleMinAggregateInputType = {
    id?: true
    userId?: true
    pointId?: true
    directionId?: true
    saleDate?: true
    quantity?: true
    amount?: true
    createdAt?: true
  }

  export type DailySaleMaxAggregateInputType = {
    id?: true
    userId?: true
    pointId?: true
    directionId?: true
    saleDate?: true
    quantity?: true
    amount?: true
    createdAt?: true
  }

  export type DailySaleCountAggregateInputType = {
    id?: true
    userId?: true
    pointId?: true
    directionId?: true
    saleDate?: true
    quantity?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type DailySaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySale to aggregate.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailySales
    **/
    _count?: true | DailySaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailySaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailySaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailySaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailySaleMaxAggregateInputType
  }

  export type GetDailySaleAggregateType<T extends DailySaleAggregateArgs> = {
        [P in keyof T & keyof AggregateDailySale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailySale[P]>
      : GetScalarType<T[P], AggregateDailySale[P]>
  }




  export type DailySaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySaleWhereInput
    orderBy?: DailySaleOrderByWithAggregationInput | DailySaleOrderByWithAggregationInput[]
    by: DailySaleScalarFieldEnum[] | DailySaleScalarFieldEnum
    having?: DailySaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailySaleCountAggregateInputType | true
    _avg?: DailySaleAvgAggregateInputType
    _sum?: DailySaleSumAggregateInputType
    _min?: DailySaleMinAggregateInputType
    _max?: DailySaleMaxAggregateInputType
  }

  export type DailySaleGroupByOutputType = {
    id: string
    userId: string
    pointId: string
    directionId: string
    saleDate: Date
    quantity: number | null
    amount: number | null
    createdAt: Date
    _count: DailySaleCountAggregateOutputType | null
    _avg: DailySaleAvgAggregateOutputType | null
    _sum: DailySaleSumAggregateOutputType | null
    _min: DailySaleMinAggregateOutputType | null
    _max: DailySaleMaxAggregateOutputType | null
  }

  type GetDailySaleGroupByPayload<T extends DailySaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailySaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailySaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailySaleGroupByOutputType[P]>
            : GetScalarType<T[P], DailySaleGroupByOutputType[P]>
        }
      >
    >


  export type DailySaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pointId?: boolean
    directionId?: boolean
    saleDate?: boolean
    quantity?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySale"]>

  export type DailySaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pointId?: boolean
    directionId?: boolean
    saleDate?: boolean
    quantity?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySale"]>

  export type DailySaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pointId?: boolean
    directionId?: boolean
    saleDate?: boolean
    quantity?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySale"]>

  export type DailySaleSelectScalar = {
    id?: boolean
    userId?: boolean
    pointId?: boolean
    directionId?: boolean
    saleDate?: boolean
    quantity?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type DailySaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pointId" | "directionId" | "saleDate" | "quantity" | "amount" | "createdAt", ExtArgs["result"]["dailySale"]>
  export type DailySaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }
  export type DailySaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }
  export type DailySaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }

  export type $DailySalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailySale"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      direction: Prisma.$DirectionPayload<ExtArgs>
      point: Prisma.$PointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pointId: string
      directionId: string
      saleDate: Date
      quantity: number | null
      amount: number | null
      createdAt: Date
    }, ExtArgs["result"]["dailySale"]>
    composites: {}
  }

  type DailySaleGetPayload<S extends boolean | null | undefined | DailySaleDefaultArgs> = $Result.GetResult<Prisma.$DailySalePayload, S>

  type DailySaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailySaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailySaleCountAggregateInputType | true
    }

  export interface DailySaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailySale'], meta: { name: 'DailySale' } }
    /**
     * Find zero or one DailySale that matches the filter.
     * @param {DailySaleFindUniqueArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailySaleFindUniqueArgs>(args: SelectSubset<T, DailySaleFindUniqueArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailySale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailySaleFindUniqueOrThrowArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailySaleFindUniqueOrThrowArgs>(args: SelectSubset<T, DailySaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailySale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleFindFirstArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailySaleFindFirstArgs>(args?: SelectSubset<T, DailySaleFindFirstArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailySale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleFindFirstOrThrowArgs} args - Arguments to find a DailySale
     * @example
     * // Get one DailySale
     * const dailySale = await prisma.dailySale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailySaleFindFirstOrThrowArgs>(args?: SelectSubset<T, DailySaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailySales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailySales
     * const dailySales = await prisma.dailySale.findMany()
     * 
     * // Get first 10 DailySales
     * const dailySales = await prisma.dailySale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailySaleWithIdOnly = await prisma.dailySale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailySaleFindManyArgs>(args?: SelectSubset<T, DailySaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailySale.
     * @param {DailySaleCreateArgs} args - Arguments to create a DailySale.
     * @example
     * // Create one DailySale
     * const DailySale = await prisma.dailySale.create({
     *   data: {
     *     // ... data to create a DailySale
     *   }
     * })
     * 
     */
    create<T extends DailySaleCreateArgs>(args: SelectSubset<T, DailySaleCreateArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailySales.
     * @param {DailySaleCreateManyArgs} args - Arguments to create many DailySales.
     * @example
     * // Create many DailySales
     * const dailySale = await prisma.dailySale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailySaleCreateManyArgs>(args?: SelectSubset<T, DailySaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailySales and returns the data saved in the database.
     * @param {DailySaleCreateManyAndReturnArgs} args - Arguments to create many DailySales.
     * @example
     * // Create many DailySales
     * const dailySale = await prisma.dailySale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailySales and only return the `id`
     * const dailySaleWithIdOnly = await prisma.dailySale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailySaleCreateManyAndReturnArgs>(args?: SelectSubset<T, DailySaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailySale.
     * @param {DailySaleDeleteArgs} args - Arguments to delete one DailySale.
     * @example
     * // Delete one DailySale
     * const DailySale = await prisma.dailySale.delete({
     *   where: {
     *     // ... filter to delete one DailySale
     *   }
     * })
     * 
     */
    delete<T extends DailySaleDeleteArgs>(args: SelectSubset<T, DailySaleDeleteArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailySale.
     * @param {DailySaleUpdateArgs} args - Arguments to update one DailySale.
     * @example
     * // Update one DailySale
     * const dailySale = await prisma.dailySale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailySaleUpdateArgs>(args: SelectSubset<T, DailySaleUpdateArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailySales.
     * @param {DailySaleDeleteManyArgs} args - Arguments to filter DailySales to delete.
     * @example
     * // Delete a few DailySales
     * const { count } = await prisma.dailySale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailySaleDeleteManyArgs>(args?: SelectSubset<T, DailySaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailySales
     * const dailySale = await prisma.dailySale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailySaleUpdateManyArgs>(args: SelectSubset<T, DailySaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySales and returns the data updated in the database.
     * @param {DailySaleUpdateManyAndReturnArgs} args - Arguments to update many DailySales.
     * @example
     * // Update many DailySales
     * const dailySale = await prisma.dailySale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailySales and only return the `id`
     * const dailySaleWithIdOnly = await prisma.dailySale.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailySaleUpdateManyAndReturnArgs>(args: SelectSubset<T, DailySaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailySale.
     * @param {DailySaleUpsertArgs} args - Arguments to update or create a DailySale.
     * @example
     * // Update or create a DailySale
     * const dailySale = await prisma.dailySale.upsert({
     *   create: {
     *     // ... data to create a DailySale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailySale we want to update
     *   }
     * })
     */
    upsert<T extends DailySaleUpsertArgs>(args: SelectSubset<T, DailySaleUpsertArgs<ExtArgs>>): Prisma__DailySaleClient<$Result.GetResult<Prisma.$DailySalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailySales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleCountArgs} args - Arguments to filter DailySales to count.
     * @example
     * // Count the number of DailySales
     * const count = await prisma.dailySale.count({
     *   where: {
     *     // ... the filter for the DailySales we want to count
     *   }
     * })
    **/
    count<T extends DailySaleCountArgs>(
      args?: Subset<T, DailySaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailySaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailySale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailySaleAggregateArgs>(args: Subset<T, DailySaleAggregateArgs>): Prisma.PrismaPromise<GetDailySaleAggregateType<T>>

    /**
     * Group by DailySale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySaleGroupByArgs} args - Group by arguments.
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
      T extends DailySaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailySaleGroupByArgs['orderBy'] }
        : { orderBy?: DailySaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailySaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailySaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailySale model
   */
  readonly fields: DailySaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailySale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailySaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direction<T extends DirectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectionDefaultArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    point<T extends PointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PointDefaultArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailySale model
   */
  interface DailySaleFieldRefs {
    readonly id: FieldRef<"DailySale", 'String'>
    readonly userId: FieldRef<"DailySale", 'String'>
    readonly pointId: FieldRef<"DailySale", 'String'>
    readonly directionId: FieldRef<"DailySale", 'String'>
    readonly saleDate: FieldRef<"DailySale", 'DateTime'>
    readonly quantity: FieldRef<"DailySale", 'Int'>
    readonly amount: FieldRef<"DailySale", 'Float'>
    readonly createdAt: FieldRef<"DailySale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailySale findUnique
   */
  export type DailySaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale findUniqueOrThrow
   */
  export type DailySaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale findFirst
   */
  export type DailySaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySales.
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySales.
     */
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * DailySale findFirstOrThrow
   */
  export type DailySaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySale to fetch.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySales.
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySales.
     */
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * DailySale findMany
   */
  export type DailySaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter, which DailySales to fetch.
     */
    where?: DailySaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySales to fetch.
     */
    orderBy?: DailySaleOrderByWithRelationInput | DailySaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailySales.
     */
    cursor?: DailySaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySales.
     */
    skip?: number
    distinct?: DailySaleScalarFieldEnum | DailySaleScalarFieldEnum[]
  }

  /**
   * DailySale create
   */
  export type DailySaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * The data needed to create a DailySale.
     */
    data: XOR<DailySaleCreateInput, DailySaleUncheckedCreateInput>
  }

  /**
   * DailySale createMany
   */
  export type DailySaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailySales.
     */
    data: DailySaleCreateManyInput | DailySaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailySale createManyAndReturn
   */
  export type DailySaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * The data used to create many DailySales.
     */
    data: DailySaleCreateManyInput | DailySaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailySale update
   */
  export type DailySaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * The data needed to update a DailySale.
     */
    data: XOR<DailySaleUpdateInput, DailySaleUncheckedUpdateInput>
    /**
     * Choose, which DailySale to update.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale updateMany
   */
  export type DailySaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailySales.
     */
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyInput>
    /**
     * Filter which DailySales to update
     */
    where?: DailySaleWhereInput
    /**
     * Limit how many DailySales to update.
     */
    limit?: number
  }

  /**
   * DailySale updateManyAndReturn
   */
  export type DailySaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * The data used to update DailySales.
     */
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyInput>
    /**
     * Filter which DailySales to update
     */
    where?: DailySaleWhereInput
    /**
     * Limit how many DailySales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailySale upsert
   */
  export type DailySaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * The filter to search for the DailySale to update in case it exists.
     */
    where: DailySaleWhereUniqueInput
    /**
     * In case the DailySale found by the `where` argument doesn't exist, create a new DailySale with this data.
     */
    create: XOR<DailySaleCreateInput, DailySaleUncheckedCreateInput>
    /**
     * In case the DailySale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailySaleUpdateInput, DailySaleUncheckedUpdateInput>
  }

  /**
   * DailySale delete
   */
  export type DailySaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
    /**
     * Filter which DailySale to delete.
     */
    where: DailySaleWhereUniqueInput
  }

  /**
   * DailySale deleteMany
   */
  export type DailySaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySales to delete
     */
    where?: DailySaleWhereInput
    /**
     * Limit how many DailySales to delete.
     */
    limit?: number
  }

  /**
   * DailySale without action
   */
  export type DailySaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySale
     */
    select?: DailySaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailySale
     */
    omit?: DailySaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySaleInclude<ExtArgs> | null
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


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PointScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pointId: 'pointId',
    penaltyCount: 'penaltyCount'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DirectionScalarFieldEnum: {
    id: 'id',
    key: 'key',
    title: 'title',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectionScalarFieldEnum = (typeof DirectionScalarFieldEnum)[keyof typeof DirectionScalarFieldEnum]


  export const PointPlanScalarFieldEnum: {
    id: 'id',
    pointId: 'pointId',
    directionId: 'directionId',
    monthStart: 'monthStart',
    target: 'target',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PointPlanScalarFieldEnum = (typeof PointPlanScalarFieldEnum)[keyof typeof PointPlanScalarFieldEnum]


  export const EmployeePlanScalarFieldEnum: {
    id: 'id',
    pointId: 'pointId',
    employeeId: 'employeeId',
    monthStart: 'monthStart',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeePlanScalarFieldEnum = (typeof EmployeePlanScalarFieldEnum)[keyof typeof EmployeePlanScalarFieldEnum]


  export const PersonalPlanGoalScalarFieldEnum: {
    id: 'id',
    employeePlanId: 'employeePlanId',
    directionId: 'directionId',
    target: 'target',
    isPriority: 'isPriority'
  };

  export type PersonalPlanGoalScalarFieldEnum = (typeof PersonalPlanGoalScalarFieldEnum)[keyof typeof PersonalPlanGoalScalarFieldEnum]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    pointId: 'pointId',
    workDate: 'workDate',
    openById: 'openById',
    closeById: 'closeById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const ShiftAssignmentScalarFieldEnum: {
    id: 'id',
    shiftId: 'shiftId',
    userId: 'userId',
    hours: 'hours',
    isOpen: 'isOpen',
    isClose: 'isClose'
  };

  export type ShiftAssignmentScalarFieldEnum = (typeof ShiftAssignmentScalarFieldEnum)[keyof typeof ShiftAssignmentScalarFieldEnum]


  export const DailySaleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pointId: 'pointId',
    directionId: 'directionId',
    saleDate: 'saleDate',
    quantity: 'quantity',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type DailySaleScalarFieldEnum = (typeof DailySaleScalarFieldEnum)[keyof typeof DailySaleScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MetricUnit'
   */
  export type EnumMetricUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricUnit'>
    


  /**
   * Reference to a field of type 'MetricUnit[]'
   */
  export type ListEnumMetricUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricUnit[]'>
    


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


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: StringFilter<"Point"> | string
    code?: StringFilter<"Point"> | string
    name?: StringFilter<"Point"> | string
    address?: StringFilter<"Point"> | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    updatedAt?: DateTimeFilter<"Point"> | Date | string
    users?: UserListRelationFilter
    shifts?: ShiftListRelationFilter
    pointPlans?: PointPlanListRelationFilter
    employeePlan?: EmployeePlanListRelationFilter
    sales?: DailySaleListRelationFilter
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    shifts?: ShiftOrderByRelationAggregateInput
    pointPlans?: PointPlanOrderByRelationAggregateInput
    employeePlan?: EmployeePlanOrderByRelationAggregateInput
    sales?: DailySaleOrderByRelationAggregateInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    name?: StringFilter<"Point"> | string
    address?: StringFilter<"Point"> | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    updatedAt?: DateTimeFilter<"Point"> | Date | string
    users?: UserListRelationFilter
    shifts?: ShiftListRelationFilter
    pointPlans?: PointPlanListRelationFilter
    employeePlan?: EmployeePlanListRelationFilter
    sales?: DailySaleListRelationFilter
  }, "id" | "code">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Point"> | string
    code?: StringWithAggregatesFilter<"Point"> | string
    name?: StringWithAggregatesFilter<"Point"> | string
    address?: StringWithAggregatesFilter<"Point"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    code?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pointId?: StringNullableFilter<"User"> | string | null
    penaltyCount?: IntFilter<"User"> | number
    point?: XOR<PointNullableScalarRelationFilter, PointWhereInput> | null
    openedShifts?: ShiftListRelationFilter
    closedShifts?: ShiftListRelationFilter
    assignments?: ShiftAssignmentListRelationFilter
    sales?: DailySaleListRelationFilter
    employeePlans?: EmployeePlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pointId?: SortOrderInput | SortOrder
    penaltyCount?: SortOrder
    point?: PointOrderByWithRelationInput
    openedShifts?: ShiftOrderByRelationAggregateInput
    closedShifts?: ShiftOrderByRelationAggregateInput
    assignments?: ShiftAssignmentOrderByRelationAggregateInput
    sales?: DailySaleOrderByRelationAggregateInput
    employeePlans?: EmployeePlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pointId?: StringNullableFilter<"User"> | string | null
    penaltyCount?: IntFilter<"User"> | number
    point?: XOR<PointNullableScalarRelationFilter, PointWhereInput> | null
    openedShifts?: ShiftListRelationFilter
    closedShifts?: ShiftListRelationFilter
    assignments?: ShiftAssignmentListRelationFilter
    sales?: DailySaleListRelationFilter
    employeePlans?: EmployeePlanListRelationFilter
  }, "id" | "code">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pointId?: SortOrderInput | SortOrder
    penaltyCount?: SortOrder
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
    code?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    pointId?: StringNullableWithAggregatesFilter<"User"> | string | null
    penaltyCount?: IntWithAggregatesFilter<"User"> | number
  }

  export type DirectionWhereInput = {
    AND?: DirectionWhereInput | DirectionWhereInput[]
    OR?: DirectionWhereInput[]
    NOT?: DirectionWhereInput | DirectionWhereInput[]
    id?: StringFilter<"Direction"> | string
    key?: StringFilter<"Direction"> | string
    title?: StringFilter<"Direction"> | string
    unit?: EnumMetricUnitFilter<"Direction"> | $Enums.MetricUnit
    createdAt?: DateTimeFilter<"Direction"> | Date | string
    updatedAt?: DateTimeFilter<"Direction"> | Date | string
    pointPlans?: PointPlanListRelationFilter
    personalGoals?: PersonalPlanGoalListRelationFilter
    sales?: DailySaleListRelationFilter
  }

  export type DirectionOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pointPlans?: PointPlanOrderByRelationAggregateInput
    personalGoals?: PersonalPlanGoalOrderByRelationAggregateInput
    sales?: DailySaleOrderByRelationAggregateInput
  }

  export type DirectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: DirectionWhereInput | DirectionWhereInput[]
    OR?: DirectionWhereInput[]
    NOT?: DirectionWhereInput | DirectionWhereInput[]
    title?: StringFilter<"Direction"> | string
    unit?: EnumMetricUnitFilter<"Direction"> | $Enums.MetricUnit
    createdAt?: DateTimeFilter<"Direction"> | Date | string
    updatedAt?: DateTimeFilter<"Direction"> | Date | string
    pointPlans?: PointPlanListRelationFilter
    personalGoals?: PersonalPlanGoalListRelationFilter
    sales?: DailySaleListRelationFilter
  }, "id" | "key">

  export type DirectionOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectionCountOrderByAggregateInput
    _max?: DirectionMaxOrderByAggregateInput
    _min?: DirectionMinOrderByAggregateInput
  }

  export type DirectionScalarWhereWithAggregatesInput = {
    AND?: DirectionScalarWhereWithAggregatesInput | DirectionScalarWhereWithAggregatesInput[]
    OR?: DirectionScalarWhereWithAggregatesInput[]
    NOT?: DirectionScalarWhereWithAggregatesInput | DirectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Direction"> | string
    key?: StringWithAggregatesFilter<"Direction"> | string
    title?: StringWithAggregatesFilter<"Direction"> | string
    unit?: EnumMetricUnitWithAggregatesFilter<"Direction"> | $Enums.MetricUnit
    createdAt?: DateTimeWithAggregatesFilter<"Direction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Direction"> | Date | string
  }

  export type PointPlanWhereInput = {
    AND?: PointPlanWhereInput | PointPlanWhereInput[]
    OR?: PointPlanWhereInput[]
    NOT?: PointPlanWhereInput | PointPlanWhereInput[]
    id?: StringFilter<"PointPlan"> | string
    pointId?: StringFilter<"PointPlan"> | string
    directionId?: StringFilter<"PointPlan"> | string
    monthStart?: DateTimeFilter<"PointPlan"> | Date | string
    target?: IntFilter<"PointPlan"> | number
    createdAt?: DateTimeFilter<"PointPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PointPlan"> | Date | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
  }

  export type PointPlanOrderByWithRelationInput = {
    id?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    monthStart?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    point?: PointOrderByWithRelationInput
    direction?: DirectionOrderByWithRelationInput
  }

  export type PointPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pointId_directionId_monthStart?: PointPlanPointIdDirectionIdMonthStartCompoundUniqueInput
    AND?: PointPlanWhereInput | PointPlanWhereInput[]
    OR?: PointPlanWhereInput[]
    NOT?: PointPlanWhereInput | PointPlanWhereInput[]
    pointId?: StringFilter<"PointPlan"> | string
    directionId?: StringFilter<"PointPlan"> | string
    monthStart?: DateTimeFilter<"PointPlan"> | Date | string
    target?: IntFilter<"PointPlan"> | number
    createdAt?: DateTimeFilter<"PointPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PointPlan"> | Date | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
  }, "id" | "pointId_directionId_monthStart">

  export type PointPlanOrderByWithAggregationInput = {
    id?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    monthStart?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PointPlanCountOrderByAggregateInput
    _avg?: PointPlanAvgOrderByAggregateInput
    _max?: PointPlanMaxOrderByAggregateInput
    _min?: PointPlanMinOrderByAggregateInput
    _sum?: PointPlanSumOrderByAggregateInput
  }

  export type PointPlanScalarWhereWithAggregatesInput = {
    AND?: PointPlanScalarWhereWithAggregatesInput | PointPlanScalarWhereWithAggregatesInput[]
    OR?: PointPlanScalarWhereWithAggregatesInput[]
    NOT?: PointPlanScalarWhereWithAggregatesInput | PointPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointPlan"> | string
    pointId?: StringWithAggregatesFilter<"PointPlan"> | string
    directionId?: StringWithAggregatesFilter<"PointPlan"> | string
    monthStart?: DateTimeWithAggregatesFilter<"PointPlan"> | Date | string
    target?: IntWithAggregatesFilter<"PointPlan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PointPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PointPlan"> | Date | string
  }

  export type EmployeePlanWhereInput = {
    AND?: EmployeePlanWhereInput | EmployeePlanWhereInput[]
    OR?: EmployeePlanWhereInput[]
    NOT?: EmployeePlanWhereInput | EmployeePlanWhereInput[]
    id?: StringFilter<"EmployeePlan"> | string
    pointId?: StringFilter<"EmployeePlan"> | string
    employeeId?: StringFilter<"EmployeePlan"> | string
    monthStart?: DateTimeFilter<"EmployeePlan"> | Date | string
    createdAt?: DateTimeFilter<"EmployeePlan"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeePlan"> | Date | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    goals?: PersonalPlanGoalListRelationFilter
  }

  export type EmployeePlanOrderByWithRelationInput = {
    id?: SortOrder
    pointId?: SortOrder
    employeeId?: SortOrder
    monthStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    point?: PointOrderByWithRelationInput
    employee?: UserOrderByWithRelationInput
    goals?: PersonalPlanGoalOrderByRelationAggregateInput
  }

  export type EmployeePlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_monthStart?: EmployeePlanEmployeeIdMonthStartCompoundUniqueInput
    AND?: EmployeePlanWhereInput | EmployeePlanWhereInput[]
    OR?: EmployeePlanWhereInput[]
    NOT?: EmployeePlanWhereInput | EmployeePlanWhereInput[]
    pointId?: StringFilter<"EmployeePlan"> | string
    employeeId?: StringFilter<"EmployeePlan"> | string
    monthStart?: DateTimeFilter<"EmployeePlan"> | Date | string
    createdAt?: DateTimeFilter<"EmployeePlan"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeePlan"> | Date | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    goals?: PersonalPlanGoalListRelationFilter
  }, "id" | "employeeId_monthStart">

  export type EmployeePlanOrderByWithAggregationInput = {
    id?: SortOrder
    pointId?: SortOrder
    employeeId?: SortOrder
    monthStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeePlanCountOrderByAggregateInput
    _max?: EmployeePlanMaxOrderByAggregateInput
    _min?: EmployeePlanMinOrderByAggregateInput
  }

  export type EmployeePlanScalarWhereWithAggregatesInput = {
    AND?: EmployeePlanScalarWhereWithAggregatesInput | EmployeePlanScalarWhereWithAggregatesInput[]
    OR?: EmployeePlanScalarWhereWithAggregatesInput[]
    NOT?: EmployeePlanScalarWhereWithAggregatesInput | EmployeePlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeePlan"> | string
    pointId?: StringWithAggregatesFilter<"EmployeePlan"> | string
    employeeId?: StringWithAggregatesFilter<"EmployeePlan"> | string
    monthStart?: DateTimeWithAggregatesFilter<"EmployeePlan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmployeePlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeePlan"> | Date | string
  }

  export type PersonalPlanGoalWhereInput = {
    AND?: PersonalPlanGoalWhereInput | PersonalPlanGoalWhereInput[]
    OR?: PersonalPlanGoalWhereInput[]
    NOT?: PersonalPlanGoalWhereInput | PersonalPlanGoalWhereInput[]
    id?: StringFilter<"PersonalPlanGoal"> | string
    employeePlanId?: StringFilter<"PersonalPlanGoal"> | string
    directionId?: StringFilter<"PersonalPlanGoal"> | string
    target?: IntFilter<"PersonalPlanGoal"> | number
    isPriority?: BoolFilter<"PersonalPlanGoal"> | boolean
    employeePlan?: XOR<EmployeePlanScalarRelationFilter, EmployeePlanWhereInput>
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
  }

  export type PersonalPlanGoalOrderByWithRelationInput = {
    id?: SortOrder
    employeePlanId?: SortOrder
    directionId?: SortOrder
    target?: SortOrder
    isPriority?: SortOrder
    employeePlan?: EmployeePlanOrderByWithRelationInput
    direction?: DirectionOrderByWithRelationInput
  }

  export type PersonalPlanGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeePlanId_directionId?: PersonalPlanGoalEmployeePlanIdDirectionIdCompoundUniqueInput
    AND?: PersonalPlanGoalWhereInput | PersonalPlanGoalWhereInput[]
    OR?: PersonalPlanGoalWhereInput[]
    NOT?: PersonalPlanGoalWhereInput | PersonalPlanGoalWhereInput[]
    employeePlanId?: StringFilter<"PersonalPlanGoal"> | string
    directionId?: StringFilter<"PersonalPlanGoal"> | string
    target?: IntFilter<"PersonalPlanGoal"> | number
    isPriority?: BoolFilter<"PersonalPlanGoal"> | boolean
    employeePlan?: XOR<EmployeePlanScalarRelationFilter, EmployeePlanWhereInput>
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
  }, "id" | "employeePlanId_directionId">

  export type PersonalPlanGoalOrderByWithAggregationInput = {
    id?: SortOrder
    employeePlanId?: SortOrder
    directionId?: SortOrder
    target?: SortOrder
    isPriority?: SortOrder
    _count?: PersonalPlanGoalCountOrderByAggregateInput
    _avg?: PersonalPlanGoalAvgOrderByAggregateInput
    _max?: PersonalPlanGoalMaxOrderByAggregateInput
    _min?: PersonalPlanGoalMinOrderByAggregateInput
    _sum?: PersonalPlanGoalSumOrderByAggregateInput
  }

  export type PersonalPlanGoalScalarWhereWithAggregatesInput = {
    AND?: PersonalPlanGoalScalarWhereWithAggregatesInput | PersonalPlanGoalScalarWhereWithAggregatesInput[]
    OR?: PersonalPlanGoalScalarWhereWithAggregatesInput[]
    NOT?: PersonalPlanGoalScalarWhereWithAggregatesInput | PersonalPlanGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalPlanGoal"> | string
    employeePlanId?: StringWithAggregatesFilter<"PersonalPlanGoal"> | string
    directionId?: StringWithAggregatesFilter<"PersonalPlanGoal"> | string
    target?: IntWithAggregatesFilter<"PersonalPlanGoal"> | number
    isPriority?: BoolWithAggregatesFilter<"PersonalPlanGoal"> | boolean
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: StringFilter<"Shift"> | string
    pointId?: StringFilter<"Shift"> | string
    workDate?: DateTimeFilter<"Shift"> | Date | string
    openById?: StringNullableFilter<"Shift"> | string | null
    closeById?: StringNullableFilter<"Shift"> | string | null
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    openBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    closeBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignments?: ShiftAssignmentListRelationFilter
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    pointId?: SortOrder
    workDate?: SortOrder
    openById?: SortOrderInput | SortOrder
    closeById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    point?: PointOrderByWithRelationInput
    openBy?: UserOrderByWithRelationInput
    closeBy?: UserOrderByWithRelationInput
    assignments?: ShiftAssignmentOrderByRelationAggregateInput
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pointId_workDate?: ShiftPointIdWorkDateCompoundUniqueInput
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    pointId?: StringFilter<"Shift"> | string
    workDate?: DateTimeFilter<"Shift"> | Date | string
    openById?: StringNullableFilter<"Shift"> | string | null
    closeById?: StringNullableFilter<"Shift"> | string | null
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    openBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    closeBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignments?: ShiftAssignmentListRelationFilter
  }, "id" | "pointId_workDate">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    pointId?: SortOrder
    workDate?: SortOrder
    openById?: SortOrderInput | SortOrder
    closeById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shift"> | string
    pointId?: StringWithAggregatesFilter<"Shift"> | string
    workDate?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    openById?: StringNullableWithAggregatesFilter<"Shift"> | string | null
    closeById?: StringNullableWithAggregatesFilter<"Shift"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type ShiftAssignmentWhereInput = {
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    id?: StringFilter<"ShiftAssignment"> | string
    shiftId?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
    hours?: IntFilter<"ShiftAssignment"> | number
    isOpen?: BoolFilter<"ShiftAssignment"> | boolean
    isClose?: BoolFilter<"ShiftAssignment"> | boolean
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShiftAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
    hours?: SortOrder
    isOpen?: SortOrder
    isClose?: SortOrder
    shift?: ShiftOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShiftAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shiftId_userId?: ShiftAssignmentShiftIdUserIdCompoundUniqueInput
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    shiftId?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
    hours?: IntFilter<"ShiftAssignment"> | number
    isOpen?: BoolFilter<"ShiftAssignment"> | boolean
    isClose?: BoolFilter<"ShiftAssignment"> | boolean
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "shiftId_userId">

  export type ShiftAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
    hours?: SortOrder
    isOpen?: SortOrder
    isClose?: SortOrder
    _count?: ShiftAssignmentCountOrderByAggregateInput
    _avg?: ShiftAssignmentAvgOrderByAggregateInput
    _max?: ShiftAssignmentMaxOrderByAggregateInput
    _min?: ShiftAssignmentMinOrderByAggregateInput
    _sum?: ShiftAssignmentSumOrderByAggregateInput
  }

  export type ShiftAssignmentScalarWhereWithAggregatesInput = {
    AND?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    OR?: ShiftAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    shiftId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    userId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    hours?: IntWithAggregatesFilter<"ShiftAssignment"> | number
    isOpen?: BoolWithAggregatesFilter<"ShiftAssignment"> | boolean
    isClose?: BoolWithAggregatesFilter<"ShiftAssignment"> | boolean
  }

  export type DailySaleWhereInput = {
    AND?: DailySaleWhereInput | DailySaleWhereInput[]
    OR?: DailySaleWhereInput[]
    NOT?: DailySaleWhereInput | DailySaleWhereInput[]
    id?: StringFilter<"DailySale"> | string
    userId?: StringFilter<"DailySale"> | string
    pointId?: StringFilter<"DailySale"> | string
    directionId?: StringFilter<"DailySale"> | string
    saleDate?: DateTimeFilter<"DailySale"> | Date | string
    quantity?: IntNullableFilter<"DailySale"> | number | null
    amount?: FloatNullableFilter<"DailySale"> | number | null
    createdAt?: DateTimeFilter<"DailySale"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
  }

  export type DailySaleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    saleDate?: SortOrder
    quantity?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    direction?: DirectionOrderByWithRelationInput
    point?: PointOrderByWithRelationInput
  }

  export type DailySaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailySaleWhereInput | DailySaleWhereInput[]
    OR?: DailySaleWhereInput[]
    NOT?: DailySaleWhereInput | DailySaleWhereInput[]
    userId?: StringFilter<"DailySale"> | string
    pointId?: StringFilter<"DailySale"> | string
    directionId?: StringFilter<"DailySale"> | string
    saleDate?: DateTimeFilter<"DailySale"> | Date | string
    quantity?: IntNullableFilter<"DailySale"> | number | null
    amount?: FloatNullableFilter<"DailySale"> | number | null
    createdAt?: DateTimeFilter<"DailySale"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
  }, "id">

  export type DailySaleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    saleDate?: SortOrder
    quantity?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DailySaleCountOrderByAggregateInput
    _avg?: DailySaleAvgOrderByAggregateInput
    _max?: DailySaleMaxOrderByAggregateInput
    _min?: DailySaleMinOrderByAggregateInput
    _sum?: DailySaleSumOrderByAggregateInput
  }

  export type DailySaleScalarWhereWithAggregatesInput = {
    AND?: DailySaleScalarWhereWithAggregatesInput | DailySaleScalarWhereWithAggregatesInput[]
    OR?: DailySaleScalarWhereWithAggregatesInput[]
    NOT?: DailySaleScalarWhereWithAggregatesInput | DailySaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailySale"> | string
    userId?: StringWithAggregatesFilter<"DailySale"> | string
    pointId?: StringWithAggregatesFilter<"DailySale"> | string
    directionId?: StringWithAggregatesFilter<"DailySale"> | string
    saleDate?: DateTimeWithAggregatesFilter<"DailySale"> | Date | string
    quantity?: IntNullableWithAggregatesFilter<"DailySale"> | number | null
    amount?: FloatNullableWithAggregatesFilter<"DailySale"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DailySale"> | Date | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutPointInput
    shifts?: ShiftCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanCreateNestedManyWithoutPointInput
    sales?: DailySaleCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutPointInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanUncheckedCreateNestedManyWithoutPointInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutPointNestedInput
    shifts?: ShiftUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUpdateManyWithoutPointNestedInput
    sales?: DailySaleUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutPointNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUncheckedUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUncheckedUpdateManyWithoutPointNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutPointNestedInput
  }

  export type PointCreateManyInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    point?: PointCreateNestedOneWithoutUsersInput
    openedShifts?: ShiftCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    sales?: DailySaleCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pointId?: string | null
    penaltyCount?: number
    openedShifts?: ShiftUncheckedCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftUncheckedCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    point?: PointUpdateOneWithoutUsersNestedInput
    openedShifts?: ShiftUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    sales?: DailySaleUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyCount?: IntFieldUpdateOperationsInput | number
    openedShifts?: ShiftUncheckedUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUncheckedUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pointId?: string | null
    penaltyCount?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyCount?: IntFieldUpdateOperationsInput | number
  }

  export type DirectionCreateInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    pointPlans?: PointPlanCreateNestedManyWithoutDirectionInput
    personalGoals?: PersonalPlanGoalCreateNestedManyWithoutDirectionInput
    sales?: DailySaleCreateNestedManyWithoutDirectionInput
  }

  export type DirectionUncheckedCreateInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutDirectionInput
    personalGoals?: PersonalPlanGoalUncheckedCreateNestedManyWithoutDirectionInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutDirectionInput
  }

  export type DirectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointPlans?: PointPlanUpdateManyWithoutDirectionNestedInput
    personalGoals?: PersonalPlanGoalUpdateManyWithoutDirectionNestedInput
    sales?: DailySaleUpdateManyWithoutDirectionNestedInput
  }

  export type DirectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointPlans?: PointPlanUncheckedUpdateManyWithoutDirectionNestedInput
    personalGoals?: PersonalPlanGoalUncheckedUpdateManyWithoutDirectionNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutDirectionNestedInput
  }

  export type DirectionCreateManyInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointPlanCreateInput = {
    id?: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutPointPlansInput
    direction: DirectionCreateNestedOneWithoutPointPlansInput
  }

  export type PointPlanUncheckedCreateInput = {
    id?: string
    pointId: string
    directionId: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutPointPlansNestedInput
    direction?: DirectionUpdateOneRequiredWithoutPointPlansNestedInput
  }

  export type PointPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointPlanCreateManyInput = {
    id?: string
    pointId: string
    directionId: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeePlanCreateInput = {
    id?: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutEmployeePlanInput
    employee: UserCreateNestedOneWithoutEmployeePlansInput
    goals?: PersonalPlanGoalCreateNestedManyWithoutEmployeePlanInput
  }

  export type EmployeePlanUncheckedCreateInput = {
    id?: string
    pointId: string
    employeeId: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: PersonalPlanGoalUncheckedCreateNestedManyWithoutEmployeePlanInput
  }

  export type EmployeePlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutEmployeePlanNestedInput
    employee?: UserUpdateOneRequiredWithoutEmployeePlansNestedInput
    goals?: PersonalPlanGoalUpdateManyWithoutEmployeePlanNestedInput
  }

  export type EmployeePlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: PersonalPlanGoalUncheckedUpdateManyWithoutEmployeePlanNestedInput
  }

  export type EmployeePlanCreateManyInput = {
    id?: string
    pointId: string
    employeeId: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeePlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeePlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalPlanGoalCreateInput = {
    id?: string
    target: number
    isPriority?: boolean
    employeePlan: EmployeePlanCreateNestedOneWithoutGoalsInput
    direction: DirectionCreateNestedOneWithoutPersonalGoalsInput
  }

  export type PersonalPlanGoalUncheckedCreateInput = {
    id?: string
    employeePlanId: string
    directionId: string
    target: number
    isPriority?: boolean
  }

  export type PersonalPlanGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    employeePlan?: EmployeePlanUpdateOneRequiredWithoutGoalsNestedInput
    direction?: DirectionUpdateOneRequiredWithoutPersonalGoalsNestedInput
  }

  export type PersonalPlanGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeePlanId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonalPlanGoalCreateManyInput = {
    id?: string
    employeePlanId: string
    directionId: string
    target: number
    isPriority?: boolean
  }

  export type PersonalPlanGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonalPlanGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeePlanId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftCreateInput = {
    id?: string
    workDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutShiftsInput
    openBy?: UserCreateNestedOneWithoutOpenedShiftsInput
    closeBy?: UserCreateNestedOneWithoutClosedShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateInput = {
    id?: string
    pointId: string
    workDate: Date | string
    openById?: string | null
    closeById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutShiftsNestedInput
    openBy?: UserUpdateOneWithoutOpenedShiftsNestedInput
    closeBy?: UserUpdateOneWithoutClosedShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openById?: NullableStringFieldUpdateOperationsInput | string | null
    closeById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftCreateManyInput = {
    id?: string
    pointId: string
    workDate: Date | string
    openById?: string | null
    closeById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openById?: NullableStringFieldUpdateOperationsInput | string | null
    closeById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftAssignmentCreateInput = {
    id?: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
    shift: ShiftCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type ShiftAssignmentUncheckedCreateInput = {
    id?: string
    shiftId: string
    userId: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
  }

  export type ShiftAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
    shift?: ShiftUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftAssignmentCreateManyInput = {
    id?: string
    shiftId: string
    userId: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
  }

  export type ShiftAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailySaleCreateInput = {
    id?: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    direction: DirectionCreateNestedOneWithoutSalesInput
    point: PointCreateNestedOneWithoutSalesInput
  }

  export type DailySaleUncheckedCreateInput = {
    id?: string
    userId: string
    pointId: string
    directionId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type DailySaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    direction?: DirectionUpdateOneRequiredWithoutSalesNestedInput
    point?: PointUpdateOneRequiredWithoutSalesNestedInput
  }

  export type DailySaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleCreateManyInput = {
    id?: string
    userId: string
    pointId: string
    directionId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type DailySaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ShiftListRelationFilter = {
    every?: ShiftWhereInput
    some?: ShiftWhereInput
    none?: ShiftWhereInput
  }

  export type PointPlanListRelationFilter = {
    every?: PointPlanWhereInput
    some?: PointPlanWhereInput
    none?: PointPlanWhereInput
  }

  export type EmployeePlanListRelationFilter = {
    every?: EmployeePlanWhereInput
    some?: EmployeePlanWhereInput
    none?: EmployeePlanWhereInput
  }

  export type DailySaleListRelationFilter = {
    every?: DailySaleWhereInput
    some?: DailySaleWhereInput
    none?: DailySaleWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeePlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailySaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PointNullableScalarRelationFilter = {
    is?: PointWhereInput | null
    isNot?: PointWhereInput | null
  }

  export type ShiftAssignmentListRelationFilter = {
    every?: ShiftAssignmentWhereInput
    some?: ShiftAssignmentWhereInput
    none?: ShiftAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShiftAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pointId?: SortOrder
    penaltyCount?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    penaltyCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pointId?: SortOrder
    penaltyCount?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pointId?: SortOrder
    penaltyCount?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    penaltyCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumMetricUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricUnit | EnumMetricUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricUnitFilter<$PrismaModel> | $Enums.MetricUnit
  }

  export type PersonalPlanGoalListRelationFilter = {
    every?: PersonalPlanGoalWhereInput
    some?: PersonalPlanGoalWhereInput
    none?: PersonalPlanGoalWhereInput
  }

  export type PersonalPlanGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectionCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectionMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectionMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMetricUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricUnit | EnumMetricUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricUnitWithAggregatesFilter<$PrismaModel> | $Enums.MetricUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricUnitFilter<$PrismaModel>
    _max?: NestedEnumMetricUnitFilter<$PrismaModel>
  }

  export type PointScalarRelationFilter = {
    is?: PointWhereInput
    isNot?: PointWhereInput
  }

  export type DirectionScalarRelationFilter = {
    is?: DirectionWhereInput
    isNot?: DirectionWhereInput
  }

  export type PointPlanPointIdDirectionIdMonthStartCompoundUniqueInput = {
    pointId: string
    directionId: string
    monthStart: Date | string
  }

  export type PointPlanCountOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    monthStart?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointPlanAvgOrderByAggregateInput = {
    target?: SortOrder
  }

  export type PointPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    monthStart?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointPlanMinOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    monthStart?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointPlanSumOrderByAggregateInput = {
    target?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmployeePlanEmployeeIdMonthStartCompoundUniqueInput = {
    employeeId: string
    monthStart: Date | string
  }

  export type EmployeePlanCountOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    employeeId?: SortOrder
    monthStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeePlanMaxOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    employeeId?: SortOrder
    monthStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeePlanMinOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    employeeId?: SortOrder
    monthStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeePlanScalarRelationFilter = {
    is?: EmployeePlanWhereInput
    isNot?: EmployeePlanWhereInput
  }

  export type PersonalPlanGoalEmployeePlanIdDirectionIdCompoundUniqueInput = {
    employeePlanId: string
    directionId: string
  }

  export type PersonalPlanGoalCountOrderByAggregateInput = {
    id?: SortOrder
    employeePlanId?: SortOrder
    directionId?: SortOrder
    target?: SortOrder
    isPriority?: SortOrder
  }

  export type PersonalPlanGoalAvgOrderByAggregateInput = {
    target?: SortOrder
  }

  export type PersonalPlanGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    employeePlanId?: SortOrder
    directionId?: SortOrder
    target?: SortOrder
    isPriority?: SortOrder
  }

  export type PersonalPlanGoalMinOrderByAggregateInput = {
    id?: SortOrder
    employeePlanId?: SortOrder
    directionId?: SortOrder
    target?: SortOrder
    isPriority?: SortOrder
  }

  export type PersonalPlanGoalSumOrderByAggregateInput = {
    target?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShiftPointIdWorkDateCompoundUniqueInput = {
    pointId: string
    workDate: Date | string
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    workDate?: SortOrder
    openById?: SortOrder
    closeById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    workDate?: SortOrder
    openById?: SortOrder
    closeById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    pointId?: SortOrder
    workDate?: SortOrder
    openById?: SortOrder
    closeById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftScalarRelationFilter = {
    is?: ShiftWhereInput
    isNot?: ShiftWhereInput
  }

  export type ShiftAssignmentShiftIdUserIdCompoundUniqueInput = {
    shiftId: string
    userId: string
  }

  export type ShiftAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
    hours?: SortOrder
    isOpen?: SortOrder
    isClose?: SortOrder
  }

  export type ShiftAssignmentAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type ShiftAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
    hours?: SortOrder
    isOpen?: SortOrder
    isClose?: SortOrder
  }

  export type ShiftAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
    hours?: SortOrder
    isOpen?: SortOrder
    isClose?: SortOrder
  }

  export type ShiftAssignmentSumOrderByAggregateInput = {
    hours?: SortOrder
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

  export type DailySaleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    saleDate?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySaleAvgOrderByAggregateInput = {
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type DailySaleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    saleDate?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySaleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pointId?: SortOrder
    directionId?: SortOrder
    saleDate?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySaleSumOrderByAggregateInput = {
    quantity?: SortOrder
    amount?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutPointInput = {
    create?: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput> | UserCreateWithoutPointInput[] | UserUncheckedCreateWithoutPointInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPointInput | UserCreateOrConnectWithoutPointInput[]
    createMany?: UserCreateManyPointInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ShiftCreateNestedManyWithoutPointInput = {
    create?: XOR<ShiftCreateWithoutPointInput, ShiftUncheckedCreateWithoutPointInput> | ShiftCreateWithoutPointInput[] | ShiftUncheckedCreateWithoutPointInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutPointInput | ShiftCreateOrConnectWithoutPointInput[]
    createMany?: ShiftCreateManyPointInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type PointPlanCreateNestedManyWithoutPointInput = {
    create?: XOR<PointPlanCreateWithoutPointInput, PointPlanUncheckedCreateWithoutPointInput> | PointPlanCreateWithoutPointInput[] | PointPlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutPointInput | PointPlanCreateOrConnectWithoutPointInput[]
    createMany?: PointPlanCreateManyPointInputEnvelope
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
  }

  export type EmployeePlanCreateNestedManyWithoutPointInput = {
    create?: XOR<EmployeePlanCreateWithoutPointInput, EmployeePlanUncheckedCreateWithoutPointInput> | EmployeePlanCreateWithoutPointInput[] | EmployeePlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutPointInput | EmployeePlanCreateOrConnectWithoutPointInput[]
    createMany?: EmployeePlanCreateManyPointInputEnvelope
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
  }

  export type DailySaleCreateNestedManyWithoutPointInput = {
    create?: XOR<DailySaleCreateWithoutPointInput, DailySaleUncheckedCreateWithoutPointInput> | DailySaleCreateWithoutPointInput[] | DailySaleUncheckedCreateWithoutPointInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutPointInput | DailySaleCreateOrConnectWithoutPointInput[]
    createMany?: DailySaleCreateManyPointInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput> | UserCreateWithoutPointInput[] | UserUncheckedCreateWithoutPointInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPointInput | UserCreateOrConnectWithoutPointInput[]
    createMany?: UserCreateManyPointInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<ShiftCreateWithoutPointInput, ShiftUncheckedCreateWithoutPointInput> | ShiftCreateWithoutPointInput[] | ShiftUncheckedCreateWithoutPointInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutPointInput | ShiftCreateOrConnectWithoutPointInput[]
    createMany?: ShiftCreateManyPointInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type PointPlanUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<PointPlanCreateWithoutPointInput, PointPlanUncheckedCreateWithoutPointInput> | PointPlanCreateWithoutPointInput[] | PointPlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutPointInput | PointPlanCreateOrConnectWithoutPointInput[]
    createMany?: PointPlanCreateManyPointInputEnvelope
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
  }

  export type EmployeePlanUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<EmployeePlanCreateWithoutPointInput, EmployeePlanUncheckedCreateWithoutPointInput> | EmployeePlanCreateWithoutPointInput[] | EmployeePlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutPointInput | EmployeePlanCreateOrConnectWithoutPointInput[]
    createMany?: EmployeePlanCreateManyPointInputEnvelope
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
  }

  export type DailySaleUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<DailySaleCreateWithoutPointInput, DailySaleUncheckedCreateWithoutPointInput> | DailySaleCreateWithoutPointInput[] | DailySaleUncheckedCreateWithoutPointInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutPointInput | DailySaleCreateOrConnectWithoutPointInput[]
    createMany?: DailySaleCreateManyPointInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPointNestedInput = {
    create?: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput> | UserCreateWithoutPointInput[] | UserUncheckedCreateWithoutPointInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPointInput | UserCreateOrConnectWithoutPointInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPointInput | UserUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: UserCreateManyPointInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPointInput | UserUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPointInput | UserUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShiftUpdateManyWithoutPointNestedInput = {
    create?: XOR<ShiftCreateWithoutPointInput, ShiftUncheckedCreateWithoutPointInput> | ShiftCreateWithoutPointInput[] | ShiftUncheckedCreateWithoutPointInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutPointInput | ShiftCreateOrConnectWithoutPointInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutPointInput | ShiftUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: ShiftCreateManyPointInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutPointInput | ShiftUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutPointInput | ShiftUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type PointPlanUpdateManyWithoutPointNestedInput = {
    create?: XOR<PointPlanCreateWithoutPointInput, PointPlanUncheckedCreateWithoutPointInput> | PointPlanCreateWithoutPointInput[] | PointPlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutPointInput | PointPlanCreateOrConnectWithoutPointInput[]
    upsert?: PointPlanUpsertWithWhereUniqueWithoutPointInput | PointPlanUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: PointPlanCreateManyPointInputEnvelope
    set?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    disconnect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    delete?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    update?: PointPlanUpdateWithWhereUniqueWithoutPointInput | PointPlanUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: PointPlanUpdateManyWithWhereWithoutPointInput | PointPlanUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: PointPlanScalarWhereInput | PointPlanScalarWhereInput[]
  }

  export type EmployeePlanUpdateManyWithoutPointNestedInput = {
    create?: XOR<EmployeePlanCreateWithoutPointInput, EmployeePlanUncheckedCreateWithoutPointInput> | EmployeePlanCreateWithoutPointInput[] | EmployeePlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutPointInput | EmployeePlanCreateOrConnectWithoutPointInput[]
    upsert?: EmployeePlanUpsertWithWhereUniqueWithoutPointInput | EmployeePlanUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: EmployeePlanCreateManyPointInputEnvelope
    set?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    disconnect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    delete?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    update?: EmployeePlanUpdateWithWhereUniqueWithoutPointInput | EmployeePlanUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: EmployeePlanUpdateManyWithWhereWithoutPointInput | EmployeePlanUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: EmployeePlanScalarWhereInput | EmployeePlanScalarWhereInput[]
  }

  export type DailySaleUpdateManyWithoutPointNestedInput = {
    create?: XOR<DailySaleCreateWithoutPointInput, DailySaleUncheckedCreateWithoutPointInput> | DailySaleCreateWithoutPointInput[] | DailySaleUncheckedCreateWithoutPointInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutPointInput | DailySaleCreateOrConnectWithoutPointInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutPointInput | DailySaleUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: DailySaleCreateManyPointInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutPointInput | DailySaleUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutPointInput | DailySaleUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput> | UserCreateWithoutPointInput[] | UserUncheckedCreateWithoutPointInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPointInput | UserCreateOrConnectWithoutPointInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPointInput | UserUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: UserCreateManyPointInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPointInput | UserUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPointInput | UserUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<ShiftCreateWithoutPointInput, ShiftUncheckedCreateWithoutPointInput> | ShiftCreateWithoutPointInput[] | ShiftUncheckedCreateWithoutPointInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutPointInput | ShiftCreateOrConnectWithoutPointInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutPointInput | ShiftUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: ShiftCreateManyPointInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutPointInput | ShiftUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutPointInput | ShiftUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type PointPlanUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<PointPlanCreateWithoutPointInput, PointPlanUncheckedCreateWithoutPointInput> | PointPlanCreateWithoutPointInput[] | PointPlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutPointInput | PointPlanCreateOrConnectWithoutPointInput[]
    upsert?: PointPlanUpsertWithWhereUniqueWithoutPointInput | PointPlanUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: PointPlanCreateManyPointInputEnvelope
    set?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    disconnect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    delete?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    update?: PointPlanUpdateWithWhereUniqueWithoutPointInput | PointPlanUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: PointPlanUpdateManyWithWhereWithoutPointInput | PointPlanUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: PointPlanScalarWhereInput | PointPlanScalarWhereInput[]
  }

  export type EmployeePlanUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<EmployeePlanCreateWithoutPointInput, EmployeePlanUncheckedCreateWithoutPointInput> | EmployeePlanCreateWithoutPointInput[] | EmployeePlanUncheckedCreateWithoutPointInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutPointInput | EmployeePlanCreateOrConnectWithoutPointInput[]
    upsert?: EmployeePlanUpsertWithWhereUniqueWithoutPointInput | EmployeePlanUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: EmployeePlanCreateManyPointInputEnvelope
    set?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    disconnect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    delete?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    update?: EmployeePlanUpdateWithWhereUniqueWithoutPointInput | EmployeePlanUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: EmployeePlanUpdateManyWithWhereWithoutPointInput | EmployeePlanUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: EmployeePlanScalarWhereInput | EmployeePlanScalarWhereInput[]
  }

  export type DailySaleUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<DailySaleCreateWithoutPointInput, DailySaleUncheckedCreateWithoutPointInput> | DailySaleCreateWithoutPointInput[] | DailySaleUncheckedCreateWithoutPointInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutPointInput | DailySaleCreateOrConnectWithoutPointInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutPointInput | DailySaleUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: DailySaleCreateManyPointInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutPointInput | DailySaleUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutPointInput | DailySaleUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type PointCreateNestedOneWithoutUsersInput = {
    create?: XOR<PointCreateWithoutUsersInput, PointUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PointCreateOrConnectWithoutUsersInput
    connect?: PointWhereUniqueInput
  }

  export type ShiftCreateNestedManyWithoutOpenByInput = {
    create?: XOR<ShiftCreateWithoutOpenByInput, ShiftUncheckedCreateWithoutOpenByInput> | ShiftCreateWithoutOpenByInput[] | ShiftUncheckedCreateWithoutOpenByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutOpenByInput | ShiftCreateOrConnectWithoutOpenByInput[]
    createMany?: ShiftCreateManyOpenByInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ShiftCreateNestedManyWithoutCloseByInput = {
    create?: XOR<ShiftCreateWithoutCloseByInput, ShiftUncheckedCreateWithoutCloseByInput> | ShiftCreateWithoutCloseByInput[] | ShiftUncheckedCreateWithoutCloseByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCloseByInput | ShiftCreateOrConnectWithoutCloseByInput[]
    createMany?: ShiftCreateManyCloseByInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ShiftAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type DailySaleCreateNestedManyWithoutUserInput = {
    create?: XOR<DailySaleCreateWithoutUserInput, DailySaleUncheckedCreateWithoutUserInput> | DailySaleCreateWithoutUserInput[] | DailySaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutUserInput | DailySaleCreateOrConnectWithoutUserInput[]
    createMany?: DailySaleCreateManyUserInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type EmployeePlanCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeePlanCreateWithoutEmployeeInput, EmployeePlanUncheckedCreateWithoutEmployeeInput> | EmployeePlanCreateWithoutEmployeeInput[] | EmployeePlanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutEmployeeInput | EmployeePlanCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeePlanCreateManyEmployeeInputEnvelope
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutOpenByInput = {
    create?: XOR<ShiftCreateWithoutOpenByInput, ShiftUncheckedCreateWithoutOpenByInput> | ShiftCreateWithoutOpenByInput[] | ShiftUncheckedCreateWithoutOpenByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutOpenByInput | ShiftCreateOrConnectWithoutOpenByInput[]
    createMany?: ShiftCreateManyOpenByInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutCloseByInput = {
    create?: XOR<ShiftCreateWithoutCloseByInput, ShiftUncheckedCreateWithoutCloseByInput> | ShiftCreateWithoutCloseByInput[] | ShiftUncheckedCreateWithoutCloseByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCloseByInput | ShiftCreateOrConnectWithoutCloseByInput[]
    createMany?: ShiftCreateManyCloseByInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type DailySaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailySaleCreateWithoutUserInput, DailySaleUncheckedCreateWithoutUserInput> | DailySaleCreateWithoutUserInput[] | DailySaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutUserInput | DailySaleCreateOrConnectWithoutUserInput[]
    createMany?: DailySaleCreateManyUserInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type EmployeePlanUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeePlanCreateWithoutEmployeeInput, EmployeePlanUncheckedCreateWithoutEmployeeInput> | EmployeePlanCreateWithoutEmployeeInput[] | EmployeePlanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutEmployeeInput | EmployeePlanCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeePlanCreateManyEmployeeInputEnvelope
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PointUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PointCreateWithoutUsersInput, PointUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PointCreateOrConnectWithoutUsersInput
    upsert?: PointUpsertWithoutUsersInput
    disconnect?: PointWhereInput | boolean
    delete?: PointWhereInput | boolean
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutUsersInput, PointUpdateWithoutUsersInput>, PointUncheckedUpdateWithoutUsersInput>
  }

  export type ShiftUpdateManyWithoutOpenByNestedInput = {
    create?: XOR<ShiftCreateWithoutOpenByInput, ShiftUncheckedCreateWithoutOpenByInput> | ShiftCreateWithoutOpenByInput[] | ShiftUncheckedCreateWithoutOpenByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutOpenByInput | ShiftCreateOrConnectWithoutOpenByInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutOpenByInput | ShiftUpsertWithWhereUniqueWithoutOpenByInput[]
    createMany?: ShiftCreateManyOpenByInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutOpenByInput | ShiftUpdateWithWhereUniqueWithoutOpenByInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutOpenByInput | ShiftUpdateManyWithWhereWithoutOpenByInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ShiftUpdateManyWithoutCloseByNestedInput = {
    create?: XOR<ShiftCreateWithoutCloseByInput, ShiftUncheckedCreateWithoutCloseByInput> | ShiftCreateWithoutCloseByInput[] | ShiftUncheckedCreateWithoutCloseByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCloseByInput | ShiftCreateOrConnectWithoutCloseByInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutCloseByInput | ShiftUpsertWithWhereUniqueWithoutCloseByInput[]
    createMany?: ShiftCreateManyCloseByInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutCloseByInput | ShiftUpdateWithWhereUniqueWithoutCloseByInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutCloseByInput | ShiftUpdateManyWithWhereWithoutCloseByInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ShiftAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput | ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput | ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutUserInput | ShiftAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type DailySaleUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailySaleCreateWithoutUserInput, DailySaleUncheckedCreateWithoutUserInput> | DailySaleCreateWithoutUserInput[] | DailySaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutUserInput | DailySaleCreateOrConnectWithoutUserInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutUserInput | DailySaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailySaleCreateManyUserInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutUserInput | DailySaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutUserInput | DailySaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type EmployeePlanUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeePlanCreateWithoutEmployeeInput, EmployeePlanUncheckedCreateWithoutEmployeeInput> | EmployeePlanCreateWithoutEmployeeInput[] | EmployeePlanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutEmployeeInput | EmployeePlanCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeePlanUpsertWithWhereUniqueWithoutEmployeeInput | EmployeePlanUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeePlanCreateManyEmployeeInputEnvelope
    set?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    disconnect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    delete?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    update?: EmployeePlanUpdateWithWhereUniqueWithoutEmployeeInput | EmployeePlanUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeePlanUpdateManyWithWhereWithoutEmployeeInput | EmployeePlanUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeePlanScalarWhereInput | EmployeePlanScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ShiftUncheckedUpdateManyWithoutOpenByNestedInput = {
    create?: XOR<ShiftCreateWithoutOpenByInput, ShiftUncheckedCreateWithoutOpenByInput> | ShiftCreateWithoutOpenByInput[] | ShiftUncheckedCreateWithoutOpenByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutOpenByInput | ShiftCreateOrConnectWithoutOpenByInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutOpenByInput | ShiftUpsertWithWhereUniqueWithoutOpenByInput[]
    createMany?: ShiftCreateManyOpenByInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutOpenByInput | ShiftUpdateWithWhereUniqueWithoutOpenByInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutOpenByInput | ShiftUpdateManyWithWhereWithoutOpenByInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutCloseByNestedInput = {
    create?: XOR<ShiftCreateWithoutCloseByInput, ShiftUncheckedCreateWithoutCloseByInput> | ShiftCreateWithoutCloseByInput[] | ShiftUncheckedCreateWithoutCloseByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCloseByInput | ShiftCreateOrConnectWithoutCloseByInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutCloseByInput | ShiftUpsertWithWhereUniqueWithoutCloseByInput[]
    createMany?: ShiftCreateManyCloseByInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutCloseByInput | ShiftUpdateWithWhereUniqueWithoutCloseByInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutCloseByInput | ShiftUpdateManyWithWhereWithoutCloseByInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput | ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput | ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutUserInput | ShiftAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type DailySaleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailySaleCreateWithoutUserInput, DailySaleUncheckedCreateWithoutUserInput> | DailySaleCreateWithoutUserInput[] | DailySaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutUserInput | DailySaleCreateOrConnectWithoutUserInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutUserInput | DailySaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailySaleCreateManyUserInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutUserInput | DailySaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutUserInput | DailySaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type EmployeePlanUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeePlanCreateWithoutEmployeeInput, EmployeePlanUncheckedCreateWithoutEmployeeInput> | EmployeePlanCreateWithoutEmployeeInput[] | EmployeePlanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutEmployeeInput | EmployeePlanCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeePlanUpsertWithWhereUniqueWithoutEmployeeInput | EmployeePlanUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeePlanCreateManyEmployeeInputEnvelope
    set?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    disconnect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    delete?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    connect?: EmployeePlanWhereUniqueInput | EmployeePlanWhereUniqueInput[]
    update?: EmployeePlanUpdateWithWhereUniqueWithoutEmployeeInput | EmployeePlanUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeePlanUpdateManyWithWhereWithoutEmployeeInput | EmployeePlanUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeePlanScalarWhereInput | EmployeePlanScalarWhereInput[]
  }

  export type PointPlanCreateNestedManyWithoutDirectionInput = {
    create?: XOR<PointPlanCreateWithoutDirectionInput, PointPlanUncheckedCreateWithoutDirectionInput> | PointPlanCreateWithoutDirectionInput[] | PointPlanUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutDirectionInput | PointPlanCreateOrConnectWithoutDirectionInput[]
    createMany?: PointPlanCreateManyDirectionInputEnvelope
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
  }

  export type PersonalPlanGoalCreateNestedManyWithoutDirectionInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutDirectionInput, PersonalPlanGoalUncheckedCreateWithoutDirectionInput> | PersonalPlanGoalCreateWithoutDirectionInput[] | PersonalPlanGoalUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutDirectionInput | PersonalPlanGoalCreateOrConnectWithoutDirectionInput[]
    createMany?: PersonalPlanGoalCreateManyDirectionInputEnvelope
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
  }

  export type DailySaleCreateNestedManyWithoutDirectionInput = {
    create?: XOR<DailySaleCreateWithoutDirectionInput, DailySaleUncheckedCreateWithoutDirectionInput> | DailySaleCreateWithoutDirectionInput[] | DailySaleUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutDirectionInput | DailySaleCreateOrConnectWithoutDirectionInput[]
    createMany?: DailySaleCreateManyDirectionInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type PointPlanUncheckedCreateNestedManyWithoutDirectionInput = {
    create?: XOR<PointPlanCreateWithoutDirectionInput, PointPlanUncheckedCreateWithoutDirectionInput> | PointPlanCreateWithoutDirectionInput[] | PointPlanUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutDirectionInput | PointPlanCreateOrConnectWithoutDirectionInput[]
    createMany?: PointPlanCreateManyDirectionInputEnvelope
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
  }

  export type PersonalPlanGoalUncheckedCreateNestedManyWithoutDirectionInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutDirectionInput, PersonalPlanGoalUncheckedCreateWithoutDirectionInput> | PersonalPlanGoalCreateWithoutDirectionInput[] | PersonalPlanGoalUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutDirectionInput | PersonalPlanGoalCreateOrConnectWithoutDirectionInput[]
    createMany?: PersonalPlanGoalCreateManyDirectionInputEnvelope
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
  }

  export type DailySaleUncheckedCreateNestedManyWithoutDirectionInput = {
    create?: XOR<DailySaleCreateWithoutDirectionInput, DailySaleUncheckedCreateWithoutDirectionInput> | DailySaleCreateWithoutDirectionInput[] | DailySaleUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutDirectionInput | DailySaleCreateOrConnectWithoutDirectionInput[]
    createMany?: DailySaleCreateManyDirectionInputEnvelope
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
  }

  export type EnumMetricUnitFieldUpdateOperationsInput = {
    set?: $Enums.MetricUnit
  }

  export type PointPlanUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<PointPlanCreateWithoutDirectionInput, PointPlanUncheckedCreateWithoutDirectionInput> | PointPlanCreateWithoutDirectionInput[] | PointPlanUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutDirectionInput | PointPlanCreateOrConnectWithoutDirectionInput[]
    upsert?: PointPlanUpsertWithWhereUniqueWithoutDirectionInput | PointPlanUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: PointPlanCreateManyDirectionInputEnvelope
    set?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    disconnect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    delete?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    update?: PointPlanUpdateWithWhereUniqueWithoutDirectionInput | PointPlanUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: PointPlanUpdateManyWithWhereWithoutDirectionInput | PointPlanUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: PointPlanScalarWhereInput | PointPlanScalarWhereInput[]
  }

  export type PersonalPlanGoalUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutDirectionInput, PersonalPlanGoalUncheckedCreateWithoutDirectionInput> | PersonalPlanGoalCreateWithoutDirectionInput[] | PersonalPlanGoalUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutDirectionInput | PersonalPlanGoalCreateOrConnectWithoutDirectionInput[]
    upsert?: PersonalPlanGoalUpsertWithWhereUniqueWithoutDirectionInput | PersonalPlanGoalUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: PersonalPlanGoalCreateManyDirectionInputEnvelope
    set?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    disconnect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    delete?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    update?: PersonalPlanGoalUpdateWithWhereUniqueWithoutDirectionInput | PersonalPlanGoalUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: PersonalPlanGoalUpdateManyWithWhereWithoutDirectionInput | PersonalPlanGoalUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: PersonalPlanGoalScalarWhereInput | PersonalPlanGoalScalarWhereInput[]
  }

  export type DailySaleUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<DailySaleCreateWithoutDirectionInput, DailySaleUncheckedCreateWithoutDirectionInput> | DailySaleCreateWithoutDirectionInput[] | DailySaleUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutDirectionInput | DailySaleCreateOrConnectWithoutDirectionInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutDirectionInput | DailySaleUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: DailySaleCreateManyDirectionInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutDirectionInput | DailySaleUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutDirectionInput | DailySaleUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type PointPlanUncheckedUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<PointPlanCreateWithoutDirectionInput, PointPlanUncheckedCreateWithoutDirectionInput> | PointPlanCreateWithoutDirectionInput[] | PointPlanUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PointPlanCreateOrConnectWithoutDirectionInput | PointPlanCreateOrConnectWithoutDirectionInput[]
    upsert?: PointPlanUpsertWithWhereUniqueWithoutDirectionInput | PointPlanUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: PointPlanCreateManyDirectionInputEnvelope
    set?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    disconnect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    delete?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    connect?: PointPlanWhereUniqueInput | PointPlanWhereUniqueInput[]
    update?: PointPlanUpdateWithWhereUniqueWithoutDirectionInput | PointPlanUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: PointPlanUpdateManyWithWhereWithoutDirectionInput | PointPlanUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: PointPlanScalarWhereInput | PointPlanScalarWhereInput[]
  }

  export type PersonalPlanGoalUncheckedUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutDirectionInput, PersonalPlanGoalUncheckedCreateWithoutDirectionInput> | PersonalPlanGoalCreateWithoutDirectionInput[] | PersonalPlanGoalUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutDirectionInput | PersonalPlanGoalCreateOrConnectWithoutDirectionInput[]
    upsert?: PersonalPlanGoalUpsertWithWhereUniqueWithoutDirectionInput | PersonalPlanGoalUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: PersonalPlanGoalCreateManyDirectionInputEnvelope
    set?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    disconnect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    delete?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    update?: PersonalPlanGoalUpdateWithWhereUniqueWithoutDirectionInput | PersonalPlanGoalUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: PersonalPlanGoalUpdateManyWithWhereWithoutDirectionInput | PersonalPlanGoalUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: PersonalPlanGoalScalarWhereInput | PersonalPlanGoalScalarWhereInput[]
  }

  export type DailySaleUncheckedUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<DailySaleCreateWithoutDirectionInput, DailySaleUncheckedCreateWithoutDirectionInput> | DailySaleCreateWithoutDirectionInput[] | DailySaleUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: DailySaleCreateOrConnectWithoutDirectionInput | DailySaleCreateOrConnectWithoutDirectionInput[]
    upsert?: DailySaleUpsertWithWhereUniqueWithoutDirectionInput | DailySaleUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: DailySaleCreateManyDirectionInputEnvelope
    set?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    disconnect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    delete?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    connect?: DailySaleWhereUniqueInput | DailySaleWhereUniqueInput[]
    update?: DailySaleUpdateWithWhereUniqueWithoutDirectionInput | DailySaleUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: DailySaleUpdateManyWithWhereWithoutDirectionInput | DailySaleUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
  }

  export type PointCreateNestedOneWithoutPointPlansInput = {
    create?: XOR<PointCreateWithoutPointPlansInput, PointUncheckedCreateWithoutPointPlansInput>
    connectOrCreate?: PointCreateOrConnectWithoutPointPlansInput
    connect?: PointWhereUniqueInput
  }

  export type DirectionCreateNestedOneWithoutPointPlansInput = {
    create?: XOR<DirectionCreateWithoutPointPlansInput, DirectionUncheckedCreateWithoutPointPlansInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutPointPlansInput
    connect?: DirectionWhereUniqueInput
  }

  export type PointUpdateOneRequiredWithoutPointPlansNestedInput = {
    create?: XOR<PointCreateWithoutPointPlansInput, PointUncheckedCreateWithoutPointPlansInput>
    connectOrCreate?: PointCreateOrConnectWithoutPointPlansInput
    upsert?: PointUpsertWithoutPointPlansInput
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutPointPlansInput, PointUpdateWithoutPointPlansInput>, PointUncheckedUpdateWithoutPointPlansInput>
  }

  export type DirectionUpdateOneRequiredWithoutPointPlansNestedInput = {
    create?: XOR<DirectionCreateWithoutPointPlansInput, DirectionUncheckedCreateWithoutPointPlansInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutPointPlansInput
    upsert?: DirectionUpsertWithoutPointPlansInput
    connect?: DirectionWhereUniqueInput
    update?: XOR<XOR<DirectionUpdateToOneWithWhereWithoutPointPlansInput, DirectionUpdateWithoutPointPlansInput>, DirectionUncheckedUpdateWithoutPointPlansInput>
  }

  export type PointCreateNestedOneWithoutEmployeePlanInput = {
    create?: XOR<PointCreateWithoutEmployeePlanInput, PointUncheckedCreateWithoutEmployeePlanInput>
    connectOrCreate?: PointCreateOrConnectWithoutEmployeePlanInput
    connect?: PointWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEmployeePlansInput = {
    create?: XOR<UserCreateWithoutEmployeePlansInput, UserUncheckedCreateWithoutEmployeePlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeePlansInput
    connect?: UserWhereUniqueInput
  }

  export type PersonalPlanGoalCreateNestedManyWithoutEmployeePlanInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput> | PersonalPlanGoalCreateWithoutEmployeePlanInput[] | PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput | PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput[]
    createMany?: PersonalPlanGoalCreateManyEmployeePlanInputEnvelope
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
  }

  export type PersonalPlanGoalUncheckedCreateNestedManyWithoutEmployeePlanInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput> | PersonalPlanGoalCreateWithoutEmployeePlanInput[] | PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput | PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput[]
    createMany?: PersonalPlanGoalCreateManyEmployeePlanInputEnvelope
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
  }

  export type PointUpdateOneRequiredWithoutEmployeePlanNestedInput = {
    create?: XOR<PointCreateWithoutEmployeePlanInput, PointUncheckedCreateWithoutEmployeePlanInput>
    connectOrCreate?: PointCreateOrConnectWithoutEmployeePlanInput
    upsert?: PointUpsertWithoutEmployeePlanInput
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutEmployeePlanInput, PointUpdateWithoutEmployeePlanInput>, PointUncheckedUpdateWithoutEmployeePlanInput>
  }

  export type UserUpdateOneRequiredWithoutEmployeePlansNestedInput = {
    create?: XOR<UserCreateWithoutEmployeePlansInput, UserUncheckedCreateWithoutEmployeePlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeePlansInput
    upsert?: UserUpsertWithoutEmployeePlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeePlansInput, UserUpdateWithoutEmployeePlansInput>, UserUncheckedUpdateWithoutEmployeePlansInput>
  }

  export type PersonalPlanGoalUpdateManyWithoutEmployeePlanNestedInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput> | PersonalPlanGoalCreateWithoutEmployeePlanInput[] | PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput | PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput[]
    upsert?: PersonalPlanGoalUpsertWithWhereUniqueWithoutEmployeePlanInput | PersonalPlanGoalUpsertWithWhereUniqueWithoutEmployeePlanInput[]
    createMany?: PersonalPlanGoalCreateManyEmployeePlanInputEnvelope
    set?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    disconnect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    delete?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    update?: PersonalPlanGoalUpdateWithWhereUniqueWithoutEmployeePlanInput | PersonalPlanGoalUpdateWithWhereUniqueWithoutEmployeePlanInput[]
    updateMany?: PersonalPlanGoalUpdateManyWithWhereWithoutEmployeePlanInput | PersonalPlanGoalUpdateManyWithWhereWithoutEmployeePlanInput[]
    deleteMany?: PersonalPlanGoalScalarWhereInput | PersonalPlanGoalScalarWhereInput[]
  }

  export type PersonalPlanGoalUncheckedUpdateManyWithoutEmployeePlanNestedInput = {
    create?: XOR<PersonalPlanGoalCreateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput> | PersonalPlanGoalCreateWithoutEmployeePlanInput[] | PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput[]
    connectOrCreate?: PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput | PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput[]
    upsert?: PersonalPlanGoalUpsertWithWhereUniqueWithoutEmployeePlanInput | PersonalPlanGoalUpsertWithWhereUniqueWithoutEmployeePlanInput[]
    createMany?: PersonalPlanGoalCreateManyEmployeePlanInputEnvelope
    set?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    disconnect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    delete?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    connect?: PersonalPlanGoalWhereUniqueInput | PersonalPlanGoalWhereUniqueInput[]
    update?: PersonalPlanGoalUpdateWithWhereUniqueWithoutEmployeePlanInput | PersonalPlanGoalUpdateWithWhereUniqueWithoutEmployeePlanInput[]
    updateMany?: PersonalPlanGoalUpdateManyWithWhereWithoutEmployeePlanInput | PersonalPlanGoalUpdateManyWithWhereWithoutEmployeePlanInput[]
    deleteMany?: PersonalPlanGoalScalarWhereInput | PersonalPlanGoalScalarWhereInput[]
  }

  export type EmployeePlanCreateNestedOneWithoutGoalsInput = {
    create?: XOR<EmployeePlanCreateWithoutGoalsInput, EmployeePlanUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutGoalsInput
    connect?: EmployeePlanWhereUniqueInput
  }

  export type DirectionCreateNestedOneWithoutPersonalGoalsInput = {
    create?: XOR<DirectionCreateWithoutPersonalGoalsInput, DirectionUncheckedCreateWithoutPersonalGoalsInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutPersonalGoalsInput
    connect?: DirectionWhereUniqueInput
  }

  export type EmployeePlanUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<EmployeePlanCreateWithoutGoalsInput, EmployeePlanUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: EmployeePlanCreateOrConnectWithoutGoalsInput
    upsert?: EmployeePlanUpsertWithoutGoalsInput
    connect?: EmployeePlanWhereUniqueInput
    update?: XOR<XOR<EmployeePlanUpdateToOneWithWhereWithoutGoalsInput, EmployeePlanUpdateWithoutGoalsInput>, EmployeePlanUncheckedUpdateWithoutGoalsInput>
  }

  export type DirectionUpdateOneRequiredWithoutPersonalGoalsNestedInput = {
    create?: XOR<DirectionCreateWithoutPersonalGoalsInput, DirectionUncheckedCreateWithoutPersonalGoalsInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutPersonalGoalsInput
    upsert?: DirectionUpsertWithoutPersonalGoalsInput
    connect?: DirectionWhereUniqueInput
    update?: XOR<XOR<DirectionUpdateToOneWithWhereWithoutPersonalGoalsInput, DirectionUpdateWithoutPersonalGoalsInput>, DirectionUncheckedUpdateWithoutPersonalGoalsInput>
  }

  export type PointCreateNestedOneWithoutShiftsInput = {
    create?: XOR<PointCreateWithoutShiftsInput, PointUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: PointCreateOrConnectWithoutShiftsInput
    connect?: PointWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOpenedShiftsInput = {
    create?: XOR<UserCreateWithoutOpenedShiftsInput, UserUncheckedCreateWithoutOpenedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpenedShiftsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClosedShiftsInput = {
    create?: XOR<UserCreateWithoutClosedShiftsInput, UserUncheckedCreateWithoutClosedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClosedShiftsInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftAssignmentCreateNestedManyWithoutShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type PointUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<PointCreateWithoutShiftsInput, PointUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: PointCreateOrConnectWithoutShiftsInput
    upsert?: PointUpsertWithoutShiftsInput
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutShiftsInput, PointUpdateWithoutShiftsInput>, PointUncheckedUpdateWithoutShiftsInput>
  }

  export type UserUpdateOneWithoutOpenedShiftsNestedInput = {
    create?: XOR<UserCreateWithoutOpenedShiftsInput, UserUncheckedCreateWithoutOpenedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpenedShiftsInput
    upsert?: UserUpsertWithoutOpenedShiftsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOpenedShiftsInput, UserUpdateWithoutOpenedShiftsInput>, UserUncheckedUpdateWithoutOpenedShiftsInput>
  }

  export type UserUpdateOneWithoutClosedShiftsNestedInput = {
    create?: XOR<UserCreateWithoutClosedShiftsInput, UserUncheckedCreateWithoutClosedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClosedShiftsInput
    upsert?: UserUpsertWithoutClosedShiftsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClosedShiftsInput, UserUpdateWithoutClosedShiftsInput>, UserUncheckedUpdateWithoutClosedShiftsInput>
  }

  export type ShiftAssignmentUpdateManyWithoutShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type ShiftCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignmentsInput
    connect?: ShiftWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignmentsInput
    upsert?: ShiftUpsertWithoutAssignmentsInput
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutAssignmentsInput, ShiftUpdateWithoutAssignmentsInput>, ShiftUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type DirectionCreateNestedOneWithoutSalesInput = {
    create?: XOR<DirectionCreateWithoutSalesInput, DirectionUncheckedCreateWithoutSalesInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutSalesInput
    connect?: DirectionWhereUniqueInput
  }

  export type PointCreateNestedOneWithoutSalesInput = {
    create?: XOR<PointCreateWithoutSalesInput, PointUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PointCreateOrConnectWithoutSalesInput
    connect?: PointWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type DirectionUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<DirectionCreateWithoutSalesInput, DirectionUncheckedCreateWithoutSalesInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutSalesInput
    upsert?: DirectionUpsertWithoutSalesInput
    connect?: DirectionWhereUniqueInput
    update?: XOR<XOR<DirectionUpdateToOneWithWhereWithoutSalesInput, DirectionUpdateWithoutSalesInput>, DirectionUncheckedUpdateWithoutSalesInput>
  }

  export type PointUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<PointCreateWithoutSalesInput, PointUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PointCreateOrConnectWithoutSalesInput
    upsert?: PointUpsertWithoutSalesInput
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutSalesInput, PointUpdateWithoutSalesInput>, PointUncheckedUpdateWithoutSalesInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumMetricUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricUnit | EnumMetricUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricUnitFilter<$PrismaModel> | $Enums.MetricUnit
  }

  export type NestedEnumMetricUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricUnit | EnumMetricUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricUnit[] | ListEnumMetricUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricUnitWithAggregatesFilter<$PrismaModel> | $Enums.MetricUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricUnitFilter<$PrismaModel>
    _max?: NestedEnumMetricUnitFilter<$PrismaModel>
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

  export type UserCreateWithoutPointInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    openedShifts?: ShiftCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    sales?: DailySaleCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutPointInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    openedShifts?: ShiftUncheckedCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftUncheckedCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutPointInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput>
  }

  export type UserCreateManyPointInputEnvelope = {
    data: UserCreateManyPointInput | UserCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type ShiftCreateWithoutPointInput = {
    id?: string
    workDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    openBy?: UserCreateNestedOneWithoutOpenedShiftsInput
    closeBy?: UserCreateNestedOneWithoutClosedShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutPointInput = {
    id?: string
    workDate: Date | string
    openById?: string | null
    closeById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutPointInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutPointInput, ShiftUncheckedCreateWithoutPointInput>
  }

  export type ShiftCreateManyPointInputEnvelope = {
    data: ShiftCreateManyPointInput | ShiftCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type PointPlanCreateWithoutPointInput = {
    id?: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    direction: DirectionCreateNestedOneWithoutPointPlansInput
  }

  export type PointPlanUncheckedCreateWithoutPointInput = {
    id?: string
    directionId: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointPlanCreateOrConnectWithoutPointInput = {
    where: PointPlanWhereUniqueInput
    create: XOR<PointPlanCreateWithoutPointInput, PointPlanUncheckedCreateWithoutPointInput>
  }

  export type PointPlanCreateManyPointInputEnvelope = {
    data: PointPlanCreateManyPointInput | PointPlanCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type EmployeePlanCreateWithoutPointInput = {
    id?: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: UserCreateNestedOneWithoutEmployeePlansInput
    goals?: PersonalPlanGoalCreateNestedManyWithoutEmployeePlanInput
  }

  export type EmployeePlanUncheckedCreateWithoutPointInput = {
    id?: string
    employeeId: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: PersonalPlanGoalUncheckedCreateNestedManyWithoutEmployeePlanInput
  }

  export type EmployeePlanCreateOrConnectWithoutPointInput = {
    where: EmployeePlanWhereUniqueInput
    create: XOR<EmployeePlanCreateWithoutPointInput, EmployeePlanUncheckedCreateWithoutPointInput>
  }

  export type EmployeePlanCreateManyPointInputEnvelope = {
    data: EmployeePlanCreateManyPointInput | EmployeePlanCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type DailySaleCreateWithoutPointInput = {
    id?: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    direction: DirectionCreateNestedOneWithoutSalesInput
  }

  export type DailySaleUncheckedCreateWithoutPointInput = {
    id?: string
    userId: string
    directionId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type DailySaleCreateOrConnectWithoutPointInput = {
    where: DailySaleWhereUniqueInput
    create: XOR<DailySaleCreateWithoutPointInput, DailySaleUncheckedCreateWithoutPointInput>
  }

  export type DailySaleCreateManyPointInputEnvelope = {
    data: DailySaleCreateManyPointInput | DailySaleCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPointInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPointInput, UserUncheckedUpdateWithoutPointInput>
    create: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPointInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPointInput, UserUncheckedUpdateWithoutPointInput>
  }

  export type UserUpdateManyWithWhereWithoutPointInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPointInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    code?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pointId?: StringNullableFilter<"User"> | string | null
    penaltyCount?: IntFilter<"User"> | number
  }

  export type ShiftUpsertWithWhereUniqueWithoutPointInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutPointInput, ShiftUncheckedUpdateWithoutPointInput>
    create: XOR<ShiftCreateWithoutPointInput, ShiftUncheckedCreateWithoutPointInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutPointInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutPointInput, ShiftUncheckedUpdateWithoutPointInput>
  }

  export type ShiftUpdateManyWithWhereWithoutPointInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutPointInput>
  }

  export type ShiftScalarWhereInput = {
    AND?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    OR?: ShiftScalarWhereInput[]
    NOT?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    id?: StringFilter<"Shift"> | string
    pointId?: StringFilter<"Shift"> | string
    workDate?: DateTimeFilter<"Shift"> | Date | string
    openById?: StringNullableFilter<"Shift"> | string | null
    closeById?: StringNullableFilter<"Shift"> | string | null
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }

  export type PointPlanUpsertWithWhereUniqueWithoutPointInput = {
    where: PointPlanWhereUniqueInput
    update: XOR<PointPlanUpdateWithoutPointInput, PointPlanUncheckedUpdateWithoutPointInput>
    create: XOR<PointPlanCreateWithoutPointInput, PointPlanUncheckedCreateWithoutPointInput>
  }

  export type PointPlanUpdateWithWhereUniqueWithoutPointInput = {
    where: PointPlanWhereUniqueInput
    data: XOR<PointPlanUpdateWithoutPointInput, PointPlanUncheckedUpdateWithoutPointInput>
  }

  export type PointPlanUpdateManyWithWhereWithoutPointInput = {
    where: PointPlanScalarWhereInput
    data: XOR<PointPlanUpdateManyMutationInput, PointPlanUncheckedUpdateManyWithoutPointInput>
  }

  export type PointPlanScalarWhereInput = {
    AND?: PointPlanScalarWhereInput | PointPlanScalarWhereInput[]
    OR?: PointPlanScalarWhereInput[]
    NOT?: PointPlanScalarWhereInput | PointPlanScalarWhereInput[]
    id?: StringFilter<"PointPlan"> | string
    pointId?: StringFilter<"PointPlan"> | string
    directionId?: StringFilter<"PointPlan"> | string
    monthStart?: DateTimeFilter<"PointPlan"> | Date | string
    target?: IntFilter<"PointPlan"> | number
    createdAt?: DateTimeFilter<"PointPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PointPlan"> | Date | string
  }

  export type EmployeePlanUpsertWithWhereUniqueWithoutPointInput = {
    where: EmployeePlanWhereUniqueInput
    update: XOR<EmployeePlanUpdateWithoutPointInput, EmployeePlanUncheckedUpdateWithoutPointInput>
    create: XOR<EmployeePlanCreateWithoutPointInput, EmployeePlanUncheckedCreateWithoutPointInput>
  }

  export type EmployeePlanUpdateWithWhereUniqueWithoutPointInput = {
    where: EmployeePlanWhereUniqueInput
    data: XOR<EmployeePlanUpdateWithoutPointInput, EmployeePlanUncheckedUpdateWithoutPointInput>
  }

  export type EmployeePlanUpdateManyWithWhereWithoutPointInput = {
    where: EmployeePlanScalarWhereInput
    data: XOR<EmployeePlanUpdateManyMutationInput, EmployeePlanUncheckedUpdateManyWithoutPointInput>
  }

  export type EmployeePlanScalarWhereInput = {
    AND?: EmployeePlanScalarWhereInput | EmployeePlanScalarWhereInput[]
    OR?: EmployeePlanScalarWhereInput[]
    NOT?: EmployeePlanScalarWhereInput | EmployeePlanScalarWhereInput[]
    id?: StringFilter<"EmployeePlan"> | string
    pointId?: StringFilter<"EmployeePlan"> | string
    employeeId?: StringFilter<"EmployeePlan"> | string
    monthStart?: DateTimeFilter<"EmployeePlan"> | Date | string
    createdAt?: DateTimeFilter<"EmployeePlan"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeePlan"> | Date | string
  }

  export type DailySaleUpsertWithWhereUniqueWithoutPointInput = {
    where: DailySaleWhereUniqueInput
    update: XOR<DailySaleUpdateWithoutPointInput, DailySaleUncheckedUpdateWithoutPointInput>
    create: XOR<DailySaleCreateWithoutPointInput, DailySaleUncheckedCreateWithoutPointInput>
  }

  export type DailySaleUpdateWithWhereUniqueWithoutPointInput = {
    where: DailySaleWhereUniqueInput
    data: XOR<DailySaleUpdateWithoutPointInput, DailySaleUncheckedUpdateWithoutPointInput>
  }

  export type DailySaleUpdateManyWithWhereWithoutPointInput = {
    where: DailySaleScalarWhereInput
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyWithoutPointInput>
  }

  export type DailySaleScalarWhereInput = {
    AND?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
    OR?: DailySaleScalarWhereInput[]
    NOT?: DailySaleScalarWhereInput | DailySaleScalarWhereInput[]
    id?: StringFilter<"DailySale"> | string
    userId?: StringFilter<"DailySale"> | string
    pointId?: StringFilter<"DailySale"> | string
    directionId?: StringFilter<"DailySale"> | string
    saleDate?: DateTimeFilter<"DailySale"> | Date | string
    quantity?: IntNullableFilter<"DailySale"> | number | null
    amount?: FloatNullableFilter<"DailySale"> | number | null
    createdAt?: DateTimeFilter<"DailySale"> | Date | string
  }

  export type PointCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: ShiftCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanCreateNestedManyWithoutPointInput
    sales?: DailySaleCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: ShiftUncheckedCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanUncheckedCreateNestedManyWithoutPointInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutUsersInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutUsersInput, PointUncheckedCreateWithoutUsersInput>
  }

  export type ShiftCreateWithoutOpenByInput = {
    id?: string
    workDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutShiftsInput
    closeBy?: UserCreateNestedOneWithoutClosedShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutOpenByInput = {
    id?: string
    pointId: string
    workDate: Date | string
    closeById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutOpenByInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutOpenByInput, ShiftUncheckedCreateWithoutOpenByInput>
  }

  export type ShiftCreateManyOpenByInputEnvelope = {
    data: ShiftCreateManyOpenByInput | ShiftCreateManyOpenByInput[]
    skipDuplicates?: boolean
  }

  export type ShiftCreateWithoutCloseByInput = {
    id?: string
    workDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutShiftsInput
    openBy?: UserCreateNestedOneWithoutOpenedShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutCloseByInput = {
    id?: string
    pointId: string
    workDate: Date | string
    openById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutCloseByInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutCloseByInput, ShiftUncheckedCreateWithoutCloseByInput>
  }

  export type ShiftCreateManyCloseByInputEnvelope = {
    data: ShiftCreateManyCloseByInput | ShiftCreateManyCloseByInput[]
    skipDuplicates?: boolean
  }

  export type ShiftAssignmentCreateWithoutUserInput = {
    id?: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
    shift: ShiftCreateNestedOneWithoutAssignmentsInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    shiftId: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
  }

  export type ShiftAssignmentCreateOrConnectWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ShiftAssignmentCreateManyUserInputEnvelope = {
    data: ShiftAssignmentCreateManyUserInput | ShiftAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailySaleCreateWithoutUserInput = {
    id?: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
    direction: DirectionCreateNestedOneWithoutSalesInput
    point: PointCreateNestedOneWithoutSalesInput
  }

  export type DailySaleUncheckedCreateWithoutUserInput = {
    id?: string
    pointId: string
    directionId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type DailySaleCreateOrConnectWithoutUserInput = {
    where: DailySaleWhereUniqueInput
    create: XOR<DailySaleCreateWithoutUserInput, DailySaleUncheckedCreateWithoutUserInput>
  }

  export type DailySaleCreateManyUserInputEnvelope = {
    data: DailySaleCreateManyUserInput | DailySaleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeePlanCreateWithoutEmployeeInput = {
    id?: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutEmployeePlanInput
    goals?: PersonalPlanGoalCreateNestedManyWithoutEmployeePlanInput
  }

  export type EmployeePlanUncheckedCreateWithoutEmployeeInput = {
    id?: string
    pointId: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: PersonalPlanGoalUncheckedCreateNestedManyWithoutEmployeePlanInput
  }

  export type EmployeePlanCreateOrConnectWithoutEmployeeInput = {
    where: EmployeePlanWhereUniqueInput
    create: XOR<EmployeePlanCreateWithoutEmployeeInput, EmployeePlanUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeePlanCreateManyEmployeeInputEnvelope = {
    data: EmployeePlanCreateManyEmployeeInput | EmployeePlanCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PointUpsertWithoutUsersInput = {
    update: XOR<PointUpdateWithoutUsersInput, PointUncheckedUpdateWithoutUsersInput>
    create: XOR<PointCreateWithoutUsersInput, PointUncheckedCreateWithoutUsersInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutUsersInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutUsersInput, PointUncheckedUpdateWithoutUsersInput>
  }

  export type PointUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUpdateManyWithoutPointNestedInput
    sales?: DailySaleUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUncheckedUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUncheckedUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUncheckedUpdateManyWithoutPointNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutPointNestedInput
  }

  export type ShiftUpsertWithWhereUniqueWithoutOpenByInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutOpenByInput, ShiftUncheckedUpdateWithoutOpenByInput>
    create: XOR<ShiftCreateWithoutOpenByInput, ShiftUncheckedCreateWithoutOpenByInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutOpenByInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutOpenByInput, ShiftUncheckedUpdateWithoutOpenByInput>
  }

  export type ShiftUpdateManyWithWhereWithoutOpenByInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutOpenByInput>
  }

  export type ShiftUpsertWithWhereUniqueWithoutCloseByInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutCloseByInput, ShiftUncheckedUpdateWithoutCloseByInput>
    create: XOR<ShiftCreateWithoutCloseByInput, ShiftUncheckedCreateWithoutCloseByInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutCloseByInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutCloseByInput, ShiftUncheckedUpdateWithoutCloseByInput>
  }

  export type ShiftUpdateManyWithWhereWithoutCloseByInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutCloseByInput>
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutUserInput, ShiftAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutUserInput, ShiftAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftAssignmentScalarWhereInput = {
    AND?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    OR?: ShiftAssignmentScalarWhereInput[]
    NOT?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    id?: StringFilter<"ShiftAssignment"> | string
    shiftId?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
    hours?: IntFilter<"ShiftAssignment"> | number
    isOpen?: BoolFilter<"ShiftAssignment"> | boolean
    isClose?: BoolFilter<"ShiftAssignment"> | boolean
  }

  export type DailySaleUpsertWithWhereUniqueWithoutUserInput = {
    where: DailySaleWhereUniqueInput
    update: XOR<DailySaleUpdateWithoutUserInput, DailySaleUncheckedUpdateWithoutUserInput>
    create: XOR<DailySaleCreateWithoutUserInput, DailySaleUncheckedCreateWithoutUserInput>
  }

  export type DailySaleUpdateWithWhereUniqueWithoutUserInput = {
    where: DailySaleWhereUniqueInput
    data: XOR<DailySaleUpdateWithoutUserInput, DailySaleUncheckedUpdateWithoutUserInput>
  }

  export type DailySaleUpdateManyWithWhereWithoutUserInput = {
    where: DailySaleScalarWhereInput
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeePlanUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeePlanWhereUniqueInput
    update: XOR<EmployeePlanUpdateWithoutEmployeeInput, EmployeePlanUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeePlanCreateWithoutEmployeeInput, EmployeePlanUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeePlanUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeePlanWhereUniqueInput
    data: XOR<EmployeePlanUpdateWithoutEmployeeInput, EmployeePlanUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeePlanUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeePlanScalarWhereInput
    data: XOR<EmployeePlanUpdateManyMutationInput, EmployeePlanUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PointPlanCreateWithoutDirectionInput = {
    id?: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutPointPlansInput
  }

  export type PointPlanUncheckedCreateWithoutDirectionInput = {
    id?: string
    pointId: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointPlanCreateOrConnectWithoutDirectionInput = {
    where: PointPlanWhereUniqueInput
    create: XOR<PointPlanCreateWithoutDirectionInput, PointPlanUncheckedCreateWithoutDirectionInput>
  }

  export type PointPlanCreateManyDirectionInputEnvelope = {
    data: PointPlanCreateManyDirectionInput | PointPlanCreateManyDirectionInput[]
    skipDuplicates?: boolean
  }

  export type PersonalPlanGoalCreateWithoutDirectionInput = {
    id?: string
    target: number
    isPriority?: boolean
    employeePlan: EmployeePlanCreateNestedOneWithoutGoalsInput
  }

  export type PersonalPlanGoalUncheckedCreateWithoutDirectionInput = {
    id?: string
    employeePlanId: string
    target: number
    isPriority?: boolean
  }

  export type PersonalPlanGoalCreateOrConnectWithoutDirectionInput = {
    where: PersonalPlanGoalWhereUniqueInput
    create: XOR<PersonalPlanGoalCreateWithoutDirectionInput, PersonalPlanGoalUncheckedCreateWithoutDirectionInput>
  }

  export type PersonalPlanGoalCreateManyDirectionInputEnvelope = {
    data: PersonalPlanGoalCreateManyDirectionInput | PersonalPlanGoalCreateManyDirectionInput[]
    skipDuplicates?: boolean
  }

  export type DailySaleCreateWithoutDirectionInput = {
    id?: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    point: PointCreateNestedOneWithoutSalesInput
  }

  export type DailySaleUncheckedCreateWithoutDirectionInput = {
    id?: string
    userId: string
    pointId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type DailySaleCreateOrConnectWithoutDirectionInput = {
    where: DailySaleWhereUniqueInput
    create: XOR<DailySaleCreateWithoutDirectionInput, DailySaleUncheckedCreateWithoutDirectionInput>
  }

  export type DailySaleCreateManyDirectionInputEnvelope = {
    data: DailySaleCreateManyDirectionInput | DailySaleCreateManyDirectionInput[]
    skipDuplicates?: boolean
  }

  export type PointPlanUpsertWithWhereUniqueWithoutDirectionInput = {
    where: PointPlanWhereUniqueInput
    update: XOR<PointPlanUpdateWithoutDirectionInput, PointPlanUncheckedUpdateWithoutDirectionInput>
    create: XOR<PointPlanCreateWithoutDirectionInput, PointPlanUncheckedCreateWithoutDirectionInput>
  }

  export type PointPlanUpdateWithWhereUniqueWithoutDirectionInput = {
    where: PointPlanWhereUniqueInput
    data: XOR<PointPlanUpdateWithoutDirectionInput, PointPlanUncheckedUpdateWithoutDirectionInput>
  }

  export type PointPlanUpdateManyWithWhereWithoutDirectionInput = {
    where: PointPlanScalarWhereInput
    data: XOR<PointPlanUpdateManyMutationInput, PointPlanUncheckedUpdateManyWithoutDirectionInput>
  }

  export type PersonalPlanGoalUpsertWithWhereUniqueWithoutDirectionInput = {
    where: PersonalPlanGoalWhereUniqueInput
    update: XOR<PersonalPlanGoalUpdateWithoutDirectionInput, PersonalPlanGoalUncheckedUpdateWithoutDirectionInput>
    create: XOR<PersonalPlanGoalCreateWithoutDirectionInput, PersonalPlanGoalUncheckedCreateWithoutDirectionInput>
  }

  export type PersonalPlanGoalUpdateWithWhereUniqueWithoutDirectionInput = {
    where: PersonalPlanGoalWhereUniqueInput
    data: XOR<PersonalPlanGoalUpdateWithoutDirectionInput, PersonalPlanGoalUncheckedUpdateWithoutDirectionInput>
  }

  export type PersonalPlanGoalUpdateManyWithWhereWithoutDirectionInput = {
    where: PersonalPlanGoalScalarWhereInput
    data: XOR<PersonalPlanGoalUpdateManyMutationInput, PersonalPlanGoalUncheckedUpdateManyWithoutDirectionInput>
  }

  export type PersonalPlanGoalScalarWhereInput = {
    AND?: PersonalPlanGoalScalarWhereInput | PersonalPlanGoalScalarWhereInput[]
    OR?: PersonalPlanGoalScalarWhereInput[]
    NOT?: PersonalPlanGoalScalarWhereInput | PersonalPlanGoalScalarWhereInput[]
    id?: StringFilter<"PersonalPlanGoal"> | string
    employeePlanId?: StringFilter<"PersonalPlanGoal"> | string
    directionId?: StringFilter<"PersonalPlanGoal"> | string
    target?: IntFilter<"PersonalPlanGoal"> | number
    isPriority?: BoolFilter<"PersonalPlanGoal"> | boolean
  }

  export type DailySaleUpsertWithWhereUniqueWithoutDirectionInput = {
    where: DailySaleWhereUniqueInput
    update: XOR<DailySaleUpdateWithoutDirectionInput, DailySaleUncheckedUpdateWithoutDirectionInput>
    create: XOR<DailySaleCreateWithoutDirectionInput, DailySaleUncheckedCreateWithoutDirectionInput>
  }

  export type DailySaleUpdateWithWhereUniqueWithoutDirectionInput = {
    where: DailySaleWhereUniqueInput
    data: XOR<DailySaleUpdateWithoutDirectionInput, DailySaleUncheckedUpdateWithoutDirectionInput>
  }

  export type DailySaleUpdateManyWithWhereWithoutDirectionInput = {
    where: DailySaleScalarWhereInput
    data: XOR<DailySaleUpdateManyMutationInput, DailySaleUncheckedUpdateManyWithoutDirectionInput>
  }

  export type PointCreateWithoutPointPlansInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutPointInput
    shifts?: ShiftCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanCreateNestedManyWithoutPointInput
    sales?: DailySaleCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutPointPlansInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutPointInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanUncheckedCreateNestedManyWithoutPointInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutPointPlansInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutPointPlansInput, PointUncheckedCreateWithoutPointPlansInput>
  }

  export type DirectionCreateWithoutPointPlansInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    personalGoals?: PersonalPlanGoalCreateNestedManyWithoutDirectionInput
    sales?: DailySaleCreateNestedManyWithoutDirectionInput
  }

  export type DirectionUncheckedCreateWithoutPointPlansInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    personalGoals?: PersonalPlanGoalUncheckedCreateNestedManyWithoutDirectionInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutDirectionInput
  }

  export type DirectionCreateOrConnectWithoutPointPlansInput = {
    where: DirectionWhereUniqueInput
    create: XOR<DirectionCreateWithoutPointPlansInput, DirectionUncheckedCreateWithoutPointPlansInput>
  }

  export type PointUpsertWithoutPointPlansInput = {
    update: XOR<PointUpdateWithoutPointPlansInput, PointUncheckedUpdateWithoutPointPlansInput>
    create: XOR<PointCreateWithoutPointPlansInput, PointUncheckedCreateWithoutPointPlansInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutPointPlansInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutPointPlansInput, PointUncheckedUpdateWithoutPointPlansInput>
  }

  export type PointUpdateWithoutPointPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutPointNestedInput
    shifts?: ShiftUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUpdateManyWithoutPointNestedInput
    sales?: DailySaleUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutPointPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutPointNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUncheckedUpdateManyWithoutPointNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutPointNestedInput
  }

  export type DirectionUpsertWithoutPointPlansInput = {
    update: XOR<DirectionUpdateWithoutPointPlansInput, DirectionUncheckedUpdateWithoutPointPlansInput>
    create: XOR<DirectionCreateWithoutPointPlansInput, DirectionUncheckedCreateWithoutPointPlansInput>
    where?: DirectionWhereInput
  }

  export type DirectionUpdateToOneWithWhereWithoutPointPlansInput = {
    where?: DirectionWhereInput
    data: XOR<DirectionUpdateWithoutPointPlansInput, DirectionUncheckedUpdateWithoutPointPlansInput>
  }

  export type DirectionUpdateWithoutPointPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalGoals?: PersonalPlanGoalUpdateManyWithoutDirectionNestedInput
    sales?: DailySaleUpdateManyWithoutDirectionNestedInput
  }

  export type DirectionUncheckedUpdateWithoutPointPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalGoals?: PersonalPlanGoalUncheckedUpdateManyWithoutDirectionNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutDirectionNestedInput
  }

  export type PointCreateWithoutEmployeePlanInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutPointInput
    shifts?: ShiftCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanCreateNestedManyWithoutPointInput
    sales?: DailySaleCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutEmployeePlanInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutPointInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutPointInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutEmployeePlanInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutEmployeePlanInput, PointUncheckedCreateWithoutEmployeePlanInput>
  }

  export type UserCreateWithoutEmployeePlansInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    point?: PointCreateNestedOneWithoutUsersInput
    openedShifts?: ShiftCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    sales?: DailySaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeePlansInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pointId?: string | null
    penaltyCount?: number
    openedShifts?: ShiftUncheckedCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftUncheckedCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeePlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeePlansInput, UserUncheckedCreateWithoutEmployeePlansInput>
  }

  export type PersonalPlanGoalCreateWithoutEmployeePlanInput = {
    id?: string
    target: number
    isPriority?: boolean
    direction: DirectionCreateNestedOneWithoutPersonalGoalsInput
  }

  export type PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput = {
    id?: string
    directionId: string
    target: number
    isPriority?: boolean
  }

  export type PersonalPlanGoalCreateOrConnectWithoutEmployeePlanInput = {
    where: PersonalPlanGoalWhereUniqueInput
    create: XOR<PersonalPlanGoalCreateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput>
  }

  export type PersonalPlanGoalCreateManyEmployeePlanInputEnvelope = {
    data: PersonalPlanGoalCreateManyEmployeePlanInput | PersonalPlanGoalCreateManyEmployeePlanInput[]
    skipDuplicates?: boolean
  }

  export type PointUpsertWithoutEmployeePlanInput = {
    update: XOR<PointUpdateWithoutEmployeePlanInput, PointUncheckedUpdateWithoutEmployeePlanInput>
    create: XOR<PointCreateWithoutEmployeePlanInput, PointUncheckedCreateWithoutEmployeePlanInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutEmployeePlanInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutEmployeePlanInput, PointUncheckedUpdateWithoutEmployeePlanInput>
  }

  export type PointUpdateWithoutEmployeePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutPointNestedInput
    shifts?: ShiftUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUpdateManyWithoutPointNestedInput
    sales?: DailySaleUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutEmployeePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutPointNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUncheckedUpdateManyWithoutPointNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutPointNestedInput
  }

  export type UserUpsertWithoutEmployeePlansInput = {
    update: XOR<UserUpdateWithoutEmployeePlansInput, UserUncheckedUpdateWithoutEmployeePlansInput>
    create: XOR<UserCreateWithoutEmployeePlansInput, UserUncheckedCreateWithoutEmployeePlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeePlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeePlansInput, UserUncheckedUpdateWithoutEmployeePlansInput>
  }

  export type UserUpdateWithoutEmployeePlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    point?: PointUpdateOneWithoutUsersNestedInput
    openedShifts?: ShiftUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    sales?: DailySaleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeePlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyCount?: IntFieldUpdateOperationsInput | number
    openedShifts?: ShiftUncheckedUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUncheckedUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PersonalPlanGoalUpsertWithWhereUniqueWithoutEmployeePlanInput = {
    where: PersonalPlanGoalWhereUniqueInput
    update: XOR<PersonalPlanGoalUpdateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedUpdateWithoutEmployeePlanInput>
    create: XOR<PersonalPlanGoalCreateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedCreateWithoutEmployeePlanInput>
  }

  export type PersonalPlanGoalUpdateWithWhereUniqueWithoutEmployeePlanInput = {
    where: PersonalPlanGoalWhereUniqueInput
    data: XOR<PersonalPlanGoalUpdateWithoutEmployeePlanInput, PersonalPlanGoalUncheckedUpdateWithoutEmployeePlanInput>
  }

  export type PersonalPlanGoalUpdateManyWithWhereWithoutEmployeePlanInput = {
    where: PersonalPlanGoalScalarWhereInput
    data: XOR<PersonalPlanGoalUpdateManyMutationInput, PersonalPlanGoalUncheckedUpdateManyWithoutEmployeePlanInput>
  }

  export type EmployeePlanCreateWithoutGoalsInput = {
    id?: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutEmployeePlanInput
    employee: UserCreateNestedOneWithoutEmployeePlansInput
  }

  export type EmployeePlanUncheckedCreateWithoutGoalsInput = {
    id?: string
    pointId: string
    employeeId: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeePlanCreateOrConnectWithoutGoalsInput = {
    where: EmployeePlanWhereUniqueInput
    create: XOR<EmployeePlanCreateWithoutGoalsInput, EmployeePlanUncheckedCreateWithoutGoalsInput>
  }

  export type DirectionCreateWithoutPersonalGoalsInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    pointPlans?: PointPlanCreateNestedManyWithoutDirectionInput
    sales?: DailySaleCreateNestedManyWithoutDirectionInput
  }

  export type DirectionUncheckedCreateWithoutPersonalGoalsInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutDirectionInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutDirectionInput
  }

  export type DirectionCreateOrConnectWithoutPersonalGoalsInput = {
    where: DirectionWhereUniqueInput
    create: XOR<DirectionCreateWithoutPersonalGoalsInput, DirectionUncheckedCreateWithoutPersonalGoalsInput>
  }

  export type EmployeePlanUpsertWithoutGoalsInput = {
    update: XOR<EmployeePlanUpdateWithoutGoalsInput, EmployeePlanUncheckedUpdateWithoutGoalsInput>
    create: XOR<EmployeePlanCreateWithoutGoalsInput, EmployeePlanUncheckedCreateWithoutGoalsInput>
    where?: EmployeePlanWhereInput
  }

  export type EmployeePlanUpdateToOneWithWhereWithoutGoalsInput = {
    where?: EmployeePlanWhereInput
    data: XOR<EmployeePlanUpdateWithoutGoalsInput, EmployeePlanUncheckedUpdateWithoutGoalsInput>
  }

  export type EmployeePlanUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutEmployeePlanNestedInput
    employee?: UserUpdateOneRequiredWithoutEmployeePlansNestedInput
  }

  export type EmployeePlanUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectionUpsertWithoutPersonalGoalsInput = {
    update: XOR<DirectionUpdateWithoutPersonalGoalsInput, DirectionUncheckedUpdateWithoutPersonalGoalsInput>
    create: XOR<DirectionCreateWithoutPersonalGoalsInput, DirectionUncheckedCreateWithoutPersonalGoalsInput>
    where?: DirectionWhereInput
  }

  export type DirectionUpdateToOneWithWhereWithoutPersonalGoalsInput = {
    where?: DirectionWhereInput
    data: XOR<DirectionUpdateWithoutPersonalGoalsInput, DirectionUncheckedUpdateWithoutPersonalGoalsInput>
  }

  export type DirectionUpdateWithoutPersonalGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointPlans?: PointPlanUpdateManyWithoutDirectionNestedInput
    sales?: DailySaleUpdateManyWithoutDirectionNestedInput
  }

  export type DirectionUncheckedUpdateWithoutPersonalGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointPlans?: PointPlanUncheckedUpdateManyWithoutDirectionNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutDirectionNestedInput
  }

  export type PointCreateWithoutShiftsInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanCreateNestedManyWithoutPointInput
    sales?: DailySaleCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutShiftsInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanUncheckedCreateNestedManyWithoutPointInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutShiftsInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutShiftsInput, PointUncheckedCreateWithoutShiftsInput>
  }

  export type UserCreateWithoutOpenedShiftsInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    point?: PointCreateNestedOneWithoutUsersInput
    closedShifts?: ShiftCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    sales?: DailySaleCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutOpenedShiftsInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pointId?: string | null
    penaltyCount?: number
    closedShifts?: ShiftUncheckedCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutOpenedShiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpenedShiftsInput, UserUncheckedCreateWithoutOpenedShiftsInput>
  }

  export type UserCreateWithoutClosedShiftsInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    point?: PointCreateNestedOneWithoutUsersInput
    openedShifts?: ShiftCreateNestedManyWithoutOpenByInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    sales?: DailySaleCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutClosedShiftsInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pointId?: string | null
    penaltyCount?: number
    openedShifts?: ShiftUncheckedCreateNestedManyWithoutOpenByInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutClosedShiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClosedShiftsInput, UserUncheckedCreateWithoutClosedShiftsInput>
  }

  export type ShiftAssignmentCreateWithoutShiftInput = {
    id?: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutShiftInput = {
    id?: string
    userId: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
  }

  export type ShiftAssignmentCreateOrConnectWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type ShiftAssignmentCreateManyShiftInputEnvelope = {
    data: ShiftAssignmentCreateManyShiftInput | ShiftAssignmentCreateManyShiftInput[]
    skipDuplicates?: boolean
  }

  export type PointUpsertWithoutShiftsInput = {
    update: XOR<PointUpdateWithoutShiftsInput, PointUncheckedUpdateWithoutShiftsInput>
    create: XOR<PointCreateWithoutShiftsInput, PointUncheckedCreateWithoutShiftsInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutShiftsInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutShiftsInput, PointUncheckedUpdateWithoutShiftsInput>
  }

  export type PointUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUpdateManyWithoutPointNestedInput
    sales?: DailySaleUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUncheckedUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUncheckedUpdateManyWithoutPointNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutPointNestedInput
  }

  export type UserUpsertWithoutOpenedShiftsInput = {
    update: XOR<UserUpdateWithoutOpenedShiftsInput, UserUncheckedUpdateWithoutOpenedShiftsInput>
    create: XOR<UserCreateWithoutOpenedShiftsInput, UserUncheckedCreateWithoutOpenedShiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOpenedShiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOpenedShiftsInput, UserUncheckedUpdateWithoutOpenedShiftsInput>
  }

  export type UserUpdateWithoutOpenedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    point?: PointUpdateOneWithoutUsersNestedInput
    closedShifts?: ShiftUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    sales?: DailySaleUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutOpenedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyCount?: IntFieldUpdateOperationsInput | number
    closedShifts?: ShiftUncheckedUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUpsertWithoutClosedShiftsInput = {
    update: XOR<UserUpdateWithoutClosedShiftsInput, UserUncheckedUpdateWithoutClosedShiftsInput>
    create: XOR<UserCreateWithoutClosedShiftsInput, UserUncheckedCreateWithoutClosedShiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClosedShiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClosedShiftsInput, UserUncheckedUpdateWithoutClosedShiftsInput>
  }

  export type UserUpdateWithoutClosedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    point?: PointUpdateOneWithoutUsersNestedInput
    openedShifts?: ShiftUpdateManyWithoutOpenByNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    sales?: DailySaleUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutClosedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyCount?: IntFieldUpdateOperationsInput | number
    openedShifts?: ShiftUncheckedUpdateManyWithoutOpenByNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutShiftInput, ShiftAssignmentUncheckedUpdateWithoutShiftInput>
    create: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutShiftInput, ShiftAssignmentUncheckedUpdateWithoutShiftInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutShiftInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutShiftInput>
  }

  export type ShiftCreateWithoutAssignmentsInput = {
    id?: string
    workDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    point: PointCreateNestedOneWithoutShiftsInput
    openBy?: UserCreateNestedOneWithoutOpenedShiftsInput
    closeBy?: UserCreateNestedOneWithoutClosedShiftsInput
  }

  export type ShiftUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    pointId: string
    workDate: Date | string
    openById?: string | null
    closeById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftCreateOrConnectWithoutAssignmentsInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    point?: PointCreateNestedOneWithoutUsersInput
    openedShifts?: ShiftCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftCreateNestedManyWithoutCloseByInput
    sales?: DailySaleCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pointId?: string | null
    penaltyCount?: number
    openedShifts?: ShiftUncheckedCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftUncheckedCreateNestedManyWithoutCloseByInput
    sales?: DailySaleUncheckedCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type ShiftUpsertWithoutAssignmentsInput = {
    update: XOR<ShiftUpdateWithoutAssignmentsInput, ShiftUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutAssignmentsInput, ShiftUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ShiftUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutShiftsNestedInput
    openBy?: UserUpdateOneWithoutOpenedShiftsNestedInput
    closeBy?: UserUpdateOneWithoutClosedShiftsNestedInput
  }

  export type ShiftUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openById?: NullableStringFieldUpdateOperationsInput | string | null
    closeById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    point?: PointUpdateOneWithoutUsersNestedInput
    openedShifts?: ShiftUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUpdateManyWithoutCloseByNestedInput
    sales?: DailySaleUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyCount?: IntFieldUpdateOperationsInput | number
    openedShifts?: ShiftUncheckedUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUncheckedUpdateManyWithoutCloseByNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateWithoutSalesInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
    point?: PointCreateNestedOneWithoutUsersInput
    openedShifts?: ShiftCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pointId?: string | null
    penaltyCount?: number
    openedShifts?: ShiftUncheckedCreateNestedManyWithoutOpenByInput
    closedShifts?: ShiftUncheckedCreateNestedManyWithoutCloseByInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    employeePlans?: EmployeePlanUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type DirectionCreateWithoutSalesInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    pointPlans?: PointPlanCreateNestedManyWithoutDirectionInput
    personalGoals?: PersonalPlanGoalCreateNestedManyWithoutDirectionInput
  }

  export type DirectionUncheckedCreateWithoutSalesInput = {
    id?: string
    key: string
    title: string
    unit: $Enums.MetricUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutDirectionInput
    personalGoals?: PersonalPlanGoalUncheckedCreateNestedManyWithoutDirectionInput
  }

  export type DirectionCreateOrConnectWithoutSalesInput = {
    where: DirectionWhereUniqueInput
    create: XOR<DirectionCreateWithoutSalesInput, DirectionUncheckedCreateWithoutSalesInput>
  }

  export type PointCreateWithoutSalesInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutPointInput
    shifts?: ShiftCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutSalesInput = {
    id?: string
    code: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutPointInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutPointInput
    pointPlans?: PointPlanUncheckedCreateNestedManyWithoutPointInput
    employeePlan?: EmployeePlanUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutSalesInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutSalesInput, PointUncheckedCreateWithoutSalesInput>
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    point?: PointUpdateOneWithoutUsersNestedInput
    openedShifts?: ShiftUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyCount?: IntFieldUpdateOperationsInput | number
    openedShifts?: ShiftUncheckedUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUncheckedUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type DirectionUpsertWithoutSalesInput = {
    update: XOR<DirectionUpdateWithoutSalesInput, DirectionUncheckedUpdateWithoutSalesInput>
    create: XOR<DirectionCreateWithoutSalesInput, DirectionUncheckedCreateWithoutSalesInput>
    where?: DirectionWhereInput
  }

  export type DirectionUpdateToOneWithWhereWithoutSalesInput = {
    where?: DirectionWhereInput
    data: XOR<DirectionUpdateWithoutSalesInput, DirectionUncheckedUpdateWithoutSalesInput>
  }

  export type DirectionUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointPlans?: PointPlanUpdateManyWithoutDirectionNestedInput
    personalGoals?: PersonalPlanGoalUpdateManyWithoutDirectionNestedInput
  }

  export type DirectionUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    unit?: EnumMetricUnitFieldUpdateOperationsInput | $Enums.MetricUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointPlans?: PointPlanUncheckedUpdateManyWithoutDirectionNestedInput
    personalGoals?: PersonalPlanGoalUncheckedUpdateManyWithoutDirectionNestedInput
  }

  export type PointUpsertWithoutSalesInput = {
    update: XOR<PointUpdateWithoutSalesInput, PointUncheckedUpdateWithoutSalesInput>
    create: XOR<PointCreateWithoutSalesInput, PointUncheckedCreateWithoutSalesInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutSalesInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutSalesInput, PointUncheckedUpdateWithoutSalesInput>
  }

  export type PointUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutPointNestedInput
    shifts?: ShiftUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutPointNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutPointNestedInput
    pointPlans?: PointPlanUncheckedUpdateManyWithoutPointNestedInput
    employeePlan?: EmployeePlanUncheckedUpdateManyWithoutPointNestedInput
  }

  export type UserCreateManyPointInput = {
    id?: string
    code: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    penaltyCount?: number
  }

  export type ShiftCreateManyPointInput = {
    id?: string
    workDate: Date | string
    openById?: string | null
    closeById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointPlanCreateManyPointInput = {
    id?: string
    directionId: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeePlanCreateManyPointInput = {
    id?: string
    employeeId: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailySaleCreateManyPointInput = {
    id?: string
    userId: string
    directionId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    openedShifts?: ShiftUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    sales?: DailySaleUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
    openedShifts?: ShiftUncheckedUpdateManyWithoutOpenByNestedInput
    closedShifts?: ShiftUncheckedUpdateManyWithoutCloseByNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    sales?: DailySaleUncheckedUpdateManyWithoutUserNestedInput
    employeePlans?: EmployeePlanUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penaltyCount?: IntFieldUpdateOperationsInput | number
  }

  export type ShiftUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    openBy?: UserUpdateOneWithoutOpenedShiftsNestedInput
    closeBy?: UserUpdateOneWithoutClosedShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openById?: NullableStringFieldUpdateOperationsInput | string | null
    closeById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateManyWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openById?: NullableStringFieldUpdateOperationsInput | string | null
    closeById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointPlanUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: DirectionUpdateOneRequiredWithoutPointPlansNestedInput
  }

  export type PointPlanUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointPlanUncheckedUpdateManyWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeePlanUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutEmployeePlansNestedInput
    goals?: PersonalPlanGoalUpdateManyWithoutEmployeePlanNestedInput
  }

  export type EmployeePlanUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: PersonalPlanGoalUncheckedUpdateManyWithoutEmployeePlanNestedInput
  }

  export type EmployeePlanUncheckedUpdateManyWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    direction?: DirectionUpdateOneRequiredWithoutSalesNestedInput
  }

  export type DailySaleUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUncheckedUpdateManyWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateManyOpenByInput = {
    id?: string
    pointId: string
    workDate: Date | string
    closeById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftCreateManyCloseByInput = {
    id?: string
    pointId: string
    workDate: Date | string
    openById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftAssignmentCreateManyUserInput = {
    id?: string
    shiftId: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
  }

  export type DailySaleCreateManyUserInput = {
    id?: string
    pointId: string
    directionId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type EmployeePlanCreateManyEmployeeInput = {
    id?: string
    pointId: string
    monthStart: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateWithoutOpenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutShiftsNestedInput
    closeBy?: UserUpdateOneWithoutClosedShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutOpenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closeById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateManyWithoutOpenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closeById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUpdateWithoutCloseByInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutShiftsNestedInput
    openBy?: UserUpdateOneWithoutOpenedShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutCloseByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateManyWithoutCloseByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
    shift?: ShiftUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailySaleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: DirectionUpdateOneRequiredWithoutSalesNestedInput
    point?: PointUpdateOneRequiredWithoutSalesNestedInput
  }

  export type DailySaleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeePlanUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutEmployeePlanNestedInput
    goals?: PersonalPlanGoalUpdateManyWithoutEmployeePlanNestedInput
  }

  export type EmployeePlanUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: PersonalPlanGoalUncheckedUpdateManyWithoutEmployeePlanNestedInput
  }

  export type EmployeePlanUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointPlanCreateManyDirectionInput = {
    id?: string
    pointId: string
    monthStart: Date | string
    target: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalPlanGoalCreateManyDirectionInput = {
    id?: string
    employeePlanId: string
    target: number
    isPriority?: boolean
  }

  export type DailySaleCreateManyDirectionInput = {
    id?: string
    userId: string
    pointId: string
    saleDate: Date | string
    quantity?: number | null
    amount?: number | null
    createdAt?: Date | string
  }

  export type PointPlanUpdateWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutPointPlansNestedInput
  }

  export type PointPlanUncheckedUpdateWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointPlanUncheckedUpdateManyWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    monthStart?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalPlanGoalUpdateWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    employeePlan?: EmployeePlanUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type PersonalPlanGoalUncheckedUpdateWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeePlanId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonalPlanGoalUncheckedUpdateManyWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeePlanId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailySaleUpdateWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    point?: PointUpdateOneRequiredWithoutSalesNestedInput
  }

  export type DailySaleUncheckedUpdateWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySaleUncheckedUpdateManyWithoutDirectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalPlanGoalCreateManyEmployeePlanInput = {
    id?: string
    directionId: string
    target: number
    isPriority?: boolean
  }

  export type PersonalPlanGoalUpdateWithoutEmployeePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    direction?: DirectionUpdateOneRequiredWithoutPersonalGoalsNestedInput
  }

  export type PersonalPlanGoalUncheckedUpdateWithoutEmployeePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonalPlanGoalUncheckedUpdateManyWithoutEmployeePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    directionId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftAssignmentCreateManyShiftInput = {
    id?: string
    userId: string
    hours: number
    isOpen?: boolean
    isClose?: boolean
  }

  export type ShiftAssignmentUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isClose?: BoolFieldUpdateOperationsInput | boolean
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