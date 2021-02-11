import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from '../entity/Activity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activitiesRepo: Repository<Activity>,
  ) {}

  findAll(): Promise<Activity[]> {
    return this.activitiesRepo.find();
  }

  findOne(id: number) {
    return this.activitiesRepo.findOne(id);
  }

  create(body: any) {
    const newActivity = new Activity();
    newActivity.name = body.name;
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
