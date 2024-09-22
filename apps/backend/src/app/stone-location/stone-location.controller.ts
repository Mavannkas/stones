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
  Query,
} from '@nestjs/common';
import { StoneLocationService } from './stone-location.service';
import { CreateStoneLocationDto } from './dto/create-stone-location.dto';
import { UpdateStoneLocationDto } from './dto/update-stone-location.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageCompressionInterceptor } from '../../common/interceptors/image-compression-interceptor.interceptor';
import { getUnExistingFileName } from '../utils/files.utils';
import { CheckObjectIdPipe } from '../../common/pipes/check-object-id.pipe';
import {
  ApiConsumes,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { FilesUnlinkFilter } from './filters/files-unlink.filter';
import { SearchStoneLocationDto } from './dto/search-stone-location.dto';
import {
  PaginatedResponse,
  SearchStoneLocationResponse,
  StoneLocationObject,
} from '@stones/types';
import { PaginatedResponseObject } from '../common/responses/paginated.response';
import { StoneLocation } from './entities/stone-location.entity';
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
  @UseFilters(new FilesUnlinkFilter('files'))
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
  @ApiOkResponse({
    type: PaginatedResponseObject<StoneLocation>,
    schema: {
      allOf: [
        { $ref: getSchemaPath(PaginatedResponseObject) },
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(StoneLocation) },
            },
          },
        },
      ],
    },
  })
  search(
    @Query() query: SearchStoneLocationDto
  ): Promise<PaginatedResponseObject<StoneLocation>> {
    return this.stoneLocationService.search(query);
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
