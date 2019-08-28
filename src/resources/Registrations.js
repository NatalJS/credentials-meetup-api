const { endpoint, validate, stringFilter } = require('fastexpress');
const database = require('../models');

const { Registrations: Model } = database;

module.exports = endpoint(
  Model,
  {
    name: {
      validation: validate.string,
    },
    email: {
      validation: validate.string,
    },
    appear: {
      validation: validate.bool,
    },
  },
  database,
  {
    name: stringFilter,
    email: stringFilter,
  },
);
