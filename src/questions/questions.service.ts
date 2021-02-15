import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Questions } from './entity/Questions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionsService } from '../options/options.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Activity } from '../activities/entity/Activity';
import { STATUS_CODES } from 'http';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { UpdateOneQuestionDto } from './dto/update-one-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private questionsRepo: Repository<Questions>,
    private optionsService: OptionsService,
  ) {}

  async findAll(activity: Activity) {
    return await this.questionsRepo.find({
      where: { activity: activity },
      relations: ['options'],
    });
  }

  async findOne(id: number, activity: Activity) {
    const question = await this.questionsRepo.findOne({
      where: {
        id: id,
        activity: activity,
      },
      relations: ['options'],
    });

    if (question) {
      return question;
    }
    throw new HttpException(
      'Does not exist the question: ' + id,
      HttpStatus.BAD_REQUEST,
    );
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

  async updateOneQuestion(id: number, questionBody: UpdateOneQuestionDto) {
    const question = await this.questionsRepo.findOne({ id });
    if (question) {
      question.question = questionBody.question;
      question.type = questionBody.type;
      question.max_duration = questionBody.max_duration;
      return this.questionsRepo.save(question);
    }
    throw new HttpException('Wrong question id', HttpStatus.NOT_FOUND);
  }

  async findAllOptionsByQuestion(question: Questions) {
    return question.options;
  }

  async addOneOption(question: Questions, body) {
    question.options = body;
    return this.questionsRepo.save(question);
  }
}
