require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/oBy3LMvdfhiSpcRJcC4hTy_tKPLu2xt2',
      accounts: ['d1f61d9c69f9c3f9016313cbe6ed362e814c0517947d25c3702a6c1e512548d7'],
    },
  },
};