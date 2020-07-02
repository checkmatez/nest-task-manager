import { TaskStatus } from '../tasks.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.Open, TaskStatus.InProgress, TaskStatus.Done])
  public status!: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  public search!: string;
}
