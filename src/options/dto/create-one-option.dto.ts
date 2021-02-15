import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOneOptionDto {
  @IsNotEmpty()
  @IsString()
  answer: string;

  @IsNotEmpty()
  @IsString()
  type: number;
}
