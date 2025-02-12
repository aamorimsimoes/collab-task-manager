import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Task {
  id: string;
  title: string;
  description?: string;
  status?: string;
  due_date?: string;
  assigned_to?: string;
}

const TaskList: React.FC<{ projectId: string }> = ({ projectId }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/projects/${projectId}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [projectId]);

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">
      <nav className="flex space-x-4 mb-6">
        <Link to="/create-task" className="text-blue-500 hover:underline">
          Create Task
        </Link>
        <Link to="/update-task" className="text-blue-500 hover:underline">
          Update Task
        </Link>
      </nav>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tasks for Project {projectId}</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-gray-50 border rounded-lg">
            <strong className="text-lg">{task.title}</strong>
            {task.description && <p className="text-sm text-gray-600">{task.description}</p>}
            {task.status && <p className="text-sm text-gray-600">Status: {task.status}</p>}
            {task.due_date && <p className="text-sm text-gray-600">Due Date: {task.due_date}</p>}
            {task.assigned_to && <p className="text-sm text-gray-600">Assigned To: {task.assigned_to}</p>}
          </li>
        ))}
      </ul>
    </div>

    
  );
};

export default TaskList;
