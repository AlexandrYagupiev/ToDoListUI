import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useTasks } from '../hooks/useTasks';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            marginTop: '8px',
        },
    },
    input: {
        width: '80%',
    },
    button: {
        width: '50%',
    },
});

function NewTaskForm() {
    const classes = useStyles();
    const { addTask } = useTasks();
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title);
            setTitle('');
        }
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                label="Название задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
                autoFocus
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button type="submit" color="primary">
                Добавить задачу
            </Button>
        </form>
    );
}

export default NewTaskForm;