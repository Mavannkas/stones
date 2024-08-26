import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { StoneLocationService } from './stone-location.service';
import { CreateStoneLocationDto } from './dto/create-stone-location.dto';
import { UpdateStoneLocationDto } from './dto/update-stone-location.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// // Hack to fix "Cannot find module 'multer'" error
import { Multer } from 'multer';
// console.log("XD")
@Controller('stone-location')
export class StoneLocationController {
  constructor(private readonly stoneLocationService: StoneLocationService) {}

  @Post()
  create(
    @Body() createStoneLocationDto: CreateStoneLocationDto,
    @UploadedFiles() files: Array<any>
  ) {
    console.log(1);
    return this.stoneLocationService.create(createStoneLocationDto);
  }

  @Get()
  findAll() {
    return this.stoneLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stoneLocationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStoneLocationDto: UpdateStoneLocationDto
  ) {
    return this.stoneLocationService.update(id, updateStoneLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stoneLocationService.remove(id);
  }
}
