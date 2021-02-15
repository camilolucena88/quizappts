import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { Options } from './entity/Options';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersService } from '../answers/answers.service';
import { Answers } from '../answers/entity/Answers';
import { ActivitiesService } from '../activities/activities.service';
import { Activity } from '../activities/entity/Activity';
import { QuestionsService } from '../questions/questions.service';
import { Questions } from '../questions/entity/Questions';

@Module({
  imports: [TypeOrmModule.forFeature([Options, Answers, Activity, Questions])],
  providers: [
    OptionsService,
    AnswersService,
    ActivitiesService,
    QuestionsService,
  ],
  controllers: [OptionsController],
  exports: [TypeOrmModule],
})
export class OptionsModule {}
