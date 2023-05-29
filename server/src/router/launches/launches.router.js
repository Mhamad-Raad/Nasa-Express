const express = require('express');

const launchesRouter = express.Router();

const { getAllLaunches } = require('./launches.controller');

// launchesRouter.uses((req, res, next) => {
//   console.log(`url: ${req.}`)
// });

launchesRouter.get('/', getAllLaunches);

module.exports = launchesRouter;
