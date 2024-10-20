import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeBlockDto } from './create-time-block.dto';

export class UpdateTimeBlockDto extends PartialType(CreateTimeBlockDto) {}
