import { TaskStatus } from '../tasks.model';

export class UpdateTaskDto {
  public title!: string;
  public description!: string;
  public status!: TaskStatus;
}
