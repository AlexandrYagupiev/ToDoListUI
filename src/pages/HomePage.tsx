import React, { useState } from 'react';
import { Button, Input, Layout, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import { Task, TaskStatus } from '../types/tasksTypes';
import TaskItem from '../components/TaskItem';
import useTasks from '../hooks/useTasks';

const columns: ColumnsType<Task> = [
  {
    title: 'Задача',
    dataIndex: 'task',
    key: 'task',
    width: '30%',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
    width: '40%',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    filters: [Object.values(TaskStatus).map((status)](Object.values(TaskStatus).map((status)) => ({
      text: status,
      value: status,
    })),
    onFilter: (value, record) => [record.status](record.status) === value,
    width: '10%',
  },
  {
    title: 'Действия',
    key: 'actions',
    render: (_, record) => <TaskItem task={record} />,
    width: '20%',
  },
];

const HomePage = () => {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  const handleAddTask = async () => {
    if (newTask.trim()) {
      await addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <Layout style={{ padding: '24px', backgroundColor: '#fff' }}>
      <h1>Список дел</h1>
      <Input.Group compact>
        <Input
          placeholder="Добавьте новую задачу"
          value={newTask}
          onChange={(e) => setNewTask(e.[target.value)](target.value))}
          style={{ width: 'calc(100% - 104px)' }}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddTask}>
          Добавить
        </Button>
      </Input.Group>
      <Table columns={columns} dataSource={tasks} rowKey="id" />
    </Layout>
  );
};

export default HomePage;