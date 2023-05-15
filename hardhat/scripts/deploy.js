const { ethers } = require("hardhat")
require("dotenv").config({ path: ".env"})

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmdDtrf5ANKfLHmqSiQQwZyAZk5utcFzGzX5dhdy1kiGhb"

  const lw3PunksContract = await ethers.getContractFactory("LW3Punks")

  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL)

  await deployedLW3PunksContract.deployed()

  console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
