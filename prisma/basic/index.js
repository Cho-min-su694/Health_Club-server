
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
} = require('./runtime/library')


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


  const path = require('path')

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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCA9ICIuL2Jhc2ljIg0KfQ0KDQpkYXRhc291cmNlIGRiIHsNCiAgcHJvdmlkZXIgPSAibXlzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQovLyDroZzqt7jsnbgg7YOA7J6FDQplbnVtIExvZ2luVHlwZSB7DQogIExPQ0FMDQogIEFETUlODQp9DQoNCi8vIOycoOyggCDrk7HquIkg7YOA7J6FDQplbnVtIFVzZXJUeXBlIHsNCiAgR0VORVJBTA0KICBCVVNJTkVTUw0KICBBRE1JTg0KICBNQU5BR0VSDQp9DQoNCi8vIOycoOyggA0KbW9kZWwgVXNlciB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCg0KICBsb2dpbklkICAgICAgICAgICAgICAgICAgIFN0cmluZyAvLyDroZzqt7jsnbggSUQgKFNOUyDthqDtgbApDQogIGxvZ2luUHcgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5UZXh0IC8vIOuhnOq3uOyduCBQVyANCiAgdXNlcm5hbWUgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgbG9naW5UeXBlICAgICAgICAgICAgICAgICBMb2dpblR5cGUNCiAgdXNlclR5cGUgICAgICAgICAgICAgICAgICBVc2VyVHlwZQ0KICBuaWNrbmFtZSAgICAgICAgICAgICAgICAgIFN0cmluZw0KICBwaG9uZSAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgaXNEaXNhYmxlICAgICAgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQm9hcmQgICAgICAgICAgICAgICAgICAgICBCb2FyZFtdDQogIEJvYXJkUmVwbHkgICAgICAgICAgICAgICAgQm9hcmRSZXBseVtdDQogIE5vdGljZSAgICAgICAgICAgICAgICAgICAgTm90aWNlW10NCiAgR3ltICAgICAgICAgICAgICAgICAgICAgICBHeW1bXQ0KICBhc3NpZ25lZEd5bUVxdWlwbWVudHMgICAgIEd5bUV1cXVpcG1lbnRzT25HeW1zW10gICAgICBAcmVsYXRpb24oIkd5bUVxdWlwbWVudEFzc2dpblVzZXIiKQ0KICBHeW1NZW1iZXJzaGlwICAgICAgICAgICAgIEd5bU1lbWJlcnNoaXBbXQ0KICBhc3NpZ25lZEd5bU1lbWJlcnNoaXBzICAgIEd5bU1lbWJlcnNoaXBbXSAgICAgICAgICAgICBAcmVsYXRpb24oIkd5bU1lbWJlcnNoaXBBc3NpZ25Vc2VyIikNCiAgRmF2b3JpdGVHeW1zICAgICAgICAgICAgICBGYXZvcml0ZUd5bVtdDQogIEd5bUVxdWlwbWVudFVzZXJIaXN0b3J5ICAgR3ltRXF1aXBtZW50VXNlckhpc3RvcnlbXQ0KICBHeW1BY2Nlc3NIaXN0b3J5ICAgICAgICAgIEd5bUFjY2Vzc0hpc3RvcnlbXQ0KICBHeW1QYXNzSGlzdG9yeSAgICAgICAgICAgIEd5bVBhc3NIaXN0b3J5W10NCg0KICBAQHVuaXF1ZShbbG9naW5UeXBlLCBsb2dpbklkXSwgbmFtZTogImxvZ2luVW5pcXVlIikNCn0NCg0KbW9kZWwgTm90aWNlIHsNCiAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCg0KICB0aXRsZSAgIFN0cmluZw0KICBjb250ZW50IFN0cmluZz8gQGRiLlRleHQNCiAgbGluayAgICBTdHJpbmc/DQoNCiAgdXNlcklkICBJbnQNCiAgVXNlciAgICBVc2VyICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KLy8g6rKM7Iuc66y8IOyDge2DnA0KZW51bSBCb2FyZFR5cGUgew0KICBCVEFMSyAvL+yeoeuLtA0KICBCSU5GT1JNIC8v7KCV67O0DQogIEJRVUVTVElPTiAvL+yniOusuA0KfQ0KDQovLyDqsozsi5zrrLwNCm1vZGVsIEJvYXJkIHsNCiAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCg0KICB0aXRsZSAgICBTdHJpbmcNCiAgY29udGVudCAgU3RyaW5nPyAgQGRiLlRleHQNCiAgbGluayAgICAgU3RyaW5nPw0KICBzdGFydERheSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgZW5kRGF5ICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQoNCiAgaXNEaXNhYmxlICBCb29sZWFuICAgICAgQGRlZmF1bHQoZmFsc2UpIC8vIOuFuOy2nCDsl6zrtoAgZmFsc2Ug64W47LacIHRydWUg67mE64W47LacDQogIEJvYXJkSW1hZ2UgQm9hcmRJbWFnZVtdDQogIEJvYXJkUmVwbHkgQm9hcmRSZXBseVtdDQoNCiAgdXNlcklkICBJbnQNCiAgVXNlciAgICBVc2VyICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBib2FyZFR5cGUgIEJvYXJkVHlwZSAgICBAZGVmYXVsdChCVEFMSykgLy/sspjsnYzsl5DripQg67O065Oc7YOA7J6FKOyeoeuLtCkNCn0NCg0KLy8g6rKM7Iuc66y8IOydtOuvuOyngA0KbW9kZWwgQm9hcmRJbWFnZSB7DQogIGlkICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQoNCiAgdXJsICAgIFN0cmluZyBAZGIuVGV4dA0KICB3aWR0aCAgSW50DQogIGhlaWdodCBJbnQNCiAgc2l6ZSAgIEludA0KDQogIGlzVGh1bWIgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkgLy8g7I2464Sk7J287J2066+47KeAIOyXrOu2gCB0cnVlIOyNuOuEpOydvCBmYWxzZSDsg4HshLgNCg0KICBib2FyZElkIEludA0KICBCb2FyZCAgIEJvYXJkIEByZWxhdGlvbihmaWVsZHM6IFtib2FyZElkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KLy8g6rKM7Iuc66y8IOuMk+q4gA0KbW9kZWwgQm9hcmRSZXBseSB7DQogIGlkICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0IERhdGVUaW1lPw0KDQogIGNvbnRlbnQgICBTdHJpbmcNCiAgaXNEaXNhYmxlIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQoNCiAgdXNlcklkICBJbnQNCiAgVXNlciAgICBVc2VyICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYm9hcmRJZCBJbnQNCiAgQm9hcmQgICBCb2FyZCBAcmVsYXRpb24oZmllbGRzOiBbYm9hcmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGJvYXJkUmVwbHlJZCBJbnQ/DQogIEJvYXJkUmVwbHkgQm9hcmRSZXBseT8gQHJlbGF0aW9uKCJCb2FyZE5lc3RlZFJlcGx5IixmaWVsZHM6IFtib2FyZFJlcGx5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBCb2FyZE5lc3RlZFJlcGx5IEJvYXJkUmVwbHlbXSBAcmVsYXRpb24oIkJvYXJkTmVzdGVkUmVwbHkiKQ0KDQogIGJvYXJkVHlwZSAgQm9hcmRUeXBlICAgIEBkZWZhdWx0KEJUQUxLKSAvL+yymOydjOyXkOuKlCDrs7Trk5ztg4DsnoUo7J6h64u0KQ0KfQ0KDQovLyDsmrTrj5kg67aA7JyEDQptb2RlbCBCb2R5UGFydCB7DQogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0ICAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCg0KICBuYW1lICAgICAgICAgICAgU3RyaW5nDQogIGNvZGUgICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZQ0KDQogIEd5bUVxdWlwbWVudHMgICBCb2R5UGFydHNPbkd5bUVxdWlwbWVudHNbXQ0KfQ0KDQovLyDquLDquLDrk7HroZ0NCm1vZGVsIEd5bUVxdWlwbWVudCB7DQogIGlkICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCg0KICBuYW1lICAgICAgU3RyaW5nDQogIGNvZGUgICAgICBTdHJpbmcgICAgQHVuaXF1ZQ0KDQogIEJvZHlQYXJ0cyBCb2R5UGFydHNPbkd5bUVxdWlwbWVudHNbXQ0KICBHeW1zICAgICAgR3ltRXVxdWlwbWVudHNPbkd5bXNbXQ0KICBHeW1FcXVpcG1lbnRJbWFnZSAgIEd5bUVxdWlwbWVudEltYWdlW10NCn0NCg0KLy8g7Jq064+Z6riw6riwIOydtOuvuOyngA0KbW9kZWwgR3ltRXF1aXBtZW50SW1hZ2Ugew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KDQogIHVybCAgICBTdHJpbmcgQGRiLlRleHQNCiAgd2lkdGggIEludA0KICBoZWlnaHQgSW50DQogIHNpemUgICBJbnQNCg0KICBpc1RodW1iIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpIC8vIOyNuOuEpOydvOydtOuvuOyngCDsl6zrtoAgdHJ1ZSDsjbjrhKTsnbwgZmFsc2Ug7IOB7IS4DQoNCiAgZ3ltRXF1aXBtZW50SWQgIEludA0KICBHeW1FcXVpcG1lbnQgICAgR3ltRXF1aXBtZW50IEByZWxhdGlvbihmaWVsZHM6IFtneW1FcXVpcG1lbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCi8vIOq4sOq4sCDsmrTrj5nrtoDsnIQg6rSA6rOEDQptb2RlbCBCb2R5UGFydHNPbkd5bUVxdWlwbWVudHMgew0KICBHeW1FcXVpcG1lbnQgICAgICAgIEd5bUVxdWlwbWVudCAgQHJlbGF0aW9uKGZpZWxkczogW2d5bUVxdWlwbWVudElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltRXF1aXBtZW50SWQgICAgICBJbnQgDQogIEJvZHlQYXJ0ICAgICAgICAgICAgQm9keVBhcnQgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYm9keVBhcnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGJvZHlQYXJ0SWQgICAgICAgICAgSW50IA0KICBhc3NpZ25lZEF0ICAgICAgICAgIERhdGVUaW1lICAgICAgQGRlZmF1bHQobm93KCkpDQoNCiAgQEBpZChbZ3ltRXF1aXBtZW50SWQsIGJvZHlQYXJ0SWRdKQ0KfQ0KDQovLyDtl6zsiqTsnqUg7KCV67O0DQptb2RlbCBHeW0gew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KDQogIGNlb05hbWUgICAgICAgICBTdHJpbmcNCiAgY29tcGFueU5hbWUgICAgIFN0cmluZw0KICBidXNpbmVzc051bWJlciAgU3RyaW5nDQogIHBvc3Rjb2RlICAgICAgICBTdHJpbmcNCiAgbWFpbkFkZHJlc3MgICAgIFN0cmluZw0KICBzdWJBZGRyZXNzICAgICAgU3RyaW5nDQogIHBob25lICAgICAgICAgICBTdHJpbmcNCiAgY2VsbFBob25lICAgICAgIFN0cmluZw0KICBmYXggICAgICAgICAgICAgU3RyaW5nDQogIGVtYWlsICAgICAgICAgICBTdHJpbmcNCiAgaXNDZXJ0aWZpZWQgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQoNCiAgdXNlcklkICAgICAgICAgIEludA0KICBVc2VyICAgICAgICAgICAgVXNlciAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBHeW1FcXVpcG1lbnRzICAgICAgICAgICBHeW1FdXF1aXBtZW50c09uR3ltc1tdDQogIEZhdm9yaXRlVXNlcnMgICAgICAgICAgIEZhdm9yaXRlR3ltW10NCiAgR3ltQWNjZXNzSGlzdG9yeSAgICAgICAgR3ltQWNjZXNzSGlzdG9yeVtdDQoNCiAgR3ltTWVtYmVyc2hpcCAgICAgICAgICAgR3ltTWVtYmVyc2hpcFtdDQoNCiAgR3ltUGFzc0hpc3RvcnkgICAgICAgICAgR3ltUGFzc0hpc3RvcnlbXQ0KfQ0KDQovLyDtl6zsiqTsnqUg64K0IOq4sOq1rCDrqqnroZ0NCm1vZGVsIEd5bUV1cXVpcG1lbnRzT25HeW1zIHsNCiAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgR3ltICAgICAgICAgICAgICAgICBHeW0gICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtneW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGd5bUlkICAgICAgICAgICAgICAgSW50IA0KICBHeW1FcXVpcG1lbnQgICAgICAgIEd5bUVxdWlwbWVudCAgQHJlbGF0aW9uKGZpZWxkczogW2d5bUVxdWlwbWVudElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltRXF1aXBtZW50SWQgICAgICBJbnQgDQoNCiAgYXNzaWduQnkgICAgICAgICAgICBJbnQNCiAgYXNzaWduVXNlciAgICAgICAgICBVc2VyICAgICAgICAgIEByZWxhdGlvbigiR3ltRXF1aXBtZW50QXNzZ2luVXNlciIsIGZpZWxkczogW2Fzc2lnbkJ5XSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBHeW1FcXVpcG1lbnRVc2VySGlzdG9yeSAgICAgICAgICAgR3ltRXF1aXBtZW50VXNlckhpc3RvcnlbXQ0KfQ0KDQovLyDquLDqtawg7IKs7JqpIOq4sOuhnQ0KbW9kZWwgR3ltRXF1aXBtZW50VXNlckhpc3Rvcnkgew0KICBpZCAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KDQogIEd5bUV1cXVpcG1lbnRzT25HeW1zICAgIEd5bUV1cXVpcG1lbnRzT25HeW1zICBAcmVsYXRpb24oZmllbGRzOiBbZ3ltRXVxdWlwbWVudHNPbkd5bXNJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGd5bUV1cXVpcG1lbnRzT25HeW1zSWQgIEludA0KDQogIHVzZXJJZCAgICAgICAgSW50DQogIFVzZXIgICAgICAgICAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KDQogIHVzZWRBdCAgICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KICBlbmRBdCAgICAgICAgIERhdGVUaW1lPw0KfQ0KDQovLyDtl6zsiqTsnqUg7ZqM7JuQ6raMDQptb2RlbCBHeW1NZW1iZXJzaGlwIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQoNCiAgdXNlcklkICAgICAgICBJbnQNCiAgVXNlciAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQoNCiAgR3ltICAgICAgICAgICBHeW0gICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2d5bUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZ3ltSWQgICAgICAgICBJbnQgDQoNCiAgYXNzaWduQnkgICAgICBJbnQNCiAgYXNzaWduVXNlciAgICBVc2VyICAgICAgQHJlbGF0aW9uKCJHeW1NZW1iZXJzaGlwQXNzaWduVXNlciIsIGZpZWxkczogW2Fzc2lnbkJ5XSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBzdGFydERheSAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCiAgZW5kRGF5ICAgICAgICBEYXRlVGltZQ0KDQogIGd5bU1lbWJlcnNoaXBDYW5jZWxsYXRpb25JZCAgIEludD8NCiAgR3ltTWVtYmVyc2hpcENhbmNlbGxhdGlvbiAgICAgR3ltTWVtYmVyc2hpcENhbmNlbGxhdGlvbj8gIEByZWxhdGlvbihmaWVsZHM6IFtneW1NZW1iZXJzaGlwQ2FuY2VsbGF0aW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQovLyDtl6zsiqTsnqUg7ZqM7JuQ6raMIO2VtOyngA0KbW9kZWwgR3ltTWVtYmVyc2hpcENhbmNlbGxhdGlvbiB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KDQogIHJlYXNvbiAgICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5UZXh0DQoNCiAgR3ltTWVtYmVyc2hpcCBHeW1NZW1iZXJzaGlwW10NCn0NCg0KLy8g7KaQ6rKo7LC+6riw7ZWcIO2XrOyKpOyepQ0KbW9kZWwgRmF2b3JpdGVHeW0gew0KICBHeW0gICAgICAgICAgICAgICAgIEd5bSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZ3ltSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBneW1JZCAgICAgICAgICAgICAgIEludCANCiAgdXNlcklkICAgICAgICAgICAgICBJbnQNCiAgVXNlciAgICAgICAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGFzc2lnbmVkQXQgICAgICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KDQogIEBAaWQoW2d5bUlkLCB1c2VySWRdKQ0KfQ0KDQovLyDtl6zsiqTsnqUg7Lac7J6FIOq4sOuhnQ0KbW9kZWwgR3ltQWNjZXNzSGlzdG9yeSB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KDQogIEd5bSAgICAgICAgICAgR3ltICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtneW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGd5bUlkICAgICAgICAgSW50DQoNCiAgdXNlcklkICAgICAgICBJbnQNCiAgVXNlciAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQoNCiAgZW50cnlBdCAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQogIGV4aXRBdCAgICAgICAgRGF0ZVRpbWU/DQp9DQoNCi8vIO2XrOyKpOyepSDstpzsnoXspp0g6riw66GdDQptb2RlbCBHeW1QYXNzSGlzdG9yeSB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KDQogIEd5bSAgICAgICAgICAgR3ltICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtneW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGd5bUlkICAgICAgICAgSW50DQoNCiAgdXNlcklkICAgICAgICBJbnQNCiAgVXNlciAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQoNCiAgaGFzaCAgICAgICAgICBTdHJpbmcNCn0=",
  "inlineSchemaHash": "8d59f90d7a732bdffe7988848108ffb7cf6826dcdc680722f63cb2c5fb0cd5a4"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/basic",
    "basic",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginPw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LoginType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Board\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardReplyToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notice\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notice\",\"relationName\":\"NoticeToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedGymEquipments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymEquipmentAssginUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembership\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymMembershipToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedGymMemberships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymMembershipAssignUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FavoriteGyms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FavoriteGym\",\"relationName\":\"FavoriteGymToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipmentUserHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipmentUserHistory\",\"relationName\":\"GymEquipmentUserHistoryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymAccessHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymAccessHistory\",\"relationName\":\"GymAccessHistoryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymPassHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymPassHistory\",\"relationName\":\"GymPassHistoryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"loginType\",\"loginId\"]],\"uniqueIndexes\":[{\"name\":\"loginUnique\",\"fields\":[\"loginType\",\"loginId\"]}],\"isGenerated\":false},\"Notice\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"NoticeToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Board\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardImage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardImage\",\"relationName\":\"BoardToBoardImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardToBoardReply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BoardType\",\"default\":\"BTALK\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BoardImage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isThumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Board\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToBoardImage\",\"relationFromFields\":[\"boardId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BoardReply\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDisable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardReplyToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Board\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToBoardReply\",\"relationFromFields\":[\"boardId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardReplyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardReply\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardNestedReply\",\"relationFromFields\":[\"boardReplyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BoardNestedReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardReply\",\"relationName\":\"BoardNestedReply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boardType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BoardType\",\"default\":\"BTALK\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BodyPart\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BodyPartsOnGymEquipments\",\"relationName\":\"BodyPartToBodyPartsOnGymEquipments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEquipment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BodyParts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BodyPartsOnGymEquipments\",\"relationName\":\"BodyPartsOnGymEquipmentsToGymEquipment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gyms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymEquipmentToGymEuquipmentsOnGyms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipmentImage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipmentImage\",\"relationName\":\"GymEquipmentToGymEquipmentImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEquipmentImage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isThumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEquipmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipment\",\"relationName\":\"GymEquipmentToGymEquipmentImage\",\"relationFromFields\":[\"gymEquipmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BodyPartsOnGymEquipments\":{\"dbName\":null,\"fields\":[{\"name\":\"GymEquipment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipment\",\"relationName\":\"BodyPartsOnGymEquipmentsToGymEquipment\",\"relationFromFields\":[\"gymEquipmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEquipmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BodyPart\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BodyPart\",\"relationName\":\"BodyPartToBodyPartsOnGymEquipments\",\"relationFromFields\":[\"bodyPartId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bodyPartId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"gymEquipmentId\",\"bodyPartId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Gym\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ceoName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cellPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCertified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymToGymEuquipmentsOnGyms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FavoriteUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FavoriteGym\",\"relationName\":\"FavoriteGymToGym\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymAccessHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymAccessHistory\",\"relationName\":\"GymToGymAccessHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembership\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymToGymMembership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymPassHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymPassHistory\",\"relationName\":\"GymToGymPassHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEuquipmentsOnGyms\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymEuquipmentsOnGyms\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipment\",\"relationName\":\"GymEquipmentToGymEuquipmentsOnGyms\",\"relationFromFields\":[\"gymEquipmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEquipmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymEquipmentAssginUser\",\"relationFromFields\":[\"assignBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEquipmentUserHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEquipmentUserHistory\",\"relationName\":\"GymEquipmentUserHistoryToGymEuquipmentsOnGyms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymEquipmentUserHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymEuquipmentsOnGyms\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymEuquipmentsOnGyms\",\"relationName\":\"GymEquipmentUserHistoryToGymEuquipmentsOnGyms\",\"relationFromFields\":[\"gymEuquipmentsOnGymsId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymEuquipmentsOnGymsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymEquipmentUserHistoryToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymMembership\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymMembershipToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymMembership\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymMembershipAssignUser\",\"relationFromFields\":[\"assignBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymMembershipCancellationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembershipCancellation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembershipCancellation\",\"relationName\":\"GymMembershipToGymMembershipCancellation\",\"relationFromFields\":[\"gymMembershipCancellationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymMembershipCancellation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GymMembership\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GymMembership\",\"relationName\":\"GymMembershipToGymMembershipCancellation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FavoriteGym\":{\"dbName\":null,\"fields\":[{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"FavoriteGymToGym\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FavoriteGymToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"gymId\",\"userId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymAccessHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymAccessHistory\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymAccessHistoryToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entryAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exitAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GymPassHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gym\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gym\",\"relationName\":\"GymToGymPassHistory\",\"relationFromFields\":[\"gymId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gymId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GymPassHistoryToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"LoginType\":{\"values\":[{\"name\":\"LOCAL\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"UserType\":{\"values\":[{\"name\":\"GENERAL\",\"dbName\":null},{\"name\":\"BUSINESS\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"MANAGER\",\"dbName\":null}],\"dbName\":null},\"BoardType\":{\"values\":[{\"name\":\"BTALK\",\"dbName\":null},{\"name\":\"BINFORM\",\"dbName\":null},{\"name\":\"BQUESTION\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/basic/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/basic/schema.prisma")
