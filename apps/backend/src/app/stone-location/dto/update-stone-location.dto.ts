import { PartialType } from '@nestjs/mapped-types';
import { CreateStoneLocationDto } from './create-stone-location.dto';
import { UpdateStoneLocationBody } from '@stones/types';

export class UpdateStoneLocationDto
  extends PartialType(CreateStoneLocationDto)
  implements UpdateStoneLocationBody {}
