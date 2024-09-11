import { Module } from '@nestjs/common';
import { StoneLocationService } from './stone-location.service';
import { StoneLocationController } from './stone-location.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoneLocationSchema } from './entities/stone-location.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'StoneLocation', schema: StoneLocationSchema },
    ]),
  ],
  controllers: [StoneLocationController],
  providers: [StoneLocationService],
})
export class StoneLocationModule {}
