import { IsNotEmpty, IsString } from 'class-validator';
import { UpdateQuestionDto } from '../../questions/dto/update-question.dto';

export class UpdateActivityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  questions: UpdateQuestionDto;
}
