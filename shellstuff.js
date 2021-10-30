const fs = require('graceful-fs');

const path = require('path');

const ls = (dir) => {
  if (fs.statSync(dir).isDirectory()) {
    console.log(`${dir} is a directory!`);
    return fs.readdirSync(dir);
  }
};

module.exports = {
  ls: ls,
  cat: fs.readFileSync,
};
