import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { UpdateOptionDto } from '../../options/dto/update-option.dto';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  options: UpdateOptionDto;
}
