const fs = require('fs');
const path = require('path');
const util = require('util');
const express = require('express');

const app = express();

const router = express.Router();

const readdirAsync = util.promisify(fs.readdir);

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function readLecturesList() {
  const files = await readdirAsync('/public');
}

async function list(req, res) {
  const title = 'Fyrirlestrar';
  const classes = await readLecturesList();

  const {lectures} = data;
  res.render('index', {title, lectures});
  console.log(lectures);
  
}

async function lecture(req, res, next) {
  const { slug } = req.params;
  const lecutres = await readLecturesList();

  const foundLecture = articles.find(a => a.slug ===slug);

  if(!foundLecture){
    return next
  }

  const { title } = foundLecture;

  return res.render('lecture', { title, article: foundLecture });
}

router.get('/', catchErrors(list));
router.get('/:slug', catchErrors(lecture));

module.exports = router;
