
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Cartao
 * 
 */
export type Cartao = $Result.DefaultSelection<Prisma.$CartaoPayload>
/**
 * Model Gasto
 * 
 */
export type Gasto = $Result.DefaultSelection<Prisma.$GastoPayload>
/**
 * Model Parcela
 * 
 */
export type Parcela = $Result.DefaultSelection<Prisma.$ParcelaPayload>
/**
 * Model Fatura
 * 
 */
export type Fatura = $Result.DefaultSelection<Prisma.$FaturaPayload>
/**
 * Model Relatorio
 * 
 */
export type Relatorio = $Result.DefaultSelection<Prisma.$RelatorioPayload>
/**
 * Model DivisaoDeGasto
 * 
 */
export type DivisaoDeGasto = $Result.DefaultSelection<Prisma.$DivisaoDeGastoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MeioDePagamento: {
  DINHEIRO: 'DINHEIRO',
  PIX: 'PIX',
  DEBITO: 'DEBITO',
  CREDITO: 'CREDITO'
};

export type MeioDePagamento = (typeof MeioDePagamento)[keyof typeof MeioDePagamento]


export const TipoRelatorio: {
  MENSAL: 'MENSAL',
  ANUAL: 'ANUAL',
  PERSONALIZADO: 'PERSONALIZADO'
};

export type TipoRelatorio = (typeof TipoRelatorio)[keyof typeof TipoRelatorio]

}

export type MeioDePagamento = $Enums.MeioDePagamento

export const MeioDePagamento: typeof $Enums.MeioDePagamento

export type TipoRelatorio = $Enums.TipoRelatorio

export const TipoRelatorio: typeof $Enums.TipoRelatorio

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartao`: Exposes CRUD operations for the **Cartao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartaos
    * const cartaos = await prisma.cartao.findMany()
    * ```
    */
  get cartao(): Prisma.CartaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gasto`: Exposes CRUD operations for the **Gasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos
    * const gastos = await prisma.gasto.findMany()
    * ```
    */
  get gasto(): Prisma.GastoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parcela`: Exposes CRUD operations for the **Parcela** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcelas
    * const parcelas = await prisma.parcela.findMany()
    * ```
    */
  get parcela(): Prisma.ParcelaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fatura`: Exposes CRUD operations for the **Fatura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faturas
    * const faturas = await prisma.fatura.findMany()
    * ```
    */
  get fatura(): Prisma.FaturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatorio`: Exposes CRUD operations for the **Relatorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relatorios
    * const relatorios = await prisma.relatorio.findMany()
    * ```
    */
  get relatorio(): Prisma.RelatorioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.divisaoDeGasto`: Exposes CRUD operations for the **DivisaoDeGasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DivisaoDeGastos
    * const divisaoDeGastos = await prisma.divisaoDeGasto.findMany()
    * ```
    */
  get divisaoDeGasto(): Prisma.DivisaoDeGastoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Usuario: 'Usuario',
    Categoria: 'Categoria',
    Cartao: 'Cartao',
    Gasto: 'Gasto',
    Parcela: 'Parcela',
    Fatura: 'Fatura',
    Relatorio: 'Relatorio',
    DivisaoDeGasto: 'DivisaoDeGasto',
    Notificacao: 'Notificacao'
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
      modelProps: "usuario" | "categoria" | "cartao" | "gasto" | "parcela" | "fatura" | "relatorio" | "divisaoDeGasto" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Cartao: {
        payload: Prisma.$CartaoPayload<ExtArgs>
        fields: Prisma.CartaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          findFirst: {
            args: Prisma.CartaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          findMany: {
            args: Prisma.CartaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>[]
          }
          create: {
            args: Prisma.CartaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          createMany: {
            args: Prisma.CartaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>[]
          }
          delete: {
            args: Prisma.CartaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          update: {
            args: Prisma.CartaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          deleteMany: {
            args: Prisma.CartaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>[]
          }
          upsert: {
            args: Prisma.CartaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          aggregate: {
            args: Prisma.CartaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartao>
          }
          groupBy: {
            args: Prisma.CartaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartaoCountArgs<ExtArgs>
            result: $Utils.Optional<CartaoCountAggregateOutputType> | number
          }
        }
      }
      Gasto: {
        payload: Prisma.$GastoPayload<ExtArgs>
        fields: Prisma.GastoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findFirst: {
            args: Prisma.GastoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findMany: {
            args: Prisma.GastoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          create: {
            args: Prisma.GastoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          createMany: {
            args: Prisma.GastoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GastoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          delete: {
            args: Prisma.GastoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          update: {
            args: Prisma.GastoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          deleteMany: {
            args: Prisma.GastoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GastoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GastoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          upsert: {
            args: Prisma.GastoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          aggregate: {
            args: Prisma.GastoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGasto>
          }
          groupBy: {
            args: Prisma.GastoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastoCountArgs<ExtArgs>
            result: $Utils.Optional<GastoCountAggregateOutputType> | number
          }
        }
      }
      Parcela: {
        payload: Prisma.$ParcelaPayload<ExtArgs>
        fields: Prisma.ParcelaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          findFirst: {
            args: Prisma.ParcelaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          findMany: {
            args: Prisma.ParcelaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>[]
          }
          create: {
            args: Prisma.ParcelaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          createMany: {
            args: Prisma.ParcelaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParcelaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>[]
          }
          delete: {
            args: Prisma.ParcelaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          update: {
            args: Prisma.ParcelaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          deleteMany: {
            args: Prisma.ParcelaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParcelaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>[]
          }
          upsert: {
            args: Prisma.ParcelaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          aggregate: {
            args: Prisma.ParcelaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParcela>
          }
          groupBy: {
            args: Prisma.ParcelaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParcelaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelaCountArgs<ExtArgs>
            result: $Utils.Optional<ParcelaCountAggregateOutputType> | number
          }
        }
      }
      Fatura: {
        payload: Prisma.$FaturaPayload<ExtArgs>
        fields: Prisma.FaturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          findFirst: {
            args: Prisma.FaturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          findMany: {
            args: Prisma.FaturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>[]
          }
          create: {
            args: Prisma.FaturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          createMany: {
            args: Prisma.FaturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>[]
          }
          delete: {
            args: Prisma.FaturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          update: {
            args: Prisma.FaturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          deleteMany: {
            args: Prisma.FaturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>[]
          }
          upsert: {
            args: Prisma.FaturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          aggregate: {
            args: Prisma.FaturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFatura>
          }
          groupBy: {
            args: Prisma.FaturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaturaCountArgs<ExtArgs>
            result: $Utils.Optional<FaturaCountAggregateOutputType> | number
          }
        }
      }
      Relatorio: {
        payload: Prisma.$RelatorioPayload<ExtArgs>
        fields: Prisma.RelatorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          findFirst: {
            args: Prisma.RelatorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          findMany: {
            args: Prisma.RelatorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>[]
          }
          create: {
            args: Prisma.RelatorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          createMany: {
            args: Prisma.RelatorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatorioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>[]
          }
          delete: {
            args: Prisma.RelatorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          update: {
            args: Prisma.RelatorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          deleteMany: {
            args: Prisma.RelatorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelatorioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>[]
          }
          upsert: {
            args: Prisma.RelatorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          aggregate: {
            args: Prisma.RelatorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatorio>
          }
          groupBy: {
            args: Prisma.RelatorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatorioCountArgs<ExtArgs>
            result: $Utils.Optional<RelatorioCountAggregateOutputType> | number
          }
        }
      }
      DivisaoDeGasto: {
        payload: Prisma.$DivisaoDeGastoPayload<ExtArgs>
        fields: Prisma.DivisaoDeGastoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisaoDeGastoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisaoDeGastoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>
          }
          findFirst: {
            args: Prisma.DivisaoDeGastoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisaoDeGastoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>
          }
          findMany: {
            args: Prisma.DivisaoDeGastoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>[]
          }
          create: {
            args: Prisma.DivisaoDeGastoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>
          }
          createMany: {
            args: Prisma.DivisaoDeGastoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DivisaoDeGastoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>[]
          }
          delete: {
            args: Prisma.DivisaoDeGastoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>
          }
          update: {
            args: Prisma.DivisaoDeGastoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>
          }
          deleteMany: {
            args: Prisma.DivisaoDeGastoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivisaoDeGastoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DivisaoDeGastoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>[]
          }
          upsert: {
            args: Prisma.DivisaoDeGastoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisaoDeGastoPayload>
          }
          aggregate: {
            args: Prisma.DivisaoDeGastoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivisaoDeGasto>
          }
          groupBy: {
            args: Prisma.DivisaoDeGastoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisaoDeGastoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisaoDeGastoCountArgs<ExtArgs>
            result: $Utils.Optional<DivisaoDeGastoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    categoria?: CategoriaOmit
    cartao?: CartaoOmit
    gasto?: GastoOmit
    parcela?: ParcelaOmit
    fatura?: FaturaOmit
    relatorio?: RelatorioOmit
    divisaoDeGasto?: DivisaoDeGastoOmit
    notificacao?: NotificacaoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    gastos: number
    cartoes: number
    relatorios: number
    divisoesDeGasto: number
    notificacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastos?: boolean | UsuarioCountOutputTypeCountGastosArgs
    cartoes?: boolean | UsuarioCountOutputTypeCountCartoesArgs
    relatorios?: boolean | UsuarioCountOutputTypeCountRelatoriosArgs
    divisoesDeGasto?: boolean | UsuarioCountOutputTypeCountDivisoesDeGastoArgs
    notificacoes?: boolean | UsuarioCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCartoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRelatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDivisoesDeGastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisaoDeGastoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    gastos: number
    divisoesDeGasto: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastos?: boolean | CategoriaCountOutputTypeCountGastosArgs
    divisoesDeGasto?: boolean | CategoriaCountOutputTypeCountDivisoesDeGastoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountDivisoesDeGastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisaoDeGastoWhereInput
  }


  /**
   * Count Type CartaoCountOutputType
   */

  export type CartaoCountOutputType = {
    gastos: number
    faturas: number
    divisoesDeGasto: number
  }

  export type CartaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastos?: boolean | CartaoCountOutputTypeCountGastosArgs
    faturas?: boolean | CartaoCountOutputTypeCountFaturasArgs
    divisoesDeGasto?: boolean | CartaoCountOutputTypeCountDivisoesDeGastoArgs
  }

  // Custom InputTypes
  /**
   * CartaoCountOutputType without action
   */
  export type CartaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartaoCountOutputType
     */
    select?: CartaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartaoCountOutputType without action
   */
  export type CartaoCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }

  /**
   * CartaoCountOutputType without action
   */
  export type CartaoCountOutputTypeCountFaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaturaWhereInput
  }

  /**
   * CartaoCountOutputType without action
   */
  export type CartaoCountOutputTypeCountDivisoesDeGastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisaoDeGastoWhereInput
  }


  /**
   * Count Type GastoCountOutputType
   */

  export type GastoCountOutputType = {
    parcelas: number
  }

  export type GastoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcelas?: boolean | GastoCountOutputTypeCountParcelasArgs
  }

  // Custom InputTypes
  /**
   * GastoCountOutputType without action
   */
  export type GastoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastoCountOutputType
     */
    select?: GastoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GastoCountOutputType without action
   */
  export type GastoCountOutputTypeCountParcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelaWhereInput
  }


  /**
   * Count Type FaturaCountOutputType
   */

  export type FaturaCountOutputType = {
    parcelas: number
  }

  export type FaturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcelas?: boolean | FaturaCountOutputTypeCountParcelasArgs
  }

  // Custom InputTypes
  /**
   * FaturaCountOutputType without action
   */
  export type FaturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaturaCountOutputType
     */
    select?: FaturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaturaCountOutputType without action
   */
  export type FaturaCountOutputTypeCountParcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelaWhereInput
  }


  /**
   * Count Type DivisaoDeGastoCountOutputType
   */

  export type DivisaoDeGastoCountOutputType = {
    gastos: number
    usuarios: number
  }

  export type DivisaoDeGastoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastos?: boolean | DivisaoDeGastoCountOutputTypeCountGastosArgs
    usuarios?: boolean | DivisaoDeGastoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * DivisaoDeGastoCountOutputType without action
   */
  export type DivisaoDeGastoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGastoCountOutputType
     */
    select?: DivisaoDeGastoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DivisaoDeGastoCountOutputType without action
   */
  export type DivisaoDeGastoCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }

  /**
   * DivisaoDeGastoCountOutputType without action
   */
  export type DivisaoDeGastoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gastos?: boolean | Usuario$gastosArgs<ExtArgs>
    cartoes?: boolean | Usuario$cartoesArgs<ExtArgs>
    relatorios?: boolean | Usuario$relatoriosArgs<ExtArgs>
    divisoesDeGasto?: boolean | Usuario$divisoesDeGastoArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastos?: boolean | Usuario$gastosArgs<ExtArgs>
    cartoes?: boolean | Usuario$cartoesArgs<ExtArgs>
    relatorios?: boolean | Usuario$relatoriosArgs<ExtArgs>
    divisoesDeGasto?: boolean | Usuario$divisoesDeGastoArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      gastos: Prisma.$GastoPayload<ExtArgs>[]
      cartoes: Prisma.$CartaoPayload<ExtArgs>[]
      relatorios: Prisma.$RelatorioPayload<ExtArgs>[]
      divisoesDeGasto: Prisma.$DivisaoDeGastoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gastos<T extends Usuario$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartoes<T extends Usuario$cartoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$cartoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatorios<T extends Usuario$relatoriosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$relatoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    divisoesDeGasto<T extends Usuario$divisoesDeGastoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$divisoesDeGastoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends Usuario$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.gastos
   */
  export type Usuario$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Usuario.cartoes
   */
  export type Usuario$cartoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    where?: CartaoWhereInput
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    cursor?: CartaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Usuario.relatorios
   */
  export type Usuario$relatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    where?: RelatorioWhereInput
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    cursor?: RelatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Usuario.divisoesDeGasto
   */
  export type Usuario$divisoesDeGastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    where?: DivisaoDeGastoWhereInput
    orderBy?: DivisaoDeGastoOrderByWithRelationInput | DivisaoDeGastoOrderByWithRelationInput[]
    cursor?: DivisaoDeGastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisaoDeGastoScalarFieldEnum | DivisaoDeGastoScalarFieldEnum[]
  }

  /**
   * Usuario.notificacoes
   */
  export type Usuario$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gastos?: boolean | Categoria$gastosArgs<ExtArgs>
    divisoesDeGasto?: boolean | Categoria$divisoesDeGastoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastos?: boolean | Categoria$gastosArgs<ExtArgs>
    divisoesDeGasto?: boolean | Categoria$divisoesDeGastoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      gastos: Prisma.$GastoPayload<ExtArgs>[]
      divisoesDeGasto: Prisma.$DivisaoDeGastoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gastos<T extends Categoria$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    divisoesDeGasto<T extends Categoria$divisoesDeGastoArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$divisoesDeGastoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.gastos
   */
  export type Categoria$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Categoria.divisoesDeGasto
   */
  export type Categoria$divisoesDeGastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    where?: DivisaoDeGastoWhereInput
    orderBy?: DivisaoDeGastoOrderByWithRelationInput | DivisaoDeGastoOrderByWithRelationInput[]
    cursor?: DivisaoDeGastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisaoDeGastoScalarFieldEnum | DivisaoDeGastoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Cartao
   */

  export type AggregateCartao = {
    _count: CartaoCountAggregateOutputType | null
    _avg: CartaoAvgAggregateOutputType | null
    _sum: CartaoSumAggregateOutputType | null
    _min: CartaoMinAggregateOutputType | null
    _max: CartaoMaxAggregateOutputType | null
  }

  export type CartaoAvgAggregateOutputType = {
    id: number | null
    limiteTotal: number | null
    limiteRestante: number | null
    usuarioId: number | null
  }

  export type CartaoSumAggregateOutputType = {
    id: number | null
    limiteTotal: number | null
    limiteRestante: number | null
    usuarioId: number | null
  }

  export type CartaoMinAggregateOutputType = {
    id: number | null
    banco: string | null
    limiteTotal: number | null
    limiteRestante: number | null
    ultimosQuatroDigitos: string | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartaoMaxAggregateOutputType = {
    id: number | null
    banco: string | null
    limiteTotal: number | null
    limiteRestante: number | null
    ultimosQuatroDigitos: string | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartaoCountAggregateOutputType = {
    id: number
    banco: number
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartaoAvgAggregateInputType = {
    id?: true
    limiteTotal?: true
    limiteRestante?: true
    usuarioId?: true
  }

  export type CartaoSumAggregateInputType = {
    id?: true
    limiteTotal?: true
    limiteRestante?: true
    usuarioId?: true
  }

  export type CartaoMinAggregateInputType = {
    id?: true
    banco?: true
    limiteTotal?: true
    limiteRestante?: true
    ultimosQuatroDigitos?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartaoMaxAggregateInputType = {
    id?: true
    banco?: true
    limiteTotal?: true
    limiteRestante?: true
    ultimosQuatroDigitos?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartaoCountAggregateInputType = {
    id?: true
    banco?: true
    limiteTotal?: true
    limiteRestante?: true
    ultimosQuatroDigitos?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartao to aggregate.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cartaos
    **/
    _count?: true | CartaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartaoMaxAggregateInputType
  }

  export type GetCartaoAggregateType<T extends CartaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCartao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartao[P]>
      : GetScalarType<T[P], AggregateCartao[P]>
  }




  export type CartaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaoWhereInput
    orderBy?: CartaoOrderByWithAggregationInput | CartaoOrderByWithAggregationInput[]
    by: CartaoScalarFieldEnum[] | CartaoScalarFieldEnum
    having?: CartaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartaoCountAggregateInputType | true
    _avg?: CartaoAvgAggregateInputType
    _sum?: CartaoSumAggregateInputType
    _min?: CartaoMinAggregateInputType
    _max?: CartaoMaxAggregateInputType
  }

  export type CartaoGroupByOutputType = {
    id: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos: string | null
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: CartaoCountAggregateOutputType | null
    _avg: CartaoAvgAggregateOutputType | null
    _sum: CartaoSumAggregateOutputType | null
    _min: CartaoMinAggregateOutputType | null
    _max: CartaoMaxAggregateOutputType | null
  }

  type GetCartaoGroupByPayload<T extends CartaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartaoGroupByOutputType[P]>
            : GetScalarType<T[P], CartaoGroupByOutputType[P]>
        }
      >
    >


  export type CartaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    banco?: boolean
    limiteTotal?: boolean
    limiteRestante?: boolean
    ultimosQuatroDigitos?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    gastos?: boolean | Cartao$gastosArgs<ExtArgs>
    faturas?: boolean | Cartao$faturasArgs<ExtArgs>
    divisoesDeGasto?: boolean | Cartao$divisoesDeGastoArgs<ExtArgs>
    _count?: boolean | CartaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartao"]>

  export type CartaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    banco?: boolean
    limiteTotal?: boolean
    limiteRestante?: boolean
    ultimosQuatroDigitos?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartao"]>

  export type CartaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    banco?: boolean
    limiteTotal?: boolean
    limiteRestante?: boolean
    ultimosQuatroDigitos?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartao"]>

  export type CartaoSelectScalar = {
    id?: boolean
    banco?: boolean
    limiteTotal?: boolean
    limiteRestante?: boolean
    ultimosQuatroDigitos?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "banco" | "limiteTotal" | "limiteRestante" | "ultimosQuatroDigitos" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["cartao"]>
  export type CartaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    gastos?: boolean | Cartao$gastosArgs<ExtArgs>
    faturas?: boolean | Cartao$faturasArgs<ExtArgs>
    divisoesDeGasto?: boolean | Cartao$divisoesDeGastoArgs<ExtArgs>
    _count?: boolean | CartaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CartaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CartaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cartao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      gastos: Prisma.$GastoPayload<ExtArgs>[]
      faturas: Prisma.$FaturaPayload<ExtArgs>[]
      divisoesDeGasto: Prisma.$DivisaoDeGastoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      banco: string
      limiteTotal: number
      limiteRestante: number
      ultimosQuatroDigitos: string | null
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cartao"]>
    composites: {}
  }

  type CartaoGetPayload<S extends boolean | null | undefined | CartaoDefaultArgs> = $Result.GetResult<Prisma.$CartaoPayload, S>

  type CartaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartaoCountAggregateInputType | true
    }

  export interface CartaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cartao'], meta: { name: 'Cartao' } }
    /**
     * Find zero or one Cartao that matches the filter.
     * @param {CartaoFindUniqueArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartaoFindUniqueArgs>(args: SelectSubset<T, CartaoFindUniqueArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cartao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartaoFindUniqueOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartaoFindUniqueOrThrowArgs>(args: SelectSubset<T, CartaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindFirstArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartaoFindFirstArgs>(args?: SelectSubset<T, CartaoFindFirstArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindFirstOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartaoFindFirstOrThrowArgs>(args?: SelectSubset<T, CartaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartaos
     * const cartaos = await prisma.cartao.findMany()
     * 
     * // Get first 10 Cartaos
     * const cartaos = await prisma.cartao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartaoWithIdOnly = await prisma.cartao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartaoFindManyArgs>(args?: SelectSubset<T, CartaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cartao.
     * @param {CartaoCreateArgs} args - Arguments to create a Cartao.
     * @example
     * // Create one Cartao
     * const Cartao = await prisma.cartao.create({
     *   data: {
     *     // ... data to create a Cartao
     *   }
     * })
     * 
     */
    create<T extends CartaoCreateArgs>(args: SelectSubset<T, CartaoCreateArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartaos.
     * @param {CartaoCreateManyArgs} args - Arguments to create many Cartaos.
     * @example
     * // Create many Cartaos
     * const cartao = await prisma.cartao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartaoCreateManyArgs>(args?: SelectSubset<T, CartaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cartaos and returns the data saved in the database.
     * @param {CartaoCreateManyAndReturnArgs} args - Arguments to create many Cartaos.
     * @example
     * // Create many Cartaos
     * const cartao = await prisma.cartao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cartaos and only return the `id`
     * const cartaoWithIdOnly = await prisma.cartao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartaoCreateManyAndReturnArgs>(args?: SelectSubset<T, CartaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cartao.
     * @param {CartaoDeleteArgs} args - Arguments to delete one Cartao.
     * @example
     * // Delete one Cartao
     * const Cartao = await prisma.cartao.delete({
     *   where: {
     *     // ... filter to delete one Cartao
     *   }
     * })
     * 
     */
    delete<T extends CartaoDeleteArgs>(args: SelectSubset<T, CartaoDeleteArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cartao.
     * @param {CartaoUpdateArgs} args - Arguments to update one Cartao.
     * @example
     * // Update one Cartao
     * const cartao = await prisma.cartao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartaoUpdateArgs>(args: SelectSubset<T, CartaoUpdateArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartaos.
     * @param {CartaoDeleteManyArgs} args - Arguments to filter Cartaos to delete.
     * @example
     * // Delete a few Cartaos
     * const { count } = await prisma.cartao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartaoDeleteManyArgs>(args?: SelectSubset<T, CartaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartaos
     * const cartao = await prisma.cartao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartaoUpdateManyArgs>(args: SelectSubset<T, CartaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartaos and returns the data updated in the database.
     * @param {CartaoUpdateManyAndReturnArgs} args - Arguments to update many Cartaos.
     * @example
     * // Update many Cartaos
     * const cartao = await prisma.cartao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cartaos and only return the `id`
     * const cartaoWithIdOnly = await prisma.cartao.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartaoUpdateManyAndReturnArgs>(args: SelectSubset<T, CartaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cartao.
     * @param {CartaoUpsertArgs} args - Arguments to update or create a Cartao.
     * @example
     * // Update or create a Cartao
     * const cartao = await prisma.cartao.upsert({
     *   create: {
     *     // ... data to create a Cartao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cartao we want to update
     *   }
     * })
     */
    upsert<T extends CartaoUpsertArgs>(args: SelectSubset<T, CartaoUpsertArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoCountArgs} args - Arguments to filter Cartaos to count.
     * @example
     * // Count the number of Cartaos
     * const count = await prisma.cartao.count({
     *   where: {
     *     // ... the filter for the Cartaos we want to count
     *   }
     * })
    **/
    count<T extends CartaoCountArgs>(
      args?: Subset<T, CartaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartaoAggregateArgs>(args: Subset<T, CartaoAggregateArgs>): Prisma.PrismaPromise<GetCartaoAggregateType<T>>

    /**
     * Group by Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoGroupByArgs} args - Group by arguments.
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
      T extends CartaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartaoGroupByArgs['orderBy'] }
        : { orderBy?: CartaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cartao model
   */
  readonly fields: CartaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cartao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gastos<T extends Cartao$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Cartao$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faturas<T extends Cartao$faturasArgs<ExtArgs> = {}>(args?: Subset<T, Cartao$faturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    divisoesDeGasto<T extends Cartao$divisoesDeGastoArgs<ExtArgs> = {}>(args?: Subset<T, Cartao$divisoesDeGastoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cartao model
   */
  interface CartaoFieldRefs {
    readonly id: FieldRef<"Cartao", 'Int'>
    readonly banco: FieldRef<"Cartao", 'String'>
    readonly limiteTotal: FieldRef<"Cartao", 'Float'>
    readonly limiteRestante: FieldRef<"Cartao", 'Float'>
    readonly ultimosQuatroDigitos: FieldRef<"Cartao", 'String'>
    readonly usuarioId: FieldRef<"Cartao", 'Int'>
    readonly createdAt: FieldRef<"Cartao", 'DateTime'>
    readonly updatedAt: FieldRef<"Cartao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cartao findUnique
   */
  export type CartaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao findUniqueOrThrow
   */
  export type CartaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao findFirst
   */
  export type CartaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartaos.
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartaos.
     */
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Cartao findFirstOrThrow
   */
  export type CartaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartaos.
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartaos.
     */
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Cartao findMany
   */
  export type CartaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartaos to fetch.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cartaos.
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Cartao create
   */
  export type CartaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cartao.
     */
    data: XOR<CartaoCreateInput, CartaoUncheckedCreateInput>
  }

  /**
   * Cartao createMany
   */
  export type CartaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cartaos.
     */
    data: CartaoCreateManyInput | CartaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cartao createManyAndReturn
   */
  export type CartaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * The data used to create many Cartaos.
     */
    data: CartaoCreateManyInput | CartaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cartao update
   */
  export type CartaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cartao.
     */
    data: XOR<CartaoUpdateInput, CartaoUncheckedUpdateInput>
    /**
     * Choose, which Cartao to update.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao updateMany
   */
  export type CartaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cartaos.
     */
    data: XOR<CartaoUpdateManyMutationInput, CartaoUncheckedUpdateManyInput>
    /**
     * Filter which Cartaos to update
     */
    where?: CartaoWhereInput
    /**
     * Limit how many Cartaos to update.
     */
    limit?: number
  }

  /**
   * Cartao updateManyAndReturn
   */
  export type CartaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * The data used to update Cartaos.
     */
    data: XOR<CartaoUpdateManyMutationInput, CartaoUncheckedUpdateManyInput>
    /**
     * Filter which Cartaos to update
     */
    where?: CartaoWhereInput
    /**
     * Limit how many Cartaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cartao upsert
   */
  export type CartaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cartao to update in case it exists.
     */
    where: CartaoWhereUniqueInput
    /**
     * In case the Cartao found by the `where` argument doesn't exist, create a new Cartao with this data.
     */
    create: XOR<CartaoCreateInput, CartaoUncheckedCreateInput>
    /**
     * In case the Cartao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartaoUpdateInput, CartaoUncheckedUpdateInput>
  }

  /**
   * Cartao delete
   */
  export type CartaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter which Cartao to delete.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao deleteMany
   */
  export type CartaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartaos to delete
     */
    where?: CartaoWhereInput
    /**
     * Limit how many Cartaos to delete.
     */
    limit?: number
  }

  /**
   * Cartao.gastos
   */
  export type Cartao$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Cartao.faturas
   */
  export type Cartao$faturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    where?: FaturaWhereInput
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    cursor?: FaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Cartao.divisoesDeGasto
   */
  export type Cartao$divisoesDeGastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    where?: DivisaoDeGastoWhereInput
    orderBy?: DivisaoDeGastoOrderByWithRelationInput | DivisaoDeGastoOrderByWithRelationInput[]
    cursor?: DivisaoDeGastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisaoDeGastoScalarFieldEnum | DivisaoDeGastoScalarFieldEnum[]
  }

  /**
   * Cartao without action
   */
  export type CartaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
  }


  /**
   * Model Gasto
   */

  export type AggregateGasto = {
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  export type GastoAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    usuarioId: number | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
    divisaoDeGastoId: number | null
  }

  export type GastoSumAggregateOutputType = {
    id: number | null
    valor: number | null
    usuarioId: number | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
    divisaoDeGastoId: number | null
  }

  export type GastoMinAggregateOutputType = {
    id: number | null
    valor: number | null
    descricao: string | null
    data: Date | null
    meioPagamento: $Enums.MeioDePagamento | null
    usuarioId: number | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
    divisaoDeGastoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GastoMaxAggregateOutputType = {
    id: number | null
    valor: number | null
    descricao: string | null
    data: Date | null
    meioPagamento: $Enums.MeioDePagamento | null
    usuarioId: number | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
    divisaoDeGastoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GastoCountAggregateOutputType = {
    id: number
    valor: number
    descricao: number
    data: number
    meioPagamento: number
    usuarioId: number
    numParcelas: number
    categoriaId: number
    cartaoId: number
    divisaoDeGastoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GastoAvgAggregateInputType = {
    id?: true
    valor?: true
    usuarioId?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    divisaoDeGastoId?: true
  }

  export type GastoSumAggregateInputType = {
    id?: true
    valor?: true
    usuarioId?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    divisaoDeGastoId?: true
  }

  export type GastoMinAggregateInputType = {
    id?: true
    valor?: true
    descricao?: true
    data?: true
    meioPagamento?: true
    usuarioId?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    divisaoDeGastoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GastoMaxAggregateInputType = {
    id?: true
    valor?: true
    descricao?: true
    data?: true
    meioPagamento?: true
    usuarioId?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    divisaoDeGastoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GastoCountAggregateInputType = {
    id?: true
    valor?: true
    descricao?: true
    data?: true
    meioPagamento?: true
    usuarioId?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    divisaoDeGastoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GastoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gasto to aggregate.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gastos
    **/
    _count?: true | GastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastoMaxAggregateInputType
  }

  export type GetGastoAggregateType<T extends GastoAggregateArgs> = {
        [P in keyof T & keyof AggregateGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasto[P]>
      : GetScalarType<T[P], AggregateGasto[P]>
  }




  export type GastoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithAggregationInput | GastoOrderByWithAggregationInput[]
    by: GastoScalarFieldEnum[] | GastoScalarFieldEnum
    having?: GastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastoCountAggregateInputType | true
    _avg?: GastoAvgAggregateInputType
    _sum?: GastoSumAggregateInputType
    _min?: GastoMinAggregateInputType
    _max?: GastoMaxAggregateInputType
  }

  export type GastoGroupByOutputType = {
    id: number
    valor: number
    descricao: string
    data: Date
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas: number
    categoriaId: number | null
    cartaoId: number | null
    divisaoDeGastoId: number | null
    createdAt: Date
    updatedAt: Date
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  type GetGastoGroupByPayload<T extends GastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastoGroupByOutputType[P]>
            : GetScalarType<T[P], GastoGroupByOutputType[P]>
        }
      >
    >


  export type GastoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    usuarioId?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    divisaoDeGastoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | Gasto$categoriaArgs<ExtArgs>
    cartao?: boolean | Gasto$cartaoArgs<ExtArgs>
    parcelas?: boolean | Gasto$parcelasArgs<ExtArgs>
    divisaoDeGasto?: boolean | Gasto$divisaoDeGastoArgs<ExtArgs>
    _count?: boolean | GastoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    usuarioId?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    divisaoDeGastoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | Gasto$categoriaArgs<ExtArgs>
    cartao?: boolean | Gasto$cartaoArgs<ExtArgs>
    divisaoDeGasto?: boolean | Gasto$divisaoDeGastoArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    usuarioId?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    divisaoDeGastoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | Gasto$categoriaArgs<ExtArgs>
    cartao?: boolean | Gasto$cartaoArgs<ExtArgs>
    divisaoDeGasto?: boolean | Gasto$divisaoDeGastoArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectScalar = {
    id?: boolean
    valor?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    usuarioId?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    divisaoDeGastoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GastoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valor" | "descricao" | "data" | "meioPagamento" | "usuarioId" | "numParcelas" | "categoriaId" | "cartaoId" | "divisaoDeGastoId" | "createdAt" | "updatedAt", ExtArgs["result"]["gasto"]>
  export type GastoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | Gasto$categoriaArgs<ExtArgs>
    cartao?: boolean | Gasto$cartaoArgs<ExtArgs>
    parcelas?: boolean | Gasto$parcelasArgs<ExtArgs>
    divisaoDeGasto?: boolean | Gasto$divisaoDeGastoArgs<ExtArgs>
    _count?: boolean | GastoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GastoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | Gasto$categoriaArgs<ExtArgs>
    cartao?: boolean | Gasto$cartaoArgs<ExtArgs>
    divisaoDeGasto?: boolean | Gasto$divisaoDeGastoArgs<ExtArgs>
  }
  export type GastoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | Gasto$categoriaArgs<ExtArgs>
    cartao?: boolean | Gasto$cartaoArgs<ExtArgs>
    divisaoDeGasto?: boolean | Gasto$divisaoDeGastoArgs<ExtArgs>
  }

  export type $GastoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gasto"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      cartao: Prisma.$CartaoPayload<ExtArgs> | null
      parcelas: Prisma.$ParcelaPayload<ExtArgs>[]
      divisaoDeGasto: Prisma.$DivisaoDeGastoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valor: number
      descricao: string
      data: Date
      meioPagamento: $Enums.MeioDePagamento
      usuarioId: number
      numParcelas: number
      categoriaId: number | null
      cartaoId: number | null
      divisaoDeGastoId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gasto"]>
    composites: {}
  }

  type GastoGetPayload<S extends boolean | null | undefined | GastoDefaultArgs> = $Result.GetResult<Prisma.$GastoPayload, S>

  type GastoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GastoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastoCountAggregateInputType | true
    }

  export interface GastoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gasto'], meta: { name: 'Gasto' } }
    /**
     * Find zero or one Gasto that matches the filter.
     * @param {GastoFindUniqueArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastoFindUniqueArgs>(args: SelectSubset<T, GastoFindUniqueArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gasto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastoFindUniqueOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastoFindUniqueOrThrowArgs>(args: SelectSubset<T, GastoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastoFindFirstArgs>(args?: SelectSubset<T, GastoFindFirstArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastoFindFirstOrThrowArgs>(args?: SelectSubset<T, GastoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gasto.findMany()
     * 
     * // Get first 10 Gastos
     * const gastos = await prisma.gasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastoWithIdOnly = await prisma.gasto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GastoFindManyArgs>(args?: SelectSubset<T, GastoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gasto.
     * @param {GastoCreateArgs} args - Arguments to create a Gasto.
     * @example
     * // Create one Gasto
     * const Gasto = await prisma.gasto.create({
     *   data: {
     *     // ... data to create a Gasto
     *   }
     * })
     * 
     */
    create<T extends GastoCreateArgs>(args: SelectSubset<T, GastoCreateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gastos.
     * @param {GastoCreateManyArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GastoCreateManyArgs>(args?: SelectSubset<T, GastoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gastos and returns the data saved in the database.
     * @param {GastoCreateManyAndReturnArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GastoCreateManyAndReturnArgs>(args?: SelectSubset<T, GastoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gasto.
     * @param {GastoDeleteArgs} args - Arguments to delete one Gasto.
     * @example
     * // Delete one Gasto
     * const Gasto = await prisma.gasto.delete({
     *   where: {
     *     // ... filter to delete one Gasto
     *   }
     * })
     * 
     */
    delete<T extends GastoDeleteArgs>(args: SelectSubset<T, GastoDeleteArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gasto.
     * @param {GastoUpdateArgs} args - Arguments to update one Gasto.
     * @example
     * // Update one Gasto
     * const gasto = await prisma.gasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GastoUpdateArgs>(args: SelectSubset<T, GastoUpdateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gastos.
     * @param {GastoDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GastoDeleteManyArgs>(args?: SelectSubset<T, GastoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GastoUpdateManyArgs>(args: SelectSubset<T, GastoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos and returns the data updated in the database.
     * @param {GastoUpdateManyAndReturnArgs} args - Arguments to update many Gastos.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.updateManyAndReturn({
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
    updateManyAndReturn<T extends GastoUpdateManyAndReturnArgs>(args: SelectSubset<T, GastoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gasto.
     * @param {GastoUpsertArgs} args - Arguments to update or create a Gasto.
     * @example
     * // Update or create a Gasto
     * const gasto = await prisma.gasto.upsert({
     *   create: {
     *     // ... data to create a Gasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gasto we want to update
     *   }
     * })
     */
    upsert<T extends GastoUpsertArgs>(args: SelectSubset<T, GastoUpsertArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gasto.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends GastoCountArgs>(
      args?: Subset<T, GastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastoAggregateArgs>(args: Subset<T, GastoAggregateArgs>): Prisma.PrismaPromise<GetGastoAggregateType<T>>

    /**
     * Group by Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoGroupByArgs} args - Group by arguments.
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
      T extends GastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastoGroupByArgs['orderBy'] }
        : { orderBy?: GastoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gasto model
   */
  readonly fields: GastoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends Gasto$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Gasto$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cartao<T extends Gasto$cartaoArgs<ExtArgs> = {}>(args?: Subset<T, Gasto$cartaoArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parcelas<T extends Gasto$parcelasArgs<ExtArgs> = {}>(args?: Subset<T, Gasto$parcelasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    divisaoDeGasto<T extends Gasto$divisaoDeGastoArgs<ExtArgs> = {}>(args?: Subset<T, Gasto$divisaoDeGastoArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Gasto model
   */
  interface GastoFieldRefs {
    readonly id: FieldRef<"Gasto", 'Int'>
    readonly valor: FieldRef<"Gasto", 'Float'>
    readonly descricao: FieldRef<"Gasto", 'String'>
    readonly data: FieldRef<"Gasto", 'DateTime'>
    readonly meioPagamento: FieldRef<"Gasto", 'MeioDePagamento'>
    readonly usuarioId: FieldRef<"Gasto", 'Int'>
    readonly numParcelas: FieldRef<"Gasto", 'Int'>
    readonly categoriaId: FieldRef<"Gasto", 'Int'>
    readonly cartaoId: FieldRef<"Gasto", 'Int'>
    readonly divisaoDeGastoId: FieldRef<"Gasto", 'Int'>
    readonly createdAt: FieldRef<"Gasto", 'DateTime'>
    readonly updatedAt: FieldRef<"Gasto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gasto findUnique
   */
  export type GastoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findUniqueOrThrow
   */
  export type GastoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findFirst
   */
  export type GastoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findFirstOrThrow
   */
  export type GastoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findMany
   */
  export type GastoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gastos to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto create
   */
  export type GastoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to create a Gasto.
     */
    data: XOR<GastoCreateInput, GastoUncheckedCreateInput>
  }

  /**
   * Gasto createMany
   */
  export type GastoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gasto createManyAndReturn
   */
  export type GastoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto update
   */
  export type GastoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to update a Gasto.
     */
    data: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
    /**
     * Choose, which Gasto to update.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto updateMany
   */
  export type GastoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
  }

  /**
   * Gasto updateManyAndReturn
   */
  export type GastoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto upsert
   */
  export type GastoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The filter to search for the Gasto to update in case it exists.
     */
    where: GastoWhereUniqueInput
    /**
     * In case the Gasto found by the `where` argument doesn't exist, create a new Gasto with this data.
     */
    create: XOR<GastoCreateInput, GastoUncheckedCreateInput>
    /**
     * In case the Gasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
  }

  /**
   * Gasto delete
   */
  export type GastoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter which Gasto to delete.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto deleteMany
   */
  export type GastoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gastos to delete
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to delete.
     */
    limit?: number
  }

  /**
   * Gasto.categoria
   */
  export type Gasto$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Gasto.cartao
   */
  export type Gasto$cartaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    where?: CartaoWhereInput
  }

  /**
   * Gasto.parcelas
   */
  export type Gasto$parcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    where?: ParcelaWhereInput
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    cursor?: ParcelaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Gasto.divisaoDeGasto
   */
  export type Gasto$divisaoDeGastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    where?: DivisaoDeGastoWhereInput
  }

  /**
   * Gasto without action
   */
  export type GastoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
  }


  /**
   * Model Parcela
   */

  export type AggregateParcela = {
    _count: ParcelaCountAggregateOutputType | null
    _avg: ParcelaAvgAggregateOutputType | null
    _sum: ParcelaSumAggregateOutputType | null
    _min: ParcelaMinAggregateOutputType | null
    _max: ParcelaMaxAggregateOutputType | null
  }

  export type ParcelaAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    numeroParcela: number | null
    totalParcelas: number | null
    gastoId: number | null
    faturaId: number | null
  }

  export type ParcelaSumAggregateOutputType = {
    id: number | null
    valor: number | null
    numeroParcela: number | null
    totalParcelas: number | null
    gastoId: number | null
    faturaId: number | null
  }

  export type ParcelaMinAggregateOutputType = {
    id: number | null
    valor: number | null
    dataVencimento: Date | null
    paga: boolean | null
    numeroParcela: number | null
    totalParcelas: number | null
    gastoId: number | null
    faturaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelaMaxAggregateOutputType = {
    id: number | null
    valor: number | null
    dataVencimento: Date | null
    paga: boolean | null
    numeroParcela: number | null
    totalParcelas: number | null
    gastoId: number | null
    faturaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelaCountAggregateOutputType = {
    id: number
    valor: number
    dataVencimento: number
    paga: number
    numeroParcela: number
    totalParcelas: number
    gastoId: number
    faturaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParcelaAvgAggregateInputType = {
    id?: true
    valor?: true
    numeroParcela?: true
    totalParcelas?: true
    gastoId?: true
    faturaId?: true
  }

  export type ParcelaSumAggregateInputType = {
    id?: true
    valor?: true
    numeroParcela?: true
    totalParcelas?: true
    gastoId?: true
    faturaId?: true
  }

  export type ParcelaMinAggregateInputType = {
    id?: true
    valor?: true
    dataVencimento?: true
    paga?: true
    numeroParcela?: true
    totalParcelas?: true
    gastoId?: true
    faturaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelaMaxAggregateInputType = {
    id?: true
    valor?: true
    dataVencimento?: true
    paga?: true
    numeroParcela?: true
    totalParcelas?: true
    gastoId?: true
    faturaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelaCountAggregateInputType = {
    id?: true
    valor?: true
    dataVencimento?: true
    paga?: true
    numeroParcela?: true
    totalParcelas?: true
    gastoId?: true
    faturaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParcelaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcela to aggregate.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcelas
    **/
    _count?: true | ParcelaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelaMaxAggregateInputType
  }

  export type GetParcelaAggregateType<T extends ParcelaAggregateArgs> = {
        [P in keyof T & keyof AggregateParcela]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcela[P]>
      : GetScalarType<T[P], AggregateParcela[P]>
  }




  export type ParcelaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelaWhereInput
    orderBy?: ParcelaOrderByWithAggregationInput | ParcelaOrderByWithAggregationInput[]
    by: ParcelaScalarFieldEnum[] | ParcelaScalarFieldEnum
    having?: ParcelaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelaCountAggregateInputType | true
    _avg?: ParcelaAvgAggregateInputType
    _sum?: ParcelaSumAggregateInputType
    _min?: ParcelaMinAggregateInputType
    _max?: ParcelaMaxAggregateInputType
  }

  export type ParcelaGroupByOutputType = {
    id: number
    valor: number
    dataVencimento: Date
    paga: boolean
    numeroParcela: number
    totalParcelas: number
    gastoId: number | null
    faturaId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ParcelaCountAggregateOutputType | null
    _avg: ParcelaAvgAggregateOutputType | null
    _sum: ParcelaSumAggregateOutputType | null
    _min: ParcelaMinAggregateOutputType | null
    _max: ParcelaMaxAggregateOutputType | null
  }

  type GetParcelaGroupByPayload<T extends ParcelaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelaGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelaGroupByOutputType[P]>
        }
      >
    >


  export type ParcelaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    dataVencimento?: boolean
    paga?: boolean
    numeroParcela?: boolean
    totalParcelas?: boolean
    gastoId?: boolean
    faturaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gasto?: boolean | Parcela$gastoArgs<ExtArgs>
    fatura?: boolean | Parcela$faturaArgs<ExtArgs>
  }, ExtArgs["result"]["parcela"]>

  export type ParcelaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    dataVencimento?: boolean
    paga?: boolean
    numeroParcela?: boolean
    totalParcelas?: boolean
    gastoId?: boolean
    faturaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gasto?: boolean | Parcela$gastoArgs<ExtArgs>
    fatura?: boolean | Parcela$faturaArgs<ExtArgs>
  }, ExtArgs["result"]["parcela"]>

  export type ParcelaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    dataVencimento?: boolean
    paga?: boolean
    numeroParcela?: boolean
    totalParcelas?: boolean
    gastoId?: boolean
    faturaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gasto?: boolean | Parcela$gastoArgs<ExtArgs>
    fatura?: boolean | Parcela$faturaArgs<ExtArgs>
  }, ExtArgs["result"]["parcela"]>

  export type ParcelaSelectScalar = {
    id?: boolean
    valor?: boolean
    dataVencimento?: boolean
    paga?: boolean
    numeroParcela?: boolean
    totalParcelas?: boolean
    gastoId?: boolean
    faturaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParcelaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valor" | "dataVencimento" | "paga" | "numeroParcela" | "totalParcelas" | "gastoId" | "faturaId" | "createdAt" | "updatedAt", ExtArgs["result"]["parcela"]>
  export type ParcelaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gasto?: boolean | Parcela$gastoArgs<ExtArgs>
    fatura?: boolean | Parcela$faturaArgs<ExtArgs>
  }
  export type ParcelaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gasto?: boolean | Parcela$gastoArgs<ExtArgs>
    fatura?: boolean | Parcela$faturaArgs<ExtArgs>
  }
  export type ParcelaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gasto?: boolean | Parcela$gastoArgs<ExtArgs>
    fatura?: boolean | Parcela$faturaArgs<ExtArgs>
  }

  export type $ParcelaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parcela"
    objects: {
      gasto: Prisma.$GastoPayload<ExtArgs> | null
      fatura: Prisma.$FaturaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valor: number
      dataVencimento: Date
      paga: boolean
      numeroParcela: number
      totalParcelas: number
      gastoId: number | null
      faturaId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parcela"]>
    composites: {}
  }

  type ParcelaGetPayload<S extends boolean | null | undefined | ParcelaDefaultArgs> = $Result.GetResult<Prisma.$ParcelaPayload, S>

  type ParcelaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParcelaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParcelaCountAggregateInputType | true
    }

  export interface ParcelaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parcela'], meta: { name: 'Parcela' } }
    /**
     * Find zero or one Parcela that matches the filter.
     * @param {ParcelaFindUniqueArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParcelaFindUniqueArgs>(args: SelectSubset<T, ParcelaFindUniqueArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parcela that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParcelaFindUniqueOrThrowArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParcelaFindUniqueOrThrowArgs>(args: SelectSubset<T, ParcelaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcela that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindFirstArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParcelaFindFirstArgs>(args?: SelectSubset<T, ParcelaFindFirstArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcela that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindFirstOrThrowArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParcelaFindFirstOrThrowArgs>(args?: SelectSubset<T, ParcelaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcelas
     * const parcelas = await prisma.parcela.findMany()
     * 
     * // Get first 10 Parcelas
     * const parcelas = await prisma.parcela.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelaWithIdOnly = await prisma.parcela.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParcelaFindManyArgs>(args?: SelectSubset<T, ParcelaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parcela.
     * @param {ParcelaCreateArgs} args - Arguments to create a Parcela.
     * @example
     * // Create one Parcela
     * const Parcela = await prisma.parcela.create({
     *   data: {
     *     // ... data to create a Parcela
     *   }
     * })
     * 
     */
    create<T extends ParcelaCreateArgs>(args: SelectSubset<T, ParcelaCreateArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcelas.
     * @param {ParcelaCreateManyArgs} args - Arguments to create many Parcelas.
     * @example
     * // Create many Parcelas
     * const parcela = await prisma.parcela.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParcelaCreateManyArgs>(args?: SelectSubset<T, ParcelaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parcelas and returns the data saved in the database.
     * @param {ParcelaCreateManyAndReturnArgs} args - Arguments to create many Parcelas.
     * @example
     * // Create many Parcelas
     * const parcela = await prisma.parcela.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parcelas and only return the `id`
     * const parcelaWithIdOnly = await prisma.parcela.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParcelaCreateManyAndReturnArgs>(args?: SelectSubset<T, ParcelaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parcela.
     * @param {ParcelaDeleteArgs} args - Arguments to delete one Parcela.
     * @example
     * // Delete one Parcela
     * const Parcela = await prisma.parcela.delete({
     *   where: {
     *     // ... filter to delete one Parcela
     *   }
     * })
     * 
     */
    delete<T extends ParcelaDeleteArgs>(args: SelectSubset<T, ParcelaDeleteArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parcela.
     * @param {ParcelaUpdateArgs} args - Arguments to update one Parcela.
     * @example
     * // Update one Parcela
     * const parcela = await prisma.parcela.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParcelaUpdateArgs>(args: SelectSubset<T, ParcelaUpdateArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcelas.
     * @param {ParcelaDeleteManyArgs} args - Arguments to filter Parcelas to delete.
     * @example
     * // Delete a few Parcelas
     * const { count } = await prisma.parcela.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParcelaDeleteManyArgs>(args?: SelectSubset<T, ParcelaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcelas
     * const parcela = await prisma.parcela.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParcelaUpdateManyArgs>(args: SelectSubset<T, ParcelaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcelas and returns the data updated in the database.
     * @param {ParcelaUpdateManyAndReturnArgs} args - Arguments to update many Parcelas.
     * @example
     * // Update many Parcelas
     * const parcela = await prisma.parcela.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parcelas and only return the `id`
     * const parcelaWithIdOnly = await prisma.parcela.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParcelaUpdateManyAndReturnArgs>(args: SelectSubset<T, ParcelaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parcela.
     * @param {ParcelaUpsertArgs} args - Arguments to update or create a Parcela.
     * @example
     * // Update or create a Parcela
     * const parcela = await prisma.parcela.upsert({
     *   create: {
     *     // ... data to create a Parcela
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcela we want to update
     *   }
     * })
     */
    upsert<T extends ParcelaUpsertArgs>(args: SelectSubset<T, ParcelaUpsertArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaCountArgs} args - Arguments to filter Parcelas to count.
     * @example
     * // Count the number of Parcelas
     * const count = await prisma.parcela.count({
     *   where: {
     *     // ... the filter for the Parcelas we want to count
     *   }
     * })
    **/
    count<T extends ParcelaCountArgs>(
      args?: Subset<T, ParcelaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParcelaAggregateArgs>(args: Subset<T, ParcelaAggregateArgs>): Prisma.PrismaPromise<GetParcelaAggregateType<T>>

    /**
     * Group by Parcela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaGroupByArgs} args - Group by arguments.
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
      T extends ParcelaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelaGroupByArgs['orderBy'] }
        : { orderBy?: ParcelaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParcelaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parcela model
   */
  readonly fields: ParcelaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcela.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gasto<T extends Parcela$gastoArgs<ExtArgs> = {}>(args?: Subset<T, Parcela$gastoArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fatura<T extends Parcela$faturaArgs<ExtArgs> = {}>(args?: Subset<T, Parcela$faturaArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Parcela model
   */
  interface ParcelaFieldRefs {
    readonly id: FieldRef<"Parcela", 'Int'>
    readonly valor: FieldRef<"Parcela", 'Float'>
    readonly dataVencimento: FieldRef<"Parcela", 'DateTime'>
    readonly paga: FieldRef<"Parcela", 'Boolean'>
    readonly numeroParcela: FieldRef<"Parcela", 'Int'>
    readonly totalParcelas: FieldRef<"Parcela", 'Int'>
    readonly gastoId: FieldRef<"Parcela", 'Int'>
    readonly faturaId: FieldRef<"Parcela", 'Int'>
    readonly createdAt: FieldRef<"Parcela", 'DateTime'>
    readonly updatedAt: FieldRef<"Parcela", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parcela findUnique
   */
  export type ParcelaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela findUniqueOrThrow
   */
  export type ParcelaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela findFirst
   */
  export type ParcelaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcelas.
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcelas.
     */
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Parcela findFirstOrThrow
   */
  export type ParcelaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcelas.
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcelas.
     */
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Parcela findMany
   */
  export type ParcelaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcelas to fetch.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcelas.
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Parcela create
   */
  export type ParcelaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * The data needed to create a Parcela.
     */
    data: XOR<ParcelaCreateInput, ParcelaUncheckedCreateInput>
  }

  /**
   * Parcela createMany
   */
  export type ParcelaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcelas.
     */
    data: ParcelaCreateManyInput | ParcelaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parcela createManyAndReturn
   */
  export type ParcelaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * The data used to create many Parcelas.
     */
    data: ParcelaCreateManyInput | ParcelaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcela update
   */
  export type ParcelaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * The data needed to update a Parcela.
     */
    data: XOR<ParcelaUpdateInput, ParcelaUncheckedUpdateInput>
    /**
     * Choose, which Parcela to update.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela updateMany
   */
  export type ParcelaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcelas.
     */
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyInput>
    /**
     * Filter which Parcelas to update
     */
    where?: ParcelaWhereInput
    /**
     * Limit how many Parcelas to update.
     */
    limit?: number
  }

  /**
   * Parcela updateManyAndReturn
   */
  export type ParcelaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * The data used to update Parcelas.
     */
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyInput>
    /**
     * Filter which Parcelas to update
     */
    where?: ParcelaWhereInput
    /**
     * Limit how many Parcelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcela upsert
   */
  export type ParcelaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * The filter to search for the Parcela to update in case it exists.
     */
    where: ParcelaWhereUniqueInput
    /**
     * In case the Parcela found by the `where` argument doesn't exist, create a new Parcela with this data.
     */
    create: XOR<ParcelaCreateInput, ParcelaUncheckedCreateInput>
    /**
     * In case the Parcela was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelaUpdateInput, ParcelaUncheckedUpdateInput>
  }

  /**
   * Parcela delete
   */
  export type ParcelaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter which Parcela to delete.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela deleteMany
   */
  export type ParcelaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcelas to delete
     */
    where?: ParcelaWhereInput
    /**
     * Limit how many Parcelas to delete.
     */
    limit?: number
  }

  /**
   * Parcela.gasto
   */
  export type Parcela$gastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
  }

  /**
   * Parcela.fatura
   */
  export type Parcela$faturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    where?: FaturaWhereInput
  }

  /**
   * Parcela without action
   */
  export type ParcelaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
  }


  /**
   * Model Fatura
   */

  export type AggregateFatura = {
    _count: FaturaCountAggregateOutputType | null
    _avg: FaturaAvgAggregateOutputType | null
    _sum: FaturaSumAggregateOutputType | null
    _min: FaturaMinAggregateOutputType | null
    _max: FaturaMaxAggregateOutputType | null
  }

  export type FaturaAvgAggregateOutputType = {
    id: number | null
    cartaoId: number | null
  }

  export type FaturaSumAggregateOutputType = {
    id: number | null
    cartaoId: number | null
  }

  export type FaturaMinAggregateOutputType = {
    id: number | null
    cartaoId: number | null
    mesReferente: Date | null
    vencimento: Date | null
    paga: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaturaMaxAggregateOutputType = {
    id: number | null
    cartaoId: number | null
    mesReferente: Date | null
    vencimento: Date | null
    paga: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaturaCountAggregateOutputType = {
    id: number
    cartaoId: number
    mesReferente: number
    vencimento: number
    paga: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FaturaAvgAggregateInputType = {
    id?: true
    cartaoId?: true
  }

  export type FaturaSumAggregateInputType = {
    id?: true
    cartaoId?: true
  }

  export type FaturaMinAggregateInputType = {
    id?: true
    cartaoId?: true
    mesReferente?: true
    vencimento?: true
    paga?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaturaMaxAggregateInputType = {
    id?: true
    cartaoId?: true
    mesReferente?: true
    vencimento?: true
    paga?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaturaCountAggregateInputType = {
    id?: true
    cartaoId?: true
    mesReferente?: true
    vencimento?: true
    paga?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FaturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fatura to aggregate.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faturas
    **/
    _count?: true | FaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaturaMaxAggregateInputType
  }

  export type GetFaturaAggregateType<T extends FaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFatura[P]>
      : GetScalarType<T[P], AggregateFatura[P]>
  }




  export type FaturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaturaWhereInput
    orderBy?: FaturaOrderByWithAggregationInput | FaturaOrderByWithAggregationInput[]
    by: FaturaScalarFieldEnum[] | FaturaScalarFieldEnum
    having?: FaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaturaCountAggregateInputType | true
    _avg?: FaturaAvgAggregateInputType
    _sum?: FaturaSumAggregateInputType
    _min?: FaturaMinAggregateInputType
    _max?: FaturaMaxAggregateInputType
  }

  export type FaturaGroupByOutputType = {
    id: number
    cartaoId: number
    mesReferente: Date
    vencimento: Date
    paga: boolean
    createdAt: Date
    updatedAt: Date
    _count: FaturaCountAggregateOutputType | null
    _avg: FaturaAvgAggregateOutputType | null
    _sum: FaturaSumAggregateOutputType | null
    _min: FaturaMinAggregateOutputType | null
    _max: FaturaMaxAggregateOutputType | null
  }

  type GetFaturaGroupByPayload<T extends FaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaturaGroupByOutputType[P]>
            : GetScalarType<T[P], FaturaGroupByOutputType[P]>
        }
      >
    >


  export type FaturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartaoId?: boolean
    mesReferente?: boolean
    vencimento?: boolean
    paga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cartao?: boolean | CartaoDefaultArgs<ExtArgs>
    parcelas?: boolean | Fatura$parcelasArgs<ExtArgs>
    _count?: boolean | FaturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fatura"]>

  export type FaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartaoId?: boolean
    mesReferente?: boolean
    vencimento?: boolean
    paga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cartao?: boolean | CartaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fatura"]>

  export type FaturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartaoId?: boolean
    mesReferente?: boolean
    vencimento?: boolean
    paga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cartao?: boolean | CartaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fatura"]>

  export type FaturaSelectScalar = {
    id?: boolean
    cartaoId?: boolean
    mesReferente?: boolean
    vencimento?: boolean
    paga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FaturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartaoId" | "mesReferente" | "vencimento" | "paga" | "createdAt" | "updatedAt", ExtArgs["result"]["fatura"]>
  export type FaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartao?: boolean | CartaoDefaultArgs<ExtArgs>
    parcelas?: boolean | Fatura$parcelasArgs<ExtArgs>
    _count?: boolean | FaturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartao?: boolean | CartaoDefaultArgs<ExtArgs>
  }
  export type FaturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartao?: boolean | CartaoDefaultArgs<ExtArgs>
  }

  export type $FaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fatura"
    objects: {
      cartao: Prisma.$CartaoPayload<ExtArgs>
      parcelas: Prisma.$ParcelaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartaoId: number
      mesReferente: Date
      vencimento: Date
      paga: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fatura"]>
    composites: {}
  }

  type FaturaGetPayload<S extends boolean | null | undefined | FaturaDefaultArgs> = $Result.GetResult<Prisma.$FaturaPayload, S>

  type FaturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaturaCountAggregateInputType | true
    }

  export interface FaturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fatura'], meta: { name: 'Fatura' } }
    /**
     * Find zero or one Fatura that matches the filter.
     * @param {FaturaFindUniqueArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaturaFindUniqueArgs>(args: SelectSubset<T, FaturaFindUniqueArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fatura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaturaFindUniqueOrThrowArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fatura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaFindFirstArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaturaFindFirstArgs>(args?: SelectSubset<T, FaturaFindFirstArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fatura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaFindFirstOrThrowArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faturas
     * const faturas = await prisma.fatura.findMany()
     * 
     * // Get first 10 Faturas
     * const faturas = await prisma.fatura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faturaWithIdOnly = await prisma.fatura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaturaFindManyArgs>(args?: SelectSubset<T, FaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fatura.
     * @param {FaturaCreateArgs} args - Arguments to create a Fatura.
     * @example
     * // Create one Fatura
     * const Fatura = await prisma.fatura.create({
     *   data: {
     *     // ... data to create a Fatura
     *   }
     * })
     * 
     */
    create<T extends FaturaCreateArgs>(args: SelectSubset<T, FaturaCreateArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faturas.
     * @param {FaturaCreateManyArgs} args - Arguments to create many Faturas.
     * @example
     * // Create many Faturas
     * const fatura = await prisma.fatura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaturaCreateManyArgs>(args?: SelectSubset<T, FaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faturas and returns the data saved in the database.
     * @param {FaturaCreateManyAndReturnArgs} args - Arguments to create many Faturas.
     * @example
     * // Create many Faturas
     * const fatura = await prisma.fatura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faturas and only return the `id`
     * const faturaWithIdOnly = await prisma.fatura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fatura.
     * @param {FaturaDeleteArgs} args - Arguments to delete one Fatura.
     * @example
     * // Delete one Fatura
     * const Fatura = await prisma.fatura.delete({
     *   where: {
     *     // ... filter to delete one Fatura
     *   }
     * })
     * 
     */
    delete<T extends FaturaDeleteArgs>(args: SelectSubset<T, FaturaDeleteArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fatura.
     * @param {FaturaUpdateArgs} args - Arguments to update one Fatura.
     * @example
     * // Update one Fatura
     * const fatura = await prisma.fatura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaturaUpdateArgs>(args: SelectSubset<T, FaturaUpdateArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faturas.
     * @param {FaturaDeleteManyArgs} args - Arguments to filter Faturas to delete.
     * @example
     * // Delete a few Faturas
     * const { count } = await prisma.fatura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaturaDeleteManyArgs>(args?: SelectSubset<T, FaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faturas
     * const fatura = await prisma.fatura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaturaUpdateManyArgs>(args: SelectSubset<T, FaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faturas and returns the data updated in the database.
     * @param {FaturaUpdateManyAndReturnArgs} args - Arguments to update many Faturas.
     * @example
     * // Update many Faturas
     * const fatura = await prisma.fatura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faturas and only return the `id`
     * const faturaWithIdOnly = await prisma.fatura.updateManyAndReturn({
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
    updateManyAndReturn<T extends FaturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FaturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fatura.
     * @param {FaturaUpsertArgs} args - Arguments to update or create a Fatura.
     * @example
     * // Update or create a Fatura
     * const fatura = await prisma.fatura.upsert({
     *   create: {
     *     // ... data to create a Fatura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fatura we want to update
     *   }
     * })
     */
    upsert<T extends FaturaUpsertArgs>(args: SelectSubset<T, FaturaUpsertArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaCountArgs} args - Arguments to filter Faturas to count.
     * @example
     * // Count the number of Faturas
     * const count = await prisma.fatura.count({
     *   where: {
     *     // ... the filter for the Faturas we want to count
     *   }
     * })
    **/
    count<T extends FaturaCountArgs>(
      args?: Subset<T, FaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaturaAggregateArgs>(args: Subset<T, FaturaAggregateArgs>): Prisma.PrismaPromise<GetFaturaAggregateType<T>>

    /**
     * Group by Fatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaGroupByArgs} args - Group by arguments.
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
      T extends FaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaturaGroupByArgs['orderBy'] }
        : { orderBy?: FaturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fatura model
   */
  readonly fields: FaturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fatura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cartao<T extends CartaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartaoDefaultArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parcelas<T extends Fatura$parcelasArgs<ExtArgs> = {}>(args?: Subset<T, Fatura$parcelasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fatura model
   */
  interface FaturaFieldRefs {
    readonly id: FieldRef<"Fatura", 'Int'>
    readonly cartaoId: FieldRef<"Fatura", 'Int'>
    readonly mesReferente: FieldRef<"Fatura", 'DateTime'>
    readonly vencimento: FieldRef<"Fatura", 'DateTime'>
    readonly paga: FieldRef<"Fatura", 'Boolean'>
    readonly createdAt: FieldRef<"Fatura", 'DateTime'>
    readonly updatedAt: FieldRef<"Fatura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fatura findUnique
   */
  export type FaturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura findUniqueOrThrow
   */
  export type FaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura findFirst
   */
  export type FaturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faturas.
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faturas.
     */
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Fatura findFirstOrThrow
   */
  export type FaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faturas.
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faturas.
     */
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Fatura findMany
   */
  export type FaturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Faturas to fetch.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faturas.
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Fatura create
   */
  export type FaturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fatura.
     */
    data: XOR<FaturaCreateInput, FaturaUncheckedCreateInput>
  }

  /**
   * Fatura createMany
   */
  export type FaturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faturas.
     */
    data: FaturaCreateManyInput | FaturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fatura createManyAndReturn
   */
  export type FaturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * The data used to create many Faturas.
     */
    data: FaturaCreateManyInput | FaturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fatura update
   */
  export type FaturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fatura.
     */
    data: XOR<FaturaUpdateInput, FaturaUncheckedUpdateInput>
    /**
     * Choose, which Fatura to update.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura updateMany
   */
  export type FaturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faturas.
     */
    data: XOR<FaturaUpdateManyMutationInput, FaturaUncheckedUpdateManyInput>
    /**
     * Filter which Faturas to update
     */
    where?: FaturaWhereInput
    /**
     * Limit how many Faturas to update.
     */
    limit?: number
  }

  /**
   * Fatura updateManyAndReturn
   */
  export type FaturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * The data used to update Faturas.
     */
    data: XOR<FaturaUpdateManyMutationInput, FaturaUncheckedUpdateManyInput>
    /**
     * Filter which Faturas to update
     */
    where?: FaturaWhereInput
    /**
     * Limit how many Faturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fatura upsert
   */
  export type FaturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fatura to update in case it exists.
     */
    where: FaturaWhereUniqueInput
    /**
     * In case the Fatura found by the `where` argument doesn't exist, create a new Fatura with this data.
     */
    create: XOR<FaturaCreateInput, FaturaUncheckedCreateInput>
    /**
     * In case the Fatura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaturaUpdateInput, FaturaUncheckedUpdateInput>
  }

  /**
   * Fatura delete
   */
  export type FaturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter which Fatura to delete.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura deleteMany
   */
  export type FaturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faturas to delete
     */
    where?: FaturaWhereInput
    /**
     * Limit how many Faturas to delete.
     */
    limit?: number
  }

  /**
   * Fatura.parcelas
   */
  export type Fatura$parcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    where?: ParcelaWhereInput
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    cursor?: ParcelaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Fatura without action
   */
  export type FaturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fatura
     */
    omit?: FaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
  }


  /**
   * Model Relatorio
   */

  export type AggregateRelatorio = {
    _count: RelatorioCountAggregateOutputType | null
    _avg: RelatorioAvgAggregateOutputType | null
    _sum: RelatorioSumAggregateOutputType | null
    _min: RelatorioMinAggregateOutputType | null
    _max: RelatorioMaxAggregateOutputType | null
  }

  export type RelatorioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type RelatorioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type RelatorioMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    dataGeracao: Date | null
    tipo: $Enums.TipoRelatorio | null
    inicioPeriodo: Date | null
    fimPeriodo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelatorioMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    dataGeracao: Date | null
    tipo: $Enums.TipoRelatorio | null
    inicioPeriodo: Date | null
    fimPeriodo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelatorioCountAggregateOutputType = {
    id: number
    usuarioId: number
    dataGeracao: number
    tipo: number
    dados: number
    inicioPeriodo: number
    fimPeriodo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RelatorioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type RelatorioSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type RelatorioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    dataGeracao?: true
    tipo?: true
    inicioPeriodo?: true
    fimPeriodo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelatorioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    dataGeracao?: true
    tipo?: true
    inicioPeriodo?: true
    fimPeriodo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelatorioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    dataGeracao?: true
    tipo?: true
    dados?: true
    inicioPeriodo?: true
    fimPeriodo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RelatorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relatorio to aggregate.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relatorios
    **/
    _count?: true | RelatorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatorioMaxAggregateInputType
  }

  export type GetRelatorioAggregateType<T extends RelatorioAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatorio[P]>
      : GetScalarType<T[P], AggregateRelatorio[P]>
  }




  export type RelatorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioWhereInput
    orderBy?: RelatorioOrderByWithAggregationInput | RelatorioOrderByWithAggregationInput[]
    by: RelatorioScalarFieldEnum[] | RelatorioScalarFieldEnum
    having?: RelatorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatorioCountAggregateInputType | true
    _avg?: RelatorioAvgAggregateInputType
    _sum?: RelatorioSumAggregateInputType
    _min?: RelatorioMinAggregateInputType
    _max?: RelatorioMaxAggregateInputType
  }

  export type RelatorioGroupByOutputType = {
    id: number
    usuarioId: number
    dataGeracao: Date
    tipo: $Enums.TipoRelatorio
    dados: JsonValue
    inicioPeriodo: Date | null
    fimPeriodo: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RelatorioCountAggregateOutputType | null
    _avg: RelatorioAvgAggregateOutputType | null
    _sum: RelatorioSumAggregateOutputType | null
    _min: RelatorioMinAggregateOutputType | null
    _max: RelatorioMaxAggregateOutputType | null
  }

  type GetRelatorioGroupByPayload<T extends RelatorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatorioGroupByOutputType[P]>
            : GetScalarType<T[P], RelatorioGroupByOutputType[P]>
        }
      >
    >


  export type RelatorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    dataGeracao?: boolean
    tipo?: boolean
    dados?: boolean
    inicioPeriodo?: boolean
    fimPeriodo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorio"]>

  export type RelatorioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    dataGeracao?: boolean
    tipo?: boolean
    dados?: boolean
    inicioPeriodo?: boolean
    fimPeriodo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorio"]>

  export type RelatorioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    dataGeracao?: boolean
    tipo?: boolean
    dados?: boolean
    inicioPeriodo?: boolean
    fimPeriodo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorio"]>

  export type RelatorioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    dataGeracao?: boolean
    tipo?: boolean
    dados?: boolean
    inicioPeriodo?: boolean
    fimPeriodo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RelatorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "dataGeracao" | "tipo" | "dados" | "inicioPeriodo" | "fimPeriodo" | "createdAt" | "updatedAt", ExtArgs["result"]["relatorio"]>
  export type RelatorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RelatorioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RelatorioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RelatorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relatorio"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      dataGeracao: Date
      tipo: $Enums.TipoRelatorio
      dados: Prisma.JsonValue
      inicioPeriodo: Date | null
      fimPeriodo: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["relatorio"]>
    composites: {}
  }

  type RelatorioGetPayload<S extends boolean | null | undefined | RelatorioDefaultArgs> = $Result.GetResult<Prisma.$RelatorioPayload, S>

  type RelatorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatorioCountAggregateInputType | true
    }

  export interface RelatorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relatorio'], meta: { name: 'Relatorio' } }
    /**
     * Find zero or one Relatorio that matches the filter.
     * @param {RelatorioFindUniqueArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatorioFindUniqueArgs>(args: SelectSubset<T, RelatorioFindUniqueArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relatorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatorioFindUniqueOrThrowArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatorioFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relatorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindFirstArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatorioFindFirstArgs>(args?: SelectSubset<T, RelatorioFindFirstArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relatorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindFirstOrThrowArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatorioFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relatorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relatorios
     * const relatorios = await prisma.relatorio.findMany()
     * 
     * // Get first 10 Relatorios
     * const relatorios = await prisma.relatorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatorioWithIdOnly = await prisma.relatorio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatorioFindManyArgs>(args?: SelectSubset<T, RelatorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relatorio.
     * @param {RelatorioCreateArgs} args - Arguments to create a Relatorio.
     * @example
     * // Create one Relatorio
     * const Relatorio = await prisma.relatorio.create({
     *   data: {
     *     // ... data to create a Relatorio
     *   }
     * })
     * 
     */
    create<T extends RelatorioCreateArgs>(args: SelectSubset<T, RelatorioCreateArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relatorios.
     * @param {RelatorioCreateManyArgs} args - Arguments to create many Relatorios.
     * @example
     * // Create many Relatorios
     * const relatorio = await prisma.relatorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatorioCreateManyArgs>(args?: SelectSubset<T, RelatorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relatorios and returns the data saved in the database.
     * @param {RelatorioCreateManyAndReturnArgs} args - Arguments to create many Relatorios.
     * @example
     * // Create many Relatorios
     * const relatorio = await prisma.relatorio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relatorios and only return the `id`
     * const relatorioWithIdOnly = await prisma.relatorio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatorioCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatorioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relatorio.
     * @param {RelatorioDeleteArgs} args - Arguments to delete one Relatorio.
     * @example
     * // Delete one Relatorio
     * const Relatorio = await prisma.relatorio.delete({
     *   where: {
     *     // ... filter to delete one Relatorio
     *   }
     * })
     * 
     */
    delete<T extends RelatorioDeleteArgs>(args: SelectSubset<T, RelatorioDeleteArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relatorio.
     * @param {RelatorioUpdateArgs} args - Arguments to update one Relatorio.
     * @example
     * // Update one Relatorio
     * const relatorio = await prisma.relatorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatorioUpdateArgs>(args: SelectSubset<T, RelatorioUpdateArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relatorios.
     * @param {RelatorioDeleteManyArgs} args - Arguments to filter Relatorios to delete.
     * @example
     * // Delete a few Relatorios
     * const { count } = await prisma.relatorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatorioDeleteManyArgs>(args?: SelectSubset<T, RelatorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relatorios
     * const relatorio = await prisma.relatorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatorioUpdateManyArgs>(args: SelectSubset<T, RelatorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relatorios and returns the data updated in the database.
     * @param {RelatorioUpdateManyAndReturnArgs} args - Arguments to update many Relatorios.
     * @example
     * // Update many Relatorios
     * const relatorio = await prisma.relatorio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relatorios and only return the `id`
     * const relatorioWithIdOnly = await prisma.relatorio.updateManyAndReturn({
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
    updateManyAndReturn<T extends RelatorioUpdateManyAndReturnArgs>(args: SelectSubset<T, RelatorioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relatorio.
     * @param {RelatorioUpsertArgs} args - Arguments to update or create a Relatorio.
     * @example
     * // Update or create a Relatorio
     * const relatorio = await prisma.relatorio.upsert({
     *   create: {
     *     // ... data to create a Relatorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relatorio we want to update
     *   }
     * })
     */
    upsert<T extends RelatorioUpsertArgs>(args: SelectSubset<T, RelatorioUpsertArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioCountArgs} args - Arguments to filter Relatorios to count.
     * @example
     * // Count the number of Relatorios
     * const count = await prisma.relatorio.count({
     *   where: {
     *     // ... the filter for the Relatorios we want to count
     *   }
     * })
    **/
    count<T extends RelatorioCountArgs>(
      args?: Subset<T, RelatorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelatorioAggregateArgs>(args: Subset<T, RelatorioAggregateArgs>): Prisma.PrismaPromise<GetRelatorioAggregateType<T>>

    /**
     * Group by Relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioGroupByArgs} args - Group by arguments.
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
      T extends RelatorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatorioGroupByArgs['orderBy'] }
        : { orderBy?: RelatorioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelatorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relatorio model
   */
  readonly fields: RelatorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relatorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Relatorio model
   */
  interface RelatorioFieldRefs {
    readonly id: FieldRef<"Relatorio", 'Int'>
    readonly usuarioId: FieldRef<"Relatorio", 'Int'>
    readonly dataGeracao: FieldRef<"Relatorio", 'DateTime'>
    readonly tipo: FieldRef<"Relatorio", 'TipoRelatorio'>
    readonly dados: FieldRef<"Relatorio", 'Json'>
    readonly inicioPeriodo: FieldRef<"Relatorio", 'DateTime'>
    readonly fimPeriodo: FieldRef<"Relatorio", 'DateTime'>
    readonly createdAt: FieldRef<"Relatorio", 'DateTime'>
    readonly updatedAt: FieldRef<"Relatorio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Relatorio findUnique
   */
  export type RelatorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio findUniqueOrThrow
   */
  export type RelatorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio findFirst
   */
  export type RelatorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relatorios.
     */
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Relatorio findFirstOrThrow
   */
  export type RelatorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relatorios.
     */
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Relatorio findMany
   */
  export type RelatorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorios to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Relatorio create
   */
  export type RelatorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The data needed to create a Relatorio.
     */
    data: XOR<RelatorioCreateInput, RelatorioUncheckedCreateInput>
  }

  /**
   * Relatorio createMany
   */
  export type RelatorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relatorios.
     */
    data: RelatorioCreateManyInput | RelatorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relatorio createManyAndReturn
   */
  export type RelatorioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * The data used to create many Relatorios.
     */
    data: RelatorioCreateManyInput | RelatorioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relatorio update
   */
  export type RelatorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The data needed to update a Relatorio.
     */
    data: XOR<RelatorioUpdateInput, RelatorioUncheckedUpdateInput>
    /**
     * Choose, which Relatorio to update.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio updateMany
   */
  export type RelatorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relatorios.
     */
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyInput>
    /**
     * Filter which Relatorios to update
     */
    where?: RelatorioWhereInput
    /**
     * Limit how many Relatorios to update.
     */
    limit?: number
  }

  /**
   * Relatorio updateManyAndReturn
   */
  export type RelatorioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * The data used to update Relatorios.
     */
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyInput>
    /**
     * Filter which Relatorios to update
     */
    where?: RelatorioWhereInput
    /**
     * Limit how many Relatorios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relatorio upsert
   */
  export type RelatorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The filter to search for the Relatorio to update in case it exists.
     */
    where: RelatorioWhereUniqueInput
    /**
     * In case the Relatorio found by the `where` argument doesn't exist, create a new Relatorio with this data.
     */
    create: XOR<RelatorioCreateInput, RelatorioUncheckedCreateInput>
    /**
     * In case the Relatorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatorioUpdateInput, RelatorioUncheckedUpdateInput>
  }

  /**
   * Relatorio delete
   */
  export type RelatorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter which Relatorio to delete.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio deleteMany
   */
  export type RelatorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relatorios to delete
     */
    where?: RelatorioWhereInput
    /**
     * Limit how many Relatorios to delete.
     */
    limit?: number
  }

  /**
   * Relatorio without action
   */
  export type RelatorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
  }


  /**
   * Model DivisaoDeGasto
   */

  export type AggregateDivisaoDeGasto = {
    _count: DivisaoDeGastoCountAggregateOutputType | null
    _avg: DivisaoDeGastoAvgAggregateOutputType | null
    _sum: DivisaoDeGastoSumAggregateOutputType | null
    _min: DivisaoDeGastoMinAggregateOutputType | null
    _max: DivisaoDeGastoMaxAggregateOutputType | null
  }

  export type DivisaoDeGastoAvgAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
  }

  export type DivisaoDeGastoSumAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
  }

  export type DivisaoDeGastoMinAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    descricao: string | null
    data: Date | null
    meioPagamento: $Enums.MeioDePagamento | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DivisaoDeGastoMaxAggregateOutputType = {
    id: number | null
    valorTotal: number | null
    descricao: string | null
    data: Date | null
    meioPagamento: $Enums.MeioDePagamento | null
    numParcelas: number | null
    categoriaId: number | null
    cartaoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DivisaoDeGastoCountAggregateOutputType = {
    id: number
    valorTotal: number
    descricao: number
    data: number
    meioPagamento: number
    numParcelas: number
    categoriaId: number
    cartaoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DivisaoDeGastoAvgAggregateInputType = {
    id?: true
    valorTotal?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
  }

  export type DivisaoDeGastoSumAggregateInputType = {
    id?: true
    valorTotal?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
  }

  export type DivisaoDeGastoMinAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    data?: true
    meioPagamento?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DivisaoDeGastoMaxAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    data?: true
    meioPagamento?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DivisaoDeGastoCountAggregateInputType = {
    id?: true
    valorTotal?: true
    descricao?: true
    data?: true
    meioPagamento?: true
    numParcelas?: true
    categoriaId?: true
    cartaoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DivisaoDeGastoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DivisaoDeGasto to aggregate.
     */
    where?: DivisaoDeGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisaoDeGastos to fetch.
     */
    orderBy?: DivisaoDeGastoOrderByWithRelationInput | DivisaoDeGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisaoDeGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisaoDeGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisaoDeGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DivisaoDeGastos
    **/
    _count?: true | DivisaoDeGastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisaoDeGastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisaoDeGastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisaoDeGastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisaoDeGastoMaxAggregateInputType
  }

  export type GetDivisaoDeGastoAggregateType<T extends DivisaoDeGastoAggregateArgs> = {
        [P in keyof T & keyof AggregateDivisaoDeGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivisaoDeGasto[P]>
      : GetScalarType<T[P], AggregateDivisaoDeGasto[P]>
  }




  export type DivisaoDeGastoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisaoDeGastoWhereInput
    orderBy?: DivisaoDeGastoOrderByWithAggregationInput | DivisaoDeGastoOrderByWithAggregationInput[]
    by: DivisaoDeGastoScalarFieldEnum[] | DivisaoDeGastoScalarFieldEnum
    having?: DivisaoDeGastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisaoDeGastoCountAggregateInputType | true
    _avg?: DivisaoDeGastoAvgAggregateInputType
    _sum?: DivisaoDeGastoSumAggregateInputType
    _min?: DivisaoDeGastoMinAggregateInputType
    _max?: DivisaoDeGastoMaxAggregateInputType
  }

  export type DivisaoDeGastoGroupByOutputType = {
    id: number
    valorTotal: number
    descricao: string
    data: Date
    meioPagamento: $Enums.MeioDePagamento
    numParcelas: number
    categoriaId: number | null
    cartaoId: number | null
    createdAt: Date
    updatedAt: Date
    _count: DivisaoDeGastoCountAggregateOutputType | null
    _avg: DivisaoDeGastoAvgAggregateOutputType | null
    _sum: DivisaoDeGastoSumAggregateOutputType | null
    _min: DivisaoDeGastoMinAggregateOutputType | null
    _max: DivisaoDeGastoMaxAggregateOutputType | null
  }

  type GetDivisaoDeGastoGroupByPayload<T extends DivisaoDeGastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisaoDeGastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisaoDeGastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisaoDeGastoGroupByOutputType[P]>
            : GetScalarType<T[P], DivisaoDeGastoGroupByOutputType[P]>
        }
      >
    >


  export type DivisaoDeGastoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valorTotal?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | DivisaoDeGasto$categoriaArgs<ExtArgs>
    cartao?: boolean | DivisaoDeGasto$cartaoArgs<ExtArgs>
    gastos?: boolean | DivisaoDeGasto$gastosArgs<ExtArgs>
    usuarios?: boolean | DivisaoDeGasto$usuariosArgs<ExtArgs>
    _count?: boolean | DivisaoDeGastoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisaoDeGasto"]>

  export type DivisaoDeGastoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valorTotal?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | DivisaoDeGasto$categoriaArgs<ExtArgs>
    cartao?: boolean | DivisaoDeGasto$cartaoArgs<ExtArgs>
  }, ExtArgs["result"]["divisaoDeGasto"]>

  export type DivisaoDeGastoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valorTotal?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | DivisaoDeGasto$categoriaArgs<ExtArgs>
    cartao?: boolean | DivisaoDeGasto$cartaoArgs<ExtArgs>
  }, ExtArgs["result"]["divisaoDeGasto"]>

  export type DivisaoDeGastoSelectScalar = {
    id?: boolean
    valorTotal?: boolean
    descricao?: boolean
    data?: boolean
    meioPagamento?: boolean
    numParcelas?: boolean
    categoriaId?: boolean
    cartaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DivisaoDeGastoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valorTotal" | "descricao" | "data" | "meioPagamento" | "numParcelas" | "categoriaId" | "cartaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["divisaoDeGasto"]>
  export type DivisaoDeGastoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | DivisaoDeGasto$categoriaArgs<ExtArgs>
    cartao?: boolean | DivisaoDeGasto$cartaoArgs<ExtArgs>
    gastos?: boolean | DivisaoDeGasto$gastosArgs<ExtArgs>
    usuarios?: boolean | DivisaoDeGasto$usuariosArgs<ExtArgs>
    _count?: boolean | DivisaoDeGastoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DivisaoDeGastoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | DivisaoDeGasto$categoriaArgs<ExtArgs>
    cartao?: boolean | DivisaoDeGasto$cartaoArgs<ExtArgs>
  }
  export type DivisaoDeGastoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | DivisaoDeGasto$categoriaArgs<ExtArgs>
    cartao?: boolean | DivisaoDeGasto$cartaoArgs<ExtArgs>
  }

  export type $DivisaoDeGastoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DivisaoDeGasto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      cartao: Prisma.$CartaoPayload<ExtArgs> | null
      gastos: Prisma.$GastoPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valorTotal: number
      descricao: string
      data: Date
      meioPagamento: $Enums.MeioDePagamento
      numParcelas: number
      categoriaId: number | null
      cartaoId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["divisaoDeGasto"]>
    composites: {}
  }

  type DivisaoDeGastoGetPayload<S extends boolean | null | undefined | DivisaoDeGastoDefaultArgs> = $Result.GetResult<Prisma.$DivisaoDeGastoPayload, S>

  type DivisaoDeGastoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DivisaoDeGastoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisaoDeGastoCountAggregateInputType | true
    }

  export interface DivisaoDeGastoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DivisaoDeGasto'], meta: { name: 'DivisaoDeGasto' } }
    /**
     * Find zero or one DivisaoDeGasto that matches the filter.
     * @param {DivisaoDeGastoFindUniqueArgs} args - Arguments to find a DivisaoDeGasto
     * @example
     * // Get one DivisaoDeGasto
     * const divisaoDeGasto = await prisma.divisaoDeGasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivisaoDeGastoFindUniqueArgs>(args: SelectSubset<T, DivisaoDeGastoFindUniqueArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DivisaoDeGasto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DivisaoDeGastoFindUniqueOrThrowArgs} args - Arguments to find a DivisaoDeGasto
     * @example
     * // Get one DivisaoDeGasto
     * const divisaoDeGasto = await prisma.divisaoDeGasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivisaoDeGastoFindUniqueOrThrowArgs>(args: SelectSubset<T, DivisaoDeGastoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DivisaoDeGasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisaoDeGastoFindFirstArgs} args - Arguments to find a DivisaoDeGasto
     * @example
     * // Get one DivisaoDeGasto
     * const divisaoDeGasto = await prisma.divisaoDeGasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivisaoDeGastoFindFirstArgs>(args?: SelectSubset<T, DivisaoDeGastoFindFirstArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DivisaoDeGasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisaoDeGastoFindFirstOrThrowArgs} args - Arguments to find a DivisaoDeGasto
     * @example
     * // Get one DivisaoDeGasto
     * const divisaoDeGasto = await prisma.divisaoDeGasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivisaoDeGastoFindFirstOrThrowArgs>(args?: SelectSubset<T, DivisaoDeGastoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DivisaoDeGastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisaoDeGastoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DivisaoDeGastos
     * const divisaoDeGastos = await prisma.divisaoDeGasto.findMany()
     * 
     * // Get first 10 DivisaoDeGastos
     * const divisaoDeGastos = await prisma.divisaoDeGasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisaoDeGastoWithIdOnly = await prisma.divisaoDeGasto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DivisaoDeGastoFindManyArgs>(args?: SelectSubset<T, DivisaoDeGastoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DivisaoDeGasto.
     * @param {DivisaoDeGastoCreateArgs} args - Arguments to create a DivisaoDeGasto.
     * @example
     * // Create one DivisaoDeGasto
     * const DivisaoDeGasto = await prisma.divisaoDeGasto.create({
     *   data: {
     *     // ... data to create a DivisaoDeGasto
     *   }
     * })
     * 
     */
    create<T extends DivisaoDeGastoCreateArgs>(args: SelectSubset<T, DivisaoDeGastoCreateArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DivisaoDeGastos.
     * @param {DivisaoDeGastoCreateManyArgs} args - Arguments to create many DivisaoDeGastos.
     * @example
     * // Create many DivisaoDeGastos
     * const divisaoDeGasto = await prisma.divisaoDeGasto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivisaoDeGastoCreateManyArgs>(args?: SelectSubset<T, DivisaoDeGastoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DivisaoDeGastos and returns the data saved in the database.
     * @param {DivisaoDeGastoCreateManyAndReturnArgs} args - Arguments to create many DivisaoDeGastos.
     * @example
     * // Create many DivisaoDeGastos
     * const divisaoDeGasto = await prisma.divisaoDeGasto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DivisaoDeGastos and only return the `id`
     * const divisaoDeGastoWithIdOnly = await prisma.divisaoDeGasto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DivisaoDeGastoCreateManyAndReturnArgs>(args?: SelectSubset<T, DivisaoDeGastoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DivisaoDeGasto.
     * @param {DivisaoDeGastoDeleteArgs} args - Arguments to delete one DivisaoDeGasto.
     * @example
     * // Delete one DivisaoDeGasto
     * const DivisaoDeGasto = await prisma.divisaoDeGasto.delete({
     *   where: {
     *     // ... filter to delete one DivisaoDeGasto
     *   }
     * })
     * 
     */
    delete<T extends DivisaoDeGastoDeleteArgs>(args: SelectSubset<T, DivisaoDeGastoDeleteArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DivisaoDeGasto.
     * @param {DivisaoDeGastoUpdateArgs} args - Arguments to update one DivisaoDeGasto.
     * @example
     * // Update one DivisaoDeGasto
     * const divisaoDeGasto = await prisma.divisaoDeGasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivisaoDeGastoUpdateArgs>(args: SelectSubset<T, DivisaoDeGastoUpdateArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DivisaoDeGastos.
     * @param {DivisaoDeGastoDeleteManyArgs} args - Arguments to filter DivisaoDeGastos to delete.
     * @example
     * // Delete a few DivisaoDeGastos
     * const { count } = await prisma.divisaoDeGasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivisaoDeGastoDeleteManyArgs>(args?: SelectSubset<T, DivisaoDeGastoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DivisaoDeGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisaoDeGastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DivisaoDeGastos
     * const divisaoDeGasto = await prisma.divisaoDeGasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivisaoDeGastoUpdateManyArgs>(args: SelectSubset<T, DivisaoDeGastoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DivisaoDeGastos and returns the data updated in the database.
     * @param {DivisaoDeGastoUpdateManyAndReturnArgs} args - Arguments to update many DivisaoDeGastos.
     * @example
     * // Update many DivisaoDeGastos
     * const divisaoDeGasto = await prisma.divisaoDeGasto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DivisaoDeGastos and only return the `id`
     * const divisaoDeGastoWithIdOnly = await prisma.divisaoDeGasto.updateManyAndReturn({
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
    updateManyAndReturn<T extends DivisaoDeGastoUpdateManyAndReturnArgs>(args: SelectSubset<T, DivisaoDeGastoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DivisaoDeGasto.
     * @param {DivisaoDeGastoUpsertArgs} args - Arguments to update or create a DivisaoDeGasto.
     * @example
     * // Update or create a DivisaoDeGasto
     * const divisaoDeGasto = await prisma.divisaoDeGasto.upsert({
     *   create: {
     *     // ... data to create a DivisaoDeGasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DivisaoDeGasto we want to update
     *   }
     * })
     */
    upsert<T extends DivisaoDeGastoUpsertArgs>(args: SelectSubset<T, DivisaoDeGastoUpsertArgs<ExtArgs>>): Prisma__DivisaoDeGastoClient<$Result.GetResult<Prisma.$DivisaoDeGastoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DivisaoDeGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisaoDeGastoCountArgs} args - Arguments to filter DivisaoDeGastos to count.
     * @example
     * // Count the number of DivisaoDeGastos
     * const count = await prisma.divisaoDeGasto.count({
     *   where: {
     *     // ... the filter for the DivisaoDeGastos we want to count
     *   }
     * })
    **/
    count<T extends DivisaoDeGastoCountArgs>(
      args?: Subset<T, DivisaoDeGastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisaoDeGastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DivisaoDeGasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisaoDeGastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisaoDeGastoAggregateArgs>(args: Subset<T, DivisaoDeGastoAggregateArgs>): Prisma.PrismaPromise<GetDivisaoDeGastoAggregateType<T>>

    /**
     * Group by DivisaoDeGasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisaoDeGastoGroupByArgs} args - Group by arguments.
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
      T extends DivisaoDeGastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisaoDeGastoGroupByArgs['orderBy'] }
        : { orderBy?: DivisaoDeGastoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisaoDeGastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisaoDeGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DivisaoDeGasto model
   */
  readonly fields: DivisaoDeGastoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DivisaoDeGasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisaoDeGastoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends DivisaoDeGasto$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, DivisaoDeGasto$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cartao<T extends DivisaoDeGasto$cartaoArgs<ExtArgs> = {}>(args?: Subset<T, DivisaoDeGasto$cartaoArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gastos<T extends DivisaoDeGasto$gastosArgs<ExtArgs> = {}>(args?: Subset<T, DivisaoDeGasto$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends DivisaoDeGasto$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, DivisaoDeGasto$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DivisaoDeGasto model
   */
  interface DivisaoDeGastoFieldRefs {
    readonly id: FieldRef<"DivisaoDeGasto", 'Int'>
    readonly valorTotal: FieldRef<"DivisaoDeGasto", 'Float'>
    readonly descricao: FieldRef<"DivisaoDeGasto", 'String'>
    readonly data: FieldRef<"DivisaoDeGasto", 'DateTime'>
    readonly meioPagamento: FieldRef<"DivisaoDeGasto", 'MeioDePagamento'>
    readonly numParcelas: FieldRef<"DivisaoDeGasto", 'Int'>
    readonly categoriaId: FieldRef<"DivisaoDeGasto", 'Int'>
    readonly cartaoId: FieldRef<"DivisaoDeGasto", 'Int'>
    readonly createdAt: FieldRef<"DivisaoDeGasto", 'DateTime'>
    readonly updatedAt: FieldRef<"DivisaoDeGasto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DivisaoDeGasto findUnique
   */
  export type DivisaoDeGastoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * Filter, which DivisaoDeGasto to fetch.
     */
    where: DivisaoDeGastoWhereUniqueInput
  }

  /**
   * DivisaoDeGasto findUniqueOrThrow
   */
  export type DivisaoDeGastoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * Filter, which DivisaoDeGasto to fetch.
     */
    where: DivisaoDeGastoWhereUniqueInput
  }

  /**
   * DivisaoDeGasto findFirst
   */
  export type DivisaoDeGastoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * Filter, which DivisaoDeGasto to fetch.
     */
    where?: DivisaoDeGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisaoDeGastos to fetch.
     */
    orderBy?: DivisaoDeGastoOrderByWithRelationInput | DivisaoDeGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DivisaoDeGastos.
     */
    cursor?: DivisaoDeGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisaoDeGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisaoDeGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DivisaoDeGastos.
     */
    distinct?: DivisaoDeGastoScalarFieldEnum | DivisaoDeGastoScalarFieldEnum[]
  }

  /**
   * DivisaoDeGasto findFirstOrThrow
   */
  export type DivisaoDeGastoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * Filter, which DivisaoDeGasto to fetch.
     */
    where?: DivisaoDeGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisaoDeGastos to fetch.
     */
    orderBy?: DivisaoDeGastoOrderByWithRelationInput | DivisaoDeGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DivisaoDeGastos.
     */
    cursor?: DivisaoDeGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisaoDeGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisaoDeGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DivisaoDeGastos.
     */
    distinct?: DivisaoDeGastoScalarFieldEnum | DivisaoDeGastoScalarFieldEnum[]
  }

  /**
   * DivisaoDeGasto findMany
   */
  export type DivisaoDeGastoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * Filter, which DivisaoDeGastos to fetch.
     */
    where?: DivisaoDeGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisaoDeGastos to fetch.
     */
    orderBy?: DivisaoDeGastoOrderByWithRelationInput | DivisaoDeGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DivisaoDeGastos.
     */
    cursor?: DivisaoDeGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisaoDeGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisaoDeGastos.
     */
    skip?: number
    distinct?: DivisaoDeGastoScalarFieldEnum | DivisaoDeGastoScalarFieldEnum[]
  }

  /**
   * DivisaoDeGasto create
   */
  export type DivisaoDeGastoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * The data needed to create a DivisaoDeGasto.
     */
    data: XOR<DivisaoDeGastoCreateInput, DivisaoDeGastoUncheckedCreateInput>
  }

  /**
   * DivisaoDeGasto createMany
   */
  export type DivisaoDeGastoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DivisaoDeGastos.
     */
    data: DivisaoDeGastoCreateManyInput | DivisaoDeGastoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DivisaoDeGasto createManyAndReturn
   */
  export type DivisaoDeGastoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * The data used to create many DivisaoDeGastos.
     */
    data: DivisaoDeGastoCreateManyInput | DivisaoDeGastoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DivisaoDeGasto update
   */
  export type DivisaoDeGastoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * The data needed to update a DivisaoDeGasto.
     */
    data: XOR<DivisaoDeGastoUpdateInput, DivisaoDeGastoUncheckedUpdateInput>
    /**
     * Choose, which DivisaoDeGasto to update.
     */
    where: DivisaoDeGastoWhereUniqueInput
  }

  /**
   * DivisaoDeGasto updateMany
   */
  export type DivisaoDeGastoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DivisaoDeGastos.
     */
    data: XOR<DivisaoDeGastoUpdateManyMutationInput, DivisaoDeGastoUncheckedUpdateManyInput>
    /**
     * Filter which DivisaoDeGastos to update
     */
    where?: DivisaoDeGastoWhereInput
    /**
     * Limit how many DivisaoDeGastos to update.
     */
    limit?: number
  }

  /**
   * DivisaoDeGasto updateManyAndReturn
   */
  export type DivisaoDeGastoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * The data used to update DivisaoDeGastos.
     */
    data: XOR<DivisaoDeGastoUpdateManyMutationInput, DivisaoDeGastoUncheckedUpdateManyInput>
    /**
     * Filter which DivisaoDeGastos to update
     */
    where?: DivisaoDeGastoWhereInput
    /**
     * Limit how many DivisaoDeGastos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DivisaoDeGasto upsert
   */
  export type DivisaoDeGastoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * The filter to search for the DivisaoDeGasto to update in case it exists.
     */
    where: DivisaoDeGastoWhereUniqueInput
    /**
     * In case the DivisaoDeGasto found by the `where` argument doesn't exist, create a new DivisaoDeGasto with this data.
     */
    create: XOR<DivisaoDeGastoCreateInput, DivisaoDeGastoUncheckedCreateInput>
    /**
     * In case the DivisaoDeGasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisaoDeGastoUpdateInput, DivisaoDeGastoUncheckedUpdateInput>
  }

  /**
   * DivisaoDeGasto delete
   */
  export type DivisaoDeGastoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
    /**
     * Filter which DivisaoDeGasto to delete.
     */
    where: DivisaoDeGastoWhereUniqueInput
  }

  /**
   * DivisaoDeGasto deleteMany
   */
  export type DivisaoDeGastoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DivisaoDeGastos to delete
     */
    where?: DivisaoDeGastoWhereInput
    /**
     * Limit how many DivisaoDeGastos to delete.
     */
    limit?: number
  }

  /**
   * DivisaoDeGasto.categoria
   */
  export type DivisaoDeGasto$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * DivisaoDeGasto.cartao
   */
  export type DivisaoDeGasto$cartaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    where?: CartaoWhereInput
  }

  /**
   * DivisaoDeGasto.gastos
   */
  export type DivisaoDeGasto$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * DivisaoDeGasto.usuarios
   */
  export type DivisaoDeGasto$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * DivisaoDeGasto without action
   */
  export type DivisaoDeGastoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisaoDeGasto
     */
    select?: DivisaoDeGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DivisaoDeGasto
     */
    omit?: DivisaoDeGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisaoDeGastoInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type NotificacaoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: number | null
    mensagem: string | null
    dataEnvio: Date | null
    usuarioId: number | null
    visualizado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: number | null
    mensagem: string | null
    dataEnvio: Date | null
    usuarioId: number | null
    visualizado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    mensagem: number
    dataEnvio: number
    usuarioId: number
    visualizado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificacaoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type NotificacaoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type NotificacaoMinAggregateInputType = {
    id?: true
    mensagem?: true
    dataEnvio?: true
    usuarioId?: true
    visualizado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    mensagem?: true
    dataEnvio?: true
    usuarioId?: true
    visualizado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    mensagem?: true
    dataEnvio?: true
    usuarioId?: true
    visualizado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _avg?: NotificacaoAvgAggregateInputType
    _sum?: NotificacaoSumAggregateInputType
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: number
    mensagem: string
    dataEnvio: Date
    usuarioId: number
    visualizado: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
    visualizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
    visualizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
    visualizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    mensagem?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
    visualizado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensagem" | "dataEnvio" | "usuarioId" | "visualizado" | "createdAt" | "updatedAt", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mensagem: string
      dataEnvio: Date
      usuarioId: number
      visualizado: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
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
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'Int'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly dataEnvio: FieldRef<"Notificacao", 'DateTime'>
    readonly usuarioId: FieldRef<"Notificacao", 'Int'>
    readonly visualizado: FieldRef<"Notificacao", 'Boolean'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const CartaoScalarFieldEnum: {
    id: 'id',
    banco: 'banco',
    limiteTotal: 'limiteTotal',
    limiteRestante: 'limiteRestante',
    ultimosQuatroDigitos: 'ultimosQuatroDigitos',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartaoScalarFieldEnum = (typeof CartaoScalarFieldEnum)[keyof typeof CartaoScalarFieldEnum]


  export const GastoScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    descricao: 'descricao',
    data: 'data',
    meioPagamento: 'meioPagamento',
    usuarioId: 'usuarioId',
    numParcelas: 'numParcelas',
    categoriaId: 'categoriaId',
    cartaoId: 'cartaoId',
    divisaoDeGastoId: 'divisaoDeGastoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GastoScalarFieldEnum = (typeof GastoScalarFieldEnum)[keyof typeof GastoScalarFieldEnum]


  export const ParcelaScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    dataVencimento: 'dataVencimento',
    paga: 'paga',
    numeroParcela: 'numeroParcela',
    totalParcelas: 'totalParcelas',
    gastoId: 'gastoId',
    faturaId: 'faturaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParcelaScalarFieldEnum = (typeof ParcelaScalarFieldEnum)[keyof typeof ParcelaScalarFieldEnum]


  export const FaturaScalarFieldEnum: {
    id: 'id',
    cartaoId: 'cartaoId',
    mesReferente: 'mesReferente',
    vencimento: 'vencimento',
    paga: 'paga',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FaturaScalarFieldEnum = (typeof FaturaScalarFieldEnum)[keyof typeof FaturaScalarFieldEnum]


  export const RelatorioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    dataGeracao: 'dataGeracao',
    tipo: 'tipo',
    dados: 'dados',
    inicioPeriodo: 'inicioPeriodo',
    fimPeriodo: 'fimPeriodo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RelatorioScalarFieldEnum = (typeof RelatorioScalarFieldEnum)[keyof typeof RelatorioScalarFieldEnum]


  export const DivisaoDeGastoScalarFieldEnum: {
    id: 'id',
    valorTotal: 'valorTotal',
    descricao: 'descricao',
    data: 'data',
    meioPagamento: 'meioPagamento',
    numParcelas: 'numParcelas',
    categoriaId: 'categoriaId',
    cartaoId: 'cartaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DivisaoDeGastoScalarFieldEnum = (typeof DivisaoDeGastoScalarFieldEnum)[keyof typeof DivisaoDeGastoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    dataEnvio: 'dataEnvio',
    usuarioId: 'usuarioId',
    visualizado: 'visualizado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MeioDePagamento'
   */
  export type EnumMeioDePagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeioDePagamento'>
    


  /**
   * Reference to a field of type 'MeioDePagamento[]'
   */
  export type ListEnumMeioDePagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeioDePagamento[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoRelatorio'
   */
  export type EnumTipoRelatorioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoRelatorio'>
    


  /**
   * Reference to a field of type 'TipoRelatorio[]'
   */
  export type ListEnumTipoRelatorioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoRelatorio[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    gastos?: GastoListRelationFilter
    cartoes?: CartaoListRelationFilter
    relatorios?: RelatorioListRelationFilter
    divisoesDeGasto?: DivisaoDeGastoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gastos?: GastoOrderByRelationAggregateInput
    cartoes?: CartaoOrderByRelationAggregateInput
    relatorios?: RelatorioOrderByRelationAggregateInput
    divisoesDeGasto?: DivisaoDeGastoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    gastos?: GastoListRelationFilter
    cartoes?: CartaoListRelationFilter
    relatorios?: RelatorioListRelationFilter
    divisoesDeGasto?: DivisaoDeGastoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    gastos?: GastoListRelationFilter
    divisoesDeGasto?: DivisaoDeGastoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gastos?: GastoOrderByRelationAggregateInput
    divisoesDeGasto?: DivisaoDeGastoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    gastos?: GastoListRelationFilter
    divisoesDeGasto?: DivisaoDeGastoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type CartaoWhereInput = {
    AND?: CartaoWhereInput | CartaoWhereInput[]
    OR?: CartaoWhereInput[]
    NOT?: CartaoWhereInput | CartaoWhereInput[]
    id?: IntFilter<"Cartao"> | number
    banco?: StringFilter<"Cartao"> | string
    limiteTotal?: FloatFilter<"Cartao"> | number
    limiteRestante?: FloatFilter<"Cartao"> | number
    ultimosQuatroDigitos?: StringNullableFilter<"Cartao"> | string | null
    usuarioId?: IntFilter<"Cartao"> | number
    createdAt?: DateTimeFilter<"Cartao"> | Date | string
    updatedAt?: DateTimeFilter<"Cartao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    gastos?: GastoListRelationFilter
    faturas?: FaturaListRelationFilter
    divisoesDeGasto?: DivisaoDeGastoListRelationFilter
  }

  export type CartaoOrderByWithRelationInput = {
    id?: SortOrder
    banco?: SortOrder
    limiteTotal?: SortOrder
    limiteRestante?: SortOrder
    ultimosQuatroDigitos?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    gastos?: GastoOrderByRelationAggregateInput
    faturas?: FaturaOrderByRelationAggregateInput
    divisoesDeGasto?: DivisaoDeGastoOrderByRelationAggregateInput
  }

  export type CartaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartaoWhereInput | CartaoWhereInput[]
    OR?: CartaoWhereInput[]
    NOT?: CartaoWhereInput | CartaoWhereInput[]
    banco?: StringFilter<"Cartao"> | string
    limiteTotal?: FloatFilter<"Cartao"> | number
    limiteRestante?: FloatFilter<"Cartao"> | number
    ultimosQuatroDigitos?: StringNullableFilter<"Cartao"> | string | null
    usuarioId?: IntFilter<"Cartao"> | number
    createdAt?: DateTimeFilter<"Cartao"> | Date | string
    updatedAt?: DateTimeFilter<"Cartao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    gastos?: GastoListRelationFilter
    faturas?: FaturaListRelationFilter
    divisoesDeGasto?: DivisaoDeGastoListRelationFilter
  }, "id">

  export type CartaoOrderByWithAggregationInput = {
    id?: SortOrder
    banco?: SortOrder
    limiteTotal?: SortOrder
    limiteRestante?: SortOrder
    ultimosQuatroDigitos?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartaoCountOrderByAggregateInput
    _avg?: CartaoAvgOrderByAggregateInput
    _max?: CartaoMaxOrderByAggregateInput
    _min?: CartaoMinOrderByAggregateInput
    _sum?: CartaoSumOrderByAggregateInput
  }

  export type CartaoScalarWhereWithAggregatesInput = {
    AND?: CartaoScalarWhereWithAggregatesInput | CartaoScalarWhereWithAggregatesInput[]
    OR?: CartaoScalarWhereWithAggregatesInput[]
    NOT?: CartaoScalarWhereWithAggregatesInput | CartaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cartao"> | number
    banco?: StringWithAggregatesFilter<"Cartao"> | string
    limiteTotal?: FloatWithAggregatesFilter<"Cartao"> | number
    limiteRestante?: FloatWithAggregatesFilter<"Cartao"> | number
    ultimosQuatroDigitos?: StringNullableWithAggregatesFilter<"Cartao"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Cartao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cartao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cartao"> | Date | string
  }

  export type GastoWhereInput = {
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    id?: IntFilter<"Gasto"> | number
    valor?: FloatFilter<"Gasto"> | number
    descricao?: StringFilter<"Gasto"> | string
    data?: DateTimeFilter<"Gasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoFilter<"Gasto"> | $Enums.MeioDePagamento
    usuarioId?: IntFilter<"Gasto"> | number
    numParcelas?: IntFilter<"Gasto"> | number
    categoriaId?: IntNullableFilter<"Gasto"> | number | null
    cartaoId?: IntNullableFilter<"Gasto"> | number | null
    divisaoDeGastoId?: IntNullableFilter<"Gasto"> | number | null
    createdAt?: DateTimeFilter<"Gasto"> | Date | string
    updatedAt?: DateTimeFilter<"Gasto"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    cartao?: XOR<CartaoNullableScalarRelationFilter, CartaoWhereInput> | null
    parcelas?: ParcelaListRelationFilter
    divisaoDeGasto?: XOR<DivisaoDeGastoNullableScalarRelationFilter, DivisaoDeGastoWhereInput> | null
  }

  export type GastoOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    usuarioId?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    cartaoId?: SortOrderInput | SortOrder
    divisaoDeGastoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    cartao?: CartaoOrderByWithRelationInput
    parcelas?: ParcelaOrderByRelationAggregateInput
    divisaoDeGasto?: DivisaoDeGastoOrderByWithRelationInput
  }

  export type GastoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    valor?: FloatFilter<"Gasto"> | number
    descricao?: StringFilter<"Gasto"> | string
    data?: DateTimeFilter<"Gasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoFilter<"Gasto"> | $Enums.MeioDePagamento
    usuarioId?: IntFilter<"Gasto"> | number
    numParcelas?: IntFilter<"Gasto"> | number
    categoriaId?: IntNullableFilter<"Gasto"> | number | null
    cartaoId?: IntNullableFilter<"Gasto"> | number | null
    divisaoDeGastoId?: IntNullableFilter<"Gasto"> | number | null
    createdAt?: DateTimeFilter<"Gasto"> | Date | string
    updatedAt?: DateTimeFilter<"Gasto"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    cartao?: XOR<CartaoNullableScalarRelationFilter, CartaoWhereInput> | null
    parcelas?: ParcelaListRelationFilter
    divisaoDeGasto?: XOR<DivisaoDeGastoNullableScalarRelationFilter, DivisaoDeGastoWhereInput> | null
  }, "id">

  export type GastoOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    usuarioId?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    cartaoId?: SortOrderInput | SortOrder
    divisaoDeGastoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GastoCountOrderByAggregateInput
    _avg?: GastoAvgOrderByAggregateInput
    _max?: GastoMaxOrderByAggregateInput
    _min?: GastoMinOrderByAggregateInput
    _sum?: GastoSumOrderByAggregateInput
  }

  export type GastoScalarWhereWithAggregatesInput = {
    AND?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    OR?: GastoScalarWhereWithAggregatesInput[]
    NOT?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gasto"> | number
    valor?: FloatWithAggregatesFilter<"Gasto"> | number
    descricao?: StringWithAggregatesFilter<"Gasto"> | string
    data?: DateTimeWithAggregatesFilter<"Gasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoWithAggregatesFilter<"Gasto"> | $Enums.MeioDePagamento
    usuarioId?: IntWithAggregatesFilter<"Gasto"> | number
    numParcelas?: IntWithAggregatesFilter<"Gasto"> | number
    categoriaId?: IntNullableWithAggregatesFilter<"Gasto"> | number | null
    cartaoId?: IntNullableWithAggregatesFilter<"Gasto"> | number | null
    divisaoDeGastoId?: IntNullableWithAggregatesFilter<"Gasto"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Gasto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gasto"> | Date | string
  }

  export type ParcelaWhereInput = {
    AND?: ParcelaWhereInput | ParcelaWhereInput[]
    OR?: ParcelaWhereInput[]
    NOT?: ParcelaWhereInput | ParcelaWhereInput[]
    id?: IntFilter<"Parcela"> | number
    valor?: FloatFilter<"Parcela"> | number
    dataVencimento?: DateTimeFilter<"Parcela"> | Date | string
    paga?: BoolFilter<"Parcela"> | boolean
    numeroParcela?: IntFilter<"Parcela"> | number
    totalParcelas?: IntFilter<"Parcela"> | number
    gastoId?: IntNullableFilter<"Parcela"> | number | null
    faturaId?: IntNullableFilter<"Parcela"> | number | null
    createdAt?: DateTimeFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeFilter<"Parcela"> | Date | string
    gasto?: XOR<GastoNullableScalarRelationFilter, GastoWhereInput> | null
    fatura?: XOR<FaturaNullableScalarRelationFilter, FaturaWhereInput> | null
  }

  export type ParcelaOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    paga?: SortOrder
    numeroParcela?: SortOrder
    totalParcelas?: SortOrder
    gastoId?: SortOrderInput | SortOrder
    faturaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gasto?: GastoOrderByWithRelationInput
    fatura?: FaturaOrderByWithRelationInput
  }

  export type ParcelaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParcelaWhereInput | ParcelaWhereInput[]
    OR?: ParcelaWhereInput[]
    NOT?: ParcelaWhereInput | ParcelaWhereInput[]
    valor?: FloatFilter<"Parcela"> | number
    dataVencimento?: DateTimeFilter<"Parcela"> | Date | string
    paga?: BoolFilter<"Parcela"> | boolean
    numeroParcela?: IntFilter<"Parcela"> | number
    totalParcelas?: IntFilter<"Parcela"> | number
    gastoId?: IntNullableFilter<"Parcela"> | number | null
    faturaId?: IntNullableFilter<"Parcela"> | number | null
    createdAt?: DateTimeFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeFilter<"Parcela"> | Date | string
    gasto?: XOR<GastoNullableScalarRelationFilter, GastoWhereInput> | null
    fatura?: XOR<FaturaNullableScalarRelationFilter, FaturaWhereInput> | null
  }, "id">

  export type ParcelaOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    paga?: SortOrder
    numeroParcela?: SortOrder
    totalParcelas?: SortOrder
    gastoId?: SortOrderInput | SortOrder
    faturaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParcelaCountOrderByAggregateInput
    _avg?: ParcelaAvgOrderByAggregateInput
    _max?: ParcelaMaxOrderByAggregateInput
    _min?: ParcelaMinOrderByAggregateInput
    _sum?: ParcelaSumOrderByAggregateInput
  }

  export type ParcelaScalarWhereWithAggregatesInput = {
    AND?: ParcelaScalarWhereWithAggregatesInput | ParcelaScalarWhereWithAggregatesInput[]
    OR?: ParcelaScalarWhereWithAggregatesInput[]
    NOT?: ParcelaScalarWhereWithAggregatesInput | ParcelaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parcela"> | number
    valor?: FloatWithAggregatesFilter<"Parcela"> | number
    dataVencimento?: DateTimeWithAggregatesFilter<"Parcela"> | Date | string
    paga?: BoolWithAggregatesFilter<"Parcela"> | boolean
    numeroParcela?: IntWithAggregatesFilter<"Parcela"> | number
    totalParcelas?: IntWithAggregatesFilter<"Parcela"> | number
    gastoId?: IntNullableWithAggregatesFilter<"Parcela"> | number | null
    faturaId?: IntNullableWithAggregatesFilter<"Parcela"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parcela"> | Date | string
  }

  export type FaturaWhereInput = {
    AND?: FaturaWhereInput | FaturaWhereInput[]
    OR?: FaturaWhereInput[]
    NOT?: FaturaWhereInput | FaturaWhereInput[]
    id?: IntFilter<"Fatura"> | number
    cartaoId?: IntFilter<"Fatura"> | number
    mesReferente?: DateTimeFilter<"Fatura"> | Date | string
    vencimento?: DateTimeFilter<"Fatura"> | Date | string
    paga?: BoolFilter<"Fatura"> | boolean
    createdAt?: DateTimeFilter<"Fatura"> | Date | string
    updatedAt?: DateTimeFilter<"Fatura"> | Date | string
    cartao?: XOR<CartaoScalarRelationFilter, CartaoWhereInput>
    parcelas?: ParcelaListRelationFilter
  }

  export type FaturaOrderByWithRelationInput = {
    id?: SortOrder
    cartaoId?: SortOrder
    mesReferente?: SortOrder
    vencimento?: SortOrder
    paga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cartao?: CartaoOrderByWithRelationInput
    parcelas?: ParcelaOrderByRelationAggregateInput
  }

  export type FaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaturaWhereInput | FaturaWhereInput[]
    OR?: FaturaWhereInput[]
    NOT?: FaturaWhereInput | FaturaWhereInput[]
    cartaoId?: IntFilter<"Fatura"> | number
    mesReferente?: DateTimeFilter<"Fatura"> | Date | string
    vencimento?: DateTimeFilter<"Fatura"> | Date | string
    paga?: BoolFilter<"Fatura"> | boolean
    createdAt?: DateTimeFilter<"Fatura"> | Date | string
    updatedAt?: DateTimeFilter<"Fatura"> | Date | string
    cartao?: XOR<CartaoScalarRelationFilter, CartaoWhereInput>
    parcelas?: ParcelaListRelationFilter
  }, "id">

  export type FaturaOrderByWithAggregationInput = {
    id?: SortOrder
    cartaoId?: SortOrder
    mesReferente?: SortOrder
    vencimento?: SortOrder
    paga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FaturaCountOrderByAggregateInput
    _avg?: FaturaAvgOrderByAggregateInput
    _max?: FaturaMaxOrderByAggregateInput
    _min?: FaturaMinOrderByAggregateInput
    _sum?: FaturaSumOrderByAggregateInput
  }

  export type FaturaScalarWhereWithAggregatesInput = {
    AND?: FaturaScalarWhereWithAggregatesInput | FaturaScalarWhereWithAggregatesInput[]
    OR?: FaturaScalarWhereWithAggregatesInput[]
    NOT?: FaturaScalarWhereWithAggregatesInput | FaturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fatura"> | number
    cartaoId?: IntWithAggregatesFilter<"Fatura"> | number
    mesReferente?: DateTimeWithAggregatesFilter<"Fatura"> | Date | string
    vencimento?: DateTimeWithAggregatesFilter<"Fatura"> | Date | string
    paga?: BoolWithAggregatesFilter<"Fatura"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Fatura"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fatura"> | Date | string
  }

  export type RelatorioWhereInput = {
    AND?: RelatorioWhereInput | RelatorioWhereInput[]
    OR?: RelatorioWhereInput[]
    NOT?: RelatorioWhereInput | RelatorioWhereInput[]
    id?: IntFilter<"Relatorio"> | number
    usuarioId?: IntFilter<"Relatorio"> | number
    dataGeracao?: DateTimeFilter<"Relatorio"> | Date | string
    tipo?: EnumTipoRelatorioFilter<"Relatorio"> | $Enums.TipoRelatorio
    dados?: JsonFilter<"Relatorio">
    inicioPeriodo?: DateTimeNullableFilter<"Relatorio"> | Date | string | null
    fimPeriodo?: DateTimeNullableFilter<"Relatorio"> | Date | string | null
    createdAt?: DateTimeFilter<"Relatorio"> | Date | string
    updatedAt?: DateTimeFilter<"Relatorio"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RelatorioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    dataGeracao?: SortOrder
    tipo?: SortOrder
    dados?: SortOrder
    inicioPeriodo?: SortOrderInput | SortOrder
    fimPeriodo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type RelatorioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RelatorioWhereInput | RelatorioWhereInput[]
    OR?: RelatorioWhereInput[]
    NOT?: RelatorioWhereInput | RelatorioWhereInput[]
    usuarioId?: IntFilter<"Relatorio"> | number
    dataGeracao?: DateTimeFilter<"Relatorio"> | Date | string
    tipo?: EnumTipoRelatorioFilter<"Relatorio"> | $Enums.TipoRelatorio
    dados?: JsonFilter<"Relatorio">
    inicioPeriodo?: DateTimeNullableFilter<"Relatorio"> | Date | string | null
    fimPeriodo?: DateTimeNullableFilter<"Relatorio"> | Date | string | null
    createdAt?: DateTimeFilter<"Relatorio"> | Date | string
    updatedAt?: DateTimeFilter<"Relatorio"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type RelatorioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    dataGeracao?: SortOrder
    tipo?: SortOrder
    dados?: SortOrder
    inicioPeriodo?: SortOrderInput | SortOrder
    fimPeriodo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RelatorioCountOrderByAggregateInput
    _avg?: RelatorioAvgOrderByAggregateInput
    _max?: RelatorioMaxOrderByAggregateInput
    _min?: RelatorioMinOrderByAggregateInput
    _sum?: RelatorioSumOrderByAggregateInput
  }

  export type RelatorioScalarWhereWithAggregatesInput = {
    AND?: RelatorioScalarWhereWithAggregatesInput | RelatorioScalarWhereWithAggregatesInput[]
    OR?: RelatorioScalarWhereWithAggregatesInput[]
    NOT?: RelatorioScalarWhereWithAggregatesInput | RelatorioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relatorio"> | number
    usuarioId?: IntWithAggregatesFilter<"Relatorio"> | number
    dataGeracao?: DateTimeWithAggregatesFilter<"Relatorio"> | Date | string
    tipo?: EnumTipoRelatorioWithAggregatesFilter<"Relatorio"> | $Enums.TipoRelatorio
    dados?: JsonWithAggregatesFilter<"Relatorio">
    inicioPeriodo?: DateTimeNullableWithAggregatesFilter<"Relatorio"> | Date | string | null
    fimPeriodo?: DateTimeNullableWithAggregatesFilter<"Relatorio"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Relatorio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Relatorio"> | Date | string
  }

  export type DivisaoDeGastoWhereInput = {
    AND?: DivisaoDeGastoWhereInput | DivisaoDeGastoWhereInput[]
    OR?: DivisaoDeGastoWhereInput[]
    NOT?: DivisaoDeGastoWhereInput | DivisaoDeGastoWhereInput[]
    id?: IntFilter<"DivisaoDeGasto"> | number
    valorTotal?: FloatFilter<"DivisaoDeGasto"> | number
    descricao?: StringFilter<"DivisaoDeGasto"> | string
    data?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoFilter<"DivisaoDeGasto"> | $Enums.MeioDePagamento
    numParcelas?: IntFilter<"DivisaoDeGasto"> | number
    categoriaId?: IntNullableFilter<"DivisaoDeGasto"> | number | null
    cartaoId?: IntNullableFilter<"DivisaoDeGasto"> | number | null
    createdAt?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    updatedAt?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    cartao?: XOR<CartaoNullableScalarRelationFilter, CartaoWhereInput> | null
    gastos?: GastoListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }

  export type DivisaoDeGastoOrderByWithRelationInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    cartaoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    cartao?: CartaoOrderByWithRelationInput
    gastos?: GastoOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type DivisaoDeGastoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivisaoDeGastoWhereInput | DivisaoDeGastoWhereInput[]
    OR?: DivisaoDeGastoWhereInput[]
    NOT?: DivisaoDeGastoWhereInput | DivisaoDeGastoWhereInput[]
    valorTotal?: FloatFilter<"DivisaoDeGasto"> | number
    descricao?: StringFilter<"DivisaoDeGasto"> | string
    data?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoFilter<"DivisaoDeGasto"> | $Enums.MeioDePagamento
    numParcelas?: IntFilter<"DivisaoDeGasto"> | number
    categoriaId?: IntNullableFilter<"DivisaoDeGasto"> | number | null
    cartaoId?: IntNullableFilter<"DivisaoDeGasto"> | number | null
    createdAt?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    updatedAt?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    cartao?: XOR<CartaoNullableScalarRelationFilter, CartaoWhereInput> | null
    gastos?: GastoListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type DivisaoDeGastoOrderByWithAggregationInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    cartaoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DivisaoDeGastoCountOrderByAggregateInput
    _avg?: DivisaoDeGastoAvgOrderByAggregateInput
    _max?: DivisaoDeGastoMaxOrderByAggregateInput
    _min?: DivisaoDeGastoMinOrderByAggregateInput
    _sum?: DivisaoDeGastoSumOrderByAggregateInput
  }

  export type DivisaoDeGastoScalarWhereWithAggregatesInput = {
    AND?: DivisaoDeGastoScalarWhereWithAggregatesInput | DivisaoDeGastoScalarWhereWithAggregatesInput[]
    OR?: DivisaoDeGastoScalarWhereWithAggregatesInput[]
    NOT?: DivisaoDeGastoScalarWhereWithAggregatesInput | DivisaoDeGastoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DivisaoDeGasto"> | number
    valorTotal?: FloatWithAggregatesFilter<"DivisaoDeGasto"> | number
    descricao?: StringWithAggregatesFilter<"DivisaoDeGasto"> | string
    data?: DateTimeWithAggregatesFilter<"DivisaoDeGasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoWithAggregatesFilter<"DivisaoDeGasto"> | $Enums.MeioDePagamento
    numParcelas?: IntWithAggregatesFilter<"DivisaoDeGasto"> | number
    categoriaId?: IntNullableWithAggregatesFilter<"DivisaoDeGasto"> | number | null
    cartaoId?: IntNullableWithAggregatesFilter<"DivisaoDeGasto"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DivisaoDeGasto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DivisaoDeGasto"> | Date | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    mensagem?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    usuarioId?: IntFilter<"Notificacao"> | number
    visualizado?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
    visualizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    mensagem?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    usuarioId?: IntFilter<"Notificacao"> | number
    visualizado?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
    visualizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _avg?: NotificacaoAvgOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
    _sum?: NotificacaoSumOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacao"> | number
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    dataEnvio?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Notificacao"> | number
    visualizado?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutCategoriaInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutCategoriaInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutCategoriaNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutCategoriaNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartaoCreateInput = {
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCartoesInput
    gastos?: GastoCreateNestedManyWithoutCartaoInput
    faturas?: FaturaCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutCartaoInput
  }

  export type CartaoUncheckedCreateInput = {
    id?: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutCartaoInput
    faturas?: FaturaUncheckedCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutCartaoInput
  }

  export type CartaoUpdateInput = {
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCartoesNestedInput
    gastos?: GastoUpdateManyWithoutCartaoNestedInput
    faturas?: FaturaUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutCartaoNestedInput
  }

  export type CartaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutCartaoNestedInput
    faturas?: FaturaUncheckedUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutCartaoNestedInput
  }

  export type CartaoCreateManyInput = {
    id?: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartaoUpdateManyMutationInput = {
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoCreateInput = {
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGastosInput
    categoria?: CategoriaCreateNestedOneWithoutGastosInput
    cartao?: CartaoCreateNestedOneWithoutGastosInput
    parcelas?: ParcelaCreateNestedManyWithoutGastoInput
    divisaoDeGasto?: DivisaoDeGastoCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutGastoInput
  }

  export type GastoUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGastosNestedInput
    categoria?: CategoriaUpdateOneWithoutGastosNestedInput
    cartao?: CartaoUpdateOneWithoutGastosNestedInput
    parcelas?: ParcelaUpdateManyWithoutGastoNestedInput
    divisaoDeGasto?: DivisaoDeGastoUpdateOneWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutGastoNestedInput
  }

  export type GastoCreateManyInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GastoUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaCreateInput = {
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gasto?: GastoCreateNestedOneWithoutParcelasInput
    fatura?: FaturaCreateNestedOneWithoutParcelasInput
  }

  export type ParcelaUncheckedCreateInput = {
    id?: number
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    gastoId?: number | null
    faturaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gasto?: GastoUpdateOneWithoutParcelasNestedInput
    fatura?: FaturaUpdateOneWithoutParcelasNestedInput
  }

  export type ParcelaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
    faturaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaCreateManyInput = {
    id?: number
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    gastoId?: number | null
    faturaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
    faturaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturaCreateInput = {
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cartao: CartaoCreateNestedOneWithoutFaturasInput
    parcelas?: ParcelaCreateNestedManyWithoutFaturaInput
  }

  export type FaturaUncheckedCreateInput = {
    id?: number
    cartaoId: number
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutFaturaInput
  }

  export type FaturaUpdateInput = {
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao?: CartaoUpdateOneRequiredWithoutFaturasNestedInput
    parcelas?: ParcelaUpdateManyWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartaoId?: IntFieldUpdateOperationsInput | number
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutFaturaNestedInput
  }

  export type FaturaCreateManyInput = {
    id?: number
    cartaoId: number
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaturaUpdateManyMutationInput = {
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartaoId?: IntFieldUpdateOperationsInput | number
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioCreateInput = {
    dataGeracao: Date | string
    tipo: $Enums.TipoRelatorio
    dados: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: Date | string | null
    fimPeriodo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRelatoriosInput
  }

  export type RelatorioUncheckedCreateInput = {
    id?: number
    usuarioId: number
    dataGeracao: Date | string
    tipo: $Enums.TipoRelatorio
    dados: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: Date | string | null
    fimPeriodo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatorioUpdateInput = {
    dataGeracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoRelatorioFieldUpdateOperationsInput | $Enums.TipoRelatorio
    dados?: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRelatoriosNestedInput
  }

  export type RelatorioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataGeracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoRelatorioFieldUpdateOperationsInput | $Enums.TipoRelatorio
    dados?: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioCreateManyInput = {
    id?: number
    usuarioId: number
    dataGeracao: Date | string
    tipo: $Enums.TipoRelatorio
    dados: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: Date | string | null
    fimPeriodo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatorioUpdateManyMutationInput = {
    dataGeracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoRelatorioFieldUpdateOperationsInput | $Enums.TipoRelatorio
    dados?: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataGeracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoRelatorioFieldUpdateOperationsInput | $Enums.TipoRelatorio
    dados?: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisaoDeGastoCreateInput = {
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutDivisoesDeGastoInput
    cartao?: CartaoCreateNestedOneWithoutDivisoesDeGastoInput
    gastos?: GastoCreateNestedManyWithoutDivisaoDeGastoInput
    usuarios?: UsuarioCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoUncheckedCreateInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutDivisaoDeGastoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoUpdateInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutDivisoesDeGastoNestedInput
    cartao?: CartaoUpdateOneWithoutDivisoesDeGastoNestedInput
    gastos?: GastoUpdateManyWithoutDivisaoDeGastoNestedInput
    usuarios?: UsuarioUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutDivisaoDeGastoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type DivisaoDeGastoCreateManyInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DivisaoDeGastoUpdateManyMutationInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisaoDeGastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateInput = {
    mensagem: string
    dataEnvio?: Date | string
    visualizado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: number
    mensagem: string
    dataEnvio?: Date | string
    usuarioId: number
    visualizado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    visualizado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: number
    mensagem: string
    dataEnvio?: Date | string
    usuarioId: number
    visualizado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    visualizado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GastoListRelationFilter = {
    every?: GastoWhereInput
    some?: GastoWhereInput
    none?: GastoWhereInput
  }

  export type CartaoListRelationFilter = {
    every?: CartaoWhereInput
    some?: CartaoWhereInput
    none?: CartaoWhereInput
  }

  export type RelatorioListRelationFilter = {
    every?: RelatorioWhereInput
    some?: RelatorioWhereInput
    none?: RelatorioWhereInput
  }

  export type DivisaoDeGastoListRelationFilter = {
    every?: DivisaoDeGastoWhereInput
    some?: DivisaoDeGastoWhereInput
    none?: DivisaoDeGastoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type GastoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelatorioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DivisaoDeGastoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FaturaListRelationFilter = {
    every?: FaturaWhereInput
    some?: FaturaWhereInput
    none?: FaturaWhereInput
  }

  export type FaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartaoCountOrderByAggregateInput = {
    id?: SortOrder
    banco?: SortOrder
    limiteTotal?: SortOrder
    limiteRestante?: SortOrder
    ultimosQuatroDigitos?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartaoAvgOrderByAggregateInput = {
    id?: SortOrder
    limiteTotal?: SortOrder
    limiteRestante?: SortOrder
    usuarioId?: SortOrder
  }

  export type CartaoMaxOrderByAggregateInput = {
    id?: SortOrder
    banco?: SortOrder
    limiteTotal?: SortOrder
    limiteRestante?: SortOrder
    ultimosQuatroDigitos?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartaoMinOrderByAggregateInput = {
    id?: SortOrder
    banco?: SortOrder
    limiteTotal?: SortOrder
    limiteRestante?: SortOrder
    ultimosQuatroDigitos?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartaoSumOrderByAggregateInput = {
    id?: SortOrder
    limiteTotal?: SortOrder
    limiteRestante?: SortOrder
    usuarioId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMeioDePagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.MeioDePagamento | EnumMeioDePagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMeioDePagamentoFilter<$PrismaModel> | $Enums.MeioDePagamento
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

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type CartaoNullableScalarRelationFilter = {
    is?: CartaoWhereInput | null
    isNot?: CartaoWhereInput | null
  }

  export type ParcelaListRelationFilter = {
    every?: ParcelaWhereInput
    some?: ParcelaWhereInput
    none?: ParcelaWhereInput
  }

  export type DivisaoDeGastoNullableScalarRelationFilter = {
    is?: DivisaoDeGastoWhereInput | null
    isNot?: DivisaoDeGastoWhereInput | null
  }

  export type ParcelaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GastoCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    usuarioId?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    divisaoDeGastoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GastoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    divisaoDeGastoId?: SortOrder
  }

  export type GastoMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    usuarioId?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    divisaoDeGastoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GastoMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    usuarioId?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    divisaoDeGastoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GastoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    divisaoDeGastoId?: SortOrder
  }

  export type EnumMeioDePagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeioDePagamento | EnumMeioDePagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMeioDePagamentoWithAggregatesFilter<$PrismaModel> | $Enums.MeioDePagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeioDePagamentoFilter<$PrismaModel>
    _max?: NestedEnumMeioDePagamentoFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GastoNullableScalarRelationFilter = {
    is?: GastoWhereInput | null
    isNot?: GastoWhereInput | null
  }

  export type FaturaNullableScalarRelationFilter = {
    is?: FaturaWhereInput | null
    isNot?: FaturaWhereInput | null
  }

  export type ParcelaCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    paga?: SortOrder
    numeroParcela?: SortOrder
    totalParcelas?: SortOrder
    gastoId?: SortOrder
    faturaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelaAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    numeroParcela?: SortOrder
    totalParcelas?: SortOrder
    gastoId?: SortOrder
    faturaId?: SortOrder
  }

  export type ParcelaMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    paga?: SortOrder
    numeroParcela?: SortOrder
    totalParcelas?: SortOrder
    gastoId?: SortOrder
    faturaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelaMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    paga?: SortOrder
    numeroParcela?: SortOrder
    totalParcelas?: SortOrder
    gastoId?: SortOrder
    faturaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelaSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    numeroParcela?: SortOrder
    totalParcelas?: SortOrder
    gastoId?: SortOrder
    faturaId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CartaoScalarRelationFilter = {
    is?: CartaoWhereInput
    isNot?: CartaoWhereInput
  }

  export type FaturaCountOrderByAggregateInput = {
    id?: SortOrder
    cartaoId?: SortOrder
    mesReferente?: SortOrder
    vencimento?: SortOrder
    paga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaturaAvgOrderByAggregateInput = {
    id?: SortOrder
    cartaoId?: SortOrder
  }

  export type FaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    cartaoId?: SortOrder
    mesReferente?: SortOrder
    vencimento?: SortOrder
    paga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaturaMinOrderByAggregateInput = {
    id?: SortOrder
    cartaoId?: SortOrder
    mesReferente?: SortOrder
    vencimento?: SortOrder
    paga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaturaSumOrderByAggregateInput = {
    id?: SortOrder
    cartaoId?: SortOrder
  }

  export type EnumTipoRelatorioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRelatorio | EnumTipoRelatorioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRelatorioFilter<$PrismaModel> | $Enums.TipoRelatorio
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

  export type RelatorioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    dataGeracao?: SortOrder
    tipo?: SortOrder
    dados?: SortOrder
    inicioPeriodo?: SortOrder
    fimPeriodo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelatorioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type RelatorioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    dataGeracao?: SortOrder
    tipo?: SortOrder
    inicioPeriodo?: SortOrder
    fimPeriodo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelatorioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    dataGeracao?: SortOrder
    tipo?: SortOrder
    inicioPeriodo?: SortOrder
    fimPeriodo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelatorioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumTipoRelatorioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRelatorio | EnumTipoRelatorioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRelatorioWithAggregatesFilter<$PrismaModel> | $Enums.TipoRelatorio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoRelatorioFilter<$PrismaModel>
    _max?: NestedEnumTipoRelatorioFilter<$PrismaModel>
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DivisaoDeGastoCountOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DivisaoDeGastoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
  }

  export type DivisaoDeGastoMaxOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DivisaoDeGastoMinOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    meioPagamento?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DivisaoDeGastoSumOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
    numParcelas?: SortOrder
    categoriaId?: SortOrder
    cartaoId?: SortOrder
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
    visualizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
    visualizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
    visualizado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificacaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type GastoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<GastoCreateWithoutUsuarioInput, GastoUncheckedCreateWithoutUsuarioInput> | GastoCreateWithoutUsuarioInput[] | GastoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutUsuarioInput | GastoCreateOrConnectWithoutUsuarioInput[]
    createMany?: GastoCreateManyUsuarioInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type CartaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
  }

  export type RelatorioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RelatorioCreateWithoutUsuarioInput, RelatorioUncheckedCreateWithoutUsuarioInput> | RelatorioCreateWithoutUsuarioInput[] | RelatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutUsuarioInput | RelatorioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RelatorioCreateManyUsuarioInputEnvelope
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type DivisaoDeGastoCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutUsuariosInput, DivisaoDeGastoUncheckedCreateWithoutUsuariosInput> | DivisaoDeGastoCreateWithoutUsuariosInput[] | DivisaoDeGastoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutUsuariosInput | DivisaoDeGastoCreateOrConnectWithoutUsuariosInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<GastoCreateWithoutUsuarioInput, GastoUncheckedCreateWithoutUsuarioInput> | GastoCreateWithoutUsuarioInput[] | GastoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutUsuarioInput | GastoCreateOrConnectWithoutUsuarioInput[]
    createMany?: GastoCreateManyUsuarioInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type CartaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
  }

  export type RelatorioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RelatorioCreateWithoutUsuarioInput, RelatorioUncheckedCreateWithoutUsuarioInput> | RelatorioCreateWithoutUsuarioInput[] | RelatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutUsuarioInput | RelatorioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RelatorioCreateManyUsuarioInputEnvelope
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type DivisaoDeGastoUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutUsuariosInput, DivisaoDeGastoUncheckedCreateWithoutUsuariosInput> | DivisaoDeGastoCreateWithoutUsuariosInput[] | DivisaoDeGastoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutUsuariosInput | DivisaoDeGastoCreateOrConnectWithoutUsuariosInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GastoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<GastoCreateWithoutUsuarioInput, GastoUncheckedCreateWithoutUsuarioInput> | GastoCreateWithoutUsuarioInput[] | GastoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutUsuarioInput | GastoCreateOrConnectWithoutUsuarioInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutUsuarioInput | GastoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: GastoCreateManyUsuarioInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutUsuarioInput | GastoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutUsuarioInput | GastoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type CartaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CartaoUpsertWithWhereUniqueWithoutUsuarioInput | CartaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    set?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    disconnect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    delete?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    update?: CartaoUpdateWithWhereUniqueWithoutUsuarioInput | CartaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CartaoUpdateManyWithWhereWithoutUsuarioInput | CartaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
  }

  export type RelatorioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RelatorioCreateWithoutUsuarioInput, RelatorioUncheckedCreateWithoutUsuarioInput> | RelatorioCreateWithoutUsuarioInput[] | RelatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutUsuarioInput | RelatorioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutUsuarioInput | RelatorioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RelatorioCreateManyUsuarioInputEnvelope
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutUsuarioInput | RelatorioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutUsuarioInput | RelatorioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type DivisaoDeGastoUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutUsuariosInput, DivisaoDeGastoUncheckedCreateWithoutUsuariosInput> | DivisaoDeGastoCreateWithoutUsuariosInput[] | DivisaoDeGastoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutUsuariosInput | DivisaoDeGastoCreateOrConnectWithoutUsuariosInput[]
    upsert?: DivisaoDeGastoUpsertWithWhereUniqueWithoutUsuariosInput | DivisaoDeGastoUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    disconnect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    delete?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    update?: DivisaoDeGastoUpdateWithWhereUniqueWithoutUsuariosInput | DivisaoDeGastoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: DivisaoDeGastoUpdateManyWithWhereWithoutUsuariosInput | DivisaoDeGastoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GastoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<GastoCreateWithoutUsuarioInput, GastoUncheckedCreateWithoutUsuarioInput> | GastoCreateWithoutUsuarioInput[] | GastoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutUsuarioInput | GastoCreateOrConnectWithoutUsuarioInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutUsuarioInput | GastoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: GastoCreateManyUsuarioInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutUsuarioInput | GastoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutUsuarioInput | GastoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type CartaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CartaoUpsertWithWhereUniqueWithoutUsuarioInput | CartaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    set?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    disconnect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    delete?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    update?: CartaoUpdateWithWhereUniqueWithoutUsuarioInput | CartaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CartaoUpdateManyWithWhereWithoutUsuarioInput | CartaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
  }

  export type RelatorioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RelatorioCreateWithoutUsuarioInput, RelatorioUncheckedCreateWithoutUsuarioInput> | RelatorioCreateWithoutUsuarioInput[] | RelatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutUsuarioInput | RelatorioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutUsuarioInput | RelatorioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RelatorioCreateManyUsuarioInputEnvelope
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutUsuarioInput | RelatorioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutUsuarioInput | RelatorioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutUsuariosInput, DivisaoDeGastoUncheckedCreateWithoutUsuariosInput> | DivisaoDeGastoCreateWithoutUsuariosInput[] | DivisaoDeGastoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutUsuariosInput | DivisaoDeGastoCreateOrConnectWithoutUsuariosInput[]
    upsert?: DivisaoDeGastoUpsertWithWhereUniqueWithoutUsuariosInput | DivisaoDeGastoUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    disconnect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    delete?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    update?: DivisaoDeGastoUpdateWithWhereUniqueWithoutUsuariosInput | DivisaoDeGastoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: DivisaoDeGastoUpdateManyWithWhereWithoutUsuariosInput | DivisaoDeGastoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type GastoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<GastoCreateWithoutCategoriaInput, GastoUncheckedCreateWithoutCategoriaInput> | GastoCreateWithoutCategoriaInput[] | GastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCategoriaInput | GastoCreateOrConnectWithoutCategoriaInput[]
    createMany?: GastoCreateManyCategoriaInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type DivisaoDeGastoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCategoriaInput, DivisaoDeGastoUncheckedCreateWithoutCategoriaInput> | DivisaoDeGastoCreateWithoutCategoriaInput[] | DivisaoDeGastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCategoriaInput | DivisaoDeGastoCreateOrConnectWithoutCategoriaInput[]
    createMany?: DivisaoDeGastoCreateManyCategoriaInputEnvelope
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<GastoCreateWithoutCategoriaInput, GastoUncheckedCreateWithoutCategoriaInput> | GastoCreateWithoutCategoriaInput[] | GastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCategoriaInput | GastoCreateOrConnectWithoutCategoriaInput[]
    createMany?: GastoCreateManyCategoriaInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type DivisaoDeGastoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCategoriaInput, DivisaoDeGastoUncheckedCreateWithoutCategoriaInput> | DivisaoDeGastoCreateWithoutCategoriaInput[] | DivisaoDeGastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCategoriaInput | DivisaoDeGastoCreateOrConnectWithoutCategoriaInput[]
    createMany?: DivisaoDeGastoCreateManyCategoriaInputEnvelope
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GastoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<GastoCreateWithoutCategoriaInput, GastoUncheckedCreateWithoutCategoriaInput> | GastoCreateWithoutCategoriaInput[] | GastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCategoriaInput | GastoCreateOrConnectWithoutCategoriaInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutCategoriaInput | GastoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: GastoCreateManyCategoriaInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutCategoriaInput | GastoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutCategoriaInput | GastoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type DivisaoDeGastoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCategoriaInput, DivisaoDeGastoUncheckedCreateWithoutCategoriaInput> | DivisaoDeGastoCreateWithoutCategoriaInput[] | DivisaoDeGastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCategoriaInput | DivisaoDeGastoCreateOrConnectWithoutCategoriaInput[]
    upsert?: DivisaoDeGastoUpsertWithWhereUniqueWithoutCategoriaInput | DivisaoDeGastoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: DivisaoDeGastoCreateManyCategoriaInputEnvelope
    set?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    disconnect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    delete?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    update?: DivisaoDeGastoUpdateWithWhereUniqueWithoutCategoriaInput | DivisaoDeGastoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: DivisaoDeGastoUpdateManyWithWhereWithoutCategoriaInput | DivisaoDeGastoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<GastoCreateWithoutCategoriaInput, GastoUncheckedCreateWithoutCategoriaInput> | GastoCreateWithoutCategoriaInput[] | GastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCategoriaInput | GastoCreateOrConnectWithoutCategoriaInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutCategoriaInput | GastoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: GastoCreateManyCategoriaInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutCategoriaInput | GastoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutCategoriaInput | GastoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type DivisaoDeGastoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCategoriaInput, DivisaoDeGastoUncheckedCreateWithoutCategoriaInput> | DivisaoDeGastoCreateWithoutCategoriaInput[] | DivisaoDeGastoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCategoriaInput | DivisaoDeGastoCreateOrConnectWithoutCategoriaInput[]
    upsert?: DivisaoDeGastoUpsertWithWhereUniqueWithoutCategoriaInput | DivisaoDeGastoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: DivisaoDeGastoCreateManyCategoriaInputEnvelope
    set?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    disconnect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    delete?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    update?: DivisaoDeGastoUpdateWithWhereUniqueWithoutCategoriaInput | DivisaoDeGastoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: DivisaoDeGastoUpdateManyWithWhereWithoutCategoriaInput | DivisaoDeGastoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCartoesInput = {
    create?: XOR<UsuarioCreateWithoutCartoesInput, UsuarioUncheckedCreateWithoutCartoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCartoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type GastoCreateNestedManyWithoutCartaoInput = {
    create?: XOR<GastoCreateWithoutCartaoInput, GastoUncheckedCreateWithoutCartaoInput> | GastoCreateWithoutCartaoInput[] | GastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCartaoInput | GastoCreateOrConnectWithoutCartaoInput[]
    createMany?: GastoCreateManyCartaoInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type FaturaCreateNestedManyWithoutCartaoInput = {
    create?: XOR<FaturaCreateWithoutCartaoInput, FaturaUncheckedCreateWithoutCartaoInput> | FaturaCreateWithoutCartaoInput[] | FaturaUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutCartaoInput | FaturaCreateOrConnectWithoutCartaoInput[]
    createMany?: FaturaCreateManyCartaoInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type DivisaoDeGastoCreateNestedManyWithoutCartaoInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCartaoInput, DivisaoDeGastoUncheckedCreateWithoutCartaoInput> | DivisaoDeGastoCreateWithoutCartaoInput[] | DivisaoDeGastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCartaoInput | DivisaoDeGastoCreateOrConnectWithoutCartaoInput[]
    createMany?: DivisaoDeGastoCreateManyCartaoInputEnvelope
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutCartaoInput = {
    create?: XOR<GastoCreateWithoutCartaoInput, GastoUncheckedCreateWithoutCartaoInput> | GastoCreateWithoutCartaoInput[] | GastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCartaoInput | GastoCreateOrConnectWithoutCartaoInput[]
    createMany?: GastoCreateManyCartaoInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type FaturaUncheckedCreateNestedManyWithoutCartaoInput = {
    create?: XOR<FaturaCreateWithoutCartaoInput, FaturaUncheckedCreateWithoutCartaoInput> | FaturaCreateWithoutCartaoInput[] | FaturaUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutCartaoInput | FaturaCreateOrConnectWithoutCartaoInput[]
    createMany?: FaturaCreateManyCartaoInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type DivisaoDeGastoUncheckedCreateNestedManyWithoutCartaoInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCartaoInput, DivisaoDeGastoUncheckedCreateWithoutCartaoInput> | DivisaoDeGastoCreateWithoutCartaoInput[] | DivisaoDeGastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCartaoInput | DivisaoDeGastoCreateOrConnectWithoutCartaoInput[]
    createMany?: DivisaoDeGastoCreateManyCartaoInputEnvelope
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutCartoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutCartoesInput, UsuarioUncheckedCreateWithoutCartoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCartoesInput
    upsert?: UsuarioUpsertWithoutCartoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCartoesInput, UsuarioUpdateWithoutCartoesInput>, UsuarioUncheckedUpdateWithoutCartoesInput>
  }

  export type GastoUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<GastoCreateWithoutCartaoInput, GastoUncheckedCreateWithoutCartaoInput> | GastoCreateWithoutCartaoInput[] | GastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCartaoInput | GastoCreateOrConnectWithoutCartaoInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutCartaoInput | GastoUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: GastoCreateManyCartaoInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutCartaoInput | GastoUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutCartaoInput | GastoUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type FaturaUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<FaturaCreateWithoutCartaoInput, FaturaUncheckedCreateWithoutCartaoInput> | FaturaCreateWithoutCartaoInput[] | FaturaUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutCartaoInput | FaturaCreateOrConnectWithoutCartaoInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutCartaoInput | FaturaUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: FaturaCreateManyCartaoInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutCartaoInput | FaturaUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutCartaoInput | FaturaUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type DivisaoDeGastoUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCartaoInput, DivisaoDeGastoUncheckedCreateWithoutCartaoInput> | DivisaoDeGastoCreateWithoutCartaoInput[] | DivisaoDeGastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCartaoInput | DivisaoDeGastoCreateOrConnectWithoutCartaoInput[]
    upsert?: DivisaoDeGastoUpsertWithWhereUniqueWithoutCartaoInput | DivisaoDeGastoUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: DivisaoDeGastoCreateManyCartaoInputEnvelope
    set?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    disconnect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    delete?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    update?: DivisaoDeGastoUpdateWithWhereUniqueWithoutCartaoInput | DivisaoDeGastoUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: DivisaoDeGastoUpdateManyWithWhereWithoutCartaoInput | DivisaoDeGastoUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<GastoCreateWithoutCartaoInput, GastoUncheckedCreateWithoutCartaoInput> | GastoCreateWithoutCartaoInput[] | GastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutCartaoInput | GastoCreateOrConnectWithoutCartaoInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutCartaoInput | GastoUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: GastoCreateManyCartaoInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutCartaoInput | GastoUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutCartaoInput | GastoUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type FaturaUncheckedUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<FaturaCreateWithoutCartaoInput, FaturaUncheckedCreateWithoutCartaoInput> | FaturaCreateWithoutCartaoInput[] | FaturaUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutCartaoInput | FaturaCreateOrConnectWithoutCartaoInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutCartaoInput | FaturaUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: FaturaCreateManyCartaoInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutCartaoInput | FaturaUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutCartaoInput | FaturaUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type DivisaoDeGastoUncheckedUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutCartaoInput, DivisaoDeGastoUncheckedCreateWithoutCartaoInput> | DivisaoDeGastoCreateWithoutCartaoInput[] | DivisaoDeGastoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutCartaoInput | DivisaoDeGastoCreateOrConnectWithoutCartaoInput[]
    upsert?: DivisaoDeGastoUpsertWithWhereUniqueWithoutCartaoInput | DivisaoDeGastoUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: DivisaoDeGastoCreateManyCartaoInputEnvelope
    set?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    disconnect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    delete?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    connect?: DivisaoDeGastoWhereUniqueInput | DivisaoDeGastoWhereUniqueInput[]
    update?: DivisaoDeGastoUpdateWithWhereUniqueWithoutCartaoInput | DivisaoDeGastoUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: DivisaoDeGastoUpdateManyWithWhereWithoutCartaoInput | DivisaoDeGastoUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutGastosInput = {
    create?: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGastosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutGastosInput = {
    create?: XOR<CategoriaCreateWithoutGastosInput, CategoriaUncheckedCreateWithoutGastosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutGastosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type CartaoCreateNestedOneWithoutGastosInput = {
    create?: XOR<CartaoCreateWithoutGastosInput, CartaoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: CartaoCreateOrConnectWithoutGastosInput
    connect?: CartaoWhereUniqueInput
  }

  export type ParcelaCreateNestedManyWithoutGastoInput = {
    create?: XOR<ParcelaCreateWithoutGastoInput, ParcelaUncheckedCreateWithoutGastoInput> | ParcelaCreateWithoutGastoInput[] | ParcelaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutGastoInput | ParcelaCreateOrConnectWithoutGastoInput[]
    createMany?: ParcelaCreateManyGastoInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type DivisaoDeGastoCreateNestedOneWithoutGastosInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutGastosInput, DivisaoDeGastoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutGastosInput
    connect?: DivisaoDeGastoWhereUniqueInput
  }

  export type ParcelaUncheckedCreateNestedManyWithoutGastoInput = {
    create?: XOR<ParcelaCreateWithoutGastoInput, ParcelaUncheckedCreateWithoutGastoInput> | ParcelaCreateWithoutGastoInput[] | ParcelaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutGastoInput | ParcelaCreateOrConnectWithoutGastoInput[]
    createMany?: ParcelaCreateManyGastoInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type EnumMeioDePagamentoFieldUpdateOperationsInput = {
    set?: $Enums.MeioDePagamento
  }

  export type UsuarioUpdateOneRequiredWithoutGastosNestedInput = {
    create?: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGastosInput
    upsert?: UsuarioUpsertWithoutGastosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGastosInput, UsuarioUpdateWithoutGastosInput>, UsuarioUncheckedUpdateWithoutGastosInput>
  }

  export type CategoriaUpdateOneWithoutGastosNestedInput = {
    create?: XOR<CategoriaCreateWithoutGastosInput, CategoriaUncheckedCreateWithoutGastosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutGastosInput
    upsert?: CategoriaUpsertWithoutGastosInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutGastosInput, CategoriaUpdateWithoutGastosInput>, CategoriaUncheckedUpdateWithoutGastosInput>
  }

  export type CartaoUpdateOneWithoutGastosNestedInput = {
    create?: XOR<CartaoCreateWithoutGastosInput, CartaoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: CartaoCreateOrConnectWithoutGastosInput
    upsert?: CartaoUpsertWithoutGastosInput
    disconnect?: CartaoWhereInput | boolean
    delete?: CartaoWhereInput | boolean
    connect?: CartaoWhereUniqueInput
    update?: XOR<XOR<CartaoUpdateToOneWithWhereWithoutGastosInput, CartaoUpdateWithoutGastosInput>, CartaoUncheckedUpdateWithoutGastosInput>
  }

  export type ParcelaUpdateManyWithoutGastoNestedInput = {
    create?: XOR<ParcelaCreateWithoutGastoInput, ParcelaUncheckedCreateWithoutGastoInput> | ParcelaCreateWithoutGastoInput[] | ParcelaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutGastoInput | ParcelaCreateOrConnectWithoutGastoInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutGastoInput | ParcelaUpsertWithWhereUniqueWithoutGastoInput[]
    createMany?: ParcelaCreateManyGastoInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutGastoInput | ParcelaUpdateWithWhereUniqueWithoutGastoInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutGastoInput | ParcelaUpdateManyWithWhereWithoutGastoInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type DivisaoDeGastoUpdateOneWithoutGastosNestedInput = {
    create?: XOR<DivisaoDeGastoCreateWithoutGastosInput, DivisaoDeGastoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: DivisaoDeGastoCreateOrConnectWithoutGastosInput
    upsert?: DivisaoDeGastoUpsertWithoutGastosInput
    disconnect?: DivisaoDeGastoWhereInput | boolean
    delete?: DivisaoDeGastoWhereInput | boolean
    connect?: DivisaoDeGastoWhereUniqueInput
    update?: XOR<XOR<DivisaoDeGastoUpdateToOneWithWhereWithoutGastosInput, DivisaoDeGastoUpdateWithoutGastosInput>, DivisaoDeGastoUncheckedUpdateWithoutGastosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParcelaUncheckedUpdateManyWithoutGastoNestedInput = {
    create?: XOR<ParcelaCreateWithoutGastoInput, ParcelaUncheckedCreateWithoutGastoInput> | ParcelaCreateWithoutGastoInput[] | ParcelaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutGastoInput | ParcelaCreateOrConnectWithoutGastoInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutGastoInput | ParcelaUpsertWithWhereUniqueWithoutGastoInput[]
    createMany?: ParcelaCreateManyGastoInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutGastoInput | ParcelaUpdateWithWhereUniqueWithoutGastoInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutGastoInput | ParcelaUpdateManyWithWhereWithoutGastoInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type GastoCreateNestedOneWithoutParcelasInput = {
    create?: XOR<GastoCreateWithoutParcelasInput, GastoUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: GastoCreateOrConnectWithoutParcelasInput
    connect?: GastoWhereUniqueInput
  }

  export type FaturaCreateNestedOneWithoutParcelasInput = {
    create?: XOR<FaturaCreateWithoutParcelasInput, FaturaUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: FaturaCreateOrConnectWithoutParcelasInput
    connect?: FaturaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GastoUpdateOneWithoutParcelasNestedInput = {
    create?: XOR<GastoCreateWithoutParcelasInput, GastoUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: GastoCreateOrConnectWithoutParcelasInput
    upsert?: GastoUpsertWithoutParcelasInput
    disconnect?: GastoWhereInput | boolean
    delete?: GastoWhereInput | boolean
    connect?: GastoWhereUniqueInput
    update?: XOR<XOR<GastoUpdateToOneWithWhereWithoutParcelasInput, GastoUpdateWithoutParcelasInput>, GastoUncheckedUpdateWithoutParcelasInput>
  }

  export type FaturaUpdateOneWithoutParcelasNestedInput = {
    create?: XOR<FaturaCreateWithoutParcelasInput, FaturaUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: FaturaCreateOrConnectWithoutParcelasInput
    upsert?: FaturaUpsertWithoutParcelasInput
    disconnect?: FaturaWhereInput | boolean
    delete?: FaturaWhereInput | boolean
    connect?: FaturaWhereUniqueInput
    update?: XOR<XOR<FaturaUpdateToOneWithWhereWithoutParcelasInput, FaturaUpdateWithoutParcelasInput>, FaturaUncheckedUpdateWithoutParcelasInput>
  }

  export type CartaoCreateNestedOneWithoutFaturasInput = {
    create?: XOR<CartaoCreateWithoutFaturasInput, CartaoUncheckedCreateWithoutFaturasInput>
    connectOrCreate?: CartaoCreateOrConnectWithoutFaturasInput
    connect?: CartaoWhereUniqueInput
  }

  export type ParcelaCreateNestedManyWithoutFaturaInput = {
    create?: XOR<ParcelaCreateWithoutFaturaInput, ParcelaUncheckedCreateWithoutFaturaInput> | ParcelaCreateWithoutFaturaInput[] | ParcelaUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutFaturaInput | ParcelaCreateOrConnectWithoutFaturaInput[]
    createMany?: ParcelaCreateManyFaturaInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type ParcelaUncheckedCreateNestedManyWithoutFaturaInput = {
    create?: XOR<ParcelaCreateWithoutFaturaInput, ParcelaUncheckedCreateWithoutFaturaInput> | ParcelaCreateWithoutFaturaInput[] | ParcelaUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutFaturaInput | ParcelaCreateOrConnectWithoutFaturaInput[]
    createMany?: ParcelaCreateManyFaturaInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type CartaoUpdateOneRequiredWithoutFaturasNestedInput = {
    create?: XOR<CartaoCreateWithoutFaturasInput, CartaoUncheckedCreateWithoutFaturasInput>
    connectOrCreate?: CartaoCreateOrConnectWithoutFaturasInput
    upsert?: CartaoUpsertWithoutFaturasInput
    connect?: CartaoWhereUniqueInput
    update?: XOR<XOR<CartaoUpdateToOneWithWhereWithoutFaturasInput, CartaoUpdateWithoutFaturasInput>, CartaoUncheckedUpdateWithoutFaturasInput>
  }

  export type ParcelaUpdateManyWithoutFaturaNestedInput = {
    create?: XOR<ParcelaCreateWithoutFaturaInput, ParcelaUncheckedCreateWithoutFaturaInput> | ParcelaCreateWithoutFaturaInput[] | ParcelaUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutFaturaInput | ParcelaCreateOrConnectWithoutFaturaInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutFaturaInput | ParcelaUpsertWithWhereUniqueWithoutFaturaInput[]
    createMany?: ParcelaCreateManyFaturaInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutFaturaInput | ParcelaUpdateWithWhereUniqueWithoutFaturaInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutFaturaInput | ParcelaUpdateManyWithWhereWithoutFaturaInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type ParcelaUncheckedUpdateManyWithoutFaturaNestedInput = {
    create?: XOR<ParcelaCreateWithoutFaturaInput, ParcelaUncheckedCreateWithoutFaturaInput> | ParcelaCreateWithoutFaturaInput[] | ParcelaUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutFaturaInput | ParcelaCreateOrConnectWithoutFaturaInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutFaturaInput | ParcelaUpsertWithWhereUniqueWithoutFaturaInput[]
    createMany?: ParcelaCreateManyFaturaInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutFaturaInput | ParcelaUpdateWithWhereUniqueWithoutFaturaInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutFaturaInput | ParcelaUpdateManyWithWhereWithoutFaturaInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRelatoriosInput = {
    create?: XOR<UsuarioCreateWithoutRelatoriosInput, UsuarioUncheckedCreateWithoutRelatoriosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatoriosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoRelatorioFieldUpdateOperationsInput = {
    set?: $Enums.TipoRelatorio
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutRelatoriosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRelatoriosInput, UsuarioUncheckedCreateWithoutRelatoriosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatoriosInput
    upsert?: UsuarioUpsertWithoutRelatoriosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRelatoriosInput, UsuarioUpdateWithoutRelatoriosInput>, UsuarioUncheckedUpdateWithoutRelatoriosInput>
  }

  export type CategoriaCreateNestedOneWithoutDivisoesDeGastoInput = {
    create?: XOR<CategoriaCreateWithoutDivisoesDeGastoInput, CategoriaUncheckedCreateWithoutDivisoesDeGastoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutDivisoesDeGastoInput
    connect?: CategoriaWhereUniqueInput
  }

  export type CartaoCreateNestedOneWithoutDivisoesDeGastoInput = {
    create?: XOR<CartaoCreateWithoutDivisoesDeGastoInput, CartaoUncheckedCreateWithoutDivisoesDeGastoInput>
    connectOrCreate?: CartaoCreateOrConnectWithoutDivisoesDeGastoInput
    connect?: CartaoWhereUniqueInput
  }

  export type GastoCreateNestedManyWithoutDivisaoDeGastoInput = {
    create?: XOR<GastoCreateWithoutDivisaoDeGastoInput, GastoUncheckedCreateWithoutDivisaoDeGastoInput> | GastoCreateWithoutDivisaoDeGastoInput[] | GastoUncheckedCreateWithoutDivisaoDeGastoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutDivisaoDeGastoInput | GastoCreateOrConnectWithoutDivisaoDeGastoInput[]
    createMany?: GastoCreateManyDivisaoDeGastoInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutDivisoesDeGastoInput = {
    create?: XOR<UsuarioCreateWithoutDivisoesDeGastoInput, UsuarioUncheckedCreateWithoutDivisoesDeGastoInput> | UsuarioCreateWithoutDivisoesDeGastoInput[] | UsuarioUncheckedCreateWithoutDivisoesDeGastoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDivisoesDeGastoInput | UsuarioCreateOrConnectWithoutDivisoesDeGastoInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutDivisaoDeGastoInput = {
    create?: XOR<GastoCreateWithoutDivisaoDeGastoInput, GastoUncheckedCreateWithoutDivisaoDeGastoInput> | GastoCreateWithoutDivisaoDeGastoInput[] | GastoUncheckedCreateWithoutDivisaoDeGastoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutDivisaoDeGastoInput | GastoCreateOrConnectWithoutDivisaoDeGastoInput[]
    createMany?: GastoCreateManyDivisaoDeGastoInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutDivisoesDeGastoInput = {
    create?: XOR<UsuarioCreateWithoutDivisoesDeGastoInput, UsuarioUncheckedCreateWithoutDivisoesDeGastoInput> | UsuarioCreateWithoutDivisoesDeGastoInput[] | UsuarioUncheckedCreateWithoutDivisoesDeGastoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDivisoesDeGastoInput | UsuarioCreateOrConnectWithoutDivisoesDeGastoInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type CategoriaUpdateOneWithoutDivisoesDeGastoNestedInput = {
    create?: XOR<CategoriaCreateWithoutDivisoesDeGastoInput, CategoriaUncheckedCreateWithoutDivisoesDeGastoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutDivisoesDeGastoInput
    upsert?: CategoriaUpsertWithoutDivisoesDeGastoInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutDivisoesDeGastoInput, CategoriaUpdateWithoutDivisoesDeGastoInput>, CategoriaUncheckedUpdateWithoutDivisoesDeGastoInput>
  }

  export type CartaoUpdateOneWithoutDivisoesDeGastoNestedInput = {
    create?: XOR<CartaoCreateWithoutDivisoesDeGastoInput, CartaoUncheckedCreateWithoutDivisoesDeGastoInput>
    connectOrCreate?: CartaoCreateOrConnectWithoutDivisoesDeGastoInput
    upsert?: CartaoUpsertWithoutDivisoesDeGastoInput
    disconnect?: CartaoWhereInput | boolean
    delete?: CartaoWhereInput | boolean
    connect?: CartaoWhereUniqueInput
    update?: XOR<XOR<CartaoUpdateToOneWithWhereWithoutDivisoesDeGastoInput, CartaoUpdateWithoutDivisoesDeGastoInput>, CartaoUncheckedUpdateWithoutDivisoesDeGastoInput>
  }

  export type GastoUpdateManyWithoutDivisaoDeGastoNestedInput = {
    create?: XOR<GastoCreateWithoutDivisaoDeGastoInput, GastoUncheckedCreateWithoutDivisaoDeGastoInput> | GastoCreateWithoutDivisaoDeGastoInput[] | GastoUncheckedCreateWithoutDivisaoDeGastoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutDivisaoDeGastoInput | GastoCreateOrConnectWithoutDivisaoDeGastoInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutDivisaoDeGastoInput | GastoUpsertWithWhereUniqueWithoutDivisaoDeGastoInput[]
    createMany?: GastoCreateManyDivisaoDeGastoInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutDivisaoDeGastoInput | GastoUpdateWithWhereUniqueWithoutDivisaoDeGastoInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutDivisaoDeGastoInput | GastoUpdateManyWithWhereWithoutDivisaoDeGastoInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutDivisoesDeGastoNestedInput = {
    create?: XOR<UsuarioCreateWithoutDivisoesDeGastoInput, UsuarioUncheckedCreateWithoutDivisoesDeGastoInput> | UsuarioCreateWithoutDivisoesDeGastoInput[] | UsuarioUncheckedCreateWithoutDivisoesDeGastoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDivisoesDeGastoInput | UsuarioCreateOrConnectWithoutDivisoesDeGastoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutDivisoesDeGastoInput | UsuarioUpsertWithWhereUniqueWithoutDivisoesDeGastoInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutDivisoesDeGastoInput | UsuarioUpdateWithWhereUniqueWithoutDivisoesDeGastoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutDivisoesDeGastoInput | UsuarioUpdateManyWithWhereWithoutDivisoesDeGastoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutDivisaoDeGastoNestedInput = {
    create?: XOR<GastoCreateWithoutDivisaoDeGastoInput, GastoUncheckedCreateWithoutDivisaoDeGastoInput> | GastoCreateWithoutDivisaoDeGastoInput[] | GastoUncheckedCreateWithoutDivisaoDeGastoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutDivisaoDeGastoInput | GastoCreateOrConnectWithoutDivisaoDeGastoInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutDivisaoDeGastoInput | GastoUpsertWithWhereUniqueWithoutDivisaoDeGastoInput[]
    createMany?: GastoCreateManyDivisaoDeGastoInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutDivisaoDeGastoInput | GastoUpdateWithWhereUniqueWithoutDivisaoDeGastoInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutDivisaoDeGastoInput | GastoUpdateManyWithWhereWithoutDivisaoDeGastoInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutDivisoesDeGastoNestedInput = {
    create?: XOR<UsuarioCreateWithoutDivisoesDeGastoInput, UsuarioUncheckedCreateWithoutDivisoesDeGastoInput> | UsuarioCreateWithoutDivisoesDeGastoInput[] | UsuarioUncheckedCreateWithoutDivisoesDeGastoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDivisoesDeGastoInput | UsuarioCreateOrConnectWithoutDivisoesDeGastoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutDivisoesDeGastoInput | UsuarioUpsertWithWhereUniqueWithoutDivisoesDeGastoInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutDivisoesDeGastoInput | UsuarioUpdateWithWhereUniqueWithoutDivisoesDeGastoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutDivisoesDeGastoInput | UsuarioUpdateManyWithWhereWithoutDivisoesDeGastoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    upsert?: UsuarioUpsertWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacoesInput, UsuarioUpdateWithoutNotificacoesInput>, UsuarioUncheckedUpdateWithoutNotificacoesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMeioDePagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.MeioDePagamento | EnumMeioDePagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMeioDePagamentoFilter<$PrismaModel> | $Enums.MeioDePagamento
  }

  export type NestedEnumMeioDePagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeioDePagamento | EnumMeioDePagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeioDePagamento[] | ListEnumMeioDePagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMeioDePagamentoWithAggregatesFilter<$PrismaModel> | $Enums.MeioDePagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeioDePagamentoFilter<$PrismaModel>
    _max?: NestedEnumMeioDePagamentoFilter<$PrismaModel>
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

  export type NestedEnumTipoRelatorioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRelatorio | EnumTipoRelatorioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRelatorioFilter<$PrismaModel> | $Enums.TipoRelatorio
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

  export type NestedEnumTipoRelatorioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRelatorio | EnumTipoRelatorioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRelatorio[] | ListEnumTipoRelatorioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRelatorioWithAggregatesFilter<$PrismaModel> | $Enums.TipoRelatorio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoRelatorioFilter<$PrismaModel>
    _max?: NestedEnumTipoRelatorioFilter<$PrismaModel>
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

  export type GastoCreateWithoutUsuarioInput = {
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutGastosInput
    cartao?: CartaoCreateNestedOneWithoutGastosInput
    parcelas?: ParcelaCreateNestedManyWithoutGastoInput
    divisaoDeGasto?: DivisaoDeGastoCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutGastoInput
  }

  export type GastoCreateOrConnectWithoutUsuarioInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutUsuarioInput, GastoUncheckedCreateWithoutUsuarioInput>
  }

  export type GastoCreateManyUsuarioInputEnvelope = {
    data: GastoCreateManyUsuarioInput | GastoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CartaoCreateWithoutUsuarioInput = {
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutCartaoInput
    faturas?: FaturaCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutCartaoInput
  }

  export type CartaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutCartaoInput
    faturas?: FaturaUncheckedCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutCartaoInput
  }

  export type CartaoCreateOrConnectWithoutUsuarioInput = {
    where: CartaoWhereUniqueInput
    create: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput>
  }

  export type CartaoCreateManyUsuarioInputEnvelope = {
    data: CartaoCreateManyUsuarioInput | CartaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioCreateWithoutUsuarioInput = {
    dataGeracao: Date | string
    tipo: $Enums.TipoRelatorio
    dados: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: Date | string | null
    fimPeriodo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatorioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    dataGeracao: Date | string
    tipo: $Enums.TipoRelatorio
    dados: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: Date | string | null
    fimPeriodo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatorioCreateOrConnectWithoutUsuarioInput = {
    where: RelatorioWhereUniqueInput
    create: XOR<RelatorioCreateWithoutUsuarioInput, RelatorioUncheckedCreateWithoutUsuarioInput>
  }

  export type RelatorioCreateManyUsuarioInputEnvelope = {
    data: RelatorioCreateManyUsuarioInput | RelatorioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type DivisaoDeGastoCreateWithoutUsuariosInput = {
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutDivisoesDeGastoInput
    cartao?: CartaoCreateNestedOneWithoutDivisoesDeGastoInput
    gastos?: GastoCreateNestedManyWithoutDivisaoDeGastoInput
  }

  export type DivisaoDeGastoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutDivisaoDeGastoInput
  }

  export type DivisaoDeGastoCreateOrConnectWithoutUsuariosInput = {
    where: DivisaoDeGastoWhereUniqueInput
    create: XOR<DivisaoDeGastoCreateWithoutUsuariosInput, DivisaoDeGastoUncheckedCreateWithoutUsuariosInput>
  }

  export type NotificacaoCreateWithoutUsuarioInput = {
    mensagem: string
    dataEnvio?: Date | string
    visualizado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    mensagem: string
    dataEnvio?: Date | string
    visualizado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateManyUsuarioInputEnvelope = {
    data: NotificacaoCreateManyUsuarioInput | NotificacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type GastoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutUsuarioInput, GastoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<GastoCreateWithoutUsuarioInput, GastoUncheckedCreateWithoutUsuarioInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutUsuarioInput, GastoUncheckedUpdateWithoutUsuarioInput>
  }

  export type GastoUpdateManyWithWhereWithoutUsuarioInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type GastoScalarWhereInput = {
    AND?: GastoScalarWhereInput | GastoScalarWhereInput[]
    OR?: GastoScalarWhereInput[]
    NOT?: GastoScalarWhereInput | GastoScalarWhereInput[]
    id?: IntFilter<"Gasto"> | number
    valor?: FloatFilter<"Gasto"> | number
    descricao?: StringFilter<"Gasto"> | string
    data?: DateTimeFilter<"Gasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoFilter<"Gasto"> | $Enums.MeioDePagamento
    usuarioId?: IntFilter<"Gasto"> | number
    numParcelas?: IntFilter<"Gasto"> | number
    categoriaId?: IntNullableFilter<"Gasto"> | number | null
    cartaoId?: IntNullableFilter<"Gasto"> | number | null
    divisaoDeGastoId?: IntNullableFilter<"Gasto"> | number | null
    createdAt?: DateTimeFilter<"Gasto"> | Date | string
    updatedAt?: DateTimeFilter<"Gasto"> | Date | string
  }

  export type CartaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CartaoWhereUniqueInput
    update: XOR<CartaoUpdateWithoutUsuarioInput, CartaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput>
  }

  export type CartaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CartaoWhereUniqueInput
    data: XOR<CartaoUpdateWithoutUsuarioInput, CartaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CartaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: CartaoScalarWhereInput
    data: XOR<CartaoUpdateManyMutationInput, CartaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CartaoScalarWhereInput = {
    AND?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
    OR?: CartaoScalarWhereInput[]
    NOT?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
    id?: IntFilter<"Cartao"> | number
    banco?: StringFilter<"Cartao"> | string
    limiteTotal?: FloatFilter<"Cartao"> | number
    limiteRestante?: FloatFilter<"Cartao"> | number
    ultimosQuatroDigitos?: StringNullableFilter<"Cartao"> | string | null
    usuarioId?: IntFilter<"Cartao"> | number
    createdAt?: DateTimeFilter<"Cartao"> | Date | string
    updatedAt?: DateTimeFilter<"Cartao"> | Date | string
  }

  export type RelatorioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RelatorioWhereUniqueInput
    update: XOR<RelatorioUpdateWithoutUsuarioInput, RelatorioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RelatorioCreateWithoutUsuarioInput, RelatorioUncheckedCreateWithoutUsuarioInput>
  }

  export type RelatorioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RelatorioWhereUniqueInput
    data: XOR<RelatorioUpdateWithoutUsuarioInput, RelatorioUncheckedUpdateWithoutUsuarioInput>
  }

  export type RelatorioUpdateManyWithWhereWithoutUsuarioInput = {
    where: RelatorioScalarWhereInput
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RelatorioScalarWhereInput = {
    AND?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
    OR?: RelatorioScalarWhereInput[]
    NOT?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
    id?: IntFilter<"Relatorio"> | number
    usuarioId?: IntFilter<"Relatorio"> | number
    dataGeracao?: DateTimeFilter<"Relatorio"> | Date | string
    tipo?: EnumTipoRelatorioFilter<"Relatorio"> | $Enums.TipoRelatorio
    dados?: JsonFilter<"Relatorio">
    inicioPeriodo?: DateTimeNullableFilter<"Relatorio"> | Date | string | null
    fimPeriodo?: DateTimeNullableFilter<"Relatorio"> | Date | string | null
    createdAt?: DateTimeFilter<"Relatorio"> | Date | string
    updatedAt?: DateTimeFilter<"Relatorio"> | Date | string
  }

  export type DivisaoDeGastoUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: DivisaoDeGastoWhereUniqueInput
    update: XOR<DivisaoDeGastoUpdateWithoutUsuariosInput, DivisaoDeGastoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<DivisaoDeGastoCreateWithoutUsuariosInput, DivisaoDeGastoUncheckedCreateWithoutUsuariosInput>
  }

  export type DivisaoDeGastoUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: DivisaoDeGastoWhereUniqueInput
    data: XOR<DivisaoDeGastoUpdateWithoutUsuariosInput, DivisaoDeGastoUncheckedUpdateWithoutUsuariosInput>
  }

  export type DivisaoDeGastoUpdateManyWithWhereWithoutUsuariosInput = {
    where: DivisaoDeGastoScalarWhereInput
    data: XOR<DivisaoDeGastoUpdateManyMutationInput, DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type DivisaoDeGastoScalarWhereInput = {
    AND?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
    OR?: DivisaoDeGastoScalarWhereInput[]
    NOT?: DivisaoDeGastoScalarWhereInput | DivisaoDeGastoScalarWhereInput[]
    id?: IntFilter<"DivisaoDeGasto"> | number
    valorTotal?: FloatFilter<"DivisaoDeGasto"> | number
    descricao?: StringFilter<"DivisaoDeGasto"> | string
    data?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    meioPagamento?: EnumMeioDePagamentoFilter<"DivisaoDeGasto"> | $Enums.MeioDePagamento
    numParcelas?: IntFilter<"DivisaoDeGasto"> | number
    categoriaId?: IntNullableFilter<"DivisaoDeGasto"> | number | null
    cartaoId?: IntNullableFilter<"DivisaoDeGasto"> | number | null
    createdAt?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
    updatedAt?: DateTimeFilter<"DivisaoDeGasto"> | Date | string
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    mensagem?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    usuarioId?: IntFilter<"Notificacao"> | number
    visualizado?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type GastoCreateWithoutCategoriaInput = {
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGastosInput
    cartao?: CartaoCreateNestedOneWithoutGastosInput
    parcelas?: ParcelaCreateNestedManyWithoutGastoInput
    divisaoDeGasto?: DivisaoDeGastoCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    cartaoId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutGastoInput
  }

  export type GastoCreateOrConnectWithoutCategoriaInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutCategoriaInput, GastoUncheckedCreateWithoutCategoriaInput>
  }

  export type GastoCreateManyCategoriaInputEnvelope = {
    data: GastoCreateManyCategoriaInput | GastoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type DivisaoDeGastoCreateWithoutCategoriaInput = {
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cartao?: CartaoCreateNestedOneWithoutDivisoesDeGastoInput
    gastos?: GastoCreateNestedManyWithoutDivisaoDeGastoInput
    usuarios?: UsuarioCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutDivisaoDeGastoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoCreateOrConnectWithoutCategoriaInput = {
    where: DivisaoDeGastoWhereUniqueInput
    create: XOR<DivisaoDeGastoCreateWithoutCategoriaInput, DivisaoDeGastoUncheckedCreateWithoutCategoriaInput>
  }

  export type DivisaoDeGastoCreateManyCategoriaInputEnvelope = {
    data: DivisaoDeGastoCreateManyCategoriaInput | DivisaoDeGastoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type GastoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutCategoriaInput, GastoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<GastoCreateWithoutCategoriaInput, GastoUncheckedCreateWithoutCategoriaInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutCategoriaInput, GastoUncheckedUpdateWithoutCategoriaInput>
  }

  export type GastoUpdateManyWithWhereWithoutCategoriaInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type DivisaoDeGastoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: DivisaoDeGastoWhereUniqueInput
    update: XOR<DivisaoDeGastoUpdateWithoutCategoriaInput, DivisaoDeGastoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<DivisaoDeGastoCreateWithoutCategoriaInput, DivisaoDeGastoUncheckedCreateWithoutCategoriaInput>
  }

  export type DivisaoDeGastoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: DivisaoDeGastoWhereUniqueInput
    data: XOR<DivisaoDeGastoUpdateWithoutCategoriaInput, DivisaoDeGastoUncheckedUpdateWithoutCategoriaInput>
  }

  export type DivisaoDeGastoUpdateManyWithWhereWithoutCategoriaInput = {
    where: DivisaoDeGastoScalarWhereInput
    data: XOR<DivisaoDeGastoUpdateManyMutationInput, DivisaoDeGastoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type UsuarioCreateWithoutCartoesInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCartoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCartoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCartoesInput, UsuarioUncheckedCreateWithoutCartoesInput>
  }

  export type GastoCreateWithoutCartaoInput = {
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGastosInput
    categoria?: CategoriaCreateNestedOneWithoutGastosInput
    parcelas?: ParcelaCreateNestedManyWithoutGastoInput
    divisaoDeGasto?: DivisaoDeGastoCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateWithoutCartaoInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    categoriaId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutGastoInput
  }

  export type GastoCreateOrConnectWithoutCartaoInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutCartaoInput, GastoUncheckedCreateWithoutCartaoInput>
  }

  export type GastoCreateManyCartaoInputEnvelope = {
    data: GastoCreateManyCartaoInput | GastoCreateManyCartaoInput[]
    skipDuplicates?: boolean
  }

  export type FaturaCreateWithoutCartaoInput = {
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaCreateNestedManyWithoutFaturaInput
  }

  export type FaturaUncheckedCreateWithoutCartaoInput = {
    id?: number
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutFaturaInput
  }

  export type FaturaCreateOrConnectWithoutCartaoInput = {
    where: FaturaWhereUniqueInput
    create: XOR<FaturaCreateWithoutCartaoInput, FaturaUncheckedCreateWithoutCartaoInput>
  }

  export type FaturaCreateManyCartaoInputEnvelope = {
    data: FaturaCreateManyCartaoInput | FaturaCreateManyCartaoInput[]
    skipDuplicates?: boolean
  }

  export type DivisaoDeGastoCreateWithoutCartaoInput = {
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutDivisoesDeGastoInput
    gastos?: GastoCreateNestedManyWithoutDivisaoDeGastoInput
    usuarios?: UsuarioCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoUncheckedCreateWithoutCartaoInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutDivisaoDeGastoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoCreateOrConnectWithoutCartaoInput = {
    where: DivisaoDeGastoWhereUniqueInput
    create: XOR<DivisaoDeGastoCreateWithoutCartaoInput, DivisaoDeGastoUncheckedCreateWithoutCartaoInput>
  }

  export type DivisaoDeGastoCreateManyCartaoInputEnvelope = {
    data: DivisaoDeGastoCreateManyCartaoInput | DivisaoDeGastoCreateManyCartaoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCartoesInput = {
    update: XOR<UsuarioUpdateWithoutCartoesInput, UsuarioUncheckedUpdateWithoutCartoesInput>
    create: XOR<UsuarioCreateWithoutCartoesInput, UsuarioUncheckedCreateWithoutCartoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCartoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCartoesInput, UsuarioUncheckedUpdateWithoutCartoesInput>
  }

  export type UsuarioUpdateWithoutCartoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCartoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type GastoUpsertWithWhereUniqueWithoutCartaoInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutCartaoInput, GastoUncheckedUpdateWithoutCartaoInput>
    create: XOR<GastoCreateWithoutCartaoInput, GastoUncheckedCreateWithoutCartaoInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutCartaoInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutCartaoInput, GastoUncheckedUpdateWithoutCartaoInput>
  }

  export type GastoUpdateManyWithWhereWithoutCartaoInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutCartaoInput>
  }

  export type FaturaUpsertWithWhereUniqueWithoutCartaoInput = {
    where: FaturaWhereUniqueInput
    update: XOR<FaturaUpdateWithoutCartaoInput, FaturaUncheckedUpdateWithoutCartaoInput>
    create: XOR<FaturaCreateWithoutCartaoInput, FaturaUncheckedCreateWithoutCartaoInput>
  }

  export type FaturaUpdateWithWhereUniqueWithoutCartaoInput = {
    where: FaturaWhereUniqueInput
    data: XOR<FaturaUpdateWithoutCartaoInput, FaturaUncheckedUpdateWithoutCartaoInput>
  }

  export type FaturaUpdateManyWithWhereWithoutCartaoInput = {
    where: FaturaScalarWhereInput
    data: XOR<FaturaUpdateManyMutationInput, FaturaUncheckedUpdateManyWithoutCartaoInput>
  }

  export type FaturaScalarWhereInput = {
    AND?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
    OR?: FaturaScalarWhereInput[]
    NOT?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
    id?: IntFilter<"Fatura"> | number
    cartaoId?: IntFilter<"Fatura"> | number
    mesReferente?: DateTimeFilter<"Fatura"> | Date | string
    vencimento?: DateTimeFilter<"Fatura"> | Date | string
    paga?: BoolFilter<"Fatura"> | boolean
    createdAt?: DateTimeFilter<"Fatura"> | Date | string
    updatedAt?: DateTimeFilter<"Fatura"> | Date | string
  }

  export type DivisaoDeGastoUpsertWithWhereUniqueWithoutCartaoInput = {
    where: DivisaoDeGastoWhereUniqueInput
    update: XOR<DivisaoDeGastoUpdateWithoutCartaoInput, DivisaoDeGastoUncheckedUpdateWithoutCartaoInput>
    create: XOR<DivisaoDeGastoCreateWithoutCartaoInput, DivisaoDeGastoUncheckedCreateWithoutCartaoInput>
  }

  export type DivisaoDeGastoUpdateWithWhereUniqueWithoutCartaoInput = {
    where: DivisaoDeGastoWhereUniqueInput
    data: XOR<DivisaoDeGastoUpdateWithoutCartaoInput, DivisaoDeGastoUncheckedUpdateWithoutCartaoInput>
  }

  export type DivisaoDeGastoUpdateManyWithWhereWithoutCartaoInput = {
    where: DivisaoDeGastoScalarWhereInput
    data: XOR<DivisaoDeGastoUpdateManyMutationInput, DivisaoDeGastoUncheckedUpdateManyWithoutCartaoInput>
  }

  export type UsuarioCreateWithoutGastosInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartoes?: CartaoCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGastosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartoes?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGastosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
  }

  export type CategoriaCreateWithoutGastosInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutGastosInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutGastosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutGastosInput, CategoriaUncheckedCreateWithoutGastosInput>
  }

  export type CartaoCreateWithoutGastosInput = {
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCartoesInput
    faturas?: FaturaCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutCartaoInput
  }

  export type CartaoUncheckedCreateWithoutGastosInput = {
    id?: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    faturas?: FaturaUncheckedCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutCartaoInput
  }

  export type CartaoCreateOrConnectWithoutGastosInput = {
    where: CartaoWhereUniqueInput
    create: XOR<CartaoCreateWithoutGastosInput, CartaoUncheckedCreateWithoutGastosInput>
  }

  export type ParcelaCreateWithoutGastoInput = {
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fatura?: FaturaCreateNestedOneWithoutParcelasInput
  }

  export type ParcelaUncheckedCreateWithoutGastoInput = {
    id?: number
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    faturaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaCreateOrConnectWithoutGastoInput = {
    where: ParcelaWhereUniqueInput
    create: XOR<ParcelaCreateWithoutGastoInput, ParcelaUncheckedCreateWithoutGastoInput>
  }

  export type ParcelaCreateManyGastoInputEnvelope = {
    data: ParcelaCreateManyGastoInput | ParcelaCreateManyGastoInput[]
    skipDuplicates?: boolean
  }

  export type DivisaoDeGastoCreateWithoutGastosInput = {
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutDivisoesDeGastoInput
    cartao?: CartaoCreateNestedOneWithoutDivisoesDeGastoInput
    usuarios?: UsuarioCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoUncheckedCreateWithoutGastosInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutDivisoesDeGastoInput
  }

  export type DivisaoDeGastoCreateOrConnectWithoutGastosInput = {
    where: DivisaoDeGastoWhereUniqueInput
    create: XOR<DivisaoDeGastoCreateWithoutGastosInput, DivisaoDeGastoUncheckedCreateWithoutGastosInput>
  }

  export type UsuarioUpsertWithoutGastosInput = {
    update: XOR<UsuarioUpdateWithoutGastosInput, UsuarioUncheckedUpdateWithoutGastosInput>
    create: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGastosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGastosInput, UsuarioUncheckedUpdateWithoutGastosInput>
  }

  export type UsuarioUpdateWithoutGastosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartoes?: CartaoUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartoes?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CategoriaUpsertWithoutGastosInput = {
    update: XOR<CategoriaUpdateWithoutGastosInput, CategoriaUncheckedUpdateWithoutGastosInput>
    create: XOR<CategoriaCreateWithoutGastosInput, CategoriaUncheckedCreateWithoutGastosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutGastosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutGastosInput, CategoriaUncheckedUpdateWithoutGastosInput>
  }

  export type CategoriaUpdateWithoutGastosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CartaoUpsertWithoutGastosInput = {
    update: XOR<CartaoUpdateWithoutGastosInput, CartaoUncheckedUpdateWithoutGastosInput>
    create: XOR<CartaoCreateWithoutGastosInput, CartaoUncheckedCreateWithoutGastosInput>
    where?: CartaoWhereInput
  }

  export type CartaoUpdateToOneWithWhereWithoutGastosInput = {
    where?: CartaoWhereInput
    data: XOR<CartaoUpdateWithoutGastosInput, CartaoUncheckedUpdateWithoutGastosInput>
  }

  export type CartaoUpdateWithoutGastosInput = {
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCartoesNestedInput
    faturas?: FaturaUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutCartaoNestedInput
  }

  export type CartaoUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faturas?: FaturaUncheckedUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutCartaoNestedInput
  }

  export type ParcelaUpsertWithWhereUniqueWithoutGastoInput = {
    where: ParcelaWhereUniqueInput
    update: XOR<ParcelaUpdateWithoutGastoInput, ParcelaUncheckedUpdateWithoutGastoInput>
    create: XOR<ParcelaCreateWithoutGastoInput, ParcelaUncheckedCreateWithoutGastoInput>
  }

  export type ParcelaUpdateWithWhereUniqueWithoutGastoInput = {
    where: ParcelaWhereUniqueInput
    data: XOR<ParcelaUpdateWithoutGastoInput, ParcelaUncheckedUpdateWithoutGastoInput>
  }

  export type ParcelaUpdateManyWithWhereWithoutGastoInput = {
    where: ParcelaScalarWhereInput
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyWithoutGastoInput>
  }

  export type ParcelaScalarWhereInput = {
    AND?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
    OR?: ParcelaScalarWhereInput[]
    NOT?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
    id?: IntFilter<"Parcela"> | number
    valor?: FloatFilter<"Parcela"> | number
    dataVencimento?: DateTimeFilter<"Parcela"> | Date | string
    paga?: BoolFilter<"Parcela"> | boolean
    numeroParcela?: IntFilter<"Parcela"> | number
    totalParcelas?: IntFilter<"Parcela"> | number
    gastoId?: IntNullableFilter<"Parcela"> | number | null
    faturaId?: IntNullableFilter<"Parcela"> | number | null
    createdAt?: DateTimeFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeFilter<"Parcela"> | Date | string
  }

  export type DivisaoDeGastoUpsertWithoutGastosInput = {
    update: XOR<DivisaoDeGastoUpdateWithoutGastosInput, DivisaoDeGastoUncheckedUpdateWithoutGastosInput>
    create: XOR<DivisaoDeGastoCreateWithoutGastosInput, DivisaoDeGastoUncheckedCreateWithoutGastosInput>
    where?: DivisaoDeGastoWhereInput
  }

  export type DivisaoDeGastoUpdateToOneWithWhereWithoutGastosInput = {
    where?: DivisaoDeGastoWhereInput
    data: XOR<DivisaoDeGastoUpdateWithoutGastosInput, DivisaoDeGastoUncheckedUpdateWithoutGastosInput>
  }

  export type DivisaoDeGastoUpdateWithoutGastosInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutDivisoesDeGastoNestedInput
    cartao?: CartaoUpdateOneWithoutDivisoesDeGastoNestedInput
    usuarios?: UsuarioUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type GastoCreateWithoutParcelasInput = {
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGastosInput
    categoria?: CategoriaCreateNestedOneWithoutGastosInput
    cartao?: CartaoCreateNestedOneWithoutGastosInput
    divisaoDeGasto?: DivisaoDeGastoCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateWithoutParcelasInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GastoCreateOrConnectWithoutParcelasInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutParcelasInput, GastoUncheckedCreateWithoutParcelasInput>
  }

  export type FaturaCreateWithoutParcelasInput = {
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cartao: CartaoCreateNestedOneWithoutFaturasInput
  }

  export type FaturaUncheckedCreateWithoutParcelasInput = {
    id?: number
    cartaoId: number
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaturaCreateOrConnectWithoutParcelasInput = {
    where: FaturaWhereUniqueInput
    create: XOR<FaturaCreateWithoutParcelasInput, FaturaUncheckedCreateWithoutParcelasInput>
  }

  export type GastoUpsertWithoutParcelasInput = {
    update: XOR<GastoUpdateWithoutParcelasInput, GastoUncheckedUpdateWithoutParcelasInput>
    create: XOR<GastoCreateWithoutParcelasInput, GastoUncheckedCreateWithoutParcelasInput>
    where?: GastoWhereInput
  }

  export type GastoUpdateToOneWithWhereWithoutParcelasInput = {
    where?: GastoWhereInput
    data: XOR<GastoUpdateWithoutParcelasInput, GastoUncheckedUpdateWithoutParcelasInput>
  }

  export type GastoUpdateWithoutParcelasInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGastosNestedInput
    categoria?: CategoriaUpdateOneWithoutGastosNestedInput
    cartao?: CartaoUpdateOneWithoutGastosNestedInput
    divisaoDeGasto?: DivisaoDeGastoUpdateOneWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateWithoutParcelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturaUpsertWithoutParcelasInput = {
    update: XOR<FaturaUpdateWithoutParcelasInput, FaturaUncheckedUpdateWithoutParcelasInput>
    create: XOR<FaturaCreateWithoutParcelasInput, FaturaUncheckedCreateWithoutParcelasInput>
    where?: FaturaWhereInput
  }

  export type FaturaUpdateToOneWithWhereWithoutParcelasInput = {
    where?: FaturaWhereInput
    data: XOR<FaturaUpdateWithoutParcelasInput, FaturaUncheckedUpdateWithoutParcelasInput>
  }

  export type FaturaUpdateWithoutParcelasInput = {
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao?: CartaoUpdateOneRequiredWithoutFaturasNestedInput
  }

  export type FaturaUncheckedUpdateWithoutParcelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartaoId?: IntFieldUpdateOperationsInput | number
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartaoCreateWithoutFaturasInput = {
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCartoesInput
    gastos?: GastoCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutCartaoInput
  }

  export type CartaoUncheckedCreateWithoutFaturasInput = {
    id?: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutCartaoInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutCartaoInput
  }

  export type CartaoCreateOrConnectWithoutFaturasInput = {
    where: CartaoWhereUniqueInput
    create: XOR<CartaoCreateWithoutFaturasInput, CartaoUncheckedCreateWithoutFaturasInput>
  }

  export type ParcelaCreateWithoutFaturaInput = {
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gasto?: GastoCreateNestedOneWithoutParcelasInput
  }

  export type ParcelaUncheckedCreateWithoutFaturaInput = {
    id?: number
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    gastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaCreateOrConnectWithoutFaturaInput = {
    where: ParcelaWhereUniqueInput
    create: XOR<ParcelaCreateWithoutFaturaInput, ParcelaUncheckedCreateWithoutFaturaInput>
  }

  export type ParcelaCreateManyFaturaInputEnvelope = {
    data: ParcelaCreateManyFaturaInput | ParcelaCreateManyFaturaInput[]
    skipDuplicates?: boolean
  }

  export type CartaoUpsertWithoutFaturasInput = {
    update: XOR<CartaoUpdateWithoutFaturasInput, CartaoUncheckedUpdateWithoutFaturasInput>
    create: XOR<CartaoCreateWithoutFaturasInput, CartaoUncheckedCreateWithoutFaturasInput>
    where?: CartaoWhereInput
  }

  export type CartaoUpdateToOneWithWhereWithoutFaturasInput = {
    where?: CartaoWhereInput
    data: XOR<CartaoUpdateWithoutFaturasInput, CartaoUncheckedUpdateWithoutFaturasInput>
  }

  export type CartaoUpdateWithoutFaturasInput = {
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCartoesNestedInput
    gastos?: GastoUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutCartaoNestedInput
  }

  export type CartaoUncheckedUpdateWithoutFaturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutCartaoNestedInput
  }

  export type ParcelaUpsertWithWhereUniqueWithoutFaturaInput = {
    where: ParcelaWhereUniqueInput
    update: XOR<ParcelaUpdateWithoutFaturaInput, ParcelaUncheckedUpdateWithoutFaturaInput>
    create: XOR<ParcelaCreateWithoutFaturaInput, ParcelaUncheckedCreateWithoutFaturaInput>
  }

  export type ParcelaUpdateWithWhereUniqueWithoutFaturaInput = {
    where: ParcelaWhereUniqueInput
    data: XOR<ParcelaUpdateWithoutFaturaInput, ParcelaUncheckedUpdateWithoutFaturaInput>
  }

  export type ParcelaUpdateManyWithWhereWithoutFaturaInput = {
    where: ParcelaScalarWhereInput
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyWithoutFaturaInput>
  }

  export type UsuarioCreateWithoutRelatoriosInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRelatoriosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutUsuariosInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRelatoriosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRelatoriosInput, UsuarioUncheckedCreateWithoutRelatoriosInput>
  }

  export type UsuarioUpsertWithoutRelatoriosInput = {
    update: XOR<UsuarioUpdateWithoutRelatoriosInput, UsuarioUncheckedUpdateWithoutRelatoriosInput>
    create: XOR<UsuarioCreateWithoutRelatoriosInput, UsuarioUncheckedCreateWithoutRelatoriosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRelatoriosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRelatoriosInput, UsuarioUncheckedUpdateWithoutRelatoriosInput>
  }

  export type UsuarioUpdateWithoutRelatoriosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRelatoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CategoriaCreateWithoutDivisoesDeGastoInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutDivisoesDeGastoInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutDivisoesDeGastoInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutDivisoesDeGastoInput, CategoriaUncheckedCreateWithoutDivisoesDeGastoInput>
  }

  export type CartaoCreateWithoutDivisoesDeGastoInput = {
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCartoesInput
    gastos?: GastoCreateNestedManyWithoutCartaoInput
    faturas?: FaturaCreateNestedManyWithoutCartaoInput
  }

  export type CartaoUncheckedCreateWithoutDivisoesDeGastoInput = {
    id?: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutCartaoInput
    faturas?: FaturaUncheckedCreateNestedManyWithoutCartaoInput
  }

  export type CartaoCreateOrConnectWithoutDivisoesDeGastoInput = {
    where: CartaoWhereUniqueInput
    create: XOR<CartaoCreateWithoutDivisoesDeGastoInput, CartaoUncheckedCreateWithoutDivisoesDeGastoInput>
  }

  export type GastoCreateWithoutDivisaoDeGastoInput = {
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGastosInput
    categoria?: CategoriaCreateNestedOneWithoutGastosInput
    cartao?: CartaoCreateNestedOneWithoutGastosInput
    parcelas?: ParcelaCreateNestedManyWithoutGastoInput
  }

  export type GastoUncheckedCreateWithoutDivisaoDeGastoInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutGastoInput
  }

  export type GastoCreateOrConnectWithoutDivisaoDeGastoInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutDivisaoDeGastoInput, GastoUncheckedCreateWithoutDivisaoDeGastoInput>
  }

  export type GastoCreateManyDivisaoDeGastoInputEnvelope = {
    data: GastoCreateManyDivisaoDeGastoInput | GastoCreateManyDivisaoDeGastoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutDivisoesDeGastoInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDivisoesDeGastoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDivisoesDeGastoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDivisoesDeGastoInput, UsuarioUncheckedCreateWithoutDivisoesDeGastoInput>
  }

  export type CategoriaUpsertWithoutDivisoesDeGastoInput = {
    update: XOR<CategoriaUpdateWithoutDivisoesDeGastoInput, CategoriaUncheckedUpdateWithoutDivisoesDeGastoInput>
    create: XOR<CategoriaCreateWithoutDivisoesDeGastoInput, CategoriaUncheckedCreateWithoutDivisoesDeGastoInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutDivisoesDeGastoInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutDivisoesDeGastoInput, CategoriaUncheckedUpdateWithoutDivisoesDeGastoInput>
  }

  export type CategoriaUpdateWithoutDivisoesDeGastoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutDivisoesDeGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CartaoUpsertWithoutDivisoesDeGastoInput = {
    update: XOR<CartaoUpdateWithoutDivisoesDeGastoInput, CartaoUncheckedUpdateWithoutDivisoesDeGastoInput>
    create: XOR<CartaoCreateWithoutDivisoesDeGastoInput, CartaoUncheckedCreateWithoutDivisoesDeGastoInput>
    where?: CartaoWhereInput
  }

  export type CartaoUpdateToOneWithWhereWithoutDivisoesDeGastoInput = {
    where?: CartaoWhereInput
    data: XOR<CartaoUpdateWithoutDivisoesDeGastoInput, CartaoUncheckedUpdateWithoutDivisoesDeGastoInput>
  }

  export type CartaoUpdateWithoutDivisoesDeGastoInput = {
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCartoesNestedInput
    gastos?: GastoUpdateManyWithoutCartaoNestedInput
    faturas?: FaturaUpdateManyWithoutCartaoNestedInput
  }

  export type CartaoUncheckedUpdateWithoutDivisoesDeGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutCartaoNestedInput
    faturas?: FaturaUncheckedUpdateManyWithoutCartaoNestedInput
  }

  export type GastoUpsertWithWhereUniqueWithoutDivisaoDeGastoInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutDivisaoDeGastoInput, GastoUncheckedUpdateWithoutDivisaoDeGastoInput>
    create: XOR<GastoCreateWithoutDivisaoDeGastoInput, GastoUncheckedCreateWithoutDivisaoDeGastoInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutDivisaoDeGastoInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutDivisaoDeGastoInput, GastoUncheckedUpdateWithoutDivisaoDeGastoInput>
  }

  export type GastoUpdateManyWithWhereWithoutDivisaoDeGastoInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutDivisaoDeGastoInput>
  }

  export type UsuarioUpsertWithWhereUniqueWithoutDivisoesDeGastoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutDivisoesDeGastoInput, UsuarioUncheckedUpdateWithoutDivisoesDeGastoInput>
    create: XOR<UsuarioCreateWithoutDivisoesDeGastoInput, UsuarioUncheckedCreateWithoutDivisoesDeGastoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutDivisoesDeGastoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutDivisoesDeGastoInput, UsuarioUncheckedUpdateWithoutDivisoesDeGastoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutDivisoesDeGastoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutDivisoesDeGastoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioCreateWithoutNotificacoesInput = {
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gastos?: GastoUncheckedCreateNestedManyWithoutUsuarioInput
    cartoes?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutUsuarioInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
  }

  export type UsuarioUpsertWithoutNotificacoesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UsuarioUpdateWithoutNotificacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type GastoCreateManyUsuarioInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartaoCreateManyUsuarioInput = {
    id?: number
    banco: string
    limiteTotal: number
    limiteRestante: number
    ultimosQuatroDigitos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelatorioCreateManyUsuarioInput = {
    id?: number
    dataGeracao: Date | string
    tipo: $Enums.TipoRelatorio
    dados: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: Date | string | null
    fimPeriodo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateManyUsuarioInput = {
    id?: number
    mensagem: string
    dataEnvio?: Date | string
    visualizado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GastoUpdateWithoutUsuarioInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutGastosNestedInput
    cartao?: CartaoUpdateOneWithoutGastosNestedInput
    parcelas?: ParcelaUpdateManyWithoutGastoNestedInput
    divisaoDeGasto?: DivisaoDeGastoUpdateOneWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartaoUpdateWithoutUsuarioInput = {
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutCartaoNestedInput
    faturas?: FaturaUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUpdateManyWithoutCartaoNestedInput
  }

  export type CartaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutCartaoNestedInput
    faturas?: FaturaUncheckedUpdateManyWithoutCartaoNestedInput
    divisoesDeGasto?: DivisaoDeGastoUncheckedUpdateManyWithoutCartaoNestedInput
  }

  export type CartaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    limiteTotal?: FloatFieldUpdateOperationsInput | number
    limiteRestante?: FloatFieldUpdateOperationsInput | number
    ultimosQuatroDigitos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUpdateWithoutUsuarioInput = {
    dataGeracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoRelatorioFieldUpdateOperationsInput | $Enums.TipoRelatorio
    dados?: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataGeracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoRelatorioFieldUpdateOperationsInput | $Enums.TipoRelatorio
    dados?: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataGeracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoRelatorioFieldUpdateOperationsInput | $Enums.TipoRelatorio
    dados?: JsonNullValueInput | InputJsonValue
    inicioPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fimPeriodo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisaoDeGastoUpdateWithoutUsuariosInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutDivisoesDeGastoNestedInput
    cartao?: CartaoUpdateOneWithoutDivisoesDeGastoNestedInput
    gastos?: GastoUpdateManyWithoutDivisaoDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutDivisaoDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUpdateWithoutUsuarioInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoCreateManyCategoriaInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    cartaoId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DivisaoDeGastoCreateManyCategoriaInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GastoUpdateWithoutCategoriaInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGastosNestedInput
    cartao?: CartaoUpdateOneWithoutGastosNestedInput
    parcelas?: ParcelaUpdateManyWithoutGastoNestedInput
    divisaoDeGasto?: DivisaoDeGastoUpdateOneWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisaoDeGastoUpdateWithoutCategoriaInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao?: CartaoUpdateOneWithoutDivisoesDeGastoNestedInput
    gastos?: GastoUpdateManyWithoutDivisaoDeGastoNestedInput
    usuarios?: UsuarioUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutDivisaoDeGastoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoCreateManyCartaoInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    categoriaId?: number | null
    divisaoDeGastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaturaCreateManyCartaoInput = {
    id?: number
    mesReferente: Date | string
    vencimento: Date | string
    paga?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DivisaoDeGastoCreateManyCartaoInput = {
    id?: number
    valorTotal: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    numParcelas?: number
    categoriaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GastoUpdateWithoutCartaoInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGastosNestedInput
    categoria?: CategoriaUpdateOneWithoutGastosNestedInput
    parcelas?: ParcelaUpdateManyWithoutGastoNestedInput
    divisaoDeGasto?: DivisaoDeGastoUpdateOneWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateWithoutCartaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateManyWithoutCartaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    divisaoDeGastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturaUpdateWithoutCartaoInput = {
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUpdateManyWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateWithoutCartaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateManyWithoutCartaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    mesReferente?: DateTimeFieldUpdateOperationsInput | Date | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisaoDeGastoUpdateWithoutCartaoInput = {
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutDivisoesDeGastoNestedInput
    gastos?: GastoUpdateManyWithoutDivisaoDeGastoNestedInput
    usuarios?: UsuarioUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateWithoutCartaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutDivisaoDeGastoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutDivisoesDeGastoNestedInput
  }

  export type DivisaoDeGastoUncheckedUpdateManyWithoutCartaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaCreateManyGastoInput = {
    id?: number
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    faturaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaUpdateWithoutGastoInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fatura?: FaturaUpdateOneWithoutParcelasNestedInput
  }

  export type ParcelaUncheckedUpdateWithoutGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    faturaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUncheckedUpdateManyWithoutGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    faturaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaCreateManyFaturaInput = {
    id?: number
    valor: number
    dataVencimento: Date | string
    paga?: boolean
    numeroParcela: number
    totalParcelas: number
    gastoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaUpdateWithoutFaturaInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gasto?: GastoUpdateOneWithoutParcelasNestedInput
  }

  export type ParcelaUncheckedUpdateWithoutFaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUncheckedUpdateManyWithoutFaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    paga?: BoolFieldUpdateOperationsInput | boolean
    numeroParcela?: IntFieldUpdateOperationsInput | number
    totalParcelas?: IntFieldUpdateOperationsInput | number
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoCreateManyDivisaoDeGastoInput = {
    id?: number
    valor: number
    descricao: string
    data: Date | string
    meioPagamento: $Enums.MeioDePagamento
    usuarioId: number
    numParcelas?: number
    categoriaId?: number | null
    cartaoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GastoUpdateWithoutDivisaoDeGastoInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    numParcelas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGastosNestedInput
    categoria?: CategoriaUpdateOneWithoutGastosNestedInput
    cartao?: CartaoUpdateOneWithoutGastosNestedInput
    parcelas?: ParcelaUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateWithoutDivisaoDeGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateManyWithoutDivisaoDeGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    meioPagamento?: EnumMeioDePagamentoFieldUpdateOperationsInput | $Enums.MeioDePagamento
    usuarioId?: IntFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    cartaoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpdateWithoutDivisoesDeGastoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDivisoesDeGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gastos?: GastoUncheckedUpdateManyWithoutUsuarioNestedInput
    cartoes?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutDivisoesDeGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
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