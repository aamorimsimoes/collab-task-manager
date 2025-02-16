import { Request, Response } from 'express';
import { supabase } from '../index';

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId, taskId } = req.params;

    const { error } = await supabase
    .from('tasks')
    .delete()
    .match({
      'id' :taskId, 
      'project_id': projectId
    });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}