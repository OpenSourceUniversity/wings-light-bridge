const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const LedgerWalletProvider = require("truffle-ledger-provider");
const infuraApiKey = process.env.INFURA_APIKEY;


var ledgerOptions = {
    networkId: 1,
    accountsOffset: 0
};


module.exports = {
  networks: {
    mainnet: {
      provider: new LedgerWalletProvider(
        ledgerOptions,
        "https://mainnet.infura.io/" + infuraApiKey
      ),
      network_id: ledgerOptions.networkId,
      gas: 3500000,
      gasPrice: 10000000000
    },
  }
};
