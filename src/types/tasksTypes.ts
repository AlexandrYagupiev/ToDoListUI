export enum TaskStatus {
    New = 'Новая',
    InProgress = 'В процессе',
    Done = 'Выполнена',
  }
  
  export interface Task {
    id: number;
    task: string;
    description?: string;
    status: TaskStatus;
  }