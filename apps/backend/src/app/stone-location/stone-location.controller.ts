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
  UseFilters,
} from '@nestjs/common';
import { StoneLocationService } from './stone-location.service';
import { CreateStoneLocationDto } from './dto/create-stone-location.dto';
import { UpdateStoneLocationDto } from './dto/update-stone-location.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

// // Hack to fix "Cannot find module 'multer'" error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from 'multer';
import { diskStorage } from 'multer';
import { ImageCompressionInterceptor } from '../../common/interceptors/image-compression-interceptor.interceptor';
import { getUnExistingFileName } from '../utils/files.utils';
import { CheckObjectIdPipe } from '../../common/pipes/check-object-id.pipe';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { FilesUnlinkFilter } from './filters/files-unlink.filter';

@Controller('stone-location')
@ApiTags('stone-location')
export class StoneLocationController {
  constructor(private readonly stoneLocationService: StoneLocationService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: async (req, file, cb) => {
          console.log(file);
          const name = await getUnExistingFileName(
            './uploads',
            file.originalname
          );
          cb(null, name);
        },
      }),
    }),
    ImageCompressionInterceptor
  )
  @UseFilters(new FilesUnlinkFilter("files"))
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
    return this.stoneLocationService.create(createStoneLocationDto, files);
  }

  @Get()
  findAll() {
    return this.stoneLocationService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID of the stone-location',
  })
  findOne(@Param('id', CheckObjectIdPipe) id: string) {
    return this.stoneLocationService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID of the stone-location',
  })
  update(
    @Param('id', CheckObjectIdPipe) id: string,
    @Body() updateStoneLocationDto: UpdateStoneLocationDto
  ) {
    return this.stoneLocationService.update(id, updateStoneLocationDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID of the stone-location',
  })
  remove(@Param('id', CheckObjectIdPipe) id: string) {
    return this.stoneLocationService.remove(id);
  }
}
