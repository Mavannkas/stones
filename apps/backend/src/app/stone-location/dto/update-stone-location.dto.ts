import { UpdateStoneLocationBody } from '@stones/types';
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
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStoneLocationDto implements UpdateStoneLocationBody {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Name of the stone-location',
    required: false,
  })
  name?: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Created by', required: false })
  createdBy?: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ type: Date, description: 'Finding day', required: false })
  findingDay?: Date;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Country', required: false })
  country?: string;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'State', required: false })
  state?: string;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'City', required: false })
  city?: string;

  @IsString()
  @MaxLength(5)
  @MinLength(5)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Zip code', required: false })
  zipCode?: string;

  @IsString()
  @MaxLength(10000)
  @MinLength(1)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Description', required: false })
  description?: string;

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
}
