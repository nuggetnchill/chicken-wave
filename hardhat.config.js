require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// CONFIG FOR HARMONY
// module.exports = {
//   solidity: '0.8.0',
//   networks: {
//     testnet: {
//       url: 'https://api.s0.b.hmny.io',
//       accounts: [`${HARMONY_PRIVATE_KEY}`],
//     },
//     mainnet: {
//       url: `https://api.harmony.one`,
//       accounts: [`${HARMONY_PRIVATE_KEY}`],
//     },
//   },
// };
