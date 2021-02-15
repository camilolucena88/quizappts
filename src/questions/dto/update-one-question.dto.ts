import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateOneQuestionDto extends PartialType(CreateQuestionDto) {
  @IsNotEmpty()
  @IsString()
  question: string;

  @IsOptional()
  @IsInt()
  max_duration: number;

  @IsOptional()
  @IsInt()
  type: number;

  @IsOptional()
  @IsInt()
  order: number;
}
