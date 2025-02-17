import { Router } from 'express';

import { getTasksByProject } from '../controllers/getTaskController';
import { createTask } from '../controllers/createTaskController';
import { deleteTask } from '../controllers/deleteTaskController';

import validateTaskMiddleware from '../middlewares/validateTaskMiddleware';
import validateTaskDeleteMiddleware from '../middlewares/validateTaskDeleteMiddleware';

const router: Router = Router();

/**
 * Get all tasks associated with a project.
 * @route {GET} /api/projects/:projectId/tasks
 * @param {string} req.params.projectId - The ID of the project to fetch tasks for.
 * @returns {Object[]} 200 - List of tasks belonging to the project.
 * @throws {404} - Project not found.
 * @throws {500} - Server error.
 */
router.get('/:projectId/tasks', getTasksByProject);

/**
 * Create a new task for a project.
 * @route {POST} /api/projects/:projectId/tasks
 * @param {string} req.params.projectId - The ID of the project to create a task for.
 * @param {string} req.body.name - The name of the task.
 * @param {string} req.body.description - The description of the task.
 * @param {string} req.body.dueDate - The due date of the task.
 * @returns {Object} 201 - The newly created task.
 * @throws {400} - Invalid task data.
 * @throws {404} - Project not found.
 * @throws {500} - Server error.
 */
router.post('/:projectId/tasks', validateTaskMiddleware, createTask);

/**
 * Delete a task from a project.
 * @route {DELETE} /api/projects/:projectId/tasks/:taskId
 * @param {string} req.params.projectId - The ID of the project to delete a task from.
 * @param {string} req.params.taskId - The ID of the task to delete.
 * @returns {Object} 200 - Task deleted successfully.
 * @throws {400} - Invalid task ID format.
 * @throws {404} - Task not found.
 * @throws {500} - Server error.
 */
router.delete('/:projectId/tasks/:taskId', validateTaskDeleteMiddleware, deleteTask);

export default router;
