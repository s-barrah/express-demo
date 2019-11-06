import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// initialise the express app
const app = express();

// enable cors
app.use(cors());

// enable body parser to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Home route
app.get('/', (req, res) => {
  res.send('Received a GET HTTP method');
});


app.listen(process.env.PORT, () =>
  console.log(`Test app listening on port ${process.env.PORT}!`),
);
