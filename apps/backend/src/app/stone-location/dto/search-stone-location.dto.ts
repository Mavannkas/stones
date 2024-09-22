import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, Validate } from 'class-validator';

export class SearchStoneLocationDto {
  @IsOptional()
  @IsNumberString()
  @Validate((value) => +value >= 1, {
    message: 'Page number should be greater than or equal to 1',
  })
  @ApiPropertyOptional({ type: Number, description: 'Page number' })
  page?: string;

  @IsOptional()
  @IsNumberString()
  @Validate((value) => +value >= 1, {
    message: 'Limit should be greater than or equal to 1',
  })
  @ApiPropertyOptional({ type: Number, description: 'Limit of results' })
  limit?: string;
}
