const express = require('express');

const launchesRouter = express.Router();

const { getAllLaunches, httpAddNewLaunch } = require('./launches.controller');

// launchesRouter.uses((req, res, next) => {
//   console.log(`url: ${req.}`)
// });

launchesRouter.get('/', getAllLaunches);

launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;
