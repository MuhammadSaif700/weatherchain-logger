const hre = require("hardhat");

async function main() {
  const WeatherContract = await hre.ethers.getContractFactory("WeatherContract");
  const weather = await WeatherContract.deploy();
  await weather.waitForDeployment();
  console.log("✅ WeatherContract deployed to:", weather.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
