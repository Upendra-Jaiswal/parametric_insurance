const DisasterInsurance = artifacts.require("DisasterInsurance");

module.exports = function (deployer) {
  // Replace this address with the Chainlink price feed address for the network you're using
  const chainlinkPriceFeedAddress = "0x...";

  deployer.deploy(DisasterInsurance, chainlinkPriceFeedAddress);
};
