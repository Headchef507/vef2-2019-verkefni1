const express = require('express');

const app = express();
const host = '127.0.0.1';
const port = 3000;


const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

//app.use('/', img);


/*app.use((req, res) => {
    res.send('Hello World!');
  });*/

  app.listen(port, host, () => {
    console.log(`Server @ http://${host}:${port}/`);
  });