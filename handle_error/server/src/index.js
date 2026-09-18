import data from '../data/data.js'
import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

app.get('/data', (req, res) => {
  try {
    res.status(200).json(data);
    console.log(`Data is found`);
  }
  catch (error) {
    console.log(`Not found request data`);
    res.status(404).json({
      "title": "Data not found",
      "status": 404,
      "detail": "Not found request data"
    })
  }
});

app.listen(port, () => {
  console.log('server is running at http://localhost:3000/');
});
