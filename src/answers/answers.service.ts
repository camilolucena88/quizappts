import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answers } from './entity/Answers';
import {CreateAnswerDto} from "./dto/create-answer.dto";
import {CreateOptionDto} from "../options/dto/create-option.dto";

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

  async create(answer: CreateAnswerDto) {
    const newAnswer = new Answers();
    newAnswer.answer = answer.answer;
    return await this.answerRepo.save(newAnswer);
  }

  async update(id: number, body: any) {
    const answer = await this.answerRepo.findOne(id);
    this.answerRepo.merge(answer, body);
    return await this.answerRepo.save(answer);
  }

  async remove(id: number) {
    await this.answerRepo.delete(id);
    return true;
  }
}
