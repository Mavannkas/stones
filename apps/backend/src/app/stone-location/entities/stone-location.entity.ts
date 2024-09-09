import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { StoneLocationObject } from '@stones/types';

@Schema()
export class StoneLocation implements StoneLocationObject {
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true, type: Date })
  findingDay: Date;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  state: string;
  
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  zipCode: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  street: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop()
  lat: number;

  @Prop()
  long: number;
}

export type StoneLocationDocument = HydratedDocument<StoneLocation>;
export const StoneLocationSchema = SchemaFactory.createForClass(StoneLocation);
