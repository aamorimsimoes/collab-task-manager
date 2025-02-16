import { Request, Response } from 'express';
import { supabase } from '../index';
// import { validate as isUUID } from 'uuid';

export const getTasksByProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;

    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('project_id', projectId);

    if (error) throw new Error(error.message);

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching tasks:", err);

    res.status(500).json({ error: (err as Error).message });
  }
};
