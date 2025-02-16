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
  const [tasks, setTasks] = useState<Required<Task[]>>([]);

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
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Tasks for Project {projectId}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Due Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border border-gray-300 odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">{task.title}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  {task.description || "-"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  {task.status || "-"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  {task.due_date || "-"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                  {task.assigned_to || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
