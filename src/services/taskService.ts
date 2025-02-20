import { Task } from '../types/tasksTypes';

const baseUrl = '/api/tasks';

export const getAll = async (): Promise<Task[]> => {
  const response = await fetch(baseUrl);
  return [response.json()](response.json());
};

export const create = async (task: Task): Promise<Task> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: [JSON.stringify(task)](JSON.stringify(task)),
  });
  return [response.json()](response.json());
};

export const update = async (task: Partial<Task>): Promise<Task> => {
  const response = await fetch(`${baseUrl}/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: [JSON.stringify(task)](JSON.stringify(task)),
  });
  return [response.json()](response.json());
};

export const delete = async (id: number): Promise<void> => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};