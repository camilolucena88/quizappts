import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Questions } from '../../questions/entity/Questions';

@Entity()
export class Options {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @ManyToOne(() => Questions, (question) => question.options)
  question: Questions;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
