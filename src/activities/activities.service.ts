import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './entity/Activity';
import { QuestionsService } from '../questions/questions.service';
import { CreateActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activitiesRepo: Repository<Activity>,
    private questionsService: QuestionsService,
  ) {}

  findAll(): Promise<Activity[]> {
    return this.activitiesRepo.find();
  }

  findOne(id: number) {
    return this.activitiesRepo.findOne(id);
  }

  async create(activity: CreateActivityDto) {
    const questions = [];
    for (const question of activity.questions) {
      questions.push(await this.questionsService.create(question));
    }
    const newActivity = new Activity();
    newActivity.name = activity.name;
    newActivity.questions = questions;
    return this.activitiesRepo.save(newActivity);
  }

  async update(id: number, body: any) {
    const activity = await this.activitiesRepo.findOne(id);
    this.activitiesRepo.merge(activity, body);
    return this.activitiesRepo.save(activity);
  }

  async remove(id: number) {
    await this.activitiesRepo.delete(id);
    return true;
  }
}
