const express = require('express');

const { getAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.use('/', getAllPlanets);

module.exports = planetsRouter;
