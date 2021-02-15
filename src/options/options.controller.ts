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
import { OptionsService } from './options.service';
import { ActivitiesService } from '../activities/activities.service';
import { QuestionsService } from '../questions/questions.service';
import { CreateOneOptionDto } from './dto/create-one-option.dto';
import { UpdateOneOptionDto } from './dto/update-one-option.dto';

@Controller('api/activities')
export class OptionsController {
  constructor(
    private activitiesService: ActivitiesService,
    private questionsService: QuestionsService,
    private optionsService: OptionsService,
  ) {}

  @Get(':id/questions/:questionId/options')
  async findAll(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (!activity) {
      throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
    }
    const question = await this.questionsService.findOne(+questionId, activity);
    if (!question) {
      throw new HttpException('Wrong question', HttpStatus.BAD_REQUEST);
    }
    return question.options;
  }

  @Get(':id/questions/:questionId/options/:optionId')
  async findOne(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
    @Param('optionId') optionId: number,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (!activity) {
      throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
    }
    const question = await this.questionsService.findOne(+questionId, activity);
    if (!question) {
      throw new HttpException('Wrong question', HttpStatus.BAD_REQUEST);
    }
    return await this.optionsService.findOneOption(optionId, question);
  }

  @Post(':id/questions/:questionId/options')
  async create(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
    @Body() createOptionDto: CreateOneOptionDto,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (!activity) {
      throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
    }
    const question = await this.questionsService.findOne(+questionId, activity);
    if (!question) {
      throw new HttpException('Wrong question', HttpStatus.BAD_REQUEST);
    }
    const newOption = await this.optionsService.createOne(createOptionDto);
    return await this.questionsService.addOneOption(
      question,
      question.options.concat(newOption),
    );
  }

  @Put(':id/questions/:questionId/options/:optionId')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
    @Param('optionId') optionId: number,
    @Body() updateOneOptionDto: UpdateOneOptionDto,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (!activity) {
      throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
    }
    return this.optionsService.updateOneOption(optionId, updateOneOptionDto);
  }

  @Delete(':id/questions/:questionId/options/:optionId')
  async delete(
    @Param('id') id: number,
    @Param('questionId') questionId: number,
    @Param('optionId') optionId: number,
  ) {
    const activity = await this.activitiesService.findOne(+id);
    if (!activity) {
      throw new HttpException('Wrong activity', HttpStatus.BAD_REQUEST);
    }
    const question = await this.questionsService.findOne(+questionId, activity);
    if (!question) {
      throw new HttpException('Wrong question', HttpStatus.BAD_REQUEST);
    }
    return await this.optionsService.remove(+optionId);
  }
}
