import { IsHexColor, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTimeBlockDto {
  @IsString()
  name: string;

  @IsHexColor()
  @IsOptional()
  color?: string;

  @IsNumber()
  @IsOptional()
  duration: number;

  @IsNumber()
  @IsOptional()
  order?: number;
}
