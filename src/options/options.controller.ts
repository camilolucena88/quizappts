import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OptionsService } from './options.service';

@Controller('options')
export class OptionsController {
  constructor(private optionsService: OptionsService) {}

  @Get()
  findAll() {
    return this.optionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.optionsService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.optionsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.optionsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.optionsService.remove(id);
  }
}
