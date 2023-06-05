const { getAllLaunchesData, addNewLaunch } = require('../../model/launches.model');

const getAllLaunches = (req, res) => {
  return res.json(getAllLaunchesData());
};

const httpAddNewLaunch = (req, res) => {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date',
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = { getAllLaunches, httpAddNewLaunch };
