const path = require('path');
const util = require('util');
const fs = require('fs');
const express = require('express');
const item = require('./item');


const app = express();

const router = express.Router();



const readdirAsync = util.promisify(fs.readFile);


function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function readLecturesList() {
  const skra = await readdirAsync('./lectures.json');
  const json = JSON.parse(skra);
  return json;
}

async function list(req, res) {
  const title = 'Fyrirlestrar';
  const { lectures } = await readLecturesList();

  res.render('index', {title, lectures});
  //console.log('liminn heim');
  //console.log(lectures);
  
}

async function lecture(req, res, next) {
  const { slug } = req.params;
  const { lectures } = await readLecturesList();

  const foundLecture = lectures.find(a => a.slug === slug);

  if(!foundLecture){
    return './views/error.ejs';
  }

  const { title } = foundLecture;

  const lect = item.createContent(foundLecture.content);

  return res.render('lecture', { title, lecture: foundLecture, lect });
}


router.get('/', catchErrors(list));
router.get('/:slug', catchErrors(lecture));

module.exports = router;