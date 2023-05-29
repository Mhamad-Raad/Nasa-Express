const express = require('express');
const cors = require('cors');
const path = require('path');

const planetsRouter = require('./router/planets/planets.router');
const lunchesRouter = require('./router/launches/launches.router');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);
app.use('/launches', lunchesRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = app;
