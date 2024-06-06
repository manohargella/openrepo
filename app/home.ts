// src/server.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your TypeScript server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
