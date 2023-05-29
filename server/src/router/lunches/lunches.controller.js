const { lunches } = require('../../model/lunches.model');

const getAllLunches = (req, res) => {
  return res.json([...lunches.values()]);
};

module.exports = { getAllLunches };
