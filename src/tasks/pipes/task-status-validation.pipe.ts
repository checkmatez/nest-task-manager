import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../tasks.model';

export class TaskStatusValidationPipe implements PipeTransform<string> {
  public transform(value: string) {
    if (!Object.keys(TaskStatus).includes(value)) {
      throw new BadRequestException('Invalid status');
    }

    return value;
  }
}
