const StarNotary = artifacts.require("StarNotary");
const MyToken = artifacts.require("MyToken");

module.exports = function(deployer) {
  deployer.deploy(StarNotary);
};