import { IsEmail, IsOptional, Min } from 'class-validator';
import { PomodoroSettingsDto } from './pomodoro-settings.dto';

export class UpdateUserDto extends PomodoroSettingsDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Min(6, {
    message: 'Password length minimum 6',
  })
  password?: string;
}
