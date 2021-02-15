import {
  Body,
  Controller,
  Delete,
  Get, HttpException, HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { QuestionsService } from '../questions/questions.service';
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";
import {CreateQuestionDto} from "../questions/dto/create-question.dto";

@Controller('api/activities')
export class ActivitiesController {
  constructor(
    private activitiesService: ActivitiesService,
    private questionsService: QuestionsService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createActivityDto: CreateActivityDto) {
    return await this.activitiesService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.activitiesService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: number,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.activitiesService.remove(+id);
  }

  @Post(':id/questions')
  @UsePipes(ValidationPipe)
  async createQuestion(
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
  async findAllQuestions(@Param('id') id: number) {
    const activity = await this.activitiesService.findOne(+id);
    return await this.questionsService.findAll(activity);
  }

  @Get(':id/questions/:questionId')
  async findOneQuestion(@Param('id') id: number, @Param('questionId') questionId: number) {
    const activity = await this.activitiesService.findOne(+id);
    if (activity) {
      return await this.questionsService.findOne(questionId, activity);
    }
    throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
  }

  @Delete(':id/questions/:questionId')
  async deleteQuestion(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (activity) {
      return await this.questionsService.remove(+questionId);
    }
    throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
  }
}
