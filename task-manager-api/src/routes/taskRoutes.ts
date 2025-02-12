import { Router, Request, Response } from 'express';
import { supabase } from '../index';

const router: Router = Router();

// Get tasks by projectId
router.get('/:projectId/tasks', async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;

    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('project_id', projectId);

    if (error) throw new Error(error.message);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Create a task
router.post('/:projectId/tasks', async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const { title, description, due_date, assigned_to } = req.body;

    const { data, error } = await supabase.from('tasks').insert([
      { project_id: projectId, title, description, due_date, assigned_to },
    ]);

    if (error) throw new Error(error.message);

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
