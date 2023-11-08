import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welecomen to VAST!');
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send("The data has been received successfully");
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
