import React from 'react';
import TaskForm from '../components/TaskForm';
import { TaskData } from '../types/form.types';

const UpdateTaskPage: React.FC = () => {
  const existingTaskData = {
    id: '123',
    project_id: '456',
    title: 'Sample Task',
    description: 'This is an example task.',
    due_date: '2025-02-10',
    assigned_to: 'John Doe',
  };

  const handleUpdateTask = (taskData: TaskData) => {
    console.log('Updating task:', taskData);
    // Call API to update task
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <TaskForm initialData={existingTaskData} onSubmit={handleUpdateTask} />
    </div>
  );
};

export default UpdateTaskPage;
