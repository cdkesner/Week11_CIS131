const jsonfile = require('jsonfile')
const file = 'json/data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})

var _ = require('lodash');

_.forEach(_items => {
    console.log(value);
});