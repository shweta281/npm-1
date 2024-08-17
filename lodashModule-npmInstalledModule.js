const lodash= require("lodash");

const item= [1, [2, [3, [4, [5]]]]]
console.log(lodash.flattenDeep(item));
