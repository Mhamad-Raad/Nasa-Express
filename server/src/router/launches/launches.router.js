const express = require('express');

const lunchesRouter = express.Router();

const { getAllLaunches } = require('./launches.controller');

lunchesRouter.get('/', getAllLaunches);

module.exports = lunchesRouter;
