const assert = require('chai').assert;
const flattened   = require('../flatten');

// assertEqual(flattened([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
describe("#flattened", () => {
  it("returns [1,2,3,4] for [1, 2, 3],[4]", () => {
    assert.strictEqual(flattened([1,2,3],[4]), [1,2,3,4]);
  });
  it("returns [] for [][]", () => {
    assert.strictEqual(flattened([],[]), [ ]); 
  });

});