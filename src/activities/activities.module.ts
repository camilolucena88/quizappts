import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesService } from './services/activities.service';
import { ActivitiesController } from './controllers/activities.controller';
import { Activity } from './entity/Activity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity])],
  providers: [ActivitiesService],
  controllers: [ActivitiesController],
  exports: [TypeOrmModule],
})
export class ActivitiesModule {}
