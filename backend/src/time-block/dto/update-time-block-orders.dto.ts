import { IsArray } from 'class-validator';

export class UpdateTimeBlockOrdersDto {
  @IsArray()
  ids: string[];
}
