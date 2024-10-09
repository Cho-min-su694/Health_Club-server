import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/util/decorators';

@Controller('gyms')
export class GymsController {
  constructor(private readonly gymsService: GymsService) { }

  // NOTE 중복확인
  @Public()
  @Get('duplicate')
  findDuplicateUserData(
    @Query('type') type: string,
    @Query('content') content: string,
  ) {
    return this.gymsService.findDuplicateUserData(type, content);
  }

  @Post('user/:userId')
  createCompanyInfo(
    @Param('userId') userId: string,
    @Body() createGymDto: CreateGymDto,
  ) {
    return this.gymsService.createGym(
      +userId,
      createGymDto,
    );
  }

  @Post(':id/image')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'gymImage', maxCount: 1 },
    ]),
  )
  uploadCompanyInfoImage(
    @Param('id') id,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.gymsService.uploadGymImage(
      +id,
      files['gymImage']?.[0],
    );
  }

  // @Get()
  // findAdminAll() {
  //   return this.gymsService.findAdminAll();
  // }

  @Get()
  findAll() {
    return this.gymsService.findAll();
  }

  @Get('user/:userId')
  findOneByUserId(@Param('userId') userId: string) {
    return this.gymsService.findOneByUserId(+userId);
  }

  //유저 페이징
  @Get('admin')
  findAdminAllUsesrs(
    @Query('page') page: string,
    @Query('take') take: string,
    @Query('searchType') searchType: string,
    @Query('searchText') searchText: string,
  ) {
    return this.gymsService.findAdminAllGyms(
      +page,
      +take,
      searchType,
      searchText,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymsService.findOne(+id);
  }

  //회사정보변경
  @Patch(':id/update')
  update(
    @Param('id') id: string,
    @Body() updateGymDto: UpdateGymDto,
  ) {
    return this.gymsService.update(+id, updateGymDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymsService.remove(+id);
  }

  @Delete('admin')
  removeUserByAdmin(
    @Query('adminId') adminId: string,
    @Query('id') id: string,
  ) {
    return this.gymsService.removeGymByAdmin(+adminId, +id);
  }
}
