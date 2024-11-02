import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { PomodoroSettingsDto } from './pomodoro-settings.dto';

export class UpdateUserDto extends PomodoroSettingsDto {
  @IsOptional()
  name: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6, {
    message: 'Password length minimum 6',
  })
  password?: string;
}
