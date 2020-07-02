import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus, Task } from './tasks.model';

@Entity({ name: 'tasks' })
export class TaskEntity extends BaseEntity implements Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ default: TaskStatus.Open })
  status!: TaskStatus;
}
