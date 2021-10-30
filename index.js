// run `node index.js` in the terminal
const { ls, cat } = require('./shellstuff');
const objs = require('./objects');

console.log(`Hello Node.js v${process.versions.node}!`);

objs.obj2.func1();
