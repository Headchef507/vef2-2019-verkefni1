const fs = require('fs');
const path = require('path');
const util = require('util');
const express = require('express');

const app = express();

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function list(req, res) {
  /* todo útfæra */
}

async function lecture(req, res, next) {
  /* todo útfæra */
}

router.get('/', catchErrors(list));
router.get('/:slug', catchErrors(lecture));

module.exports = router;
