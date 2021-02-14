import { Injectable } from '@nestjs/common';
import { Questions } from './entity/Questions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionsService } from '../options/options.service';
import { AnswersService } from '../answers/answers.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private questionsRepo: Repository<Questions>,
    private optionsService: OptionsService,
    private answersService: AnswersService,
  ) {}

  findAll() {
    return this.questionsRepo.find();
  }

  findOne(id: number) {
    return this.questionsRepo.findOne(id);
  }

  async create(question: CreateQuestionDto): Promise<Questions> {
    //Create Options
    const options = await this.optionsService.create(question.options);
    const correctAnswers = question.answers.map((index) => {
      return options[index.answer];
    });
    console.log(correctAnswers);
    //Create the correctAnswers
    const answers = [];
    for (const answer of correctAnswers) {
      answers.push(await this.answersService.create(answer.answer));
    }
    const newQuestion = new Questions();
    newQuestion.question = question.question;
    newQuestion.options = options;
    // newQuestion.correctAnswers = answers;
    return await this.questionsRepo.save(newQuestion);
  }

  async update(id: number, body: any) {
    const question = await this.questionsRepo.findOne(id);
    this.questionsRepo.merge(question, body);
    return this.questionsRepo.save(question);
  }

  async remove(id: number) {
    await this.questionsRepo.delete(id);
    return true;
  }
}
