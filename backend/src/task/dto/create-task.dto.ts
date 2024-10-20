import { Priority } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(Priority)
  @Transform(({ value }) => ('' + value).toLowerCase())
  priority?: Priority;
}
