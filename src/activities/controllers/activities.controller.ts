import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActivitiesService } from '../services/activities.service';

@Controller('api/activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.activitiesService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.activitiesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.activitiesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.activitiesService.remove(id);
  }
}
