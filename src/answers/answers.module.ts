import { Module } from '@nestjs/common';
import { AnswersService } from './services/answers.service';
import { AnswersController } from './controllers/answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answers } from './entity/Answers';

@Module({
  imports: [TypeOrmModule.forFeature([Answers])],
  providers: [AnswersService],
  controllers: [AnswersController],
  exports: [TypeOrmModule],
})
export class AnswersModule {}
