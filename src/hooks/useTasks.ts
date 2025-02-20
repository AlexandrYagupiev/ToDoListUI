import { useCallback, useEffect, useMemo, useState } from 'react';
import { Task, TaskStatus } from '../types/tasksTypes';
import taskService from '../services/taskService';

type UseTasksResult = {
  tasks: Task[];
  addTask: (task: string) => Promise<void>;
  updateTask: (task: Partial<Task>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
};

export default function useTasks(): UseTasksResult {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = useCallback(async () => {
    const fetchedTasks = await [taskService.getAll()](taskService.getAll());
    setTasks(fetchedTasks);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = useCallback(
    async (task: string) => {
      const newTask: Task = {
        id: [Date.now()](Date.now()),
        task,
        description: '',
        status: [TaskStatus.New](TaskStatus.New),
      };
      await [taskService.create(newTask)](taskService.create(newTask));
      setTasks([.[..tasks](..tasks), newTask]);
    },
    [tasks],
  );

  const updateTask = useCallback(
    async (updatedTask: Partial<Task>) => {
      await [taskService.update(updatedTask)](taskService.update(updatedTask));
      setTasks(tasks.map((task) => (task.id === [updatedTask.id](updatedTask.id) ? { [...task](...task), [...updatedTask](...updatedTask) } : task)));
    },
    [tasks],
  );

  const deleteTask = useCallback(
    async (id: number) => {
      await [taskService.delete(id)](taskService.delete(id));
      setTasks(tasks.filter((task) => [task.id](task.id) !== id));
    },
    [tasks],
  );

  return useMemo(
    () => ({
      tasks,
      addTask,
      updateTask,
      deleteTask,
    }),
    [tasks, addTask, updateTask, deleteTask],
  );
}