const BasicToken = artifacts.require("BasicToken");
const Constants = require("consts");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BasicToken", function (/* accounts */) {
  it("Correct Name", async function () {
    const instance = await BasicToken.deployed();
    const name = await instance.name.call();
    return assert.isTrue(name === Constants.basicTokenName, "Basic Token Name is incorrect.");
  });
});
