import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TaskItem from './TaskItem';
import NewTaskForm from './NewTaskForm';
import { useTasks } from '../hooks/useTasks';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

interface Task {
    id: number;
    title: string;
    status: 'completed' | 'in_progress' | 'new';
}

function TasksList() {
    const classes = useStyles();
    const { tasks, fetchTasks, deleteTask, updateTaskStatus } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, []);


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4">Список задач</Typography>
                </Grid>
                {tasks.map((task: Task) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
                        <TaskItem task={task} onDelete={() => deleteTask(task.id)} onChangeStatus={(status) => updateTaskStatus(task.id, status)} />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <NewTaskForm />
                </Grid>
            </Grid>
        </div>
    );
}

export default TasksList;