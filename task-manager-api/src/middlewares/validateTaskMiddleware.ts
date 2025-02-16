import { Request, Response, NextFunction } from 'express';

const validateTaskMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { title, description } = req.body;

  if (!title || typeof title !== 'string') {
    res.status(400).json({ error: 'Title is required and must be a string.' });
    return;
  }

  if (description && typeof description !== 'string') {
    res.status(400).json({ error: 'Description must be a string.' });
    return;
  }

  next(); // Call next() only if validation passes
};

export default validateTaskMiddleware;
