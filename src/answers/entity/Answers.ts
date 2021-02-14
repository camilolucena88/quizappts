import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne, OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Options } from '../../options/entity/Options';

@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', default: 0 })
  type: number;

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
