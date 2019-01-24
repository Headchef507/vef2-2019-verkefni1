const express = require('express');
const app = express();

const lectures = require('./lectures.js');

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

app.get('/error', (req, res) => {
    throw new Error('Villa');
});

function notFound(req, res, next){
    const title = "Fannst ekki =(";
    const message = "Fann ekki efnið sem þú ert að leita að";
    res.status(404).render('error', {title, message});
}

function errorHandler(error, req, res, next){
    const title = 'Það kom villa';
    const message = '';
    res.status(500).render('error', { title, message });
}

const host = '127.0.0.1';
const port = 3000;

app.use('/', lectures);

app.use(errorHandler);

app.use(notFound);



/*app.use((req, res) => {
    res.send('Hello World!');
  });*/

  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });