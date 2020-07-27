const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

let isItEqual = eqArrays([1,2,3,4,-5],[3,23,3]);
assertEqual(isItEqual,true);

let isItEqual2 = eqArrays(["lo","la","li"],["lo","la","li"]);
assertEqual(isItEqual2,true);