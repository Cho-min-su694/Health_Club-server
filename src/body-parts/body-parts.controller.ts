import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BodyPartsService } from './body-parts.service';
import { CreateBodyPartDto } from './dto/create-body-part.dto';
import { UpdateBodyPartDto } from './dto/update-body-part.dto';
import { Public } from 'src/util/decorators';

@Controller('body-parts')
export class BodyPartsController {
  constructor(private readonly bodyPartsService: BodyPartsService) {}

  @Post()
  create(@Body() createBodyPartDto: CreateBodyPartDto) {
    return this.bodyPartsService.create(createBodyPartDto);
  }

  @Get()
  findAll() {
    return this.bodyPartsService.findAll();
  }

  @Public()
  @Get('category')
  findBodyPartCategories() {
    return this.bodyPartsService.findBodyPartCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodyPartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBodyPartDto: UpdateBodyPartDto) {
    return this.bodyPartsService.update(+id, updateBodyPartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodyPartsService.remove(+id);
  }
}
