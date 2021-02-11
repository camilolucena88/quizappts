import { Module } from '@nestjs/common';
import { OptionsService } from './services/options.service';
import { OptionsController } from './controllers/options.controller';
import { Options } from './entity/Options';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Options])],
  providers: [OptionsService],
  controllers: [OptionsController],
  exports: [TypeOrmModule],
})
export class OptionsModule {}
