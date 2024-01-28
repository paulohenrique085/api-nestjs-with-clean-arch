import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  latitude: string;
  @IsString()
  @IsNotEmpty()
  longitude: string;
}
