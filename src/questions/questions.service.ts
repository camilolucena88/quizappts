import { Injectable } from '@nestjs/common';
import { Questions } from './entity/Questions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionsService } from '../options/options.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Activity } from '../activities/entity/Activity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private questionsRepo: Repository<Questions>,
    private optionsService: OptionsService,
  ) {}

  async findAll(activity: Activity) {
    return await this.questionsRepo.find({ where: { activity: activity } });
  }

  async findOne(id: { where: { id: number }; relations: string[] }) {
    return await this.questionsRepo.findOne(id);
  }

  async create(question: CreateQuestionDto): Promise<Questions> {
    const correctOptions = await this.optionsService.create(
      question.correct_answers,
    );
    const otherOptions = await this.optionsService.create(
      question.other_options,
      this.optionsService.OTHER_OPTION,
    );
    const newQuestion = new Questions();
    newQuestion.question = question.question;
    newQuestion.options = correctOptions.concat(otherOptions);
    return await this.questionsRepo.save(newQuestion);
  }

  async update(id: number, body: any) {
    const question = await this.questionsRepo.findOne(id);
    question.options.forEach((option) => {
      this.optionsService.update(option.id, body.options);
    });
    this.questionsRepo.merge(question, body);
    return this.questionsRepo.save(question);
  }

  async remove(id: number) {
    await this.questionsRepo.delete(id);
    return true;
  }
}
