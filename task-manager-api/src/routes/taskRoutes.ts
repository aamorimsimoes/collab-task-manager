import { Router } from 'express';
import { createTask } from '../controllers/createTaskController';
import { getTasksByProject } from '../controllers/getTaskController';
import validateTaskMiddleware from '../middlewares/validateTaskMiddleware';
import { deleteTask } from '../controllers/deleteTaskController';
import validateTaskDeleteMiddleware from '../middlewares/validateTaskDeleteMiddleware';

const router: Router = Router();

// Get tasks by projectId
router.get('/:projectId/tasks', getTasksByProject);

// Create a task
router.post('/:projectId/tasks', validateTaskMiddleware, createTask);

// Delete a task by projectId and taskId
router.delete('/:projectId/tasks/:taskId', validateTaskDeleteMiddleware, deleteTask);

export default router;
