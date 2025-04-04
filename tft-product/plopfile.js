require('ts-node').register({
  project: './tsconfig.plop.json',
});
module.exports = require('./plopfile.ts').default;
