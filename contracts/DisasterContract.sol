// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract DisasterInsurance {
    address public admin;
    AggregatorV3Interface internal priceFeed;

    struct Policy {
        string policyName;
        uint256 coverageAmount;
        string disasterType;
        bool payoutTriggered;
    }

    mapping(uint256 => Policy) public policies;
    uint256 public policyCount;

    event PolicyCreated(uint256 policyId, string policyName, uint256 coverageAmount, string disasterType);
    event PayoutTriggered(uint256 policyId, uint256 payoutAmount);

    constructor(address _priceFeed) {
        admin = msg.sender;
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function createPolicy(string memory _policyName, uint256 _coverageAmount, string memory _disasterType) public onlyAdmin {
        policyCount++;
        policies[policyCount] = Policy({
            policyName: _policyName,
            coverageAmount: _coverageAmount,
            disasterType: _disasterType,
            payoutTriggered: false
        });
        emit PolicyCreated(policyCount, _policyName, _coverageAmount, _disasterType);
    }

    function triggerPayout(uint256 _policyId) public onlyAdmin {
        Policy storage policy = policies[_policyId];
        require(!policy.payoutTriggered, "Payout already triggered");
        // Fetch the latest price from Chainlink
        (,int256 price,,,) = priceFeed.latestRoundData();
        uint256 payoutAmount = policy.coverageAmount * uint256(price) / 1e8;
        policy.payoutTriggered = true;
        emit PayoutTriggered(_policyId, payoutAmount);
    }

    // Fallback function to receive ether
    receive() external payable {}
}
