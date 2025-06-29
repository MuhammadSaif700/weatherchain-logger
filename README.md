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
```

### 2. Install dependencies
```bash
npm install  
```

### 3. Configure environment:

Create a .env file in the project root and add your OpenWeatherMap API key:
```ini
REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY 
```

### 4. Start Hardhat network
```bash
npx hardhat node
```
Note the private keys for test accounts in the terminal output.
In MetaMask, add a new network with RPC URL http://127.0.0.1:8545 (Hardhat default) and import one of the provided keys.

### 5. Deploy the smart contract:

In a new terminal (with Hardhat node running):
```bash
npx hardhat run scripts/deploy.js --network localhost
```
This will deploy the WeatherLogger contract to your local Hardhat network.


### 6. Run the frontend:

Open another terminal and navigate to the frontend directory:
```bash
cd frontend
npm start
```
The React app will launch at http://localhost:3000. In your browser, ensure MetaMask is connected to the local network and use it to interact with the app.

### Smart Contract Description

The smart contract WeatherLogger.sol is written in Solidity (e.g. pragma solidity ^0.8.0) and uses the MIT license. It defines a struct WeatherData containing fields like city, temperature, humidity, and timestamp. New weather records are stored in a public array (e.g., WeatherData[] public weatherLogs), and anyone can retrieve the history. A function such as logWeather(string memory city, uint256 temp, uint256 humid) lets a user add a new entry; it automatically captures block.timestamp. Because all data is on-chain, every entry is immutable once written. Here is a simplified snippet of the contract:

```solidity
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
```
This contract is compiled and deployed via Hardhat, and the frontend uses Ethers.js to call logWeather. Each transaction is confirmed through MetaMask before the on-chain log is updated.
---

## License

**MIT License**. See LICENSE for details.

## Credits
Developed by **Muhammad Saif**.
