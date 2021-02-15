import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('api/questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  findAll() {
    return [1, 2, 3];
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.questionsService.findOne({
      where: {
        id: id,
      },
      relations: ['options'],
    });
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return true;
  }
}
