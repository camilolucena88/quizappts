import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Questions } from './entity/Questions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionsService } from '../options/options.service';
import { AnswersService } from '../answers/answers.service';
import { Answers } from '../answers/entity/Answers';
import {Options} from "../options/entity/Options";

@Module({
  imports: [TypeOrmModule.forFeature([Questions, Answers, Options])],
  providers: [QuestionsService, AnswersService, OptionsService],
  controllers: [QuestionsController],
  exports: [TypeOrmModule],
})
export class QuestionsModule {}
