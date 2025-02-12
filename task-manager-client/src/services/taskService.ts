// API calls for CRUD operations
/*TODO - 
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export interface Task {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
}

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTask = async (id: string): Promise<Task> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (id: string, task: Task): Promise<Task> => {
  const response = await axios.put(`${API_URL}/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

*/