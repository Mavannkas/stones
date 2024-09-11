import { Injectable } from '@nestjs/common';
import { CreateStoneLocationDto } from './dto/create-stone-location.dto';
import { UpdateStoneLocationDto } from './dto/update-stone-location.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StoneLocation } from './entities/stone-location.entity';
import { Model } from 'mongoose';

@Injectable()
export class StoneLocationService {
  constructor(
    @InjectModel(StoneLocation.name)
    private stoneLocationModel: Model<StoneLocation>
  ) {}

  create(
    createStoneLocationDto: CreateStoneLocationDto,
    files: Array<Express.Multer.File>
  ) {
    const stoneLocation = new this.stoneLocationModel(createStoneLocationDto);
    stoneLocation.images = files.map((file) => file.filename);

    return stoneLocation.save();
  }

  findAll() {
    return this.stoneLocationModel.find();
  }

  findOne(id: string) {
    return this.stoneLocationModel.findById(id);
  }

  update(id: string, updateStoneLocationDto: UpdateStoneLocationDto) {
    return this.stoneLocationModel.findByIdAndUpdate(id, updateStoneLocationDto)
  }

  remove(id: string) {
    return this.stoneLocationModel.findByIdAndDelete(id);
  }
}
