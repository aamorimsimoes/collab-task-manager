import React, { useState } from 'react';

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: TaskInput) => void;
}

interface TaskInput {
  title: string;
  description: string;
  due_date: string;
  assigned_to: string;
}

interface Task {
  id: string;
  project_id: string;
  title: string;
  description: string;
  due_date: string;
  assigned_to: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<TaskInput>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    due_date: initialData?.due_date || '',
    assigned_to: initialData?.assigned_to || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">{initialData ? 'Update Task' : 'Create Task'}</h2>

      <label className="block mb-2 text-sm font-medium">
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full p-2 mt-1 border rounded-md"
          required
        />
      </label>

      <label className="block mb-2 text-sm font-medium">
        Description
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full p-2 mt-1 border rounded-md"
        />
      </label>

      <label className="block mb-2 text-sm font-medium">
        Due Date
        <input
          type="date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
          className="block w-full p-2 mt-1 border rounded-md"
        />
      </label>

      <label className="block mb-4 text-sm font-medium">
        Assigned To
        <input
          type="text"
          name="assigned_to"
          value={formData.assigned_to}
          onChange={handleChange}
          className="block w-full p-2 mt-1 border rounded-md"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        {initialData ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
