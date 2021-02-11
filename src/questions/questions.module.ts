import { Module } from '@nestjs/common';
import { QuestionsService } from './services/questions.service';
import { QuestionsController } from './controllers/questions.controller';
import { Questions } from './entity/Questions';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Questions])],
  providers: [QuestionsService],
  controllers: [QuestionsController],
  exports: [TypeOrmModule],
})
export class QuestionsModule {}
