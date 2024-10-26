import { IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsDateString()
  deadlineDate: Date;
}
