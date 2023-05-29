const { launches } = require('../../model/launches.model');

const getAllLaunches = (req, res) => {
  return res.json([...launches.values()]);
};

module.exports = { getAllLaunches };
