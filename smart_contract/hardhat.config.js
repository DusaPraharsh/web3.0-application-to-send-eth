require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8qbhpri-REviN_z5dN_vz7c0w3FDF5q5",
      accounts: [
        "b1cad9533e2d6b165461ebf671291cc7bf4ecd95bc495e3f47553e66d4b23c41",
      ],
    },
  },
};
