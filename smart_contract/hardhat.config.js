require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/oBy3LMvdfhiSpcRJcC4hTy_tKPLu2xt2',
      accounts: ['335163d8f008c6786758a747cd43d35ac3eaa112040a708ca2505ac01aeda2e1'],
    },
  },
};