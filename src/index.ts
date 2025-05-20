import express from 'express';
import identifyRouter from './routes/identify';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Required for parsing JSON bodies.
app.use('/', identifyRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
