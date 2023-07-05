
const express = require('express');
const server = express();
const router = require('./routes/index');
const PORT = 3001;

server.use(express.json()); //para trsformar los json en obj

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/app', router);

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});
