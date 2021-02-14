import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('api/clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientsService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.clientsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.clientsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientsService.remove(id);
  }
}
