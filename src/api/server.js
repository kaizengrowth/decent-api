import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './routes';

import { API_PORT } from './config/constants';

export default () => {
  const server = express();

  server.use(bodyParser.json());
  server.use(morgan("common"));
  server.use(routes());

  server.listen(API_PORT, () => {
    console.log(`A decent API is running on port ${API_PORT}.`);
  });
};
