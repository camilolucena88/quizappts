import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Answers } from '../../answers/entity/Answers';
import { Options } from '../../options/entity/Options';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  order: number;

  @Column('text')
  question: string;

  @ManyToOne(() => Answers, (correctAnswers) => correctAnswers.answer)
  correctAnswers: Answers;

  @OneToMany(() => Options, (options) => options.question)
  options: Options;

  @Column({ type: 'smallint', nullable: true })
  type: number;

  @Column({ type: 'time', nullable: true })
  max_duration: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
