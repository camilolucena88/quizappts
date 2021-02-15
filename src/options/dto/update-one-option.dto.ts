import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateOneOptionDto {
  @IsNotEmpty()
  @IsString()
  answer: string;

  @IsOptional()
  @IsString()
  type: number;
}
