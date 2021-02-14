import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Options } from './entity/Options';
import { AnswersService } from '../answers/answers.service';
import {CreateOptionDto} from "./dto/create-option.dto";

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Options)
    private optionsRepo: Repository<Options>,
    private answersService: AnswersService,
  ) {}

  findAll() {
    return this.optionsRepo.find();
  }

  findOne(id: number) {
    return this.optionsRepo.findOne(id);
  }

  async create(options: Array<CreateOptionDto>): Promise<Array<Options>> {
    const optionsArray = [];
    const newOptions = new Options();
    for (const option of options) {
      newOptions.answer = await this.answersService.create(option.answer);
      optionsArray.push(await this.optionsRepo.save(newOptions));
    }
    return optionsArray;
  }

  async update(id: number, body: any) {
    const task = await this.optionsRepo.findOne(id);
    this.optionsRepo.merge(task, body);
    return this.optionsRepo.save(task);
  }

  async remove(id: number) {
    await this.optionsRepo.delete(id);
    return true;
  }
}
