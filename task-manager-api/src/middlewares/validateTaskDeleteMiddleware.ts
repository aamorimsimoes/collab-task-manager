import { Request, Response, NextFunction } from 'express';
import { isUUID } from 'validator';

const validateTaskDeleteMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { projectId, taskId } = req.params;

  if (!isUUID(projectId)) {
    res.status(400).json({ error: 'Invalid projectId format. Must be a valid UUID.' });
    return;
  }

  if (!isUUID(taskId)) {
    res.status(400).json({ error: 'Invalid taskId format. Must be a valid UUID.' });
    return;
  }

  next(); // Proceed to controller
};

export default validateTaskDeleteMiddleware;
