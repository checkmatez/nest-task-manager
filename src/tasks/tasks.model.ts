export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Open = 'Open',
  InProgress = 'InProgress',
  Done = 'Done',
}
