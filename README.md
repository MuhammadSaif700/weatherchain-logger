# weatherchain-logger
A Weather Onchain Logger DApp for Hackathon
WeatherChain Logger
Tagline: A blockchain-powered logger for real-time weather data
Overview
WeatherChain Logger is a hackathon project that brings real-time weather information onto the blockchain. Users can fetch live weather data (temperature, humidity, etc.) for any location via the OpenWeatherMap API and record it on-chain through a Solidity smart contract. This creates an immutable, tamper-proof log of weather data that anyone can verify. The frontend is built with React – “a JavaScript library for building user interfaces”
legacy.reactjs.org
 – providing an intuitive web app. Under the hood, we use Hardhat (an Ethereum development environment)
hardhat.org
 to compile and deploy the Solidity contract. Users connect with their MetaMask crypto wallet to authenticate and send transactions
chromewebstore.google.com
. In summary, WeatherChain Logger offers a simple interface to log weather conditions on Ethereum, ensuring data transparency and persistence.
Features
Real-time Weather Fetch: Retrieves current weather data (e.g. temperature, humidity) from the OpenWeatherMap API
openweathermap.org
.
On-Chain Logging: Stores each weather entry (city, temperature, humidity, timestamp) on the blockchain, creating an immutable record.
User Interface: Interactive React frontend for selecting locations and viewing weather data.
Wallet Integration: Users connect via MetaMask – “the world’s most secure and flexible crypto wallet, trusted by millions of users”
chromewebstore.google.com
 – to log data and sign transactions.
Local Development: Uses Hardhat’s local Ethereum network for fast testing and deployment
hardhat.org
.
Transparent History: All logged weather records are publicly viewable on-chain, enabling verifiable historical data.
Tech Stack
React: Frontend library for building the UI
legacy.reactjs.org
.
Solidity: Language used for writing the on-chain weather logger contract.
Hardhat: Ethereum development environment for compiling, testing, and deploying smart contracts
hardhat.org
.
Ethers.js: Ethereum JavaScript library for blockchain interaction (integrated with Hardhat)
hardhat.org
.
OpenWeatherMap API: Source of real-time weather data
openweathermap.org
.
MetaMask: Browser-based Ethereum wallet for transaction signing and user authentication
chromewebstore.google.com
.
Node.js & npm: Runtime and package management for installing dependencies and running scripts.
Getting Started
Follow these steps to run the app locally:
Clone the repository:
bash
Copy
Edit
git clone https://github.com/YourUsername/WeatherChain-Logger.git
cd WeatherChain-Logger
Install dependencies:
bash
Copy
Edit
npm install
Configure environment: Create a .env file in the project root and add your OpenWeatherMap API key:
ini
Copy
Edit
REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
Start Hardhat network: This runs a local Ethereum development network
hardhat.org
.
bash
Copy
Edit
npx hardhat node
In the terminal output, note the private key(s) for test accounts. In MetaMask, add a new network with RPC URL http://127.0.0.1:8545 (Hardhat default) and import one of the provided keys as an account.
Deploy the smart contract: In a new terminal (with the Hardhat node still running):
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network localhost
This deploys the WeatherLogger contract to the local network.
Run the frontend: Open another terminal window:
bash
Copy
Edit
cd frontend
npm start
The React app will launch at http://localhost:3000. In your browser, ensure MetaMask is connected to the local network and use it to interact with the app.
Smart Contract Description
The smart contract WeatherLogger.sol is written in Solidity (e.g. pragma solidity ^0.8.0) and uses the MIT license. It defines a struct WeatherData containing fields like city, temperature, humidity, and timestamp. New weather records are stored in a public array (e.g., WeatherData[] public weatherLogs), and anyone can retrieve the history. A function such as logWeather(string memory city, uint256 temp, uint256 humid) lets a user add a new entry; it automatically captures block.timestamp. Because all data is on-chain, every entry is immutable once written. Here is a simplified snippet of the contract:
solidity
Copy
Edit
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
This contract is compiled and deployed via Hardhat, and the frontend uses Ethers.js to call logWeather. Each transaction is confirmed through MetaMask before the on-chain log is updated.
Screenshots
(Add screenshots of the WeatherChain Logger app here to illustrate the UI and functionality.) For example: 

Figure: Dashboard showing current weather data and a button to log it on-chain. 

Figure: MetaMask popup confirming the transaction for logging weather data.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Credits / Author
Developed by Muhammad SaifWeatherChain Logger
Tagline: A blockchain-powered logger for real-time weather data
Overview
WeatherChain Logger is a hackathon project that brings real-time weather information onto the blockchain. Users can fetch live weather data (temperature, humidity, etc.) for any location via the OpenWeatherMap API and record it on-chain through a Solidity smart contract. This creates an immutable, tamper-proof log of weather data that anyone can verify. The frontend is built with React – “a JavaScript library for building user interfaces”
legacy.reactjs.org
 – providing an intuitive web app. Under the hood, we use Hardhat (an Ethereum development environment)
hardhat.org
 to compile and deploy the Solidity contract. Users connect with their MetaMask crypto wallet to authenticate and send transactions
chromewebstore.google.com
. In summary, WeatherChain Logger offers a simple interface to log weather conditions on Ethereum, ensuring data transparency and persistence.
Features
Real-time Weather Fetch: Retrieves current weather data (e.g. temperature, humidity) from the OpenWeatherMap API
openweathermap.org
.
On-Chain Logging: Stores each weather entry (city, temperature, humidity, timestamp) on the blockchain, creating an immutable record.
User Interface: Interactive React frontend for selecting locations and viewing weather data.
Wallet Integration: Users connect via MetaMask – “the world’s most secure and flexible crypto wallet, trusted by millions of users”
chromewebstore.google.com
 – to log data and sign transactions.
Local Development: Uses Hardhat’s local Ethereum network for fast testing and deployment
hardhat.org
.
Transparent History: All logged weather records are publicly viewable on-chain, enabling verifiable historical data.
Tech Stack
React: Frontend library for building the UI
legacy.reactjs.org
.
Solidity: Language used for writing the on-chain weather logger contract.
Hardhat: Ethereum development environment for compiling, testing, and deploying smart contracts
hardhat.org
.
Ethers.js: Ethereum JavaScript library for blockchain interaction (integrated with Hardhat)
hardhat.org
.
OpenWeatherMap API: Source of real-time weather data
openweathermap.org
.
MetaMask: Browser-based Ethereum wallet for transaction signing and user authentication
chromewebstore.google.com
.
Node.js & npm: Runtime and package management for installing dependencies and running scripts.
Getting Started
Follow these steps to run the app locally:
Clone the repository:
bash
Copy
Edit
git clone https://github.com/YourUsername/WeatherChain-Logger.git
cd WeatherChain-Logger
Install dependencies:
bash
Copy
Edit
npm install
Configure environment: Create a .env file in the project root and add your OpenWeatherMap API key:
ini
Copy
Edit
REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
Start Hardhat network: This runs a local Ethereum development network
hardhat.org
.
bash
Copy
Edit
npx hardhat node
In the terminal output, note the private key(s) for test accounts. In MetaMask, add a new network with RPC URL http://127.0.0.1:8545 (Hardhat default) and import one of the provided keys as an account.
Deploy the smart contract: In a new terminal (with the Hardhat node still running):
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network localhost
This deploys the WeatherLogger contract to the local network.
Run the frontend: Open another terminal window:
bash
Copy
Edit
cd frontend
npm start
The React app will launch at http://localhost:3000. In your browser, ensure MetaMask is connected to the local network and use it to interact with the app.
Smart Contract Description
The smart contract WeatherLogger.sol is written in Solidity (e.g. pragma solidity ^0.8.0) and uses the MIT license. It defines a struct WeatherData containing fields like city, temperature, humidity, and timestamp. New weather records are stored in a public array (e.g., WeatherData[] public weatherLogs), and anyone can retrieve the history. A function such as logWeather(string memory city, uint256 temp, uint256 humid) lets a user add a new entry; it automatically captures block.timestamp. Because all data is on-chain, every entry is immutable once written. Here is a simplified snippet of the contract:
solidity
Copy
Edit
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
This contract is compiled and deployed via Hardhat, and the frontend uses Ethers.js to call logWeather. Each transaction is confirmed through MetaMask before the on-chain log is updated.
Screenshots
(Add screenshots of the WeatherChain Logger app here to illustrate the UI and functionality.) For example: 

Figure: Dashboard showing current weather data and a button to log it on-chain. 

Figure: MetaMask popup confirming the transaction for logging weather data.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Credits / Author
Developed by Muhammad SaifWeatherChain Logger
Tagline: A blockchain-powered logger for real-time weather data
Overview
WeatherChain Logger is a hackathon project that brings real-time weather information onto the blockchain. Users can fetch live weather data (temperature, humidity, etc.) for any location via the OpenWeatherMap API and record it on-chain through a Solidity smart contract. This creates an immutable, tamper-proof log of weather data that anyone can verify. The frontend is built with React – “a JavaScript library for building user interfaces”
legacy.reactjs.org
 – providing an intuitive web app. Under the hood, we use Hardhat (an Ethereum development environment)
hardhat.org
 to compile and deploy the Solidity contract. Users connect with their MetaMask crypto wallet to authenticate and send transactions
chromewebstore.google.com
. In summary, WeatherChain Logger offers a simple interface to log weather conditions on Ethereum, ensuring data transparency and persistence.
Features
Real-time Weather Fetch: Retrieves current weather data (e.g. temperature, humidity) from the OpenWeatherMap API
openweathermap.org
.
On-Chain Logging: Stores each weather entry (city, temperature, humidity, timestamp) on the blockchain, creating an immutable record.
User Interface: Interactive React frontend for selecting locations and viewing weather data.
Wallet Integration: Users connect via MetaMask – “the world’s most secure and flexible crypto wallet, trusted by millions of users”
chromewebstore.google.com
 – to log data and sign transactions.
Local Development: Uses Hardhat’s local Ethereum network for fast testing and deployment
hardhat.org
.
Transparent History: All logged weather records are publicly viewable on-chain, enabling verifiable historical data.
Tech Stack
React: Frontend library for building the UI
legacy.reactjs.org
.
Solidity: Language used for writing the on-chain weather logger contract.
Hardhat: Ethereum development environment for compiling, testing, and deploying smart contracts
hardhat.org
.
Ethers.js: Ethereum JavaScript library for blockchain interaction (integrated with Hardhat)
hardhat.org
.
OpenWeatherMap API: Source of real-time weather data
openweathermap.org
.
MetaMask: Browser-based Ethereum wallet for transaction signing and user authentication
chromewebstore.google.com
.
Node.js & npm: Runtime and package management for installing dependencies and running scripts.
Getting Started
Follow these steps to run the app locally:
Clone the repository:
bash
Copy
Edit
git clone https://github.com/YourUsername/WeatherChain-Logger.git
cd WeatherChain-Logger
Install dependencies:
bash
Copy
Edit
npm install
Configure environment: Create a .env file in the project root and add your OpenWeatherMap API key:
ini
Copy
Edit
REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
Start Hardhat network: This runs a local Ethereum development network
hardhat.org
.
bash
Copy
Edit
npx hardhat node
In the terminal output, note the private key(s) for test accounts. In MetaMask, add a new network with RPC URL http://127.0.0.1:8545 (Hardhat default) and import one of the provided keys as an account.
Deploy the smart contract: In a new terminal (with the Hardhat node still running):
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network localhost
This deploys the WeatherLogger contract to the local network.
Run the frontend: Open another terminal window:
bash
Copy
Edit
cd frontend
npm start
The React app will launch at http://localhost:3000. In your browser, ensure MetaMask is connected to the local network and use it to interact with the app.
Smart Contract Description
The smart contract WeatherLogger.sol is written in Solidity (e.g. pragma solidity ^0.8.0) and uses the MIT license. It defines a struct WeatherData containing fields like city, temperature, humidity, and timestamp. New weather records are stored in a public array (e.g., WeatherData[] public weatherLogs), and anyone can retrieve the history. A function such as logWeather(string memory city, uint256 temp, uint256 humid) lets a user add a new entry; it automatically captures block.timestamp. Because all data is on-chain, every entry is immutable once written. Here is a simplified snippet of the contract:
solidity
Copy
Edit
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
This contract is compiled and deployed via Hardhat, and the frontend uses Ethers.js to call logWeather. Each transaction is confirmed through MetaMask before the on-chain log is updated.
Screenshots
(Add screenshots of the WeatherChain Logger app here to illustrate the UI and functionality.) For example: 

Figure: Dashboard showing current weather data and a button to log it on-chain. 

Figure: MetaMask popup confirming the transaction for logging weather data.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Credits / Author
Developed by Muhammad Saif