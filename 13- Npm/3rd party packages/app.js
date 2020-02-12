const _ = require("underscore");

let array = [5, 15, 10, 25, 20, 35, 30, 0];

let value = _.min(array);
value = _.max(array);
value = _.isString(array);
value = _.isString("array");
value = _.sample(array);
value = _.shuffle(array);



console.log(value);