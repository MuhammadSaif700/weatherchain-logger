const hre = require("hardhat");

async function main() {
  const weatherAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const WeatherContract = await hre.ethers.getContractFactory("WeatherContract");
  const weather = await WeatherContract.attach(weatherAddress);

  const tx = await weather.setWeather("Lahore", "Cloudy");
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