import axios from 'axios';
import { Task } from '../types/task.types';

const BASE_URL = 'http://localhost:5000/api/tasks'; // URL вашего бекенда

async function getTasks(): Promise<Task[]> {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
}

async function postTask(task: Omit<Task, 'id'>): Promise<Task> {
    const res = await axios.post(BASE_URL, task);
    return res.data;
}

async function putTask(id: number, task: Partial<Task>): Promise<void> {
    await axios.put(`${BASE_URL}/${id}`, task);
}

async function deleteTask(id: number): Promise<void> {
    await axios.delete(`${BASE_URL}/${id}`);
}

export { getTasks, postTask, putTask, deleteTask };