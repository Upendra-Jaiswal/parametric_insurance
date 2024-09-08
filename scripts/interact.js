const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const fs = require("fs");
const path = require("path");

// Replace with your mnemonic and Infura/Alchemy URL or other provider
const MNEMONIC = "your mnemonic here";
const INFURA_URL = "https://mainnet.infura.io/v3/your-infura-project-id";
const CONTRACT_ADDRESS = "deployed_contract_address_here"; // Replace with actual deployed contract address

const provider = new HDWalletProvider({
  mnemonic: MNEMONIC,
  providerOrUrl: INFURA_URL,
});

const web3 = new Web3(provider);

// Load the compiled contract
const contractPath = path.resolve(
  __dirname,
  "../build/contracts/DisasterInsurance.json"
);
const { abi } = JSON.parse(fs.readFileSync(contractPath, "utf8"));

const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const interact = async () => {
  const accounts = await web3.eth.getAccounts();

  // Example: Create a new policy
  await contract.methods
    .createPolicy("Flood Policy", web3.utils.toWei("200", "ether"), "flood")
    .send({ from: accounts[0] });

  console.log("Policy created");

  // Example: Trigger a payout
  await contract.methods.triggerPayout(1).send({ from: accounts[0] });

  console.log("Payout triggered");
};

interact();
