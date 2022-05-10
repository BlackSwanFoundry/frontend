const BasicToken = artifacts.require("BasicToken");
const Constants = require( "../consts.js");

module.exports = function (deployer) {
  deployer.deploy(BasicToken, Constants.basicTokenName, Constants.basicTokenSymbol, Constants.basicTokenDecimals, Constants.basicTokenSupply);
};