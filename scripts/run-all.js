const hre = require("hardhat");

async function main() {
  const WeatherContract = await hre.ethers.getContractFactory("WeatherContract");
  const weather = await WeatherContract.deploy();
  await weather.waitForDeployment();

  console.log("✅ WeatherContract deployed to:", weather.target);

  const tx = await weather.setWeather("Lahore", "Sunny");
  await tx.wait();

  const [city, condition, timestamp, reporter] = await weather.getWeatherByIndex(0);
  console.log("📍 City:", city);
  console.log("🌤️ Condition:", condition);
  console.log("🕒 Timestamp:", new Date(Number(timestamp) * 1000).toLocaleString());
  console.log("🧑 Reporter:", reporter);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});