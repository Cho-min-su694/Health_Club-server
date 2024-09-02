
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  loginId: 'loginId',
  loginPw: 'loginPw',
  username: 'username',
  loginType: 'loginType',
  userType: 'userType',
  nickname: 'nickname',
  isDisable: 'isDisable'
};

exports.Prisma.NoticeScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  title: 'title',
  content: 'content',
  link: 'link',
  userId: 'userId'
};

exports.Prisma.BoardScalarFieldEnum = {
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

exports.Prisma.BoardImageScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  url: 'url',
  width: 'width',
  height: 'height',
  size: 'size',
  isThumb: 'isThumb',
  boardId: 'boardId'
};

exports.Prisma.BoardReplyScalarFieldEnum = {
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

exports.Prisma.BodyPartScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  code: 'code'
};

exports.Prisma.GymEquipmentScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  code: 'code'
};

exports.Prisma.GymEquipmentImageScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  url: 'url',
  width: 'width',
  height: 'height',
  size: 'size',
  isThumb: 'isThumb',
  gymEquipmentId: 'gymEquipmentId'
};

exports.Prisma.BodyPartsOnGymEquipmentsScalarFieldEnum = {
  gymEquipmentId: 'gymEquipmentId',
  bodyPartId: 'bodyPartId',
  assignedAt: 'assignedAt'
};

exports.Prisma.GymScalarFieldEnum = {
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
  userId: 'userId'
};

exports.Prisma.GymEuquipmentsOnGymsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  gymId: 'gymId',
  gymEquipmentId: 'gymEquipmentId',
  assignBy: 'assignBy'
};

exports.Prisma.GymEquipmentUserHistoryScalarFieldEnum = {
  id: 'id',
  gymEuquipmentsOnGymsId: 'gymEuquipmentsOnGymsId',
  userId: 'userId',
  usedAt: 'usedAt',
  endAt: 'endAt'
};

exports.Prisma.GymMembershipScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId',
  gymId: 'gymId',
  assignBy: 'assignBy',
  startDay: 'startDay',
  endDay: 'endDay',
  gymMembershipCancellationId: 'gymMembershipCancellationId'
};

exports.Prisma.GymMembershipCancellationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  reason: 'reason'
};

exports.Prisma.FavoriteGymScalarFieldEnum = {
  gymId: 'gymId',
  userId: 'userId',
  assignedAt: 'assignedAt'
};

exports.Prisma.GymAccessHistoryScalarFieldEnum = {
  id: 'id',
  gymId: 'gymId',
  userId: 'userId',
  entryAt: 'entryAt',
  exitAt: 'exitAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.LoginType = exports.$Enums.LoginType = {
  LOCAL: 'LOCAL',
  ADMIN: 'ADMIN'
};

exports.UserType = exports.$Enums.UserType = {
  GENERAL: 'GENERAL',
  BUSINESS: 'BUSINESS',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

exports.BoardType = exports.$Enums.BoardType = {
  BTALK: 'BTALK',
  BINFORM: 'BINFORM',
  BQUESTION: 'BQUESTION'
};

exports.Prisma.ModelName = {
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
  GymEuquipmentsOnGyms: 'GymEuquipmentsOnGyms',
  GymEquipmentUserHistory: 'GymEquipmentUserHistory',
  GymMembership: 'GymMembership',
  GymMembershipCancellation: 'GymMembershipCancellation',
  FavoriteGym: 'FavoriteGym',
  GymAccessHistory: 'GymAccessHistory'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
