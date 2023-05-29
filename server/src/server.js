const http = require('http');
const app = require('./app');

const { loadPlanets } = require('./model/planets.model');

const PORT = 4000;

const server = http.createServer(app);

async function load() {
  await loadPlanets();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

load();
