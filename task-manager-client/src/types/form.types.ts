export interface TaskData {
  //NOTE -  id will be required when creating a task
  // id: string;
  title: string;
  description?: string;
  status?: string;
  due_date?: string;
  assigned_to?: string;
}