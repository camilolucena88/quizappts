import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { ActivitiesService } from './activities/activities.service';
import { ActivitiesController } from './activities/activities.controller';
import { AnswersModule } from './answers/answers.module';
import { AnswersController } from './answers/answers.controller';
import { AnswersService } from './answers/answers.service';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { QuestionsService } from './questions/questions.service';
import { OptionsService } from './options/options.service';
import { Client } from './clients/entity/Client';
import { Answers } from './answers/entity/Answers';
import { Activity } from './activities/entity/Activity';
import { Questions } from './questions/entity/Questions';
import { Options } from './options/entity/Options';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: '1234',
      database: 'escuelauno',
      entities: [Client, Answers, Activity, Questions, Options],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    ActivitiesModule,
    AnswersModule,
    ClientsModule,
    QuestionsModule,
    OptionsModule,
  ],
  controllers: [ActivitiesController, AnswersController],
  providers: [
    ActivitiesService,
    AnswersService,
    ClientsService,
    QuestionsService,
    OptionsService,
  ],
})
export class AppModule {}
