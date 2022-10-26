//https://eth-ropsten.alchemyapi.io/v2/hyGnLjFT5-FQnsrB1aVW4IO17cWtl5jU

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/xxxxxxxxxxxxxxxxxxxxxxxl5jU", //insert your testnet node link
      accounts: [
        "faa2d09axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxff4c8a0", //insert your private key
      ],
    },
  },
};
