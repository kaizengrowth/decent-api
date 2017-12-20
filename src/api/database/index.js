import Knex from 'knex';
import { objection, Model } from 'objection';

import { development } from '../../../knexfile.js';

export default () => {
  Model.knex(Knex(development));
};
