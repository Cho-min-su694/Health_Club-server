
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  phone: 'phone',
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
  code: 'code',
  category: 'category'
};

exports.Prisma.GymEquipmentScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  code: 'code',
  isDisable: 'isDisable'
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
  isDisable: 'isDisable',
  userId: 'userId'
};

exports.Prisma.GymImageScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  url: 'url',
  width: 'width',
  height: 'height',
  size: 'size',
  isThumb: 'isThumb',
  gymId: 'gymId'
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
  createdAt: 'createdAt',
  gymId: 'gymId',
  userId: 'userId',
  entryAt: 'entryAt',
  exitAt: 'exitAt'
};

exports.Prisma.GymPassHistoryScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  gymId: 'gymId',
  userId: 'userId',
  hash: 'hash'
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
  GymImage: 'GymImage',
  GymEuquipmentsOnGyms: 'GymEuquipmentsOnGyms',
  GymEquipmentUserHistory: 'GymEquipmentUserHistory',
  GymMembership: 'GymMembership',
  GymMembershipCancellation: 'GymMembershipCancellation',
  FavoriteGym: 'FavoriteGym',
  GymAccessHistory: 'GymAccessHistory',
  GymPassHistory: 'GymPassHistory'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\psbsa\\Documents\\junseo\\capstone_health\\web-server\\prisma\\basic",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCA9ICIuL2Jhc2ljIg0KfQ0KDQpkYXRhc291cmNlIGRiIHsNCiAgcHJvdmlkZXIgPSAibXlzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQovLyDroZzqt7jsnbgg7YOA7J6FDQplbnVtIExvZ2luVHlwZSB7DQogIExPQ0FMDQogIEFETUlODQp9DQoNCi8vIOycoOyggCDrk7HquIkg7YOA7J6FDQplbnVtIFVzZXJUeXBlIHsNCiAgR0VORVJBTA0KICBCVVNJTkVTUw0KICBBRE1JTg0KICBNQU5BR0VSDQp9DQoNCi8vIOycoOyggA0KbW9kZWwgVXNlciB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCg0KICBsb2dpbklkICAgICAgICAgICAgICAgICAgIFN0cmluZyAvLyDroZzqt7jsnbggSUQgKFNOUyDthqDtgbApDQogIGxvZ2luUHcgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5UZXh0IC8vIOuhnOq3uOyduCBQVyANCiAgdXNlcm5hbWUgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgbG9naW5UeXBlICAgICAgICAgICAgICAgICBMb2dpblR5cGUNCiAgdXNlclR5cGUgICAgICAgICAgICAgICAgICBVc2VyVHlwZQ0KICBuaWNrbmFtZSAgICAgICAgICAgICAgICAgIFN0cmluZw0KICBwaG9uZSAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgaXNEaXNhYmxlICAgICAgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQm9hcmQgICAgICAgICAgICAgICAgICAgICBCb2FyZFtdDQogIEJvYXJkUmVwbHkgICAgICAgICAgICAgICAgQm9hcmRSZXBseVtdDQogIE5vdGljZSAgICAgICAgICAgICAgICAgICAgTm90aWNlW10NCiAgR3ltICAgICAgICAgICAgICAgICAgICAgICBHeW1bXQ0KICBhc3NpZ25lZEd5bUVxdWlwbWVudHMgICAgIEd5bUV1cXVpcG1lbnRzT25HeW1zW10gICAgICBAcmVsYXRpb24oIkd5bUVxdWlwbWVudEFzc2dpblVzZXIiKQ0KICBHeW1NZW1iZXJzaGlwICAgICAgICAgICAgIEd5bU1lbWJlcnNoaXBbXQ0KICBhc3NpZ25lZEd5bU1lbWJlcnNoaXBzICAgIEd5bU1lbWJlcnNoaXBbXSAgICAgICAgICAgICBAcmVsYXRpb24oIkd5bU1lbWJlcnNoaXBBc3NpZ25Vc2VyIikNCiAgRmF2b3JpdGVHeW1zICAgICAgICAgICAgICBGYXZvcml0ZUd5bVtdDQogIEd5bUVxdWlwbWVudFVzZXJIaXN0b3J5ICAgR3ltRXF1aXBtZW50VXNlckhpc3RvcnlbXQ0KICBHeW1BY2Nlc3NIaXN0b3J5ICAgICAgICAgIEd5bUFjY2Vzc0hpc3RvcnlbXQ0KICBHeW1QYXNzSGlzdG9yeSAgICAgICAgICAgIEd5bVBhc3NIaXN0b3J5W10NCg0KICBAQHVuaXF1ZShbbG9naW5UeXBlLCBsb2dpbklkXSwgbmFtZTogImxvZ2luVW5pcXVlIikNCn0NCg0KbW9kZWwgTm90aWNlIHsNCiAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCg0KICB0aXRsZSAgIFN0cmluZw0KICBjb250ZW50IFN0cmluZz8gQGRiLlRleHQNCiAgbGluayAgICBTdHJpbmc/DQoNCiAgdXNlcklkICBJbnQNCiAgVXNlciAgICBVc2VyICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KLy8g6rKM7Iuc66y8IOyDge2DnA0KZW51bSBCb2FyZFR5cGUgew0KICBCVEFMSyAvL+yeoeuLtA0KICBCSU5GT1JNIC8v7KCV67O0DQogIEJRVUVTVElPTiAvL+yniOusuA0KfQ0KDQovLyDqsozsi5zrrLwNCm1vZGVsIEJvYXJkIHsNCiAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCg0KICB0aXRsZSAgICBTdHJpbmcNCiAgY29udGVudCAgU3RyaW5nPyAgQGRiLlRleHQNCiAgbGluayAgICAgU3RyaW5nPw0KICBzdGFydERheSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgZW5kRGF5ICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQoNCiAgaXNEaXNhYmxlICBCb29sZWFuICAgICAgQGRlZmF1bHQoZmFsc2UpIC8vIOuFuOy2nCDsl6zrtoAgZmFsc2Ug64W47LacIHRydWUg67mE64W47LacDQogIEJvYXJkSW1hZ2UgQm9hcmRJbWFnZVtdDQogIEJvYXJkUmVwbHkgQm9hcmRSZXBseVtdDQoNCiAgdXNlcklkICBJbnQNCiAgVXNlciAgICBVc2VyICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBib2FyZFR5cGUgIEJvYXJkVHlwZSAgICBAZGVmYXVsdChCVEFMSykgLy/sspjsnYzsl5DripQg67O065Oc7YOA7J6FKOyeoeuLtCkNCn0NCg0KLy8g6rKM7Iuc66y8IOydtOuvuOyngA0KbW9kZWwgQm9hcmRJbWFnZSB7DQogIGlkICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCg0KICB1cmwgICAgU3RyaW5nICAgICAgIEBkYi5UZXh0DQogIHdpZHRoICBJbnQNCiAgaGVpZ2h0IEludA0KICBzaXplICAgSW50DQoNCiAgaXNUaHVtYiBCb29sZWFuICAgICBAZGVmYXVsdChmYWxzZSkgLy8g7I2464Sk7J287J2066+47KeAIOyXrOu2gCB0cnVlIOyNuOuEpOydvCBmYWxzZSDsg4HshLgNCg0KICBib2FyZElkIEludCAgICAgICAgIEB1bmlxdWUNCiAgQm9hcmQgICBCb2FyZCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYm9hcmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCi8vIOqyjOyLnOusvCDrjJPquIANCm1vZGVsIEJvYXJkUmVwbHkgew0KICBpZCAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCBEYXRlVGltZT8NCg0KICBjb250ZW50ICAgU3RyaW5nDQogIGlzRGlzYWJsZSBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKQ0KDQogIHVzZXJJZCAgSW50DQogIFVzZXIgICAgVXNlciAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGJvYXJkSWQgSW50DQogIEJvYXJkICAgQm9hcmQgQHJlbGF0aW9uKGZpZWxkczogW2JvYXJkSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBib2FyZFJlcGx5SWQgSW50Pw0KICBCb2FyZFJlcGx5IEJvYXJkUmVwbHk/IEByZWxhdGlvbigiQm9hcmROZXN0ZWRSZXBseSIsZmllbGRzOiBbYm9hcmRSZXBseUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgQm9hcmROZXN0ZWRSZXBseSBCb2FyZFJlcGx5W10gQHJlbGF0aW9uKCJCb2FyZE5lc3RlZFJlcGx5IikNCg0KICBib2FyZFR5cGUgIEJvYXJkVHlwZSAgICBAZGVmYXVsdChCVEFMSykgLy/sspjsnYzsl5DripQg67O065Oc7YOA7J6FKOyeoeuLtCkNCn0NCg0KLy8g7Jq064+ZIOu2gOychA0KbW9kZWwgQm9keVBhcnQgew0KICBpZCAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQoNCiAgbmFtZSAgICAgICAgICAgIFN0cmluZw0KICBjb2RlICAgICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUNCiAgY2F0ZWdvcnkgICAgICAgIFN0cmluZw0KDQogIEd5bUVxdWlwbWVudHMgICBCb2R5UGFydHNPbkd5bUVxdWlwbWVudHNbXQ0KfQ0KDQovLyDquLDquLDrk7HroZ0NCm1vZGVsIEd5bUVxdWlwbWVudCB7DQogIGlkICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCg0KICBuYW1lICAgICAgU3RyaW5nDQogIGNvZGUgICAgICBTdHJpbmcgICAgQHVuaXF1ZQ0KDQogIGlzRGlzYWJsZSAgICAgICBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKQ0KDQogIEJvZHlQYXJ0cyBCb2R5UGFydHNPbkd5bUVxdWlwbWVudHNbXQ0KICBHeW1zICAgICAgR3ltRXVxdWlwbWVudHNPbkd5bXNbXQ0KICBHeW1FcXVpcG1lbnRJbWFnZSAgIEd5bUVxdWlwbWVudEltYWdlW10NCn0NCg0KLy8g7Jq064+Z6riw6riwIOydtOuvuOyngA0KbW9kZWwgR3ltRXF1aXBtZW50SW1hZ2Ugew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KDQogIHVybCAgICBTdHJpbmcgQGRiLlRleHQNCiAgd2lkdGggIEludA0KICBoZWlnaHQgSW50DQogIHNpemUgICBJbnQNCg0KICBpc1RodW1iIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpIC8vIOyNuOuEpOydvOydtOuvuOyngCDsl6zrtoAgdHJ1ZSDsjbjrhKTsnbwgZmFsc2Ug7IOB7IS4DQoNCiAgZ3ltRXF1aXBtZW50SWQgIEludA0KICBHeW1FcXVpcG1lbnQgICAgR3ltRXF1aXBtZW50IEByZWxhdGlvbihmaWVsZHM6IFtneW1FcXVpcG1lbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCi8vIOq4sOq4sCDsmrTrj5nrtoDsnIQg6rSA6rOEDQptb2RlbCBCb2R5UGFydHNPbkd5bUVxdWlwbWVudHMgew0KICBHeW1FcXVpcG1lbnQgICAgICAgIEd5bUVxdWlwbWVudCAgQHJlbGF0aW9uKGZpZWxkczogW2d5bUVxdWlwbWVudElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltRXF1aXBtZW50SWQgICAgICBJbnQgDQogIEJvZHlQYXJ0ICAgICAgICAgICAgQm9keVBhcnQgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYm9keVBhcnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGJvZHlQYXJ0SWQgICAgICAgICAgSW50IA0KICBhc3NpZ25lZEF0ICAgICAgICAgIERhdGVUaW1lICAgICAgQGRlZmF1bHQobm93KCkpDQoNCiAgQEBpZChbZ3ltRXF1aXBtZW50SWQsIGJvZHlQYXJ0SWRdKQ0KfQ0KDQovLyDtl6zsiqTsnqUg7KCV67O0DQptb2RlbCBHeW0gew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KDQogIGNlb05hbWUgICAgICAgICBTdHJpbmcNCiAgY29tcGFueU5hbWUgICAgIFN0cmluZw0KICBidXNpbmVzc051bWJlciAgU3RyaW5nDQogIHBvc3Rjb2RlICAgICAgICBTdHJpbmcNCiAgbWFpbkFkZHJlc3MgICAgIFN0cmluZw0KICBzdWJBZGRyZXNzICAgICAgU3RyaW5nDQogIHBob25lICAgICAgICAgICBTdHJpbmcNCiAgY2VsbFBob25lICAgICAgIFN0cmluZw0KICBmYXggICAgICAgICAgICAgU3RyaW5nDQogIGVtYWlsICAgICAgICAgICBTdHJpbmcNCiAgaXNDZXJ0aWZpZWQgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQoNCiAgaXNEaXNhYmxlICAgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQoNCiAgdXNlcklkICAgICAgICAgIEludA0KICBVc2VyICAgICAgICAgICAgVXNlciAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBHeW1JbWFnZSAgICAgICAgICAgICAgICBHeW1JbWFnZVtdDQoNCiAgR3ltRXF1aXBtZW50cyAgICAgICAgICAgR3ltRXVxdWlwbWVudHNPbkd5bXNbXQ0KICBGYXZvcml0ZVVzZXJzICAgICAgICAgICBGYXZvcml0ZUd5bVtdDQogIEd5bUFjY2Vzc0hpc3RvcnkgICAgICAgIEd5bUFjY2Vzc0hpc3RvcnlbXQ0KDQogIEd5bU1lbWJlcnNoaXAgICAgICAgICAgIEd5bU1lbWJlcnNoaXBbXQ0KDQogIEd5bVBhc3NIaXN0b3J5ICAgICAgICAgIEd5bVBhc3NIaXN0b3J5W10NCn0NCg0KLy8g7Zes7Iqk7J6lIOydtOuvuOyngA0KbW9kZWwgR3ltSW1hZ2Ugew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KDQogIHVybCAgICBTdHJpbmcgQGRiLlRleHQNCiAgd2lkdGggIEludA0KICBoZWlnaHQgSW50DQogIHNpemUgICBJbnQNCg0KICBpc1RodW1iIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpIC8vIOyNuOuEpOydvOydtOuvuOyngCDsl6zrtoAgdHJ1ZSDsjbjrhKTsnbwgZmFsc2Ug7IOB7IS4DQoNCiAgZ3ltSWQgICBJbnQgICAgIEB1bmlxdWUNCiAgR3ltICAgICBHeW0gICAgIEByZWxhdGlvbihmaWVsZHM6IFtneW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCi8vIO2XrOyKpOyepSDrgrQg6riw6rWsIOuqqeuhnQ0KbW9kZWwgR3ltRXVxdWlwbWVudHNPbkd5bXMgew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICBHeW0gICAgICAgICAgICAgICAgIEd5bSAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2d5bUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltSWQgICAgICAgICAgICAgICBJbnQgDQogIEd5bUVxdWlwbWVudCAgICAgICAgR3ltRXF1aXBtZW50ICBAcmVsYXRpb24oZmllbGRzOiBbZ3ltRXF1aXBtZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBneW1FcXVpcG1lbnRJZCAgICAgIEludCANCg0KICBhc3NpZ25CeSAgICAgICAgICAgIEludA0KICBhc3NpZ25Vc2VyICAgICAgICAgIFVzZXIgICAgICAgICAgQHJlbGF0aW9uKCJHeW1FcXVpcG1lbnRBc3NnaW5Vc2VyIiwgZmllbGRzOiBbYXNzaWduQnldLCByZWZlcmVuY2VzOiBbaWRdKQ0KDQogIEd5bUVxdWlwbWVudFVzZXJIaXN0b3J5ICAgICAgICAgICBHeW1FcXVpcG1lbnRVc2VySGlzdG9yeVtdDQp9DQoNCi8vIOq4sOq1rCDsgqzsmqkg6riw66GdDQptb2RlbCBHeW1FcXVpcG1lbnRVc2VySGlzdG9yeSB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQoNCiAgR3ltRXVxdWlwbWVudHNPbkd5bXMgICAgR3ltRXVxdWlwbWVudHNPbkd5bXMgIEByZWxhdGlvbihmaWVsZHM6IFtneW1FdXF1aXBtZW50c09uR3ltc0lkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltRXVxdWlwbWVudHNPbkd5bXNJZCAgSW50DQoNCiAgdXNlcklkICAgICAgICBJbnQNCiAgVXNlciAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQoNCiAgdXNlZEF0ICAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQogIGVuZEF0ICAgICAgICAgRGF0ZVRpbWU/DQp9DQoNCi8vIO2XrOyKpOyepSDtmozsm5DqtowNCm1vZGVsIEd5bU1lbWJlcnNoaXAgew0KICBpZCAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCg0KICB1c2VySWQgICAgICAgIEludA0KICBVc2VyICAgICAgICAgIFVzZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBHeW0gICAgICAgICAgIEd5bSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZ3ltSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBneW1JZCAgICAgICAgIEludCANCg0KICBhc3NpZ25CeSAgICAgIEludA0KICBhc3NpZ25Vc2VyICAgIFVzZXIgICAgICBAcmVsYXRpb24oIkd5bU1lbWJlcnNoaXBBc3NpZ25Vc2VyIiwgZmllbGRzOiBbYXNzaWduQnldLCByZWZlcmVuY2VzOiBbaWRdKQ0KDQogIHN0YXJ0RGF5ICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KICBlbmREYXkgICAgICAgIERhdGVUaW1lDQoNCiAgZ3ltTWVtYmVyc2hpcENhbmNlbGxhdGlvbklkICAgSW50Pw0KICBHeW1NZW1iZXJzaGlwQ2FuY2VsbGF0aW9uICAgICBHeW1NZW1iZXJzaGlwQ2FuY2VsbGF0aW9uPyAgQHJlbGF0aW9uKGZpZWxkczogW2d5bU1lbWJlcnNoaXBDYW5jZWxsYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCi8vIO2XrOyKpOyepSDtmozsm5Dqtowg7ZW07KeADQptb2RlbCBHeW1NZW1iZXJzaGlwQ2FuY2VsbGF0aW9uIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgQGRlZmF1bHQobm93KCkpDQoNCiAgcmVhc29uICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLlRleHQNCg0KICBHeW1NZW1iZXJzaGlwIEd5bU1lbWJlcnNoaXBbXQ0KfQ0KDQovLyDsppDqsqjssL7quLDtlZwg7Zes7Iqk7J6lDQptb2RlbCBGYXZvcml0ZUd5bSB7DQogIEd5bSAgICAgICAgICAgICAgICAgR3ltICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtneW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGd5bUlkICAgICAgICAgICAgICAgSW50IA0KICB1c2VySWQgICAgICAgICAgICAgIEludA0KICBVc2VyICAgICAgICAgICAgICAgIFVzZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYXNzaWduZWRBdCAgICAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQoNCiAgQEBpZChbZ3ltSWQsIHVzZXJJZF0pDQp9DQoNCi8vIO2XrOyKpOyepSDstpzsnoUg6riw66GdDQptb2RlbCBHeW1BY2Nlc3NIaXN0b3J5IHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQoNCiAgR3ltICAgICAgICAgICBHeW0gICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2d5bUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltSWQgICAgICAgICBJbnQNCg0KICB1c2VySWQgICAgICAgIEludA0KICBVc2VyICAgICAgICAgIFVzZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBlbnRyeUF0ICAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCiAgZXhpdEF0ICAgICAgICBEYXRlVGltZT8NCn0NCg0KLy8g7Zes7Iqk7J6lIOy2nOyeheymnSDquLDroZ0NCm1vZGVsIEd5bVBhc3NIaXN0b3J5IHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQoNCiAgR3ltICAgICAgICAgICBHeW0gICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2d5bUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltSWQgICAgICAgICBJbnQNCg0KICB1c2VySWQgICAgICAgIEludA0KICBVc2VyICAgICAgICAgIFVzZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBoYXNoICAgICAgICAgIFN0cmluZw0KfQ==",
  "inlineSchemaHash": "893d9da52fe898cf83acc5dd4c7a19f3aa6b22cb2b3c9b0539478cffaa426d64"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginPw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LoginType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Board\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardReplyToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notice\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notice\",\"relationName\":\"NoticeToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedGymEquipments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymEquipmentAssginUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembership\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymMembershipToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedGymMemberships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymMembershipAssignUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FavoriteGyms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FavoriteGym\",\"relationName\":\"FavoriteGymToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipmentUserHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipmentUserHistory\",\"relationName\":\"GymEquipmentUserHistoryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymAccessHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymAccessHistory\",\"relationName\":\"GymAccessHistoryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymPassHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymPassHistory\",\"relationName\":\"GymPassHistoryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"loginType\",\"loginId\"]],\"uniqueIndexes\":[{\"name\":\"loginUnique\",\"fields\":[\"loginType\",\"loginId\"]}],\"isGenerated\":false},\"Notice\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"NoticeToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Board\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardImage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardImage\",\"relationName\":\"BoardToBoardImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardToBoardReply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BoardType\",\"default\":\"BTALK\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BoardImage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isThumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Board\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToBoardImage\",\"relationFromFields\":[\"boardId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BoardReply\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardReplyToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Board\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToBoardReply\",\"relationFromFields\":[\"boardId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardReplyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardReply\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardNestedReply\",\"relationFromFields\":[\"boardReplyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardNestedReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardNestedReply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BoardType\",\"default\":\"BTALK\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BodyPart\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BodyPartsOnGymEquipments\",\"relationName\":\"BodyPartToBodyPartsOnGymEquipments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEquipment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BodyParts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BodyPartsOnGymEquipments\",\"relationName\":\"BodyPartsOnGymEquipmentsToGymEquipment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gyms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymEquipmentToGymEuquipmentsOnGyms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipmentImage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipmentImage\",\"relationName\":\"GymEquipmentToGymEquipmentImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEquipmentImage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isThumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEquipmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipment\",\"relationName\":\"GymEquipmentToGymEquipmentImage\",\"relationFromFields\":[\"gymEquipmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BodyPartsOnGymEquipments\":{\"dbName\":null,\"fields\":[{\"name\":\"GymEquipment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipment\",\"relationName\":\"BodyPartsOnGymEquipmentsToGymEquipment\",\"relationFromFields\":[\"gymEquipmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEquipmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BodyPart\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BodyPart\",\"relationName\":\"BodyPartToBodyPartsOnGymEquipments\",\"relationFromFields\":[\"bodyPartId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bodyPartId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"gymEquipmentId\",\"bodyPartId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Gym\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ceoName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cellPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCertified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymImage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymImage\",\"relationName\":\"GymToGymImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymToGymEuquipmentsOnGyms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FavoriteUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FavoriteGym\",\"relationName\":\"FavoriteGymToGym\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymAccessHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymAccessHistory\",\"relationName\":\"GymToGymAccessHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembership\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymToGymMembership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymPassHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymPassHistory\",\"relationName\":\"GymToGymPassHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymImage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isThumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymImage\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEuquipmentsOnGyms\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymEuquipmentsOnGyms\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipment\",\"relationName\":\"GymEquipmentToGymEuquipmentsOnGyms\",\"relationFromFields\":[\"gymEquipmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEquipmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymEquipmentAssginUser\",\"relationFromFields\":[\"assignBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipmentUserHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipmentUserHistory\",\"relationName\":\"GymEquipmentUserHistoryToGymEuquipmentsOnGyms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEquipmentUserHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEuquipmentsOnGyms\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymEquipmentUserHistoryToGymEuquipmentsOnGyms\",\"relationFromFields\":[\"gymEuquipmentsOnGymsId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEuquipmentsOnGymsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymEquipmentUserHistoryToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymMembership\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymMembershipToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymMembership\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymMembershipAssignUser\",\"relationFromFields\":[\"assignBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymMembershipCancellationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembershipCancellation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembershipCancellation\",\"relationName\":\"GymMembershipToGymMembershipCancellation\",\"relationFromFields\":[\"gymMembershipCancellationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymMembershipCancellation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembership\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymMembershipToGymMembershipCancellation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FavoriteGym\":{\"dbName\":null,\"fields\":[{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"FavoriteGymToGym\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FavoriteGymToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"gymId\",\"userId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymAccessHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymAccessHistory\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymAccessHistoryToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entryAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exitAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymPassHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymPassHistory\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymPassHistoryToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"LoginType\":{\"values\":[{\"name\":\"LOCAL\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"UserType\":{\"values\":[{\"name\":\"GENERAL\",\"dbName\":null},{\"name\":\"BUSINESS\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"MANAGER\",\"dbName\":null}],\"dbName\":null},\"BoardType\":{\"values\":[{\"name\":\"BTALK\",\"dbName\":null},{\"name\":\"BINFORM\",\"dbName\":null},{\"name\":\"BQUESTION\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

