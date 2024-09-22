import { Injectable } from '@nestjs/common';
import { CreateStoneLocationDto } from './dto/create-stone-location.dto';
import { UpdateStoneLocationDto } from './dto/update-stone-location.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StoneLocation } from './entities/stone-location.entity';
import { Model } from 'mongoose';
import { SearchStoneLocationDto } from './dto/search-stone-location.dto';
import { SearchStoneLocationResponse } from '@stones/types';
import { PaginatedResponseObject } from '../common/responses/paginated.response';

@Injectable()
export class StoneLocationService {
  constructor(
    @InjectModel(StoneLocation.name)
    private stoneLocationModel: Model<StoneLocation>
  ) {}

  create(
    createStoneLocationDto: CreateStoneLocationDto,
    files: Array<Express.Multer.File>
  ): Promise<StoneLocation> {
    const stoneLocation = new this.stoneLocationModel(createStoneLocationDto);
    stoneLocation.images = files.map((file) => file.filename);

    return stoneLocation.save();
  }

  async search(
    query: SearchStoneLocationDto
  ): Promise<PaginatedResponseObject<StoneLocation>> {
    const { page, limit } = query;
    const skip = (+page - 1) * +limit;
    const queryBuilder = this.stoneLocationModel.find();
    const count = await this.stoneLocationModel.countDocuments(queryBuilder);
    const data = await queryBuilder.skip(skip).limit(+limit);

    return {
      data,
      total: count,
      page: +page,
      limit: +limit,
    };
  }

  findOne(id: string) {
    return this.stoneLocationModel.findById(id);
  }

  update(id: string, updateStoneLocationDto: UpdateStoneLocationDto) {
    return this.stoneLocationModel.findByIdAndUpdate(
      id,
      updateStoneLocationDto
    );
  }

  remove(id: string) {
    return this.stoneLocationModel.findByIdAndDelete(id);
  }
}
