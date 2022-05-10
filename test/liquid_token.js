const LiquidToken = artifacts.require("LiquidToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("LiquidToken", function (/* accounts */) {
  it("should assert true", async function () {
    await LiquidToken.deployed();
    return assert.isTrue(true);
  });
});
