import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Questions } from '../../questions/entity/Questions';
import { Answers } from '../../answers/entity/Answers';

@Entity()
export class Options {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Questions, (question: Questions) => question.options)
  question: Questions;

  @OneToOne(() => Answers)
  @JoinColumn()
  answer: Answers;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
