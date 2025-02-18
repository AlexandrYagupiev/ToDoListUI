import { useState, useCallback } from 'react';
import { Task } from '../types/task.types';
import { getTasks, postTask, putTask, deleteTask } from '../services/tasks.service';

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

function useTasks() {
    const [state, dispatch] = useState<TaskState>(initialState);

    const fetchTasks = useCallback(async () => {
        const fetchedTasks = await getTasks();
        dispatch({ type: 'FETCH_TASKS', payload: fetchedTasks });
    }, []);


    const addTask = useCallback(async (title: string) => {
        const newTask = await postTask({ title, status: 'new' });
        dispatch({ type: 'ADD_TASK', payload: newTask });
    }, []);


    const updateTaskStatus = useCallback(async (id: number, status: 'completed' | 'in_progress') => {
        await putTask(id, { status });
        dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id, status } });
    }, []);


    const deleteTask = useCallback(async (id: number) => {
        await deleteTask(id);
        dispatch({ type: 'DELETE_TASK', payload: id });
    }, []);


    return {
        tasks: state.tasks,
        fetchTasks,
        addTask,
        updateTaskStatus,
        deleteTask,
    };
}

export { useTasks };