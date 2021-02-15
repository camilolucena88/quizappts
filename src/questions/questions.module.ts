import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Questions } from './entity/Questions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionsService } from '../options/options.service';
import { AnswersService } from '../answers/answers.service';
import { Answers } from '../answers/entity/Answers';
import { Options } from '../options/entity/Options';
import { Activity } from '../activities/entity/Activity';

@Module({
  imports: [TypeOrmModule.forFeature([Questions, Answers, Options, Activity])],
  providers: [QuestionsService, AnswersService, OptionsService],
  exports: [TypeOrmModule],
})
export class QuestionsModule {}
