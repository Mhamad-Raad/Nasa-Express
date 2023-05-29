const planets = [];

const getAllPlanets = (req, res) => {
  return res.json(planets);
};

module.exports = { getAllPlanets };
