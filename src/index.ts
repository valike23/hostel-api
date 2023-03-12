import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Application = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Hello, world!' });
});

// Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Not found');
  res.status(404).json({ message: error.message });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});