import { Repository, EntityRepository } from 'typeorm';
import { TaskEntity } from './tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  public async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const task = this.create(createTaskDto);
    await task.save();

    return task;
  }

  public async getTasks({
    search,
    status,
  }: GetTaskFilterDto): Promise<TaskEntity[]> {
    const qb = this.createQueryBuilder('task');

    if (status) {
      qb.andWhere('task.status = :status', { status });
    }

    if (search) {
      qb.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        {
          search: `%${search}%`,
        },
      );
    }

    const result = await qb.getMany();
    console.log('TaskRepository -> result', result);
    return result;
  }
}
