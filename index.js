const jsonfile = require('jsonfile')
const file = 'json/data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})

var _ = require('lodash');

/*_.forEach(items, index => {
    console.log(`${items.fname} ${items.lname} is ${items.age} years old`);
});*/