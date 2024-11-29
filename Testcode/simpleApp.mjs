import express from 'express';

import connectToDatabase from './dummyService.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hello Docker101</h2>');
});

await connectToDatabase();

app.listen(8091);