import React from 'react';
import TaskForm from '../components/TaskForm';
import { TaskData } from '../types/form.types';

const CreateTaskPage: React.FC = () => {
  const handleCreateTask = (taskData: TaskData) => {
    console.log('Creating task:', taskData);
    // Call API to create task
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <TaskForm onSubmit={handleCreateTask} />
    </div>
  );
};

export default CreateTaskPage;
