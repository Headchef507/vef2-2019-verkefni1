const express = require('express');

const app = express();

const path = require('path');

const lectures = require('./lectures.js');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

app.get('/error', (req, res) => { // eslint-disable-line
  throw new Error('Villa');
});

function errorHandler(err, req, res, next) {  // eslint-disable-line
  console.error(err);
  const title = 'Það kom villa';
  const message = '';
  res.status(500).render('error', { title, message });
}

function notFound(req, res, next) { // eslint-disable-line
  const title = 'Fannst ekki =(';
  const message = 'Fann ekki efnið sem þú ert að leita að';
  res.status(404).render('error', { title, message });
}


const host = '127.0.0.1';
const port = 3000;

app.use('/', lectures);

app.use(notFound);
app.use(errorHandler);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`); // eslint-disable-line
}); // eslint-disable-line