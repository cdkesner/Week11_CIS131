const loadJsonFile = require('load-json-file');
loadJsonFile('data.json');

var _ = require('lodash');

_.forEach(items, value => {
    console.log(value);
});

/*for (var prop in items){
    console.log(`${prop} ${items[prop]}`);
}*/

/*loadJsonFile('data.json').then(json => {
    console.log(json);
    //=> {data: true}
});*/