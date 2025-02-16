import { Router } from 'express';
import { createTask } from '../controllers/createTaskController';
import { getTasksByProject } from '../controllers/getTaskController';

const router: Router = Router();

// Get tasks by projectId
router.get('/:projectId/tasks', getTasksByProject);

// Create a task
router.post('/:projectId/tasks', createTask);

export default router;
