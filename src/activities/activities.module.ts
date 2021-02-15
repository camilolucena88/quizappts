import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { Activity } from './entity/Activity';
import { Questions } from '../questions/entity/Questions';
import { Answers } from '../answers/entity/Answers';
import { Options } from '../options/entity/Options';
import { QuestionsService } from '../questions/questions.service';
import { AnswersService } from '../answers/answers.service';
import { OptionsService } from '../options/options.service';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, Questions, Answers, Options])],
  providers: [
    ActivitiesService,
    QuestionsService,
    AnswersService,
    OptionsService,
  ],
  controllers: [ActivitiesController],
  exports: [TypeOrmModule],
})
export class ActivitiesModule {}
