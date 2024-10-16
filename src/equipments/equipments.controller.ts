import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/util/decorators';

@Controller('equipments')
export class EquipmentsController {
  constructor(private readonly equipmentsService: EquipmentsService) { }

  // NOTE 중복확인
  @Public()
  @Get('duplicate')
  findDuplicateUserData(
    @Query('type') type: string,
    @Query('content') content: string,
  ) {
    return this.equipmentsService.findDuplicateEquipmentData(type, content);
  }

  @Post('create/history/:gymEuquipmentsOnGymsId')
  createGymEquipmentUserHistory(
    @Param('gymEuquipmentsOnGymsId') gymEuquipmentsOnGymsId: string,
    @Body() createDto: { userId: number },
  ) {
    return this.equipmentsService.createGymEquipmentUserHistory(+gymEuquipmentsOnGymsId, createDto.userId);
  }


  @Post('create/gymequipment/:gymId')
  registerEquipmentsOnGyms(
    @Param('gymId') gymId: string,
    @Body() registerEquipmentsOnGymsDto: { equipmentIds: number[], assingBy: number },
  ) {
    return this.equipmentsService.registerEquipmentsOnGyms(
      +gymId,
      registerEquipmentsOnGymsDto.equipmentIds,
      registerEquipmentsOnGymsDto.assingBy
    );
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
  @Get('paging')
  findPagingAllEquipment(
    @Query('page') page: string,
    @Query('take') take: string,
    @Query('searchType') searchType: string,
    @Query('searchText') searchText: string,
    @Query('isDisable') isDisable: string,
  ) {
    return this.equipmentsService.findPagingAllEquipment(
      +page,
      +take,
      searchType,
      searchText,
      isDisable.length != 0 ? +isDisable : undefined,
    );
  }

  @Public()
  @Get('history/gym/:gymId')
  findGymEquipmentUserHistoryByGymId(
    @Param('gymId') gymId: string,
  ) {
    return this.equipmentsService.findGymEquipmentUserHistoryByGymId(+gymId);
  }

  @Get('history/valid/:userId')
  findValidGymEquipmentUserHistory(
    @Param('userId') userId: string,
    @Query('gymId') gymId: string,
    @Query('all') all: string,
  ) {
    return this.equipmentsService.findValidGymEquipmentUserHistory(+userId, +gymId, all == "true");
  }

  @Get('history/:userId')
  findSpecGymEquipmentUserHistory(
    @Param('userId') userId: string,
    @Query('gymId') gymId: string,
  ) {
    return this.equipmentsService.findSpecGymEquipmentUserHistory(+userId, +gymId);
  }

  @Public()
  @Get('gymequipment/:gymId')
  findEquipmentsOnGyms(
    @Param('gymId') gymId: string,
    @Query('isDisable') isDisable: string,
  ) {
    return this.equipmentsService.findEquipmentsOnGyms(+gymId, isDisable == "" ? null : { isDisable: Boolean(isDisable == 'true') });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentsService.findOne(+id);
  }

  //기구 정보 변경
  @Patch('gymequipment/disable/:id')
  setDisableGymEquipmentsOnGyms(
    @Param('id') id: string,
    @Query('isDisable') disable?: string,
  ) {
    return this.equipmentsService.setDisableGymEquipmentsOnGyms(+id, Boolean(disable));
  }

  //기구 정보 변경
  @Patch('history/user/:userId')
  endGymEquipmentUserHistoryByUserId(
    @Param('userId') userId: string,
  ) {
    return this.equipmentsService.endGymEquipmentUserHistoryByUserId(+userId);
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
