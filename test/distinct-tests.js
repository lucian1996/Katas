const {distinct} = require("../katas/Remove duplicates from list/distinct")
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0


describe("Distinct Tests", () => {
  it("test", () => {
    assert.deepEqual(distinct([1]), [1])
    assert.deepEqual(distinct([1, 2]), [1, 2])
    assert.deepEqual(distinct([1, 1, 2]), [1, 2])
  })
})
