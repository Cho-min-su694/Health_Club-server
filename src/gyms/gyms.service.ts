import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { PrismaService } from 'src/global/prisma.service';
import sizeOf from 'image-size';

@Injectable()
export class GymsService {

  constructor(private prisma: PrismaService) {}

  async findDuplicateUserData(type: string, content: string) {
    console.log(type, content);
    let whereVal: { businessNumber?: string; companyName?: string; } | undefined = undefined;
    if (type === 'businessNumber') {
      whereVal = {
        businessNumber: content,
      };
    } else if (type === 'companyName') {
      whereVal = {
        companyName: content,
      };
    } else {
      return false;
    }

    const result = await this.prisma.gym.findMany({
      where: whereVal,
    });

    console.log('result: ', result);
    return result.length === 0 ? true : false;
  }

  async createGym(
    userId: number,
    createGymDto: CreateGymDto,
  ) {
    const create = await this.prisma.gym.create({
      data: {
        ...createGymDto,
        userId,
      },
    });
    return create;
  }

  async uploadGymImage(id: number, file: Express.Multer.File) {
    console.log(file);
    const { height: height, width: width } = sizeOf(file.path);
    const size = file.size;

    const image = await this.prisma.gym.update({
      where: {
        id: id,
      },
      include: {
        GymImage: true,
      },
      data: {
        GymImage: {
          upsert: {
            where: {
              gymId: id
            },
            create: {
              url: file.path,
              width,
              height,
              size,
            },
            update: {
              url: file.path,
              width,
              height,
              size,
            },
          },
        },
      },
    });

    const result = await this.findOne(id);
    return result;
  }

  findAdminAll() {
    return this.prisma.gym.findMany({
      include: {
        GymImage: true,
        User: true,
      },
    });
  }

  findAll() {
    return this.prisma.gym.findMany({
      where: {
        isCertified: true,
        isDisable: false
      },
      include: {
        GymImage: true,
        User: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.gym.findFirst({
      where: {
        id: id,
      },
      include: {
        GymImage: true,
        User: true,
      },
    });
  }

  findOneByUserId(userId: number) {
    return this.prisma.gym.findFirst({
      where: {
        userId
      },
      include: {
        GymImage: true,
        User: true,
      },
    });
  }

  //회사정보 변경위해 수정함
  update(id: number, updateGymDto: UpdateGymDto) {
    // return `This action updates a #${id} companyInfo`;
    return this.prisma.gym.update({
      where: {
        id: id,
      },
      data: {
        ...updateGymDto,
      },
      // include: {
      // },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} companyInfo`;
  }

  async removeGymByAdmin(adminId: number, id: number) {
    const user = await this.prisma.user.findUnique({
      where:{
        id:adminId
      }
    });

    if (!user) {
      throw new ForbiddenException('불가능한 접근입니다.');
    } else if (user.userType !== 'ADMIN') {
      throw new ForbiddenException('어드민만 이용가능합니다.');
    }

    await this.prisma.gymImage.delete({
      where:{
        gymId: id
      }
    })

    return this.prisma.gym.delete({
      where: {
        id,
      },
    });
  }

  async findAdminAllGyms(
    skip: number,
    take: number,
    searchType: string,
    searchText: string,
  ) {
    const where: any = {};

    if (searchType === '닉네임') {
      where.User = {nickname: { contains: searchText }}
    } else if (searchType === '헬스장명') {
      where.companyName = { contains: searchText };
    } else if (searchType === '관장명') {
      where.ceoName = { contains: searchText };
    } else if (searchType === '아이디') {
      where.User = {loginId: { contains: searchText }}
    }

    const count = await this.prisma.gym.count({
      where: {
        ...where,
        
      },
    });
    const result =
      count > 0
        ? await this.prisma.gym.findMany({
            where: {
              ...where,
            },
            skip: (skip - 1) * take,
            take: take,
            orderBy: {
              id: 'desc',
            },
            include:{
              User:true
            }
          })
        : [];

    return { count: count, data: result };
  }
}
