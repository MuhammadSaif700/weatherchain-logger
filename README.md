# WeatherChain Logger  

**Tagline:** A blockchain-powered logger for real-time weather data  

## Overview  
WeatherChain Logger is a hackathon project that brings real-time weather information onto the blockchain. Users can fetch live weather data (temperature, humidity, etc.) for any location via the OpenWeatherMap API and record it on-chain through a Solidity smart contract. This creates an immutable, tamper-proof log of weather data that anyone can verify.  

The frontend is built with **React** – a JavaScript library for building user interfaces – providing an intuitive web app. Under the hood, we use **Hardhat** (an Ethereum development environment) to compile and deploy the Solidity contract. Users connect with their **MetaMask** crypto wallet to authenticate and send transactions.  

In summary, WeatherChain Logger offers a simple interface to log weather conditions on Ethereum, ensuring data transparency and persistence.  

---

## Features  
- **Real-time Weather Fetch:** Retrieves current weather data (e.g., temperature, humidity) from the [OpenWeatherMap API](https://openweathermap.org/api).  
- **On-Chain Logging:** Stores each weather entry (city, temperature, humidity, timestamp) on the blockchain, creating an immutable record.  
- **User Interface:** Interactive React frontend for selecting locations and viewing weather data.  
- **Wallet Integration:** Users connect via [MetaMask](https://metamask.io/) to log data and sign transactions.  
- **Local Development:** Uses Hardhat’s local Ethereum network for fast testing and deployment.  
- **Transparent History:** All logged weather records are publicly viewable on-chain, enabling verifiable historical data.  

---

## Tech Stack  
- **Frontend:** React ([docs](https://legacy.reactjs.org/))  
- **Smart Contracts:** Solidity  
- **Ethereum Development:** Hardhat ([docs](https://hardhat.org/)), Ethers.js  
- **Weather Data:** [OpenWeatherMap API](https://openweathermap.org/api)  
- **Wallet:** MetaMask  
- **Backend:** Node.js, npm  

---

## Getting Started  
Follow these steps to run the app locally:  

### 1. Clone the repository  
```bash
git clone https://github.com/YourUsername/WeatherChain-Logger.git  
cd WeatherChain-Logger  
2. Install dependencies
npm install  
3. Configure environment
Create a .env file in the project root and add your OpenWeatherMap API key:
REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY  
4. Start Hardhat network
npx hardhat node  
Note the private keys for test accounts in the terminal output.

In MetaMask, add a new network with RPC URL http://127.0.0.1:8545 (Hardhat default) and import one of the provided keys.
5. Deploy the smart contract
In a new terminal (with Hardhat node running):
npx hardhat run scripts/deploy.js --network localhost  
6. Run the frontend
cd frontend  
npm start  
cd frontend  
npm start  
Smart Contract
The WeatherLogger.sol contract (MIT licensed) stores weather data on-chain:
// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.0;  

contract WeatherLogger {  
    struct WeatherData {  
        string city;  
        uint256 temperature;  
        uint256 humidity;  
        uint256 timestamp;  
    }  

    WeatherData[] public weatherLogs;  

    function logWeather(string memory city, uint256 temp, uint256 humid) public {  
        weatherLogs.push(WeatherData(city, temp, humid, block.timestamp));  
    }  
}  
License
MIT License. See LICENSE for details.
Credits
Developed by Muhammad Saif.

References
React Documentation

Hardhat Documentation

MetaMask

OpenWeatherMap API