import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GymmembershipsService } from './gymmemberships.service';
import { CreateGymmembershipCancellationDto, CreateGymmembershipDto } from './dto/create-gymmembership.dto';
import { UpdateGymAccessHistoryDto, UpdateGymmembershipDto } from './dto/update-gymmembership.dto';

@Controller('gymmemberships')
export class GymmembershipsController {
  constructor(private readonly gymmembershipsService: GymmembershipsService) { }

  @Post('cancel/:membershipId')
  cancelGymMembership(
    @Param('membershipId') membershipId: string,
    @Body() createGymmembershipCancellationDto: CreateGymmembershipCancellationDto
  ) {
    return this.gymmembershipsService.cancelGymMembership(+membershipId, createGymmembershipCancellationDto);
  }

  @Post('access/:gymId')
  createGymAccessHistory(
    @Param('gymId') membershipId: string,
    @Body() createGymAccessHIstoryDto: {userId:number}
  ) {
    return this.gymmembershipsService.createGymAccessHistory(+membershipId, createGymAccessHIstoryDto.userId);
  }

  @Post('extend/:gymId')
  extendGymMembership(
    @Param('gymId') gymId: string,
    @Body() createGymmembershipDto: {userId:number, assignBy:number},
    @Query('type') type: string,
    @Query('add') add: string,
  ) {
    const {userId,assignBy} = createGymmembershipDto;
    return this.gymmembershipsService.extendGymMembership(+gymId, userId, assignBy, type, +add);
  }


  @Post(':gymId')
  createGymMembership(
    @Param('gymId') gymId: string,
    @Body() createGymmembershipDto: CreateGymmembershipDto
  ) {
    return this.gymmembershipsService.createGymMembership(+gymId, createGymmembershipDto);
  }

  @Get('paging')
  findPagingAllGymMembership(
    @Query('page') page: string,
    @Query('take') take: string,
    @Query('searchType') searchType: string,
    @Query('searchText') searchText: string,
    @Query('isDisable') isDisable: string,
  ) {
    return this.gymmembershipsService.findPagingAllGymMembership(null, +page, +take, searchType, searchText, isDisable == "" ? null : isDisable == 'true');
  }

  @Get('paging/:gymId')
  findPagingGymMembership(
    @Param('gymId') gymId:string,
    @Query('page') page: string,
    @Query('take') take: string,
    @Query('searchType') searchType: string,
    @Query('searchText') searchText: string,
    @Query('isDisable') isDisable: string,
  ) {
    return this.gymmembershipsService.findPagingAllGymMembership(+gymId, +page, +take, searchType, searchText, isDisable == "" ? null : isDisable == 'true');
  }

  @Get('access/valid/:gymId/:userId')
  findValidGymAccessHistory(
    @Param('gymId') gymId: string,
    @Param('userId') userId: string,
  ) {
    return this.gymmembershipsService.findValidGymAccessHistory(+gymId, +userId);
  }


  @Get('gym/:gymId')
  findGymMembershipByGymId(
    @Param('gymId') id: string,
    @Query('isDisable') isDisable: string
  ) {
    return this.gymmembershipsService.findGymMembershipByGymId(+id, isDisable == "" ? null : isDisable == 'true');
  }

  @Get('user/:userId')
  findGymMembershipByUserId(
    @Param('userId') id: string,
  ) {
    return this.gymmembershipsService.findGymMembershipByUserId(+id);
  }

  @Get('gym/:gymId/:userId')
  findUserGymMembership(
    @Param('gymId') id: string,
    @Param('userId') userId: string
  ) {
    return this.gymmembershipsService.findUserGymMembership(+id, +userId);
  }

  @Get()
  findAllGymMembership() {
    return this.gymmembershipsService.findAllGymMembership();
  }

  @Get(':id')
  findOneGymMembership(@Param('id') id: string) {
    return this.gymmembershipsService.findOneGymMembership(+id);
  }

  @Patch('access/exit/:id')
  exitGym(
    @Param('id') id: string,
  ) {
    return this.gymmembershipsService.exitGym(+id);
  }

  @Patch('access/:id')
  updateGymAccessHistory(
    @Param('id') id: string,
    @Body() updateGymAccessHIstoryDto: UpdateGymAccessHistoryDto
  ) {
    return this.gymmembershipsService.updateGymAccessHistory(+id, updateGymAccessHIstoryDto);
  }

  @Patch(':id')
  updateGymMembership(@Param('id') id: string, @Body() updateGymmembershipDto: UpdateGymmembershipDto) {
    return this.gymmembershipsService.updateGymMembership(+id, updateGymmembershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymmembershipsService.remove(+id);
  }
}
