import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AnswersService } from '../services/answers.service';

@Controller('api/answers')
export class AnswersController {
  constructor(private answersService: AnswersService) {}

  @Get()
  findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.answersService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.answersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.answersService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.answersService.remove(id);
  }
}
