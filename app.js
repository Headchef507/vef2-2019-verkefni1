const express = require('express');

const app = express();
const host = '127.0.0.1';
const port = 3000;


//const path = require('path');


app.use((req, res) => {
    res.send('Hello World!');
  });
  app.listen(port, host, () => {
    console.log(`Server @ http://${host}:${port}/`);
  });