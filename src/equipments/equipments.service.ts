import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { PrismaService } from 'src/global/prisma.service';
import { CreateGymDto } from 'src/gyms/dto/create-gym.dto';
import sizeOf from 'image-size';
import { BodyPart, BodyPartsOnGymEquipments, GymEquipment } from 'prisma/basic';

export type EquipmentWithBodyPart = GymEquipment & { bodyParts: BodyPart[] }
export interface EquipmentWithBodyPartInput extends GymEquipment {
  BodyParts: (BodyPartsOnGymEquipments & {
    BodyPart: BodyPart;
  })[];
}

@Injectable()
export class EquipmentsService {
  constructor(private prisma: PrismaService) { }

  async findDuplicateEquipmentData(type: string, content: string) {
    console.log(type, content);
    let whereVal: { code?: string; } | undefined = undefined;
    if (type === 'code') {
      whereVal = { 
        code: content,
      };
    } else {
      return false;
    }

    const result = await this.prisma.gymEquipment.findMany({
      where: whereVal,
    });

    console.log('result: ', result);
    return result.length === 0 ? true : false;
  }

  async createGymEquipment(
    userId: number,
    createGymEquipmentDto: CreateEquipmentDto,
  ) {

    const {bodyPartIds, ...rest} = createGymEquipmentDto;

    const create = await this.prisma.gymEquipment.create({
      data: {
        ...rest,
        BodyParts:{
          createMany:{
            data:bodyPartIds.map(id=>({
              bodyPartId: id
            }))
          }
        }
      },
      include: {
        BodyParts: {
          include: {
            BodyPart: true
          }
        }
      }
    });

    return this.convertBodyPartOutput(create);
  }

  async uploadGymEquipmentImage(id: number, file: Express.Multer.File) {
    console.log(file);
    const { height: height, width: width } = sizeOf(file.path);
    const size = file.size;

    const image = await this.prisma.gymEquipment.update({
      where: {
        id: id,
      },
      include: {
        GymEquipmentImage: true,
      },
      data: {
        GymEquipmentImage: {
          upsert: {
            where: {
              gymEquipmentId: id
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

  async findAdminAll() {
    const result = await this.prisma.gymEquipment.findMany({
      include: {
        BodyParts: {
          include: {
            BodyPart: true
          }
        }
      }
    });

    return this.convertBodyPartOutputList(result);
  }

  async findAll() {
    const result = await this.prisma.gymEquipment.findMany({
      where: {
        isDisable: false
      },
      include: {
        BodyParts: {
          include: {
            BodyPart: true
          }
        }
      }
    });

    return this.convertBodyPartOutputList(result);
  }

  async findOne(id: number) {
    const result = await this.prisma.gymEquipment.findFirst({
      where: {
        id: id,
      },
      include: {
        BodyParts: {
          include: {
            BodyPart: true
          }
        },
        GymEquipmentImage:true
      }
    });

    return this.convertBodyPartOutput(result);
  }

  //회사정보 변경위해 수정함
  async update(id: number, updateGymEquipmentDto: UpdateEquipmentDto) {

    const {bodyPartIds, ...rest} = updateGymEquipmentDto;

    const curBodyParts = await this.prisma.bodyPartsOnGymEquipments.findMany({
      where:{
        gymEquipmentId: id
      }
    })

    let additionalIds:number[] = bodyPartIds.filter(id=>!curBodyParts.find(part=>part.bodyPartId == id));
    let removalIds:number[] = curBodyParts.filter(part=>!bodyPartIds.find(id=>part.bodyPartId == id)).map(part=>part.bodyPartId);

    // return `This action updates a #${id} companyInfo`;
    const result = await this.prisma.gymEquipment.update({
      where: {
        id: id,
      },
      data: {
        ...rest,
        BodyParts:{
          createMany:{
            data:additionalIds.map(id=>({
              bodyPartId: id
            }))
          },
          deleteMany:removalIds.map(id=>({
            bodyPartId: id
          }))
        }
      },
      include: {
        BodyParts: {
          include: {
            BodyPart: true
          }
        },
        GymEquipmentImage:true
      }
    });
    return this.convertBodyPartOutput(result);
  }

  remove(id: number) {
    return `This action removes a #${id} companyInfo`;
  }

  async removeGymEquipmentByAdmin(adminId: number, id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: adminId
      }
    });

    if (!user) {
      throw new ForbiddenException('불가능한 접근입니다.');
    } else if (user.userType !== 'ADMIN') {
      throw new ForbiddenException('어드민만 이용가능합니다.');
    }

    await this.prisma.bodyPartsOnGymEquipments.deleteMany({
      where: {
        gymEquipmentId:id
      },
    });

    await this.prisma.gymEquipmentImage.deleteMany({
      where: {
        gymEquipmentId:id
      },
    })

    return this.prisma.gymEquipment.delete({
      where: {
        id
      },
    })
  }

  async findAdminAllGymEquipments(
    skip: number,
    take: number,
    searchType: string,
    searchText: string,
  ) {
    const where: any = {};

    if (searchType === '이름') {
      where.name = { contains: searchText };
    } else if (searchType === '코드') {
      where.code = { contains: searchText };
    } else if (searchType === '브랜드') {
      where.brandName = { contains: searchText };
    }

    const count = await this.prisma.gymEquipment.count({
      where: {
        ...where,

      },
    });
    let result =
      count > 0
        ? await this.prisma.gymEquipment.findMany({
          where: {
            ...where,
          },
          skip: (skip - 1) * take,
          take: take,
          orderBy: {
            id: 'desc',
          },
          include: {
            BodyParts: {
              include: {
                BodyPart: true
              }
            }
          }
        })
        : [];

    return { count: count, data: this.convertBodyPartOutputList(result) };
  }

  // BodyParts: BodyPartOnGymEquipments[] => bodyParts:BodyPart[]
  convertBodyPartOutput<T extends EquipmentWithBodyPartInput>(input: T) {
    const { BodyParts, ...rest } = input;
    return {
      ...rest,
      bodyParts: BodyParts.map(part => part.BodyPart),
    }
  }

  convertBodyPartOutputList<T extends EquipmentWithBodyPartInput>(input: T[]) {
    return input.map(value => {
      return this.convertBodyPartOutput(value);
    })
  }
}
