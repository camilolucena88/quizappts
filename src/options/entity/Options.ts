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

  @ManyToOne(() => Questions, (question: Questions) => question.options)
  question: Questions;

  @Column()
  type: number;

  @Column()
  answer: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
