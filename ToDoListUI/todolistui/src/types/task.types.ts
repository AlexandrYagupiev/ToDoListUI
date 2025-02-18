export interface Task {
    id: number;
    title: string;
    status: 'completed' | 'in_progress' | 'new';
}