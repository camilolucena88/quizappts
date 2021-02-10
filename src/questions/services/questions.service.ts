import { Injectable } from '@nestjs/common';
import { Questions } from '../entity/Questions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  // constructor(
  //   @InjectRepository(Questions) private questionsRepo: Repository<Questions>,
  // ) {}
  //
  // findAll() {
  //   return this.questionsRepo.find();
  // }
  //
  // findOne(id: number) {
  //   return this.questionsRepo.findOne(id);
  // }
  //
  // create(body: any) {
  //   const newQuestion = new Questions();
  //   newQuestion.question = body.question;
  //   return this.questionsRepo.save(newQuestion);
  // }
  //
  // async update(id: number, body: any) {
  //   const question = await this.questionsRepo.findOne(id);
  //   this.questionsRepo.merge(question, body);
  //   return this.questionsRepo.save(question);
  // }
  //
  // async remove(id: number) {
  //   await this.questionsRepo.delete(id);
  //   return true;
  // }
}
