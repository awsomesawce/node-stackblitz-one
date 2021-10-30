const yaml = require('js-yaml');
const json5 = require('json5');
const sh = require('./shellstuff');

module.exports = {
  obj1: { name: 'this is an object', date: "Today's date" },
  obj2: {
    func1: function () {
      console.log('this is an export');
    },
  },
};
