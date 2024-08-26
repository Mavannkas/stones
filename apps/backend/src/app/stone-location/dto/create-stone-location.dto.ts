import {
  IsDate,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateStoneLocationBody } from '@stones/types';

export class CreateStoneLocationDto implements CreateStoneLocationBody {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  createdBy: string;

  @IsDate()
  @IsNotEmpty()
  findingDay: Date;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  country: string;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  state: string;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  city: string;

  @IsString()
  @MaxLength(5)
  @MinLength(5)
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @MaxLength(10000)
  @MinLength(1)
  @IsNotEmpty()
  description: string;

  @IsString()
  @MaxLength(255)
  street?: string;

  @IsOptional()
  @IsLatitude()
  lat?: number;

  @IsOptional()
  @IsLongitude()
  long?: number;
}
