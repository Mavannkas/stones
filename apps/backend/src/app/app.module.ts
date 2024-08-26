import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoneLocationModule } from './stone-location/stone-location.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri = process.env.MONGO_URI;

@Module({
  imports: [StoneLocationModule, MongooseModule.forRoot(mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
