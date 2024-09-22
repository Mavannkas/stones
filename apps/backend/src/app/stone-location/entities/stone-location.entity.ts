import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { StoneLocationObject } from '@stones/types';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@Schema()
@ApiExtraModels()
export class StoneLocation implements StoneLocationObject {
  @Prop({ required: true })
  @ApiProperty({
    type: String,
    description: 'Name of the stone-location',
    required: false,
  })
  name: string;

  @Prop({ required: true })
  @ApiProperty({
    type: String,
    description: 'Created by',
    required: true,
  })
  createdBy: string;

  @Prop({ required: true, type: Date })
  @ApiProperty({
    type: Date,
    description: 'Finding day',
    required: true,
  })
  findingDay: Date;

  @Prop({ required: true })
  @ApiProperty({
    type: String,
    description: 'Country',
    required: true,
  })
  country: string;

  @Prop({ required: true })
  @ApiProperty({
    type: String,
    description: 'State',
    required: true,
  })
  state: string;

  @Prop({ required: true })
  @ApiProperty({
    type: String,
    description: 'City',
    required: true,
  })
  city: string;

  @Prop({ required: true })
  @ApiProperty({
    type: String,
    description: 'Zip code',
    required: true,
  })
  zipCode: string;

  @Prop({ required: true })
  @ApiProperty({
    type: String,
    description: 'Description',
    required: true,
  })
  description: string;

  @Prop()
  @ApiProperty({
    type: String,
    description: 'Street',
    required: false,
  })
  street: string;

  @Prop({ type: [String] })
  @ApiProperty({
    type: [String],
    description: 'Images',
    required: false,
  })
  images: string[];

  @Prop()
  @ApiProperty({
    type: Number,
    description: 'Latitude',
    required: false,
  })
  lat: number;

  @Prop()
  @ApiProperty({
    type: Number,
    description: 'Longitude',
    required: false,
  })
  long: number;
}

export type StoneLocationDocument = HydratedDocument<StoneLocation>;
export const StoneLocationSchema = SchemaFactory.createForClass(StoneLocation);
