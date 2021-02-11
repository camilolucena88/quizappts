import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Options } from '../entity/Options';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Options) private optionsRepo: Repository<Options>,
  ) {}

  findAll() {
    return this.optionsRepo.find();
  }

  findOne(id: number) {
    return this.optionsRepo.findOne(id);
  }

  create(body: any) {
    const newTask = new Options();
    newTask.question = body.question;
    // const newTask = this.optionsRepo.create(body);
    return this.optionsRepo.save(newTask);
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
