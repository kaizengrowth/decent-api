import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './routes';

export default () => {
  const server = express();

  server.use(bodyParser.json());
  server.use(morgan("common"));
  server.use(routes());

  server.listen(8000, () => {
    console.log("A decent API is running on port 8000.");
  });
};
