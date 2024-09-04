import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all companyInfos`;
  }

  findOne(id: number) {
    return this.prisma.gym.findMany({
      where: {
        id: id,
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
}
