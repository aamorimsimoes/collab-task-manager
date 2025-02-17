import { Request, Response } from 'express';
import { supabase } from '../index';

// Correctly typed controller function
export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;
    const { title, description, due_date, assigned_to } = req.body;

    // Validate required fields
    if (!title) {
      res.status(400).json({ error: 'Title is required.' });
      return;  // ✅ Prevents further execution
    }
    res.status(201).json({ message: 'Success' });  // ❌ This runs even if title is missing

    const { data, error } = await supabase.from('tasks').insert([
      { project_id: projectId, title, description, due_date, assigned_to },
    ]);

    if (error) throw new Error(error.message);

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
