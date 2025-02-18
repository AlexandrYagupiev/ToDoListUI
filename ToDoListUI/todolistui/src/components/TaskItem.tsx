import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles({
    card: {
        marginBottom: '16px',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        textTransform: 'none',
    },
});

type Props = {
    task: {
        id: number;
        title: string;
        status: 'completed' | 'in_progress' | 'new';
    };
    onDelete: () => void;
    onChangeStatus: (status: 'completed' | 'in_progress') => void;
};

function TaskItem({ task, onDelete, onChangeStatus }: Props) {
    const classes = useStyles();

    const handleDelete = () => {
        onDelete();
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const status = event.target.value as 'completed' | 'in_progress';
        onChangeStatus(status);
    };

    let icon;
    switch (task.status) {
        case 'completed':
            icon = <CheckCircleOutlineIcon />;
            break;
        case 'in_progress':
            icon = <RadioButtonCheckedIcon />;
            break;
        default:
            icon = <RadioButtonUncheckedIcon />;
            break;
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom>{task.title}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.actions}>
                <input type="radio" value="completed" checked={task.status === 'completed'} onChange={handleStatusChange} /> Выполнено
                <input type="radio" value="in_progress" checked={task.status === 'in_progress'} onChange={handleStatusChange} /> В процессе
                <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default TaskItem;