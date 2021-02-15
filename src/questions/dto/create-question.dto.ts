import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CorrectAnswersDto } from '../../answers/dto/correct-answers.dto';
import { CreateOptionDto } from '../../options/dto/create-option.dto';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsArray()
  correct_answers: Array<CreateOptionDto>;

  @IsArray()
  other_options: Array<CreateOptionDto>;
}
