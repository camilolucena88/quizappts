import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answers } from '../entity/Answers';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answers) private answerRepo: Repository<Answers>,
  ) {}

  findAll() {
    return this.answerRepo.find();
  }

  findOne(id: number) {
    return this.answerRepo.findOne(id);
  }

  create(body: any) {
    const newAnswer = new Answers();
    newAnswer.answer = body.answer;
    return this.answerRepo.save(newAnswer);
  }

  async update(id: number, body: any) {
    const answer = await this.answerRepo.findOne(id);
    this.answerRepo.merge(answer, body);
    return this.answerRepo.save(answer);
  }

  async remove(id: number) {
    await this.answerRepo.delete(id);
    return true;
  }
}
