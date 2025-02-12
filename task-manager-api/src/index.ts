import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
const port = 3001;

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
);

app.use(cors());
app.use(express.json());

app.use('/api/projects', taskRoutes);

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});

export { supabase };
