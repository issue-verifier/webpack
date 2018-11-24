console.log('code-a-start');
const b = require('./b');
const c = `${b} world`;

module.exports = c;
module.exports.d = 1;

console.log('code-a');