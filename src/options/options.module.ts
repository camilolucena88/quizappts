import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { Options } from './entity/Options';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersService } from '../answers/answers.service';
import { Answers } from '../answers/entity/Answers';

@Module({
  imports: [TypeOrmModule.forFeature([Options, Answers])],
  providers: [OptionsService, AnswersService],
  controllers: [OptionsController],
  exports: [TypeOrmModule],
})
export class OptionsModule {}
