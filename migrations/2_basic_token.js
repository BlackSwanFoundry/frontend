const BasicToken = artifacts.require("BasicToken");
const Constants = require("consts")

module.exports = function (deployer) {
  deployer.deploy(BasicToken, Constants.basicTokenName, Constants.basicTokenSymbol, Constants.basicTokenDecimals, Constants.basicTokenSupply);
};