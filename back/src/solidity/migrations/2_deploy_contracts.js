const Tether = artifacts.require("Tether");

module.exports = function (deployer) {
  deployer.deploy(Tether, 10**9);
};
