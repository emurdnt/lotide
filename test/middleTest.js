// const eqArrays = require('../eqArrays');
const assertEqualArrays = require('../assertEqualArrays');
const middle = require('../middle');

assertEqualArrays(middle([1, 2, 3]),[1,2,3]);

assertEqualArrays(middle([1, 2, 3,4]),[2,3]);