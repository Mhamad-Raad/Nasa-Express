const express = require('express');

const lunchesRouter = express.Router();

const { getAllLunches } = require('./lunches.controller');

lunchesRouter.get('/', getAllLunches);

module.exports = lunchesRouter;
