import {
  IsDateString,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateStoneLocationBody } from '@stones/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStoneLocationDto implements CreateStoneLocationBody {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Name of the stone-location',
    required: true,
  })
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Created by', required: true })
  createdBy: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ type: Date, description: 'Finding day', required: true })
  findingDay: Date;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Country', required: true })
  country: string;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'State', required: true })
  state: string;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'City', required: true })
  city: string;

  @IsString()
  @MaxLength(5)
  @MinLength(5)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Zip code', required: true })
  zipCode: string;

  @IsString()
  @MaxLength(10000)
  @MinLength(1)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Description', required: true })
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({ type: String, description: 'Street', required: false })
  street?: string;

  @IsOptional()
  @IsLatitude()
  @ApiProperty({ type: Number, description: 'Latitude', required: false })
  lat?: number;

  @IsOptional()
  @IsLongitude()
  @ApiProperty({ type: Number, description: 'Longitude', required: false })
  long?: number;

  @IsOptional()
  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',

    },
    description: 'Files (only images)',
    required: true,
  })
  files?: Array<Express.Multer.File>;
}
