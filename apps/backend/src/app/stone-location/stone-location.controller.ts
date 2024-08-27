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
  ParseFilePipeBuilder,
} from '@nestjs/common';
import { StoneLocationService } from './stone-location.service';
import { CreateStoneLocationDto } from './dto/create-stone-location.dto';
import { UpdateStoneLocationDto } from './dto/update-stone-location.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

// // Hack to fix "Cannot find module 'multer'" error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from 'multer';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('stone-location')
export class StoneLocationController {
  constructor(private readonly stoneLocationService: StoneLocationService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    })
  )
  create(
    @Body() createStoneLocationDto: CreateStoneLocationDto,
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addMaxSizeValidator({
          maxSize: 1024 * 1024 * 5,
        })
        .addFileTypeValidator({
          fileType: 'image/*',
        })
        .build()
    )
    files: Array<Express.Multer.File>
  ) {
    console.log(files);
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
