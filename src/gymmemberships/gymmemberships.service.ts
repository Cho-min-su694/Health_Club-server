import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateGymmembershipCancellationDto, CreateGymmembershipDto } from './dto/create-gymmembership.dto';
import { UpdateGymAccessHistoryDto, UpdateGymmembershipDto } from './dto/update-gymmembership.dto';
import { PrismaService } from 'src/global/prisma.service';
import { Prisma } from 'prisma/basic';
import { start } from 'repl';

@Injectable()
export class GymmembershipsService {
  constructor(private prisma: PrismaService) { }

  createGymMembership(gymId: number, createGymmembershipDto: CreateGymmembershipDto) {
    return this.prisma.gymMembership.create({
      data: {
        gymId,
        ...createGymmembershipDto,
      },
      include: {
        User: true,
      }
    })
  }

  async extendGymMembership(gymId: number, userId: number, assignBy: number, type: string, add: number) {
    const find = await this.prisma.gymMembership.findFirst({
      where: {
        gymId,
        userId,
        ...this.getIsDisableWhere(false)
      }
    })


    let endDay: Date;
    let startDay: Date = undefined;

    if (find) {
      startDay = find.endDay;
      endDay = this.getAdditionalDate(type, add, find.endDay);
    } else {
      endDay = this.getAdditionalDate(type, add);
    }

    if(endDay == null) {
      throw new ForbiddenException('잘못된 날짜입니다.');
    }

    return this.createGymMembership(gymId, { gymId, userId, assignBy, startDay, endDay })
  }

  getAdditionalDate(type: string, add: number, date?: Date) {
    const today = date? new Date(date) : new Date();
    switch (type) {
      case 'DAY':
        today.setDate(today.getDate() + add);
        break;
      case 'MONTH':
        today.setMonth(today.getMonth() + add);
        break;
      case 'YEAR':
        today.setFullYear(today.getFullYear() + add);
        break;
      default:
        return null;
    }

    return today;
  }

  findAllGymMembership() {
    return this.prisma.gymMembership.findMany({
      include: {
        User: true,
        assignUser: true,
        Gym: true
      }
    });
  }

  findOneGymMembership(id: number) {
    return this.prisma.gymMembership.findUnique({ where: { id } })
  }

  updateGymMembership(id: number, updateGymmembershipDto: UpdateGymmembershipDto) {
    return this.prisma.gymMembership.update({ where: { id }, data: { ...updateGymmembershipDto } })
  }

  remove(id: number) {
    return `This action removes a #${id} gymmembership`;
  }

  getIsDisableWhere(isDisable: boolean, prevWhere: Prisma.GymMembershipWhereInput = {}) {
    const where: Prisma.GymMembershipWhereInput = prevWhere

    if (isDisable) {
      where.OR = [
        {
          gymMembershipCancellationId: {
            not: null
          }
        },
        {
          endDay: {
            lt: new Date()
          }
        }
      ]
    } else {
      where.gymMembershipCancellationId = null;
      where.endDay = {
        gte: new Date()
      };
    }

    return where;
  }

  async findUserGymMembership(gymId:number, userId: number) {
    const today = new Date();
    const result = await this.prisma.gymMembership.findMany({
      where: {
        gymId,
        userId,
        gymMembershipCancellationId:null,
        endDay:{
          gte:today
        },
      },
      orderBy:{
        endDay:'desc'
      },
      include: {
        User: true
      }
    });

    return result;
  }

  async findGymMembershipByUserId(userId: number) {
    const today = new Date();
    const result = await this.prisma.gymMembership.findMany({
      where: {
        userId,
        gymMembershipCancellationId:null,
        endDay:{
          gte:today
        },
      },
      orderBy:{
        startDay:'asc'
      },
      include: {
        User: true,
        Gym: {
          include:{
            GymImage:true
          }
        }
      }
    });

    return result;
  }

  findGymMembershipByGymId(gymId: number, isDisable?: boolean) {
    let where: Prisma.GymMembershipWhereInput = {}

    if (isDisable != null) {
      this.getIsDisableWhere(isDisable, where);
    }


    return this.prisma.gymMembership.findMany({
      where: {
        gymId,
        ...where
      },
      include: {
        User: true
      }
    });
  }

  async findPagingAllGymMembership(
    gymId: number | null,
    skip: number,
    take: number,
    searchType: string,
    searchText: string,
    isDisable?: boolean
  ) {
    const where: Prisma.GymMembershipWhereInput = {};

    if(gymId != null) {
      where.gymId = gymId;
    }

    if (searchType === '이름') {
      where.User = {
        username: { contains: searchText }
      };
    }

    if (isDisable != null) {
      this.getIsDisableWhere(isDisable, where);
    }

    const count = await this.prisma.gymMembership.count({
      where,
    });

    const totalCountObject = await this.prisma.gymMembership.groupBy({
      by:['userId'],
    })

    const activeCountObject = await this.prisma.gymMembership.groupBy({
      where:this.getIsDisableWhere(false),
      by:['userId']
    })

    let result =
      count > 0
        ? await this.prisma.gymMembership.findMany({
          where,
          skip: (skip - 1) * take,
          take: take,
          orderBy: {
            id: 'desc',
          },
          include: {
            User: true,
            GymMembershipCancellation:true
          }
        })
        : [];

    return { count: count, totalCount:totalCountObject.length, activeCount:activeCountObject.length, data: result };
  }

  cancelGymMembership(gymMembershipId: number, body: CreateGymmembershipCancellationDto) {
    return this.prisma.gymMembershipCancellation.create({
      data: {
        ...body,
        GymMembership: {
          connect: {
            id: gymMembershipId
          }
        }
      },
      include: {
        GymMembership: true
      }
    })
  }

  // 헬스장 입장
  async createGymAccessHistory(gymId:number, userId:number) {
    const gymMembership = await this.findUserGymMembership(gymId, userId);
    if(gymMembership == null || gymMembership.length == 0) throw new ForbiddenException("부적절한 접근");

    await this.updateGymAccessHistoryList(gymId, userId, {exitAt:new Date()})

    return this.prisma.gymAccessHistory.create({
      data:{
        gymId,
        userId
      }
    })
  }

  async findValidGymAccessHistory(gymId:number, userId:number) {

    return this.prisma.gymAccessHistory.findFirst({
      where:{
        gymId,
        userId,
        exitAt:null,
        entryAt:{
          lte:new Date()
        }
      },
      orderBy:{
        entryAt:'desc'
      }
    })
  }

  updateGymAccessHistory(id:number, body:UpdateGymAccessHistoryDto) {
    return this.prisma.gymAccessHistory.update({
      where:{
        id
      },
      data:{
        ...body
      }
    })
  }

  async exitGym(id:number) {
    const result = await this.prisma.gymAccessHistory.update({
      where:{
        id
      },
      data:{
        exitAt:new Date()
      }
    })

    if(result) {
      await this.prisma.gymEquipmentUserHistory.updateMany({
        where:{userId:result.userId, endAt:null},
        data:{endAt:new Date()}
      })
    }

    return result;
  }

  async updateGymAccessHistoryList(gymId:number, userId:number, body:UpdateGymAccessHistoryDto) {
    return this.prisma.gymAccessHistory.updateMany({
      where:{
        userId,
        gymId
      },
      data: {
        ...body
      }
    })
  }
}
