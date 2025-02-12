import request from 'supertest';
import express from 'express';
import taskRoutes from './taskRoutes';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { supabase } from '../index';

vi.mock('../index', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

const app = express();
app.use(express.json());
app.use('/api/projects', taskRoutes);

describe('Task Routes API', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('GET /api/projects/:projectId/tasks - success', async () => {
    const projectId = '123';
    const mockTasks = [
      { id: 1, title: 'Task 1', description: 'Description 1' },
      { id: 2, title: 'Task 2', description: 'Description 2' },
    ];

    (supabase.from as any).mockReturnValue({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockResolvedValue({ data: mockTasks, error: null }),
    });

    const res = await request(app).get(`/api/projects/${projectId}/tasks`);

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockTasks);
  });

  test('POST /api/projects/:projectId/tasks - success', async () => {
    const projectId = '123';
    const newTask = {
      title: 'New Task',
      description: 'Test Task',
      due_date: '2025-02-07',
      assigned_to: 'user123',
    };
    const createdTask = { id: 3, ...newTask, project_id: projectId };

    (supabase.from as any).mockReturnValue({
      insert: vi.fn().mockResolvedValue({ data: [createdTask], error: null }),
    });

    const res = await request(app)
      .post(`/api/projects/${projectId}/tasks`)
      .send(newTask);

    expect(res.status).toBe(201);
    expect(res.body).toEqual([createdTask]);
  });

  test('GET /api/projects/:projectId/tasks - handles errors', async () => {
    const projectId = '123';
    const mockError = 'Database error';

    (supabase.from as any).mockReturnValue({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockResolvedValue({ data: null, error: { message: mockError } }),
    });

    const res = await request(app).get(`/api/projects/${projectId}/tasks`);

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: mockError });
  });

  test('POST /api/projects/:projectId/tasks - handles errors', async () => {
    const projectId = '123';
    const newTask = {
      title: 'Invalid Task',
      description: '',
      due_date: '',
      assigned_to: '',
    };
    const mockError = 'Insert error';

    (supabase.from as any).mockReturnValue({
      insert: vi.fn().mockResolvedValue({ data: null, error: { message: mockError } }),
    });

    const res = await request(app)
      .post(`/api/projects/${projectId}/tasks`)
      .send(newTask);

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: mockError });
  });
});
