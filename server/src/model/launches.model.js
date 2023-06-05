const launches = new Map();

let latestFlightNumber = 100

const launch = {
  flightNumber: latestFlightNumber,
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

function addNewLaunch(flight) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['ZTM', 'NASA'],
      flightNumber: latestFlightNumber,
      ...flight,
    })
  );
}

module.exports = {
  getAllLaunchesData,
  addNewLaunch,
};
