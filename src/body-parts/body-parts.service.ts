import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBodyPartDto } from './dto/create-body-part.dto';
import { UpdateBodyPartDto } from './dto/update-body-part.dto';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class BodyPartsService {

  constructor(private prisma: PrismaService) {}

  async create(createBodyPartDto: CreateBodyPartDto) {
    const oldBodyPart = await this.prisma.bodyPart.findFirst({
      where:{
        OR: [
          {name: createBodyPartDto.name},
          {code: createBodyPartDto.code}
        ]

      }
    });

    if (oldBodyPart) {
      throw new ForbiddenException('이미 존재하는 운동 부위가 있습니다.'); 
    }

    const create = await this.prisma.bodyPart.create({
      data: {
        ...createBodyPartDto,
      },
    });
    return create;
  }

  findAll() {
    return this.prisma.bodyPart.findMany({
      orderBy: [
        {category:'asc'},
        {name:'asc'}
      ]
    });
  }

  findOne(id: number) {
    return this.prisma.bodyPart.findFirst({
      where:{
        id
      }
    });
  }

  update(id: number, updateBodyPartDto: UpdateBodyPartDto) {
    return this.prisma.bodyPart.update({
      where: {
        id: id,
      },
      data: {
        ...updateBodyPartDto,
      },
    });
  }

  async remove(id: number) {
    const equipment = await this.prisma.bodyPartsOnGymEquipments.findFirst({
      where:{
        bodyPartId: id
      }
    });

    if (equipment) {
      throw new ForbiddenException('이미 기구에 등록된 운동 부위이므로 삭제 불가'); 
    }

    return this.prisma.bodyPart.delete({
      where: {
        id,
      },
    });
  }
}
