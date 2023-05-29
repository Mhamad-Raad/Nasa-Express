const { getAllPlanetsData } = require('../../model/planets.model');

const getAllPlanets = (req, res) => {
  return res.json(getAllPlanetsData());
};

module.exports = { getAllPlanets };
