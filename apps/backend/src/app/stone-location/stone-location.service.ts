import { Injectable } from '@nestjs/common';
import { CreateStoneLocationDto } from './dto/create-stone-location.dto';
import { UpdateStoneLocationDto } from './dto/update-stone-location.dto';

@Injectable()
export class StoneLocationService {
  create(createStoneLocationDto: CreateStoneLocationDto) {
    return 'This action adds a new stoneLocation';
  }

  findAll() {
    return `This action returns all stoneLocation`;
  }

  findOne(id: string) {
    return `This action returns a #${id} stoneLocation`;
  }

  update(id: string, updateStoneLocationDto: UpdateStoneLocationDto) {
    return `This action updates a #${id} stoneLocation`;
  }

  remove(id: string) {
    return `This action removes a #${id} stoneLocation`;
  }
}
