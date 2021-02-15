import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { ActivitiesService } from '../activities/activities.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateOneQuestionDto } from './dto/update-one-question.dto';

@Controller('api/activities')
export class QuestionsController {
  constructor(
    private activitiesService: ActivitiesService,
    private questionsService: QuestionsService,
  ) {}

  @Post(':id/questions')
  @UsePipes(ValidationPipe)
  async create(
    @Param('id') id: number,
    @Body() createQuestionDto: CreateQuestionDto,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (activity) {
      const newQuestion = await this.questionsService.create(createQuestionDto);
      return await this.activitiesService.addOneQuestion(
        activity,
        activity.questions.concat(newQuestion),
      );
    }
    throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
  }

  @Get(':id/questions')
  async findAll(@Param('id') id: number) {
    console.log(id);
    const activity = await this.activitiesService.findOne(+id);
    return await this.questionsService.findAll(activity);
  }

  @Get(':id/questions/:questionId')
  async findOne(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (activity) {
      return await this.questionsService.findOne(questionId, activity);
    }
    throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
  }

  @Delete(':id/questions/:questionId')
  async delete(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (activity) {
      return await this.questionsService.remove(+questionId);
    }
    throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
  }

  @Put(':id/questions/:questionId')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
    @Body() updateOneQuestionDto: UpdateOneQuestionDto,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (!activity) {
      throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
    }
    return this.questionsService.updateOneQuestion(
      questionId,
      updateOneQuestionDto,
    );
  }
}
