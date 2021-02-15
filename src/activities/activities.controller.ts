import {
  Body,
  Controller,
  Delete,
  Get,
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

  @Get(':id/questions')
  async findAllQuestions(@Param('id') id: number) {
    const activity = await this.activitiesService.findOne(+id);
    return await this.questionsService.findAll(activity);
  }
}
