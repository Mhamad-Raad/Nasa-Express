const express = require('express');

const planetsRouter = require('./planets/planets.router');

planetsRouter.use('/', () => {});

module.exports = planetsRouter;
