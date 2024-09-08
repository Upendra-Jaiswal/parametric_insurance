const { assert } = require("chai");
const DisasterInsurance = artifacts.require("DisasterInsurance");
const AggregatorV3Interface = artifacts.require("AggregatorV3Interface");

contract("DisasterInsurance", (accounts) => {
  let disasterInsurance;
  const [admin, other] = accounts;
  const chainlinkPriceFeedAddress =
    "0x0000000000000000000000000000000000000000"; // Placeholder address

  before(async () => {
    // Deploy the DisasterInsurance contract
    disasterInsurance = await DisasterInsurance.new(chainlinkPriceFeedAddress);
  });

  it("should deploy the contract with the correct admin address", async () => {
    const contractAdmin = await disasterInsurance.admin();
    assert.equal(contractAdmin, admin, "Admin address should be set correctly");
  });

  it("should create a new policy", async () => {
    await disasterInsurance.createPolicy(
      "Earthquake Policy",
      web3.utils.toWei("100", "ether"),
      "earthquake",
      { from: admin }
    );

    const policy = await disasterInsurance.policies(1);
    assert.equal(
      policy.policyName,
      "Earthquake Policy",
      "Policy name should be set correctly"
    );
    assert.equal(
      policy.coverageAmount.toString(),
      web3.utils.toWei("100", "ether"),
      "Coverage amount should be set correctly"
    );
    assert.equal(
      policy.disasterType,
      "earthquake",
      "Disaster type should be set correctly"
    );
    assert.isFalse(
      policy.payoutTriggered,
      "Payout should not be triggered initially"
    );
  });

  it("should trigger a payout for a policy", async () => {
    // Simulate Chainlink feed price
    const mockPriceFeed = await AggregatorV3Interface.new();
    await disasterInsurance.triggerPayout(1, { from: admin });

    const policy = await disasterInsurance.policies(1);
    assert.isTrue(policy.payoutTriggered, "Payout should be triggered");
  });

  it("should revert if a non-admin tries to create a policy", async () => {
    try {
      await disasterInsurance.createPolicy(
        "Flood Policy",
        web3.utils.toWei("200", "ether"),
        "flood",
        { from: other }
      );
      assert.fail("Expected revert not received");
    } catch (error) {
      assert(
        error.message.includes("Only admin can perform this action"),
        'Revert reason should be "Only admin can perform this action"'
      );
    }
  });

  it("should revert if a non-admin tries to trigger a payout", async () => {
    try {
      await disasterInsurance.triggerPayout(1, { from: other });
      assert.fail("Expected revert not received");
    } catch (error) {
      assert(
        error.message.includes("Only admin can perform this action"),
        'Revert reason should be "Only admin can perform this action"'
      );
    }
  });
});
