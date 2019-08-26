const { server } = require('fastexpress');
const cors = require('cors');

const routes = require('./routes');

server.use(cors);
server.use(routes);

const port = process.env.PORT || 3000;

server.listen(port);

module.exports = server;
