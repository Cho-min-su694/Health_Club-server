import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/util/decorators';

@Controller('equipments')
export class EquipmentsController {
  constructor(private readonly equipmentsService: EquipmentsService) {}

  // NOTE 중복확인
  @Public()
  @Get('duplicate')
  findDuplicateUserData(
    @Query('type') type: string,
    @Query('content') content: string,
  ) {
    return this.equipmentsService.findDuplicateEquipmentData(type, content);
  }

  @Post('create/:userId')
  createGymEquipment(
    @Param('userId') userId: string,
    @Body() createEquipmentDto: CreateEquipmentDto,
  ) {
    return this.equipmentsService.createGymEquipment(
      +userId,
      createEquipmentDto,
    );
  }

  @Post(':id/image')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'equipmentImage', maxCount: 1 },
    ]),
  )
  uploadGymEquipmentImage(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.equipmentsService.uploadGymEquipmentImage(
      +id,
      files['equipmentImage']?.[0],
    );
  }

  @Get()
  findAdminAll() {
    return this.equipmentsService.findAdminAll();
  }

  @Get()
  findAll() {
    return this.equipmentsService.findAll();
  }

  //유저 페이징
  @Get('admin')
  findAdminAllEquipment(
    @Query('page') page: string,
    @Query('take') take: string,
    @Query('searchType') searchType: string,
    @Query('searchText') searchText: string,
  ) {
    return this.equipmentsService.findAdminAllGymEquipments(
      +page,
      +take,
      searchType,
      searchText,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentsService.findOne(+id);
  }

  //기구 정보 변경
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return this.equipmentsService.update(+id, updateEquipmentDto);
  }

  @Delete('admin')
  removeUserByAdmin(
    @Query('adminId') adminId: string,
    @Query('id') id: string,
  ) {
    return this.equipmentsService.removeGymEquipmentByAdmin(+adminId, +id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentsService.remove(+id);
  }
}
