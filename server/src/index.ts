import express from 'express';
import { router as homeRoutes } from './routes/homeRoutes';

const PORT = 6000;

const app = express();
app.use(homeRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
