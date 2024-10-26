import { Priority } from '@prisma/client';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsHexColor,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsDateString()
  deadlineDate?: Date;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(Priority)
  @Transform(({ value }) => value.toLowerCase())
  priority?: Priority;

  @IsOptional()
  @IsHexColor()
  color?: string;
}
