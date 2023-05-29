const lunches = new Map();
const lunch = {
  flightNumber: 100,
  mission: 'Kempler Exploration X',
  rocket: 'Explorer IS1',
  lunchDate: new Date('December 27, 2030 14:00:00'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

lunches.set(100, lunch);

module.exports = {
  lunches,
};
