const planets = require('../../model/planets.model');

const getAllPlanets = (req, res) => {
  return res.json(planets);
};

module.exports = { getAllPlanets };
