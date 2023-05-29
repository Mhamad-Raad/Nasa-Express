const launches = new Map();
const launch = {
  flightNumber: 100,
  mission: 'Kempler Exploration X',
  rocket: 'Explorer IS1',
  lunchDate: new Date('December 27, 2030 14:00:00'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(100, launch);

function getAllLaunchesData() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunchesData,
};
