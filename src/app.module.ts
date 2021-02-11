import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities/activities.module';
import { ActivitiesService } from './activities/services/activities.service';
import { ActivitiesController } from './activities/controllers/activities.controller';
import { AnswersModule } from './answers/answers.module';
import { AnswersController } from './answers/controllers/answers.controller';
import { AnswersService } from './answers/services/answers.service';
import { ClientsModule } from './clients/clients.module';
import { ClientsController } from './clients/controllers/clients.controller';
import { ClientsService } from './clients/services/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { OptionsController } from './options/controllers/options.controller';
import { QuestionsController } from './questions/controllers/questions.controller';
import { QuestionsService } from './questions/services/questions.service';
import { OptionsService } from './options/services/options.service';
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
  controllers: [
    ActivitiesController,
    AnswersController,
    ClientsController,
    OptionsController,
    QuestionsController,
  ],
  providers: [
    ActivitiesService,
    AnswersService,
    ClientsService,
    QuestionsService,
    OptionsService,
  ],
})
export class AppModule {}
