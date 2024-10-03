
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  loginId: string
  loginPw: string | null
  username: string
  loginType: LoginType
  userType: UserType
  nickname: string
  phone: string
  isDisable: boolean
}

/**
 * Model Notice
 * 
 */
export type Notice = {
  id: number
  createdAt: Date
  title: string
  content: string | null
  link: string | null
  userId: number
}

/**
 * Model Board
 * 
 */
export type Board = {
  id: number
  createdAt: Date
  title: string
  content: string | null
  link: string | null
  startDay: Date
  endDay: Date
  isDisable: boolean
  userId: number
  boardType: BoardType
}

/**
 * Model BoardImage
 * 
 */
export type BoardImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  isThumb: boolean
  boardId: number
}

/**
 * Model BoardReply
 * 
 */
export type BoardReply = {
  id: number
  createdAt: Date
  updatedAt: Date | null
  content: string
  isDisable: boolean
  userId: number
  boardId: number
  boardReplyId: number | null
  boardType: BoardType
}

/**
 * Model BodyPart
 * 
 */
export type BodyPart = {
  id: number
  createdAt: Date
  name: string
  code: string
  category: string
}

/**
 * Model GymEquipment
 * 
 */
export type GymEquipment = {
  id: number
  createdAt: Date
  name: string
  brandName: string
  code: string
  isDisable: boolean
}

/**
 * Model GymEquipmentImage
 * 
 */
export type GymEquipmentImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  isThumb: boolean
  gymEquipmentId: number
}

/**
 * Model BodyPartsOnGymEquipments
 * 
 */
export type BodyPartsOnGymEquipments = {
  gymEquipmentId: number
  bodyPartId: number
  assignedAt: Date
}

/**
 * Model Gym
 * 
 */
export type Gym = {
  id: number
  createdAt: Date
  ceoName: string
  companyName: string
  businessNumber: string
  postcode: string
  mainAddress: string
  subAddress: string
  phone: string
  cellPhone: string
  fax: string
  email: string
  isCertified: boolean
  isDisable: boolean
  userId: number
}

/**
 * Model GymImage
 * 
 */
export type GymImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  isThumb: boolean
  gymId: number
}

/**
 * Model GymEuquipmentsOnGyms
 * 
 */
export type GymEuquipmentsOnGyms = {
  id: number
  createdAt: Date
  gymId: number
  gymEquipmentId: number
  assignBy: number
}

/**
 * Model GymEquipmentUserHistory
 * 
 */
export type GymEquipmentUserHistory = {
  id: number
  gymEuquipmentsOnGymsId: number
  userId: number
  usedAt: Date
  endAt: Date | null
}

/**
 * Model GymMembership
 * 
 */
export type GymMembership = {
  id: number
  createdAt: Date
  userId: number
  gymId: number
  assignBy: number
  startDay: Date
  endDay: Date
  gymMembershipCancellationId: number | null
}

/**
 * Model GymMembershipCancellation
 * 
 */
export type GymMembershipCancellation = {
  id: number
  createdAt: Date
  reason: string | null
}

/**
 * Model FavoriteGym
 * 
 */
export type FavoriteGym = {
  gymId: number
  userId: number
  assignedAt: Date
}

/**
 * Model GymAccessHistory
 * 
 */
export type GymAccessHistory = {
  id: number
  createdAt: Date
  gymId: number
  userId: number
  entryAt: Date
  exitAt: Date | null
}

/**
 * Model GymPassHistory
 * 
 */
export type GymPassHistory = {
  id: number
  createdAt: Date
  gymId: number
  userId: number
  hash: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const LoginType: {
  LOCAL: 'LOCAL',
  ADMIN: 'ADMIN'
};

export type LoginType = (typeof LoginType)[keyof typeof LoginType]


export const UserType: {
  GENERAL: 'GENERAL',
  BUSINESS: 'BUSINESS',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const BoardType: {
  BTALK: 'BTALK',
  BINFORM: 'BINFORM',
  BQUESTION: 'BQUESTION'
};

export type BoardType = (typeof BoardType)[keyof typeof BoardType]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<GlobalReject>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<GlobalReject>;

  /**
   * `prisma.boardImage`: Exposes CRUD operations for the **BoardImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardImages
    * const boardImages = await prisma.boardImage.findMany()
    * ```
    */
  get boardImage(): Prisma.BoardImageDelegate<GlobalReject>;

  /**
   * `prisma.boardReply`: Exposes CRUD operations for the **BoardReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardReplies
    * const boardReplies = await prisma.boardReply.findMany()
    * ```
    */
  get boardReply(): Prisma.BoardReplyDelegate<GlobalReject>;

  /**
   * `prisma.bodyPart`: Exposes CRUD operations for the **BodyPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyParts
    * const bodyParts = await prisma.bodyPart.findMany()
    * ```
    */
  get bodyPart(): Prisma.BodyPartDelegate<GlobalReject>;

  /**
   * `prisma.gymEquipment`: Exposes CRUD operations for the **GymEquipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymEquipments
    * const gymEquipments = await prisma.gymEquipment.findMany()
    * ```
    */
  get gymEquipment(): Prisma.GymEquipmentDelegate<GlobalReject>;

  /**
   * `prisma.gymEquipmentImage`: Exposes CRUD operations for the **GymEquipmentImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymEquipmentImages
    * const gymEquipmentImages = await prisma.gymEquipmentImage.findMany()
    * ```
    */
  get gymEquipmentImage(): Prisma.GymEquipmentImageDelegate<GlobalReject>;

  /**
   * `prisma.bodyPartsOnGymEquipments`: Exposes CRUD operations for the **BodyPartsOnGymEquipments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyPartsOnGymEquipments
    * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.findMany()
    * ```
    */
  get bodyPartsOnGymEquipments(): Prisma.BodyPartsOnGymEquipmentsDelegate<GlobalReject>;

  /**
   * `prisma.gym`: Exposes CRUD operations for the **Gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.GymDelegate<GlobalReject>;

  /**
   * `prisma.gymImage`: Exposes CRUD operations for the **GymImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymImages
    * const gymImages = await prisma.gymImage.findMany()
    * ```
    */
  get gymImage(): Prisma.GymImageDelegate<GlobalReject>;

  /**
   * `prisma.gymEuquipmentsOnGyms`: Exposes CRUD operations for the **GymEuquipmentsOnGyms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymEuquipmentsOnGyms
    * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.findMany()
    * ```
    */
  get gymEuquipmentsOnGyms(): Prisma.GymEuquipmentsOnGymsDelegate<GlobalReject>;

  /**
   * `prisma.gymEquipmentUserHistory`: Exposes CRUD operations for the **GymEquipmentUserHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymEquipmentUserHistories
    * const gymEquipmentUserHistories = await prisma.gymEquipmentUserHistory.findMany()
    * ```
    */
  get gymEquipmentUserHistory(): Prisma.GymEquipmentUserHistoryDelegate<GlobalReject>;

  /**
   * `prisma.gymMembership`: Exposes CRUD operations for the **GymMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymMemberships
    * const gymMemberships = await prisma.gymMembership.findMany()
    * ```
    */
  get gymMembership(): Prisma.GymMembershipDelegate<GlobalReject>;

  /**
   * `prisma.gymMembershipCancellation`: Exposes CRUD operations for the **GymMembershipCancellation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymMembershipCancellations
    * const gymMembershipCancellations = await prisma.gymMembershipCancellation.findMany()
    * ```
    */
  get gymMembershipCancellation(): Prisma.GymMembershipCancellationDelegate<GlobalReject>;

  /**
   * `prisma.favoriteGym`: Exposes CRUD operations for the **FavoriteGym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteGyms
    * const favoriteGyms = await prisma.favoriteGym.findMany()
    * ```
    */
  get favoriteGym(): Prisma.FavoriteGymDelegate<GlobalReject>;

  /**
   * `prisma.gymAccessHistory`: Exposes CRUD operations for the **GymAccessHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymAccessHistories
    * const gymAccessHistories = await prisma.gymAccessHistory.findMany()
    * ```
    */
  get gymAccessHistory(): Prisma.GymAccessHistoryDelegate<GlobalReject>;

  /**
   * `prisma.gymPassHistory`: Exposes CRUD operations for the **GymPassHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymPassHistories
    * const gymPassHistories = await prisma.gymPassHistory.findMany()
    * ```
    */
  get gymPassHistory(): Prisma.GymPassHistoryDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Notice: 'Notice',
    Board: 'Board',
    BoardImage: 'BoardImage',
    BoardReply: 'BoardReply',
    BodyPart: 'BodyPart',
    GymEquipment: 'GymEquipment',
    GymEquipmentImage: 'GymEquipmentImage',
    BodyPartsOnGymEquipments: 'BodyPartsOnGymEquipments',
    Gym: 'Gym',
    GymImage: 'GymImage',
    GymEuquipmentsOnGyms: 'GymEuquipmentsOnGyms',
    GymEquipmentUserHistory: 'GymEquipmentUserHistory',
    GymMembership: 'GymMembership',
    GymMembershipCancellation: 'GymMembershipCancellation',
    FavoriteGym: 'FavoriteGym',
    GymAccessHistory: 'GymAccessHistory',
    GymPassHistory: 'GymPassHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
    Board: number
    BoardReply: number
    Notice: number
    Gym: number
    assignedGymEquipments: number
    GymMembership: number
    assignedGymMemberships: number
    FavoriteGyms: number
    GymEquipmentUserHistory: number
    GymAccessHistory: number
    GymPassHistory: number
  }

  export type UserCountOutputTypeSelect = {
    Board?: boolean
    BoardReply?: boolean
    Notice?: boolean
    Gym?: boolean
    assignedGymEquipments?: boolean
    GymMembership?: boolean
    assignedGymMemberships?: boolean
    FavoriteGyms?: boolean
    GymEquipmentUserHistory?: boolean
    GymAccessHistory?: boolean
    GymPassHistory?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type BoardCountOutputType
   */


  export type BoardCountOutputType = {
    BoardImage: number
    BoardReply: number
  }

  export type BoardCountOutputTypeSelect = {
    BoardImage?: boolean
    BoardReply?: boolean
  }

  export type BoardCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BoardCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BoardCountOutputType
    : S extends undefined
    ? never
    : S extends BoardCountOutputTypeArgs
    ?'include' extends U
    ? BoardCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BoardCountOutputType ? BoardCountOutputType[P] : never
  } 
    : BoardCountOutputType
  : BoardCountOutputType




  // Custom InputTypes

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     * 
    **/
    select?: BoardCountOutputTypeSelect | null
  }



  /**
   * Count Type BoardReplyCountOutputType
   */


  export type BoardReplyCountOutputType = {
    BoardNestedReply: number
  }

  export type BoardReplyCountOutputTypeSelect = {
    BoardNestedReply?: boolean
  }

  export type BoardReplyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BoardReplyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BoardReplyCountOutputType
    : S extends undefined
    ? never
    : S extends BoardReplyCountOutputTypeArgs
    ?'include' extends U
    ? BoardReplyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BoardReplyCountOutputType ? BoardReplyCountOutputType[P] : never
  } 
    : BoardReplyCountOutputType
  : BoardReplyCountOutputType




  // Custom InputTypes

  /**
   * BoardReplyCountOutputType without action
   */
  export type BoardReplyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardReplyCountOutputType
     * 
    **/
    select?: BoardReplyCountOutputTypeSelect | null
  }



  /**
   * Count Type BodyPartCountOutputType
   */


  export type BodyPartCountOutputType = {
    GymEquipments: number
  }

  export type BodyPartCountOutputTypeSelect = {
    GymEquipments?: boolean
  }

  export type BodyPartCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BodyPartCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BodyPartCountOutputType
    : S extends undefined
    ? never
    : S extends BodyPartCountOutputTypeArgs
    ?'include' extends U
    ? BodyPartCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BodyPartCountOutputType ? BodyPartCountOutputType[P] : never
  } 
    : BodyPartCountOutputType
  : BodyPartCountOutputType




  // Custom InputTypes

  /**
   * BodyPartCountOutputType without action
   */
  export type BodyPartCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BodyPartCountOutputType
     * 
    **/
    select?: BodyPartCountOutputTypeSelect | null
  }



  /**
   * Count Type GymEquipmentCountOutputType
   */


  export type GymEquipmentCountOutputType = {
    BodyParts: number
    Gyms: number
    GymEquipmentImage: number
  }

  export type GymEquipmentCountOutputTypeSelect = {
    BodyParts?: boolean
    Gyms?: boolean
    GymEquipmentImage?: boolean
  }

  export type GymEquipmentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GymEquipmentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GymEquipmentCountOutputType
    : S extends undefined
    ? never
    : S extends GymEquipmentCountOutputTypeArgs
    ?'include' extends U
    ? GymEquipmentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GymEquipmentCountOutputType ? GymEquipmentCountOutputType[P] : never
  } 
    : GymEquipmentCountOutputType
  : GymEquipmentCountOutputType




  // Custom InputTypes

  /**
   * GymEquipmentCountOutputType without action
   */
  export type GymEquipmentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentCountOutputType
     * 
    **/
    select?: GymEquipmentCountOutputTypeSelect | null
  }



  /**
   * Count Type GymCountOutputType
   */


  export type GymCountOutputType = {
    GymImage: number
    GymEquipments: number
    FavoriteUsers: number
    GymAccessHistory: number
    GymMembership: number
    GymPassHistory: number
  }

  export type GymCountOutputTypeSelect = {
    GymImage?: boolean
    GymEquipments?: boolean
    FavoriteUsers?: boolean
    GymAccessHistory?: boolean
    GymMembership?: boolean
    GymPassHistory?: boolean
  }

  export type GymCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GymCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GymCountOutputType
    : S extends undefined
    ? never
    : S extends GymCountOutputTypeArgs
    ?'include' extends U
    ? GymCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GymCountOutputType ? GymCountOutputType[P] : never
  } 
    : GymCountOutputType
  : GymCountOutputType




  // Custom InputTypes

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GymCountOutputType
     * 
    **/
    select?: GymCountOutputTypeSelect | null
  }



  /**
   * Count Type GymEuquipmentsOnGymsCountOutputType
   */


  export type GymEuquipmentsOnGymsCountOutputType = {
    GymEquipmentUserHistory: number
  }

  export type GymEuquipmentsOnGymsCountOutputTypeSelect = {
    GymEquipmentUserHistory?: boolean
  }

  export type GymEuquipmentsOnGymsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GymEuquipmentsOnGymsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GymEuquipmentsOnGymsCountOutputType
    : S extends undefined
    ? never
    : S extends GymEuquipmentsOnGymsCountOutputTypeArgs
    ?'include' extends U
    ? GymEuquipmentsOnGymsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GymEuquipmentsOnGymsCountOutputType ? GymEuquipmentsOnGymsCountOutputType[P] : never
  } 
    : GymEuquipmentsOnGymsCountOutputType
  : GymEuquipmentsOnGymsCountOutputType




  // Custom InputTypes

  /**
   * GymEuquipmentsOnGymsCountOutputType without action
   */
  export type GymEuquipmentsOnGymsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGymsCountOutputType
     * 
    **/
    select?: GymEuquipmentsOnGymsCountOutputTypeSelect | null
  }



  /**
   * Count Type GymMembershipCancellationCountOutputType
   */


  export type GymMembershipCancellationCountOutputType = {
    GymMembership: number
  }

  export type GymMembershipCancellationCountOutputTypeSelect = {
    GymMembership?: boolean
  }

  export type GymMembershipCancellationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GymMembershipCancellationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GymMembershipCancellationCountOutputType
    : S extends undefined
    ? never
    : S extends GymMembershipCancellationCountOutputTypeArgs
    ?'include' extends U
    ? GymMembershipCancellationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GymMembershipCancellationCountOutputType ? GymMembershipCancellationCountOutputType[P] : never
  } 
    : GymMembershipCancellationCountOutputType
  : GymMembershipCancellationCountOutputType




  // Custom InputTypes

  /**
   * GymMembershipCancellationCountOutputType without action
   */
  export type GymMembershipCancellationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellationCountOutputType
     * 
    **/
    select?: GymMembershipCancellationCountOutputTypeSelect | null
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: LoginType | null
    userType: UserType | null
    nickname: string | null
    phone: string | null
    isDisable: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: LoginType | null
    userType: UserType | null
    nickname: string | null
    phone: string | null
    isDisable: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    loginId: number
    loginPw: number
    username: number
    loginType: number
    userType: number
    nickname: number
    phone: number
    isDisable: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    phone?: true
    isDisable?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    phone?: true
    isDisable?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    phone?: true
    isDisable?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
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
    id: number
    createdAt: Date
    loginId: string
    loginPw: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone: string
    isDisable: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    loginId?: boolean
    loginPw?: boolean
    username?: boolean
    loginType?: boolean
    userType?: boolean
    nickname?: boolean
    phone?: boolean
    isDisable?: boolean
    Board?: boolean | BoardFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    Notice?: boolean | NoticeFindManyArgs
    Gym?: boolean | GymFindManyArgs
    assignedGymEquipments?: boolean | GymEuquipmentsOnGymsFindManyArgs
    GymMembership?: boolean | GymMembershipFindManyArgs
    assignedGymMemberships?: boolean | GymMembershipFindManyArgs
    FavoriteGyms?: boolean | FavoriteGymFindManyArgs
    GymEquipmentUserHistory?: boolean | GymEquipmentUserHistoryFindManyArgs
    GymAccessHistory?: boolean | GymAccessHistoryFindManyArgs
    GymPassHistory?: boolean | GymPassHistoryFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Board?: boolean | BoardFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    Notice?: boolean | NoticeFindManyArgs
    Gym?: boolean | GymFindManyArgs
    assignedGymEquipments?: boolean | GymEuquipmentsOnGymsFindManyArgs
    GymMembership?: boolean | GymMembershipFindManyArgs
    assignedGymMemberships?: boolean | GymMembershipFindManyArgs
    FavoriteGyms?: boolean | FavoriteGymFindManyArgs
    GymEquipmentUserHistory?: boolean | GymEquipmentUserHistoryFindManyArgs
    GymAccessHistory?: boolean | GymAccessHistoryFindManyArgs
    GymPassHistory?: boolean | GymPassHistoryFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Board' ? Array < BoardGetPayload<S['include'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends 'Notice' ? Array < NoticeGetPayload<S['include'][P]>>  :
        P extends 'Gym' ? Array < GymGetPayload<S['include'][P]>>  :
        P extends 'assignedGymEquipments' ? Array < GymEuquipmentsOnGymsGetPayload<S['include'][P]>>  :
        P extends 'GymMembership' ? Array < GymMembershipGetPayload<S['include'][P]>>  :
        P extends 'assignedGymMemberships' ? Array < GymMembershipGetPayload<S['include'][P]>>  :
        P extends 'FavoriteGyms' ? Array < FavoriteGymGetPayload<S['include'][P]>>  :
        P extends 'GymEquipmentUserHistory' ? Array < GymEquipmentUserHistoryGetPayload<S['include'][P]>>  :
        P extends 'GymAccessHistory' ? Array < GymAccessHistoryGetPayload<S['include'][P]>>  :
        P extends 'GymPassHistory' ? Array < GymPassHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Board' ? Array < BoardGetPayload<S['select'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends 'Notice' ? Array < NoticeGetPayload<S['select'][P]>>  :
        P extends 'Gym' ? Array < GymGetPayload<S['select'][P]>>  :
        P extends 'assignedGymEquipments' ? Array < GymEuquipmentsOnGymsGetPayload<S['select'][P]>>  :
        P extends 'GymMembership' ? Array < GymMembershipGetPayload<S['select'][P]>>  :
        P extends 'assignedGymMemberships' ? Array < GymMembershipGetPayload<S['select'][P]>>  :
        P extends 'FavoriteGyms' ? Array < FavoriteGymGetPayload<S['select'][P]>>  :
        P extends 'GymEquipmentUserHistory' ? Array < GymEquipmentUserHistoryGetPayload<S['select'][P]>>  :
        P extends 'GymAccessHistory' ? Array < GymAccessHistoryGetPayload<S['select'][P]>>  :
        P extends 'GymPassHistory' ? Array < GymPassHistoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Board<T extends BoardFindManyArgs = {}>(args?: Subset<T, BoardFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Board>>, PrismaPromise<Array<BoardGetPayload<T>>>>;

    BoardReply<T extends BoardReplyFindManyArgs = {}>(args?: Subset<T, BoardReplyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>;

    Notice<T extends NoticeFindManyArgs = {}>(args?: Subset<T, NoticeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Notice>>, PrismaPromise<Array<NoticeGetPayload<T>>>>;

    Gym<T extends GymFindManyArgs = {}>(args?: Subset<T, GymFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Gym>>, PrismaPromise<Array<GymGetPayload<T>>>>;

    assignedGymEquipments<T extends GymEuquipmentsOnGymsFindManyArgs = {}>(args?: Subset<T, GymEuquipmentsOnGymsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymEuquipmentsOnGyms>>, PrismaPromise<Array<GymEuquipmentsOnGymsGetPayload<T>>>>;

    GymMembership<T extends GymMembershipFindManyArgs = {}>(args?: Subset<T, GymMembershipFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymMembership>>, PrismaPromise<Array<GymMembershipGetPayload<T>>>>;

    assignedGymMemberships<T extends GymMembershipFindManyArgs = {}>(args?: Subset<T, GymMembershipFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymMembership>>, PrismaPromise<Array<GymMembershipGetPayload<T>>>>;

    FavoriteGyms<T extends FavoriteGymFindManyArgs = {}>(args?: Subset<T, FavoriteGymFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FavoriteGym>>, PrismaPromise<Array<FavoriteGymGetPayload<T>>>>;

    GymEquipmentUserHistory<T extends GymEquipmentUserHistoryFindManyArgs = {}>(args?: Subset<T, GymEquipmentUserHistoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymEquipmentUserHistory>>, PrismaPromise<Array<GymEquipmentUserHistoryGetPayload<T>>>>;

    GymAccessHistory<T extends GymAccessHistoryFindManyArgs = {}>(args?: Subset<T, GymAccessHistoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymAccessHistory>>, PrismaPromise<Array<GymAccessHistoryGetPayload<T>>>>;

    GymPassHistory<T extends GymPassHistoryFindManyArgs = {}>(args?: Subset<T, GymPassHistoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymPassHistory>>, PrismaPromise<Array<GymPassHistoryGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Notice
   */


  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoticeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoticeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    userId: number | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    userId: number | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    content: number
    link: number
    userId: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoticeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoticeMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
    _all?: true
  }

  export type NoticeAggregateArgs = {
    /**
     * Filter which Notice to aggregate.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs = {
    where?: NoticeWhereInput
    orderBy?: Enumerable<NoticeOrderByWithAggregationInput>
    by: Array<NoticeScalarFieldEnum>
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }


  export type NoticeGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    content: string | null
    link: string | null
    userId: number
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    link?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }

  export type NoticeInclude = {
    User?: boolean | UserArgs
  }

  export type NoticeGetPayload<
    S extends boolean | null | undefined | NoticeArgs,
    U = keyof S
      > = S extends true
        ? Notice
    : S extends undefined
    ? never
    : S extends NoticeArgs | NoticeFindManyArgs
    ?'include' extends U
    ? Notice  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof Notice ? Notice[P] : never
  } 
    : Notice
  : Notice


  type NoticeCountArgs = Merge<
    Omit<NoticeFindManyArgs, 'select' | 'include'> & {
      select?: NoticeCountAggregateInputType | true
    }
  >

  export interface NoticeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoticeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NoticeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notice'> extends True ? CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>> : CheckSelect<T, Prisma__NoticeClient<Notice | null >, Prisma__NoticeClient<NoticeGetPayload<T> | null >>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoticeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NoticeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notice'> extends True ? CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>> : CheckSelect<T, Prisma__NoticeClient<Notice | null >, Prisma__NoticeClient<NoticeGetPayload<T> | null >>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NoticeFindManyArgs>(
      args?: SelectSubset<T, NoticeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Notice>>, PrismaPromise<Array<NoticeGetPayload<T>>>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
    **/
    create<T extends NoticeCreateArgs>(
      args: SelectSubset<T, NoticeCreateArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Create many Notices.
     *     @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     *     @example
     *     // Create many Notices
     *     const notice = await prisma.notice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NoticeCreateManyArgs>(
      args?: SelectSubset<T, NoticeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
    **/
    delete<T extends NoticeDeleteArgs>(
      args: SelectSubset<T, NoticeDeleteArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoticeUpdateArgs>(
      args: SelectSubset<T, NoticeUpdateArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoticeDeleteManyArgs>(
      args?: SelectSubset<T, NoticeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoticeUpdateManyArgs>(
      args: SelectSubset<T, NoticeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
    **/
    upsert<T extends NoticeUpsertArgs>(
      args: SelectSubset<T, NoticeUpsertArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
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
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NoticeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Throw an Error if a Notice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Throw an Error if a Notice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     * 
    **/
    distinct?: Enumerable<NoticeScalarFieldEnum>
  }


  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter, which Notices to fetch.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NoticeScalarFieldEnum>
  }


  /**
   * Notice create
   */
  export type NoticeCreateArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The data needed to create a Notice.
     * 
    **/
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }


  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs = {
    /**
     * The data used to create many Notices.
     * 
    **/
    data: Enumerable<NoticeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notice update
   */
  export type NoticeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The data needed to update a Notice.
     * 
    **/
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs = {
    /**
     * The data used to update Notices.
     * 
    **/
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     * 
    **/
    where?: NoticeWhereInput
  }


  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The filter to search for the Notice to update in case it exists.
     * 
    **/
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     * 
    **/
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }


  /**
   * Notice delete
   */
  export type NoticeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter which Notice to delete.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs = {
    /**
     * Filter which Notices to delete
     * 
    **/
    where?: NoticeWhereInput
  }


  /**
   * Notice without action
   */
  export type NoticeArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
  }



  /**
   * Model Board
   */


  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    startDay: Date | null
    endDay: Date | null
    isDisable: boolean | null
    userId: number | null
    boardType: BoardType | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    startDay: Date | null
    endDay: Date | null
    isDisable: boolean | null
    userId: number | null
    boardType: BoardType | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    content: number
    link: number
    startDay: number
    endDay: number
    isDisable: number
    userId: number
    boardType: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
    _all?: true
  }

  export type BoardAggregateArgs = {
    /**
     * Filter which Board to aggregate.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs = {
    where?: BoardWhereInput
    orderBy?: Enumerable<BoardOrderByWithAggregationInput>
    by: Array<BoardScalarFieldEnum>
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }


  export type BoardGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    content: string | null
    link: string | null
    startDay: Date
    endDay: Date
    isDisable: boolean
    userId: number
    boardType: BoardType
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    link?: boolean
    startDay?: boolean
    endDay?: boolean
    isDisable?: boolean
    BoardImage?: boolean | BoardImageFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    userId?: boolean
    User?: boolean | UserArgs
    boardType?: boolean
    _count?: boolean | BoardCountOutputTypeArgs
  }

  export type BoardInclude = {
    BoardImage?: boolean | BoardImageFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    User?: boolean | UserArgs
    _count?: boolean | BoardCountOutputTypeArgs
  }

  export type BoardGetPayload<
    S extends boolean | null | undefined | BoardArgs,
    U = keyof S
      > = S extends true
        ? Board
    : S extends undefined
    ? never
    : S extends BoardArgs | BoardFindManyArgs
    ?'include' extends U
    ? Board  & {
    [P in TrueKeys<S['include']>]:
        P extends 'BoardImage' ? Array < BoardImageGetPayload<S['include'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'BoardImage' ? Array < BoardImageGetPayload<S['select'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Board ? Board[P] : never
  } 
    : Board
  : Board


  type BoardCountArgs = Merge<
    Omit<BoardFindManyArgs, 'select' | 'include'> & {
      select?: BoardCountAggregateInputType | true
    }
  >

  export interface BoardDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Board'> extends True ? CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>> : CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Board'> extends True ? CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>> : CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardFindManyArgs>(
      args?: SelectSubset<T, BoardFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Board>>, PrismaPromise<Array<BoardGetPayload<T>>>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
    **/
    create<T extends BoardCreateArgs>(
      args: SelectSubset<T, BoardCreateArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Create many Boards.
     *     @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     *     @example
     *     // Create many Boards
     *     const board = await prisma.board.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCreateManyArgs>(
      args?: SelectSubset<T, BoardCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
    **/
    delete<T extends BoardDeleteArgs>(
      args: SelectSubset<T, BoardDeleteArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardUpdateArgs>(
      args: SelectSubset<T, BoardUpdateArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardDeleteManyArgs>(
      args?: SelectSubset<T, BoardDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardUpdateManyArgs>(
      args: SelectSubset<T, BoardUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
    **/
    upsert<T extends BoardUpsertArgs>(
      args: SelectSubset<T, BoardUpsertArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    BoardImage<T extends BoardImageFindManyArgs = {}>(args?: Subset<T, BoardImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardImage>>, PrismaPromise<Array<BoardImageGetPayload<T>>>>;

    BoardReply<T extends BoardReplyFindManyArgs = {}>(args?: Subset<T, BoardReplyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Throw an Error if a Board can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Throw an Error if a Board can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     * 
    **/
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board findMany
   */
  export type BoardFindManyArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter, which Boards to fetch.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board create
   */
  export type BoardCreateArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The data needed to create a Board.
     * 
    **/
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }


  /**
   * Board createMany
   */
  export type BoardCreateManyArgs = {
    /**
     * The data used to create many Boards.
     * 
    **/
    data: Enumerable<BoardCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Board update
   */
  export type BoardUpdateArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The data needed to update a Board.
     * 
    **/
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs = {
    /**
     * The data used to update Boards.
     * 
    **/
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     * 
    **/
    where?: BoardWhereInput
  }


  /**
   * Board upsert
   */
  export type BoardUpsertArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The filter to search for the Board to update in case it exists.
     * 
    **/
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     * 
    **/
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }


  /**
   * Board delete
   */
  export type BoardDeleteArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter which Board to delete.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs = {
    /**
     * Filter which Boards to delete
     * 
    **/
    where?: BoardWhereInput
  }


  /**
   * Board without action
   */
  export type BoardArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
  }



  /**
   * Model BoardImage
   */


  export type AggregateBoardImage = {
    _count: BoardImageCountAggregateOutputType | null
    _avg: BoardImageAvgAggregateOutputType | null
    _sum: BoardImageSumAggregateOutputType | null
    _min: BoardImageMinAggregateOutputType | null
    _max: BoardImageMaxAggregateOutputType | null
  }

  export type BoardImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    boardId: number | null
  }

  export type BoardImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    boardId: number | null
  }

  export type BoardImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    boardId: number | null
  }

  export type BoardImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    boardId: number | null
  }

  export type BoardImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    isThumb: number
    boardId: number
    _all: number
  }


  export type BoardImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    boardId?: true
  }

  export type BoardImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    boardId?: true
  }

  export type BoardImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
  }

  export type BoardImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
  }

  export type BoardImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
    _all?: true
  }

  export type BoardImageAggregateArgs = {
    /**
     * Filter which BoardImage to aggregate.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardImages
    **/
    _count?: true | BoardImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardImageMaxAggregateInputType
  }

  export type GetBoardImageAggregateType<T extends BoardImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardImage[P]>
      : GetScalarType<T[P], AggregateBoardImage[P]>
  }




  export type BoardImageGroupByArgs = {
    where?: BoardImageWhereInput
    orderBy?: Enumerable<BoardImageOrderByWithAggregationInput>
    by: Array<BoardImageScalarFieldEnum>
    having?: BoardImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardImageCountAggregateInputType | true
    _avg?: BoardImageAvgAggregateInputType
    _sum?: BoardImageSumAggregateInputType
    _min?: BoardImageMinAggregateInputType
    _max?: BoardImageMaxAggregateInputType
  }


  export type BoardImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    isThumb: boolean
    boardId: number
    _count: BoardImageCountAggregateOutputType | null
    _avg: BoardImageAvgAggregateOutputType | null
    _sum: BoardImageSumAggregateOutputType | null
    _min: BoardImageMinAggregateOutputType | null
    _max: BoardImageMaxAggregateOutputType | null
  }

  type GetBoardImageGroupByPayload<T extends BoardImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardImageGroupByOutputType[P]>
            : GetScalarType<T[P], BoardImageGroupByOutputType[P]>
        }
      >
    >


  export type BoardImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    isThumb?: boolean
    boardId?: boolean
    Board?: boolean | BoardArgs
  }

  export type BoardImageInclude = {
    Board?: boolean | BoardArgs
  }

  export type BoardImageGetPayload<
    S extends boolean | null | undefined | BoardImageArgs,
    U = keyof S
      > = S extends true
        ? BoardImage
    : S extends undefined
    ? never
    : S extends BoardImageArgs | BoardImageFindManyArgs
    ?'include' extends U
    ? BoardImage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Board' ? BoardGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Board' ? BoardGetPayload<S['select'][P]> :  P extends keyof BoardImage ? BoardImage[P] : never
  } 
    : BoardImage
  : BoardImage


  type BoardImageCountArgs = Merge<
    Omit<BoardImageFindManyArgs, 'select' | 'include'> & {
      select?: BoardImageCountAggregateInputType | true
    }
  >

  export interface BoardImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one BoardImage that matches the filter.
     * @param {BoardImageFindUniqueArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardImage'> extends True ? CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>> : CheckSelect<T, Prisma__BoardImageClient<BoardImage | null >, Prisma__BoardImageClient<BoardImageGetPayload<T> | null >>

    /**
     * Find the first BoardImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageFindFirstArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardImage'> extends True ? CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>> : CheckSelect<T, Prisma__BoardImageClient<BoardImage | null >, Prisma__BoardImageClient<BoardImageGetPayload<T> | null >>

    /**
     * Find zero or more BoardImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardImages
     * const boardImages = await prisma.boardImage.findMany()
     * 
     * // Get first 10 BoardImages
     * const boardImages = await prisma.boardImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardImageWithIdOnly = await prisma.boardImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardImageFindManyArgs>(
      args?: SelectSubset<T, BoardImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BoardImage>>, PrismaPromise<Array<BoardImageGetPayload<T>>>>

    /**
     * Create a BoardImage.
     * @param {BoardImageCreateArgs} args - Arguments to create a BoardImage.
     * @example
     * // Create one BoardImage
     * const BoardImage = await prisma.boardImage.create({
     *   data: {
     *     // ... data to create a BoardImage
     *   }
     * })
     * 
    **/
    create<T extends BoardImageCreateArgs>(
      args: SelectSubset<T, BoardImageCreateArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Create many BoardImages.
     *     @param {BoardImageCreateManyArgs} args - Arguments to create many BoardImages.
     *     @example
     *     // Create many BoardImages
     *     const boardImage = await prisma.boardImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardImageCreateManyArgs>(
      args?: SelectSubset<T, BoardImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BoardImage.
     * @param {BoardImageDeleteArgs} args - Arguments to delete one BoardImage.
     * @example
     * // Delete one BoardImage
     * const BoardImage = await prisma.boardImage.delete({
     *   where: {
     *     // ... filter to delete one BoardImage
     *   }
     * })
     * 
    **/
    delete<T extends BoardImageDeleteArgs>(
      args: SelectSubset<T, BoardImageDeleteArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Update one BoardImage.
     * @param {BoardImageUpdateArgs} args - Arguments to update one BoardImage.
     * @example
     * // Update one BoardImage
     * const boardImage = await prisma.boardImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardImageUpdateArgs>(
      args: SelectSubset<T, BoardImageUpdateArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Delete zero or more BoardImages.
     * @param {BoardImageDeleteManyArgs} args - Arguments to filter BoardImages to delete.
     * @example
     * // Delete a few BoardImages
     * const { count } = await prisma.boardImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardImageDeleteManyArgs>(
      args?: SelectSubset<T, BoardImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardImages
     * const boardImage = await prisma.boardImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardImageUpdateManyArgs>(
      args: SelectSubset<T, BoardImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardImage.
     * @param {BoardImageUpsertArgs} args - Arguments to update or create a BoardImage.
     * @example
     * // Update or create a BoardImage
     * const boardImage = await prisma.boardImage.upsert({
     *   create: {
     *     // ... data to create a BoardImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardImage we want to update
     *   }
     * })
    **/
    upsert<T extends BoardImageUpsertArgs>(
      args: SelectSubset<T, BoardImageUpsertArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Count the number of BoardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageCountArgs} args - Arguments to filter BoardImages to count.
     * @example
     * // Count the number of BoardImages
     * const count = await prisma.boardImage.count({
     *   where: {
     *     // ... the filter for the BoardImages we want to count
     *   }
     * })
    **/
    count<T extends BoardImageCountArgs>(
      args?: Subset<T, BoardImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardImageAggregateArgs>(args: Subset<T, BoardImageAggregateArgs>): PrismaPromise<GetBoardImageAggregateType<T>>

    /**
     * Group by BoardImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageGroupByArgs} args - Group by arguments.
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
      T extends BoardImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardImageGroupByArgs['orderBy'] }
        : { orderBy?: BoardImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoardImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Board<T extends BoardArgs = {}>(args?: Subset<T, BoardArgs>): CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BoardImage findUnique
   */
  export type BoardImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Throw an Error if a BoardImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage findFirst
   */
  export type BoardImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Throw an Error if a BoardImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardImages.
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardImages.
     * 
    **/
    distinct?: Enumerable<BoardImageScalarFieldEnum>
  }


  /**
   * BoardImage findMany
   */
  export type BoardImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter, which BoardImages to fetch.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardImages.
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardImageScalarFieldEnum>
  }


  /**
   * BoardImage create
   */
  export type BoardImageCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The data needed to create a BoardImage.
     * 
    **/
    data: XOR<BoardImageCreateInput, BoardImageUncheckedCreateInput>
  }


  /**
   * BoardImage createMany
   */
  export type BoardImageCreateManyArgs = {
    /**
     * The data used to create many BoardImages.
     * 
    **/
    data: Enumerable<BoardImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardImage update
   */
  export type BoardImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The data needed to update a BoardImage.
     * 
    **/
    data: XOR<BoardImageUpdateInput, BoardImageUncheckedUpdateInput>
    /**
     * Choose, which BoardImage to update.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage updateMany
   */
  export type BoardImageUpdateManyArgs = {
    /**
     * The data used to update BoardImages.
     * 
    **/
    data: XOR<BoardImageUpdateManyMutationInput, BoardImageUncheckedUpdateManyInput>
    /**
     * Filter which BoardImages to update
     * 
    **/
    where?: BoardImageWhereInput
  }


  /**
   * BoardImage upsert
   */
  export type BoardImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The filter to search for the BoardImage to update in case it exists.
     * 
    **/
    where: BoardImageWhereUniqueInput
    /**
     * In case the BoardImage found by the `where` argument doesn't exist, create a new BoardImage with this data.
     * 
    **/
    create: XOR<BoardImageCreateInput, BoardImageUncheckedCreateInput>
    /**
     * In case the BoardImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardImageUpdateInput, BoardImageUncheckedUpdateInput>
  }


  /**
   * BoardImage delete
   */
  export type BoardImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter which BoardImage to delete.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage deleteMany
   */
  export type BoardImageDeleteManyArgs = {
    /**
     * Filter which BoardImages to delete
     * 
    **/
    where?: BoardImageWhereInput
  }


  /**
   * BoardImage without action
   */
  export type BoardImageArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
  }



  /**
   * Model BoardReply
   */


  export type AggregateBoardReply = {
    _count: BoardReplyCountAggregateOutputType | null
    _avg: BoardReplyAvgAggregateOutputType | null
    _sum: BoardReplySumAggregateOutputType | null
    _min: BoardReplyMinAggregateOutputType | null
    _max: BoardReplyMaxAggregateOutputType | null
  }

  export type BoardReplyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
  }

  export type BoardReplySumAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
  }

  export type BoardReplyMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    isDisable: boolean | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
    boardType: BoardType | null
  }

  export type BoardReplyMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    isDisable: boolean | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
    boardType: BoardType | null
  }

  export type BoardReplyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    isDisable: number
    userId: number
    boardId: number
    boardReplyId: number
    boardType: number
    _all: number
  }


  export type BoardReplyAvgAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
  }

  export type BoardReplySumAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
  }

  export type BoardReplyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
  }

  export type BoardReplyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
  }

  export type BoardReplyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
    _all?: true
  }

  export type BoardReplyAggregateArgs = {
    /**
     * Filter which BoardReply to aggregate.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardReplies
    **/
    _count?: true | BoardReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardReplyMaxAggregateInputType
  }

  export type GetBoardReplyAggregateType<T extends BoardReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardReply[P]>
      : GetScalarType<T[P], AggregateBoardReply[P]>
  }




  export type BoardReplyGroupByArgs = {
    where?: BoardReplyWhereInput
    orderBy?: Enumerable<BoardReplyOrderByWithAggregationInput>
    by: Array<BoardReplyScalarFieldEnum>
    having?: BoardReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardReplyCountAggregateInputType | true
    _avg?: BoardReplyAvgAggregateInputType
    _sum?: BoardReplySumAggregateInputType
    _min?: BoardReplyMinAggregateInputType
    _max?: BoardReplyMaxAggregateInputType
  }


  export type BoardReplyGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date | null
    content: string
    isDisable: boolean
    userId: number
    boardId: number
    boardReplyId: number | null
    boardType: BoardType
    _count: BoardReplyCountAggregateOutputType | null
    _avg: BoardReplyAvgAggregateOutputType | null
    _sum: BoardReplySumAggregateOutputType | null
    _min: BoardReplyMinAggregateOutputType | null
    _max: BoardReplyMaxAggregateOutputType | null
  }

  type GetBoardReplyGroupByPayload<T extends BoardReplyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardReplyGroupByOutputType[P]>
            : GetScalarType<T[P], BoardReplyGroupByOutputType[P]>
        }
      >
    >


  export type BoardReplySelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    isDisable?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    boardId?: boolean
    Board?: boolean | BoardArgs
    boardReplyId?: boolean
    BoardReply?: boolean | BoardReplyArgs
    BoardNestedReply?: boolean | BoardReplyFindManyArgs
    boardType?: boolean
    _count?: boolean | BoardReplyCountOutputTypeArgs
  }

  export type BoardReplyInclude = {
    User?: boolean | UserArgs
    Board?: boolean | BoardArgs
    BoardReply?: boolean | BoardReplyArgs
    BoardNestedReply?: boolean | BoardReplyFindManyArgs
    _count?: boolean | BoardReplyCountOutputTypeArgs
  }

  export type BoardReplyGetPayload<
    S extends boolean | null | undefined | BoardReplyArgs,
    U = keyof S
      > = S extends true
        ? BoardReply
    : S extends undefined
    ? never
    : S extends BoardReplyArgs | BoardReplyFindManyArgs
    ?'include' extends U
    ? BoardReply  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Board' ? BoardGetPayload<S['include'][P]> :
        P extends 'BoardReply' ? BoardReplyGetPayload<S['include'][P]> | null :
        P extends 'BoardNestedReply' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoardReplyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Board' ? BoardGetPayload<S['select'][P]> :
        P extends 'BoardReply' ? BoardReplyGetPayload<S['select'][P]> | null :
        P extends 'BoardNestedReply' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends '_count' ? BoardReplyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BoardReply ? BoardReply[P] : never
  } 
    : BoardReply
  : BoardReply


  type BoardReplyCountArgs = Merge<
    Omit<BoardReplyFindManyArgs, 'select' | 'include'> & {
      select?: BoardReplyCountAggregateInputType | true
    }
  >

  export interface BoardReplyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one BoardReply that matches the filter.
     * @param {BoardReplyFindUniqueArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardReplyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardReplyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardReply'> extends True ? CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>> : CheckSelect<T, Prisma__BoardReplyClient<BoardReply | null >, Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null >>

    /**
     * Find the first BoardReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyFindFirstArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardReplyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardReplyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardReply'> extends True ? CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>> : CheckSelect<T, Prisma__BoardReplyClient<BoardReply | null >, Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null >>

    /**
     * Find zero or more BoardReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardReplies
     * const boardReplies = await prisma.boardReply.findMany()
     * 
     * // Get first 10 BoardReplies
     * const boardReplies = await prisma.boardReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardReplyWithIdOnly = await prisma.boardReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardReplyFindManyArgs>(
      args?: SelectSubset<T, BoardReplyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>

    /**
     * Create a BoardReply.
     * @param {BoardReplyCreateArgs} args - Arguments to create a BoardReply.
     * @example
     * // Create one BoardReply
     * const BoardReply = await prisma.boardReply.create({
     *   data: {
     *     // ... data to create a BoardReply
     *   }
     * })
     * 
    **/
    create<T extends BoardReplyCreateArgs>(
      args: SelectSubset<T, BoardReplyCreateArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Create many BoardReplies.
     *     @param {BoardReplyCreateManyArgs} args - Arguments to create many BoardReplies.
     *     @example
     *     // Create many BoardReplies
     *     const boardReply = await prisma.boardReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardReplyCreateManyArgs>(
      args?: SelectSubset<T, BoardReplyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BoardReply.
     * @param {BoardReplyDeleteArgs} args - Arguments to delete one BoardReply.
     * @example
     * // Delete one BoardReply
     * const BoardReply = await prisma.boardReply.delete({
     *   where: {
     *     // ... filter to delete one BoardReply
     *   }
     * })
     * 
    **/
    delete<T extends BoardReplyDeleteArgs>(
      args: SelectSubset<T, BoardReplyDeleteArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Update one BoardReply.
     * @param {BoardReplyUpdateArgs} args - Arguments to update one BoardReply.
     * @example
     * // Update one BoardReply
     * const boardReply = await prisma.boardReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardReplyUpdateArgs>(
      args: SelectSubset<T, BoardReplyUpdateArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Delete zero or more BoardReplies.
     * @param {BoardReplyDeleteManyArgs} args - Arguments to filter BoardReplies to delete.
     * @example
     * // Delete a few BoardReplies
     * const { count } = await prisma.boardReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardReplyDeleteManyArgs>(
      args?: SelectSubset<T, BoardReplyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardReplies
     * const boardReply = await prisma.boardReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardReplyUpdateManyArgs>(
      args: SelectSubset<T, BoardReplyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardReply.
     * @param {BoardReplyUpsertArgs} args - Arguments to update or create a BoardReply.
     * @example
     * // Update or create a BoardReply
     * const boardReply = await prisma.boardReply.upsert({
     *   create: {
     *     // ... data to create a BoardReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardReply we want to update
     *   }
     * })
    **/
    upsert<T extends BoardReplyUpsertArgs>(
      args: SelectSubset<T, BoardReplyUpsertArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Count the number of BoardReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyCountArgs} args - Arguments to filter BoardReplies to count.
     * @example
     * // Count the number of BoardReplies
     * const count = await prisma.boardReply.count({
     *   where: {
     *     // ... the filter for the BoardReplies we want to count
     *   }
     * })
    **/
    count<T extends BoardReplyCountArgs>(
      args?: Subset<T, BoardReplyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardReplyAggregateArgs>(args: Subset<T, BoardReplyAggregateArgs>): PrismaPromise<GetBoardReplyAggregateType<T>>

    /**
     * Group by BoardReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyGroupByArgs} args - Group by arguments.
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
      T extends BoardReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardReplyGroupByArgs['orderBy'] }
        : { orderBy?: BoardReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoardReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardReplyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardReplyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Board<T extends BoardArgs = {}>(args?: Subset<T, BoardArgs>): CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>;

    BoardReply<T extends BoardReplyArgs = {}>(args?: Subset<T, BoardReplyArgs>): CheckSelect<T, Prisma__BoardReplyClient<BoardReply | null >, Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null >>;

    BoardNestedReply<T extends BoardReplyFindManyArgs = {}>(args?: Subset<T, BoardReplyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BoardReply findUnique
   */
  export type BoardReplyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Throw an Error if a BoardReply can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply findFirst
   */
  export type BoardReplyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Throw an Error if a BoardReply can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardReplies.
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardReplies.
     * 
    **/
    distinct?: Enumerable<BoardReplyScalarFieldEnum>
  }


  /**
   * BoardReply findMany
   */
  export type BoardReplyFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter, which BoardReplies to fetch.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardReplies.
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardReplyScalarFieldEnum>
  }


  /**
   * BoardReply create
   */
  export type BoardReplyCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The data needed to create a BoardReply.
     * 
    **/
    data: XOR<BoardReplyCreateInput, BoardReplyUncheckedCreateInput>
  }


  /**
   * BoardReply createMany
   */
  export type BoardReplyCreateManyArgs = {
    /**
     * The data used to create many BoardReplies.
     * 
    **/
    data: Enumerable<BoardReplyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardReply update
   */
  export type BoardReplyUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The data needed to update a BoardReply.
     * 
    **/
    data: XOR<BoardReplyUpdateInput, BoardReplyUncheckedUpdateInput>
    /**
     * Choose, which BoardReply to update.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply updateMany
   */
  export type BoardReplyUpdateManyArgs = {
    /**
     * The data used to update BoardReplies.
     * 
    **/
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyInput>
    /**
     * Filter which BoardReplies to update
     * 
    **/
    where?: BoardReplyWhereInput
  }


  /**
   * BoardReply upsert
   */
  export type BoardReplyUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The filter to search for the BoardReply to update in case it exists.
     * 
    **/
    where: BoardReplyWhereUniqueInput
    /**
     * In case the BoardReply found by the `where` argument doesn't exist, create a new BoardReply with this data.
     * 
    **/
    create: XOR<BoardReplyCreateInput, BoardReplyUncheckedCreateInput>
    /**
     * In case the BoardReply was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardReplyUpdateInput, BoardReplyUncheckedUpdateInput>
  }


  /**
   * BoardReply delete
   */
  export type BoardReplyDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter which BoardReply to delete.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply deleteMany
   */
  export type BoardReplyDeleteManyArgs = {
    /**
     * Filter which BoardReplies to delete
     * 
    **/
    where?: BoardReplyWhereInput
  }


  /**
   * BoardReply without action
   */
  export type BoardReplyArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
  }



  /**
   * Model BodyPart
   */


  export type AggregateBodyPart = {
    _count: BodyPartCountAggregateOutputType | null
    _avg: BodyPartAvgAggregateOutputType | null
    _sum: BodyPartSumAggregateOutputType | null
    _min: BodyPartMinAggregateOutputType | null
    _max: BodyPartMaxAggregateOutputType | null
  }

  export type BodyPartAvgAggregateOutputType = {
    id: number | null
  }

  export type BodyPartSumAggregateOutputType = {
    id: number | null
  }

  export type BodyPartMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    code: string | null
    category: string | null
  }

  export type BodyPartMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    code: string | null
    category: string | null
  }

  export type BodyPartCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    code: number
    category: number
    _all: number
  }


  export type BodyPartAvgAggregateInputType = {
    id?: true
  }

  export type BodyPartSumAggregateInputType = {
    id?: true
  }

  export type BodyPartMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    code?: true
    category?: true
  }

  export type BodyPartMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    code?: true
    category?: true
  }

  export type BodyPartCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    code?: true
    category?: true
    _all?: true
  }

  export type BodyPartAggregateArgs = {
    /**
     * Filter which BodyPart to aggregate.
     * 
    **/
    where?: BodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyParts to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyPartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyParts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyParts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyParts
    **/
    _count?: true | BodyPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyPartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyPartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyPartMaxAggregateInputType
  }

  export type GetBodyPartAggregateType<T extends BodyPartAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyPart[P]>
      : GetScalarType<T[P], AggregateBodyPart[P]>
  }




  export type BodyPartGroupByArgs = {
    where?: BodyPartWhereInput
    orderBy?: Enumerable<BodyPartOrderByWithAggregationInput>
    by: Array<BodyPartScalarFieldEnum>
    having?: BodyPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyPartCountAggregateInputType | true
    _avg?: BodyPartAvgAggregateInputType
    _sum?: BodyPartSumAggregateInputType
    _min?: BodyPartMinAggregateInputType
    _max?: BodyPartMaxAggregateInputType
  }


  export type BodyPartGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    code: string
    category: string
    _count: BodyPartCountAggregateOutputType | null
    _avg: BodyPartAvgAggregateOutputType | null
    _sum: BodyPartSumAggregateOutputType | null
    _min: BodyPartMinAggregateOutputType | null
    _max: BodyPartMaxAggregateOutputType | null
  }

  type GetBodyPartGroupByPayload<T extends BodyPartGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BodyPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyPartGroupByOutputType[P]>
            : GetScalarType<T[P], BodyPartGroupByOutputType[P]>
        }
      >
    >


  export type BodyPartSelect = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    code?: boolean
    category?: boolean
    GymEquipments?: boolean | BodyPartsOnGymEquipmentsFindManyArgs
    _count?: boolean | BodyPartCountOutputTypeArgs
  }

  export type BodyPartInclude = {
    GymEquipments?: boolean | BodyPartsOnGymEquipmentsFindManyArgs
    _count?: boolean | BodyPartCountOutputTypeArgs
  }

  export type BodyPartGetPayload<
    S extends boolean | null | undefined | BodyPartArgs,
    U = keyof S
      > = S extends true
        ? BodyPart
    : S extends undefined
    ? never
    : S extends BodyPartArgs | BodyPartFindManyArgs
    ?'include' extends U
    ? BodyPart  & {
    [P in TrueKeys<S['include']>]:
        P extends 'GymEquipments' ? Array < BodyPartsOnGymEquipmentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? BodyPartCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'GymEquipments' ? Array < BodyPartsOnGymEquipmentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? BodyPartCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BodyPart ? BodyPart[P] : never
  } 
    : BodyPart
  : BodyPart


  type BodyPartCountArgs = Merge<
    Omit<BodyPartFindManyArgs, 'select' | 'include'> & {
      select?: BodyPartCountAggregateInputType | true
    }
  >

  export interface BodyPartDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one BodyPart that matches the filter.
     * @param {BodyPartFindUniqueArgs} args - Arguments to find a BodyPart
     * @example
     * // Get one BodyPart
     * const bodyPart = await prisma.bodyPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BodyPartFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BodyPartFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BodyPart'> extends True ? CheckSelect<T, Prisma__BodyPartClient<BodyPart>, Prisma__BodyPartClient<BodyPartGetPayload<T>>> : CheckSelect<T, Prisma__BodyPartClient<BodyPart | null >, Prisma__BodyPartClient<BodyPartGetPayload<T> | null >>

    /**
     * Find the first BodyPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartFindFirstArgs} args - Arguments to find a BodyPart
     * @example
     * // Get one BodyPart
     * const bodyPart = await prisma.bodyPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BodyPartFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BodyPartFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BodyPart'> extends True ? CheckSelect<T, Prisma__BodyPartClient<BodyPart>, Prisma__BodyPartClient<BodyPartGetPayload<T>>> : CheckSelect<T, Prisma__BodyPartClient<BodyPart | null >, Prisma__BodyPartClient<BodyPartGetPayload<T> | null >>

    /**
     * Find zero or more BodyParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyParts
     * const bodyParts = await prisma.bodyPart.findMany()
     * 
     * // Get first 10 BodyParts
     * const bodyParts = await prisma.bodyPart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyPartWithIdOnly = await prisma.bodyPart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BodyPartFindManyArgs>(
      args?: SelectSubset<T, BodyPartFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BodyPart>>, PrismaPromise<Array<BodyPartGetPayload<T>>>>

    /**
     * Create a BodyPart.
     * @param {BodyPartCreateArgs} args - Arguments to create a BodyPart.
     * @example
     * // Create one BodyPart
     * const BodyPart = await prisma.bodyPart.create({
     *   data: {
     *     // ... data to create a BodyPart
     *   }
     * })
     * 
    **/
    create<T extends BodyPartCreateArgs>(
      args: SelectSubset<T, BodyPartCreateArgs>
    ): CheckSelect<T, Prisma__BodyPartClient<BodyPart>, Prisma__BodyPartClient<BodyPartGetPayload<T>>>

    /**
     * Create many BodyParts.
     *     @param {BodyPartCreateManyArgs} args - Arguments to create many BodyParts.
     *     @example
     *     // Create many BodyParts
     *     const bodyPart = await prisma.bodyPart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BodyPartCreateManyArgs>(
      args?: SelectSubset<T, BodyPartCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BodyPart.
     * @param {BodyPartDeleteArgs} args - Arguments to delete one BodyPart.
     * @example
     * // Delete one BodyPart
     * const BodyPart = await prisma.bodyPart.delete({
     *   where: {
     *     // ... filter to delete one BodyPart
     *   }
     * })
     * 
    **/
    delete<T extends BodyPartDeleteArgs>(
      args: SelectSubset<T, BodyPartDeleteArgs>
    ): CheckSelect<T, Prisma__BodyPartClient<BodyPart>, Prisma__BodyPartClient<BodyPartGetPayload<T>>>

    /**
     * Update one BodyPart.
     * @param {BodyPartUpdateArgs} args - Arguments to update one BodyPart.
     * @example
     * // Update one BodyPart
     * const bodyPart = await prisma.bodyPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BodyPartUpdateArgs>(
      args: SelectSubset<T, BodyPartUpdateArgs>
    ): CheckSelect<T, Prisma__BodyPartClient<BodyPart>, Prisma__BodyPartClient<BodyPartGetPayload<T>>>

    /**
     * Delete zero or more BodyParts.
     * @param {BodyPartDeleteManyArgs} args - Arguments to filter BodyParts to delete.
     * @example
     * // Delete a few BodyParts
     * const { count } = await prisma.bodyPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BodyPartDeleteManyArgs>(
      args?: SelectSubset<T, BodyPartDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyParts
     * const bodyPart = await prisma.bodyPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BodyPartUpdateManyArgs>(
      args: SelectSubset<T, BodyPartUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BodyPart.
     * @param {BodyPartUpsertArgs} args - Arguments to update or create a BodyPart.
     * @example
     * // Update or create a BodyPart
     * const bodyPart = await prisma.bodyPart.upsert({
     *   create: {
     *     // ... data to create a BodyPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyPart we want to update
     *   }
     * })
    **/
    upsert<T extends BodyPartUpsertArgs>(
      args: SelectSubset<T, BodyPartUpsertArgs>
    ): CheckSelect<T, Prisma__BodyPartClient<BodyPart>, Prisma__BodyPartClient<BodyPartGetPayload<T>>>

    /**
     * Count the number of BodyParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartCountArgs} args - Arguments to filter BodyParts to count.
     * @example
     * // Count the number of BodyParts
     * const count = await prisma.bodyPart.count({
     *   where: {
     *     // ... the filter for the BodyParts we want to count
     *   }
     * })
    **/
    count<T extends BodyPartCountArgs>(
      args?: Subset<T, BodyPartCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyPartAggregateArgs>(args: Subset<T, BodyPartAggregateArgs>): PrismaPromise<GetBodyPartAggregateType<T>>

    /**
     * Group by BodyPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartGroupByArgs} args - Group by arguments.
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
      T extends BodyPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyPartGroupByArgs['orderBy'] }
        : { orderBy?: BodyPartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BodyPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyPartGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BodyPartClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    GymEquipments<T extends BodyPartsOnGymEquipmentsFindManyArgs = {}>(args?: Subset<T, BodyPartsOnGymEquipmentsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BodyPartsOnGymEquipments>>, PrismaPromise<Array<BodyPartsOnGymEquipmentsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BodyPart findUnique
   */
  export type BodyPartFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
    /**
     * Throw an Error if a BodyPart can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BodyPart to fetch.
     * 
    **/
    where: BodyPartWhereUniqueInput
  }


  /**
   * BodyPart findFirst
   */
  export type BodyPartFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
    /**
     * Throw an Error if a BodyPart can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BodyPart to fetch.
     * 
    **/
    where?: BodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyParts to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyPartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyParts.
     * 
    **/
    cursor?: BodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyParts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyParts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyParts.
     * 
    **/
    distinct?: Enumerable<BodyPartScalarFieldEnum>
  }


  /**
   * BodyPart findMany
   */
  export type BodyPartFindManyArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
    /**
     * Filter, which BodyParts to fetch.
     * 
    **/
    where?: BodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyParts to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyPartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyParts.
     * 
    **/
    cursor?: BodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyParts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyParts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BodyPartScalarFieldEnum>
  }


  /**
   * BodyPart create
   */
  export type BodyPartCreateArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
    /**
     * The data needed to create a BodyPart.
     * 
    **/
    data: XOR<BodyPartCreateInput, BodyPartUncheckedCreateInput>
  }


  /**
   * BodyPart createMany
   */
  export type BodyPartCreateManyArgs = {
    /**
     * The data used to create many BodyParts.
     * 
    **/
    data: Enumerable<BodyPartCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BodyPart update
   */
  export type BodyPartUpdateArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
    /**
     * The data needed to update a BodyPart.
     * 
    **/
    data: XOR<BodyPartUpdateInput, BodyPartUncheckedUpdateInput>
    /**
     * Choose, which BodyPart to update.
     * 
    **/
    where: BodyPartWhereUniqueInput
  }


  /**
   * BodyPart updateMany
   */
  export type BodyPartUpdateManyArgs = {
    /**
     * The data used to update BodyParts.
     * 
    **/
    data: XOR<BodyPartUpdateManyMutationInput, BodyPartUncheckedUpdateManyInput>
    /**
     * Filter which BodyParts to update
     * 
    **/
    where?: BodyPartWhereInput
  }


  /**
   * BodyPart upsert
   */
  export type BodyPartUpsertArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
    /**
     * The filter to search for the BodyPart to update in case it exists.
     * 
    **/
    where: BodyPartWhereUniqueInput
    /**
     * In case the BodyPart found by the `where` argument doesn't exist, create a new BodyPart with this data.
     * 
    **/
    create: XOR<BodyPartCreateInput, BodyPartUncheckedCreateInput>
    /**
     * In case the BodyPart was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BodyPartUpdateInput, BodyPartUncheckedUpdateInput>
  }


  /**
   * BodyPart delete
   */
  export type BodyPartDeleteArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
    /**
     * Filter which BodyPart to delete.
     * 
    **/
    where: BodyPartWhereUniqueInput
  }


  /**
   * BodyPart deleteMany
   */
  export type BodyPartDeleteManyArgs = {
    /**
     * Filter which BodyParts to delete
     * 
    **/
    where?: BodyPartWhereInput
  }


  /**
   * BodyPart without action
   */
  export type BodyPartArgs = {
    /**
     * Select specific fields to fetch from the BodyPart
     * 
    **/
    select?: BodyPartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartInclude | null
  }



  /**
   * Model GymEquipment
   */


  export type AggregateGymEquipment = {
    _count: GymEquipmentCountAggregateOutputType | null
    _avg: GymEquipmentAvgAggregateOutputType | null
    _sum: GymEquipmentSumAggregateOutputType | null
    _min: GymEquipmentMinAggregateOutputType | null
    _max: GymEquipmentMaxAggregateOutputType | null
  }

  export type GymEquipmentAvgAggregateOutputType = {
    id: number | null
  }

  export type GymEquipmentSumAggregateOutputType = {
    id: number | null
  }

  export type GymEquipmentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    brandName: string | null
    code: string | null
    isDisable: boolean | null
  }

  export type GymEquipmentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    brandName: string | null
    code: string | null
    isDisable: boolean | null
  }

  export type GymEquipmentCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    brandName: number
    code: number
    isDisable: number
    _all: number
  }


  export type GymEquipmentAvgAggregateInputType = {
    id?: true
  }

  export type GymEquipmentSumAggregateInputType = {
    id?: true
  }

  export type GymEquipmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    brandName?: true
    code?: true
    isDisable?: true
  }

  export type GymEquipmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    brandName?: true
    code?: true
    isDisable?: true
  }

  export type GymEquipmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    brandName?: true
    code?: true
    isDisable?: true
    _all?: true
  }

  export type GymEquipmentAggregateArgs = {
    /**
     * Filter which GymEquipment to aggregate.
     * 
    **/
    where?: GymEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipments to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymEquipments
    **/
    _count?: true | GymEquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymEquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymEquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymEquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymEquipmentMaxAggregateInputType
  }

  export type GetGymEquipmentAggregateType<T extends GymEquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateGymEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymEquipment[P]>
      : GetScalarType<T[P], AggregateGymEquipment[P]>
  }




  export type GymEquipmentGroupByArgs = {
    where?: GymEquipmentWhereInput
    orderBy?: Enumerable<GymEquipmentOrderByWithAggregationInput>
    by: Array<GymEquipmentScalarFieldEnum>
    having?: GymEquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymEquipmentCountAggregateInputType | true
    _avg?: GymEquipmentAvgAggregateInputType
    _sum?: GymEquipmentSumAggregateInputType
    _min?: GymEquipmentMinAggregateInputType
    _max?: GymEquipmentMaxAggregateInputType
  }


  export type GymEquipmentGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    brandName: string
    code: string
    isDisable: boolean
    _count: GymEquipmentCountAggregateOutputType | null
    _avg: GymEquipmentAvgAggregateOutputType | null
    _sum: GymEquipmentSumAggregateOutputType | null
    _min: GymEquipmentMinAggregateOutputType | null
    _max: GymEquipmentMaxAggregateOutputType | null
  }

  type GetGymEquipmentGroupByPayload<T extends GymEquipmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymEquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymEquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymEquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], GymEquipmentGroupByOutputType[P]>
        }
      >
    >


  export type GymEquipmentSelect = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    brandName?: boolean
    code?: boolean
    isDisable?: boolean
    BodyParts?: boolean | BodyPartsOnGymEquipmentsFindManyArgs
    Gyms?: boolean | GymEuquipmentsOnGymsFindManyArgs
    GymEquipmentImage?: boolean | GymEquipmentImageFindManyArgs
    _count?: boolean | GymEquipmentCountOutputTypeArgs
  }

  export type GymEquipmentInclude = {
    BodyParts?: boolean | BodyPartsOnGymEquipmentsFindManyArgs
    Gyms?: boolean | GymEuquipmentsOnGymsFindManyArgs
    GymEquipmentImage?: boolean | GymEquipmentImageFindManyArgs
    _count?: boolean | GymEquipmentCountOutputTypeArgs
  }

  export type GymEquipmentGetPayload<
    S extends boolean | null | undefined | GymEquipmentArgs,
    U = keyof S
      > = S extends true
        ? GymEquipment
    : S extends undefined
    ? never
    : S extends GymEquipmentArgs | GymEquipmentFindManyArgs
    ?'include' extends U
    ? GymEquipment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'BodyParts' ? Array < BodyPartsOnGymEquipmentsGetPayload<S['include'][P]>>  :
        P extends 'Gyms' ? Array < GymEuquipmentsOnGymsGetPayload<S['include'][P]>>  :
        P extends 'GymEquipmentImage' ? Array < GymEquipmentImageGetPayload<S['include'][P]>>  :
        P extends '_count' ? GymEquipmentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'BodyParts' ? Array < BodyPartsOnGymEquipmentsGetPayload<S['select'][P]>>  :
        P extends 'Gyms' ? Array < GymEuquipmentsOnGymsGetPayload<S['select'][P]>>  :
        P extends 'GymEquipmentImage' ? Array < GymEquipmentImageGetPayload<S['select'][P]>>  :
        P extends '_count' ? GymEquipmentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GymEquipment ? GymEquipment[P] : never
  } 
    : GymEquipment
  : GymEquipment


  type GymEquipmentCountArgs = Merge<
    Omit<GymEquipmentFindManyArgs, 'select' | 'include'> & {
      select?: GymEquipmentCountAggregateInputType | true
    }
  >

  export interface GymEquipmentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymEquipment that matches the filter.
     * @param {GymEquipmentFindUniqueArgs} args - Arguments to find a GymEquipment
     * @example
     * // Get one GymEquipment
     * const gymEquipment = await prisma.gymEquipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymEquipmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymEquipmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymEquipment'> extends True ? CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment>, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T>>> : CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment | null >, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T> | null >>

    /**
     * Find the first GymEquipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentFindFirstArgs} args - Arguments to find a GymEquipment
     * @example
     * // Get one GymEquipment
     * const gymEquipment = await prisma.gymEquipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymEquipmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymEquipmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymEquipment'> extends True ? CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment>, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T>>> : CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment | null >, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T> | null >>

    /**
     * Find zero or more GymEquipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymEquipments
     * const gymEquipments = await prisma.gymEquipment.findMany()
     * 
     * // Get first 10 GymEquipments
     * const gymEquipments = await prisma.gymEquipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymEquipmentWithIdOnly = await prisma.gymEquipment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymEquipmentFindManyArgs>(
      args?: SelectSubset<T, GymEquipmentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymEquipment>>, PrismaPromise<Array<GymEquipmentGetPayload<T>>>>

    /**
     * Create a GymEquipment.
     * @param {GymEquipmentCreateArgs} args - Arguments to create a GymEquipment.
     * @example
     * // Create one GymEquipment
     * const GymEquipment = await prisma.gymEquipment.create({
     *   data: {
     *     // ... data to create a GymEquipment
     *   }
     * })
     * 
    **/
    create<T extends GymEquipmentCreateArgs>(
      args: SelectSubset<T, GymEquipmentCreateArgs>
    ): CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment>, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T>>>

    /**
     * Create many GymEquipments.
     *     @param {GymEquipmentCreateManyArgs} args - Arguments to create many GymEquipments.
     *     @example
     *     // Create many GymEquipments
     *     const gymEquipment = await prisma.gymEquipment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymEquipmentCreateManyArgs>(
      args?: SelectSubset<T, GymEquipmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymEquipment.
     * @param {GymEquipmentDeleteArgs} args - Arguments to delete one GymEquipment.
     * @example
     * // Delete one GymEquipment
     * const GymEquipment = await prisma.gymEquipment.delete({
     *   where: {
     *     // ... filter to delete one GymEquipment
     *   }
     * })
     * 
    **/
    delete<T extends GymEquipmentDeleteArgs>(
      args: SelectSubset<T, GymEquipmentDeleteArgs>
    ): CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment>, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T>>>

    /**
     * Update one GymEquipment.
     * @param {GymEquipmentUpdateArgs} args - Arguments to update one GymEquipment.
     * @example
     * // Update one GymEquipment
     * const gymEquipment = await prisma.gymEquipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymEquipmentUpdateArgs>(
      args: SelectSubset<T, GymEquipmentUpdateArgs>
    ): CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment>, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T>>>

    /**
     * Delete zero or more GymEquipments.
     * @param {GymEquipmentDeleteManyArgs} args - Arguments to filter GymEquipments to delete.
     * @example
     * // Delete a few GymEquipments
     * const { count } = await prisma.gymEquipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymEquipmentDeleteManyArgs>(
      args?: SelectSubset<T, GymEquipmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymEquipments
     * const gymEquipment = await prisma.gymEquipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymEquipmentUpdateManyArgs>(
      args: SelectSubset<T, GymEquipmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymEquipment.
     * @param {GymEquipmentUpsertArgs} args - Arguments to update or create a GymEquipment.
     * @example
     * // Update or create a GymEquipment
     * const gymEquipment = await prisma.gymEquipment.upsert({
     *   create: {
     *     // ... data to create a GymEquipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymEquipment we want to update
     *   }
     * })
    **/
    upsert<T extends GymEquipmentUpsertArgs>(
      args: SelectSubset<T, GymEquipmentUpsertArgs>
    ): CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment>, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T>>>

    /**
     * Count the number of GymEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentCountArgs} args - Arguments to filter GymEquipments to count.
     * @example
     * // Count the number of GymEquipments
     * const count = await prisma.gymEquipment.count({
     *   where: {
     *     // ... the filter for the GymEquipments we want to count
     *   }
     * })
    **/
    count<T extends GymEquipmentCountArgs>(
      args?: Subset<T, GymEquipmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymEquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymEquipmentAggregateArgs>(args: Subset<T, GymEquipmentAggregateArgs>): PrismaPromise<GetGymEquipmentAggregateType<T>>

    /**
     * Group by GymEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentGroupByArgs} args - Group by arguments.
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
      T extends GymEquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymEquipmentGroupByArgs['orderBy'] }
        : { orderBy?: GymEquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymEquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymEquipmentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymEquipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymEquipmentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    BodyParts<T extends BodyPartsOnGymEquipmentsFindManyArgs = {}>(args?: Subset<T, BodyPartsOnGymEquipmentsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BodyPartsOnGymEquipments>>, PrismaPromise<Array<BodyPartsOnGymEquipmentsGetPayload<T>>>>;

    Gyms<T extends GymEuquipmentsOnGymsFindManyArgs = {}>(args?: Subset<T, GymEuquipmentsOnGymsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymEuquipmentsOnGyms>>, PrismaPromise<Array<GymEuquipmentsOnGymsGetPayload<T>>>>;

    GymEquipmentImage<T extends GymEquipmentImageFindManyArgs = {}>(args?: Subset<T, GymEquipmentImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymEquipmentImage>>, PrismaPromise<Array<GymEquipmentImageGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymEquipment findUnique
   */
  export type GymEquipmentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
    /**
     * Throw an Error if a GymEquipment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEquipment to fetch.
     * 
    **/
    where: GymEquipmentWhereUniqueInput
  }


  /**
   * GymEquipment findFirst
   */
  export type GymEquipmentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
    /**
     * Throw an Error if a GymEquipment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEquipment to fetch.
     * 
    **/
    where?: GymEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipments to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymEquipments.
     * 
    **/
    cursor?: GymEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymEquipments.
     * 
    **/
    distinct?: Enumerable<GymEquipmentScalarFieldEnum>
  }


  /**
   * GymEquipment findMany
   */
  export type GymEquipmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
    /**
     * Filter, which GymEquipments to fetch.
     * 
    **/
    where?: GymEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipments to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymEquipments.
     * 
    **/
    cursor?: GymEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymEquipmentScalarFieldEnum>
  }


  /**
   * GymEquipment create
   */
  export type GymEquipmentCreateArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
    /**
     * The data needed to create a GymEquipment.
     * 
    **/
    data: XOR<GymEquipmentCreateInput, GymEquipmentUncheckedCreateInput>
  }


  /**
   * GymEquipment createMany
   */
  export type GymEquipmentCreateManyArgs = {
    /**
     * The data used to create many GymEquipments.
     * 
    **/
    data: Enumerable<GymEquipmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymEquipment update
   */
  export type GymEquipmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
    /**
     * The data needed to update a GymEquipment.
     * 
    **/
    data: XOR<GymEquipmentUpdateInput, GymEquipmentUncheckedUpdateInput>
    /**
     * Choose, which GymEquipment to update.
     * 
    **/
    where: GymEquipmentWhereUniqueInput
  }


  /**
   * GymEquipment updateMany
   */
  export type GymEquipmentUpdateManyArgs = {
    /**
     * The data used to update GymEquipments.
     * 
    **/
    data: XOR<GymEquipmentUpdateManyMutationInput, GymEquipmentUncheckedUpdateManyInput>
    /**
     * Filter which GymEquipments to update
     * 
    **/
    where?: GymEquipmentWhereInput
  }


  /**
   * GymEquipment upsert
   */
  export type GymEquipmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
    /**
     * The filter to search for the GymEquipment to update in case it exists.
     * 
    **/
    where: GymEquipmentWhereUniqueInput
    /**
     * In case the GymEquipment found by the `where` argument doesn't exist, create a new GymEquipment with this data.
     * 
    **/
    create: XOR<GymEquipmentCreateInput, GymEquipmentUncheckedCreateInput>
    /**
     * In case the GymEquipment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymEquipmentUpdateInput, GymEquipmentUncheckedUpdateInput>
  }


  /**
   * GymEquipment delete
   */
  export type GymEquipmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
    /**
     * Filter which GymEquipment to delete.
     * 
    **/
    where: GymEquipmentWhereUniqueInput
  }


  /**
   * GymEquipment deleteMany
   */
  export type GymEquipmentDeleteManyArgs = {
    /**
     * Filter which GymEquipments to delete
     * 
    **/
    where?: GymEquipmentWhereInput
  }


  /**
   * GymEquipment without action
   */
  export type GymEquipmentArgs = {
    /**
     * Select specific fields to fetch from the GymEquipment
     * 
    **/
    select?: GymEquipmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentInclude | null
  }



  /**
   * Model GymEquipmentImage
   */


  export type AggregateGymEquipmentImage = {
    _count: GymEquipmentImageCountAggregateOutputType | null
    _avg: GymEquipmentImageAvgAggregateOutputType | null
    _sum: GymEquipmentImageSumAggregateOutputType | null
    _min: GymEquipmentImageMinAggregateOutputType | null
    _max: GymEquipmentImageMaxAggregateOutputType | null
  }

  export type GymEquipmentImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    gymEquipmentId: number | null
  }

  export type GymEquipmentImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    gymEquipmentId: number | null
  }

  export type GymEquipmentImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    gymEquipmentId: number | null
  }

  export type GymEquipmentImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    gymEquipmentId: number | null
  }

  export type GymEquipmentImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    isThumb: number
    gymEquipmentId: number
    _all: number
  }


  export type GymEquipmentImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    gymEquipmentId?: true
  }

  export type GymEquipmentImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    gymEquipmentId?: true
  }

  export type GymEquipmentImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    gymEquipmentId?: true
  }

  export type GymEquipmentImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    gymEquipmentId?: true
  }

  export type GymEquipmentImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    gymEquipmentId?: true
    _all?: true
  }

  export type GymEquipmentImageAggregateArgs = {
    /**
     * Filter which GymEquipmentImage to aggregate.
     * 
    **/
    where?: GymEquipmentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipmentImages to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymEquipmentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipmentImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipmentImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymEquipmentImages
    **/
    _count?: true | GymEquipmentImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymEquipmentImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymEquipmentImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymEquipmentImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymEquipmentImageMaxAggregateInputType
  }

  export type GetGymEquipmentImageAggregateType<T extends GymEquipmentImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGymEquipmentImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymEquipmentImage[P]>
      : GetScalarType<T[P], AggregateGymEquipmentImage[P]>
  }




  export type GymEquipmentImageGroupByArgs = {
    where?: GymEquipmentImageWhereInput
    orderBy?: Enumerable<GymEquipmentImageOrderByWithAggregationInput>
    by: Array<GymEquipmentImageScalarFieldEnum>
    having?: GymEquipmentImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymEquipmentImageCountAggregateInputType | true
    _avg?: GymEquipmentImageAvgAggregateInputType
    _sum?: GymEquipmentImageSumAggregateInputType
    _min?: GymEquipmentImageMinAggregateInputType
    _max?: GymEquipmentImageMaxAggregateInputType
  }


  export type GymEquipmentImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    isThumb: boolean
    gymEquipmentId: number
    _count: GymEquipmentImageCountAggregateOutputType | null
    _avg: GymEquipmentImageAvgAggregateOutputType | null
    _sum: GymEquipmentImageSumAggregateOutputType | null
    _min: GymEquipmentImageMinAggregateOutputType | null
    _max: GymEquipmentImageMaxAggregateOutputType | null
  }

  type GetGymEquipmentImageGroupByPayload<T extends GymEquipmentImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymEquipmentImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymEquipmentImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymEquipmentImageGroupByOutputType[P]>
            : GetScalarType<T[P], GymEquipmentImageGroupByOutputType[P]>
        }
      >
    >


  export type GymEquipmentImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    isThumb?: boolean
    gymEquipmentId?: boolean
    GymEquipment?: boolean | GymEquipmentArgs
  }

  export type GymEquipmentImageInclude = {
    GymEquipment?: boolean | GymEquipmentArgs
  }

  export type GymEquipmentImageGetPayload<
    S extends boolean | null | undefined | GymEquipmentImageArgs,
    U = keyof S
      > = S extends true
        ? GymEquipmentImage
    : S extends undefined
    ? never
    : S extends GymEquipmentImageArgs | GymEquipmentImageFindManyArgs
    ?'include' extends U
    ? GymEquipmentImage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'GymEquipment' ? GymEquipmentGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'GymEquipment' ? GymEquipmentGetPayload<S['select'][P]> :  P extends keyof GymEquipmentImage ? GymEquipmentImage[P] : never
  } 
    : GymEquipmentImage
  : GymEquipmentImage


  type GymEquipmentImageCountArgs = Merge<
    Omit<GymEquipmentImageFindManyArgs, 'select' | 'include'> & {
      select?: GymEquipmentImageCountAggregateInputType | true
    }
  >

  export interface GymEquipmentImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymEquipmentImage that matches the filter.
     * @param {GymEquipmentImageFindUniqueArgs} args - Arguments to find a GymEquipmentImage
     * @example
     * // Get one GymEquipmentImage
     * const gymEquipmentImage = await prisma.gymEquipmentImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymEquipmentImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymEquipmentImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymEquipmentImage'> extends True ? CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage>, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T>>> : CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage | null >, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T> | null >>

    /**
     * Find the first GymEquipmentImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentImageFindFirstArgs} args - Arguments to find a GymEquipmentImage
     * @example
     * // Get one GymEquipmentImage
     * const gymEquipmentImage = await prisma.gymEquipmentImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymEquipmentImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymEquipmentImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymEquipmentImage'> extends True ? CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage>, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T>>> : CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage | null >, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T> | null >>

    /**
     * Find zero or more GymEquipmentImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymEquipmentImages
     * const gymEquipmentImages = await prisma.gymEquipmentImage.findMany()
     * 
     * // Get first 10 GymEquipmentImages
     * const gymEquipmentImages = await prisma.gymEquipmentImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymEquipmentImageWithIdOnly = await prisma.gymEquipmentImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymEquipmentImageFindManyArgs>(
      args?: SelectSubset<T, GymEquipmentImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymEquipmentImage>>, PrismaPromise<Array<GymEquipmentImageGetPayload<T>>>>

    /**
     * Create a GymEquipmentImage.
     * @param {GymEquipmentImageCreateArgs} args - Arguments to create a GymEquipmentImage.
     * @example
     * // Create one GymEquipmentImage
     * const GymEquipmentImage = await prisma.gymEquipmentImage.create({
     *   data: {
     *     // ... data to create a GymEquipmentImage
     *   }
     * })
     * 
    **/
    create<T extends GymEquipmentImageCreateArgs>(
      args: SelectSubset<T, GymEquipmentImageCreateArgs>
    ): CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage>, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T>>>

    /**
     * Create many GymEquipmentImages.
     *     @param {GymEquipmentImageCreateManyArgs} args - Arguments to create many GymEquipmentImages.
     *     @example
     *     // Create many GymEquipmentImages
     *     const gymEquipmentImage = await prisma.gymEquipmentImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymEquipmentImageCreateManyArgs>(
      args?: SelectSubset<T, GymEquipmentImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymEquipmentImage.
     * @param {GymEquipmentImageDeleteArgs} args - Arguments to delete one GymEquipmentImage.
     * @example
     * // Delete one GymEquipmentImage
     * const GymEquipmentImage = await prisma.gymEquipmentImage.delete({
     *   where: {
     *     // ... filter to delete one GymEquipmentImage
     *   }
     * })
     * 
    **/
    delete<T extends GymEquipmentImageDeleteArgs>(
      args: SelectSubset<T, GymEquipmentImageDeleteArgs>
    ): CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage>, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T>>>

    /**
     * Update one GymEquipmentImage.
     * @param {GymEquipmentImageUpdateArgs} args - Arguments to update one GymEquipmentImage.
     * @example
     * // Update one GymEquipmentImage
     * const gymEquipmentImage = await prisma.gymEquipmentImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymEquipmentImageUpdateArgs>(
      args: SelectSubset<T, GymEquipmentImageUpdateArgs>
    ): CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage>, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T>>>

    /**
     * Delete zero or more GymEquipmentImages.
     * @param {GymEquipmentImageDeleteManyArgs} args - Arguments to filter GymEquipmentImages to delete.
     * @example
     * // Delete a few GymEquipmentImages
     * const { count } = await prisma.gymEquipmentImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymEquipmentImageDeleteManyArgs>(
      args?: SelectSubset<T, GymEquipmentImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymEquipmentImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymEquipmentImages
     * const gymEquipmentImage = await prisma.gymEquipmentImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymEquipmentImageUpdateManyArgs>(
      args: SelectSubset<T, GymEquipmentImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymEquipmentImage.
     * @param {GymEquipmentImageUpsertArgs} args - Arguments to update or create a GymEquipmentImage.
     * @example
     * // Update or create a GymEquipmentImage
     * const gymEquipmentImage = await prisma.gymEquipmentImage.upsert({
     *   create: {
     *     // ... data to create a GymEquipmentImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymEquipmentImage we want to update
     *   }
     * })
    **/
    upsert<T extends GymEquipmentImageUpsertArgs>(
      args: SelectSubset<T, GymEquipmentImageUpsertArgs>
    ): CheckSelect<T, Prisma__GymEquipmentImageClient<GymEquipmentImage>, Prisma__GymEquipmentImageClient<GymEquipmentImageGetPayload<T>>>

    /**
     * Count the number of GymEquipmentImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentImageCountArgs} args - Arguments to filter GymEquipmentImages to count.
     * @example
     * // Count the number of GymEquipmentImages
     * const count = await prisma.gymEquipmentImage.count({
     *   where: {
     *     // ... the filter for the GymEquipmentImages we want to count
     *   }
     * })
    **/
    count<T extends GymEquipmentImageCountArgs>(
      args?: Subset<T, GymEquipmentImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymEquipmentImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymEquipmentImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymEquipmentImageAggregateArgs>(args: Subset<T, GymEquipmentImageAggregateArgs>): PrismaPromise<GetGymEquipmentImageAggregateType<T>>

    /**
     * Group by GymEquipmentImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentImageGroupByArgs} args - Group by arguments.
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
      T extends GymEquipmentImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymEquipmentImageGroupByArgs['orderBy'] }
        : { orderBy?: GymEquipmentImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymEquipmentImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymEquipmentImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymEquipmentImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymEquipmentImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    GymEquipment<T extends GymEquipmentArgs = {}>(args?: Subset<T, GymEquipmentArgs>): CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment | null >, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymEquipmentImage findUnique
   */
  export type GymEquipmentImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
    /**
     * Throw an Error if a GymEquipmentImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEquipmentImage to fetch.
     * 
    **/
    where: GymEquipmentImageWhereUniqueInput
  }


  /**
   * GymEquipmentImage findFirst
   */
  export type GymEquipmentImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
    /**
     * Throw an Error if a GymEquipmentImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEquipmentImage to fetch.
     * 
    **/
    where?: GymEquipmentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipmentImages to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymEquipmentImages.
     * 
    **/
    cursor?: GymEquipmentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipmentImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipmentImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymEquipmentImages.
     * 
    **/
    distinct?: Enumerable<GymEquipmentImageScalarFieldEnum>
  }


  /**
   * GymEquipmentImage findMany
   */
  export type GymEquipmentImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
    /**
     * Filter, which GymEquipmentImages to fetch.
     * 
    **/
    where?: GymEquipmentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipmentImages to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymEquipmentImages.
     * 
    **/
    cursor?: GymEquipmentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipmentImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipmentImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymEquipmentImageScalarFieldEnum>
  }


  /**
   * GymEquipmentImage create
   */
  export type GymEquipmentImageCreateArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
    /**
     * The data needed to create a GymEquipmentImage.
     * 
    **/
    data: XOR<GymEquipmentImageCreateInput, GymEquipmentImageUncheckedCreateInput>
  }


  /**
   * GymEquipmentImage createMany
   */
  export type GymEquipmentImageCreateManyArgs = {
    /**
     * The data used to create many GymEquipmentImages.
     * 
    **/
    data: Enumerable<GymEquipmentImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymEquipmentImage update
   */
  export type GymEquipmentImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
    /**
     * The data needed to update a GymEquipmentImage.
     * 
    **/
    data: XOR<GymEquipmentImageUpdateInput, GymEquipmentImageUncheckedUpdateInput>
    /**
     * Choose, which GymEquipmentImage to update.
     * 
    **/
    where: GymEquipmentImageWhereUniqueInput
  }


  /**
   * GymEquipmentImage updateMany
   */
  export type GymEquipmentImageUpdateManyArgs = {
    /**
     * The data used to update GymEquipmentImages.
     * 
    **/
    data: XOR<GymEquipmentImageUpdateManyMutationInput, GymEquipmentImageUncheckedUpdateManyInput>
    /**
     * Filter which GymEquipmentImages to update
     * 
    **/
    where?: GymEquipmentImageWhereInput
  }


  /**
   * GymEquipmentImage upsert
   */
  export type GymEquipmentImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
    /**
     * The filter to search for the GymEquipmentImage to update in case it exists.
     * 
    **/
    where: GymEquipmentImageWhereUniqueInput
    /**
     * In case the GymEquipmentImage found by the `where` argument doesn't exist, create a new GymEquipmentImage with this data.
     * 
    **/
    create: XOR<GymEquipmentImageCreateInput, GymEquipmentImageUncheckedCreateInput>
    /**
     * In case the GymEquipmentImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymEquipmentImageUpdateInput, GymEquipmentImageUncheckedUpdateInput>
  }


  /**
   * GymEquipmentImage delete
   */
  export type GymEquipmentImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
    /**
     * Filter which GymEquipmentImage to delete.
     * 
    **/
    where: GymEquipmentImageWhereUniqueInput
  }


  /**
   * GymEquipmentImage deleteMany
   */
  export type GymEquipmentImageDeleteManyArgs = {
    /**
     * Filter which GymEquipmentImages to delete
     * 
    **/
    where?: GymEquipmentImageWhereInput
  }


  /**
   * GymEquipmentImage without action
   */
  export type GymEquipmentImageArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentImage
     * 
    **/
    select?: GymEquipmentImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentImageInclude | null
  }



  /**
   * Model BodyPartsOnGymEquipments
   */


  export type AggregateBodyPartsOnGymEquipments = {
    _count: BodyPartsOnGymEquipmentsCountAggregateOutputType | null
    _avg: BodyPartsOnGymEquipmentsAvgAggregateOutputType | null
    _sum: BodyPartsOnGymEquipmentsSumAggregateOutputType | null
    _min: BodyPartsOnGymEquipmentsMinAggregateOutputType | null
    _max: BodyPartsOnGymEquipmentsMaxAggregateOutputType | null
  }

  export type BodyPartsOnGymEquipmentsAvgAggregateOutputType = {
    gymEquipmentId: number | null
    bodyPartId: number | null
  }

  export type BodyPartsOnGymEquipmentsSumAggregateOutputType = {
    gymEquipmentId: number | null
    bodyPartId: number | null
  }

  export type BodyPartsOnGymEquipmentsMinAggregateOutputType = {
    gymEquipmentId: number | null
    bodyPartId: number | null
    assignedAt: Date | null
  }

  export type BodyPartsOnGymEquipmentsMaxAggregateOutputType = {
    gymEquipmentId: number | null
    bodyPartId: number | null
    assignedAt: Date | null
  }

  export type BodyPartsOnGymEquipmentsCountAggregateOutputType = {
    gymEquipmentId: number
    bodyPartId: number
    assignedAt: number
    _all: number
  }


  export type BodyPartsOnGymEquipmentsAvgAggregateInputType = {
    gymEquipmentId?: true
    bodyPartId?: true
  }

  export type BodyPartsOnGymEquipmentsSumAggregateInputType = {
    gymEquipmentId?: true
    bodyPartId?: true
  }

  export type BodyPartsOnGymEquipmentsMinAggregateInputType = {
    gymEquipmentId?: true
    bodyPartId?: true
    assignedAt?: true
  }

  export type BodyPartsOnGymEquipmentsMaxAggregateInputType = {
    gymEquipmentId?: true
    bodyPartId?: true
    assignedAt?: true
  }

  export type BodyPartsOnGymEquipmentsCountAggregateInputType = {
    gymEquipmentId?: true
    bodyPartId?: true
    assignedAt?: true
    _all?: true
  }

  export type BodyPartsOnGymEquipmentsAggregateArgs = {
    /**
     * Filter which BodyPartsOnGymEquipments to aggregate.
     * 
    **/
    where?: BodyPartsOnGymEquipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyPartsOnGymEquipments to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyPartsOnGymEquipmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BodyPartsOnGymEquipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyPartsOnGymEquipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyPartsOnGymEquipments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyPartsOnGymEquipments
    **/
    _count?: true | BodyPartsOnGymEquipmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyPartsOnGymEquipmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyPartsOnGymEquipmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyPartsOnGymEquipmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyPartsOnGymEquipmentsMaxAggregateInputType
  }

  export type GetBodyPartsOnGymEquipmentsAggregateType<T extends BodyPartsOnGymEquipmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyPartsOnGymEquipments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyPartsOnGymEquipments[P]>
      : GetScalarType<T[P], AggregateBodyPartsOnGymEquipments[P]>
  }




  export type BodyPartsOnGymEquipmentsGroupByArgs = {
    where?: BodyPartsOnGymEquipmentsWhereInput
    orderBy?: Enumerable<BodyPartsOnGymEquipmentsOrderByWithAggregationInput>
    by: Array<BodyPartsOnGymEquipmentsScalarFieldEnum>
    having?: BodyPartsOnGymEquipmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyPartsOnGymEquipmentsCountAggregateInputType | true
    _avg?: BodyPartsOnGymEquipmentsAvgAggregateInputType
    _sum?: BodyPartsOnGymEquipmentsSumAggregateInputType
    _min?: BodyPartsOnGymEquipmentsMinAggregateInputType
    _max?: BodyPartsOnGymEquipmentsMaxAggregateInputType
  }


  export type BodyPartsOnGymEquipmentsGroupByOutputType = {
    gymEquipmentId: number
    bodyPartId: number
    assignedAt: Date
    _count: BodyPartsOnGymEquipmentsCountAggregateOutputType | null
    _avg: BodyPartsOnGymEquipmentsAvgAggregateOutputType | null
    _sum: BodyPartsOnGymEquipmentsSumAggregateOutputType | null
    _min: BodyPartsOnGymEquipmentsMinAggregateOutputType | null
    _max: BodyPartsOnGymEquipmentsMaxAggregateOutputType | null
  }

  type GetBodyPartsOnGymEquipmentsGroupByPayload<T extends BodyPartsOnGymEquipmentsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BodyPartsOnGymEquipmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyPartsOnGymEquipmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyPartsOnGymEquipmentsGroupByOutputType[P]>
            : GetScalarType<T[P], BodyPartsOnGymEquipmentsGroupByOutputType[P]>
        }
      >
    >


  export type BodyPartsOnGymEquipmentsSelect = {
    GymEquipment?: boolean | GymEquipmentArgs
    gymEquipmentId?: boolean
    BodyPart?: boolean | BodyPartArgs
    bodyPartId?: boolean
    assignedAt?: boolean
  }

  export type BodyPartsOnGymEquipmentsInclude = {
    GymEquipment?: boolean | GymEquipmentArgs
    BodyPart?: boolean | BodyPartArgs
  }

  export type BodyPartsOnGymEquipmentsGetPayload<
    S extends boolean | null | undefined | BodyPartsOnGymEquipmentsArgs,
    U = keyof S
      > = S extends true
        ? BodyPartsOnGymEquipments
    : S extends undefined
    ? never
    : S extends BodyPartsOnGymEquipmentsArgs | BodyPartsOnGymEquipmentsFindManyArgs
    ?'include' extends U
    ? BodyPartsOnGymEquipments  & {
    [P in TrueKeys<S['include']>]:
        P extends 'GymEquipment' ? GymEquipmentGetPayload<S['include'][P]> :
        P extends 'BodyPart' ? BodyPartGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'GymEquipment' ? GymEquipmentGetPayload<S['select'][P]> :
        P extends 'BodyPart' ? BodyPartGetPayload<S['select'][P]> :  P extends keyof BodyPartsOnGymEquipments ? BodyPartsOnGymEquipments[P] : never
  } 
    : BodyPartsOnGymEquipments
  : BodyPartsOnGymEquipments


  type BodyPartsOnGymEquipmentsCountArgs = Merge<
    Omit<BodyPartsOnGymEquipmentsFindManyArgs, 'select' | 'include'> & {
      select?: BodyPartsOnGymEquipmentsCountAggregateInputType | true
    }
  >

  export interface BodyPartsOnGymEquipmentsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one BodyPartsOnGymEquipments that matches the filter.
     * @param {BodyPartsOnGymEquipmentsFindUniqueArgs} args - Arguments to find a BodyPartsOnGymEquipments
     * @example
     * // Get one BodyPartsOnGymEquipments
     * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BodyPartsOnGymEquipmentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BodyPartsOnGymEquipmentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BodyPartsOnGymEquipments'> extends True ? CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments>, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T>>> : CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments | null >, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T> | null >>

    /**
     * Find the first BodyPartsOnGymEquipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartsOnGymEquipmentsFindFirstArgs} args - Arguments to find a BodyPartsOnGymEquipments
     * @example
     * // Get one BodyPartsOnGymEquipments
     * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BodyPartsOnGymEquipmentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BodyPartsOnGymEquipmentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BodyPartsOnGymEquipments'> extends True ? CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments>, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T>>> : CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments | null >, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T> | null >>

    /**
     * Find zero or more BodyPartsOnGymEquipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartsOnGymEquipmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyPartsOnGymEquipments
     * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.findMany()
     * 
     * // Get first 10 BodyPartsOnGymEquipments
     * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.findMany({ take: 10 })
     * 
     * // Only select the `gymEquipmentId`
     * const bodyPartsOnGymEquipmentsWithGymEquipmentIdOnly = await prisma.bodyPartsOnGymEquipments.findMany({ select: { gymEquipmentId: true } })
     * 
    **/
    findMany<T extends BodyPartsOnGymEquipmentsFindManyArgs>(
      args?: SelectSubset<T, BodyPartsOnGymEquipmentsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BodyPartsOnGymEquipments>>, PrismaPromise<Array<BodyPartsOnGymEquipmentsGetPayload<T>>>>

    /**
     * Create a BodyPartsOnGymEquipments.
     * @param {BodyPartsOnGymEquipmentsCreateArgs} args - Arguments to create a BodyPartsOnGymEquipments.
     * @example
     * // Create one BodyPartsOnGymEquipments
     * const BodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.create({
     *   data: {
     *     // ... data to create a BodyPartsOnGymEquipments
     *   }
     * })
     * 
    **/
    create<T extends BodyPartsOnGymEquipmentsCreateArgs>(
      args: SelectSubset<T, BodyPartsOnGymEquipmentsCreateArgs>
    ): CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments>, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T>>>

    /**
     * Create many BodyPartsOnGymEquipments.
     *     @param {BodyPartsOnGymEquipmentsCreateManyArgs} args - Arguments to create many BodyPartsOnGymEquipments.
     *     @example
     *     // Create many BodyPartsOnGymEquipments
     *     const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BodyPartsOnGymEquipmentsCreateManyArgs>(
      args?: SelectSubset<T, BodyPartsOnGymEquipmentsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BodyPartsOnGymEquipments.
     * @param {BodyPartsOnGymEquipmentsDeleteArgs} args - Arguments to delete one BodyPartsOnGymEquipments.
     * @example
     * // Delete one BodyPartsOnGymEquipments
     * const BodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.delete({
     *   where: {
     *     // ... filter to delete one BodyPartsOnGymEquipments
     *   }
     * })
     * 
    **/
    delete<T extends BodyPartsOnGymEquipmentsDeleteArgs>(
      args: SelectSubset<T, BodyPartsOnGymEquipmentsDeleteArgs>
    ): CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments>, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T>>>

    /**
     * Update one BodyPartsOnGymEquipments.
     * @param {BodyPartsOnGymEquipmentsUpdateArgs} args - Arguments to update one BodyPartsOnGymEquipments.
     * @example
     * // Update one BodyPartsOnGymEquipments
     * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BodyPartsOnGymEquipmentsUpdateArgs>(
      args: SelectSubset<T, BodyPartsOnGymEquipmentsUpdateArgs>
    ): CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments>, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T>>>

    /**
     * Delete zero or more BodyPartsOnGymEquipments.
     * @param {BodyPartsOnGymEquipmentsDeleteManyArgs} args - Arguments to filter BodyPartsOnGymEquipments to delete.
     * @example
     * // Delete a few BodyPartsOnGymEquipments
     * const { count } = await prisma.bodyPartsOnGymEquipments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BodyPartsOnGymEquipmentsDeleteManyArgs>(
      args?: SelectSubset<T, BodyPartsOnGymEquipmentsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyPartsOnGymEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartsOnGymEquipmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyPartsOnGymEquipments
     * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BodyPartsOnGymEquipmentsUpdateManyArgs>(
      args: SelectSubset<T, BodyPartsOnGymEquipmentsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BodyPartsOnGymEquipments.
     * @param {BodyPartsOnGymEquipmentsUpsertArgs} args - Arguments to update or create a BodyPartsOnGymEquipments.
     * @example
     * // Update or create a BodyPartsOnGymEquipments
     * const bodyPartsOnGymEquipments = await prisma.bodyPartsOnGymEquipments.upsert({
     *   create: {
     *     // ... data to create a BodyPartsOnGymEquipments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyPartsOnGymEquipments we want to update
     *   }
     * })
    **/
    upsert<T extends BodyPartsOnGymEquipmentsUpsertArgs>(
      args: SelectSubset<T, BodyPartsOnGymEquipmentsUpsertArgs>
    ): CheckSelect<T, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipments>, Prisma__BodyPartsOnGymEquipmentsClient<BodyPartsOnGymEquipmentsGetPayload<T>>>

    /**
     * Count the number of BodyPartsOnGymEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartsOnGymEquipmentsCountArgs} args - Arguments to filter BodyPartsOnGymEquipments to count.
     * @example
     * // Count the number of BodyPartsOnGymEquipments
     * const count = await prisma.bodyPartsOnGymEquipments.count({
     *   where: {
     *     // ... the filter for the BodyPartsOnGymEquipments we want to count
     *   }
     * })
    **/
    count<T extends BodyPartsOnGymEquipmentsCountArgs>(
      args?: Subset<T, BodyPartsOnGymEquipmentsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyPartsOnGymEquipmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyPartsOnGymEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartsOnGymEquipmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyPartsOnGymEquipmentsAggregateArgs>(args: Subset<T, BodyPartsOnGymEquipmentsAggregateArgs>): PrismaPromise<GetBodyPartsOnGymEquipmentsAggregateType<T>>

    /**
     * Group by BodyPartsOnGymEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartsOnGymEquipmentsGroupByArgs} args - Group by arguments.
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
      T extends BodyPartsOnGymEquipmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyPartsOnGymEquipmentsGroupByArgs['orderBy'] }
        : { orderBy?: BodyPartsOnGymEquipmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BodyPartsOnGymEquipmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyPartsOnGymEquipmentsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyPartsOnGymEquipments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BodyPartsOnGymEquipmentsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    GymEquipment<T extends GymEquipmentArgs = {}>(args?: Subset<T, GymEquipmentArgs>): CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment | null >, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T> | null >>;

    BodyPart<T extends BodyPartArgs = {}>(args?: Subset<T, BodyPartArgs>): CheckSelect<T, Prisma__BodyPartClient<BodyPart | null >, Prisma__BodyPartClient<BodyPartGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BodyPartsOnGymEquipments findUnique
   */
  export type BodyPartsOnGymEquipmentsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
    /**
     * Throw an Error if a BodyPartsOnGymEquipments can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BodyPartsOnGymEquipments to fetch.
     * 
    **/
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
  }


  /**
   * BodyPartsOnGymEquipments findFirst
   */
  export type BodyPartsOnGymEquipmentsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
    /**
     * Throw an Error if a BodyPartsOnGymEquipments can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BodyPartsOnGymEquipments to fetch.
     * 
    **/
    where?: BodyPartsOnGymEquipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyPartsOnGymEquipments to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyPartsOnGymEquipmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyPartsOnGymEquipments.
     * 
    **/
    cursor?: BodyPartsOnGymEquipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyPartsOnGymEquipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyPartsOnGymEquipments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyPartsOnGymEquipments.
     * 
    **/
    distinct?: Enumerable<BodyPartsOnGymEquipmentsScalarFieldEnum>
  }


  /**
   * BodyPartsOnGymEquipments findMany
   */
  export type BodyPartsOnGymEquipmentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
    /**
     * Filter, which BodyPartsOnGymEquipments to fetch.
     * 
    **/
    where?: BodyPartsOnGymEquipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyPartsOnGymEquipments to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyPartsOnGymEquipmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyPartsOnGymEquipments.
     * 
    **/
    cursor?: BodyPartsOnGymEquipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyPartsOnGymEquipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyPartsOnGymEquipments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BodyPartsOnGymEquipmentsScalarFieldEnum>
  }


  /**
   * BodyPartsOnGymEquipments create
   */
  export type BodyPartsOnGymEquipmentsCreateArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
    /**
     * The data needed to create a BodyPartsOnGymEquipments.
     * 
    **/
    data: XOR<BodyPartsOnGymEquipmentsCreateInput, BodyPartsOnGymEquipmentsUncheckedCreateInput>
  }


  /**
   * BodyPartsOnGymEquipments createMany
   */
  export type BodyPartsOnGymEquipmentsCreateManyArgs = {
    /**
     * The data used to create many BodyPartsOnGymEquipments.
     * 
    **/
    data: Enumerable<BodyPartsOnGymEquipmentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BodyPartsOnGymEquipments update
   */
  export type BodyPartsOnGymEquipmentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
    /**
     * The data needed to update a BodyPartsOnGymEquipments.
     * 
    **/
    data: XOR<BodyPartsOnGymEquipmentsUpdateInput, BodyPartsOnGymEquipmentsUncheckedUpdateInput>
    /**
     * Choose, which BodyPartsOnGymEquipments to update.
     * 
    **/
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
  }


  /**
   * BodyPartsOnGymEquipments updateMany
   */
  export type BodyPartsOnGymEquipmentsUpdateManyArgs = {
    /**
     * The data used to update BodyPartsOnGymEquipments.
     * 
    **/
    data: XOR<BodyPartsOnGymEquipmentsUpdateManyMutationInput, BodyPartsOnGymEquipmentsUncheckedUpdateManyInput>
    /**
     * Filter which BodyPartsOnGymEquipments to update
     * 
    **/
    where?: BodyPartsOnGymEquipmentsWhereInput
  }


  /**
   * BodyPartsOnGymEquipments upsert
   */
  export type BodyPartsOnGymEquipmentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
    /**
     * The filter to search for the BodyPartsOnGymEquipments to update in case it exists.
     * 
    **/
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
    /**
     * In case the BodyPartsOnGymEquipments found by the `where` argument doesn't exist, create a new BodyPartsOnGymEquipments with this data.
     * 
    **/
    create: XOR<BodyPartsOnGymEquipmentsCreateInput, BodyPartsOnGymEquipmentsUncheckedCreateInput>
    /**
     * In case the BodyPartsOnGymEquipments was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BodyPartsOnGymEquipmentsUpdateInput, BodyPartsOnGymEquipmentsUncheckedUpdateInput>
  }


  /**
   * BodyPartsOnGymEquipments delete
   */
  export type BodyPartsOnGymEquipmentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
    /**
     * Filter which BodyPartsOnGymEquipments to delete.
     * 
    **/
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
  }


  /**
   * BodyPartsOnGymEquipments deleteMany
   */
  export type BodyPartsOnGymEquipmentsDeleteManyArgs = {
    /**
     * Filter which BodyPartsOnGymEquipments to delete
     * 
    **/
    where?: BodyPartsOnGymEquipmentsWhereInput
  }


  /**
   * BodyPartsOnGymEquipments without action
   */
  export type BodyPartsOnGymEquipmentsArgs = {
    /**
     * Select specific fields to fetch from the BodyPartsOnGymEquipments
     * 
    **/
    select?: BodyPartsOnGymEquipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyPartsOnGymEquipmentsInclude | null
  }



  /**
   * Model Gym
   */


  export type AggregateGym = {
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  export type GymAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GymSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GymMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    ceoName: string | null
    companyName: string | null
    businessNumber: string | null
    postcode: string | null
    mainAddress: string | null
    subAddress: string | null
    phone: string | null
    cellPhone: string | null
    fax: string | null
    email: string | null
    isCertified: boolean | null
    isDisable: boolean | null
    userId: number | null
  }

  export type GymMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    ceoName: string | null
    companyName: string | null
    businessNumber: string | null
    postcode: string | null
    mainAddress: string | null
    subAddress: string | null
    phone: string | null
    cellPhone: string | null
    fax: string | null
    email: string | null
    isCertified: boolean | null
    isDisable: boolean | null
    userId: number | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    createdAt: number
    ceoName: number
    companyName: number
    businessNumber: number
    postcode: number
    mainAddress: number
    subAddress: number
    phone: number
    cellPhone: number
    fax: number
    email: number
    isCertified: number
    isDisable: number
    userId: number
    _all: number
  }


  export type GymAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GymSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GymMinAggregateInputType = {
    id?: true
    createdAt?: true
    ceoName?: true
    companyName?: true
    businessNumber?: true
    postcode?: true
    mainAddress?: true
    subAddress?: true
    phone?: true
    cellPhone?: true
    fax?: true
    email?: true
    isCertified?: true
    isDisable?: true
    userId?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    createdAt?: true
    ceoName?: true
    companyName?: true
    businessNumber?: true
    postcode?: true
    mainAddress?: true
    subAddress?: true
    phone?: true
    cellPhone?: true
    fax?: true
    email?: true
    isCertified?: true
    isDisable?: true
    userId?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    createdAt?: true
    ceoName?: true
    companyName?: true
    businessNumber?: true
    postcode?: true
    mainAddress?: true
    subAddress?: true
    phone?: true
    cellPhone?: true
    fax?: true
    email?: true
    isCertified?: true
    isDisable?: true
    userId?: true
    _all?: true
  }

  export type GymAggregateArgs = {
    /**
     * Filter which Gym to aggregate.
     * 
    **/
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     * 
    **/
    orderBy?: Enumerable<GymOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gyms
    **/
    _count?: true | GymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMaxAggregateInputType
  }

  export type GetGymAggregateType<T extends GymAggregateArgs> = {
        [P in keyof T & keyof AggregateGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGym[P]>
      : GetScalarType<T[P], AggregateGym[P]>
  }




  export type GymGroupByArgs = {
    where?: GymWhereInput
    orderBy?: Enumerable<GymOrderByWithAggregationInput>
    by: Array<GymScalarFieldEnum>
    having?: GymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymCountAggregateInputType | true
    _avg?: GymAvgAggregateInputType
    _sum?: GymSumAggregateInputType
    _min?: GymMinAggregateInputType
    _max?: GymMaxAggregateInputType
  }


  export type GymGroupByOutputType = {
    id: number
    createdAt: Date
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified: boolean
    isDisable: boolean
    userId: number
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  type GetGymGroupByPayload<T extends GymGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymGroupByOutputType[P]>
            : GetScalarType<T[P], GymGroupByOutputType[P]>
        }
      >
    >


  export type GymSelect = {
    id?: boolean
    createdAt?: boolean
    ceoName?: boolean
    companyName?: boolean
    businessNumber?: boolean
    postcode?: boolean
    mainAddress?: boolean
    subAddress?: boolean
    phone?: boolean
    cellPhone?: boolean
    fax?: boolean
    email?: boolean
    isCertified?: boolean
    isDisable?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    GymImage?: boolean | GymImageFindManyArgs
    GymEquipments?: boolean | GymEuquipmentsOnGymsFindManyArgs
    FavoriteUsers?: boolean | FavoriteGymFindManyArgs
    GymAccessHistory?: boolean | GymAccessHistoryFindManyArgs
    GymMembership?: boolean | GymMembershipFindManyArgs
    GymPassHistory?: boolean | GymPassHistoryFindManyArgs
    _count?: boolean | GymCountOutputTypeArgs
  }

  export type GymInclude = {
    User?: boolean | UserArgs
    GymImage?: boolean | GymImageFindManyArgs
    GymEquipments?: boolean | GymEuquipmentsOnGymsFindManyArgs
    FavoriteUsers?: boolean | FavoriteGymFindManyArgs
    GymAccessHistory?: boolean | GymAccessHistoryFindManyArgs
    GymMembership?: boolean | GymMembershipFindManyArgs
    GymPassHistory?: boolean | GymPassHistoryFindManyArgs
    _count?: boolean | GymCountOutputTypeArgs
  }

  export type GymGetPayload<
    S extends boolean | null | undefined | GymArgs,
    U = keyof S
      > = S extends true
        ? Gym
    : S extends undefined
    ? never
    : S extends GymArgs | GymFindManyArgs
    ?'include' extends U
    ? Gym  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'GymImage' ? Array < GymImageGetPayload<S['include'][P]>>  :
        P extends 'GymEquipments' ? Array < GymEuquipmentsOnGymsGetPayload<S['include'][P]>>  :
        P extends 'FavoriteUsers' ? Array < FavoriteGymGetPayload<S['include'][P]>>  :
        P extends 'GymAccessHistory' ? Array < GymAccessHistoryGetPayload<S['include'][P]>>  :
        P extends 'GymMembership' ? Array < GymMembershipGetPayload<S['include'][P]>>  :
        P extends 'GymPassHistory' ? Array < GymPassHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? GymCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'GymImage' ? Array < GymImageGetPayload<S['select'][P]>>  :
        P extends 'GymEquipments' ? Array < GymEuquipmentsOnGymsGetPayload<S['select'][P]>>  :
        P extends 'FavoriteUsers' ? Array < FavoriteGymGetPayload<S['select'][P]>>  :
        P extends 'GymAccessHistory' ? Array < GymAccessHistoryGetPayload<S['select'][P]>>  :
        P extends 'GymMembership' ? Array < GymMembershipGetPayload<S['select'][P]>>  :
        P extends 'GymPassHistory' ? Array < GymPassHistoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? GymCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Gym ? Gym[P] : never
  } 
    : Gym
  : Gym


  type GymCountArgs = Merge<
    Omit<GymFindManyArgs, 'select' | 'include'> & {
      select?: GymCountAggregateInputType | true
    }
  >

  export interface GymDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Gym that matches the filter.
     * @param {GymFindUniqueArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Gym'> extends True ? CheckSelect<T, Prisma__GymClient<Gym>, Prisma__GymClient<GymGetPayload<T>>> : CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>

    /**
     * Find the first Gym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Gym'> extends True ? CheckSelect<T, Prisma__GymClient<Gym>, Prisma__GymClient<GymGetPayload<T>>> : CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>

    /**
     * Find zero or more Gyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gyms
     * const gyms = await prisma.gym.findMany()
     * 
     * // Get first 10 Gyms
     * const gyms = await prisma.gym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymWithIdOnly = await prisma.gym.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymFindManyArgs>(
      args?: SelectSubset<T, GymFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Gym>>, PrismaPromise<Array<GymGetPayload<T>>>>

    /**
     * Create a Gym.
     * @param {GymCreateArgs} args - Arguments to create a Gym.
     * @example
     * // Create one Gym
     * const Gym = await prisma.gym.create({
     *   data: {
     *     // ... data to create a Gym
     *   }
     * })
     * 
    **/
    create<T extends GymCreateArgs>(
      args: SelectSubset<T, GymCreateArgs>
    ): CheckSelect<T, Prisma__GymClient<Gym>, Prisma__GymClient<GymGetPayload<T>>>

    /**
     * Create many Gyms.
     *     @param {GymCreateManyArgs} args - Arguments to create many Gyms.
     *     @example
     *     // Create many Gyms
     *     const gym = await prisma.gym.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymCreateManyArgs>(
      args?: SelectSubset<T, GymCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Gym.
     * @param {GymDeleteArgs} args - Arguments to delete one Gym.
     * @example
     * // Delete one Gym
     * const Gym = await prisma.gym.delete({
     *   where: {
     *     // ... filter to delete one Gym
     *   }
     * })
     * 
    **/
    delete<T extends GymDeleteArgs>(
      args: SelectSubset<T, GymDeleteArgs>
    ): CheckSelect<T, Prisma__GymClient<Gym>, Prisma__GymClient<GymGetPayload<T>>>

    /**
     * Update one Gym.
     * @param {GymUpdateArgs} args - Arguments to update one Gym.
     * @example
     * // Update one Gym
     * const gym = await prisma.gym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymUpdateArgs>(
      args: SelectSubset<T, GymUpdateArgs>
    ): CheckSelect<T, Prisma__GymClient<Gym>, Prisma__GymClient<GymGetPayload<T>>>

    /**
     * Delete zero or more Gyms.
     * @param {GymDeleteManyArgs} args - Arguments to filter Gyms to delete.
     * @example
     * // Delete a few Gyms
     * const { count } = await prisma.gym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymDeleteManyArgs>(
      args?: SelectSubset<T, GymDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymUpdateManyArgs>(
      args: SelectSubset<T, GymUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Gym.
     * @param {GymUpsertArgs} args - Arguments to update or create a Gym.
     * @example
     * // Update or create a Gym
     * const gym = await prisma.gym.upsert({
     *   create: {
     *     // ... data to create a Gym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gym we want to update
     *   }
     * })
    **/
    upsert<T extends GymUpsertArgs>(
      args: SelectSubset<T, GymUpsertArgs>
    ): CheckSelect<T, Prisma__GymClient<Gym>, Prisma__GymClient<GymGetPayload<T>>>

    /**
     * Count the number of Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymCountArgs} args - Arguments to filter Gyms to count.
     * @example
     * // Count the number of Gyms
     * const count = await prisma.gym.count({
     *   where: {
     *     // ... the filter for the Gyms we want to count
     *   }
     * })
    **/
    count<T extends GymCountArgs>(
      args?: Subset<T, GymCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymAggregateArgs>(args: Subset<T, GymAggregateArgs>): PrismaPromise<GetGymAggregateType<T>>

    /**
     * Group by Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymGroupByArgs} args - Group by arguments.
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
      T extends GymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymGroupByArgs['orderBy'] }
        : { orderBy?: GymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    GymImage<T extends GymImageFindManyArgs = {}>(args?: Subset<T, GymImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymImage>>, PrismaPromise<Array<GymImageGetPayload<T>>>>;

    GymEquipments<T extends GymEuquipmentsOnGymsFindManyArgs = {}>(args?: Subset<T, GymEuquipmentsOnGymsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymEuquipmentsOnGyms>>, PrismaPromise<Array<GymEuquipmentsOnGymsGetPayload<T>>>>;

    FavoriteUsers<T extends FavoriteGymFindManyArgs = {}>(args?: Subset<T, FavoriteGymFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FavoriteGym>>, PrismaPromise<Array<FavoriteGymGetPayload<T>>>>;

    GymAccessHistory<T extends GymAccessHistoryFindManyArgs = {}>(args?: Subset<T, GymAccessHistoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymAccessHistory>>, PrismaPromise<Array<GymAccessHistoryGetPayload<T>>>>;

    GymMembership<T extends GymMembershipFindManyArgs = {}>(args?: Subset<T, GymMembershipFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymMembership>>, PrismaPromise<Array<GymMembershipGetPayload<T>>>>;

    GymPassHistory<T extends GymPassHistoryFindManyArgs = {}>(args?: Subset<T, GymPassHistoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymPassHistory>>, PrismaPromise<Array<GymPassHistoryGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Gym findUnique
   */
  export type GymFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
    /**
     * Throw an Error if a Gym can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Gym to fetch.
     * 
    **/
    where: GymWhereUniqueInput
  }


  /**
   * Gym findFirst
   */
  export type GymFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
    /**
     * Throw an Error if a Gym can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Gym to fetch.
     * 
    **/
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     * 
    **/
    orderBy?: Enumerable<GymOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     * 
    **/
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     * 
    **/
    distinct?: Enumerable<GymScalarFieldEnum>
  }


  /**
   * Gym findMany
   */
  export type GymFindManyArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
    /**
     * Filter, which Gyms to fetch.
     * 
    **/
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     * 
    **/
    orderBy?: Enumerable<GymOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gyms.
     * 
    **/
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymScalarFieldEnum>
  }


  /**
   * Gym create
   */
  export type GymCreateArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
    /**
     * The data needed to create a Gym.
     * 
    **/
    data: XOR<GymCreateInput, GymUncheckedCreateInput>
  }


  /**
   * Gym createMany
   */
  export type GymCreateManyArgs = {
    /**
     * The data used to create many Gyms.
     * 
    **/
    data: Enumerable<GymCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Gym update
   */
  export type GymUpdateArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
    /**
     * The data needed to update a Gym.
     * 
    **/
    data: XOR<GymUpdateInput, GymUncheckedUpdateInput>
    /**
     * Choose, which Gym to update.
     * 
    **/
    where: GymWhereUniqueInput
  }


  /**
   * Gym updateMany
   */
  export type GymUpdateManyArgs = {
    /**
     * The data used to update Gyms.
     * 
    **/
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     * 
    **/
    where?: GymWhereInput
  }


  /**
   * Gym upsert
   */
  export type GymUpsertArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
    /**
     * The filter to search for the Gym to update in case it exists.
     * 
    **/
    where: GymWhereUniqueInput
    /**
     * In case the Gym found by the `where` argument doesn't exist, create a new Gym with this data.
     * 
    **/
    create: XOR<GymCreateInput, GymUncheckedCreateInput>
    /**
     * In case the Gym was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymUpdateInput, GymUncheckedUpdateInput>
  }


  /**
   * Gym delete
   */
  export type GymDeleteArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
    /**
     * Filter which Gym to delete.
     * 
    **/
    where: GymWhereUniqueInput
  }


  /**
   * Gym deleteMany
   */
  export type GymDeleteManyArgs = {
    /**
     * Filter which Gyms to delete
     * 
    **/
    where?: GymWhereInput
  }


  /**
   * Gym without action
   */
  export type GymArgs = {
    /**
     * Select specific fields to fetch from the Gym
     * 
    **/
    select?: GymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymInclude | null
  }



  /**
   * Model GymImage
   */


  export type AggregateGymImage = {
    _count: GymImageCountAggregateOutputType | null
    _avg: GymImageAvgAggregateOutputType | null
    _sum: GymImageSumAggregateOutputType | null
    _min: GymImageMinAggregateOutputType | null
    _max: GymImageMaxAggregateOutputType | null
  }

  export type GymImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    gymId: number | null
  }

  export type GymImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    gymId: number | null
  }

  export type GymImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    gymId: number | null
  }

  export type GymImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    gymId: number | null
  }

  export type GymImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    isThumb: number
    gymId: number
    _all: number
  }


  export type GymImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    gymId?: true
  }

  export type GymImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    gymId?: true
  }

  export type GymImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    gymId?: true
  }

  export type GymImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    gymId?: true
  }

  export type GymImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    gymId?: true
    _all?: true
  }

  export type GymImageAggregateArgs = {
    /**
     * Filter which GymImage to aggregate.
     * 
    **/
    where?: GymImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymImages to fetch.
     * 
    **/
    orderBy?: Enumerable<GymImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymImages
    **/
    _count?: true | GymImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymImageMaxAggregateInputType
  }

  export type GetGymImageAggregateType<T extends GymImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGymImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymImage[P]>
      : GetScalarType<T[P], AggregateGymImage[P]>
  }




  export type GymImageGroupByArgs = {
    where?: GymImageWhereInput
    orderBy?: Enumerable<GymImageOrderByWithAggregationInput>
    by: Array<GymImageScalarFieldEnum>
    having?: GymImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymImageCountAggregateInputType | true
    _avg?: GymImageAvgAggregateInputType
    _sum?: GymImageSumAggregateInputType
    _min?: GymImageMinAggregateInputType
    _max?: GymImageMaxAggregateInputType
  }


  export type GymImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    isThumb: boolean
    gymId: number
    _count: GymImageCountAggregateOutputType | null
    _avg: GymImageAvgAggregateOutputType | null
    _sum: GymImageSumAggregateOutputType | null
    _min: GymImageMinAggregateOutputType | null
    _max: GymImageMaxAggregateOutputType | null
  }

  type GetGymImageGroupByPayload<T extends GymImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymImageGroupByOutputType[P]>
            : GetScalarType<T[P], GymImageGroupByOutputType[P]>
        }
      >
    >


  export type GymImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    isThumb?: boolean
    gymId?: boolean
    Gym?: boolean | GymArgs
  }

  export type GymImageInclude = {
    Gym?: boolean | GymArgs
  }

  export type GymImageGetPayload<
    S extends boolean | null | undefined | GymImageArgs,
    U = keyof S
      > = S extends true
        ? GymImage
    : S extends undefined
    ? never
    : S extends GymImageArgs | GymImageFindManyArgs
    ?'include' extends U
    ? GymImage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Gym' ? GymGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Gym' ? GymGetPayload<S['select'][P]> :  P extends keyof GymImage ? GymImage[P] : never
  } 
    : GymImage
  : GymImage


  type GymImageCountArgs = Merge<
    Omit<GymImageFindManyArgs, 'select' | 'include'> & {
      select?: GymImageCountAggregateInputType | true
    }
  >

  export interface GymImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymImage that matches the filter.
     * @param {GymImageFindUniqueArgs} args - Arguments to find a GymImage
     * @example
     * // Get one GymImage
     * const gymImage = await prisma.gymImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymImage'> extends True ? CheckSelect<T, Prisma__GymImageClient<GymImage>, Prisma__GymImageClient<GymImageGetPayload<T>>> : CheckSelect<T, Prisma__GymImageClient<GymImage | null >, Prisma__GymImageClient<GymImageGetPayload<T> | null >>

    /**
     * Find the first GymImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymImageFindFirstArgs} args - Arguments to find a GymImage
     * @example
     * // Get one GymImage
     * const gymImage = await prisma.gymImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymImage'> extends True ? CheckSelect<T, Prisma__GymImageClient<GymImage>, Prisma__GymImageClient<GymImageGetPayload<T>>> : CheckSelect<T, Prisma__GymImageClient<GymImage | null >, Prisma__GymImageClient<GymImageGetPayload<T> | null >>

    /**
     * Find zero or more GymImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymImages
     * const gymImages = await prisma.gymImage.findMany()
     * 
     * // Get first 10 GymImages
     * const gymImages = await prisma.gymImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymImageWithIdOnly = await prisma.gymImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymImageFindManyArgs>(
      args?: SelectSubset<T, GymImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymImage>>, PrismaPromise<Array<GymImageGetPayload<T>>>>

    /**
     * Create a GymImage.
     * @param {GymImageCreateArgs} args - Arguments to create a GymImage.
     * @example
     * // Create one GymImage
     * const GymImage = await prisma.gymImage.create({
     *   data: {
     *     // ... data to create a GymImage
     *   }
     * })
     * 
    **/
    create<T extends GymImageCreateArgs>(
      args: SelectSubset<T, GymImageCreateArgs>
    ): CheckSelect<T, Prisma__GymImageClient<GymImage>, Prisma__GymImageClient<GymImageGetPayload<T>>>

    /**
     * Create many GymImages.
     *     @param {GymImageCreateManyArgs} args - Arguments to create many GymImages.
     *     @example
     *     // Create many GymImages
     *     const gymImage = await prisma.gymImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymImageCreateManyArgs>(
      args?: SelectSubset<T, GymImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymImage.
     * @param {GymImageDeleteArgs} args - Arguments to delete one GymImage.
     * @example
     * // Delete one GymImage
     * const GymImage = await prisma.gymImage.delete({
     *   where: {
     *     // ... filter to delete one GymImage
     *   }
     * })
     * 
    **/
    delete<T extends GymImageDeleteArgs>(
      args: SelectSubset<T, GymImageDeleteArgs>
    ): CheckSelect<T, Prisma__GymImageClient<GymImage>, Prisma__GymImageClient<GymImageGetPayload<T>>>

    /**
     * Update one GymImage.
     * @param {GymImageUpdateArgs} args - Arguments to update one GymImage.
     * @example
     * // Update one GymImage
     * const gymImage = await prisma.gymImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymImageUpdateArgs>(
      args: SelectSubset<T, GymImageUpdateArgs>
    ): CheckSelect<T, Prisma__GymImageClient<GymImage>, Prisma__GymImageClient<GymImageGetPayload<T>>>

    /**
     * Delete zero or more GymImages.
     * @param {GymImageDeleteManyArgs} args - Arguments to filter GymImages to delete.
     * @example
     * // Delete a few GymImages
     * const { count } = await prisma.gymImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymImageDeleteManyArgs>(
      args?: SelectSubset<T, GymImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymImages
     * const gymImage = await prisma.gymImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymImageUpdateManyArgs>(
      args: SelectSubset<T, GymImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymImage.
     * @param {GymImageUpsertArgs} args - Arguments to update or create a GymImage.
     * @example
     * // Update or create a GymImage
     * const gymImage = await prisma.gymImage.upsert({
     *   create: {
     *     // ... data to create a GymImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymImage we want to update
     *   }
     * })
    **/
    upsert<T extends GymImageUpsertArgs>(
      args: SelectSubset<T, GymImageUpsertArgs>
    ): CheckSelect<T, Prisma__GymImageClient<GymImage>, Prisma__GymImageClient<GymImageGetPayload<T>>>

    /**
     * Count the number of GymImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymImageCountArgs} args - Arguments to filter GymImages to count.
     * @example
     * // Count the number of GymImages
     * const count = await prisma.gymImage.count({
     *   where: {
     *     // ... the filter for the GymImages we want to count
     *   }
     * })
    **/
    count<T extends GymImageCountArgs>(
      args?: Subset<T, GymImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymImageAggregateArgs>(args: Subset<T, GymImageAggregateArgs>): PrismaPromise<GetGymImageAggregateType<T>>

    /**
     * Group by GymImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymImageGroupByArgs} args - Group by arguments.
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
      T extends GymImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymImageGroupByArgs['orderBy'] }
        : { orderBy?: GymImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Gym<T extends GymArgs = {}>(args?: Subset<T, GymArgs>): CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymImage findUnique
   */
  export type GymImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
    /**
     * Throw an Error if a GymImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymImage to fetch.
     * 
    **/
    where: GymImageWhereUniqueInput
  }


  /**
   * GymImage findFirst
   */
  export type GymImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
    /**
     * Throw an Error if a GymImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymImage to fetch.
     * 
    **/
    where?: GymImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymImages to fetch.
     * 
    **/
    orderBy?: Enumerable<GymImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymImages.
     * 
    **/
    cursor?: GymImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymImages.
     * 
    **/
    distinct?: Enumerable<GymImageScalarFieldEnum>
  }


  /**
   * GymImage findMany
   */
  export type GymImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
    /**
     * Filter, which GymImages to fetch.
     * 
    **/
    where?: GymImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymImages to fetch.
     * 
    **/
    orderBy?: Enumerable<GymImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymImages.
     * 
    **/
    cursor?: GymImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymImageScalarFieldEnum>
  }


  /**
   * GymImage create
   */
  export type GymImageCreateArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
    /**
     * The data needed to create a GymImage.
     * 
    **/
    data: XOR<GymImageCreateInput, GymImageUncheckedCreateInput>
  }


  /**
   * GymImage createMany
   */
  export type GymImageCreateManyArgs = {
    /**
     * The data used to create many GymImages.
     * 
    **/
    data: Enumerable<GymImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymImage update
   */
  export type GymImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
    /**
     * The data needed to update a GymImage.
     * 
    **/
    data: XOR<GymImageUpdateInput, GymImageUncheckedUpdateInput>
    /**
     * Choose, which GymImage to update.
     * 
    **/
    where: GymImageWhereUniqueInput
  }


  /**
   * GymImage updateMany
   */
  export type GymImageUpdateManyArgs = {
    /**
     * The data used to update GymImages.
     * 
    **/
    data: XOR<GymImageUpdateManyMutationInput, GymImageUncheckedUpdateManyInput>
    /**
     * Filter which GymImages to update
     * 
    **/
    where?: GymImageWhereInput
  }


  /**
   * GymImage upsert
   */
  export type GymImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
    /**
     * The filter to search for the GymImage to update in case it exists.
     * 
    **/
    where: GymImageWhereUniqueInput
    /**
     * In case the GymImage found by the `where` argument doesn't exist, create a new GymImage with this data.
     * 
    **/
    create: XOR<GymImageCreateInput, GymImageUncheckedCreateInput>
    /**
     * In case the GymImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymImageUpdateInput, GymImageUncheckedUpdateInput>
  }


  /**
   * GymImage delete
   */
  export type GymImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
    /**
     * Filter which GymImage to delete.
     * 
    **/
    where: GymImageWhereUniqueInput
  }


  /**
   * GymImage deleteMany
   */
  export type GymImageDeleteManyArgs = {
    /**
     * Filter which GymImages to delete
     * 
    **/
    where?: GymImageWhereInput
  }


  /**
   * GymImage without action
   */
  export type GymImageArgs = {
    /**
     * Select specific fields to fetch from the GymImage
     * 
    **/
    select?: GymImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymImageInclude | null
  }



  /**
   * Model GymEuquipmentsOnGyms
   */


  export type AggregateGymEuquipmentsOnGyms = {
    _count: GymEuquipmentsOnGymsCountAggregateOutputType | null
    _avg: GymEuquipmentsOnGymsAvgAggregateOutputType | null
    _sum: GymEuquipmentsOnGymsSumAggregateOutputType | null
    _min: GymEuquipmentsOnGymsMinAggregateOutputType | null
    _max: GymEuquipmentsOnGymsMaxAggregateOutputType | null
  }

  export type GymEuquipmentsOnGymsAvgAggregateOutputType = {
    id: number | null
    gymId: number | null
    gymEquipmentId: number | null
    assignBy: number | null
  }

  export type GymEuquipmentsOnGymsSumAggregateOutputType = {
    id: number | null
    gymId: number | null
    gymEquipmentId: number | null
    assignBy: number | null
  }

  export type GymEuquipmentsOnGymsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gymId: number | null
    gymEquipmentId: number | null
    assignBy: number | null
  }

  export type GymEuquipmentsOnGymsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gymId: number | null
    gymEquipmentId: number | null
    assignBy: number | null
  }

  export type GymEuquipmentsOnGymsCountAggregateOutputType = {
    id: number
    createdAt: number
    gymId: number
    gymEquipmentId: number
    assignBy: number
    _all: number
  }


  export type GymEuquipmentsOnGymsAvgAggregateInputType = {
    id?: true
    gymId?: true
    gymEquipmentId?: true
    assignBy?: true
  }

  export type GymEuquipmentsOnGymsSumAggregateInputType = {
    id?: true
    gymId?: true
    gymEquipmentId?: true
    assignBy?: true
  }

  export type GymEuquipmentsOnGymsMinAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    gymEquipmentId?: true
    assignBy?: true
  }

  export type GymEuquipmentsOnGymsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    gymEquipmentId?: true
    assignBy?: true
  }

  export type GymEuquipmentsOnGymsCountAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    gymEquipmentId?: true
    assignBy?: true
    _all?: true
  }

  export type GymEuquipmentsOnGymsAggregateArgs = {
    /**
     * Filter which GymEuquipmentsOnGyms to aggregate.
     * 
    **/
    where?: GymEuquipmentsOnGymsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEuquipmentsOnGyms to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEuquipmentsOnGymsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymEuquipmentsOnGymsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEuquipmentsOnGyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEuquipmentsOnGyms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymEuquipmentsOnGyms
    **/
    _count?: true | GymEuquipmentsOnGymsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymEuquipmentsOnGymsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymEuquipmentsOnGymsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymEuquipmentsOnGymsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymEuquipmentsOnGymsMaxAggregateInputType
  }

  export type GetGymEuquipmentsOnGymsAggregateType<T extends GymEuquipmentsOnGymsAggregateArgs> = {
        [P in keyof T & keyof AggregateGymEuquipmentsOnGyms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymEuquipmentsOnGyms[P]>
      : GetScalarType<T[P], AggregateGymEuquipmentsOnGyms[P]>
  }




  export type GymEuquipmentsOnGymsGroupByArgs = {
    where?: GymEuquipmentsOnGymsWhereInput
    orderBy?: Enumerable<GymEuquipmentsOnGymsOrderByWithAggregationInput>
    by: Array<GymEuquipmentsOnGymsScalarFieldEnum>
    having?: GymEuquipmentsOnGymsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymEuquipmentsOnGymsCountAggregateInputType | true
    _avg?: GymEuquipmentsOnGymsAvgAggregateInputType
    _sum?: GymEuquipmentsOnGymsSumAggregateInputType
    _min?: GymEuquipmentsOnGymsMinAggregateInputType
    _max?: GymEuquipmentsOnGymsMaxAggregateInputType
  }


  export type GymEuquipmentsOnGymsGroupByOutputType = {
    id: number
    createdAt: Date
    gymId: number
    gymEquipmentId: number
    assignBy: number
    _count: GymEuquipmentsOnGymsCountAggregateOutputType | null
    _avg: GymEuquipmentsOnGymsAvgAggregateOutputType | null
    _sum: GymEuquipmentsOnGymsSumAggregateOutputType | null
    _min: GymEuquipmentsOnGymsMinAggregateOutputType | null
    _max: GymEuquipmentsOnGymsMaxAggregateOutputType | null
  }

  type GetGymEuquipmentsOnGymsGroupByPayload<T extends GymEuquipmentsOnGymsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymEuquipmentsOnGymsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymEuquipmentsOnGymsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymEuquipmentsOnGymsGroupByOutputType[P]>
            : GetScalarType<T[P], GymEuquipmentsOnGymsGroupByOutputType[P]>
        }
      >
    >


  export type GymEuquipmentsOnGymsSelect = {
    id?: boolean
    createdAt?: boolean
    Gym?: boolean | GymArgs
    gymId?: boolean
    GymEquipment?: boolean | GymEquipmentArgs
    gymEquipmentId?: boolean
    assignBy?: boolean
    assignUser?: boolean | UserArgs
    GymEquipmentUserHistory?: boolean | GymEquipmentUserHistoryFindManyArgs
    _count?: boolean | GymEuquipmentsOnGymsCountOutputTypeArgs
  }

  export type GymEuquipmentsOnGymsInclude = {
    Gym?: boolean | GymArgs
    GymEquipment?: boolean | GymEquipmentArgs
    assignUser?: boolean | UserArgs
    GymEquipmentUserHistory?: boolean | GymEquipmentUserHistoryFindManyArgs
    _count?: boolean | GymEuquipmentsOnGymsCountOutputTypeArgs
  }

  export type GymEuquipmentsOnGymsGetPayload<
    S extends boolean | null | undefined | GymEuquipmentsOnGymsArgs,
    U = keyof S
      > = S extends true
        ? GymEuquipmentsOnGyms
    : S extends undefined
    ? never
    : S extends GymEuquipmentsOnGymsArgs | GymEuquipmentsOnGymsFindManyArgs
    ?'include' extends U
    ? GymEuquipmentsOnGyms  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Gym' ? GymGetPayload<S['include'][P]> :
        P extends 'GymEquipment' ? GymEquipmentGetPayload<S['include'][P]> :
        P extends 'assignUser' ? UserGetPayload<S['include'][P]> :
        P extends 'GymEquipmentUserHistory' ? Array < GymEquipmentUserHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? GymEuquipmentsOnGymsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Gym' ? GymGetPayload<S['select'][P]> :
        P extends 'GymEquipment' ? GymEquipmentGetPayload<S['select'][P]> :
        P extends 'assignUser' ? UserGetPayload<S['select'][P]> :
        P extends 'GymEquipmentUserHistory' ? Array < GymEquipmentUserHistoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? GymEuquipmentsOnGymsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GymEuquipmentsOnGyms ? GymEuquipmentsOnGyms[P] : never
  } 
    : GymEuquipmentsOnGyms
  : GymEuquipmentsOnGyms


  type GymEuquipmentsOnGymsCountArgs = Merge<
    Omit<GymEuquipmentsOnGymsFindManyArgs, 'select' | 'include'> & {
      select?: GymEuquipmentsOnGymsCountAggregateInputType | true
    }
  >

  export interface GymEuquipmentsOnGymsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymEuquipmentsOnGyms that matches the filter.
     * @param {GymEuquipmentsOnGymsFindUniqueArgs} args - Arguments to find a GymEuquipmentsOnGyms
     * @example
     * // Get one GymEuquipmentsOnGyms
     * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymEuquipmentsOnGymsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymEuquipmentsOnGymsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymEuquipmentsOnGyms'> extends True ? CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms>, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T>>> : CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms | null >, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T> | null >>

    /**
     * Find the first GymEuquipmentsOnGyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEuquipmentsOnGymsFindFirstArgs} args - Arguments to find a GymEuquipmentsOnGyms
     * @example
     * // Get one GymEuquipmentsOnGyms
     * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymEuquipmentsOnGymsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymEuquipmentsOnGymsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymEuquipmentsOnGyms'> extends True ? CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms>, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T>>> : CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms | null >, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T> | null >>

    /**
     * Find zero or more GymEuquipmentsOnGyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEuquipmentsOnGymsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymEuquipmentsOnGyms
     * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.findMany()
     * 
     * // Get first 10 GymEuquipmentsOnGyms
     * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymEuquipmentsOnGymsWithIdOnly = await prisma.gymEuquipmentsOnGyms.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymEuquipmentsOnGymsFindManyArgs>(
      args?: SelectSubset<T, GymEuquipmentsOnGymsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymEuquipmentsOnGyms>>, PrismaPromise<Array<GymEuquipmentsOnGymsGetPayload<T>>>>

    /**
     * Create a GymEuquipmentsOnGyms.
     * @param {GymEuquipmentsOnGymsCreateArgs} args - Arguments to create a GymEuquipmentsOnGyms.
     * @example
     * // Create one GymEuquipmentsOnGyms
     * const GymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.create({
     *   data: {
     *     // ... data to create a GymEuquipmentsOnGyms
     *   }
     * })
     * 
    **/
    create<T extends GymEuquipmentsOnGymsCreateArgs>(
      args: SelectSubset<T, GymEuquipmentsOnGymsCreateArgs>
    ): CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms>, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T>>>

    /**
     * Create many GymEuquipmentsOnGyms.
     *     @param {GymEuquipmentsOnGymsCreateManyArgs} args - Arguments to create many GymEuquipmentsOnGyms.
     *     @example
     *     // Create many GymEuquipmentsOnGyms
     *     const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymEuquipmentsOnGymsCreateManyArgs>(
      args?: SelectSubset<T, GymEuquipmentsOnGymsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymEuquipmentsOnGyms.
     * @param {GymEuquipmentsOnGymsDeleteArgs} args - Arguments to delete one GymEuquipmentsOnGyms.
     * @example
     * // Delete one GymEuquipmentsOnGyms
     * const GymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.delete({
     *   where: {
     *     // ... filter to delete one GymEuquipmentsOnGyms
     *   }
     * })
     * 
    **/
    delete<T extends GymEuquipmentsOnGymsDeleteArgs>(
      args: SelectSubset<T, GymEuquipmentsOnGymsDeleteArgs>
    ): CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms>, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T>>>

    /**
     * Update one GymEuquipmentsOnGyms.
     * @param {GymEuquipmentsOnGymsUpdateArgs} args - Arguments to update one GymEuquipmentsOnGyms.
     * @example
     * // Update one GymEuquipmentsOnGyms
     * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymEuquipmentsOnGymsUpdateArgs>(
      args: SelectSubset<T, GymEuquipmentsOnGymsUpdateArgs>
    ): CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms>, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T>>>

    /**
     * Delete zero or more GymEuquipmentsOnGyms.
     * @param {GymEuquipmentsOnGymsDeleteManyArgs} args - Arguments to filter GymEuquipmentsOnGyms to delete.
     * @example
     * // Delete a few GymEuquipmentsOnGyms
     * const { count } = await prisma.gymEuquipmentsOnGyms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymEuquipmentsOnGymsDeleteManyArgs>(
      args?: SelectSubset<T, GymEuquipmentsOnGymsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymEuquipmentsOnGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEuquipmentsOnGymsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymEuquipmentsOnGyms
     * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymEuquipmentsOnGymsUpdateManyArgs>(
      args: SelectSubset<T, GymEuquipmentsOnGymsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymEuquipmentsOnGyms.
     * @param {GymEuquipmentsOnGymsUpsertArgs} args - Arguments to update or create a GymEuquipmentsOnGyms.
     * @example
     * // Update or create a GymEuquipmentsOnGyms
     * const gymEuquipmentsOnGyms = await prisma.gymEuquipmentsOnGyms.upsert({
     *   create: {
     *     // ... data to create a GymEuquipmentsOnGyms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymEuquipmentsOnGyms we want to update
     *   }
     * })
    **/
    upsert<T extends GymEuquipmentsOnGymsUpsertArgs>(
      args: SelectSubset<T, GymEuquipmentsOnGymsUpsertArgs>
    ): CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms>, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T>>>

    /**
     * Count the number of GymEuquipmentsOnGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEuquipmentsOnGymsCountArgs} args - Arguments to filter GymEuquipmentsOnGyms to count.
     * @example
     * // Count the number of GymEuquipmentsOnGyms
     * const count = await prisma.gymEuquipmentsOnGyms.count({
     *   where: {
     *     // ... the filter for the GymEuquipmentsOnGyms we want to count
     *   }
     * })
    **/
    count<T extends GymEuquipmentsOnGymsCountArgs>(
      args?: Subset<T, GymEuquipmentsOnGymsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymEuquipmentsOnGymsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymEuquipmentsOnGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEuquipmentsOnGymsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymEuquipmentsOnGymsAggregateArgs>(args: Subset<T, GymEuquipmentsOnGymsAggregateArgs>): PrismaPromise<GetGymEuquipmentsOnGymsAggregateType<T>>

    /**
     * Group by GymEuquipmentsOnGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEuquipmentsOnGymsGroupByArgs} args - Group by arguments.
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
      T extends GymEuquipmentsOnGymsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymEuquipmentsOnGymsGroupByArgs['orderBy'] }
        : { orderBy?: GymEuquipmentsOnGymsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymEuquipmentsOnGymsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymEuquipmentsOnGymsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymEuquipmentsOnGyms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymEuquipmentsOnGymsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Gym<T extends GymArgs = {}>(args?: Subset<T, GymArgs>): CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>;

    GymEquipment<T extends GymEquipmentArgs = {}>(args?: Subset<T, GymEquipmentArgs>): CheckSelect<T, Prisma__GymEquipmentClient<GymEquipment | null >, Prisma__GymEquipmentClient<GymEquipmentGetPayload<T> | null >>;

    assignUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    GymEquipmentUserHistory<T extends GymEquipmentUserHistoryFindManyArgs = {}>(args?: Subset<T, GymEquipmentUserHistoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymEquipmentUserHistory>>, PrismaPromise<Array<GymEquipmentUserHistoryGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymEuquipmentsOnGyms findUnique
   */
  export type GymEuquipmentsOnGymsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
    /**
     * Throw an Error if a GymEuquipmentsOnGyms can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEuquipmentsOnGyms to fetch.
     * 
    **/
    where: GymEuquipmentsOnGymsWhereUniqueInput
  }


  /**
   * GymEuquipmentsOnGyms findFirst
   */
  export type GymEuquipmentsOnGymsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
    /**
     * Throw an Error if a GymEuquipmentsOnGyms can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEuquipmentsOnGyms to fetch.
     * 
    **/
    where?: GymEuquipmentsOnGymsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEuquipmentsOnGyms to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEuquipmentsOnGymsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymEuquipmentsOnGyms.
     * 
    **/
    cursor?: GymEuquipmentsOnGymsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEuquipmentsOnGyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEuquipmentsOnGyms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymEuquipmentsOnGyms.
     * 
    **/
    distinct?: Enumerable<GymEuquipmentsOnGymsScalarFieldEnum>
  }


  /**
   * GymEuquipmentsOnGyms findMany
   */
  export type GymEuquipmentsOnGymsFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
    /**
     * Filter, which GymEuquipmentsOnGyms to fetch.
     * 
    **/
    where?: GymEuquipmentsOnGymsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEuquipmentsOnGyms to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEuquipmentsOnGymsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymEuquipmentsOnGyms.
     * 
    **/
    cursor?: GymEuquipmentsOnGymsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEuquipmentsOnGyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEuquipmentsOnGyms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymEuquipmentsOnGymsScalarFieldEnum>
  }


  /**
   * GymEuquipmentsOnGyms create
   */
  export type GymEuquipmentsOnGymsCreateArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
    /**
     * The data needed to create a GymEuquipmentsOnGyms.
     * 
    **/
    data: XOR<GymEuquipmentsOnGymsCreateInput, GymEuquipmentsOnGymsUncheckedCreateInput>
  }


  /**
   * GymEuquipmentsOnGyms createMany
   */
  export type GymEuquipmentsOnGymsCreateManyArgs = {
    /**
     * The data used to create many GymEuquipmentsOnGyms.
     * 
    **/
    data: Enumerable<GymEuquipmentsOnGymsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymEuquipmentsOnGyms update
   */
  export type GymEuquipmentsOnGymsUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
    /**
     * The data needed to update a GymEuquipmentsOnGyms.
     * 
    **/
    data: XOR<GymEuquipmentsOnGymsUpdateInput, GymEuquipmentsOnGymsUncheckedUpdateInput>
    /**
     * Choose, which GymEuquipmentsOnGyms to update.
     * 
    **/
    where: GymEuquipmentsOnGymsWhereUniqueInput
  }


  /**
   * GymEuquipmentsOnGyms updateMany
   */
  export type GymEuquipmentsOnGymsUpdateManyArgs = {
    /**
     * The data used to update GymEuquipmentsOnGyms.
     * 
    **/
    data: XOR<GymEuquipmentsOnGymsUpdateManyMutationInput, GymEuquipmentsOnGymsUncheckedUpdateManyInput>
    /**
     * Filter which GymEuquipmentsOnGyms to update
     * 
    **/
    where?: GymEuquipmentsOnGymsWhereInput
  }


  /**
   * GymEuquipmentsOnGyms upsert
   */
  export type GymEuquipmentsOnGymsUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
    /**
     * The filter to search for the GymEuquipmentsOnGyms to update in case it exists.
     * 
    **/
    where: GymEuquipmentsOnGymsWhereUniqueInput
    /**
     * In case the GymEuquipmentsOnGyms found by the `where` argument doesn't exist, create a new GymEuquipmentsOnGyms with this data.
     * 
    **/
    create: XOR<GymEuquipmentsOnGymsCreateInput, GymEuquipmentsOnGymsUncheckedCreateInput>
    /**
     * In case the GymEuquipmentsOnGyms was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymEuquipmentsOnGymsUpdateInput, GymEuquipmentsOnGymsUncheckedUpdateInput>
  }


  /**
   * GymEuquipmentsOnGyms delete
   */
  export type GymEuquipmentsOnGymsDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
    /**
     * Filter which GymEuquipmentsOnGyms to delete.
     * 
    **/
    where: GymEuquipmentsOnGymsWhereUniqueInput
  }


  /**
   * GymEuquipmentsOnGyms deleteMany
   */
  export type GymEuquipmentsOnGymsDeleteManyArgs = {
    /**
     * Filter which GymEuquipmentsOnGyms to delete
     * 
    **/
    where?: GymEuquipmentsOnGymsWhereInput
  }


  /**
   * GymEuquipmentsOnGyms without action
   */
  export type GymEuquipmentsOnGymsArgs = {
    /**
     * Select specific fields to fetch from the GymEuquipmentsOnGyms
     * 
    **/
    select?: GymEuquipmentsOnGymsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEuquipmentsOnGymsInclude | null
  }



  /**
   * Model GymEquipmentUserHistory
   */


  export type AggregateGymEquipmentUserHistory = {
    _count: GymEquipmentUserHistoryCountAggregateOutputType | null
    _avg: GymEquipmentUserHistoryAvgAggregateOutputType | null
    _sum: GymEquipmentUserHistorySumAggregateOutputType | null
    _min: GymEquipmentUserHistoryMinAggregateOutputType | null
    _max: GymEquipmentUserHistoryMaxAggregateOutputType | null
  }

  export type GymEquipmentUserHistoryAvgAggregateOutputType = {
    id: number | null
    gymEuquipmentsOnGymsId: number | null
    userId: number | null
  }

  export type GymEquipmentUserHistorySumAggregateOutputType = {
    id: number | null
    gymEuquipmentsOnGymsId: number | null
    userId: number | null
  }

  export type GymEquipmentUserHistoryMinAggregateOutputType = {
    id: number | null
    gymEuquipmentsOnGymsId: number | null
    userId: number | null
    usedAt: Date | null
    endAt: Date | null
  }

  export type GymEquipmentUserHistoryMaxAggregateOutputType = {
    id: number | null
    gymEuquipmentsOnGymsId: number | null
    userId: number | null
    usedAt: Date | null
    endAt: Date | null
  }

  export type GymEquipmentUserHistoryCountAggregateOutputType = {
    id: number
    gymEuquipmentsOnGymsId: number
    userId: number
    usedAt: number
    endAt: number
    _all: number
  }


  export type GymEquipmentUserHistoryAvgAggregateInputType = {
    id?: true
    gymEuquipmentsOnGymsId?: true
    userId?: true
  }

  export type GymEquipmentUserHistorySumAggregateInputType = {
    id?: true
    gymEuquipmentsOnGymsId?: true
    userId?: true
  }

  export type GymEquipmentUserHistoryMinAggregateInputType = {
    id?: true
    gymEuquipmentsOnGymsId?: true
    userId?: true
    usedAt?: true
    endAt?: true
  }

  export type GymEquipmentUserHistoryMaxAggregateInputType = {
    id?: true
    gymEuquipmentsOnGymsId?: true
    userId?: true
    usedAt?: true
    endAt?: true
  }

  export type GymEquipmentUserHistoryCountAggregateInputType = {
    id?: true
    gymEuquipmentsOnGymsId?: true
    userId?: true
    usedAt?: true
    endAt?: true
    _all?: true
  }

  export type GymEquipmentUserHistoryAggregateArgs = {
    /**
     * Filter which GymEquipmentUserHistory to aggregate.
     * 
    **/
    where?: GymEquipmentUserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipmentUserHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentUserHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymEquipmentUserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipmentUserHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipmentUserHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymEquipmentUserHistories
    **/
    _count?: true | GymEquipmentUserHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymEquipmentUserHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymEquipmentUserHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymEquipmentUserHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymEquipmentUserHistoryMaxAggregateInputType
  }

  export type GetGymEquipmentUserHistoryAggregateType<T extends GymEquipmentUserHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGymEquipmentUserHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymEquipmentUserHistory[P]>
      : GetScalarType<T[P], AggregateGymEquipmentUserHistory[P]>
  }




  export type GymEquipmentUserHistoryGroupByArgs = {
    where?: GymEquipmentUserHistoryWhereInput
    orderBy?: Enumerable<GymEquipmentUserHistoryOrderByWithAggregationInput>
    by: Array<GymEquipmentUserHistoryScalarFieldEnum>
    having?: GymEquipmentUserHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymEquipmentUserHistoryCountAggregateInputType | true
    _avg?: GymEquipmentUserHistoryAvgAggregateInputType
    _sum?: GymEquipmentUserHistorySumAggregateInputType
    _min?: GymEquipmentUserHistoryMinAggregateInputType
    _max?: GymEquipmentUserHistoryMaxAggregateInputType
  }


  export type GymEquipmentUserHistoryGroupByOutputType = {
    id: number
    gymEuquipmentsOnGymsId: number
    userId: number
    usedAt: Date
    endAt: Date | null
    _count: GymEquipmentUserHistoryCountAggregateOutputType | null
    _avg: GymEquipmentUserHistoryAvgAggregateOutputType | null
    _sum: GymEquipmentUserHistorySumAggregateOutputType | null
    _min: GymEquipmentUserHistoryMinAggregateOutputType | null
    _max: GymEquipmentUserHistoryMaxAggregateOutputType | null
  }

  type GetGymEquipmentUserHistoryGroupByPayload<T extends GymEquipmentUserHistoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymEquipmentUserHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymEquipmentUserHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymEquipmentUserHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], GymEquipmentUserHistoryGroupByOutputType[P]>
        }
      >
    >


  export type GymEquipmentUserHistorySelect = {
    id?: boolean
    GymEuquipmentsOnGyms?: boolean | GymEuquipmentsOnGymsArgs
    gymEuquipmentsOnGymsId?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    usedAt?: boolean
    endAt?: boolean
  }

  export type GymEquipmentUserHistoryInclude = {
    GymEuquipmentsOnGyms?: boolean | GymEuquipmentsOnGymsArgs
    User?: boolean | UserArgs
  }

  export type GymEquipmentUserHistoryGetPayload<
    S extends boolean | null | undefined | GymEquipmentUserHistoryArgs,
    U = keyof S
      > = S extends true
        ? GymEquipmentUserHistory
    : S extends undefined
    ? never
    : S extends GymEquipmentUserHistoryArgs | GymEquipmentUserHistoryFindManyArgs
    ?'include' extends U
    ? GymEquipmentUserHistory  & {
    [P in TrueKeys<S['include']>]:
        P extends 'GymEuquipmentsOnGyms' ? GymEuquipmentsOnGymsGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'GymEuquipmentsOnGyms' ? GymEuquipmentsOnGymsGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof GymEquipmentUserHistory ? GymEquipmentUserHistory[P] : never
  } 
    : GymEquipmentUserHistory
  : GymEquipmentUserHistory


  type GymEquipmentUserHistoryCountArgs = Merge<
    Omit<GymEquipmentUserHistoryFindManyArgs, 'select' | 'include'> & {
      select?: GymEquipmentUserHistoryCountAggregateInputType | true
    }
  >

  export interface GymEquipmentUserHistoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymEquipmentUserHistory that matches the filter.
     * @param {GymEquipmentUserHistoryFindUniqueArgs} args - Arguments to find a GymEquipmentUserHistory
     * @example
     * // Get one GymEquipmentUserHistory
     * const gymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymEquipmentUserHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymEquipmentUserHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymEquipmentUserHistory'> extends True ? CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory>, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T>>> : CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory | null >, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T> | null >>

    /**
     * Find the first GymEquipmentUserHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentUserHistoryFindFirstArgs} args - Arguments to find a GymEquipmentUserHistory
     * @example
     * // Get one GymEquipmentUserHistory
     * const gymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymEquipmentUserHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymEquipmentUserHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymEquipmentUserHistory'> extends True ? CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory>, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T>>> : CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory | null >, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T> | null >>

    /**
     * Find zero or more GymEquipmentUserHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentUserHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymEquipmentUserHistories
     * const gymEquipmentUserHistories = await prisma.gymEquipmentUserHistory.findMany()
     * 
     * // Get first 10 GymEquipmentUserHistories
     * const gymEquipmentUserHistories = await prisma.gymEquipmentUserHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymEquipmentUserHistoryWithIdOnly = await prisma.gymEquipmentUserHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymEquipmentUserHistoryFindManyArgs>(
      args?: SelectSubset<T, GymEquipmentUserHistoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymEquipmentUserHistory>>, PrismaPromise<Array<GymEquipmentUserHistoryGetPayload<T>>>>

    /**
     * Create a GymEquipmentUserHistory.
     * @param {GymEquipmentUserHistoryCreateArgs} args - Arguments to create a GymEquipmentUserHistory.
     * @example
     * // Create one GymEquipmentUserHistory
     * const GymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.create({
     *   data: {
     *     // ... data to create a GymEquipmentUserHistory
     *   }
     * })
     * 
    **/
    create<T extends GymEquipmentUserHistoryCreateArgs>(
      args: SelectSubset<T, GymEquipmentUserHistoryCreateArgs>
    ): CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory>, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T>>>

    /**
     * Create many GymEquipmentUserHistories.
     *     @param {GymEquipmentUserHistoryCreateManyArgs} args - Arguments to create many GymEquipmentUserHistories.
     *     @example
     *     // Create many GymEquipmentUserHistories
     *     const gymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymEquipmentUserHistoryCreateManyArgs>(
      args?: SelectSubset<T, GymEquipmentUserHistoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymEquipmentUserHistory.
     * @param {GymEquipmentUserHistoryDeleteArgs} args - Arguments to delete one GymEquipmentUserHistory.
     * @example
     * // Delete one GymEquipmentUserHistory
     * const GymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.delete({
     *   where: {
     *     // ... filter to delete one GymEquipmentUserHistory
     *   }
     * })
     * 
    **/
    delete<T extends GymEquipmentUserHistoryDeleteArgs>(
      args: SelectSubset<T, GymEquipmentUserHistoryDeleteArgs>
    ): CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory>, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T>>>

    /**
     * Update one GymEquipmentUserHistory.
     * @param {GymEquipmentUserHistoryUpdateArgs} args - Arguments to update one GymEquipmentUserHistory.
     * @example
     * // Update one GymEquipmentUserHistory
     * const gymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymEquipmentUserHistoryUpdateArgs>(
      args: SelectSubset<T, GymEquipmentUserHistoryUpdateArgs>
    ): CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory>, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T>>>

    /**
     * Delete zero or more GymEquipmentUserHistories.
     * @param {GymEquipmentUserHistoryDeleteManyArgs} args - Arguments to filter GymEquipmentUserHistories to delete.
     * @example
     * // Delete a few GymEquipmentUserHistories
     * const { count } = await prisma.gymEquipmentUserHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymEquipmentUserHistoryDeleteManyArgs>(
      args?: SelectSubset<T, GymEquipmentUserHistoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymEquipmentUserHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentUserHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymEquipmentUserHistories
     * const gymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymEquipmentUserHistoryUpdateManyArgs>(
      args: SelectSubset<T, GymEquipmentUserHistoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymEquipmentUserHistory.
     * @param {GymEquipmentUserHistoryUpsertArgs} args - Arguments to update or create a GymEquipmentUserHistory.
     * @example
     * // Update or create a GymEquipmentUserHistory
     * const gymEquipmentUserHistory = await prisma.gymEquipmentUserHistory.upsert({
     *   create: {
     *     // ... data to create a GymEquipmentUserHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymEquipmentUserHistory we want to update
     *   }
     * })
    **/
    upsert<T extends GymEquipmentUserHistoryUpsertArgs>(
      args: SelectSubset<T, GymEquipmentUserHistoryUpsertArgs>
    ): CheckSelect<T, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistory>, Prisma__GymEquipmentUserHistoryClient<GymEquipmentUserHistoryGetPayload<T>>>

    /**
     * Count the number of GymEquipmentUserHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentUserHistoryCountArgs} args - Arguments to filter GymEquipmentUserHistories to count.
     * @example
     * // Count the number of GymEquipmentUserHistories
     * const count = await prisma.gymEquipmentUserHistory.count({
     *   where: {
     *     // ... the filter for the GymEquipmentUserHistories we want to count
     *   }
     * })
    **/
    count<T extends GymEquipmentUserHistoryCountArgs>(
      args?: Subset<T, GymEquipmentUserHistoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymEquipmentUserHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymEquipmentUserHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentUserHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymEquipmentUserHistoryAggregateArgs>(args: Subset<T, GymEquipmentUserHistoryAggregateArgs>): PrismaPromise<GetGymEquipmentUserHistoryAggregateType<T>>

    /**
     * Group by GymEquipmentUserHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymEquipmentUserHistoryGroupByArgs} args - Group by arguments.
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
      T extends GymEquipmentUserHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymEquipmentUserHistoryGroupByArgs['orderBy'] }
        : { orderBy?: GymEquipmentUserHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymEquipmentUserHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymEquipmentUserHistoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymEquipmentUserHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymEquipmentUserHistoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    GymEuquipmentsOnGyms<T extends GymEuquipmentsOnGymsArgs = {}>(args?: Subset<T, GymEuquipmentsOnGymsArgs>): CheckSelect<T, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGyms | null >, Prisma__GymEuquipmentsOnGymsClient<GymEuquipmentsOnGymsGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymEquipmentUserHistory findUnique
   */
  export type GymEquipmentUserHistoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
    /**
     * Throw an Error if a GymEquipmentUserHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEquipmentUserHistory to fetch.
     * 
    **/
    where: GymEquipmentUserHistoryWhereUniqueInput
  }


  /**
   * GymEquipmentUserHistory findFirst
   */
  export type GymEquipmentUserHistoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
    /**
     * Throw an Error if a GymEquipmentUserHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymEquipmentUserHistory to fetch.
     * 
    **/
    where?: GymEquipmentUserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipmentUserHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentUserHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymEquipmentUserHistories.
     * 
    **/
    cursor?: GymEquipmentUserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipmentUserHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipmentUserHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymEquipmentUserHistories.
     * 
    **/
    distinct?: Enumerable<GymEquipmentUserHistoryScalarFieldEnum>
  }


  /**
   * GymEquipmentUserHistory findMany
   */
  export type GymEquipmentUserHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
    /**
     * Filter, which GymEquipmentUserHistories to fetch.
     * 
    **/
    where?: GymEquipmentUserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymEquipmentUserHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymEquipmentUserHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymEquipmentUserHistories.
     * 
    **/
    cursor?: GymEquipmentUserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymEquipmentUserHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymEquipmentUserHistories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymEquipmentUserHistoryScalarFieldEnum>
  }


  /**
   * GymEquipmentUserHistory create
   */
  export type GymEquipmentUserHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
    /**
     * The data needed to create a GymEquipmentUserHistory.
     * 
    **/
    data: XOR<GymEquipmentUserHistoryCreateInput, GymEquipmentUserHistoryUncheckedCreateInput>
  }


  /**
   * GymEquipmentUserHistory createMany
   */
  export type GymEquipmentUserHistoryCreateManyArgs = {
    /**
     * The data used to create many GymEquipmentUserHistories.
     * 
    **/
    data: Enumerable<GymEquipmentUserHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymEquipmentUserHistory update
   */
  export type GymEquipmentUserHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
    /**
     * The data needed to update a GymEquipmentUserHistory.
     * 
    **/
    data: XOR<GymEquipmentUserHistoryUpdateInput, GymEquipmentUserHistoryUncheckedUpdateInput>
    /**
     * Choose, which GymEquipmentUserHistory to update.
     * 
    **/
    where: GymEquipmentUserHistoryWhereUniqueInput
  }


  /**
   * GymEquipmentUserHistory updateMany
   */
  export type GymEquipmentUserHistoryUpdateManyArgs = {
    /**
     * The data used to update GymEquipmentUserHistories.
     * 
    **/
    data: XOR<GymEquipmentUserHistoryUpdateManyMutationInput, GymEquipmentUserHistoryUncheckedUpdateManyInput>
    /**
     * Filter which GymEquipmentUserHistories to update
     * 
    **/
    where?: GymEquipmentUserHistoryWhereInput
  }


  /**
   * GymEquipmentUserHistory upsert
   */
  export type GymEquipmentUserHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
    /**
     * The filter to search for the GymEquipmentUserHistory to update in case it exists.
     * 
    **/
    where: GymEquipmentUserHistoryWhereUniqueInput
    /**
     * In case the GymEquipmentUserHistory found by the `where` argument doesn't exist, create a new GymEquipmentUserHistory with this data.
     * 
    **/
    create: XOR<GymEquipmentUserHistoryCreateInput, GymEquipmentUserHistoryUncheckedCreateInput>
    /**
     * In case the GymEquipmentUserHistory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymEquipmentUserHistoryUpdateInput, GymEquipmentUserHistoryUncheckedUpdateInput>
  }


  /**
   * GymEquipmentUserHistory delete
   */
  export type GymEquipmentUserHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
    /**
     * Filter which GymEquipmentUserHistory to delete.
     * 
    **/
    where: GymEquipmentUserHistoryWhereUniqueInput
  }


  /**
   * GymEquipmentUserHistory deleteMany
   */
  export type GymEquipmentUserHistoryDeleteManyArgs = {
    /**
     * Filter which GymEquipmentUserHistories to delete
     * 
    **/
    where?: GymEquipmentUserHistoryWhereInput
  }


  /**
   * GymEquipmentUserHistory without action
   */
  export type GymEquipmentUserHistoryArgs = {
    /**
     * Select specific fields to fetch from the GymEquipmentUserHistory
     * 
    **/
    select?: GymEquipmentUserHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymEquipmentUserHistoryInclude | null
  }



  /**
   * Model GymMembership
   */


  export type AggregateGymMembership = {
    _count: GymMembershipCountAggregateOutputType | null
    _avg: GymMembershipAvgAggregateOutputType | null
    _sum: GymMembershipSumAggregateOutputType | null
    _min: GymMembershipMinAggregateOutputType | null
    _max: GymMembershipMaxAggregateOutputType | null
  }

  export type GymMembershipAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    gymId: number | null
    assignBy: number | null
    gymMembershipCancellationId: number | null
  }

  export type GymMembershipSumAggregateOutputType = {
    id: number | null
    userId: number | null
    gymId: number | null
    assignBy: number | null
    gymMembershipCancellationId: number | null
  }

  export type GymMembershipMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    gymId: number | null
    assignBy: number | null
    startDay: Date | null
    endDay: Date | null
    gymMembershipCancellationId: number | null
  }

  export type GymMembershipMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    gymId: number | null
    assignBy: number | null
    startDay: Date | null
    endDay: Date | null
    gymMembershipCancellationId: number | null
  }

  export type GymMembershipCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    gymId: number
    assignBy: number
    startDay: number
    endDay: number
    gymMembershipCancellationId: number
    _all: number
  }


  export type GymMembershipAvgAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    assignBy?: true
    gymMembershipCancellationId?: true
  }

  export type GymMembershipSumAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    assignBy?: true
    gymMembershipCancellationId?: true
  }

  export type GymMembershipMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    gymId?: true
    assignBy?: true
    startDay?: true
    endDay?: true
    gymMembershipCancellationId?: true
  }

  export type GymMembershipMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    gymId?: true
    assignBy?: true
    startDay?: true
    endDay?: true
    gymMembershipCancellationId?: true
  }

  export type GymMembershipCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    gymId?: true
    assignBy?: true
    startDay?: true
    endDay?: true
    gymMembershipCancellationId?: true
    _all?: true
  }

  export type GymMembershipAggregateArgs = {
    /**
     * Filter which GymMembership to aggregate.
     * 
    **/
    where?: GymMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymMemberships to fetch.
     * 
    **/
    orderBy?: Enumerable<GymMembershipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymMemberships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymMemberships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymMemberships
    **/
    _count?: true | GymMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymMembershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymMembershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMembershipMaxAggregateInputType
  }

  export type GetGymMembershipAggregateType<T extends GymMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateGymMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymMembership[P]>
      : GetScalarType<T[P], AggregateGymMembership[P]>
  }




  export type GymMembershipGroupByArgs = {
    where?: GymMembershipWhereInput
    orderBy?: Enumerable<GymMembershipOrderByWithAggregationInput>
    by: Array<GymMembershipScalarFieldEnum>
    having?: GymMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymMembershipCountAggregateInputType | true
    _avg?: GymMembershipAvgAggregateInputType
    _sum?: GymMembershipSumAggregateInputType
    _min?: GymMembershipMinAggregateInputType
    _max?: GymMembershipMaxAggregateInputType
  }


  export type GymMembershipGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    gymId: number
    assignBy: number
    startDay: Date
    endDay: Date
    gymMembershipCancellationId: number | null
    _count: GymMembershipCountAggregateOutputType | null
    _avg: GymMembershipAvgAggregateOutputType | null
    _sum: GymMembershipSumAggregateOutputType | null
    _min: GymMembershipMinAggregateOutputType | null
    _max: GymMembershipMaxAggregateOutputType | null
  }

  type GetGymMembershipGroupByPayload<T extends GymMembershipGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], GymMembershipGroupByOutputType[P]>
        }
      >
    >


  export type GymMembershipSelect = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    Gym?: boolean | GymArgs
    gymId?: boolean
    assignBy?: boolean
    assignUser?: boolean | UserArgs
    startDay?: boolean
    endDay?: boolean
    gymMembershipCancellationId?: boolean
    GymMembershipCancellation?: boolean | GymMembershipCancellationArgs
  }

  export type GymMembershipInclude = {
    User?: boolean | UserArgs
    Gym?: boolean | GymArgs
    assignUser?: boolean | UserArgs
    GymMembershipCancellation?: boolean | GymMembershipCancellationArgs
  }

  export type GymMembershipGetPayload<
    S extends boolean | null | undefined | GymMembershipArgs,
    U = keyof S
      > = S extends true
        ? GymMembership
    : S extends undefined
    ? never
    : S extends GymMembershipArgs | GymMembershipFindManyArgs
    ?'include' extends U
    ? GymMembership  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Gym' ? GymGetPayload<S['include'][P]> :
        P extends 'assignUser' ? UserGetPayload<S['include'][P]> :
        P extends 'GymMembershipCancellation' ? GymMembershipCancellationGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Gym' ? GymGetPayload<S['select'][P]> :
        P extends 'assignUser' ? UserGetPayload<S['select'][P]> :
        P extends 'GymMembershipCancellation' ? GymMembershipCancellationGetPayload<S['select'][P]> | null :  P extends keyof GymMembership ? GymMembership[P] : never
  } 
    : GymMembership
  : GymMembership


  type GymMembershipCountArgs = Merge<
    Omit<GymMembershipFindManyArgs, 'select' | 'include'> & {
      select?: GymMembershipCountAggregateInputType | true
    }
  >

  export interface GymMembershipDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymMembership that matches the filter.
     * @param {GymMembershipFindUniqueArgs} args - Arguments to find a GymMembership
     * @example
     * // Get one GymMembership
     * const gymMembership = await prisma.gymMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymMembershipFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymMembershipFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymMembership'> extends True ? CheckSelect<T, Prisma__GymMembershipClient<GymMembership>, Prisma__GymMembershipClient<GymMembershipGetPayload<T>>> : CheckSelect<T, Prisma__GymMembershipClient<GymMembership | null >, Prisma__GymMembershipClient<GymMembershipGetPayload<T> | null >>

    /**
     * Find the first GymMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipFindFirstArgs} args - Arguments to find a GymMembership
     * @example
     * // Get one GymMembership
     * const gymMembership = await prisma.gymMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymMembershipFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymMembershipFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymMembership'> extends True ? CheckSelect<T, Prisma__GymMembershipClient<GymMembership>, Prisma__GymMembershipClient<GymMembershipGetPayload<T>>> : CheckSelect<T, Prisma__GymMembershipClient<GymMembership | null >, Prisma__GymMembershipClient<GymMembershipGetPayload<T> | null >>

    /**
     * Find zero or more GymMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymMemberships
     * const gymMemberships = await prisma.gymMembership.findMany()
     * 
     * // Get first 10 GymMemberships
     * const gymMemberships = await prisma.gymMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymMembershipWithIdOnly = await prisma.gymMembership.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymMembershipFindManyArgs>(
      args?: SelectSubset<T, GymMembershipFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymMembership>>, PrismaPromise<Array<GymMembershipGetPayload<T>>>>

    /**
     * Create a GymMembership.
     * @param {GymMembershipCreateArgs} args - Arguments to create a GymMembership.
     * @example
     * // Create one GymMembership
     * const GymMembership = await prisma.gymMembership.create({
     *   data: {
     *     // ... data to create a GymMembership
     *   }
     * })
     * 
    **/
    create<T extends GymMembershipCreateArgs>(
      args: SelectSubset<T, GymMembershipCreateArgs>
    ): CheckSelect<T, Prisma__GymMembershipClient<GymMembership>, Prisma__GymMembershipClient<GymMembershipGetPayload<T>>>

    /**
     * Create many GymMemberships.
     *     @param {GymMembershipCreateManyArgs} args - Arguments to create many GymMemberships.
     *     @example
     *     // Create many GymMemberships
     *     const gymMembership = await prisma.gymMembership.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymMembershipCreateManyArgs>(
      args?: SelectSubset<T, GymMembershipCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymMembership.
     * @param {GymMembershipDeleteArgs} args - Arguments to delete one GymMembership.
     * @example
     * // Delete one GymMembership
     * const GymMembership = await prisma.gymMembership.delete({
     *   where: {
     *     // ... filter to delete one GymMembership
     *   }
     * })
     * 
    **/
    delete<T extends GymMembershipDeleteArgs>(
      args: SelectSubset<T, GymMembershipDeleteArgs>
    ): CheckSelect<T, Prisma__GymMembershipClient<GymMembership>, Prisma__GymMembershipClient<GymMembershipGetPayload<T>>>

    /**
     * Update one GymMembership.
     * @param {GymMembershipUpdateArgs} args - Arguments to update one GymMembership.
     * @example
     * // Update one GymMembership
     * const gymMembership = await prisma.gymMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymMembershipUpdateArgs>(
      args: SelectSubset<T, GymMembershipUpdateArgs>
    ): CheckSelect<T, Prisma__GymMembershipClient<GymMembership>, Prisma__GymMembershipClient<GymMembershipGetPayload<T>>>

    /**
     * Delete zero or more GymMemberships.
     * @param {GymMembershipDeleteManyArgs} args - Arguments to filter GymMemberships to delete.
     * @example
     * // Delete a few GymMemberships
     * const { count } = await prisma.gymMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymMembershipDeleteManyArgs>(
      args?: SelectSubset<T, GymMembershipDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymMemberships
     * const gymMembership = await prisma.gymMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymMembershipUpdateManyArgs>(
      args: SelectSubset<T, GymMembershipUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymMembership.
     * @param {GymMembershipUpsertArgs} args - Arguments to update or create a GymMembership.
     * @example
     * // Update or create a GymMembership
     * const gymMembership = await prisma.gymMembership.upsert({
     *   create: {
     *     // ... data to create a GymMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymMembership we want to update
     *   }
     * })
    **/
    upsert<T extends GymMembershipUpsertArgs>(
      args: SelectSubset<T, GymMembershipUpsertArgs>
    ): CheckSelect<T, Prisma__GymMembershipClient<GymMembership>, Prisma__GymMembershipClient<GymMembershipGetPayload<T>>>

    /**
     * Count the number of GymMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipCountArgs} args - Arguments to filter GymMemberships to count.
     * @example
     * // Count the number of GymMemberships
     * const count = await prisma.gymMembership.count({
     *   where: {
     *     // ... the filter for the GymMemberships we want to count
     *   }
     * })
    **/
    count<T extends GymMembershipCountArgs>(
      args?: Subset<T, GymMembershipCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymMembershipAggregateArgs>(args: Subset<T, GymMembershipAggregateArgs>): PrismaPromise<GetGymMembershipAggregateType<T>>

    /**
     * Group by GymMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipGroupByArgs} args - Group by arguments.
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
      T extends GymMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymMembershipGroupByArgs['orderBy'] }
        : { orderBy?: GymMembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymMembershipGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymMembershipClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Gym<T extends GymArgs = {}>(args?: Subset<T, GymArgs>): CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>;

    assignUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    GymMembershipCancellation<T extends GymMembershipCancellationArgs = {}>(args?: Subset<T, GymMembershipCancellationArgs>): CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation | null >, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymMembership findUnique
   */
  export type GymMembershipFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
    /**
     * Throw an Error if a GymMembership can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymMembership to fetch.
     * 
    **/
    where: GymMembershipWhereUniqueInput
  }


  /**
   * GymMembership findFirst
   */
  export type GymMembershipFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
    /**
     * Throw an Error if a GymMembership can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymMembership to fetch.
     * 
    **/
    where?: GymMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymMemberships to fetch.
     * 
    **/
    orderBy?: Enumerable<GymMembershipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymMemberships.
     * 
    **/
    cursor?: GymMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymMemberships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymMemberships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymMemberships.
     * 
    **/
    distinct?: Enumerable<GymMembershipScalarFieldEnum>
  }


  /**
   * GymMembership findMany
   */
  export type GymMembershipFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
    /**
     * Filter, which GymMemberships to fetch.
     * 
    **/
    where?: GymMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymMemberships to fetch.
     * 
    **/
    orderBy?: Enumerable<GymMembershipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymMemberships.
     * 
    **/
    cursor?: GymMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymMemberships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymMemberships.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymMembershipScalarFieldEnum>
  }


  /**
   * GymMembership create
   */
  export type GymMembershipCreateArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
    /**
     * The data needed to create a GymMembership.
     * 
    **/
    data: XOR<GymMembershipCreateInput, GymMembershipUncheckedCreateInput>
  }


  /**
   * GymMembership createMany
   */
  export type GymMembershipCreateManyArgs = {
    /**
     * The data used to create many GymMemberships.
     * 
    **/
    data: Enumerable<GymMembershipCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymMembership update
   */
  export type GymMembershipUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
    /**
     * The data needed to update a GymMembership.
     * 
    **/
    data: XOR<GymMembershipUpdateInput, GymMembershipUncheckedUpdateInput>
    /**
     * Choose, which GymMembership to update.
     * 
    **/
    where: GymMembershipWhereUniqueInput
  }


  /**
   * GymMembership updateMany
   */
  export type GymMembershipUpdateManyArgs = {
    /**
     * The data used to update GymMemberships.
     * 
    **/
    data: XOR<GymMembershipUpdateManyMutationInput, GymMembershipUncheckedUpdateManyInput>
    /**
     * Filter which GymMemberships to update
     * 
    **/
    where?: GymMembershipWhereInput
  }


  /**
   * GymMembership upsert
   */
  export type GymMembershipUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
    /**
     * The filter to search for the GymMembership to update in case it exists.
     * 
    **/
    where: GymMembershipWhereUniqueInput
    /**
     * In case the GymMembership found by the `where` argument doesn't exist, create a new GymMembership with this data.
     * 
    **/
    create: XOR<GymMembershipCreateInput, GymMembershipUncheckedCreateInput>
    /**
     * In case the GymMembership was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymMembershipUpdateInput, GymMembershipUncheckedUpdateInput>
  }


  /**
   * GymMembership delete
   */
  export type GymMembershipDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
    /**
     * Filter which GymMembership to delete.
     * 
    **/
    where: GymMembershipWhereUniqueInput
  }


  /**
   * GymMembership deleteMany
   */
  export type GymMembershipDeleteManyArgs = {
    /**
     * Filter which GymMemberships to delete
     * 
    **/
    where?: GymMembershipWhereInput
  }


  /**
   * GymMembership without action
   */
  export type GymMembershipArgs = {
    /**
     * Select specific fields to fetch from the GymMembership
     * 
    **/
    select?: GymMembershipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipInclude | null
  }



  /**
   * Model GymMembershipCancellation
   */


  export type AggregateGymMembershipCancellation = {
    _count: GymMembershipCancellationCountAggregateOutputType | null
    _avg: GymMembershipCancellationAvgAggregateOutputType | null
    _sum: GymMembershipCancellationSumAggregateOutputType | null
    _min: GymMembershipCancellationMinAggregateOutputType | null
    _max: GymMembershipCancellationMaxAggregateOutputType | null
  }

  export type GymMembershipCancellationAvgAggregateOutputType = {
    id: number | null
  }

  export type GymMembershipCancellationSumAggregateOutputType = {
    id: number | null
  }

  export type GymMembershipCancellationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    reason: string | null
  }

  export type GymMembershipCancellationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    reason: string | null
  }

  export type GymMembershipCancellationCountAggregateOutputType = {
    id: number
    createdAt: number
    reason: number
    _all: number
  }


  export type GymMembershipCancellationAvgAggregateInputType = {
    id?: true
  }

  export type GymMembershipCancellationSumAggregateInputType = {
    id?: true
  }

  export type GymMembershipCancellationMinAggregateInputType = {
    id?: true
    createdAt?: true
    reason?: true
  }

  export type GymMembershipCancellationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    reason?: true
  }

  export type GymMembershipCancellationCountAggregateInputType = {
    id?: true
    createdAt?: true
    reason?: true
    _all?: true
  }

  export type GymMembershipCancellationAggregateArgs = {
    /**
     * Filter which GymMembershipCancellation to aggregate.
     * 
    **/
    where?: GymMembershipCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymMembershipCancellations to fetch.
     * 
    **/
    orderBy?: Enumerable<GymMembershipCancellationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymMembershipCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymMembershipCancellations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymMembershipCancellations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymMembershipCancellations
    **/
    _count?: true | GymMembershipCancellationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymMembershipCancellationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymMembershipCancellationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMembershipCancellationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMembershipCancellationMaxAggregateInputType
  }

  export type GetGymMembershipCancellationAggregateType<T extends GymMembershipCancellationAggregateArgs> = {
        [P in keyof T & keyof AggregateGymMembershipCancellation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymMembershipCancellation[P]>
      : GetScalarType<T[P], AggregateGymMembershipCancellation[P]>
  }




  export type GymMembershipCancellationGroupByArgs = {
    where?: GymMembershipCancellationWhereInput
    orderBy?: Enumerable<GymMembershipCancellationOrderByWithAggregationInput>
    by: Array<GymMembershipCancellationScalarFieldEnum>
    having?: GymMembershipCancellationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymMembershipCancellationCountAggregateInputType | true
    _avg?: GymMembershipCancellationAvgAggregateInputType
    _sum?: GymMembershipCancellationSumAggregateInputType
    _min?: GymMembershipCancellationMinAggregateInputType
    _max?: GymMembershipCancellationMaxAggregateInputType
  }


  export type GymMembershipCancellationGroupByOutputType = {
    id: number
    createdAt: Date
    reason: string | null
    _count: GymMembershipCancellationCountAggregateOutputType | null
    _avg: GymMembershipCancellationAvgAggregateOutputType | null
    _sum: GymMembershipCancellationSumAggregateOutputType | null
    _min: GymMembershipCancellationMinAggregateOutputType | null
    _max: GymMembershipCancellationMaxAggregateOutputType | null
  }

  type GetGymMembershipCancellationGroupByPayload<T extends GymMembershipCancellationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymMembershipCancellationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymMembershipCancellationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymMembershipCancellationGroupByOutputType[P]>
            : GetScalarType<T[P], GymMembershipCancellationGroupByOutputType[P]>
        }
      >
    >


  export type GymMembershipCancellationSelect = {
    id?: boolean
    createdAt?: boolean
    reason?: boolean
    GymMembership?: boolean | GymMembershipFindManyArgs
    _count?: boolean | GymMembershipCancellationCountOutputTypeArgs
  }

  export type GymMembershipCancellationInclude = {
    GymMembership?: boolean | GymMembershipFindManyArgs
    _count?: boolean | GymMembershipCancellationCountOutputTypeArgs
  }

  export type GymMembershipCancellationGetPayload<
    S extends boolean | null | undefined | GymMembershipCancellationArgs,
    U = keyof S
      > = S extends true
        ? GymMembershipCancellation
    : S extends undefined
    ? never
    : S extends GymMembershipCancellationArgs | GymMembershipCancellationFindManyArgs
    ?'include' extends U
    ? GymMembershipCancellation  & {
    [P in TrueKeys<S['include']>]:
        P extends 'GymMembership' ? Array < GymMembershipGetPayload<S['include'][P]>>  :
        P extends '_count' ? GymMembershipCancellationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'GymMembership' ? Array < GymMembershipGetPayload<S['select'][P]>>  :
        P extends '_count' ? GymMembershipCancellationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GymMembershipCancellation ? GymMembershipCancellation[P] : never
  } 
    : GymMembershipCancellation
  : GymMembershipCancellation


  type GymMembershipCancellationCountArgs = Merge<
    Omit<GymMembershipCancellationFindManyArgs, 'select' | 'include'> & {
      select?: GymMembershipCancellationCountAggregateInputType | true
    }
  >

  export interface GymMembershipCancellationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymMembershipCancellation that matches the filter.
     * @param {GymMembershipCancellationFindUniqueArgs} args - Arguments to find a GymMembershipCancellation
     * @example
     * // Get one GymMembershipCancellation
     * const gymMembershipCancellation = await prisma.gymMembershipCancellation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymMembershipCancellationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymMembershipCancellationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymMembershipCancellation'> extends True ? CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation>, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T>>> : CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation | null >, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T> | null >>

    /**
     * Find the first GymMembershipCancellation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipCancellationFindFirstArgs} args - Arguments to find a GymMembershipCancellation
     * @example
     * // Get one GymMembershipCancellation
     * const gymMembershipCancellation = await prisma.gymMembershipCancellation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymMembershipCancellationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymMembershipCancellationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymMembershipCancellation'> extends True ? CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation>, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T>>> : CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation | null >, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T> | null >>

    /**
     * Find zero or more GymMembershipCancellations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipCancellationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymMembershipCancellations
     * const gymMembershipCancellations = await prisma.gymMembershipCancellation.findMany()
     * 
     * // Get first 10 GymMembershipCancellations
     * const gymMembershipCancellations = await prisma.gymMembershipCancellation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymMembershipCancellationWithIdOnly = await prisma.gymMembershipCancellation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymMembershipCancellationFindManyArgs>(
      args?: SelectSubset<T, GymMembershipCancellationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymMembershipCancellation>>, PrismaPromise<Array<GymMembershipCancellationGetPayload<T>>>>

    /**
     * Create a GymMembershipCancellation.
     * @param {GymMembershipCancellationCreateArgs} args - Arguments to create a GymMembershipCancellation.
     * @example
     * // Create one GymMembershipCancellation
     * const GymMembershipCancellation = await prisma.gymMembershipCancellation.create({
     *   data: {
     *     // ... data to create a GymMembershipCancellation
     *   }
     * })
     * 
    **/
    create<T extends GymMembershipCancellationCreateArgs>(
      args: SelectSubset<T, GymMembershipCancellationCreateArgs>
    ): CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation>, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T>>>

    /**
     * Create many GymMembershipCancellations.
     *     @param {GymMembershipCancellationCreateManyArgs} args - Arguments to create many GymMembershipCancellations.
     *     @example
     *     // Create many GymMembershipCancellations
     *     const gymMembershipCancellation = await prisma.gymMembershipCancellation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymMembershipCancellationCreateManyArgs>(
      args?: SelectSubset<T, GymMembershipCancellationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymMembershipCancellation.
     * @param {GymMembershipCancellationDeleteArgs} args - Arguments to delete one GymMembershipCancellation.
     * @example
     * // Delete one GymMembershipCancellation
     * const GymMembershipCancellation = await prisma.gymMembershipCancellation.delete({
     *   where: {
     *     // ... filter to delete one GymMembershipCancellation
     *   }
     * })
     * 
    **/
    delete<T extends GymMembershipCancellationDeleteArgs>(
      args: SelectSubset<T, GymMembershipCancellationDeleteArgs>
    ): CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation>, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T>>>

    /**
     * Update one GymMembershipCancellation.
     * @param {GymMembershipCancellationUpdateArgs} args - Arguments to update one GymMembershipCancellation.
     * @example
     * // Update one GymMembershipCancellation
     * const gymMembershipCancellation = await prisma.gymMembershipCancellation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymMembershipCancellationUpdateArgs>(
      args: SelectSubset<T, GymMembershipCancellationUpdateArgs>
    ): CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation>, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T>>>

    /**
     * Delete zero or more GymMembershipCancellations.
     * @param {GymMembershipCancellationDeleteManyArgs} args - Arguments to filter GymMembershipCancellations to delete.
     * @example
     * // Delete a few GymMembershipCancellations
     * const { count } = await prisma.gymMembershipCancellation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymMembershipCancellationDeleteManyArgs>(
      args?: SelectSubset<T, GymMembershipCancellationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymMembershipCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipCancellationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymMembershipCancellations
     * const gymMembershipCancellation = await prisma.gymMembershipCancellation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymMembershipCancellationUpdateManyArgs>(
      args: SelectSubset<T, GymMembershipCancellationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymMembershipCancellation.
     * @param {GymMembershipCancellationUpsertArgs} args - Arguments to update or create a GymMembershipCancellation.
     * @example
     * // Update or create a GymMembershipCancellation
     * const gymMembershipCancellation = await prisma.gymMembershipCancellation.upsert({
     *   create: {
     *     // ... data to create a GymMembershipCancellation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymMembershipCancellation we want to update
     *   }
     * })
    **/
    upsert<T extends GymMembershipCancellationUpsertArgs>(
      args: SelectSubset<T, GymMembershipCancellationUpsertArgs>
    ): CheckSelect<T, Prisma__GymMembershipCancellationClient<GymMembershipCancellation>, Prisma__GymMembershipCancellationClient<GymMembershipCancellationGetPayload<T>>>

    /**
     * Count the number of GymMembershipCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipCancellationCountArgs} args - Arguments to filter GymMembershipCancellations to count.
     * @example
     * // Count the number of GymMembershipCancellations
     * const count = await prisma.gymMembershipCancellation.count({
     *   where: {
     *     // ... the filter for the GymMembershipCancellations we want to count
     *   }
     * })
    **/
    count<T extends GymMembershipCancellationCountArgs>(
      args?: Subset<T, GymMembershipCancellationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymMembershipCancellationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymMembershipCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipCancellationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymMembershipCancellationAggregateArgs>(args: Subset<T, GymMembershipCancellationAggregateArgs>): PrismaPromise<GetGymMembershipCancellationAggregateType<T>>

    /**
     * Group by GymMembershipCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymMembershipCancellationGroupByArgs} args - Group by arguments.
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
      T extends GymMembershipCancellationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymMembershipCancellationGroupByArgs['orderBy'] }
        : { orderBy?: GymMembershipCancellationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymMembershipCancellationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymMembershipCancellationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymMembershipCancellation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymMembershipCancellationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    GymMembership<T extends GymMembershipFindManyArgs = {}>(args?: Subset<T, GymMembershipFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GymMembership>>, PrismaPromise<Array<GymMembershipGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymMembershipCancellation findUnique
   */
  export type GymMembershipCancellationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
    /**
     * Throw an Error if a GymMembershipCancellation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymMembershipCancellation to fetch.
     * 
    **/
    where: GymMembershipCancellationWhereUniqueInput
  }


  /**
   * GymMembershipCancellation findFirst
   */
  export type GymMembershipCancellationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
    /**
     * Throw an Error if a GymMembershipCancellation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymMembershipCancellation to fetch.
     * 
    **/
    where?: GymMembershipCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymMembershipCancellations to fetch.
     * 
    **/
    orderBy?: Enumerable<GymMembershipCancellationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymMembershipCancellations.
     * 
    **/
    cursor?: GymMembershipCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymMembershipCancellations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymMembershipCancellations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymMembershipCancellations.
     * 
    **/
    distinct?: Enumerable<GymMembershipCancellationScalarFieldEnum>
  }


  /**
   * GymMembershipCancellation findMany
   */
  export type GymMembershipCancellationFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
    /**
     * Filter, which GymMembershipCancellations to fetch.
     * 
    **/
    where?: GymMembershipCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymMembershipCancellations to fetch.
     * 
    **/
    orderBy?: Enumerable<GymMembershipCancellationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymMembershipCancellations.
     * 
    **/
    cursor?: GymMembershipCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymMembershipCancellations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymMembershipCancellations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymMembershipCancellationScalarFieldEnum>
  }


  /**
   * GymMembershipCancellation create
   */
  export type GymMembershipCancellationCreateArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
    /**
     * The data needed to create a GymMembershipCancellation.
     * 
    **/
    data: XOR<GymMembershipCancellationCreateInput, GymMembershipCancellationUncheckedCreateInput>
  }


  /**
   * GymMembershipCancellation createMany
   */
  export type GymMembershipCancellationCreateManyArgs = {
    /**
     * The data used to create many GymMembershipCancellations.
     * 
    **/
    data: Enumerable<GymMembershipCancellationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymMembershipCancellation update
   */
  export type GymMembershipCancellationUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
    /**
     * The data needed to update a GymMembershipCancellation.
     * 
    **/
    data: XOR<GymMembershipCancellationUpdateInput, GymMembershipCancellationUncheckedUpdateInput>
    /**
     * Choose, which GymMembershipCancellation to update.
     * 
    **/
    where: GymMembershipCancellationWhereUniqueInput
  }


  /**
   * GymMembershipCancellation updateMany
   */
  export type GymMembershipCancellationUpdateManyArgs = {
    /**
     * The data used to update GymMembershipCancellations.
     * 
    **/
    data: XOR<GymMembershipCancellationUpdateManyMutationInput, GymMembershipCancellationUncheckedUpdateManyInput>
    /**
     * Filter which GymMembershipCancellations to update
     * 
    **/
    where?: GymMembershipCancellationWhereInput
  }


  /**
   * GymMembershipCancellation upsert
   */
  export type GymMembershipCancellationUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
    /**
     * The filter to search for the GymMembershipCancellation to update in case it exists.
     * 
    **/
    where: GymMembershipCancellationWhereUniqueInput
    /**
     * In case the GymMembershipCancellation found by the `where` argument doesn't exist, create a new GymMembershipCancellation with this data.
     * 
    **/
    create: XOR<GymMembershipCancellationCreateInput, GymMembershipCancellationUncheckedCreateInput>
    /**
     * In case the GymMembershipCancellation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymMembershipCancellationUpdateInput, GymMembershipCancellationUncheckedUpdateInput>
  }


  /**
   * GymMembershipCancellation delete
   */
  export type GymMembershipCancellationDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
    /**
     * Filter which GymMembershipCancellation to delete.
     * 
    **/
    where: GymMembershipCancellationWhereUniqueInput
  }


  /**
   * GymMembershipCancellation deleteMany
   */
  export type GymMembershipCancellationDeleteManyArgs = {
    /**
     * Filter which GymMembershipCancellations to delete
     * 
    **/
    where?: GymMembershipCancellationWhereInput
  }


  /**
   * GymMembershipCancellation without action
   */
  export type GymMembershipCancellationArgs = {
    /**
     * Select specific fields to fetch from the GymMembershipCancellation
     * 
    **/
    select?: GymMembershipCancellationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymMembershipCancellationInclude | null
  }



  /**
   * Model FavoriteGym
   */


  export type AggregateFavoriteGym = {
    _count: FavoriteGymCountAggregateOutputType | null
    _avg: FavoriteGymAvgAggregateOutputType | null
    _sum: FavoriteGymSumAggregateOutputType | null
    _min: FavoriteGymMinAggregateOutputType | null
    _max: FavoriteGymMaxAggregateOutputType | null
  }

  export type FavoriteGymAvgAggregateOutputType = {
    gymId: number | null
    userId: number | null
  }

  export type FavoriteGymSumAggregateOutputType = {
    gymId: number | null
    userId: number | null
  }

  export type FavoriteGymMinAggregateOutputType = {
    gymId: number | null
    userId: number | null
    assignedAt: Date | null
  }

  export type FavoriteGymMaxAggregateOutputType = {
    gymId: number | null
    userId: number | null
    assignedAt: Date | null
  }

  export type FavoriteGymCountAggregateOutputType = {
    gymId: number
    userId: number
    assignedAt: number
    _all: number
  }


  export type FavoriteGymAvgAggregateInputType = {
    gymId?: true
    userId?: true
  }

  export type FavoriteGymSumAggregateInputType = {
    gymId?: true
    userId?: true
  }

  export type FavoriteGymMinAggregateInputType = {
    gymId?: true
    userId?: true
    assignedAt?: true
  }

  export type FavoriteGymMaxAggregateInputType = {
    gymId?: true
    userId?: true
    assignedAt?: true
  }

  export type FavoriteGymCountAggregateInputType = {
    gymId?: true
    userId?: true
    assignedAt?: true
    _all?: true
  }

  export type FavoriteGymAggregateArgs = {
    /**
     * Filter which FavoriteGym to aggregate.
     * 
    **/
    where?: FavoriteGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteGyms to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteGymOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FavoriteGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteGyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteGyms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteGyms
    **/
    _count?: true | FavoriteGymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteGymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteGymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteGymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteGymMaxAggregateInputType
  }

  export type GetFavoriteGymAggregateType<T extends FavoriteGymAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteGym[P]>
      : GetScalarType<T[P], AggregateFavoriteGym[P]>
  }




  export type FavoriteGymGroupByArgs = {
    where?: FavoriteGymWhereInput
    orderBy?: Enumerable<FavoriteGymOrderByWithAggregationInput>
    by: Array<FavoriteGymScalarFieldEnum>
    having?: FavoriteGymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteGymCountAggregateInputType | true
    _avg?: FavoriteGymAvgAggregateInputType
    _sum?: FavoriteGymSumAggregateInputType
    _min?: FavoriteGymMinAggregateInputType
    _max?: FavoriteGymMaxAggregateInputType
  }


  export type FavoriteGymGroupByOutputType = {
    gymId: number
    userId: number
    assignedAt: Date
    _count: FavoriteGymCountAggregateOutputType | null
    _avg: FavoriteGymAvgAggregateOutputType | null
    _sum: FavoriteGymSumAggregateOutputType | null
    _min: FavoriteGymMinAggregateOutputType | null
    _max: FavoriteGymMaxAggregateOutputType | null
  }

  type GetFavoriteGymGroupByPayload<T extends FavoriteGymGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FavoriteGymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGymGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGymGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteGymSelect = {
    Gym?: boolean | GymArgs
    gymId?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    assignedAt?: boolean
  }

  export type FavoriteGymInclude = {
    Gym?: boolean | GymArgs
    User?: boolean | UserArgs
  }

  export type FavoriteGymGetPayload<
    S extends boolean | null | undefined | FavoriteGymArgs,
    U = keyof S
      > = S extends true
        ? FavoriteGym
    : S extends undefined
    ? never
    : S extends FavoriteGymArgs | FavoriteGymFindManyArgs
    ?'include' extends U
    ? FavoriteGym  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Gym' ? GymGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Gym' ? GymGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof FavoriteGym ? FavoriteGym[P] : never
  } 
    : FavoriteGym
  : FavoriteGym


  type FavoriteGymCountArgs = Merge<
    Omit<FavoriteGymFindManyArgs, 'select' | 'include'> & {
      select?: FavoriteGymCountAggregateInputType | true
    }
  >

  export interface FavoriteGymDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FavoriteGym that matches the filter.
     * @param {FavoriteGymFindUniqueArgs} args - Arguments to find a FavoriteGym
     * @example
     * // Get one FavoriteGym
     * const favoriteGym = await prisma.favoriteGym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteGymFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FavoriteGymFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FavoriteGym'> extends True ? CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym>, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T>>> : CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym | null >, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T> | null >>

    /**
     * Find the first FavoriteGym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGymFindFirstArgs} args - Arguments to find a FavoriteGym
     * @example
     * // Get one FavoriteGym
     * const favoriteGym = await prisma.favoriteGym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteGymFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FavoriteGymFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FavoriteGym'> extends True ? CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym>, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T>>> : CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym | null >, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T> | null >>

    /**
     * Find zero or more FavoriteGyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGymFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteGyms
     * const favoriteGyms = await prisma.favoriteGym.findMany()
     * 
     * // Get first 10 FavoriteGyms
     * const favoriteGyms = await prisma.favoriteGym.findMany({ take: 10 })
     * 
     * // Only select the `gymId`
     * const favoriteGymWithGymIdOnly = await prisma.favoriteGym.findMany({ select: { gymId: true } })
     * 
    **/
    findMany<T extends FavoriteGymFindManyArgs>(
      args?: SelectSubset<T, FavoriteGymFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FavoriteGym>>, PrismaPromise<Array<FavoriteGymGetPayload<T>>>>

    /**
     * Create a FavoriteGym.
     * @param {FavoriteGymCreateArgs} args - Arguments to create a FavoriteGym.
     * @example
     * // Create one FavoriteGym
     * const FavoriteGym = await prisma.favoriteGym.create({
     *   data: {
     *     // ... data to create a FavoriteGym
     *   }
     * })
     * 
    **/
    create<T extends FavoriteGymCreateArgs>(
      args: SelectSubset<T, FavoriteGymCreateArgs>
    ): CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym>, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T>>>

    /**
     * Create many FavoriteGyms.
     *     @param {FavoriteGymCreateManyArgs} args - Arguments to create many FavoriteGyms.
     *     @example
     *     // Create many FavoriteGyms
     *     const favoriteGym = await prisma.favoriteGym.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FavoriteGymCreateManyArgs>(
      args?: SelectSubset<T, FavoriteGymCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FavoriteGym.
     * @param {FavoriteGymDeleteArgs} args - Arguments to delete one FavoriteGym.
     * @example
     * // Delete one FavoriteGym
     * const FavoriteGym = await prisma.favoriteGym.delete({
     *   where: {
     *     // ... filter to delete one FavoriteGym
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteGymDeleteArgs>(
      args: SelectSubset<T, FavoriteGymDeleteArgs>
    ): CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym>, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T>>>

    /**
     * Update one FavoriteGym.
     * @param {FavoriteGymUpdateArgs} args - Arguments to update one FavoriteGym.
     * @example
     * // Update one FavoriteGym
     * const favoriteGym = await prisma.favoriteGym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteGymUpdateArgs>(
      args: SelectSubset<T, FavoriteGymUpdateArgs>
    ): CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym>, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T>>>

    /**
     * Delete zero or more FavoriteGyms.
     * @param {FavoriteGymDeleteManyArgs} args - Arguments to filter FavoriteGyms to delete.
     * @example
     * // Delete a few FavoriteGyms
     * const { count } = await prisma.favoriteGym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteGymDeleteManyArgs>(
      args?: SelectSubset<T, FavoriteGymDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteGyms
     * const favoriteGym = await prisma.favoriteGym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteGymUpdateManyArgs>(
      args: SelectSubset<T, FavoriteGymUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteGym.
     * @param {FavoriteGymUpsertArgs} args - Arguments to update or create a FavoriteGym.
     * @example
     * // Update or create a FavoriteGym
     * const favoriteGym = await prisma.favoriteGym.upsert({
     *   create: {
     *     // ... data to create a FavoriteGym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteGym we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteGymUpsertArgs>(
      args: SelectSubset<T, FavoriteGymUpsertArgs>
    ): CheckSelect<T, Prisma__FavoriteGymClient<FavoriteGym>, Prisma__FavoriteGymClient<FavoriteGymGetPayload<T>>>

    /**
     * Count the number of FavoriteGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGymCountArgs} args - Arguments to filter FavoriteGyms to count.
     * @example
     * // Count the number of FavoriteGyms
     * const count = await prisma.favoriteGym.count({
     *   where: {
     *     // ... the filter for the FavoriteGyms we want to count
     *   }
     * })
    **/
    count<T extends FavoriteGymCountArgs>(
      args?: Subset<T, FavoriteGymCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteGymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteGym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteGymAggregateArgs>(args: Subset<T, FavoriteGymAggregateArgs>): PrismaPromise<GetFavoriteGymAggregateType<T>>

    /**
     * Group by FavoriteGym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGymGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGymGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FavoriteGymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGymGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteGym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FavoriteGymClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Gym<T extends GymArgs = {}>(args?: Subset<T, GymArgs>): CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FavoriteGym findUnique
   */
  export type FavoriteGymFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
    /**
     * Throw an Error if a FavoriteGym can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FavoriteGym to fetch.
     * 
    **/
    where: FavoriteGymWhereUniqueInput
  }


  /**
   * FavoriteGym findFirst
   */
  export type FavoriteGymFindFirstArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
    /**
     * Throw an Error if a FavoriteGym can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FavoriteGym to fetch.
     * 
    **/
    where?: FavoriteGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteGyms to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteGymOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteGyms.
     * 
    **/
    cursor?: FavoriteGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteGyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteGyms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteGyms.
     * 
    **/
    distinct?: Enumerable<FavoriteGymScalarFieldEnum>
  }


  /**
   * FavoriteGym findMany
   */
  export type FavoriteGymFindManyArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
    /**
     * Filter, which FavoriteGyms to fetch.
     * 
    **/
    where?: FavoriteGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteGyms to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteGymOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteGyms.
     * 
    **/
    cursor?: FavoriteGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteGyms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteGyms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FavoriteGymScalarFieldEnum>
  }


  /**
   * FavoriteGym create
   */
  export type FavoriteGymCreateArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
    /**
     * The data needed to create a FavoriteGym.
     * 
    **/
    data: XOR<FavoriteGymCreateInput, FavoriteGymUncheckedCreateInput>
  }


  /**
   * FavoriteGym createMany
   */
  export type FavoriteGymCreateManyArgs = {
    /**
     * The data used to create many FavoriteGyms.
     * 
    **/
    data: Enumerable<FavoriteGymCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FavoriteGym update
   */
  export type FavoriteGymUpdateArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
    /**
     * The data needed to update a FavoriteGym.
     * 
    **/
    data: XOR<FavoriteGymUpdateInput, FavoriteGymUncheckedUpdateInput>
    /**
     * Choose, which FavoriteGym to update.
     * 
    **/
    where: FavoriteGymWhereUniqueInput
  }


  /**
   * FavoriteGym updateMany
   */
  export type FavoriteGymUpdateManyArgs = {
    /**
     * The data used to update FavoriteGyms.
     * 
    **/
    data: XOR<FavoriteGymUpdateManyMutationInput, FavoriteGymUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteGyms to update
     * 
    **/
    where?: FavoriteGymWhereInput
  }


  /**
   * FavoriteGym upsert
   */
  export type FavoriteGymUpsertArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
    /**
     * The filter to search for the FavoriteGym to update in case it exists.
     * 
    **/
    where: FavoriteGymWhereUniqueInput
    /**
     * In case the FavoriteGym found by the `where` argument doesn't exist, create a new FavoriteGym with this data.
     * 
    **/
    create: XOR<FavoriteGymCreateInput, FavoriteGymUncheckedCreateInput>
    /**
     * In case the FavoriteGym was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FavoriteGymUpdateInput, FavoriteGymUncheckedUpdateInput>
  }


  /**
   * FavoriteGym delete
   */
  export type FavoriteGymDeleteArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
    /**
     * Filter which FavoriteGym to delete.
     * 
    **/
    where: FavoriteGymWhereUniqueInput
  }


  /**
   * FavoriteGym deleteMany
   */
  export type FavoriteGymDeleteManyArgs = {
    /**
     * Filter which FavoriteGyms to delete
     * 
    **/
    where?: FavoriteGymWhereInput
  }


  /**
   * FavoriteGym without action
   */
  export type FavoriteGymArgs = {
    /**
     * Select specific fields to fetch from the FavoriteGym
     * 
    **/
    select?: FavoriteGymSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteGymInclude | null
  }



  /**
   * Model GymAccessHistory
   */


  export type AggregateGymAccessHistory = {
    _count: GymAccessHistoryCountAggregateOutputType | null
    _avg: GymAccessHistoryAvgAggregateOutputType | null
    _sum: GymAccessHistorySumAggregateOutputType | null
    _min: GymAccessHistoryMinAggregateOutputType | null
    _max: GymAccessHistoryMaxAggregateOutputType | null
  }

  export type GymAccessHistoryAvgAggregateOutputType = {
    id: number | null
    gymId: number | null
    userId: number | null
  }

  export type GymAccessHistorySumAggregateOutputType = {
    id: number | null
    gymId: number | null
    userId: number | null
  }

  export type GymAccessHistoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gymId: number | null
    userId: number | null
    entryAt: Date | null
    exitAt: Date | null
  }

  export type GymAccessHistoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gymId: number | null
    userId: number | null
    entryAt: Date | null
    exitAt: Date | null
  }

  export type GymAccessHistoryCountAggregateOutputType = {
    id: number
    createdAt: number
    gymId: number
    userId: number
    entryAt: number
    exitAt: number
    _all: number
  }


  export type GymAccessHistoryAvgAggregateInputType = {
    id?: true
    gymId?: true
    userId?: true
  }

  export type GymAccessHistorySumAggregateInputType = {
    id?: true
    gymId?: true
    userId?: true
  }

  export type GymAccessHistoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    userId?: true
    entryAt?: true
    exitAt?: true
  }

  export type GymAccessHistoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    userId?: true
    entryAt?: true
    exitAt?: true
  }

  export type GymAccessHistoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    userId?: true
    entryAt?: true
    exitAt?: true
    _all?: true
  }

  export type GymAccessHistoryAggregateArgs = {
    /**
     * Filter which GymAccessHistory to aggregate.
     * 
    **/
    where?: GymAccessHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymAccessHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymAccessHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymAccessHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymAccessHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymAccessHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymAccessHistories
    **/
    _count?: true | GymAccessHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymAccessHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymAccessHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymAccessHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymAccessHistoryMaxAggregateInputType
  }

  export type GetGymAccessHistoryAggregateType<T extends GymAccessHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGymAccessHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymAccessHistory[P]>
      : GetScalarType<T[P], AggregateGymAccessHistory[P]>
  }




  export type GymAccessHistoryGroupByArgs = {
    where?: GymAccessHistoryWhereInput
    orderBy?: Enumerable<GymAccessHistoryOrderByWithAggregationInput>
    by: Array<GymAccessHistoryScalarFieldEnum>
    having?: GymAccessHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymAccessHistoryCountAggregateInputType | true
    _avg?: GymAccessHistoryAvgAggregateInputType
    _sum?: GymAccessHistorySumAggregateInputType
    _min?: GymAccessHistoryMinAggregateInputType
    _max?: GymAccessHistoryMaxAggregateInputType
  }


  export type GymAccessHistoryGroupByOutputType = {
    id: number
    createdAt: Date
    gymId: number
    userId: number
    entryAt: Date
    exitAt: Date | null
    _count: GymAccessHistoryCountAggregateOutputType | null
    _avg: GymAccessHistoryAvgAggregateOutputType | null
    _sum: GymAccessHistorySumAggregateOutputType | null
    _min: GymAccessHistoryMinAggregateOutputType | null
    _max: GymAccessHistoryMaxAggregateOutputType | null
  }

  type GetGymAccessHistoryGroupByPayload<T extends GymAccessHistoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymAccessHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymAccessHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymAccessHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], GymAccessHistoryGroupByOutputType[P]>
        }
      >
    >


  export type GymAccessHistorySelect = {
    id?: boolean
    createdAt?: boolean
    Gym?: boolean | GymArgs
    gymId?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    entryAt?: boolean
    exitAt?: boolean
  }

  export type GymAccessHistoryInclude = {
    Gym?: boolean | GymArgs
    User?: boolean | UserArgs
  }

  export type GymAccessHistoryGetPayload<
    S extends boolean | null | undefined | GymAccessHistoryArgs,
    U = keyof S
      > = S extends true
        ? GymAccessHistory
    : S extends undefined
    ? never
    : S extends GymAccessHistoryArgs | GymAccessHistoryFindManyArgs
    ?'include' extends U
    ? GymAccessHistory  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Gym' ? GymGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Gym' ? GymGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof GymAccessHistory ? GymAccessHistory[P] : never
  } 
    : GymAccessHistory
  : GymAccessHistory


  type GymAccessHistoryCountArgs = Merge<
    Omit<GymAccessHistoryFindManyArgs, 'select' | 'include'> & {
      select?: GymAccessHistoryCountAggregateInputType | true
    }
  >

  export interface GymAccessHistoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymAccessHistory that matches the filter.
     * @param {GymAccessHistoryFindUniqueArgs} args - Arguments to find a GymAccessHistory
     * @example
     * // Get one GymAccessHistory
     * const gymAccessHistory = await prisma.gymAccessHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymAccessHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymAccessHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymAccessHistory'> extends True ? CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory>, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T>>> : CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory | null >, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T> | null >>

    /**
     * Find the first GymAccessHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAccessHistoryFindFirstArgs} args - Arguments to find a GymAccessHistory
     * @example
     * // Get one GymAccessHistory
     * const gymAccessHistory = await prisma.gymAccessHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymAccessHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymAccessHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymAccessHistory'> extends True ? CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory>, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T>>> : CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory | null >, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T> | null >>

    /**
     * Find zero or more GymAccessHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAccessHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymAccessHistories
     * const gymAccessHistories = await prisma.gymAccessHistory.findMany()
     * 
     * // Get first 10 GymAccessHistories
     * const gymAccessHistories = await prisma.gymAccessHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymAccessHistoryWithIdOnly = await prisma.gymAccessHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymAccessHistoryFindManyArgs>(
      args?: SelectSubset<T, GymAccessHistoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymAccessHistory>>, PrismaPromise<Array<GymAccessHistoryGetPayload<T>>>>

    /**
     * Create a GymAccessHistory.
     * @param {GymAccessHistoryCreateArgs} args - Arguments to create a GymAccessHistory.
     * @example
     * // Create one GymAccessHistory
     * const GymAccessHistory = await prisma.gymAccessHistory.create({
     *   data: {
     *     // ... data to create a GymAccessHistory
     *   }
     * })
     * 
    **/
    create<T extends GymAccessHistoryCreateArgs>(
      args: SelectSubset<T, GymAccessHistoryCreateArgs>
    ): CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory>, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T>>>

    /**
     * Create many GymAccessHistories.
     *     @param {GymAccessHistoryCreateManyArgs} args - Arguments to create many GymAccessHistories.
     *     @example
     *     // Create many GymAccessHistories
     *     const gymAccessHistory = await prisma.gymAccessHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymAccessHistoryCreateManyArgs>(
      args?: SelectSubset<T, GymAccessHistoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymAccessHistory.
     * @param {GymAccessHistoryDeleteArgs} args - Arguments to delete one GymAccessHistory.
     * @example
     * // Delete one GymAccessHistory
     * const GymAccessHistory = await prisma.gymAccessHistory.delete({
     *   where: {
     *     // ... filter to delete one GymAccessHistory
     *   }
     * })
     * 
    **/
    delete<T extends GymAccessHistoryDeleteArgs>(
      args: SelectSubset<T, GymAccessHistoryDeleteArgs>
    ): CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory>, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T>>>

    /**
     * Update one GymAccessHistory.
     * @param {GymAccessHistoryUpdateArgs} args - Arguments to update one GymAccessHistory.
     * @example
     * // Update one GymAccessHistory
     * const gymAccessHistory = await prisma.gymAccessHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymAccessHistoryUpdateArgs>(
      args: SelectSubset<T, GymAccessHistoryUpdateArgs>
    ): CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory>, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T>>>

    /**
     * Delete zero or more GymAccessHistories.
     * @param {GymAccessHistoryDeleteManyArgs} args - Arguments to filter GymAccessHistories to delete.
     * @example
     * // Delete a few GymAccessHistories
     * const { count } = await prisma.gymAccessHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymAccessHistoryDeleteManyArgs>(
      args?: SelectSubset<T, GymAccessHistoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymAccessHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAccessHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymAccessHistories
     * const gymAccessHistory = await prisma.gymAccessHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymAccessHistoryUpdateManyArgs>(
      args: SelectSubset<T, GymAccessHistoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymAccessHistory.
     * @param {GymAccessHistoryUpsertArgs} args - Arguments to update or create a GymAccessHistory.
     * @example
     * // Update or create a GymAccessHistory
     * const gymAccessHistory = await prisma.gymAccessHistory.upsert({
     *   create: {
     *     // ... data to create a GymAccessHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymAccessHistory we want to update
     *   }
     * })
    **/
    upsert<T extends GymAccessHistoryUpsertArgs>(
      args: SelectSubset<T, GymAccessHistoryUpsertArgs>
    ): CheckSelect<T, Prisma__GymAccessHistoryClient<GymAccessHistory>, Prisma__GymAccessHistoryClient<GymAccessHistoryGetPayload<T>>>

    /**
     * Count the number of GymAccessHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAccessHistoryCountArgs} args - Arguments to filter GymAccessHistories to count.
     * @example
     * // Count the number of GymAccessHistories
     * const count = await prisma.gymAccessHistory.count({
     *   where: {
     *     // ... the filter for the GymAccessHistories we want to count
     *   }
     * })
    **/
    count<T extends GymAccessHistoryCountArgs>(
      args?: Subset<T, GymAccessHistoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymAccessHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymAccessHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAccessHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymAccessHistoryAggregateArgs>(args: Subset<T, GymAccessHistoryAggregateArgs>): PrismaPromise<GetGymAccessHistoryAggregateType<T>>

    /**
     * Group by GymAccessHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAccessHistoryGroupByArgs} args - Group by arguments.
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
      T extends GymAccessHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymAccessHistoryGroupByArgs['orderBy'] }
        : { orderBy?: GymAccessHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymAccessHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymAccessHistoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymAccessHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymAccessHistoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Gym<T extends GymArgs = {}>(args?: Subset<T, GymArgs>): CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymAccessHistory findUnique
   */
  export type GymAccessHistoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
    /**
     * Throw an Error if a GymAccessHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymAccessHistory to fetch.
     * 
    **/
    where: GymAccessHistoryWhereUniqueInput
  }


  /**
   * GymAccessHistory findFirst
   */
  export type GymAccessHistoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
    /**
     * Throw an Error if a GymAccessHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymAccessHistory to fetch.
     * 
    **/
    where?: GymAccessHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymAccessHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymAccessHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymAccessHistories.
     * 
    **/
    cursor?: GymAccessHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymAccessHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymAccessHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymAccessHistories.
     * 
    **/
    distinct?: Enumerable<GymAccessHistoryScalarFieldEnum>
  }


  /**
   * GymAccessHistory findMany
   */
  export type GymAccessHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
    /**
     * Filter, which GymAccessHistories to fetch.
     * 
    **/
    where?: GymAccessHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymAccessHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymAccessHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymAccessHistories.
     * 
    **/
    cursor?: GymAccessHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymAccessHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymAccessHistories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymAccessHistoryScalarFieldEnum>
  }


  /**
   * GymAccessHistory create
   */
  export type GymAccessHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
    /**
     * The data needed to create a GymAccessHistory.
     * 
    **/
    data: XOR<GymAccessHistoryCreateInput, GymAccessHistoryUncheckedCreateInput>
  }


  /**
   * GymAccessHistory createMany
   */
  export type GymAccessHistoryCreateManyArgs = {
    /**
     * The data used to create many GymAccessHistories.
     * 
    **/
    data: Enumerable<GymAccessHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymAccessHistory update
   */
  export type GymAccessHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
    /**
     * The data needed to update a GymAccessHistory.
     * 
    **/
    data: XOR<GymAccessHistoryUpdateInput, GymAccessHistoryUncheckedUpdateInput>
    /**
     * Choose, which GymAccessHistory to update.
     * 
    **/
    where: GymAccessHistoryWhereUniqueInput
  }


  /**
   * GymAccessHistory updateMany
   */
  export type GymAccessHistoryUpdateManyArgs = {
    /**
     * The data used to update GymAccessHistories.
     * 
    **/
    data: XOR<GymAccessHistoryUpdateManyMutationInput, GymAccessHistoryUncheckedUpdateManyInput>
    /**
     * Filter which GymAccessHistories to update
     * 
    **/
    where?: GymAccessHistoryWhereInput
  }


  /**
   * GymAccessHistory upsert
   */
  export type GymAccessHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
    /**
     * The filter to search for the GymAccessHistory to update in case it exists.
     * 
    **/
    where: GymAccessHistoryWhereUniqueInput
    /**
     * In case the GymAccessHistory found by the `where` argument doesn't exist, create a new GymAccessHistory with this data.
     * 
    **/
    create: XOR<GymAccessHistoryCreateInput, GymAccessHistoryUncheckedCreateInput>
    /**
     * In case the GymAccessHistory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymAccessHistoryUpdateInput, GymAccessHistoryUncheckedUpdateInput>
  }


  /**
   * GymAccessHistory delete
   */
  export type GymAccessHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
    /**
     * Filter which GymAccessHistory to delete.
     * 
    **/
    where: GymAccessHistoryWhereUniqueInput
  }


  /**
   * GymAccessHistory deleteMany
   */
  export type GymAccessHistoryDeleteManyArgs = {
    /**
     * Filter which GymAccessHistories to delete
     * 
    **/
    where?: GymAccessHistoryWhereInput
  }


  /**
   * GymAccessHistory without action
   */
  export type GymAccessHistoryArgs = {
    /**
     * Select specific fields to fetch from the GymAccessHistory
     * 
    **/
    select?: GymAccessHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymAccessHistoryInclude | null
  }



  /**
   * Model GymPassHistory
   */


  export type AggregateGymPassHistory = {
    _count: GymPassHistoryCountAggregateOutputType | null
    _avg: GymPassHistoryAvgAggregateOutputType | null
    _sum: GymPassHistorySumAggregateOutputType | null
    _min: GymPassHistoryMinAggregateOutputType | null
    _max: GymPassHistoryMaxAggregateOutputType | null
  }

  export type GymPassHistoryAvgAggregateOutputType = {
    id: number | null
    gymId: number | null
    userId: number | null
  }

  export type GymPassHistorySumAggregateOutputType = {
    id: number | null
    gymId: number | null
    userId: number | null
  }

  export type GymPassHistoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gymId: number | null
    userId: number | null
    hash: string | null
  }

  export type GymPassHistoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gymId: number | null
    userId: number | null
    hash: string | null
  }

  export type GymPassHistoryCountAggregateOutputType = {
    id: number
    createdAt: number
    gymId: number
    userId: number
    hash: number
    _all: number
  }


  export type GymPassHistoryAvgAggregateInputType = {
    id?: true
    gymId?: true
    userId?: true
  }

  export type GymPassHistorySumAggregateInputType = {
    id?: true
    gymId?: true
    userId?: true
  }

  export type GymPassHistoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    userId?: true
    hash?: true
  }

  export type GymPassHistoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    userId?: true
    hash?: true
  }

  export type GymPassHistoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    gymId?: true
    userId?: true
    hash?: true
    _all?: true
  }

  export type GymPassHistoryAggregateArgs = {
    /**
     * Filter which GymPassHistory to aggregate.
     * 
    **/
    where?: GymPassHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymPassHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymPassHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GymPassHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymPassHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymPassHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymPassHistories
    **/
    _count?: true | GymPassHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymPassHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymPassHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymPassHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymPassHistoryMaxAggregateInputType
  }

  export type GetGymPassHistoryAggregateType<T extends GymPassHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGymPassHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymPassHistory[P]>
      : GetScalarType<T[P], AggregateGymPassHistory[P]>
  }




  export type GymPassHistoryGroupByArgs = {
    where?: GymPassHistoryWhereInput
    orderBy?: Enumerable<GymPassHistoryOrderByWithAggregationInput>
    by: Array<GymPassHistoryScalarFieldEnum>
    having?: GymPassHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymPassHistoryCountAggregateInputType | true
    _avg?: GymPassHistoryAvgAggregateInputType
    _sum?: GymPassHistorySumAggregateInputType
    _min?: GymPassHistoryMinAggregateInputType
    _max?: GymPassHistoryMaxAggregateInputType
  }


  export type GymPassHistoryGroupByOutputType = {
    id: number
    createdAt: Date
    gymId: number
    userId: number
    hash: string
    _count: GymPassHistoryCountAggregateOutputType | null
    _avg: GymPassHistoryAvgAggregateOutputType | null
    _sum: GymPassHistorySumAggregateOutputType | null
    _min: GymPassHistoryMinAggregateOutputType | null
    _max: GymPassHistoryMaxAggregateOutputType | null
  }

  type GetGymPassHistoryGroupByPayload<T extends GymPassHistoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GymPassHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymPassHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymPassHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], GymPassHistoryGroupByOutputType[P]>
        }
      >
    >


  export type GymPassHistorySelect = {
    id?: boolean
    createdAt?: boolean
    Gym?: boolean | GymArgs
    gymId?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    hash?: boolean
  }

  export type GymPassHistoryInclude = {
    Gym?: boolean | GymArgs
    User?: boolean | UserArgs
  }

  export type GymPassHistoryGetPayload<
    S extends boolean | null | undefined | GymPassHistoryArgs,
    U = keyof S
      > = S extends true
        ? GymPassHistory
    : S extends undefined
    ? never
    : S extends GymPassHistoryArgs | GymPassHistoryFindManyArgs
    ?'include' extends U
    ? GymPassHistory  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Gym' ? GymGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Gym' ? GymGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof GymPassHistory ? GymPassHistory[P] : never
  } 
    : GymPassHistory
  : GymPassHistory


  type GymPassHistoryCountArgs = Merge<
    Omit<GymPassHistoryFindManyArgs, 'select' | 'include'> & {
      select?: GymPassHistoryCountAggregateInputType | true
    }
  >

  export interface GymPassHistoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GymPassHistory that matches the filter.
     * @param {GymPassHistoryFindUniqueArgs} args - Arguments to find a GymPassHistory
     * @example
     * // Get one GymPassHistory
     * const gymPassHistory = await prisma.gymPassHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymPassHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GymPassHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GymPassHistory'> extends True ? CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory>, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T>>> : CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory | null >, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T> | null >>

    /**
     * Find the first GymPassHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPassHistoryFindFirstArgs} args - Arguments to find a GymPassHistory
     * @example
     * // Get one GymPassHistory
     * const gymPassHistory = await prisma.gymPassHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymPassHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GymPassHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GymPassHistory'> extends True ? CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory>, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T>>> : CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory | null >, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T> | null >>

    /**
     * Find zero or more GymPassHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPassHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymPassHistories
     * const gymPassHistories = await prisma.gymPassHistory.findMany()
     * 
     * // Get first 10 GymPassHistories
     * const gymPassHistories = await prisma.gymPassHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymPassHistoryWithIdOnly = await prisma.gymPassHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymPassHistoryFindManyArgs>(
      args?: SelectSubset<T, GymPassHistoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GymPassHistory>>, PrismaPromise<Array<GymPassHistoryGetPayload<T>>>>

    /**
     * Create a GymPassHistory.
     * @param {GymPassHistoryCreateArgs} args - Arguments to create a GymPassHistory.
     * @example
     * // Create one GymPassHistory
     * const GymPassHistory = await prisma.gymPassHistory.create({
     *   data: {
     *     // ... data to create a GymPassHistory
     *   }
     * })
     * 
    **/
    create<T extends GymPassHistoryCreateArgs>(
      args: SelectSubset<T, GymPassHistoryCreateArgs>
    ): CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory>, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T>>>

    /**
     * Create many GymPassHistories.
     *     @param {GymPassHistoryCreateManyArgs} args - Arguments to create many GymPassHistories.
     *     @example
     *     // Create many GymPassHistories
     *     const gymPassHistory = await prisma.gymPassHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymPassHistoryCreateManyArgs>(
      args?: SelectSubset<T, GymPassHistoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GymPassHistory.
     * @param {GymPassHistoryDeleteArgs} args - Arguments to delete one GymPassHistory.
     * @example
     * // Delete one GymPassHistory
     * const GymPassHistory = await prisma.gymPassHistory.delete({
     *   where: {
     *     // ... filter to delete one GymPassHistory
     *   }
     * })
     * 
    **/
    delete<T extends GymPassHistoryDeleteArgs>(
      args: SelectSubset<T, GymPassHistoryDeleteArgs>
    ): CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory>, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T>>>

    /**
     * Update one GymPassHistory.
     * @param {GymPassHistoryUpdateArgs} args - Arguments to update one GymPassHistory.
     * @example
     * // Update one GymPassHistory
     * const gymPassHistory = await prisma.gymPassHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymPassHistoryUpdateArgs>(
      args: SelectSubset<T, GymPassHistoryUpdateArgs>
    ): CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory>, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T>>>

    /**
     * Delete zero or more GymPassHistories.
     * @param {GymPassHistoryDeleteManyArgs} args - Arguments to filter GymPassHistories to delete.
     * @example
     * // Delete a few GymPassHistories
     * const { count } = await prisma.gymPassHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymPassHistoryDeleteManyArgs>(
      args?: SelectSubset<T, GymPassHistoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymPassHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPassHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymPassHistories
     * const gymPassHistory = await prisma.gymPassHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymPassHistoryUpdateManyArgs>(
      args: SelectSubset<T, GymPassHistoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GymPassHistory.
     * @param {GymPassHistoryUpsertArgs} args - Arguments to update or create a GymPassHistory.
     * @example
     * // Update or create a GymPassHistory
     * const gymPassHistory = await prisma.gymPassHistory.upsert({
     *   create: {
     *     // ... data to create a GymPassHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymPassHistory we want to update
     *   }
     * })
    **/
    upsert<T extends GymPassHistoryUpsertArgs>(
      args: SelectSubset<T, GymPassHistoryUpsertArgs>
    ): CheckSelect<T, Prisma__GymPassHistoryClient<GymPassHistory>, Prisma__GymPassHistoryClient<GymPassHistoryGetPayload<T>>>

    /**
     * Count the number of GymPassHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPassHistoryCountArgs} args - Arguments to filter GymPassHistories to count.
     * @example
     * // Count the number of GymPassHistories
     * const count = await prisma.gymPassHistory.count({
     *   where: {
     *     // ... the filter for the GymPassHistories we want to count
     *   }
     * })
    **/
    count<T extends GymPassHistoryCountArgs>(
      args?: Subset<T, GymPassHistoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymPassHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymPassHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPassHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymPassHistoryAggregateArgs>(args: Subset<T, GymPassHistoryAggregateArgs>): PrismaPromise<GetGymPassHistoryAggregateType<T>>

    /**
     * Group by GymPassHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPassHistoryGroupByArgs} args - Group by arguments.
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
      T extends GymPassHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymPassHistoryGroupByArgs['orderBy'] }
        : { orderBy?: GymPassHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GymPassHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymPassHistoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymPassHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GymPassHistoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Gym<T extends GymArgs = {}>(args?: Subset<T, GymArgs>): CheckSelect<T, Prisma__GymClient<Gym | null >, Prisma__GymClient<GymGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GymPassHistory findUnique
   */
  export type GymPassHistoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
    /**
     * Throw an Error if a GymPassHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymPassHistory to fetch.
     * 
    **/
    where: GymPassHistoryWhereUniqueInput
  }


  /**
   * GymPassHistory findFirst
   */
  export type GymPassHistoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
    /**
     * Throw an Error if a GymPassHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GymPassHistory to fetch.
     * 
    **/
    where?: GymPassHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymPassHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymPassHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymPassHistories.
     * 
    **/
    cursor?: GymPassHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymPassHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymPassHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymPassHistories.
     * 
    **/
    distinct?: Enumerable<GymPassHistoryScalarFieldEnum>
  }


  /**
   * GymPassHistory findMany
   */
  export type GymPassHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
    /**
     * Filter, which GymPassHistories to fetch.
     * 
    **/
    where?: GymPassHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymPassHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<GymPassHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymPassHistories.
     * 
    **/
    cursor?: GymPassHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymPassHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymPassHistories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GymPassHistoryScalarFieldEnum>
  }


  /**
   * GymPassHistory create
   */
  export type GymPassHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
    /**
     * The data needed to create a GymPassHistory.
     * 
    **/
    data: XOR<GymPassHistoryCreateInput, GymPassHistoryUncheckedCreateInput>
  }


  /**
   * GymPassHistory createMany
   */
  export type GymPassHistoryCreateManyArgs = {
    /**
     * The data used to create many GymPassHistories.
     * 
    **/
    data: Enumerable<GymPassHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GymPassHistory update
   */
  export type GymPassHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
    /**
     * The data needed to update a GymPassHistory.
     * 
    **/
    data: XOR<GymPassHistoryUpdateInput, GymPassHistoryUncheckedUpdateInput>
    /**
     * Choose, which GymPassHistory to update.
     * 
    **/
    where: GymPassHistoryWhereUniqueInput
  }


  /**
   * GymPassHistory updateMany
   */
  export type GymPassHistoryUpdateManyArgs = {
    /**
     * The data used to update GymPassHistories.
     * 
    **/
    data: XOR<GymPassHistoryUpdateManyMutationInput, GymPassHistoryUncheckedUpdateManyInput>
    /**
     * Filter which GymPassHistories to update
     * 
    **/
    where?: GymPassHistoryWhereInput
  }


  /**
   * GymPassHistory upsert
   */
  export type GymPassHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
    /**
     * The filter to search for the GymPassHistory to update in case it exists.
     * 
    **/
    where: GymPassHistoryWhereUniqueInput
    /**
     * In case the GymPassHistory found by the `where` argument doesn't exist, create a new GymPassHistory with this data.
     * 
    **/
    create: XOR<GymPassHistoryCreateInput, GymPassHistoryUncheckedCreateInput>
    /**
     * In case the GymPassHistory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GymPassHistoryUpdateInput, GymPassHistoryUncheckedUpdateInput>
  }


  /**
   * GymPassHistory delete
   */
  export type GymPassHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
    /**
     * Filter which GymPassHistory to delete.
     * 
    **/
    where: GymPassHistoryWhereUniqueInput
  }


  /**
   * GymPassHistory deleteMany
   */
  export type GymPassHistoryDeleteManyArgs = {
    /**
     * Filter which GymPassHistories to delete
     * 
    **/
    where?: GymPassHistoryWhereInput
  }


  /**
   * GymPassHistory without action
   */
  export type GymPassHistoryArgs = {
    /**
     * Select specific fields to fetch from the GymPassHistory
     * 
    **/
    select?: GymPassHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GymPassHistoryInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    loginId: 'loginId',
    loginPw: 'loginPw',
    username: 'username',
    loginType: 'loginType',
    userType: 'userType',
    nickname: 'nickname',
    phone: 'phone',
    isDisable: 'isDisable'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    content: 'content',
    link: 'link',
    userId: 'userId'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    content: 'content',
    link: 'link',
    startDay: 'startDay',
    endDay: 'endDay',
    isDisable: 'isDisable',
    userId: 'userId',
    boardType: 'boardType'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BoardImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    isThumb: 'isThumb',
    boardId: 'boardId'
  };

  export type BoardImageScalarFieldEnum = (typeof BoardImageScalarFieldEnum)[keyof typeof BoardImageScalarFieldEnum]


  export const BoardReplyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    isDisable: 'isDisable',
    userId: 'userId',
    boardId: 'boardId',
    boardReplyId: 'boardReplyId',
    boardType: 'boardType'
  };

  export type BoardReplyScalarFieldEnum = (typeof BoardReplyScalarFieldEnum)[keyof typeof BoardReplyScalarFieldEnum]


  export const BodyPartScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    code: 'code',
    category: 'category'
  };

  export type BodyPartScalarFieldEnum = (typeof BodyPartScalarFieldEnum)[keyof typeof BodyPartScalarFieldEnum]


  export const GymEquipmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    brandName: 'brandName',
    code: 'code',
    isDisable: 'isDisable'
  };

  export type GymEquipmentScalarFieldEnum = (typeof GymEquipmentScalarFieldEnum)[keyof typeof GymEquipmentScalarFieldEnum]


  export const GymEquipmentImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    isThumb: 'isThumb',
    gymEquipmentId: 'gymEquipmentId'
  };

  export type GymEquipmentImageScalarFieldEnum = (typeof GymEquipmentImageScalarFieldEnum)[keyof typeof GymEquipmentImageScalarFieldEnum]


  export const BodyPartsOnGymEquipmentsScalarFieldEnum: {
    gymEquipmentId: 'gymEquipmentId',
    bodyPartId: 'bodyPartId',
    assignedAt: 'assignedAt'
  };

  export type BodyPartsOnGymEquipmentsScalarFieldEnum = (typeof BodyPartsOnGymEquipmentsScalarFieldEnum)[keyof typeof BodyPartsOnGymEquipmentsScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    ceoName: 'ceoName',
    companyName: 'companyName',
    businessNumber: 'businessNumber',
    postcode: 'postcode',
    mainAddress: 'mainAddress',
    subAddress: 'subAddress',
    phone: 'phone',
    cellPhone: 'cellPhone',
    fax: 'fax',
    email: 'email',
    isCertified: 'isCertified',
    isDisable: 'isDisable',
    userId: 'userId'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const GymImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    isThumb: 'isThumb',
    gymId: 'gymId'
  };

  export type GymImageScalarFieldEnum = (typeof GymImageScalarFieldEnum)[keyof typeof GymImageScalarFieldEnum]


  export const GymEuquipmentsOnGymsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    gymId: 'gymId',
    gymEquipmentId: 'gymEquipmentId',
    assignBy: 'assignBy'
  };

  export type GymEuquipmentsOnGymsScalarFieldEnum = (typeof GymEuquipmentsOnGymsScalarFieldEnum)[keyof typeof GymEuquipmentsOnGymsScalarFieldEnum]


  export const GymEquipmentUserHistoryScalarFieldEnum: {
    id: 'id',
    gymEuquipmentsOnGymsId: 'gymEuquipmentsOnGymsId',
    userId: 'userId',
    usedAt: 'usedAt',
    endAt: 'endAt'
  };

  export type GymEquipmentUserHistoryScalarFieldEnum = (typeof GymEquipmentUserHistoryScalarFieldEnum)[keyof typeof GymEquipmentUserHistoryScalarFieldEnum]


  export const GymMembershipScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    gymId: 'gymId',
    assignBy: 'assignBy',
    startDay: 'startDay',
    endDay: 'endDay',
    gymMembershipCancellationId: 'gymMembershipCancellationId'
  };

  export type GymMembershipScalarFieldEnum = (typeof GymMembershipScalarFieldEnum)[keyof typeof GymMembershipScalarFieldEnum]


  export const GymMembershipCancellationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    reason: 'reason'
  };

  export type GymMembershipCancellationScalarFieldEnum = (typeof GymMembershipCancellationScalarFieldEnum)[keyof typeof GymMembershipCancellationScalarFieldEnum]


  export const FavoriteGymScalarFieldEnum: {
    gymId: 'gymId',
    userId: 'userId',
    assignedAt: 'assignedAt'
  };

  export type FavoriteGymScalarFieldEnum = (typeof FavoriteGymScalarFieldEnum)[keyof typeof FavoriteGymScalarFieldEnum]


  export const GymAccessHistoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    gymId: 'gymId',
    userId: 'userId',
    entryAt: 'entryAt',
    exitAt: 'exitAt'
  };

  export type GymAccessHistoryScalarFieldEnum = (typeof GymAccessHistoryScalarFieldEnum)[keyof typeof GymAccessHistoryScalarFieldEnum]


  export const GymPassHistoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    gymId: 'gymId',
    userId: 'userId',
    hash: 'hash'
  };

  export type GymPassHistoryScalarFieldEnum = (typeof GymPassHistoryScalarFieldEnum)[keyof typeof GymPassHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    loginId?: StringFilter | string
    loginPw?: StringNullableFilter | string | null
    username?: StringFilter | string
    loginType?: EnumLoginTypeFilter | LoginType
    userType?: EnumUserTypeFilter | UserType
    nickname?: StringFilter | string
    phone?: StringFilter | string
    isDisable?: BoolFilter | boolean
    Board?: BoardListRelationFilter
    BoardReply?: BoardReplyListRelationFilter
    Notice?: NoticeListRelationFilter
    Gym?: GymListRelationFilter
    assignedGymEquipments?: GymEuquipmentsOnGymsListRelationFilter
    GymMembership?: GymMembershipListRelationFilter
    assignedGymMemberships?: GymMembershipListRelationFilter
    FavoriteGyms?: FavoriteGymListRelationFilter
    GymEquipmentUserHistory?: GymEquipmentUserHistoryListRelationFilter
    GymAccessHistory?: GymAccessHistoryListRelationFilter
    GymPassHistory?: GymPassHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
    Board?: BoardOrderByRelationAggregateInput
    BoardReply?: BoardReplyOrderByRelationAggregateInput
    Notice?: NoticeOrderByRelationAggregateInput
    Gym?: GymOrderByRelationAggregateInput
    assignedGymEquipments?: GymEuquipmentsOnGymsOrderByRelationAggregateInput
    GymMembership?: GymMembershipOrderByRelationAggregateInput
    assignedGymMemberships?: GymMembershipOrderByRelationAggregateInput
    FavoriteGyms?: FavoriteGymOrderByRelationAggregateInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryOrderByRelationAggregateInput
    GymAccessHistory?: GymAccessHistoryOrderByRelationAggregateInput
    GymPassHistory?: GymPassHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    loginUnique?: UserLoginUniqueCompoundUniqueInput
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    loginId?: StringWithAggregatesFilter | string
    loginPw?: StringNullableWithAggregatesFilter | string | null
    username?: StringWithAggregatesFilter | string
    loginType?: EnumLoginTypeWithAggregatesFilter | LoginType
    userType?: EnumUserTypeWithAggregatesFilter | UserType
    nickname?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
  }

  export type NoticeWhereInput = {
    AND?: Enumerable<NoticeWhereInput>
    OR?: Enumerable<NoticeWhereInput>
    NOT?: Enumerable<NoticeWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type NoticeWhereUniqueInput = {
    id?: number
  }

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _avg?: NoticeAvgOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
    _sum?: NoticeSumOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    OR?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
  }

  export type BoardWhereInput = {
    AND?: Enumerable<BoardWhereInput>
    OR?: Enumerable<BoardWhereInput>
    NOT?: Enumerable<BoardWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    BoardImage?: BoardImageListRelationFilter
    BoardReply?: BoardReplyListRelationFilter
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    BoardImage?: BoardImageOrderByRelationAggregateInput
    BoardReply?: BoardReplyOrderByRelationAggregateInput
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    boardType?: SortOrder
  }

  export type BoardWhereUniqueInput = {
    id?: number
  }

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    startDay?: DateTimeWithAggregatesFilter | Date | string
    endDay?: DateTimeWithAggregatesFilter | Date | string
    isDisable?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    boardType?: EnumBoardTypeWithAggregatesFilter | BoardType
  }

  export type BoardImageWhereInput = {
    AND?: Enumerable<BoardImageWhereInput>
    OR?: Enumerable<BoardImageWhereInput>
    NOT?: Enumerable<BoardImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    boardId?: IntFilter | number
    Board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type BoardImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
    Board?: BoardOrderByWithRelationInput
  }

  export type BoardImageWhereUniqueInput = {
    id?: number
    boardId?: number
  }

  export type BoardImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
    _count?: BoardImageCountOrderByAggregateInput
    _avg?: BoardImageAvgOrderByAggregateInput
    _max?: BoardImageMaxOrderByAggregateInput
    _min?: BoardImageMinOrderByAggregateInput
    _sum?: BoardImageSumOrderByAggregateInput
  }

  export type BoardImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    isThumb?: BoolWithAggregatesFilter | boolean
    boardId?: IntWithAggregatesFilter | number
  }

  export type BoardReplyWhereInput = {
    AND?: Enumerable<BoardReplyWhereInput>
    OR?: Enumerable<BoardReplyWhereInput>
    NOT?: Enumerable<BoardReplyWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    content?: StringFilter | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    boardId?: IntFilter | number
    Board?: XOR<BoardRelationFilter, BoardWhereInput>
    boardReplyId?: IntNullableFilter | number | null
    BoardReply?: XOR<BoardReplyRelationFilter, BoardReplyWhereInput> | null
    BoardNestedReply?: BoardReplyListRelationFilter
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardReplyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    boardId?: SortOrder
    Board?: BoardOrderByWithRelationInput
    boardReplyId?: SortOrder
    BoardReply?: BoardReplyOrderByWithRelationInput
    BoardNestedReply?: BoardReplyOrderByRelationAggregateInput
    boardType?: SortOrder
  }

  export type BoardReplyWhereUniqueInput = {
    id?: number
  }

  export type BoardReplyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
    _count?: BoardReplyCountOrderByAggregateInput
    _avg?: BoardReplyAvgOrderByAggregateInput
    _max?: BoardReplyMaxOrderByAggregateInput
    _min?: BoardReplyMinOrderByAggregateInput
    _sum?: BoardReplySumOrderByAggregateInput
  }

  export type BoardReplyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    content?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    boardId?: IntWithAggregatesFilter | number
    boardReplyId?: IntNullableWithAggregatesFilter | number | null
    boardType?: EnumBoardTypeWithAggregatesFilter | BoardType
  }

  export type BodyPartWhereInput = {
    AND?: Enumerable<BodyPartWhereInput>
    OR?: Enumerable<BodyPartWhereInput>
    NOT?: Enumerable<BodyPartWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    code?: StringFilter | string
    category?: StringFilter | string
    GymEquipments?: BodyPartsOnGymEquipmentsListRelationFilter
  }

  export type BodyPartOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
    GymEquipments?: BodyPartsOnGymEquipmentsOrderByRelationAggregateInput
  }

  export type BodyPartWhereUniqueInput = {
    id?: number
    code?: string
  }

  export type BodyPartOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
    _count?: BodyPartCountOrderByAggregateInput
    _avg?: BodyPartAvgOrderByAggregateInput
    _max?: BodyPartMaxOrderByAggregateInput
    _min?: BodyPartMinOrderByAggregateInput
    _sum?: BodyPartSumOrderByAggregateInput
  }

  export type BodyPartScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BodyPartScalarWhereWithAggregatesInput>
    OR?: Enumerable<BodyPartScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BodyPartScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    category?: StringWithAggregatesFilter | string
  }

  export type GymEquipmentWhereInput = {
    AND?: Enumerable<GymEquipmentWhereInput>
    OR?: Enumerable<GymEquipmentWhereInput>
    NOT?: Enumerable<GymEquipmentWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    brandName?: StringFilter | string
    code?: StringFilter | string
    isDisable?: BoolFilter | boolean
    BodyParts?: BodyPartsOnGymEquipmentsListRelationFilter
    Gyms?: GymEuquipmentsOnGymsListRelationFilter
    GymEquipmentImage?: GymEquipmentImageListRelationFilter
  }

  export type GymEquipmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    code?: SortOrder
    isDisable?: SortOrder
    BodyParts?: BodyPartsOnGymEquipmentsOrderByRelationAggregateInput
    Gyms?: GymEuquipmentsOnGymsOrderByRelationAggregateInput
    GymEquipmentImage?: GymEquipmentImageOrderByRelationAggregateInput
  }

  export type GymEquipmentWhereUniqueInput = {
    id?: number
    code?: string
  }

  export type GymEquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    code?: SortOrder
    isDisable?: SortOrder
    _count?: GymEquipmentCountOrderByAggregateInput
    _avg?: GymEquipmentAvgOrderByAggregateInput
    _max?: GymEquipmentMaxOrderByAggregateInput
    _min?: GymEquipmentMinOrderByAggregateInput
    _sum?: GymEquipmentSumOrderByAggregateInput
  }

  export type GymEquipmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymEquipmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymEquipmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymEquipmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    brandName?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
  }

  export type GymEquipmentImageWhereInput = {
    AND?: Enumerable<GymEquipmentImageWhereInput>
    OR?: Enumerable<GymEquipmentImageWhereInput>
    NOT?: Enumerable<GymEquipmentImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    gymEquipmentId?: IntFilter | number
    GymEquipment?: XOR<GymEquipmentRelationFilter, GymEquipmentWhereInput>
  }

  export type GymEquipmentImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymEquipmentId?: SortOrder
    GymEquipment?: GymEquipmentOrderByWithRelationInput
  }

  export type GymEquipmentImageWhereUniqueInput = {
    id?: number
    gymEquipmentId?: number
  }

  export type GymEquipmentImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymEquipmentId?: SortOrder
    _count?: GymEquipmentImageCountOrderByAggregateInput
    _avg?: GymEquipmentImageAvgOrderByAggregateInput
    _max?: GymEquipmentImageMaxOrderByAggregateInput
    _min?: GymEquipmentImageMinOrderByAggregateInput
    _sum?: GymEquipmentImageSumOrderByAggregateInput
  }

  export type GymEquipmentImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymEquipmentImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymEquipmentImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymEquipmentImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    isThumb?: BoolWithAggregatesFilter | boolean
    gymEquipmentId?: IntWithAggregatesFilter | number
  }

  export type BodyPartsOnGymEquipmentsWhereInput = {
    AND?: Enumerable<BodyPartsOnGymEquipmentsWhereInput>
    OR?: Enumerable<BodyPartsOnGymEquipmentsWhereInput>
    NOT?: Enumerable<BodyPartsOnGymEquipmentsWhereInput>
    GymEquipment?: XOR<GymEquipmentRelationFilter, GymEquipmentWhereInput>
    gymEquipmentId?: IntFilter | number
    BodyPart?: XOR<BodyPartRelationFilter, BodyPartWhereInput>
    bodyPartId?: IntFilter | number
    assignedAt?: DateTimeFilter | Date | string
  }

  export type BodyPartsOnGymEquipmentsOrderByWithRelationInput = {
    GymEquipment?: GymEquipmentOrderByWithRelationInput
    gymEquipmentId?: SortOrder
    BodyPart?: BodyPartOrderByWithRelationInput
    bodyPartId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BodyPartsOnGymEquipmentsWhereUniqueInput = {
    gymEquipmentId_bodyPartId?: BodyPartsOnGymEquipmentsGymEquipmentIdBodyPartIdCompoundUniqueInput
  }

  export type BodyPartsOnGymEquipmentsOrderByWithAggregationInput = {
    gymEquipmentId?: SortOrder
    bodyPartId?: SortOrder
    assignedAt?: SortOrder
    _count?: BodyPartsOnGymEquipmentsCountOrderByAggregateInput
    _avg?: BodyPartsOnGymEquipmentsAvgOrderByAggregateInput
    _max?: BodyPartsOnGymEquipmentsMaxOrderByAggregateInput
    _min?: BodyPartsOnGymEquipmentsMinOrderByAggregateInput
    _sum?: BodyPartsOnGymEquipmentsSumOrderByAggregateInput
  }

  export type BodyPartsOnGymEquipmentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereWithAggregatesInput>
    gymEquipmentId?: IntWithAggregatesFilter | number
    bodyPartId?: IntWithAggregatesFilter | number
    assignedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GymWhereInput = {
    AND?: Enumerable<GymWhereInput>
    OR?: Enumerable<GymWhereInput>
    NOT?: Enumerable<GymWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    ceoName?: StringFilter | string
    companyName?: StringFilter | string
    businessNumber?: StringFilter | string
    postcode?: StringFilter | string
    mainAddress?: StringFilter | string
    subAddress?: StringFilter | string
    phone?: StringFilter | string
    cellPhone?: StringFilter | string
    fax?: StringFilter | string
    email?: StringFilter | string
    isCertified?: BoolFilter | boolean
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    GymImage?: GymImageListRelationFilter
    GymEquipments?: GymEuquipmentsOnGymsListRelationFilter
    FavoriteUsers?: FavoriteGymListRelationFilter
    GymAccessHistory?: GymAccessHistoryListRelationFilter
    GymMembership?: GymMembershipListRelationFilter
    GymPassHistory?: GymPassHistoryListRelationFilter
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ceoName?: SortOrder
    companyName?: SortOrder
    businessNumber?: SortOrder
    postcode?: SortOrder
    mainAddress?: SortOrder
    subAddress?: SortOrder
    phone?: SortOrder
    cellPhone?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    isCertified?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    GymImage?: GymImageOrderByRelationAggregateInput
    GymEquipments?: GymEuquipmentsOnGymsOrderByRelationAggregateInput
    FavoriteUsers?: FavoriteGymOrderByRelationAggregateInput
    GymAccessHistory?: GymAccessHistoryOrderByRelationAggregateInput
    GymMembership?: GymMembershipOrderByRelationAggregateInput
    GymPassHistory?: GymPassHistoryOrderByRelationAggregateInput
  }

  export type GymWhereUniqueInput = {
    id?: number
  }

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ceoName?: SortOrder
    companyName?: SortOrder
    businessNumber?: SortOrder
    postcode?: SortOrder
    mainAddress?: SortOrder
    subAddress?: SortOrder
    phone?: SortOrder
    cellPhone?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    isCertified?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    _count?: GymCountOrderByAggregateInput
    _avg?: GymAvgOrderByAggregateInput
    _max?: GymMaxOrderByAggregateInput
    _min?: GymMinOrderByAggregateInput
    _sum?: GymSumOrderByAggregateInput
  }

  export type GymScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    ceoName?: StringWithAggregatesFilter | string
    companyName?: StringWithAggregatesFilter | string
    businessNumber?: StringWithAggregatesFilter | string
    postcode?: StringWithAggregatesFilter | string
    mainAddress?: StringWithAggregatesFilter | string
    subAddress?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    cellPhone?: StringWithAggregatesFilter | string
    fax?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    isCertified?: BoolWithAggregatesFilter | boolean
    isDisable?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
  }

  export type GymImageWhereInput = {
    AND?: Enumerable<GymImageWhereInput>
    OR?: Enumerable<GymImageWhereInput>
    NOT?: Enumerable<GymImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    gymId?: IntFilter | number
    Gym?: XOR<GymRelationFilter, GymWhereInput>
  }

  export type GymImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymId?: SortOrder
    Gym?: GymOrderByWithRelationInput
  }

  export type GymImageWhereUniqueInput = {
    id?: number
    gymId?: number
  }

  export type GymImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymId?: SortOrder
    _count?: GymImageCountOrderByAggregateInput
    _avg?: GymImageAvgOrderByAggregateInput
    _max?: GymImageMaxOrderByAggregateInput
    _min?: GymImageMinOrderByAggregateInput
    _sum?: GymImageSumOrderByAggregateInput
  }

  export type GymImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    isThumb?: BoolWithAggregatesFilter | boolean
    gymId?: IntWithAggregatesFilter | number
  }

  export type GymEuquipmentsOnGymsWhereInput = {
    AND?: Enumerable<GymEuquipmentsOnGymsWhereInput>
    OR?: Enumerable<GymEuquipmentsOnGymsWhereInput>
    NOT?: Enumerable<GymEuquipmentsOnGymsWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    Gym?: XOR<GymRelationFilter, GymWhereInput>
    gymId?: IntFilter | number
    GymEquipment?: XOR<GymEquipmentRelationFilter, GymEquipmentWhereInput>
    gymEquipmentId?: IntFilter | number
    assignBy?: IntFilter | number
    assignUser?: XOR<UserRelationFilter, UserWhereInput>
    GymEquipmentUserHistory?: GymEquipmentUserHistoryListRelationFilter
  }

  export type GymEuquipmentsOnGymsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    Gym?: GymOrderByWithRelationInput
    gymId?: SortOrder
    GymEquipment?: GymEquipmentOrderByWithRelationInput
    gymEquipmentId?: SortOrder
    assignBy?: SortOrder
    assignUser?: UserOrderByWithRelationInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryOrderByRelationAggregateInput
  }

  export type GymEuquipmentsOnGymsWhereUniqueInput = {
    id?: number
  }

  export type GymEuquipmentsOnGymsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    gymEquipmentId?: SortOrder
    assignBy?: SortOrder
    _count?: GymEuquipmentsOnGymsCountOrderByAggregateInput
    _avg?: GymEuquipmentsOnGymsAvgOrderByAggregateInput
    _max?: GymEuquipmentsOnGymsMaxOrderByAggregateInput
    _min?: GymEuquipmentsOnGymsMinOrderByAggregateInput
    _sum?: GymEuquipmentsOnGymsSumOrderByAggregateInput
  }

  export type GymEuquipmentsOnGymsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymEuquipmentsOnGymsScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymEuquipmentsOnGymsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymEuquipmentsOnGymsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    gymId?: IntWithAggregatesFilter | number
    gymEquipmentId?: IntWithAggregatesFilter | number
    assignBy?: IntWithAggregatesFilter | number
  }

  export type GymEquipmentUserHistoryWhereInput = {
    AND?: Enumerable<GymEquipmentUserHistoryWhereInput>
    OR?: Enumerable<GymEquipmentUserHistoryWhereInput>
    NOT?: Enumerable<GymEquipmentUserHistoryWhereInput>
    id?: IntFilter | number
    GymEuquipmentsOnGyms?: XOR<GymEuquipmentsOnGymsRelationFilter, GymEuquipmentsOnGymsWhereInput>
    gymEuquipmentsOnGymsId?: IntFilter | number
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    usedAt?: DateTimeFilter | Date | string
    endAt?: DateTimeNullableFilter | Date | string | null
  }

  export type GymEquipmentUserHistoryOrderByWithRelationInput = {
    id?: SortOrder
    GymEuquipmentsOnGyms?: GymEuquipmentsOnGymsOrderByWithRelationInput
    gymEuquipmentsOnGymsId?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    usedAt?: SortOrder
    endAt?: SortOrder
  }

  export type GymEquipmentUserHistoryWhereUniqueInput = {
    id?: number
  }

  export type GymEquipmentUserHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    gymEuquipmentsOnGymsId?: SortOrder
    userId?: SortOrder
    usedAt?: SortOrder
    endAt?: SortOrder
    _count?: GymEquipmentUserHistoryCountOrderByAggregateInput
    _avg?: GymEquipmentUserHistoryAvgOrderByAggregateInput
    _max?: GymEquipmentUserHistoryMaxOrderByAggregateInput
    _min?: GymEquipmentUserHistoryMinOrderByAggregateInput
    _sum?: GymEquipmentUserHistorySumOrderByAggregateInput
  }

  export type GymEquipmentUserHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymEquipmentUserHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymEquipmentUserHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymEquipmentUserHistoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    gymEuquipmentsOnGymsId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    usedAt?: DateTimeWithAggregatesFilter | Date | string
    endAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type GymMembershipWhereInput = {
    AND?: Enumerable<GymMembershipWhereInput>
    OR?: Enumerable<GymMembershipWhereInput>
    NOT?: Enumerable<GymMembershipWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Gym?: XOR<GymRelationFilter, GymWhereInput>
    gymId?: IntFilter | number
    assignBy?: IntFilter | number
    assignUser?: XOR<UserRelationFilter, UserWhereInput>
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    gymMembershipCancellationId?: IntNullableFilter | number | null
    GymMembershipCancellation?: XOR<GymMembershipCancellationRelationFilter, GymMembershipCancellationWhereInput> | null
  }

  export type GymMembershipOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    Gym?: GymOrderByWithRelationInput
    gymId?: SortOrder
    assignBy?: SortOrder
    assignUser?: UserOrderByWithRelationInput
    startDay?: SortOrder
    endDay?: SortOrder
    gymMembershipCancellationId?: SortOrder
    GymMembershipCancellation?: GymMembershipCancellationOrderByWithRelationInput
  }

  export type GymMembershipWhereUniqueInput = {
    id?: number
  }

  export type GymMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    assignBy?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    gymMembershipCancellationId?: SortOrder
    _count?: GymMembershipCountOrderByAggregateInput
    _avg?: GymMembershipAvgOrderByAggregateInput
    _max?: GymMembershipMaxOrderByAggregateInput
    _min?: GymMembershipMinOrderByAggregateInput
    _sum?: GymMembershipSumOrderByAggregateInput
  }

  export type GymMembershipScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymMembershipScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymMembershipScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymMembershipScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
    gymId?: IntWithAggregatesFilter | number
    assignBy?: IntWithAggregatesFilter | number
    startDay?: DateTimeWithAggregatesFilter | Date | string
    endDay?: DateTimeWithAggregatesFilter | Date | string
    gymMembershipCancellationId?: IntNullableWithAggregatesFilter | number | null
  }

  export type GymMembershipCancellationWhereInput = {
    AND?: Enumerable<GymMembershipCancellationWhereInput>
    OR?: Enumerable<GymMembershipCancellationWhereInput>
    NOT?: Enumerable<GymMembershipCancellationWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    reason?: StringNullableFilter | string | null
    GymMembership?: GymMembershipListRelationFilter
  }

  export type GymMembershipCancellationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reason?: SortOrder
    GymMembership?: GymMembershipOrderByRelationAggregateInput
  }

  export type GymMembershipCancellationWhereUniqueInput = {
    id?: number
  }

  export type GymMembershipCancellationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reason?: SortOrder
    _count?: GymMembershipCancellationCountOrderByAggregateInput
    _avg?: GymMembershipCancellationAvgOrderByAggregateInput
    _max?: GymMembershipCancellationMaxOrderByAggregateInput
    _min?: GymMembershipCancellationMinOrderByAggregateInput
    _sum?: GymMembershipCancellationSumOrderByAggregateInput
  }

  export type GymMembershipCancellationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymMembershipCancellationScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymMembershipCancellationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymMembershipCancellationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    reason?: StringNullableWithAggregatesFilter | string | null
  }

  export type FavoriteGymWhereInput = {
    AND?: Enumerable<FavoriteGymWhereInput>
    OR?: Enumerable<FavoriteGymWhereInput>
    NOT?: Enumerable<FavoriteGymWhereInput>
    Gym?: XOR<GymRelationFilter, GymWhereInput>
    gymId?: IntFilter | number
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    assignedAt?: DateTimeFilter | Date | string
  }

  export type FavoriteGymOrderByWithRelationInput = {
    Gym?: GymOrderByWithRelationInput
    gymId?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    assignedAt?: SortOrder
  }

  export type FavoriteGymWhereUniqueInput = {
    gymId_userId?: FavoriteGymGymIdUserIdCompoundUniqueInput
  }

  export type FavoriteGymOrderByWithAggregationInput = {
    gymId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    _count?: FavoriteGymCountOrderByAggregateInput
    _avg?: FavoriteGymAvgOrderByAggregateInput
    _max?: FavoriteGymMaxOrderByAggregateInput
    _min?: FavoriteGymMinOrderByAggregateInput
    _sum?: FavoriteGymSumOrderByAggregateInput
  }

  export type FavoriteGymScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FavoriteGymScalarWhereWithAggregatesInput>
    OR?: Enumerable<FavoriteGymScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FavoriteGymScalarWhereWithAggregatesInput>
    gymId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    assignedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GymAccessHistoryWhereInput = {
    AND?: Enumerable<GymAccessHistoryWhereInput>
    OR?: Enumerable<GymAccessHistoryWhereInput>
    NOT?: Enumerable<GymAccessHistoryWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    Gym?: XOR<GymRelationFilter, GymWhereInput>
    gymId?: IntFilter | number
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    entryAt?: DateTimeFilter | Date | string
    exitAt?: DateTimeNullableFilter | Date | string | null
  }

  export type GymAccessHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    Gym?: GymOrderByWithRelationInput
    gymId?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    entryAt?: SortOrder
    exitAt?: SortOrder
  }

  export type GymAccessHistoryWhereUniqueInput = {
    id?: number
  }

  export type GymAccessHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    entryAt?: SortOrder
    exitAt?: SortOrder
    _count?: GymAccessHistoryCountOrderByAggregateInput
    _avg?: GymAccessHistoryAvgOrderByAggregateInput
    _max?: GymAccessHistoryMaxOrderByAggregateInput
    _min?: GymAccessHistoryMinOrderByAggregateInput
    _sum?: GymAccessHistorySumOrderByAggregateInput
  }

  export type GymAccessHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymAccessHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymAccessHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymAccessHistoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    gymId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    entryAt?: DateTimeWithAggregatesFilter | Date | string
    exitAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type GymPassHistoryWhereInput = {
    AND?: Enumerable<GymPassHistoryWhereInput>
    OR?: Enumerable<GymPassHistoryWhereInput>
    NOT?: Enumerable<GymPassHistoryWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    Gym?: XOR<GymRelationFilter, GymWhereInput>
    gymId?: IntFilter | number
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    hash?: StringFilter | string
  }

  export type GymPassHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    Gym?: GymOrderByWithRelationInput
    gymId?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    hash?: SortOrder
  }

  export type GymPassHistoryWhereUniqueInput = {
    id?: number
  }

  export type GymPassHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
    _count?: GymPassHistoryCountOrderByAggregateInput
    _avg?: GymPassHistoryAvgOrderByAggregateInput
    _max?: GymPassHistoryMaxOrderByAggregateInput
    _min?: GymPassHistoryMinOrderByAggregateInput
    _sum?: GymPassHistorySumOrderByAggregateInput
  }

  export type GymPassHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GymPassHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<GymPassHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GymPassHistoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    gymId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    hash?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticeCreateInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    User: UserCreateNestedOneWithoutNoticeInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    userId: number
  }

  export type NoticeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutNoticeInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NoticeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    userId: number
  }

  export type NoticeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardCreateInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUpdateManyWithoutBoardInput
    User?: UserUpdateOneRequiredWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUncheckedUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutBoardInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    userId: number
    boardType?: BoardType
  }

  export type BoardUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    Board: BoardCreateNestedOneWithoutBoardImageInput
  }

  export type BoardImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    boardId: number
  }

  export type BoardImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateOneRequiredWithoutBoardImageInput
  }

  export type BoardImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    boardId: number
  }

  export type BoardImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardReplyCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardReplyUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BodyPartCreateInput = {
    createdAt?: Date | string
    name: string
    code: string
    category: string
    GymEquipments?: BodyPartsOnGymEquipmentsCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    code: string
    category: string
    GymEquipments?: BodyPartsOnGymEquipmentsUncheckedCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    GymEquipments?: BodyPartsOnGymEquipmentsUpdateManyWithoutBodyPartInput
  }

  export type BodyPartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    GymEquipments?: BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutBodyPartInput
  }

  export type BodyPartCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    code: string
    category: string
  }

  export type BodyPartUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type BodyPartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type GymEquipmentCreateInput = {
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    BodyParts?: BodyPartsOnGymEquipmentsCreateNestedManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    BodyParts?: BodyPartsOnGymEquipmentsUncheckedCreateNestedManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUncheckedCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BodyParts?: BodyPartsOnGymEquipmentsUpdateManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsUpdateManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUpdateManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BodyParts?: BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUncheckedUpdateManyWithoutGymEquipmentInput
  }

  export type GymEquipmentCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
  }

  export type GymEquipmentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymEquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymEquipmentImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    GymEquipment: GymEquipmentCreateNestedOneWithoutGymEquipmentImageInput
  }

  export type GymEquipmentImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    gymEquipmentId: number
  }

  export type GymEquipmentImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    GymEquipment?: GymEquipmentUpdateOneRequiredWithoutGymEquipmentImageInput
  }

  export type GymEquipmentImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
  }

  export type GymEquipmentImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    gymEquipmentId: number
  }

  export type GymEquipmentImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymEquipmentImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
  }

  export type BodyPartsOnGymEquipmentsCreateInput = {
    GymEquipment: GymEquipmentCreateNestedOneWithoutBodyPartsInput
    BodyPart: BodyPartCreateNestedOneWithoutGymEquipmentsInput
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedCreateInput = {
    gymEquipmentId: number
    bodyPartId: number
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsUpdateInput = {
    GymEquipment?: GymEquipmentUpdateOneRequiredWithoutBodyPartsInput
    BodyPart?: BodyPartUpdateOneRequiredWithoutGymEquipmentsInput
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateInput = {
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    bodyPartId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsCreateManyInput = {
    gymEquipmentId: number
    bodyPartId: number
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateManyInput = {
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    bodyPartId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymCreateInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    User: UserCreateNestedOneWithoutGymInput
    GymImage?: GymImageCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
    GymImage?: GymImageUncheckedCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutGymInput
    GymImage?: GymImageUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    GymImage?: GymImageUncheckedUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutGymInput
  }

  export type GymCreateManyInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
  }

  export type GymUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GymImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    Gym: GymCreateNestedOneWithoutGymImageInput
  }

  export type GymImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    gymId: number
  }

  export type GymImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    Gym?: GymUpdateOneRequiredWithoutGymImageInput
  }

  export type GymImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    gymId?: IntFieldUpdateOperationsInput | number
  }

  export type GymImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    gymId: number
  }

  export type GymImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    gymId?: IntFieldUpdateOperationsInput | number
  }

  export type GymEuquipmentsOnGymsCreateInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymEquipmentsInput
    GymEquipment: GymEquipmentCreateNestedOneWithoutGymsInput
    assignUser: UserCreateNestedOneWithoutAssignedGymEquipmentsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    gymEquipmentId: number
    assignBy: number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymEquipmentsInput
    GymEquipment?: GymEquipmentUpdateOneRequiredWithoutGymsInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymEquipmentsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    gymEquipmentId: number
    assignBy: number
  }

  export type GymEuquipmentsOnGymsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
  }

  export type GymEquipmentUserHistoryCreateInput = {
    GymEuquipmentsOnGyms: GymEuquipmentsOnGymsCreateNestedOneWithoutGymEquipmentUserHistoryInput
    User: UserCreateNestedOneWithoutGymEquipmentUserHistoryInput
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedCreateInput = {
    id?: number
    gymEuquipmentsOnGymsId: number
    userId: number
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryUpdateInput = {
    GymEuquipmentsOnGyms?: GymEuquipmentsOnGymsUpdateOneRequiredWithoutGymEquipmentUserHistoryInput
    User?: UserUpdateOneRequiredWithoutGymEquipmentUserHistoryInput
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gymEuquipmentsOnGymsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymEquipmentUserHistoryCreateManyInput = {
    id?: number
    gymEuquipmentsOnGymsId: number
    userId: number
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryUpdateManyMutationInput = {
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gymEuquipmentsOnGymsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymMembershipCreateInput = {
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutGymMembershipInput
    Gym: GymCreateNestedOneWithoutGymMembershipInput
    assignUser: UserCreateNestedOneWithoutAssignedGymMembershipsInput
    startDay?: Date | string
    endDay: Date | string
    GymMembershipCancellation?: GymMembershipCancellationCreateNestedOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    gymId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type GymMembershipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGymMembershipInput
    Gym?: GymUpdateOneRequiredWithoutGymMembershipInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymMembershipsInput
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    GymMembershipCancellation?: GymMembershipCancellationUpdateOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    gymId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    gymMembershipCancellationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GymMembershipCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    gymId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type GymMembershipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymMembershipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    gymId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    gymMembershipCancellationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GymMembershipCancellationCreateInput = {
    createdAt?: Date | string
    reason?: string | null
    GymMembership?: GymMembershipCreateNestedManyWithoutGymMembershipCancellationInput
  }

  export type GymMembershipCancellationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    reason?: string | null
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymMembershipCancellationInput
  }

  export type GymMembershipCancellationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    GymMembership?: GymMembershipUpdateManyWithoutGymMembershipCancellationInput
  }

  export type GymMembershipCancellationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymMembershipCancellationInput
  }

  export type GymMembershipCancellationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    reason?: string | null
  }

  export type GymMembershipCancellationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymMembershipCancellationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteGymCreateInput = {
    Gym: GymCreateNestedOneWithoutFavoriteUsersInput
    User: UserCreateNestedOneWithoutFavoriteGymsInput
    assignedAt?: Date | string
  }

  export type FavoriteGymUncheckedCreateInput = {
    gymId: number
    userId: number
    assignedAt?: Date | string
  }

  export type FavoriteGymUpdateInput = {
    Gym?: GymUpdateOneRequiredWithoutFavoriteUsersInput
    User?: UserUpdateOneRequiredWithoutFavoriteGymsInput
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteGymUncheckedUpdateInput = {
    gymId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteGymCreateManyInput = {
    gymId: number
    userId: number
    assignedAt?: Date | string
  }

  export type FavoriteGymUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteGymUncheckedUpdateManyInput = {
    gymId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymAccessHistoryCreateInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymAccessHistoryInput
    User: UserCreateNestedOneWithoutGymAccessHistoryInput
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymAccessHistoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    userId: number
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymAccessHistoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymAccessHistoryInput
    User?: UserUpdateOneRequiredWithoutGymAccessHistoryInput
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymAccessHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymAccessHistoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    userId: number
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymAccessHistoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymAccessHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymPassHistoryCreateInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymPassHistoryInput
    User: UserCreateNestedOneWithoutGymPassHistoryInput
    hash: string
  }

  export type GymPassHistoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    userId: number
    hash: string
  }

  export type GymPassHistoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymPassHistoryInput
    User?: UserUpdateOneRequiredWithoutGymPassHistoryInput
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type GymPassHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type GymPassHistoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    userId: number
    hash: string
  }

  export type GymPassHistoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type GymPassHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumLoginTypeFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeFilter | LoginType
  }

  export type EnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type BoardReplyListRelationFilter = {
    every?: BoardReplyWhereInput
    some?: BoardReplyWhereInput
    none?: BoardReplyWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type GymListRelationFilter = {
    every?: GymWhereInput
    some?: GymWhereInput
    none?: GymWhereInput
  }

  export type GymEuquipmentsOnGymsListRelationFilter = {
    every?: GymEuquipmentsOnGymsWhereInput
    some?: GymEuquipmentsOnGymsWhereInput
    none?: GymEuquipmentsOnGymsWhereInput
  }

  export type GymMembershipListRelationFilter = {
    every?: GymMembershipWhereInput
    some?: GymMembershipWhereInput
    none?: GymMembershipWhereInput
  }

  export type FavoriteGymListRelationFilter = {
    every?: FavoriteGymWhereInput
    some?: FavoriteGymWhereInput
    none?: FavoriteGymWhereInput
  }

  export type GymEquipmentUserHistoryListRelationFilter = {
    every?: GymEquipmentUserHistoryWhereInput
    some?: GymEquipmentUserHistoryWhereInput
    none?: GymEquipmentUserHistoryWhereInput
  }

  export type GymAccessHistoryListRelationFilter = {
    every?: GymAccessHistoryWhereInput
    some?: GymAccessHistoryWhereInput
    none?: GymAccessHistoryWhereInput
  }

  export type GymPassHistoryListRelationFilter = {
    every?: GymPassHistoryWhereInput
    some?: GymPassHistoryWhereInput
    none?: GymPassHistoryWhereInput
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymEuquipmentsOnGymsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteGymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymEquipmentUserHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymAccessHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymPassHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLoginUniqueCompoundUniqueInput = {
    loginType: LoginType
    loginId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumLoginTypeWithAggregatesFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeWithAggregatesFilter | LoginType
    _count?: NestedIntFilter
    _min?: NestedEnumLoginTypeFilter
    _max?: NestedEnumLoginTypeFilter
  }

  export type EnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoardImageListRelationFilter = {
    every?: BoardImageWhereInput
    some?: BoardImageWhereInput
    none?: BoardImageWhereInput
  }

  export type EnumBoardTypeFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeFilter | BoardType
  }

  export type BoardImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumBoardTypeWithAggregatesFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeWithAggregatesFilter | BoardType
    _count?: NestedIntFilter
    _min?: NestedEnumBoardTypeFilter
    _max?: NestedEnumBoardTypeFilter
  }

  export type BoardRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type BoardImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    boardId?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoardReplyRelationFilter = {
    is?: BoardReplyWhereInput | null
    isNot?: BoardReplyWhereInput | null
  }

  export type BoardReplyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
  }

  export type BoardReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BodyPartsOnGymEquipmentsListRelationFilter = {
    every?: BodyPartsOnGymEquipmentsWhereInput
    some?: BodyPartsOnGymEquipmentsWhereInput
    none?: BodyPartsOnGymEquipmentsWhereInput
  }

  export type BodyPartsOnGymEquipmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyPartCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
  }

  export type BodyPartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BodyPartMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
  }

  export type BodyPartMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
  }

  export type BodyPartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymEquipmentImageListRelationFilter = {
    every?: GymEquipmentImageWhereInput
    some?: GymEquipmentImageWhereInput
    none?: GymEquipmentImageWhereInput
  }

  export type GymEquipmentImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymEquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    code?: SortOrder
    isDisable?: SortOrder
  }

  export type GymEquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymEquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    code?: SortOrder
    isDisable?: SortOrder
  }

  export type GymEquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    code?: SortOrder
    isDisable?: SortOrder
  }

  export type GymEquipmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymEquipmentRelationFilter = {
    is?: GymEquipmentWhereInput
    isNot?: GymEquipmentWhereInput
  }

  export type GymEquipmentImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymEquipmentId?: SortOrder
  }

  export type GymEquipmentImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    gymEquipmentId?: SortOrder
  }

  export type GymEquipmentImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymEquipmentId?: SortOrder
  }

  export type GymEquipmentImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymEquipmentId?: SortOrder
  }

  export type GymEquipmentImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    gymEquipmentId?: SortOrder
  }

  export type BodyPartRelationFilter = {
    is?: BodyPartWhereInput
    isNot?: BodyPartWhereInput
  }

  export type BodyPartsOnGymEquipmentsGymEquipmentIdBodyPartIdCompoundUniqueInput = {
    gymEquipmentId: number
    bodyPartId: number
  }

  export type BodyPartsOnGymEquipmentsCountOrderByAggregateInput = {
    gymEquipmentId?: SortOrder
    bodyPartId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BodyPartsOnGymEquipmentsAvgOrderByAggregateInput = {
    gymEquipmentId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type BodyPartsOnGymEquipmentsMaxOrderByAggregateInput = {
    gymEquipmentId?: SortOrder
    bodyPartId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BodyPartsOnGymEquipmentsMinOrderByAggregateInput = {
    gymEquipmentId?: SortOrder
    bodyPartId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BodyPartsOnGymEquipmentsSumOrderByAggregateInput = {
    gymEquipmentId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type GymImageListRelationFilter = {
    every?: GymImageWhereInput
    some?: GymImageWhereInput
    none?: GymImageWhereInput
  }

  export type GymImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ceoName?: SortOrder
    companyName?: SortOrder
    businessNumber?: SortOrder
    postcode?: SortOrder
    mainAddress?: SortOrder
    subAddress?: SortOrder
    phone?: SortOrder
    cellPhone?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    isCertified?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
  }

  export type GymAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ceoName?: SortOrder
    companyName?: SortOrder
    businessNumber?: SortOrder
    postcode?: SortOrder
    mainAddress?: SortOrder
    subAddress?: SortOrder
    phone?: SortOrder
    cellPhone?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    isCertified?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ceoName?: SortOrder
    companyName?: SortOrder
    businessNumber?: SortOrder
    postcode?: SortOrder
    mainAddress?: SortOrder
    subAddress?: SortOrder
    phone?: SortOrder
    cellPhone?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    isCertified?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
  }

  export type GymSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GymRelationFilter = {
    is?: GymWhereInput
    isNot?: GymWhereInput
  }

  export type GymImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymId?: SortOrder
  }

  export type GymImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    gymId?: SortOrder
  }

  export type GymImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymId?: SortOrder
  }

  export type GymImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    gymId?: SortOrder
  }

  export type GymImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    gymId?: SortOrder
  }

  export type GymEuquipmentsOnGymsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    gymEquipmentId?: SortOrder
    assignBy?: SortOrder
  }

  export type GymEuquipmentsOnGymsAvgOrderByAggregateInput = {
    id?: SortOrder
    gymId?: SortOrder
    gymEquipmentId?: SortOrder
    assignBy?: SortOrder
  }

  export type GymEuquipmentsOnGymsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    gymEquipmentId?: SortOrder
    assignBy?: SortOrder
  }

  export type GymEuquipmentsOnGymsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    gymEquipmentId?: SortOrder
    assignBy?: SortOrder
  }

  export type GymEuquipmentsOnGymsSumOrderByAggregateInput = {
    id?: SortOrder
    gymId?: SortOrder
    gymEquipmentId?: SortOrder
    assignBy?: SortOrder
  }

  export type GymEuquipmentsOnGymsRelationFilter = {
    is?: GymEuquipmentsOnGymsWhereInput
    isNot?: GymEuquipmentsOnGymsWhereInput
  }

  export type GymEquipmentUserHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    gymEuquipmentsOnGymsId?: SortOrder
    userId?: SortOrder
    usedAt?: SortOrder
    endAt?: SortOrder
  }

  export type GymEquipmentUserHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    gymEuquipmentsOnGymsId?: SortOrder
    userId?: SortOrder
  }

  export type GymEquipmentUserHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    gymEuquipmentsOnGymsId?: SortOrder
    userId?: SortOrder
    usedAt?: SortOrder
    endAt?: SortOrder
  }

  export type GymEquipmentUserHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    gymEuquipmentsOnGymsId?: SortOrder
    userId?: SortOrder
    usedAt?: SortOrder
    endAt?: SortOrder
  }

  export type GymEquipmentUserHistorySumOrderByAggregateInput = {
    id?: SortOrder
    gymEuquipmentsOnGymsId?: SortOrder
    userId?: SortOrder
  }

  export type GymMembershipCancellationRelationFilter = {
    is?: GymMembershipCancellationWhereInput | null
    isNot?: GymMembershipCancellationWhereInput | null
  }

  export type GymMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    assignBy?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    gymMembershipCancellationId?: SortOrder
  }

  export type GymMembershipAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    assignBy?: SortOrder
    gymMembershipCancellationId?: SortOrder
  }

  export type GymMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    assignBy?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    gymMembershipCancellationId?: SortOrder
  }

  export type GymMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    assignBy?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    gymMembershipCancellationId?: SortOrder
  }

  export type GymMembershipSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    assignBy?: SortOrder
    gymMembershipCancellationId?: SortOrder
  }

  export type GymMembershipCancellationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reason?: SortOrder
  }

  export type GymMembershipCancellationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymMembershipCancellationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reason?: SortOrder
  }

  export type GymMembershipCancellationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reason?: SortOrder
  }

  export type GymMembershipCancellationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FavoriteGymGymIdUserIdCompoundUniqueInput = {
    gymId: number
    userId: number
  }

  export type FavoriteGymCountOrderByAggregateInput = {
    gymId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type FavoriteGymAvgOrderByAggregateInput = {
    gymId?: SortOrder
    userId?: SortOrder
  }

  export type FavoriteGymMaxOrderByAggregateInput = {
    gymId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type FavoriteGymMinOrderByAggregateInput = {
    gymId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type FavoriteGymSumOrderByAggregateInput = {
    gymId?: SortOrder
    userId?: SortOrder
  }

  export type GymAccessHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    entryAt?: SortOrder
    exitAt?: SortOrder
  }

  export type GymAccessHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
  }

  export type GymAccessHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    entryAt?: SortOrder
    exitAt?: SortOrder
  }

  export type GymAccessHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    entryAt?: SortOrder
    exitAt?: SortOrder
  }

  export type GymAccessHistorySumOrderByAggregateInput = {
    id?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
  }

  export type GymPassHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
  }

  export type GymPassHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
  }

  export type GymPassHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
  }

  export type GymPassHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
    hash?: SortOrder
  }

  export type GymPassHistorySumOrderByAggregateInput = {
    id?: SortOrder
    gymId?: SortOrder
    userId?: SortOrder
  }

  export type BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type BoardReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NoticeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    connect?: Enumerable<NoticeWhereUniqueInput>
  }

  export type GymCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymCreateWithoutUserInput>, Enumerable<GymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymCreateOrConnectWithoutUserInput>
    createMany?: GymCreateManyUserInputEnvelope
    connect?: Enumerable<GymWhereUniqueInput>
  }

  export type GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutAssignUserInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutAssignUserInput>
    createMany?: GymEuquipmentsOnGymsCreateManyAssignUserInputEnvelope
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
  }

  export type GymMembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutUserInput>
    createMany?: GymMembershipCreateManyUserInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type GymMembershipCreateNestedManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutAssignUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutAssignUserInput>
    createMany?: GymMembershipCreateManyAssignUserInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type FavoriteGymCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutUserInput>, Enumerable<FavoriteGymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutUserInput>
    createMany?: FavoriteGymCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
  }

  export type GymEquipmentUserHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutUserInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutUserInput>
    createMany?: GymEquipmentUserHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
  }

  export type GymAccessHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutUserInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutUserInput>
    createMany?: GymAccessHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
  }

  export type GymPassHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutUserInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutUserInput>
    createMany?: GymPassHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
  }

  export type BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NoticeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    connect?: Enumerable<NoticeWhereUniqueInput>
  }

  export type GymUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymCreateWithoutUserInput>, Enumerable<GymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymCreateOrConnectWithoutUserInput>
    createMany?: GymCreateManyUserInputEnvelope
    connect?: Enumerable<GymWhereUniqueInput>
  }

  export type GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutAssignUserInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutAssignUserInput>
    createMany?: GymEuquipmentsOnGymsCreateManyAssignUserInputEnvelope
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
  }

  export type GymMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutUserInput>
    createMany?: GymMembershipCreateManyUserInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutAssignUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutAssignUserInput>
    createMany?: GymMembershipCreateManyAssignUserInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type FavoriteGymUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutUserInput>, Enumerable<FavoriteGymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutUserInput>
    createMany?: FavoriteGymCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
  }

  export type GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutUserInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutUserInput>
    createMany?: GymEquipmentUserHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
  }

  export type GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutUserInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutUserInput>
    createMany?: GymAccessHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
  }

  export type GymPassHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutUserInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutUserInput>
    createMany?: GymPassHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLoginTypeFieldUpdateOperationsInput = {
    set?: LoginType
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BoardUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type BoardReplyUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NoticeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoticeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    set?: Enumerable<NoticeWhereUniqueInput>
    disconnect?: Enumerable<NoticeWhereUniqueInput>
    delete?: Enumerable<NoticeWhereUniqueInput>
    connect?: Enumerable<NoticeWhereUniqueInput>
    update?: Enumerable<NoticeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoticeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoticeScalarWhereInput>
  }

  export type GymUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymCreateWithoutUserInput>, Enumerable<GymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymCreateManyUserInputEnvelope
    set?: Enumerable<GymWhereUniqueInput>
    disconnect?: Enumerable<GymWhereUniqueInput>
    delete?: Enumerable<GymWhereUniqueInput>
    connect?: Enumerable<GymWhereUniqueInput>
    update?: Enumerable<GymUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymScalarWhereInput>
  }

  export type GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutAssignUserInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutAssignUserInput>
    upsert?: Enumerable<GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutAssignUserInput>
    createMany?: GymEuquipmentsOnGymsCreateManyAssignUserInputEnvelope
    set?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    disconnect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    delete?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    update?: Enumerable<GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutAssignUserInput>
    updateMany?: Enumerable<GymEuquipmentsOnGymsUpdateManyWithWhereWithoutAssignUserInput>
    deleteMany?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
  }

  export type GymMembershipUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymMembershipCreateManyUserInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type GymMembershipUpdateManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutAssignUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutAssignUserInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutAssignUserInput>
    createMany?: GymMembershipCreateManyAssignUserInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutAssignUserInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutAssignUserInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type FavoriteGymUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutUserInput>, Enumerable<FavoriteGymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoriteGymUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoriteGymCreateManyUserInputEnvelope
    set?: Enumerable<FavoriteGymWhereUniqueInput>
    disconnect?: Enumerable<FavoriteGymWhereUniqueInput>
    delete?: Enumerable<FavoriteGymWhereUniqueInput>
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
    update?: Enumerable<FavoriteGymUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoriteGymUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoriteGymScalarWhereInput>
  }

  export type GymEquipmentUserHistoryUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutUserInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymEquipmentUserHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymEquipmentUserHistoryCreateManyUserInputEnvelope
    set?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    delete?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    update?: Enumerable<GymEquipmentUserHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymEquipmentUserHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymEquipmentUserHistoryScalarWhereInput>
  }

  export type GymAccessHistoryUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutUserInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymAccessHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymAccessHistoryCreateManyUserInputEnvelope
    set?: Enumerable<GymAccessHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    delete?: Enumerable<GymAccessHistoryWhereUniqueInput>
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    update?: Enumerable<GymAccessHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymAccessHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymAccessHistoryScalarWhereInput>
  }

  export type GymPassHistoryUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutUserInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymPassHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymPassHistoryCreateManyUserInputEnvelope
    set?: Enumerable<GymPassHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymPassHistoryWhereUniqueInput>
    delete?: Enumerable<GymPassHistoryWhereUniqueInput>
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
    update?: Enumerable<GymPassHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymPassHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymPassHistoryScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type BoardReplyUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NoticeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoticeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    set?: Enumerable<NoticeWhereUniqueInput>
    disconnect?: Enumerable<NoticeWhereUniqueInput>
    delete?: Enumerable<NoticeWhereUniqueInput>
    connect?: Enumerable<NoticeWhereUniqueInput>
    update?: Enumerable<NoticeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoticeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoticeScalarWhereInput>
  }

  export type GymUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymCreateWithoutUserInput>, Enumerable<GymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymCreateManyUserInputEnvelope
    set?: Enumerable<GymWhereUniqueInput>
    disconnect?: Enumerable<GymWhereUniqueInput>
    delete?: Enumerable<GymWhereUniqueInput>
    connect?: Enumerable<GymWhereUniqueInput>
    update?: Enumerable<GymUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymScalarWhereInput>
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutAssignUserInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutAssignUserInput>
    upsert?: Enumerable<GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutAssignUserInput>
    createMany?: GymEuquipmentsOnGymsCreateManyAssignUserInputEnvelope
    set?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    disconnect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    delete?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    update?: Enumerable<GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutAssignUserInput>
    updateMany?: Enumerable<GymEuquipmentsOnGymsUpdateManyWithWhereWithoutAssignUserInput>
    deleteMany?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
  }

  export type GymMembershipUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymMembershipCreateManyUserInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type GymMembershipUncheckedUpdateManyWithoutAssignUserInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutAssignUserInput>, Enumerable<GymMembershipUncheckedCreateWithoutAssignUserInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutAssignUserInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutAssignUserInput>
    createMany?: GymMembershipCreateManyAssignUserInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutAssignUserInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutAssignUserInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type FavoriteGymUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutUserInput>, Enumerable<FavoriteGymUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoriteGymUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoriteGymCreateManyUserInputEnvelope
    set?: Enumerable<FavoriteGymWhereUniqueInput>
    disconnect?: Enumerable<FavoriteGymWhereUniqueInput>
    delete?: Enumerable<FavoriteGymWhereUniqueInput>
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
    update?: Enumerable<FavoriteGymUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoriteGymUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoriteGymScalarWhereInput>
  }

  export type GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutUserInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymEquipmentUserHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymEquipmentUserHistoryCreateManyUserInputEnvelope
    set?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    delete?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    update?: Enumerable<GymEquipmentUserHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymEquipmentUserHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymEquipmentUserHistoryScalarWhereInput>
  }

  export type GymAccessHistoryUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutUserInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymAccessHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymAccessHistoryCreateManyUserInputEnvelope
    set?: Enumerable<GymAccessHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    delete?: Enumerable<GymAccessHistoryWhereUniqueInput>
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    update?: Enumerable<GymAccessHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymAccessHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymAccessHistoryScalarWhereInput>
  }

  export type GymPassHistoryUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutUserInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GymPassHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GymPassHistoryCreateManyUserInputEnvelope
    set?: Enumerable<GymPassHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymPassHistoryWhereUniqueInput>
    delete?: Enumerable<GymPassHistoryWhereUniqueInput>
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
    update?: Enumerable<GymPassHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GymPassHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GymPassHistoryScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutNoticeInput = {
    create?: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNoticeInput = {
    create?: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeInput
    upsert?: UserUpsertWithoutNoticeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNoticeInput, UserUncheckedUpdateWithoutNoticeInput>
  }

  export type BoardImageCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardImageWhereUniqueInput>
  }

  export type BoardReplyCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutBoardInput = {
    create?: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardInput
    connect?: UserWhereUniqueInput
  }

  export type BoardImageUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardImageWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type BoardImageUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardImageUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    set?: Enumerable<BoardImageWhereUniqueInput>
    disconnect?: Enumerable<BoardImageWhereUniqueInput>
    delete?: Enumerable<BoardImageWhereUniqueInput>
    connect?: Enumerable<BoardImageWhereUniqueInput>
    update?: Enumerable<BoardImageUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardImageUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardImageScalarWhereInput>
  }

  export type BoardReplyUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutBoardInput = {
    create?: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardInput
    upsert?: UserUpsertWithoutBoardInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoardInput, UserUncheckedUpdateWithoutBoardInput>
  }

  export type EnumBoardTypeFieldUpdateOperationsInput = {
    set?: BoardType
  }

  export type BoardImageUncheckedUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardImageUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    set?: Enumerable<BoardImageWhereUniqueInput>
    disconnect?: Enumerable<BoardImageWhereUniqueInput>
    delete?: Enumerable<BoardImageWhereUniqueInput>
    connect?: Enumerable<BoardImageWhereUniqueInput>
    update?: Enumerable<BoardImageUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardImageUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardImageScalarWhereInput>
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type BoardCreateNestedOneWithoutBoardImageInput = {
    create?: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardImageInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutBoardImageInput = {
    create?: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardImageInput
    upsert?: BoardUpsertWithoutBoardImageInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutBoardImageInput, BoardUncheckedUpdateWithoutBoardImageInput>
  }

  export type UserCreateNestedOneWithoutBoardReplyInput = {
    create?: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardReplyInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedOneWithoutBoardReplyInput = {
    create?: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardReplyInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardReplyCreateNestedOneWithoutBoardNestedReplyInput = {
    create?: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
    connectOrCreate?: BoardReplyCreateOrConnectWithoutBoardNestedReplyInput
    connect?: BoardReplyWhereUniqueInput
  }

  export type BoardReplyCreateNestedManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBoardReplyInput = {
    create?: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardReplyInput
    upsert?: UserUpsertWithoutBoardReplyInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoardReplyInput, UserUncheckedUpdateWithoutBoardReplyInput>
  }

  export type BoardUpdateOneRequiredWithoutBoardReplyInput = {
    create?: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardReplyInput
    upsert?: BoardUpsertWithoutBoardReplyInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutBoardReplyInput, BoardUncheckedUpdateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateOneWithoutBoardNestedReplyInput = {
    create?: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
    connectOrCreate?: BoardReplyCreateOrConnectWithoutBoardNestedReplyInput
    upsert?: BoardReplyUpsertWithoutBoardNestedReplyInput
    disconnect?: boolean
    delete?: boolean
    connect?: BoardReplyWhereUniqueInput
    update?: XOR<BoardReplyUpdateWithoutBoardNestedReplyInput, BoardReplyUncheckedUpdateWithoutBoardNestedReplyInput>
  }

  export type BoardReplyUpdateManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardReplyInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardReplyInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type BodyPartsOnGymEquipmentsCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutBodyPartInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutBodyPartInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutBodyPartInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyBodyPartInputEnvelope
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
  }

  export type BodyPartsOnGymEquipmentsUncheckedCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutBodyPartInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutBodyPartInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutBodyPartInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyBodyPartInputEnvelope
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
  }

  export type BodyPartsOnGymEquipmentsUpdateManyWithoutBodyPartInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutBodyPartInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutBodyPartInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutBodyPartInput>
    upsert?: Enumerable<BodyPartsOnGymEquipmentsUpsertWithWhereUniqueWithoutBodyPartInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyBodyPartInputEnvelope
    set?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    disconnect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    delete?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    update?: Enumerable<BodyPartsOnGymEquipmentsUpdateWithWhereUniqueWithoutBodyPartInput>
    updateMany?: Enumerable<BodyPartsOnGymEquipmentsUpdateManyWithWhereWithoutBodyPartInput>
    deleteMany?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereInput>
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutBodyPartInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutBodyPartInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutBodyPartInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutBodyPartInput>
    upsert?: Enumerable<BodyPartsOnGymEquipmentsUpsertWithWhereUniqueWithoutBodyPartInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyBodyPartInputEnvelope
    set?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    disconnect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    delete?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    update?: Enumerable<BodyPartsOnGymEquipmentsUpdateWithWhereUniqueWithoutBodyPartInput>
    updateMany?: Enumerable<BodyPartsOnGymEquipmentsUpdateManyWithWhereWithoutBodyPartInput>
    deleteMany?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereInput>
  }

  export type BodyPartsOnGymEquipmentsCreateNestedManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutGymEquipmentInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutGymEquipmentInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyGymEquipmentInputEnvelope
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
  }

  export type GymEuquipmentsOnGymsCreateNestedManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymEquipmentInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymEquipmentInputEnvelope
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
  }

  export type GymEquipmentImageCreateNestedManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEquipmentImageCreateWithoutGymEquipmentInput>, Enumerable<GymEquipmentImageUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEquipmentImageCreateOrConnectWithoutGymEquipmentInput>
    createMany?: GymEquipmentImageCreateManyGymEquipmentInputEnvelope
    connect?: Enumerable<GymEquipmentImageWhereUniqueInput>
  }

  export type BodyPartsOnGymEquipmentsUncheckedCreateNestedManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutGymEquipmentInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutGymEquipmentInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyGymEquipmentInputEnvelope
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
  }

  export type GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymEquipmentInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymEquipmentInputEnvelope
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
  }

  export type GymEquipmentImageUncheckedCreateNestedManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEquipmentImageCreateWithoutGymEquipmentInput>, Enumerable<GymEquipmentImageUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEquipmentImageCreateOrConnectWithoutGymEquipmentInput>
    createMany?: GymEquipmentImageCreateManyGymEquipmentInputEnvelope
    connect?: Enumerable<GymEquipmentImageWhereUniqueInput>
  }

  export type BodyPartsOnGymEquipmentsUpdateManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutGymEquipmentInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutGymEquipmentInput>
    upsert?: Enumerable<BodyPartsOnGymEquipmentsUpsertWithWhereUniqueWithoutGymEquipmentInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyGymEquipmentInputEnvelope
    set?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    disconnect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    delete?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    update?: Enumerable<BodyPartsOnGymEquipmentsUpdateWithWhereUniqueWithoutGymEquipmentInput>
    updateMany?: Enumerable<BodyPartsOnGymEquipmentsUpdateManyWithWhereWithoutGymEquipmentInput>
    deleteMany?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereInput>
  }

  export type GymEuquipmentsOnGymsUpdateManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymEquipmentInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentInput>
    upsert?: Enumerable<GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutGymEquipmentInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymEquipmentInputEnvelope
    set?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    disconnect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    delete?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    update?: Enumerable<GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutGymEquipmentInput>
    updateMany?: Enumerable<GymEuquipmentsOnGymsUpdateManyWithWhereWithoutGymEquipmentInput>
    deleteMany?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
  }

  export type GymEquipmentImageUpdateManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEquipmentImageCreateWithoutGymEquipmentInput>, Enumerable<GymEquipmentImageUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEquipmentImageCreateOrConnectWithoutGymEquipmentInput>
    upsert?: Enumerable<GymEquipmentImageUpsertWithWhereUniqueWithoutGymEquipmentInput>
    createMany?: GymEquipmentImageCreateManyGymEquipmentInputEnvelope
    set?: Enumerable<GymEquipmentImageWhereUniqueInput>
    disconnect?: Enumerable<GymEquipmentImageWhereUniqueInput>
    delete?: Enumerable<GymEquipmentImageWhereUniqueInput>
    connect?: Enumerable<GymEquipmentImageWhereUniqueInput>
    update?: Enumerable<GymEquipmentImageUpdateWithWhereUniqueWithoutGymEquipmentInput>
    updateMany?: Enumerable<GymEquipmentImageUpdateManyWithWhereWithoutGymEquipmentInput>
    deleteMany?: Enumerable<GymEquipmentImageScalarWhereInput>
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<BodyPartsOnGymEquipmentsCreateWithoutGymEquipmentInput>, Enumerable<BodyPartsOnGymEquipmentsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<BodyPartsOnGymEquipmentsCreateOrConnectWithoutGymEquipmentInput>
    upsert?: Enumerable<BodyPartsOnGymEquipmentsUpsertWithWhereUniqueWithoutGymEquipmentInput>
    createMany?: BodyPartsOnGymEquipmentsCreateManyGymEquipmentInputEnvelope
    set?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    disconnect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    delete?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    connect?: Enumerable<BodyPartsOnGymEquipmentsWhereUniqueInput>
    update?: Enumerable<BodyPartsOnGymEquipmentsUpdateWithWhereUniqueWithoutGymEquipmentInput>
    updateMany?: Enumerable<BodyPartsOnGymEquipmentsUpdateManyWithWhereWithoutGymEquipmentInput>
    deleteMany?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereInput>
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymEquipmentInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentInput>
    upsert?: Enumerable<GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutGymEquipmentInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymEquipmentInputEnvelope
    set?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    disconnect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    delete?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    update?: Enumerable<GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutGymEquipmentInput>
    updateMany?: Enumerable<GymEuquipmentsOnGymsUpdateManyWithWhereWithoutGymEquipmentInput>
    deleteMany?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
  }

  export type GymEquipmentImageUncheckedUpdateManyWithoutGymEquipmentInput = {
    create?: XOR<Enumerable<GymEquipmentImageCreateWithoutGymEquipmentInput>, Enumerable<GymEquipmentImageUncheckedCreateWithoutGymEquipmentInput>>
    connectOrCreate?: Enumerable<GymEquipmentImageCreateOrConnectWithoutGymEquipmentInput>
    upsert?: Enumerable<GymEquipmentImageUpsertWithWhereUniqueWithoutGymEquipmentInput>
    createMany?: GymEquipmentImageCreateManyGymEquipmentInputEnvelope
    set?: Enumerable<GymEquipmentImageWhereUniqueInput>
    disconnect?: Enumerable<GymEquipmentImageWhereUniqueInput>
    delete?: Enumerable<GymEquipmentImageWhereUniqueInput>
    connect?: Enumerable<GymEquipmentImageWhereUniqueInput>
    update?: Enumerable<GymEquipmentImageUpdateWithWhereUniqueWithoutGymEquipmentInput>
    updateMany?: Enumerable<GymEquipmentImageUpdateManyWithWhereWithoutGymEquipmentInput>
    deleteMany?: Enumerable<GymEquipmentImageScalarWhereInput>
  }

  export type GymEquipmentCreateNestedOneWithoutGymEquipmentImageInput = {
    create?: XOR<GymEquipmentCreateWithoutGymEquipmentImageInput, GymEquipmentUncheckedCreateWithoutGymEquipmentImageInput>
    connectOrCreate?: GymEquipmentCreateOrConnectWithoutGymEquipmentImageInput
    connect?: GymEquipmentWhereUniqueInput
  }

  export type GymEquipmentUpdateOneRequiredWithoutGymEquipmentImageInput = {
    create?: XOR<GymEquipmentCreateWithoutGymEquipmentImageInput, GymEquipmentUncheckedCreateWithoutGymEquipmentImageInput>
    connectOrCreate?: GymEquipmentCreateOrConnectWithoutGymEquipmentImageInput
    upsert?: GymEquipmentUpsertWithoutGymEquipmentImageInput
    connect?: GymEquipmentWhereUniqueInput
    update?: XOR<GymEquipmentUpdateWithoutGymEquipmentImageInput, GymEquipmentUncheckedUpdateWithoutGymEquipmentImageInput>
  }

  export type GymEquipmentCreateNestedOneWithoutBodyPartsInput = {
    create?: XOR<GymEquipmentCreateWithoutBodyPartsInput, GymEquipmentUncheckedCreateWithoutBodyPartsInput>
    connectOrCreate?: GymEquipmentCreateOrConnectWithoutBodyPartsInput
    connect?: GymEquipmentWhereUniqueInput
  }

  export type BodyPartCreateNestedOneWithoutGymEquipmentsInput = {
    create?: XOR<BodyPartCreateWithoutGymEquipmentsInput, BodyPartUncheckedCreateWithoutGymEquipmentsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutGymEquipmentsInput
    connect?: BodyPartWhereUniqueInput
  }

  export type GymEquipmentUpdateOneRequiredWithoutBodyPartsInput = {
    create?: XOR<GymEquipmentCreateWithoutBodyPartsInput, GymEquipmentUncheckedCreateWithoutBodyPartsInput>
    connectOrCreate?: GymEquipmentCreateOrConnectWithoutBodyPartsInput
    upsert?: GymEquipmentUpsertWithoutBodyPartsInput
    connect?: GymEquipmentWhereUniqueInput
    update?: XOR<GymEquipmentUpdateWithoutBodyPartsInput, GymEquipmentUncheckedUpdateWithoutBodyPartsInput>
  }

  export type BodyPartUpdateOneRequiredWithoutGymEquipmentsInput = {
    create?: XOR<BodyPartCreateWithoutGymEquipmentsInput, BodyPartUncheckedCreateWithoutGymEquipmentsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutGymEquipmentsInput
    upsert?: BodyPartUpsertWithoutGymEquipmentsInput
    connect?: BodyPartWhereUniqueInput
    update?: XOR<BodyPartUpdateWithoutGymEquipmentsInput, BodyPartUncheckedUpdateWithoutGymEquipmentsInput>
  }

  export type UserCreateNestedOneWithoutGymInput = {
    create?: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymInput
    connect?: UserWhereUniqueInput
  }

  export type GymImageCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymImageCreateWithoutGymInput>, Enumerable<GymImageUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymImageCreateOrConnectWithoutGymInput>
    createMany?: GymImageCreateManyGymInputEnvelope
    connect?: Enumerable<GymImageWhereUniqueInput>
  }

  export type GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymInputEnvelope
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
  }

  export type FavoriteGymCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutGymInput>, Enumerable<FavoriteGymUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutGymInput>
    createMany?: FavoriteGymCreateManyGymInputEnvelope
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
  }

  export type GymAccessHistoryCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutGymInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutGymInput>
    createMany?: GymAccessHistoryCreateManyGymInputEnvelope
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
  }

  export type GymMembershipCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymInput>
    createMany?: GymMembershipCreateManyGymInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type GymPassHistoryCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutGymInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutGymInput>
    createMany?: GymPassHistoryCreateManyGymInputEnvelope
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
  }

  export type GymImageUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymImageCreateWithoutGymInput>, Enumerable<GymImageUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymImageCreateOrConnectWithoutGymInput>
    createMany?: GymImageCreateManyGymInputEnvelope
    connect?: Enumerable<GymImageWhereUniqueInput>
  }

  export type GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymInputEnvelope
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
  }

  export type FavoriteGymUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutGymInput>, Enumerable<FavoriteGymUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutGymInput>
    createMany?: FavoriteGymCreateManyGymInputEnvelope
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
  }

  export type GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutGymInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutGymInput>
    createMany?: GymAccessHistoryCreateManyGymInputEnvelope
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
  }

  export type GymMembershipUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymInput>
    createMany?: GymMembershipCreateManyGymInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type GymPassHistoryUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutGymInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutGymInput>
    createMany?: GymPassHistoryCreateManyGymInputEnvelope
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutGymInput = {
    create?: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymInput
    upsert?: UserUpsertWithoutGymInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGymInput, UserUncheckedUpdateWithoutGymInput>
  }

  export type GymImageUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymImageCreateWithoutGymInput>, Enumerable<GymImageUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymImageCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymImageUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymImageCreateManyGymInputEnvelope
    set?: Enumerable<GymImageWhereUniqueInput>
    disconnect?: Enumerable<GymImageWhereUniqueInput>
    delete?: Enumerable<GymImageWhereUniqueInput>
    connect?: Enumerable<GymImageWhereUniqueInput>
    update?: Enumerable<GymImageUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymImageUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymImageScalarWhereInput>
  }

  export type GymEuquipmentsOnGymsUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymInputEnvelope
    set?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    disconnect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    delete?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    update?: Enumerable<GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymEuquipmentsOnGymsUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
  }

  export type FavoriteGymUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutGymInput>, Enumerable<FavoriteGymUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<FavoriteGymUpsertWithWhereUniqueWithoutGymInput>
    createMany?: FavoriteGymCreateManyGymInputEnvelope
    set?: Enumerable<FavoriteGymWhereUniqueInput>
    disconnect?: Enumerable<FavoriteGymWhereUniqueInput>
    delete?: Enumerable<FavoriteGymWhereUniqueInput>
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
    update?: Enumerable<FavoriteGymUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<FavoriteGymUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<FavoriteGymScalarWhereInput>
  }

  export type GymAccessHistoryUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutGymInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymAccessHistoryUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymAccessHistoryCreateManyGymInputEnvelope
    set?: Enumerable<GymAccessHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    delete?: Enumerable<GymAccessHistoryWhereUniqueInput>
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    update?: Enumerable<GymAccessHistoryUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymAccessHistoryUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymAccessHistoryScalarWhereInput>
  }

  export type GymMembershipUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymMembershipCreateManyGymInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type GymPassHistoryUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutGymInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymPassHistoryUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymPassHistoryCreateManyGymInputEnvelope
    set?: Enumerable<GymPassHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymPassHistoryWhereUniqueInput>
    delete?: Enumerable<GymPassHistoryWhereUniqueInput>
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
    update?: Enumerable<GymPassHistoryUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymPassHistoryUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymPassHistoryScalarWhereInput>
  }

  export type GymImageUncheckedUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymImageCreateWithoutGymInput>, Enumerable<GymImageUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymImageCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymImageUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymImageCreateManyGymInputEnvelope
    set?: Enumerable<GymImageWhereUniqueInput>
    disconnect?: Enumerable<GymImageWhereUniqueInput>
    delete?: Enumerable<GymImageWhereUniqueInput>
    connect?: Enumerable<GymImageWhereUniqueInput>
    update?: Enumerable<GymImageUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymImageUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymImageScalarWhereInput>
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymEuquipmentsOnGymsCreateWithoutGymInput>, Enumerable<GymEuquipmentsOnGymsUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymEuquipmentsOnGymsCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymEuquipmentsOnGymsCreateManyGymInputEnvelope
    set?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    disconnect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    delete?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    connect?: Enumerable<GymEuquipmentsOnGymsWhereUniqueInput>
    update?: Enumerable<GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymEuquipmentsOnGymsUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
  }

  export type FavoriteGymUncheckedUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<FavoriteGymCreateWithoutGymInput>, Enumerable<FavoriteGymUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<FavoriteGymCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<FavoriteGymUpsertWithWhereUniqueWithoutGymInput>
    createMany?: FavoriteGymCreateManyGymInputEnvelope
    set?: Enumerable<FavoriteGymWhereUniqueInput>
    disconnect?: Enumerable<FavoriteGymWhereUniqueInput>
    delete?: Enumerable<FavoriteGymWhereUniqueInput>
    connect?: Enumerable<FavoriteGymWhereUniqueInput>
    update?: Enumerable<FavoriteGymUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<FavoriteGymUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<FavoriteGymScalarWhereInput>
  }

  export type GymAccessHistoryUncheckedUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymAccessHistoryCreateWithoutGymInput>, Enumerable<GymAccessHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymAccessHistoryCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymAccessHistoryUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymAccessHistoryCreateManyGymInputEnvelope
    set?: Enumerable<GymAccessHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    delete?: Enumerable<GymAccessHistoryWhereUniqueInput>
    connect?: Enumerable<GymAccessHistoryWhereUniqueInput>
    update?: Enumerable<GymAccessHistoryUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymAccessHistoryUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymAccessHistoryScalarWhereInput>
  }

  export type GymMembershipUncheckedUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymMembershipCreateManyGymInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type GymPassHistoryUncheckedUpdateManyWithoutGymInput = {
    create?: XOR<Enumerable<GymPassHistoryCreateWithoutGymInput>, Enumerable<GymPassHistoryUncheckedCreateWithoutGymInput>>
    connectOrCreate?: Enumerable<GymPassHistoryCreateOrConnectWithoutGymInput>
    upsert?: Enumerable<GymPassHistoryUpsertWithWhereUniqueWithoutGymInput>
    createMany?: GymPassHistoryCreateManyGymInputEnvelope
    set?: Enumerable<GymPassHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymPassHistoryWhereUniqueInput>
    delete?: Enumerable<GymPassHistoryWhereUniqueInput>
    connect?: Enumerable<GymPassHistoryWhereUniqueInput>
    update?: Enumerable<GymPassHistoryUpdateWithWhereUniqueWithoutGymInput>
    updateMany?: Enumerable<GymPassHistoryUpdateManyWithWhereWithoutGymInput>
    deleteMany?: Enumerable<GymPassHistoryScalarWhereInput>
  }

  export type GymCreateNestedOneWithoutGymImageInput = {
    create?: XOR<GymCreateWithoutGymImageInput, GymUncheckedCreateWithoutGymImageInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymImageInput
    connect?: GymWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutGymImageInput = {
    create?: XOR<GymCreateWithoutGymImageInput, GymUncheckedCreateWithoutGymImageInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymImageInput
    upsert?: GymUpsertWithoutGymImageInput
    connect?: GymWhereUniqueInput
    update?: XOR<GymUpdateWithoutGymImageInput, GymUncheckedUpdateWithoutGymImageInput>
  }

  export type GymCreateNestedOneWithoutGymEquipmentsInput = {
    create?: XOR<GymCreateWithoutGymEquipmentsInput, GymUncheckedCreateWithoutGymEquipmentsInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymEquipmentsInput
    connect?: GymWhereUniqueInput
  }

  export type GymEquipmentCreateNestedOneWithoutGymsInput = {
    create?: XOR<GymEquipmentCreateWithoutGymsInput, GymEquipmentUncheckedCreateWithoutGymsInput>
    connectOrCreate?: GymEquipmentCreateOrConnectWithoutGymsInput
    connect?: GymEquipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedGymEquipmentsInput = {
    create?: XOR<UserCreateWithoutAssignedGymEquipmentsInput, UserUncheckedCreateWithoutAssignedGymEquipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedGymEquipmentsInput
    connect?: UserWhereUniqueInput
  }

  export type GymEquipmentUserHistoryCreateNestedManyWithoutGymEuquipmentsOnGymsInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutGymEuquipmentsOnGymsInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutGymEuquipmentsOnGymsInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutGymEuquipmentsOnGymsInput>
    createMany?: GymEquipmentUserHistoryCreateManyGymEuquipmentsOnGymsInputEnvelope
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
  }

  export type GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutGymEuquipmentsOnGymsInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutGymEuquipmentsOnGymsInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutGymEuquipmentsOnGymsInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutGymEuquipmentsOnGymsInput>
    createMany?: GymEquipmentUserHistoryCreateManyGymEuquipmentsOnGymsInputEnvelope
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
  }

  export type GymUpdateOneRequiredWithoutGymEquipmentsInput = {
    create?: XOR<GymCreateWithoutGymEquipmentsInput, GymUncheckedCreateWithoutGymEquipmentsInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymEquipmentsInput
    upsert?: GymUpsertWithoutGymEquipmentsInput
    connect?: GymWhereUniqueInput
    update?: XOR<GymUpdateWithoutGymEquipmentsInput, GymUncheckedUpdateWithoutGymEquipmentsInput>
  }

  export type GymEquipmentUpdateOneRequiredWithoutGymsInput = {
    create?: XOR<GymEquipmentCreateWithoutGymsInput, GymEquipmentUncheckedCreateWithoutGymsInput>
    connectOrCreate?: GymEquipmentCreateOrConnectWithoutGymsInput
    upsert?: GymEquipmentUpsertWithoutGymsInput
    connect?: GymEquipmentWhereUniqueInput
    update?: XOR<GymEquipmentUpdateWithoutGymsInput, GymEquipmentUncheckedUpdateWithoutGymsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedGymEquipmentsInput = {
    create?: XOR<UserCreateWithoutAssignedGymEquipmentsInput, UserUncheckedCreateWithoutAssignedGymEquipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedGymEquipmentsInput
    upsert?: UserUpsertWithoutAssignedGymEquipmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAssignedGymEquipmentsInput, UserUncheckedUpdateWithoutAssignedGymEquipmentsInput>
  }

  export type GymEquipmentUserHistoryUpdateManyWithoutGymEuquipmentsOnGymsInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutGymEuquipmentsOnGymsInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutGymEuquipmentsOnGymsInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutGymEuquipmentsOnGymsInput>
    upsert?: Enumerable<GymEquipmentUserHistoryUpsertWithWhereUniqueWithoutGymEuquipmentsOnGymsInput>
    createMany?: GymEquipmentUserHistoryCreateManyGymEuquipmentsOnGymsInputEnvelope
    set?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    delete?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    update?: Enumerable<GymEquipmentUserHistoryUpdateWithWhereUniqueWithoutGymEuquipmentsOnGymsInput>
    updateMany?: Enumerable<GymEquipmentUserHistoryUpdateManyWithWhereWithoutGymEuquipmentsOnGymsInput>
    deleteMany?: Enumerable<GymEquipmentUserHistoryScalarWhereInput>
  }

  export type GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEuquipmentsOnGymsInput = {
    create?: XOR<Enumerable<GymEquipmentUserHistoryCreateWithoutGymEuquipmentsOnGymsInput>, Enumerable<GymEquipmentUserHistoryUncheckedCreateWithoutGymEuquipmentsOnGymsInput>>
    connectOrCreate?: Enumerable<GymEquipmentUserHistoryCreateOrConnectWithoutGymEuquipmentsOnGymsInput>
    upsert?: Enumerable<GymEquipmentUserHistoryUpsertWithWhereUniqueWithoutGymEuquipmentsOnGymsInput>
    createMany?: GymEquipmentUserHistoryCreateManyGymEuquipmentsOnGymsInputEnvelope
    set?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    disconnect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    delete?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    connect?: Enumerable<GymEquipmentUserHistoryWhereUniqueInput>
    update?: Enumerable<GymEquipmentUserHistoryUpdateWithWhereUniqueWithoutGymEuquipmentsOnGymsInput>
    updateMany?: Enumerable<GymEquipmentUserHistoryUpdateManyWithWhereWithoutGymEuquipmentsOnGymsInput>
    deleteMany?: Enumerable<GymEquipmentUserHistoryScalarWhereInput>
  }

  export type GymEuquipmentsOnGymsCreateNestedOneWithoutGymEquipmentUserHistoryInput = {
    create?: XOR<GymEuquipmentsOnGymsCreateWithoutGymEquipmentUserHistoryInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentUserHistoryInput>
    connectOrCreate?: GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentUserHistoryInput
    connect?: GymEuquipmentsOnGymsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGymEquipmentUserHistoryInput = {
    create?: XOR<UserCreateWithoutGymEquipmentUserHistoryInput, UserUncheckedCreateWithoutGymEquipmentUserHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymEquipmentUserHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type GymEuquipmentsOnGymsUpdateOneRequiredWithoutGymEquipmentUserHistoryInput = {
    create?: XOR<GymEuquipmentsOnGymsCreateWithoutGymEquipmentUserHistoryInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentUserHistoryInput>
    connectOrCreate?: GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentUserHistoryInput
    upsert?: GymEuquipmentsOnGymsUpsertWithoutGymEquipmentUserHistoryInput
    connect?: GymEuquipmentsOnGymsWhereUniqueInput
    update?: XOR<GymEuquipmentsOnGymsUpdateWithoutGymEquipmentUserHistoryInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutGymEquipmentUserHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutGymEquipmentUserHistoryInput = {
    create?: XOR<UserCreateWithoutGymEquipmentUserHistoryInput, UserUncheckedCreateWithoutGymEquipmentUserHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymEquipmentUserHistoryInput
    upsert?: UserUpsertWithoutGymEquipmentUserHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGymEquipmentUserHistoryInput, UserUncheckedUpdateWithoutGymEquipmentUserHistoryInput>
  }

  export type UserCreateNestedOneWithoutGymMembershipInput = {
    create?: XOR<UserCreateWithoutGymMembershipInput, UserUncheckedCreateWithoutGymMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymMembershipInput
    connect?: UserWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutGymMembershipInput = {
    create?: XOR<GymCreateWithoutGymMembershipInput, GymUncheckedCreateWithoutGymMembershipInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymMembershipInput
    connect?: GymWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedGymMembershipsInput = {
    create?: XOR<UserCreateWithoutAssignedGymMembershipsInput, UserUncheckedCreateWithoutAssignedGymMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedGymMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type GymMembershipCancellationCreateNestedOneWithoutGymMembershipInput = {
    create?: XOR<GymMembershipCancellationCreateWithoutGymMembershipInput, GymMembershipCancellationUncheckedCreateWithoutGymMembershipInput>
    connectOrCreate?: GymMembershipCancellationCreateOrConnectWithoutGymMembershipInput
    connect?: GymMembershipCancellationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGymMembershipInput = {
    create?: XOR<UserCreateWithoutGymMembershipInput, UserUncheckedCreateWithoutGymMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymMembershipInput
    upsert?: UserUpsertWithoutGymMembershipInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGymMembershipInput, UserUncheckedUpdateWithoutGymMembershipInput>
  }

  export type GymUpdateOneRequiredWithoutGymMembershipInput = {
    create?: XOR<GymCreateWithoutGymMembershipInput, GymUncheckedCreateWithoutGymMembershipInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymMembershipInput
    upsert?: GymUpsertWithoutGymMembershipInput
    connect?: GymWhereUniqueInput
    update?: XOR<GymUpdateWithoutGymMembershipInput, GymUncheckedUpdateWithoutGymMembershipInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedGymMembershipsInput = {
    create?: XOR<UserCreateWithoutAssignedGymMembershipsInput, UserUncheckedCreateWithoutAssignedGymMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedGymMembershipsInput
    upsert?: UserUpsertWithoutAssignedGymMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAssignedGymMembershipsInput, UserUncheckedUpdateWithoutAssignedGymMembershipsInput>
  }

  export type GymMembershipCancellationUpdateOneWithoutGymMembershipInput = {
    create?: XOR<GymMembershipCancellationCreateWithoutGymMembershipInput, GymMembershipCancellationUncheckedCreateWithoutGymMembershipInput>
    connectOrCreate?: GymMembershipCancellationCreateOrConnectWithoutGymMembershipInput
    upsert?: GymMembershipCancellationUpsertWithoutGymMembershipInput
    disconnect?: boolean
    delete?: boolean
    connect?: GymMembershipCancellationWhereUniqueInput
    update?: XOR<GymMembershipCancellationUpdateWithoutGymMembershipInput, GymMembershipCancellationUncheckedUpdateWithoutGymMembershipInput>
  }

  export type GymMembershipCreateNestedManyWithoutGymMembershipCancellationInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymMembershipCancellationInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymMembershipCancellationInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymMembershipCancellationInput>
    createMany?: GymMembershipCreateManyGymMembershipCancellationInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type GymMembershipUncheckedCreateNestedManyWithoutGymMembershipCancellationInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymMembershipCancellationInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymMembershipCancellationInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymMembershipCancellationInput>
    createMany?: GymMembershipCreateManyGymMembershipCancellationInputEnvelope
    connect?: Enumerable<GymMembershipWhereUniqueInput>
  }

  export type GymMembershipUpdateManyWithoutGymMembershipCancellationInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymMembershipCancellationInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymMembershipCancellationInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymMembershipCancellationInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutGymMembershipCancellationInput>
    createMany?: GymMembershipCreateManyGymMembershipCancellationInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutGymMembershipCancellationInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutGymMembershipCancellationInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type GymMembershipUncheckedUpdateManyWithoutGymMembershipCancellationInput = {
    create?: XOR<Enumerable<GymMembershipCreateWithoutGymMembershipCancellationInput>, Enumerable<GymMembershipUncheckedCreateWithoutGymMembershipCancellationInput>>
    connectOrCreate?: Enumerable<GymMembershipCreateOrConnectWithoutGymMembershipCancellationInput>
    upsert?: Enumerable<GymMembershipUpsertWithWhereUniqueWithoutGymMembershipCancellationInput>
    createMany?: GymMembershipCreateManyGymMembershipCancellationInputEnvelope
    set?: Enumerable<GymMembershipWhereUniqueInput>
    disconnect?: Enumerable<GymMembershipWhereUniqueInput>
    delete?: Enumerable<GymMembershipWhereUniqueInput>
    connect?: Enumerable<GymMembershipWhereUniqueInput>
    update?: Enumerable<GymMembershipUpdateWithWhereUniqueWithoutGymMembershipCancellationInput>
    updateMany?: Enumerable<GymMembershipUpdateManyWithWhereWithoutGymMembershipCancellationInput>
    deleteMany?: Enumerable<GymMembershipScalarWhereInput>
  }

  export type GymCreateNestedOneWithoutFavoriteUsersInput = {
    create?: XOR<GymCreateWithoutFavoriteUsersInput, GymUncheckedCreateWithoutFavoriteUsersInput>
    connectOrCreate?: GymCreateOrConnectWithoutFavoriteUsersInput
    connect?: GymWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavoriteGymsInput = {
    create?: XOR<UserCreateWithoutFavoriteGymsInput, UserUncheckedCreateWithoutFavoriteGymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteGymsInput
    connect?: UserWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutFavoriteUsersInput = {
    create?: XOR<GymCreateWithoutFavoriteUsersInput, GymUncheckedCreateWithoutFavoriteUsersInput>
    connectOrCreate?: GymCreateOrConnectWithoutFavoriteUsersInput
    upsert?: GymUpsertWithoutFavoriteUsersInput
    connect?: GymWhereUniqueInput
    update?: XOR<GymUpdateWithoutFavoriteUsersInput, GymUncheckedUpdateWithoutFavoriteUsersInput>
  }

  export type UserUpdateOneRequiredWithoutFavoriteGymsInput = {
    create?: XOR<UserCreateWithoutFavoriteGymsInput, UserUncheckedCreateWithoutFavoriteGymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteGymsInput
    upsert?: UserUpsertWithoutFavoriteGymsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFavoriteGymsInput, UserUncheckedUpdateWithoutFavoriteGymsInput>
  }

  export type GymCreateNestedOneWithoutGymAccessHistoryInput = {
    create?: XOR<GymCreateWithoutGymAccessHistoryInput, GymUncheckedCreateWithoutGymAccessHistoryInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymAccessHistoryInput
    connect?: GymWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGymAccessHistoryInput = {
    create?: XOR<UserCreateWithoutGymAccessHistoryInput, UserUncheckedCreateWithoutGymAccessHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymAccessHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutGymAccessHistoryInput = {
    create?: XOR<GymCreateWithoutGymAccessHistoryInput, GymUncheckedCreateWithoutGymAccessHistoryInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymAccessHistoryInput
    upsert?: GymUpsertWithoutGymAccessHistoryInput
    connect?: GymWhereUniqueInput
    update?: XOR<GymUpdateWithoutGymAccessHistoryInput, GymUncheckedUpdateWithoutGymAccessHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutGymAccessHistoryInput = {
    create?: XOR<UserCreateWithoutGymAccessHistoryInput, UserUncheckedCreateWithoutGymAccessHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymAccessHistoryInput
    upsert?: UserUpsertWithoutGymAccessHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGymAccessHistoryInput, UserUncheckedUpdateWithoutGymAccessHistoryInput>
  }

  export type GymCreateNestedOneWithoutGymPassHistoryInput = {
    create?: XOR<GymCreateWithoutGymPassHistoryInput, GymUncheckedCreateWithoutGymPassHistoryInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymPassHistoryInput
    connect?: GymWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGymPassHistoryInput = {
    create?: XOR<UserCreateWithoutGymPassHistoryInput, UserUncheckedCreateWithoutGymPassHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymPassHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutGymPassHistoryInput = {
    create?: XOR<GymCreateWithoutGymPassHistoryInput, GymUncheckedCreateWithoutGymPassHistoryInput>
    connectOrCreate?: GymCreateOrConnectWithoutGymPassHistoryInput
    upsert?: GymUpsertWithoutGymPassHistoryInput
    connect?: GymWhereUniqueInput
    update?: XOR<GymUpdateWithoutGymPassHistoryInput, GymUncheckedUpdateWithoutGymPassHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutGymPassHistoryInput = {
    create?: XOR<UserCreateWithoutGymPassHistoryInput, UserUncheckedCreateWithoutGymPassHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymPassHistoryInput
    upsert?: UserUpsertWithoutGymPassHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGymPassHistoryInput, UserUncheckedUpdateWithoutGymPassHistoryInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumLoginTypeFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeFilter | LoginType
  }

  export type NestedEnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumLoginTypeWithAggregatesFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeWithAggregatesFilter | LoginType
    _count?: NestedIntFilter
    _min?: NestedEnumLoginTypeFilter
    _max?: NestedEnumLoginTypeFilter
  }

  export type NestedEnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumBoardTypeFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeFilter | BoardType
  }

  export type NestedEnumBoardTypeWithAggregatesFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeWithAggregatesFilter | BoardType
    _count?: NestedIntFilter
    _min?: NestedEnumBoardTypeFilter
    _max?: NestedEnumBoardTypeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type BoardCreateWithoutUserInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyCreateNestedManyWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutUserInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardCreateManyUserInputEnvelope = {
    data: Enumerable<BoardCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoardReplyCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    boardId: number
    boardReplyId?: number | null
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutUserInput, BoardReplyUncheckedCreateWithoutUserInput>
  }

  export type BoardReplyCreateManyUserInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutUserInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type NoticeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type NoticeCreateOrConnectWithoutUserInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutUserInput, NoticeUncheckedCreateWithoutUserInput>
  }

  export type NoticeCreateManyUserInputEnvelope = {
    data: Enumerable<NoticeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GymCreateWithoutUserInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    GymImage?: GymImageCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    GymImage?: GymImageUncheckedCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutUserInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput>
  }

  export type GymCreateManyUserInputEnvelope = {
    data: Enumerable<GymCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GymEuquipmentsOnGymsCreateWithoutAssignUserInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymEquipmentsInput
    GymEquipment: GymEquipmentCreateNestedOneWithoutGymsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedCreateWithoutAssignUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    gymEquipmentId: number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsCreateOrConnectWithoutAssignUserInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    create: XOR<GymEuquipmentsOnGymsCreateWithoutAssignUserInput, GymEuquipmentsOnGymsUncheckedCreateWithoutAssignUserInput>
  }

  export type GymEuquipmentsOnGymsCreateManyAssignUserInputEnvelope = {
    data: Enumerable<GymEuquipmentsOnGymsCreateManyAssignUserInput>
    skipDuplicates?: boolean
  }

  export type GymMembershipCreateWithoutUserInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymMembershipInput
    assignUser: UserCreateNestedOneWithoutAssignedGymMembershipsInput
    startDay?: Date | string
    endDay: Date | string
    GymMembershipCancellation?: GymMembershipCancellationCreateNestedOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type GymMembershipCreateOrConnectWithoutUserInput = {
    where: GymMembershipWhereUniqueInput
    create: XOR<GymMembershipCreateWithoutUserInput, GymMembershipUncheckedCreateWithoutUserInput>
  }

  export type GymMembershipCreateManyUserInputEnvelope = {
    data: Enumerable<GymMembershipCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GymMembershipCreateWithoutAssignUserInput = {
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutGymMembershipInput
    Gym: GymCreateNestedOneWithoutGymMembershipInput
    startDay?: Date | string
    endDay: Date | string
    GymMembershipCancellation?: GymMembershipCancellationCreateNestedOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedCreateWithoutAssignUserInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    gymId: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type GymMembershipCreateOrConnectWithoutAssignUserInput = {
    where: GymMembershipWhereUniqueInput
    create: XOR<GymMembershipCreateWithoutAssignUserInput, GymMembershipUncheckedCreateWithoutAssignUserInput>
  }

  export type GymMembershipCreateManyAssignUserInputEnvelope = {
    data: Enumerable<GymMembershipCreateManyAssignUserInput>
    skipDuplicates?: boolean
  }

  export type FavoriteGymCreateWithoutUserInput = {
    Gym: GymCreateNestedOneWithoutFavoriteUsersInput
    assignedAt?: Date | string
  }

  export type FavoriteGymUncheckedCreateWithoutUserInput = {
    gymId: number
    assignedAt?: Date | string
  }

  export type FavoriteGymCreateOrConnectWithoutUserInput = {
    where: FavoriteGymWhereUniqueInput
    create: XOR<FavoriteGymCreateWithoutUserInput, FavoriteGymUncheckedCreateWithoutUserInput>
  }

  export type FavoriteGymCreateManyUserInputEnvelope = {
    data: Enumerable<FavoriteGymCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GymEquipmentUserHistoryCreateWithoutUserInput = {
    GymEuquipmentsOnGyms: GymEuquipmentsOnGymsCreateNestedOneWithoutGymEquipmentUserHistoryInput
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    gymEuquipmentsOnGymsId: number
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryCreateOrConnectWithoutUserInput = {
    where: GymEquipmentUserHistoryWhereUniqueInput
    create: XOR<GymEquipmentUserHistoryCreateWithoutUserInput, GymEquipmentUserHistoryUncheckedCreateWithoutUserInput>
  }

  export type GymEquipmentUserHistoryCreateManyUserInputEnvelope = {
    data: Enumerable<GymEquipmentUserHistoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GymAccessHistoryCreateWithoutUserInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymAccessHistoryInput
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymAccessHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymAccessHistoryCreateOrConnectWithoutUserInput = {
    where: GymAccessHistoryWhereUniqueInput
    create: XOR<GymAccessHistoryCreateWithoutUserInput, GymAccessHistoryUncheckedCreateWithoutUserInput>
  }

  export type GymAccessHistoryCreateManyUserInputEnvelope = {
    data: Enumerable<GymAccessHistoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GymPassHistoryCreateWithoutUserInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymPassHistoryInput
    hash: string
  }

  export type GymPassHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    hash: string
  }

  export type GymPassHistoryCreateOrConnectWithoutUserInput = {
    where: GymPassHistoryWhereUniqueInput
    create: XOR<GymPassHistoryCreateWithoutUserInput, GymPassHistoryUncheckedCreateWithoutUserInput>
  }

  export type GymPassHistoryCreateManyUserInputEnvelope = {
    data: Enumerable<GymPassHistoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
  }

  export type BoardUpdateManyWithWhereWithoutUserInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutBoardInput>
  }

  export type BoardScalarWhereInput = {
    AND?: Enumerable<BoardScalarWhereInput>
    OR?: Enumerable<BoardScalarWhereInput>
    NOT?: Enumerable<BoardScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutUserInput, BoardReplyUncheckedUpdateWithoutUserInput>
    create: XOR<BoardReplyCreateWithoutUserInput, BoardReplyUncheckedCreateWithoutUserInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutUserInput, BoardReplyUncheckedUpdateWithoutUserInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutUserInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardReplyInput>
  }

  export type BoardReplyScalarWhereInput = {
    AND?: Enumerable<BoardReplyScalarWhereInput>
    OR?: Enumerable<BoardReplyScalarWhereInput>
    NOT?: Enumerable<BoardReplyScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    content?: StringFilter | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    boardId?: IntFilter | number
    boardReplyId?: IntNullableFilter | number | null
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type NoticeUpsertWithWhereUniqueWithoutUserInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutUserInput, NoticeUncheckedUpdateWithoutUserInput>
    create: XOR<NoticeCreateWithoutUserInput, NoticeUncheckedCreateWithoutUserInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutUserInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutUserInput, NoticeUncheckedUpdateWithoutUserInput>
  }

  export type NoticeUpdateManyWithWhereWithoutUserInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutNoticeInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: Enumerable<NoticeScalarWhereInput>
    OR?: Enumerable<NoticeScalarWhereInput>
    NOT?: Enumerable<NoticeScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    userId?: IntFilter | number
  }

  export type GymUpsertWithWhereUniqueWithoutUserInput = {
    where: GymWhereUniqueInput
    update: XOR<GymUpdateWithoutUserInput, GymUncheckedUpdateWithoutUserInput>
    create: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput>
  }

  export type GymUpdateWithWhereUniqueWithoutUserInput = {
    where: GymWhereUniqueInput
    data: XOR<GymUpdateWithoutUserInput, GymUncheckedUpdateWithoutUserInput>
  }

  export type GymUpdateManyWithWhereWithoutUserInput = {
    where: GymScalarWhereInput
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyWithoutGymInput>
  }

  export type GymScalarWhereInput = {
    AND?: Enumerable<GymScalarWhereInput>
    OR?: Enumerable<GymScalarWhereInput>
    NOT?: Enumerable<GymScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    ceoName?: StringFilter | string
    companyName?: StringFilter | string
    businessNumber?: StringFilter | string
    postcode?: StringFilter | string
    mainAddress?: StringFilter | string
    subAddress?: StringFilter | string
    phone?: StringFilter | string
    cellPhone?: StringFilter | string
    fax?: StringFilter | string
    email?: StringFilter | string
    isCertified?: BoolFilter | boolean
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
  }

  export type GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutAssignUserInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    update: XOR<GymEuquipmentsOnGymsUpdateWithoutAssignUserInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutAssignUserInput>
    create: XOR<GymEuquipmentsOnGymsCreateWithoutAssignUserInput, GymEuquipmentsOnGymsUncheckedCreateWithoutAssignUserInput>
  }

  export type GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutAssignUserInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    data: XOR<GymEuquipmentsOnGymsUpdateWithoutAssignUserInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutAssignUserInput>
  }

  export type GymEuquipmentsOnGymsUpdateManyWithWhereWithoutAssignUserInput = {
    where: GymEuquipmentsOnGymsScalarWhereInput
    data: XOR<GymEuquipmentsOnGymsUpdateManyMutationInput, GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignedGymEquipmentsInput>
  }

  export type GymEuquipmentsOnGymsScalarWhereInput = {
    AND?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
    OR?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
    NOT?: Enumerable<GymEuquipmentsOnGymsScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    gymId?: IntFilter | number
    gymEquipmentId?: IntFilter | number
    assignBy?: IntFilter | number
  }

  export type GymMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: GymMembershipWhereUniqueInput
    update: XOR<GymMembershipUpdateWithoutUserInput, GymMembershipUncheckedUpdateWithoutUserInput>
    create: XOR<GymMembershipCreateWithoutUserInput, GymMembershipUncheckedCreateWithoutUserInput>
  }

  export type GymMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: GymMembershipWhereUniqueInput
    data: XOR<GymMembershipUpdateWithoutUserInput, GymMembershipUncheckedUpdateWithoutUserInput>
  }

  export type GymMembershipUpdateManyWithWhereWithoutUserInput = {
    where: GymMembershipScalarWhereInput
    data: XOR<GymMembershipUpdateManyMutationInput, GymMembershipUncheckedUpdateManyWithoutGymMembershipInput>
  }

  export type GymMembershipScalarWhereInput = {
    AND?: Enumerable<GymMembershipScalarWhereInput>
    OR?: Enumerable<GymMembershipScalarWhereInput>
    NOT?: Enumerable<GymMembershipScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
    gymId?: IntFilter | number
    assignBy?: IntFilter | number
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    gymMembershipCancellationId?: IntNullableFilter | number | null
  }

  export type GymMembershipUpsertWithWhereUniqueWithoutAssignUserInput = {
    where: GymMembershipWhereUniqueInput
    update: XOR<GymMembershipUpdateWithoutAssignUserInput, GymMembershipUncheckedUpdateWithoutAssignUserInput>
    create: XOR<GymMembershipCreateWithoutAssignUserInput, GymMembershipUncheckedCreateWithoutAssignUserInput>
  }

  export type GymMembershipUpdateWithWhereUniqueWithoutAssignUserInput = {
    where: GymMembershipWhereUniqueInput
    data: XOR<GymMembershipUpdateWithoutAssignUserInput, GymMembershipUncheckedUpdateWithoutAssignUserInput>
  }

  export type GymMembershipUpdateManyWithWhereWithoutAssignUserInput = {
    where: GymMembershipScalarWhereInput
    data: XOR<GymMembershipUpdateManyMutationInput, GymMembershipUncheckedUpdateManyWithoutAssignedGymMembershipsInput>
  }

  export type FavoriteGymUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteGymWhereUniqueInput
    update: XOR<FavoriteGymUpdateWithoutUserInput, FavoriteGymUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteGymCreateWithoutUserInput, FavoriteGymUncheckedCreateWithoutUserInput>
  }

  export type FavoriteGymUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteGymWhereUniqueInput
    data: XOR<FavoriteGymUpdateWithoutUserInput, FavoriteGymUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteGymUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteGymScalarWhereInput
    data: XOR<FavoriteGymUpdateManyMutationInput, FavoriteGymUncheckedUpdateManyWithoutFavoriteGymsInput>
  }

  export type FavoriteGymScalarWhereInput = {
    AND?: Enumerable<FavoriteGymScalarWhereInput>
    OR?: Enumerable<FavoriteGymScalarWhereInput>
    NOT?: Enumerable<FavoriteGymScalarWhereInput>
    gymId?: IntFilter | number
    userId?: IntFilter | number
    assignedAt?: DateTimeFilter | Date | string
  }

  export type GymEquipmentUserHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: GymEquipmentUserHistoryWhereUniqueInput
    update: XOR<GymEquipmentUserHistoryUpdateWithoutUserInput, GymEquipmentUserHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<GymEquipmentUserHistoryCreateWithoutUserInput, GymEquipmentUserHistoryUncheckedCreateWithoutUserInput>
  }

  export type GymEquipmentUserHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: GymEquipmentUserHistoryWhereUniqueInput
    data: XOR<GymEquipmentUserHistoryUpdateWithoutUserInput, GymEquipmentUserHistoryUncheckedUpdateWithoutUserInput>
  }

  export type GymEquipmentUserHistoryUpdateManyWithWhereWithoutUserInput = {
    where: GymEquipmentUserHistoryScalarWhereInput
    data: XOR<GymEquipmentUserHistoryUpdateManyMutationInput, GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEquipmentUserHistoryInput>
  }

  export type GymEquipmentUserHistoryScalarWhereInput = {
    AND?: Enumerable<GymEquipmentUserHistoryScalarWhereInput>
    OR?: Enumerable<GymEquipmentUserHistoryScalarWhereInput>
    NOT?: Enumerable<GymEquipmentUserHistoryScalarWhereInput>
    id?: IntFilter | number
    gymEuquipmentsOnGymsId?: IntFilter | number
    userId?: IntFilter | number
    usedAt?: DateTimeFilter | Date | string
    endAt?: DateTimeNullableFilter | Date | string | null
  }

  export type GymAccessHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: GymAccessHistoryWhereUniqueInput
    update: XOR<GymAccessHistoryUpdateWithoutUserInput, GymAccessHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<GymAccessHistoryCreateWithoutUserInput, GymAccessHistoryUncheckedCreateWithoutUserInput>
  }

  export type GymAccessHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: GymAccessHistoryWhereUniqueInput
    data: XOR<GymAccessHistoryUpdateWithoutUserInput, GymAccessHistoryUncheckedUpdateWithoutUserInput>
  }

  export type GymAccessHistoryUpdateManyWithWhereWithoutUserInput = {
    where: GymAccessHistoryScalarWhereInput
    data: XOR<GymAccessHistoryUpdateManyMutationInput, GymAccessHistoryUncheckedUpdateManyWithoutGymAccessHistoryInput>
  }

  export type GymAccessHistoryScalarWhereInput = {
    AND?: Enumerable<GymAccessHistoryScalarWhereInput>
    OR?: Enumerable<GymAccessHistoryScalarWhereInput>
    NOT?: Enumerable<GymAccessHistoryScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    gymId?: IntFilter | number
    userId?: IntFilter | number
    entryAt?: DateTimeFilter | Date | string
    exitAt?: DateTimeNullableFilter | Date | string | null
  }

  export type GymPassHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: GymPassHistoryWhereUniqueInput
    update: XOR<GymPassHistoryUpdateWithoutUserInput, GymPassHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<GymPassHistoryCreateWithoutUserInput, GymPassHistoryUncheckedCreateWithoutUserInput>
  }

  export type GymPassHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: GymPassHistoryWhereUniqueInput
    data: XOR<GymPassHistoryUpdateWithoutUserInput, GymPassHistoryUncheckedUpdateWithoutUserInput>
  }

  export type GymPassHistoryUpdateManyWithWhereWithoutUserInput = {
    where: GymPassHistoryScalarWhereInput
    data: XOR<GymPassHistoryUpdateManyMutationInput, GymPassHistoryUncheckedUpdateManyWithoutGymPassHistoryInput>
  }

  export type GymPassHistoryScalarWhereInput = {
    AND?: Enumerable<GymPassHistoryScalarWhereInput>
    OR?: Enumerable<GymPassHistoryScalarWhereInput>
    NOT?: Enumerable<GymPassHistoryScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    gymId?: IntFilter | number
    userId?: IntFilter | number
    hash?: StringFilter | string
  }

  export type UserCreateWithoutNoticeInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNoticeInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNoticeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
  }

  export type UserUpsertWithoutNoticeInput = {
    update: XOR<UserUpdateWithoutNoticeInput, UserUncheckedUpdateWithoutNoticeInput>
    create: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
  }

  export type UserUpdateWithoutNoticeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutNoticeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type BoardImageCreateWithoutBoardInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardImageUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardImageCreateOrConnectWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    create: XOR<BoardImageCreateWithoutBoardInput, BoardImageUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageCreateManyBoardInputEnvelope = {
    data: Enumerable<BoardImageCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type BoardReplyCreateWithoutBoardInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardReplyId?: number | null
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardInput, BoardReplyUncheckedCreateWithoutBoardInput>
  }

  export type BoardReplyCreateManyBoardInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBoardInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    update: XOR<BoardImageUpdateWithoutBoardInput, BoardImageUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardImageCreateWithoutBoardInput, BoardImageUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    data: XOR<BoardImageUpdateWithoutBoardInput, BoardImageUncheckedUpdateWithoutBoardInput>
  }

  export type BoardImageUpdateManyWithWhereWithoutBoardInput = {
    where: BoardImageScalarWhereInput
    data: XOR<BoardImageUpdateManyMutationInput, BoardImageUncheckedUpdateManyWithoutBoardImageInput>
  }

  export type BoardImageScalarWhereInput = {
    AND?: Enumerable<BoardImageScalarWhereInput>
    OR?: Enumerable<BoardImageScalarWhereInput>
    NOT?: Enumerable<BoardImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    boardId?: IntFilter | number
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutBoardInput, BoardReplyUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardReplyCreateWithoutBoardInput, BoardReplyUncheckedCreateWithoutBoardInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutBoardInput, BoardReplyUncheckedUpdateWithoutBoardInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutBoardInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardReplyInput>
  }

  export type UserUpsertWithoutBoardInput = {
    update: XOR<UserUpdateWithoutBoardInput, UserUncheckedUpdateWithoutBoardInput>
    create: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
  }

  export type UserUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type BoardCreateWithoutBoardImageInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardReply?: BoardReplyCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutBoardImageInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutBoardImageInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
  }

  export type BoardUpsertWithoutBoardImageInput = {
    update: XOR<BoardUpdateWithoutBoardImageInput, BoardUncheckedUpdateWithoutBoardImageInput>
    create: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
  }

  export type BoardUpdateWithoutBoardImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUpdateManyWithoutBoardInput
    User?: UserUpdateOneRequiredWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutBoardImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutBoardInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type UserCreateWithoutBoardReplyInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardReplyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardCreateWithoutBoardReplyInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutBoardReplyInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyCreateWithoutBoardNestedReplyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardNestedReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardNestedReplyInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
  }

  export type BoardReplyCreateWithoutBoardReplyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardReplyInput, BoardReplyUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyCreateManyBoardReplyInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyBoardReplyInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBoardReplyInput = {
    update: XOR<UserUpdateWithoutBoardReplyInput, UserUncheckedUpdateWithoutBoardReplyInput>
    create: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
  }

  export type UserUpdateWithoutBoardReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutBoardReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type BoardUpsertWithoutBoardReplyInput = {
    update: XOR<BoardUpdateWithoutBoardReplyInput, BoardUncheckedUpdateWithoutBoardReplyInput>
    create: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardUpdateWithoutBoardReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUpdateManyWithoutBoardInput
    User?: UserUpdateOneRequiredWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutBoardReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUncheckedUpdateManyWithoutBoardInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpsertWithoutBoardNestedReplyInput = {
    update: XOR<BoardReplyUpdateWithoutBoardNestedReplyInput, BoardReplyUncheckedUpdateWithoutBoardNestedReplyInput>
    create: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
  }

  export type BoardReplyUpdateWithoutBoardNestedReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardNestedReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutBoardReplyInput, BoardReplyUncheckedUpdateWithoutBoardReplyInput>
    create: XOR<BoardReplyCreateWithoutBoardReplyInput, BoardReplyUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutBoardReplyInput, BoardReplyUncheckedUpdateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutBoardReplyInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardNestedReplyInput>
  }

  export type BodyPartsOnGymEquipmentsCreateWithoutBodyPartInput = {
    GymEquipment: GymEquipmentCreateNestedOneWithoutBodyPartsInput
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedCreateWithoutBodyPartInput = {
    gymEquipmentId: number
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsCreateOrConnectWithoutBodyPartInput = {
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
    create: XOR<BodyPartsOnGymEquipmentsCreateWithoutBodyPartInput, BodyPartsOnGymEquipmentsUncheckedCreateWithoutBodyPartInput>
  }

  export type BodyPartsOnGymEquipmentsCreateManyBodyPartInputEnvelope = {
    data: Enumerable<BodyPartsOnGymEquipmentsCreateManyBodyPartInput>
    skipDuplicates?: boolean
  }

  export type BodyPartsOnGymEquipmentsUpsertWithWhereUniqueWithoutBodyPartInput = {
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
    update: XOR<BodyPartsOnGymEquipmentsUpdateWithoutBodyPartInput, BodyPartsOnGymEquipmentsUncheckedUpdateWithoutBodyPartInput>
    create: XOR<BodyPartsOnGymEquipmentsCreateWithoutBodyPartInput, BodyPartsOnGymEquipmentsUncheckedCreateWithoutBodyPartInput>
  }

  export type BodyPartsOnGymEquipmentsUpdateWithWhereUniqueWithoutBodyPartInput = {
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
    data: XOR<BodyPartsOnGymEquipmentsUpdateWithoutBodyPartInput, BodyPartsOnGymEquipmentsUncheckedUpdateWithoutBodyPartInput>
  }

  export type BodyPartsOnGymEquipmentsUpdateManyWithWhereWithoutBodyPartInput = {
    where: BodyPartsOnGymEquipmentsScalarWhereInput
    data: XOR<BodyPartsOnGymEquipmentsUpdateManyMutationInput, BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutGymEquipmentsInput>
  }

  export type BodyPartsOnGymEquipmentsScalarWhereInput = {
    AND?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereInput>
    OR?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereInput>
    NOT?: Enumerable<BodyPartsOnGymEquipmentsScalarWhereInput>
    gymEquipmentId?: IntFilter | number
    bodyPartId?: IntFilter | number
    assignedAt?: DateTimeFilter | Date | string
  }

  export type BodyPartsOnGymEquipmentsCreateWithoutGymEquipmentInput = {
    BodyPart: BodyPartCreateNestedOneWithoutGymEquipmentsInput
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedCreateWithoutGymEquipmentInput = {
    bodyPartId: number
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsCreateOrConnectWithoutGymEquipmentInput = {
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
    create: XOR<BodyPartsOnGymEquipmentsCreateWithoutGymEquipmentInput, BodyPartsOnGymEquipmentsUncheckedCreateWithoutGymEquipmentInput>
  }

  export type BodyPartsOnGymEquipmentsCreateManyGymEquipmentInputEnvelope = {
    data: Enumerable<BodyPartsOnGymEquipmentsCreateManyGymEquipmentInput>
    skipDuplicates?: boolean
  }

  export type GymEuquipmentsOnGymsCreateWithoutGymEquipmentInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymEquipmentsInput
    assignUser: UserCreateNestedOneWithoutAssignedGymEquipmentsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    assignBy: number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    create: XOR<GymEuquipmentsOnGymsCreateWithoutGymEquipmentInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentInput>
  }

  export type GymEuquipmentsOnGymsCreateManyGymEquipmentInputEnvelope = {
    data: Enumerable<GymEuquipmentsOnGymsCreateManyGymEquipmentInput>
    skipDuplicates?: boolean
  }

  export type GymEquipmentImageCreateWithoutGymEquipmentInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type GymEquipmentImageUncheckedCreateWithoutGymEquipmentInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type GymEquipmentImageCreateOrConnectWithoutGymEquipmentInput = {
    where: GymEquipmentImageWhereUniqueInput
    create: XOR<GymEquipmentImageCreateWithoutGymEquipmentInput, GymEquipmentImageUncheckedCreateWithoutGymEquipmentInput>
  }

  export type GymEquipmentImageCreateManyGymEquipmentInputEnvelope = {
    data: Enumerable<GymEquipmentImageCreateManyGymEquipmentInput>
    skipDuplicates?: boolean
  }

  export type BodyPartsOnGymEquipmentsUpsertWithWhereUniqueWithoutGymEquipmentInput = {
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
    update: XOR<BodyPartsOnGymEquipmentsUpdateWithoutGymEquipmentInput, BodyPartsOnGymEquipmentsUncheckedUpdateWithoutGymEquipmentInput>
    create: XOR<BodyPartsOnGymEquipmentsCreateWithoutGymEquipmentInput, BodyPartsOnGymEquipmentsUncheckedCreateWithoutGymEquipmentInput>
  }

  export type BodyPartsOnGymEquipmentsUpdateWithWhereUniqueWithoutGymEquipmentInput = {
    where: BodyPartsOnGymEquipmentsWhereUniqueInput
    data: XOR<BodyPartsOnGymEquipmentsUpdateWithoutGymEquipmentInput, BodyPartsOnGymEquipmentsUncheckedUpdateWithoutGymEquipmentInput>
  }

  export type BodyPartsOnGymEquipmentsUpdateManyWithWhereWithoutGymEquipmentInput = {
    where: BodyPartsOnGymEquipmentsScalarWhereInput
    data: XOR<BodyPartsOnGymEquipmentsUpdateManyMutationInput, BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutBodyPartsInput>
  }

  export type GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutGymEquipmentInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    update: XOR<GymEuquipmentsOnGymsUpdateWithoutGymEquipmentInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutGymEquipmentInput>
    create: XOR<GymEuquipmentsOnGymsCreateWithoutGymEquipmentInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentInput>
  }

  export type GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutGymEquipmentInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    data: XOR<GymEuquipmentsOnGymsUpdateWithoutGymEquipmentInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutGymEquipmentInput>
  }

  export type GymEuquipmentsOnGymsUpdateManyWithWhereWithoutGymEquipmentInput = {
    where: GymEuquipmentsOnGymsScalarWhereInput
    data: XOR<GymEuquipmentsOnGymsUpdateManyMutationInput, GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymsInput>
  }

  export type GymEquipmentImageUpsertWithWhereUniqueWithoutGymEquipmentInput = {
    where: GymEquipmentImageWhereUniqueInput
    update: XOR<GymEquipmentImageUpdateWithoutGymEquipmentInput, GymEquipmentImageUncheckedUpdateWithoutGymEquipmentInput>
    create: XOR<GymEquipmentImageCreateWithoutGymEquipmentInput, GymEquipmentImageUncheckedCreateWithoutGymEquipmentInput>
  }

  export type GymEquipmentImageUpdateWithWhereUniqueWithoutGymEquipmentInput = {
    where: GymEquipmentImageWhereUniqueInput
    data: XOR<GymEquipmentImageUpdateWithoutGymEquipmentInput, GymEquipmentImageUncheckedUpdateWithoutGymEquipmentInput>
  }

  export type GymEquipmentImageUpdateManyWithWhereWithoutGymEquipmentInput = {
    where: GymEquipmentImageScalarWhereInput
    data: XOR<GymEquipmentImageUpdateManyMutationInput, GymEquipmentImageUncheckedUpdateManyWithoutGymEquipmentImageInput>
  }

  export type GymEquipmentImageScalarWhereInput = {
    AND?: Enumerable<GymEquipmentImageScalarWhereInput>
    OR?: Enumerable<GymEquipmentImageScalarWhereInput>
    NOT?: Enumerable<GymEquipmentImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    gymEquipmentId?: IntFilter | number
  }

  export type GymEquipmentCreateWithoutGymEquipmentImageInput = {
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    BodyParts?: BodyPartsOnGymEquipmentsCreateNestedManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedCreateWithoutGymEquipmentImageInput = {
    id?: number
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    BodyParts?: BodyPartsOnGymEquipmentsUncheckedCreateNestedManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentCreateOrConnectWithoutGymEquipmentImageInput = {
    where: GymEquipmentWhereUniqueInput
    create: XOR<GymEquipmentCreateWithoutGymEquipmentImageInput, GymEquipmentUncheckedCreateWithoutGymEquipmentImageInput>
  }

  export type GymEquipmentUpsertWithoutGymEquipmentImageInput = {
    update: XOR<GymEquipmentUpdateWithoutGymEquipmentImageInput, GymEquipmentUncheckedUpdateWithoutGymEquipmentImageInput>
    create: XOR<GymEquipmentCreateWithoutGymEquipmentImageInput, GymEquipmentUncheckedCreateWithoutGymEquipmentImageInput>
  }

  export type GymEquipmentUpdateWithoutGymEquipmentImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BodyParts?: BodyPartsOnGymEquipmentsUpdateManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsUpdateManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedUpdateWithoutGymEquipmentImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BodyParts?: BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutGymEquipmentInput
    Gyms?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymEquipmentInput
  }

  export type GymEquipmentCreateWithoutBodyPartsInput = {
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    Gyms?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedCreateWithoutBodyPartsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    Gyms?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUncheckedCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentCreateOrConnectWithoutBodyPartsInput = {
    where: GymEquipmentWhereUniqueInput
    create: XOR<GymEquipmentCreateWithoutBodyPartsInput, GymEquipmentUncheckedCreateWithoutBodyPartsInput>
  }

  export type BodyPartCreateWithoutGymEquipmentsInput = {
    createdAt?: Date | string
    name: string
    code: string
    category: string
  }

  export type BodyPartUncheckedCreateWithoutGymEquipmentsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    code: string
    category: string
  }

  export type BodyPartCreateOrConnectWithoutGymEquipmentsInput = {
    where: BodyPartWhereUniqueInput
    create: XOR<BodyPartCreateWithoutGymEquipmentsInput, BodyPartUncheckedCreateWithoutGymEquipmentsInput>
  }

  export type GymEquipmentUpsertWithoutBodyPartsInput = {
    update: XOR<GymEquipmentUpdateWithoutBodyPartsInput, GymEquipmentUncheckedUpdateWithoutBodyPartsInput>
    create: XOR<GymEquipmentCreateWithoutBodyPartsInput, GymEquipmentUncheckedCreateWithoutBodyPartsInput>
  }

  export type GymEquipmentUpdateWithoutBodyPartsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Gyms?: GymEuquipmentsOnGymsUpdateManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUpdateManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedUpdateWithoutBodyPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Gyms?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUncheckedUpdateManyWithoutGymEquipmentInput
  }

  export type BodyPartUpsertWithoutGymEquipmentsInput = {
    update: XOR<BodyPartUpdateWithoutGymEquipmentsInput, BodyPartUncheckedUpdateWithoutGymEquipmentsInput>
    create: XOR<BodyPartCreateWithoutGymEquipmentsInput, BodyPartUncheckedCreateWithoutGymEquipmentsInput>
  }

  export type BodyPartUpdateWithoutGymEquipmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type BodyPartUncheckedUpdateWithoutGymEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutGymInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
  }

  export type GymImageCreateWithoutGymInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type GymImageUncheckedCreateWithoutGymInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type GymImageCreateOrConnectWithoutGymInput = {
    where: GymImageWhereUniqueInput
    create: XOR<GymImageCreateWithoutGymInput, GymImageUncheckedCreateWithoutGymInput>
  }

  export type GymImageCreateManyGymInputEnvelope = {
    data: Enumerable<GymImageCreateManyGymInput>
    skipDuplicates?: boolean
  }

  export type GymEuquipmentsOnGymsCreateWithoutGymInput = {
    createdAt?: Date | string
    GymEquipment: GymEquipmentCreateNestedOneWithoutGymsInput
    assignUser: UserCreateNestedOneWithoutAssignedGymEquipmentsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedCreateWithoutGymInput = {
    id?: number
    createdAt?: Date | string
    gymEquipmentId: number
    assignBy: number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsCreateOrConnectWithoutGymInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    create: XOR<GymEuquipmentsOnGymsCreateWithoutGymInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymInput>
  }

  export type GymEuquipmentsOnGymsCreateManyGymInputEnvelope = {
    data: Enumerable<GymEuquipmentsOnGymsCreateManyGymInput>
    skipDuplicates?: boolean
  }

  export type FavoriteGymCreateWithoutGymInput = {
    User: UserCreateNestedOneWithoutFavoriteGymsInput
    assignedAt?: Date | string
  }

  export type FavoriteGymUncheckedCreateWithoutGymInput = {
    userId: number
    assignedAt?: Date | string
  }

  export type FavoriteGymCreateOrConnectWithoutGymInput = {
    where: FavoriteGymWhereUniqueInput
    create: XOR<FavoriteGymCreateWithoutGymInput, FavoriteGymUncheckedCreateWithoutGymInput>
  }

  export type FavoriteGymCreateManyGymInputEnvelope = {
    data: Enumerable<FavoriteGymCreateManyGymInput>
    skipDuplicates?: boolean
  }

  export type GymAccessHistoryCreateWithoutGymInput = {
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutGymAccessHistoryInput
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymAccessHistoryUncheckedCreateWithoutGymInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymAccessHistoryCreateOrConnectWithoutGymInput = {
    where: GymAccessHistoryWhereUniqueInput
    create: XOR<GymAccessHistoryCreateWithoutGymInput, GymAccessHistoryUncheckedCreateWithoutGymInput>
  }

  export type GymAccessHistoryCreateManyGymInputEnvelope = {
    data: Enumerable<GymAccessHistoryCreateManyGymInput>
    skipDuplicates?: boolean
  }

  export type GymMembershipCreateWithoutGymInput = {
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutGymMembershipInput
    assignUser: UserCreateNestedOneWithoutAssignedGymMembershipsInput
    startDay?: Date | string
    endDay: Date | string
    GymMembershipCancellation?: GymMembershipCancellationCreateNestedOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedCreateWithoutGymInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type GymMembershipCreateOrConnectWithoutGymInput = {
    where: GymMembershipWhereUniqueInput
    create: XOR<GymMembershipCreateWithoutGymInput, GymMembershipUncheckedCreateWithoutGymInput>
  }

  export type GymMembershipCreateManyGymInputEnvelope = {
    data: Enumerable<GymMembershipCreateManyGymInput>
    skipDuplicates?: boolean
  }

  export type GymPassHistoryCreateWithoutGymInput = {
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutGymPassHistoryInput
    hash: string
  }

  export type GymPassHistoryUncheckedCreateWithoutGymInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    hash: string
  }

  export type GymPassHistoryCreateOrConnectWithoutGymInput = {
    where: GymPassHistoryWhereUniqueInput
    create: XOR<GymPassHistoryCreateWithoutGymInput, GymPassHistoryUncheckedCreateWithoutGymInput>
  }

  export type GymPassHistoryCreateManyGymInputEnvelope = {
    data: Enumerable<GymPassHistoryCreateManyGymInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGymInput = {
    update: XOR<UserUpdateWithoutGymInput, UserUncheckedUpdateWithoutGymInput>
    create: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
  }

  export type UserUpdateWithoutGymInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type GymImageUpsertWithWhereUniqueWithoutGymInput = {
    where: GymImageWhereUniqueInput
    update: XOR<GymImageUpdateWithoutGymInput, GymImageUncheckedUpdateWithoutGymInput>
    create: XOR<GymImageCreateWithoutGymInput, GymImageUncheckedCreateWithoutGymInput>
  }

  export type GymImageUpdateWithWhereUniqueWithoutGymInput = {
    where: GymImageWhereUniqueInput
    data: XOR<GymImageUpdateWithoutGymInput, GymImageUncheckedUpdateWithoutGymInput>
  }

  export type GymImageUpdateManyWithWhereWithoutGymInput = {
    where: GymImageScalarWhereInput
    data: XOR<GymImageUpdateManyMutationInput, GymImageUncheckedUpdateManyWithoutGymImageInput>
  }

  export type GymImageScalarWhereInput = {
    AND?: Enumerable<GymImageScalarWhereInput>
    OR?: Enumerable<GymImageScalarWhereInput>
    NOT?: Enumerable<GymImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    gymId?: IntFilter | number
  }

  export type GymEuquipmentsOnGymsUpsertWithWhereUniqueWithoutGymInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    update: XOR<GymEuquipmentsOnGymsUpdateWithoutGymInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutGymInput>
    create: XOR<GymEuquipmentsOnGymsCreateWithoutGymInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymInput>
  }

  export type GymEuquipmentsOnGymsUpdateWithWhereUniqueWithoutGymInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    data: XOR<GymEuquipmentsOnGymsUpdateWithoutGymInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutGymInput>
  }

  export type GymEuquipmentsOnGymsUpdateManyWithWhereWithoutGymInput = {
    where: GymEuquipmentsOnGymsScalarWhereInput
    data: XOR<GymEuquipmentsOnGymsUpdateManyMutationInput, GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymEquipmentsInput>
  }

  export type FavoriteGymUpsertWithWhereUniqueWithoutGymInput = {
    where: FavoriteGymWhereUniqueInput
    update: XOR<FavoriteGymUpdateWithoutGymInput, FavoriteGymUncheckedUpdateWithoutGymInput>
    create: XOR<FavoriteGymCreateWithoutGymInput, FavoriteGymUncheckedCreateWithoutGymInput>
  }

  export type FavoriteGymUpdateWithWhereUniqueWithoutGymInput = {
    where: FavoriteGymWhereUniqueInput
    data: XOR<FavoriteGymUpdateWithoutGymInput, FavoriteGymUncheckedUpdateWithoutGymInput>
  }

  export type FavoriteGymUpdateManyWithWhereWithoutGymInput = {
    where: FavoriteGymScalarWhereInput
    data: XOR<FavoriteGymUpdateManyMutationInput, FavoriteGymUncheckedUpdateManyWithoutFavoriteUsersInput>
  }

  export type GymAccessHistoryUpsertWithWhereUniqueWithoutGymInput = {
    where: GymAccessHistoryWhereUniqueInput
    update: XOR<GymAccessHistoryUpdateWithoutGymInput, GymAccessHistoryUncheckedUpdateWithoutGymInput>
    create: XOR<GymAccessHistoryCreateWithoutGymInput, GymAccessHistoryUncheckedCreateWithoutGymInput>
  }

  export type GymAccessHistoryUpdateWithWhereUniqueWithoutGymInput = {
    where: GymAccessHistoryWhereUniqueInput
    data: XOR<GymAccessHistoryUpdateWithoutGymInput, GymAccessHistoryUncheckedUpdateWithoutGymInput>
  }

  export type GymAccessHistoryUpdateManyWithWhereWithoutGymInput = {
    where: GymAccessHistoryScalarWhereInput
    data: XOR<GymAccessHistoryUpdateManyMutationInput, GymAccessHistoryUncheckedUpdateManyWithoutGymAccessHistoryInput>
  }

  export type GymMembershipUpsertWithWhereUniqueWithoutGymInput = {
    where: GymMembershipWhereUniqueInput
    update: XOR<GymMembershipUpdateWithoutGymInput, GymMembershipUncheckedUpdateWithoutGymInput>
    create: XOR<GymMembershipCreateWithoutGymInput, GymMembershipUncheckedCreateWithoutGymInput>
  }

  export type GymMembershipUpdateWithWhereUniqueWithoutGymInput = {
    where: GymMembershipWhereUniqueInput
    data: XOR<GymMembershipUpdateWithoutGymInput, GymMembershipUncheckedUpdateWithoutGymInput>
  }

  export type GymMembershipUpdateManyWithWhereWithoutGymInput = {
    where: GymMembershipScalarWhereInput
    data: XOR<GymMembershipUpdateManyMutationInput, GymMembershipUncheckedUpdateManyWithoutGymMembershipInput>
  }

  export type GymPassHistoryUpsertWithWhereUniqueWithoutGymInput = {
    where: GymPassHistoryWhereUniqueInput
    update: XOR<GymPassHistoryUpdateWithoutGymInput, GymPassHistoryUncheckedUpdateWithoutGymInput>
    create: XOR<GymPassHistoryCreateWithoutGymInput, GymPassHistoryUncheckedCreateWithoutGymInput>
  }

  export type GymPassHistoryUpdateWithWhereUniqueWithoutGymInput = {
    where: GymPassHistoryWhereUniqueInput
    data: XOR<GymPassHistoryUpdateWithoutGymInput, GymPassHistoryUncheckedUpdateWithoutGymInput>
  }

  export type GymPassHistoryUpdateManyWithWhereWithoutGymInput = {
    where: GymPassHistoryScalarWhereInput
    data: XOR<GymPassHistoryUpdateManyMutationInput, GymPassHistoryUncheckedUpdateManyWithoutGymPassHistoryInput>
  }

  export type GymCreateWithoutGymImageInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    User: UserCreateNestedOneWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGymImageInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
    GymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutGymImageInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutGymImageInput, GymUncheckedCreateWithoutGymImageInput>
  }

  export type GymUpsertWithoutGymImageInput = {
    update: XOR<GymUpdateWithoutGymImageInput, GymUncheckedUpdateWithoutGymImageInput>
    create: XOR<GymCreateWithoutGymImageInput, GymUncheckedCreateWithoutGymImageInput>
  }

  export type GymUpdateWithoutGymImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateWithoutGymImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    GymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutGymInput
  }

  export type GymCreateWithoutGymEquipmentsInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    User: UserCreateNestedOneWithoutGymInput
    GymImage?: GymImageCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGymEquipmentsInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
    GymImage?: GymImageUncheckedCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutGymEquipmentsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutGymEquipmentsInput, GymUncheckedCreateWithoutGymEquipmentsInput>
  }

  export type GymEquipmentCreateWithoutGymsInput = {
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    BodyParts?: BodyPartsOnGymEquipmentsCreateNestedManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedCreateWithoutGymsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    brandName: string
    code: string
    isDisable?: boolean
    BodyParts?: BodyPartsOnGymEquipmentsUncheckedCreateNestedManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUncheckedCreateNestedManyWithoutGymEquipmentInput
  }

  export type GymEquipmentCreateOrConnectWithoutGymsInput = {
    where: GymEquipmentWhereUniqueInput
    create: XOR<GymEquipmentCreateWithoutGymsInput, GymEquipmentUncheckedCreateWithoutGymsInput>
  }

  export type UserCreateWithoutAssignedGymEquipmentsInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedGymEquipmentsInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedGymEquipmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedGymEquipmentsInput, UserUncheckedCreateWithoutAssignedGymEquipmentsInput>
  }

  export type GymEquipmentUserHistoryCreateWithoutGymEuquipmentsOnGymsInput = {
    User: UserCreateNestedOneWithoutGymEquipmentUserHistoryInput
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedCreateWithoutGymEuquipmentsOnGymsInput = {
    id?: number
    userId: number
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryCreateOrConnectWithoutGymEuquipmentsOnGymsInput = {
    where: GymEquipmentUserHistoryWhereUniqueInput
    create: XOR<GymEquipmentUserHistoryCreateWithoutGymEuquipmentsOnGymsInput, GymEquipmentUserHistoryUncheckedCreateWithoutGymEuquipmentsOnGymsInput>
  }

  export type GymEquipmentUserHistoryCreateManyGymEuquipmentsOnGymsInputEnvelope = {
    data: Enumerable<GymEquipmentUserHistoryCreateManyGymEuquipmentsOnGymsInput>
    skipDuplicates?: boolean
  }

  export type GymUpsertWithoutGymEquipmentsInput = {
    update: XOR<GymUpdateWithoutGymEquipmentsInput, GymUncheckedUpdateWithoutGymEquipmentsInput>
    create: XOR<GymCreateWithoutGymEquipmentsInput, GymUncheckedCreateWithoutGymEquipmentsInput>
  }

  export type GymUpdateWithoutGymEquipmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutGymInput
    GymImage?: GymImageUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateWithoutGymEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    GymImage?: GymImageUncheckedUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutGymInput
  }

  export type GymEquipmentUpsertWithoutGymsInput = {
    update: XOR<GymEquipmentUpdateWithoutGymsInput, GymEquipmentUncheckedUpdateWithoutGymsInput>
    create: XOR<GymEquipmentCreateWithoutGymsInput, GymEquipmentUncheckedCreateWithoutGymsInput>
  }

  export type GymEquipmentUpdateWithoutGymsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BodyParts?: BodyPartsOnGymEquipmentsUpdateManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUpdateManyWithoutGymEquipmentInput
  }

  export type GymEquipmentUncheckedUpdateWithoutGymsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BodyParts?: BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutGymEquipmentInput
    GymEquipmentImage?: GymEquipmentImageUncheckedUpdateManyWithoutGymEquipmentInput
  }

  export type UserUpsertWithoutAssignedGymEquipmentsInput = {
    update: XOR<UserUpdateWithoutAssignedGymEquipmentsInput, UserUncheckedUpdateWithoutAssignedGymEquipmentsInput>
    create: XOR<UserCreateWithoutAssignedGymEquipmentsInput, UserUncheckedCreateWithoutAssignedGymEquipmentsInput>
  }

  export type UserUpdateWithoutAssignedGymEquipmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAssignedGymEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type GymEquipmentUserHistoryUpsertWithWhereUniqueWithoutGymEuquipmentsOnGymsInput = {
    where: GymEquipmentUserHistoryWhereUniqueInput
    update: XOR<GymEquipmentUserHistoryUpdateWithoutGymEuquipmentsOnGymsInput, GymEquipmentUserHistoryUncheckedUpdateWithoutGymEuquipmentsOnGymsInput>
    create: XOR<GymEquipmentUserHistoryCreateWithoutGymEuquipmentsOnGymsInput, GymEquipmentUserHistoryUncheckedCreateWithoutGymEuquipmentsOnGymsInput>
  }

  export type GymEquipmentUserHistoryUpdateWithWhereUniqueWithoutGymEuquipmentsOnGymsInput = {
    where: GymEquipmentUserHistoryWhereUniqueInput
    data: XOR<GymEquipmentUserHistoryUpdateWithoutGymEuquipmentsOnGymsInput, GymEquipmentUserHistoryUncheckedUpdateWithoutGymEuquipmentsOnGymsInput>
  }

  export type GymEquipmentUserHistoryUpdateManyWithWhereWithoutGymEuquipmentsOnGymsInput = {
    where: GymEquipmentUserHistoryScalarWhereInput
    data: XOR<GymEquipmentUserHistoryUpdateManyMutationInput, GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEquipmentUserHistoryInput>
  }

  export type GymEuquipmentsOnGymsCreateWithoutGymEquipmentUserHistoryInput = {
    createdAt?: Date | string
    Gym: GymCreateNestedOneWithoutGymEquipmentsInput
    GymEquipment: GymEquipmentCreateNestedOneWithoutGymsInput
    assignUser: UserCreateNestedOneWithoutAssignedGymEquipmentsInput
  }

  export type GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentUserHistoryInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    gymEquipmentId: number
    assignBy: number
  }

  export type GymEuquipmentsOnGymsCreateOrConnectWithoutGymEquipmentUserHistoryInput = {
    where: GymEuquipmentsOnGymsWhereUniqueInput
    create: XOR<GymEuquipmentsOnGymsCreateWithoutGymEquipmentUserHistoryInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentUserHistoryInput>
  }

  export type UserCreateWithoutGymEquipmentUserHistoryInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymEquipmentUserHistoryInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymEquipmentUserHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymEquipmentUserHistoryInput, UserUncheckedCreateWithoutGymEquipmentUserHistoryInput>
  }

  export type GymEuquipmentsOnGymsUpsertWithoutGymEquipmentUserHistoryInput = {
    update: XOR<GymEuquipmentsOnGymsUpdateWithoutGymEquipmentUserHistoryInput, GymEuquipmentsOnGymsUncheckedUpdateWithoutGymEquipmentUserHistoryInput>
    create: XOR<GymEuquipmentsOnGymsCreateWithoutGymEquipmentUserHistoryInput, GymEuquipmentsOnGymsUncheckedCreateWithoutGymEquipmentUserHistoryInput>
  }

  export type GymEuquipmentsOnGymsUpdateWithoutGymEquipmentUserHistoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymEquipmentsInput
    GymEquipment?: GymEquipmentUpdateOneRequiredWithoutGymsInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymEquipmentsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateWithoutGymEquipmentUserHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutGymEquipmentUserHistoryInput = {
    update: XOR<UserUpdateWithoutGymEquipmentUserHistoryInput, UserUncheckedUpdateWithoutGymEquipmentUserHistoryInput>
    create: XOR<UserCreateWithoutGymEquipmentUserHistoryInput, UserUncheckedCreateWithoutGymEquipmentUserHistoryInput>
  }

  export type UserUpdateWithoutGymEquipmentUserHistoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutGymEquipmentUserHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutGymMembershipInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymMembershipInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymMembershipInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymMembershipInput, UserUncheckedCreateWithoutGymMembershipInput>
  }

  export type GymCreateWithoutGymMembershipInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    User: UserCreateNestedOneWithoutGymInput
    GymImage?: GymImageCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGymMembershipInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
    GymImage?: GymImageUncheckedCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutGymMembershipInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutGymMembershipInput, GymUncheckedCreateWithoutGymMembershipInput>
  }

  export type UserCreateWithoutAssignedGymMembershipsInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedGymMembershipsInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedGymMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedGymMembershipsInput, UserUncheckedCreateWithoutAssignedGymMembershipsInput>
  }

  export type GymMembershipCancellationCreateWithoutGymMembershipInput = {
    createdAt?: Date | string
    reason?: string | null
  }

  export type GymMembershipCancellationUncheckedCreateWithoutGymMembershipInput = {
    id?: number
    createdAt?: Date | string
    reason?: string | null
  }

  export type GymMembershipCancellationCreateOrConnectWithoutGymMembershipInput = {
    where: GymMembershipCancellationWhereUniqueInput
    create: XOR<GymMembershipCancellationCreateWithoutGymMembershipInput, GymMembershipCancellationUncheckedCreateWithoutGymMembershipInput>
  }

  export type UserUpsertWithoutGymMembershipInput = {
    update: XOR<UserUpdateWithoutGymMembershipInput, UserUncheckedUpdateWithoutGymMembershipInput>
    create: XOR<UserCreateWithoutGymMembershipInput, UserUncheckedCreateWithoutGymMembershipInput>
  }

  export type UserUpdateWithoutGymMembershipInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutGymMembershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type GymUpsertWithoutGymMembershipInput = {
    update: XOR<GymUpdateWithoutGymMembershipInput, GymUncheckedUpdateWithoutGymMembershipInput>
    create: XOR<GymCreateWithoutGymMembershipInput, GymUncheckedCreateWithoutGymMembershipInput>
  }

  export type GymUpdateWithoutGymMembershipInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutGymInput
    GymImage?: GymImageUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateWithoutGymMembershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    GymImage?: GymImageUncheckedUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutGymInput
  }

  export type UserUpsertWithoutAssignedGymMembershipsInput = {
    update: XOR<UserUpdateWithoutAssignedGymMembershipsInput, UserUncheckedUpdateWithoutAssignedGymMembershipsInput>
    create: XOR<UserCreateWithoutAssignedGymMembershipsInput, UserUncheckedCreateWithoutAssignedGymMembershipsInput>
  }

  export type UserUpdateWithoutAssignedGymMembershipsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAssignedGymMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type GymMembershipCancellationUpsertWithoutGymMembershipInput = {
    update: XOR<GymMembershipCancellationUpdateWithoutGymMembershipInput, GymMembershipCancellationUncheckedUpdateWithoutGymMembershipInput>
    create: XOR<GymMembershipCancellationCreateWithoutGymMembershipInput, GymMembershipCancellationUncheckedCreateWithoutGymMembershipInput>
  }

  export type GymMembershipCancellationUpdateWithoutGymMembershipInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymMembershipCancellationUncheckedUpdateWithoutGymMembershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymMembershipCreateWithoutGymMembershipCancellationInput = {
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutGymMembershipInput
    Gym: GymCreateNestedOneWithoutGymMembershipInput
    assignUser: UserCreateNestedOneWithoutAssignedGymMembershipsInput
    startDay?: Date | string
    endDay: Date | string
  }

  export type GymMembershipUncheckedCreateWithoutGymMembershipCancellationInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    gymId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
  }

  export type GymMembershipCreateOrConnectWithoutGymMembershipCancellationInput = {
    where: GymMembershipWhereUniqueInput
    create: XOR<GymMembershipCreateWithoutGymMembershipCancellationInput, GymMembershipUncheckedCreateWithoutGymMembershipCancellationInput>
  }

  export type GymMembershipCreateManyGymMembershipCancellationInputEnvelope = {
    data: Enumerable<GymMembershipCreateManyGymMembershipCancellationInput>
    skipDuplicates?: boolean
  }

  export type GymMembershipUpsertWithWhereUniqueWithoutGymMembershipCancellationInput = {
    where: GymMembershipWhereUniqueInput
    update: XOR<GymMembershipUpdateWithoutGymMembershipCancellationInput, GymMembershipUncheckedUpdateWithoutGymMembershipCancellationInput>
    create: XOR<GymMembershipCreateWithoutGymMembershipCancellationInput, GymMembershipUncheckedCreateWithoutGymMembershipCancellationInput>
  }

  export type GymMembershipUpdateWithWhereUniqueWithoutGymMembershipCancellationInput = {
    where: GymMembershipWhereUniqueInput
    data: XOR<GymMembershipUpdateWithoutGymMembershipCancellationInput, GymMembershipUncheckedUpdateWithoutGymMembershipCancellationInput>
  }

  export type GymMembershipUpdateManyWithWhereWithoutGymMembershipCancellationInput = {
    where: GymMembershipScalarWhereInput
    data: XOR<GymMembershipUpdateManyMutationInput, GymMembershipUncheckedUpdateManyWithoutGymMembershipInput>
  }

  export type GymCreateWithoutFavoriteUsersInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    User: UserCreateNestedOneWithoutGymInput
    GymImage?: GymImageCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutFavoriteUsersInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
    GymImage?: GymImageUncheckedCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutFavoriteUsersInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutFavoriteUsersInput, GymUncheckedCreateWithoutFavoriteUsersInput>
  }

  export type UserCreateWithoutFavoriteGymsInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteGymsInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteGymsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteGymsInput, UserUncheckedCreateWithoutFavoriteGymsInput>
  }

  export type GymUpsertWithoutFavoriteUsersInput = {
    update: XOR<GymUpdateWithoutFavoriteUsersInput, GymUncheckedUpdateWithoutFavoriteUsersInput>
    create: XOR<GymCreateWithoutFavoriteUsersInput, GymUncheckedCreateWithoutFavoriteUsersInput>
  }

  export type GymUpdateWithoutFavoriteUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutGymInput
    GymImage?: GymImageUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateWithoutFavoriteUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    GymImage?: GymImageUncheckedUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutGymInput
  }

  export type UserUpsertWithoutFavoriteGymsInput = {
    update: XOR<UserUpdateWithoutFavoriteGymsInput, UserUncheckedUpdateWithoutFavoriteGymsInput>
    create: XOR<UserCreateWithoutFavoriteGymsInput, UserUncheckedCreateWithoutFavoriteGymsInput>
  }

  export type UserUpdateWithoutFavoriteGymsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFavoriteGymsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type GymCreateWithoutGymAccessHistoryInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    User: UserCreateNestedOneWithoutGymInput
    GymImage?: GymImageCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGymAccessHistoryInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
    GymImage?: GymImageUncheckedCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutGymAccessHistoryInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutGymAccessHistoryInput, GymUncheckedCreateWithoutGymAccessHistoryInput>
  }

  export type UserCreateWithoutGymAccessHistoryInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymAccessHistoryInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymAccessHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymAccessHistoryInput, UserUncheckedCreateWithoutGymAccessHistoryInput>
  }

  export type GymUpsertWithoutGymAccessHistoryInput = {
    update: XOR<GymUpdateWithoutGymAccessHistoryInput, GymUncheckedUpdateWithoutGymAccessHistoryInput>
    create: XOR<GymCreateWithoutGymAccessHistoryInput, GymUncheckedCreateWithoutGymAccessHistoryInput>
  }

  export type GymUpdateWithoutGymAccessHistoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutGymInput
    GymImage?: GymImageUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateWithoutGymAccessHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    GymImage?: GymImageUncheckedUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutGymInput
  }

  export type UserUpsertWithoutGymAccessHistoryInput = {
    update: XOR<UserUpdateWithoutGymAccessHistoryInput, UserUncheckedUpdateWithoutGymAccessHistoryInput>
    create: XOR<UserCreateWithoutGymAccessHistoryInput, UserUncheckedCreateWithoutGymAccessHistoryInput>
  }

  export type UserUpdateWithoutGymAccessHistoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutGymAccessHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type GymCreateWithoutGymPassHistoryInput = {
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    User: UserCreateNestedOneWithoutGymInput
    GymImage?: GymImageCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGymPassHistoryInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
    userId: number
    GymImage?: GymImageUncheckedCreateNestedManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedCreateNestedManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutGymPassHistoryInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutGymPassHistoryInput, GymUncheckedCreateWithoutGymPassHistoryInput>
  }

  export type UserCreateWithoutGymPassHistoryInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
    Gym?: GymCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymPassHistoryInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
    Gym?: GymUncheckedCreateNestedManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedCreateNestedManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedCreateNestedManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedCreateNestedManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedCreateNestedManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedCreateNestedManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymPassHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymPassHistoryInput, UserUncheckedCreateWithoutGymPassHistoryInput>
  }

  export type GymUpsertWithoutGymPassHistoryInput = {
    update: XOR<GymUpdateWithoutGymPassHistoryInput, GymUncheckedUpdateWithoutGymPassHistoryInput>
    create: XOR<GymCreateWithoutGymPassHistoryInput, GymUncheckedCreateWithoutGymPassHistoryInput>
  }

  export type GymUpdateWithoutGymPassHistoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutGymInput
    GymImage?: GymImageUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateWithoutGymPassHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    GymImage?: GymImageUncheckedUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymInput
  }

  export type UserUpsertWithoutGymPassHistoryInput = {
    update: XOR<UserUpdateWithoutGymPassHistoryInput, UserUncheckedUpdateWithoutGymPassHistoryInput>
    create: XOR<UserCreateWithoutGymPassHistoryInput, UserUncheckedCreateWithoutGymPassHistoryInput>
  }

  export type UserUpdateWithoutGymPassHistoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
    Gym?: GymUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutGymPassHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
    Gym?: GymUncheckedUpdateManyWithoutUserInput
    assignedGymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignUserInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutUserInput
    assignedGymMemberships?: GymMembershipUncheckedUpdateManyWithoutAssignUserInput
    FavoriteGyms?: FavoriteGymUncheckedUpdateManyWithoutUserInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutUserInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutUserInput
  }

  export type BoardCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    boardType?: BoardType
  }

  export type BoardReplyCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type NoticeCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type GymCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    ceoName: string
    companyName: string
    businessNumber: string
    postcode: string
    mainAddress: string
    subAddress: string
    phone: string
    cellPhone: string
    fax: string
    email: string
    isCertified?: boolean
    isDisable?: boolean
  }

  export type GymEuquipmentsOnGymsCreateManyAssignUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    gymEquipmentId: number
  }

  export type GymMembershipCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type GymMembershipCreateManyAssignUserInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    gymId: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type FavoriteGymCreateManyUserInput = {
    gymId: number
    assignedAt?: Date | string
  }

  export type GymEquipmentUserHistoryCreateManyUserInput = {
    id?: number
    gymEuquipmentsOnGymsId: number
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymAccessHistoryCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymPassHistoryCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    hash: string
  }

  export type BoardUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUpdateManyWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUncheckedUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type NoticeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateManyWithoutNoticeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    GymImage?: GymImageUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    GymImage?: GymImageUncheckedUpdateManyWithoutGymInput
    GymEquipments?: GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymInput
    FavoriteUsers?: FavoriteGymUncheckedUpdateManyWithoutGymInput
    GymAccessHistory?: GymAccessHistoryUncheckedUpdateManyWithoutGymInput
    GymMembership?: GymMembershipUncheckedUpdateManyWithoutGymInput
    GymPassHistory?: GymPassHistoryUncheckedUpdateManyWithoutGymInput
  }

  export type GymUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ceoName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    mainAddress?: StringFieldUpdateOperationsInput | string
    subAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cellPhone?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isCertified?: BoolFieldUpdateOperationsInput | boolean
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymEuquipmentsOnGymsUpdateWithoutAssignUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymEquipmentsInput
    GymEquipment?: GymEquipmentUpdateOneRequiredWithoutGymsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateWithoutAssignUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateManyWithoutAssignedGymEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
  }

  export type GymMembershipUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymMembershipInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymMembershipsInput
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    GymMembershipCancellation?: GymMembershipCancellationUpdateOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    gymMembershipCancellationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GymMembershipUncheckedUpdateManyWithoutGymMembershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    gymMembershipCancellationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GymMembershipUpdateWithoutAssignUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGymMembershipInput
    Gym?: GymUpdateOneRequiredWithoutGymMembershipInput
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    GymMembershipCancellation?: GymMembershipCancellationUpdateOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedUpdateWithoutAssignUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    gymId?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    gymMembershipCancellationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GymMembershipUncheckedUpdateManyWithoutAssignedGymMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    gymId?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    gymMembershipCancellationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteGymUpdateWithoutUserInput = {
    Gym?: GymUpdateOneRequiredWithoutFavoriteUsersInput
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteGymUncheckedUpdateWithoutUserInput = {
    gymId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteGymUncheckedUpdateManyWithoutFavoriteGymsInput = {
    gymId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymEquipmentUserHistoryUpdateWithoutUserInput = {
    GymEuquipmentsOnGyms?: GymEuquipmentsOnGymsUpdateOneRequiredWithoutGymEquipmentUserHistoryInput
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gymEuquipmentsOnGymsId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEquipmentUserHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gymEuquipmentsOnGymsId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymAccessHistoryUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymAccessHistoryInput
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymAccessHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymAccessHistoryUncheckedUpdateManyWithoutGymAccessHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymPassHistoryUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymPassHistoryInput
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type GymPassHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type GymPassHistoryUncheckedUpdateManyWithoutGymPassHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type BoardImageCreateManyBoardInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardReplyCreateManyBoardInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardImageUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateManyWithoutBoardImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardReplyUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyCreateManyBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardType?: BoardType
  }

  export type BoardReplyUpdateWithoutBoardReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardNestedReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BodyPartsOnGymEquipmentsCreateManyBodyPartInput = {
    gymEquipmentId: number
    assignedAt?: Date | string
  }

  export type BodyPartsOnGymEquipmentsUpdateWithoutBodyPartInput = {
    GymEquipment?: GymEquipmentUpdateOneRequiredWithoutBodyPartsInput
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateWithoutBodyPartInput = {
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutGymEquipmentsInput = {
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsCreateManyGymEquipmentInput = {
    bodyPartId: number
    assignedAt?: Date | string
  }

  export type GymEuquipmentsOnGymsCreateManyGymEquipmentInput = {
    id?: number
    createdAt?: Date | string
    gymId: number
    assignBy: number
  }

  export type GymEquipmentImageCreateManyGymEquipmentInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BodyPartsOnGymEquipmentsUpdateWithoutGymEquipmentInput = {
    BodyPart?: BodyPartUpdateOneRequiredWithoutGymEquipmentsInput
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateWithoutGymEquipmentInput = {
    bodyPartId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartsOnGymEquipmentsUncheckedUpdateManyWithoutBodyPartsInput = {
    bodyPartId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymEuquipmentsOnGymsUpdateWithoutGymEquipmentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gym?: GymUpdateOneRequiredWithoutGymEquipmentsInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymEquipmentsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateWithoutGymEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
  }

  export type GymEquipmentImageUpdateWithoutGymEquipmentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymEquipmentImageUncheckedUpdateWithoutGymEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymEquipmentImageUncheckedUpdateManyWithoutGymEquipmentImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymImageCreateManyGymInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type GymEuquipmentsOnGymsCreateManyGymInput = {
    id?: number
    createdAt?: Date | string
    gymEquipmentId: number
    assignBy: number
  }

  export type FavoriteGymCreateManyGymInput = {
    userId: number
    assignedAt?: Date | string
  }

  export type GymAccessHistoryCreateManyGymInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    entryAt?: Date | string
    exitAt?: Date | string | null
  }

  export type GymMembershipCreateManyGymInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
    gymMembershipCancellationId?: number | null
  }

  export type GymPassHistoryCreateManyGymInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    hash: string
  }

  export type GymImageUpdateWithoutGymInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymImageUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymImageUncheckedUpdateManyWithoutGymImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GymEuquipmentsOnGymsUpdateWithoutGymInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GymEquipment?: GymEquipmentUpdateOneRequiredWithoutGymsInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymEquipmentsInput
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    GymEquipmentUserHistory?: GymEquipmentUserHistoryUncheckedUpdateManyWithoutGymEuquipmentsOnGymsInput
  }

  export type GymEuquipmentsOnGymsUncheckedUpdateManyWithoutGymEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gymEquipmentId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteGymUpdateWithoutGymInput = {
    User?: UserUpdateOneRequiredWithoutFavoriteGymsInput
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteGymUncheckedUpdateWithoutGymInput = {
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteGymUncheckedUpdateManyWithoutFavoriteUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymAccessHistoryUpdateWithoutGymInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGymAccessHistoryInput
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymAccessHistoryUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    entryAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymMembershipUpdateWithoutGymInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGymMembershipInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymMembershipsInput
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    GymMembershipCancellation?: GymMembershipCancellationUpdateOneWithoutGymMembershipInput
  }

  export type GymMembershipUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    gymMembershipCancellationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GymPassHistoryUpdateWithoutGymInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGymPassHistoryInput
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type GymPassHistoryUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type GymEquipmentUserHistoryCreateManyGymEuquipmentsOnGymsInput = {
    id?: number
    userId: number
    usedAt?: Date | string
    endAt?: Date | string | null
  }

  export type GymEquipmentUserHistoryUpdateWithoutGymEuquipmentsOnGymsInput = {
    User?: UserUpdateOneRequiredWithoutGymEquipmentUserHistoryInput
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymEquipmentUserHistoryUncheckedUpdateWithoutGymEuquipmentsOnGymsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymMembershipCreateManyGymMembershipCancellationInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    gymId: number
    assignBy: number
    startDay?: Date | string
    endDay: Date | string
  }

  export type GymMembershipUpdateWithoutGymMembershipCancellationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGymMembershipInput
    Gym?: GymUpdateOneRequiredWithoutGymMembershipInput
    assignUser?: UserUpdateOneRequiredWithoutAssignedGymMembershipsInput
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymMembershipUncheckedUpdateWithoutGymMembershipCancellationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    gymId?: IntFieldUpdateOperationsInput | number
    assignBy?: IntFieldUpdateOperationsInput | number
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.DMMF.Document;
}