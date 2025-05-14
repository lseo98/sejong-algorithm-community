import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from './routes/postRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/posts', postRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});