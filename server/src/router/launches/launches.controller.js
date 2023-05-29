const { getAllLaunchesData } = require('../../model/launches.model');

const getAllLaunches = (req, res) => {
  return res.json(getAllLaunchesData);
};

module.exports = { getAllLaunches };
