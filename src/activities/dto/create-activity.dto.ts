import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateQuestionDto } from '../../questions/dto/create-question.dto';

export class CreateActivityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  questions: Array<CreateQuestionDto>;
}
