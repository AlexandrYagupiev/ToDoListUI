import React from 'react';
import { Button, Popconfirm, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Task, TaskStatus } from './types/tasksTypes';
import useTasks from './hooks/useTasks';

interface Props {
  task: Task;
}

const TaskItem: [React.FC](React.FC)<Props> = ({ task }) => {
  const { updateTask, deleteTask } = useTasks();

  const handleUpdateStatus = async (status: TaskStatus) => {
    await updateTask({ [...task](...task), status });
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
  };

  return (
    <>
      <Tooltip title="Изменить статус">
        <Button
          type="primary"
          shape="circle"
          icon={<EditOutlined />}
          onClick={() =>
            handleUpdateStatus(
              [task.status](task.status) === [TaskStatus.New](TaskStatus.New) ? [TaskStatus.InProgress](TaskStatus.InProgress) : [TaskStatus.Done](TaskStatus.Done),
            )
          }
        />
      </Tooltip>
      <Popconfirm
        title="Вы уверены, что хотите удалить эту задачу?"
        okText="Да"
        cancelText="Нет"
        onConfirm={handleDelete}
      >
        <Button type="danger" shape="circle" icon={<DeleteOutlined />} />
      </Popconfirm>
    </>
  );
};

export default TaskItem;