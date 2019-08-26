const { Resources } = require('fastexpress');
const Registrations = require('./resources/Registrations');

const routers = new Resources({
  namespace: '/api/v1/',
})
  .add('registrations', Registrations)
  .getRouters();

module.exports = routers;
