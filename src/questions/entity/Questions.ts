import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Options } from '../../options/entity/Options';
import { Activity } from '../../activities/entity/Activity';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  order: number;

  @Column('text')
  question: string;

  @ManyToOne(() => Activity, (activity) => activity.questions, {
    onDelete: 'CASCADE',
  })
  activity: Activity;

  @OneToMany(() => Options, (options: Options) => options.question, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  options: Array<Options>;

  @Column({ type: 'smallint', nullable: true })
  type: number;

  @Column({ type: 'time', nullable: true })
  max_duration: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
