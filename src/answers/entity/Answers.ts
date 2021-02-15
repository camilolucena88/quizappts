import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Questions } from '../../questions/entity/Questions';

@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', default: 0 })
  type: number;

  @OneToOne(() => Questions)
  question: Questions;

  @Column('text')
  answer: string;

  @Column({ type: 'smallint', nullable: true })
  status: number;

  @Column({ type: 'time', nullable: true })
  max_duration: number;

  @Column({ type: 'int', nullable: true })
  views: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
