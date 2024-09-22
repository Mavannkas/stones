import {
  ApiExtraModels,
  ApiProperty,
} from '@nestjs/swagger';
import { PaginatedResponse } from '@stones/types';

@ApiExtraModels()
export class PaginatedResponseObject<T> implements PaginatedResponse<T> {
  @ApiProperty({
    type: [Object],
    description: 'List of items',
  })
  data: T[];

  @ApiProperty({
    type: Number,
    description: 'Total number of items',
  })
  total: number;

  @ApiProperty({ type: Number, description: 'Page number' })
  page: number;

  @ApiProperty({ type: Number, description: 'Limit of results' })
  limit: number;
}
