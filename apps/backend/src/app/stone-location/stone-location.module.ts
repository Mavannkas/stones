import { Module } from '@nestjs/common';
import { StoneLocationService } from './stone-location.service';
import { StoneLocationController } from './stone-location.controller';

@Module({
  controllers: [StoneLocationController],
  providers: [StoneLocationService],
})
export class StoneLocationModule {}
