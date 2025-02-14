import express from 'express';
import { router } from './routes/storage.js';

const app = express();
const port = 3000;

// connecting router
app.use('/storage', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
