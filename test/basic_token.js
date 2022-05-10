const BasicToken = artifacts.require("BasicToken");
const Constants = require( "../consts.js");
const BN = require("bn.js");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BasicToken", function (accounts) {
  const contractOwner = accounts[0];
  const alice = accounts[1];
  const bob = accounts[2];

  it("Correct Name", async function () {
    const instance = await BasicToken.deployed();
    const name = await instance.name.call();
    return assert.isTrue(name === Constants.basicTokenName, "Basic Token Name is incorrect.");
  });

  it("Correct Symbol", async function () {
    const instance = await BasicToken.deployed();
    const symbol = await instance.symbol.call();
    return assert.isTrue(symbol === Constants.basicTokenSymbol, "Basic Token Symbol is incorrect.");
  });

  it("Correct Decimals", async function () {
    const instance = await BasicToken.deployed();
    const decimals = await instance.decimals.call();
    return assert.isTrue(decimals.toNumber() === Constants.basicTokenDecimals, "Basic Token Decimals is incorrect.");
  });

  it("Correct Initial Supply", async function () {
    const instance = await BasicToken.deployed();
    const supply = await instance.totalSupply.call();
    return assert.isTrue(supply.toNumber() === Constants.basicTokenSupply, "Basic Token Initial Supply is incorrect.");
  });

  it("Correct Initial Token Ownership", async function(){
    const instance = await BasicToken.deployed();
    const ownerBalance = await instance.balanceOf.call(contractOwner);
    return assert.isTrue(ownerBalance.toNumber() == Constants.basicTokenSupply, "Basic Token Initial Ownership is incorrect.");
  })
});
