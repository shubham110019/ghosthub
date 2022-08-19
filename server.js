const http = require('http');
const app = require('./app.js');
const server = http.createServer(app);

server.listen(9000,console.log('http://localhost:9000/'));

// server.listen(process.env.PORT,console.log('app is running'));