const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Replace with your mnemonic and Infura/Alchemy URL or other provider
const MNEMONIC = 'your mnemonic here';
const INFURA_URL = 'https://mainnet.infura.io/v3/your-infura-project-id';

const provider = new HDWalletProvider({
  mnemonic: MNEMONIC,
  providerOrUrl: INFURA_URL
});

const web3 = new Web3(provider);

// Load the compiled contract
const contractPath = path.resolve(__dirname, '../build/contracts/DisasterInsurance.json');
const { abi, evm } = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Deploying from account:', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['0x0000000000000000000000000000000000000000'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to:', result.options.address);
};

deploy();
