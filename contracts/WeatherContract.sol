// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WeatherContract {
    struct WeatherEntry {
        string city;
        string condition;
        uint256 timestamp;
        address reporter;
    }

    WeatherEntry[] public weatherLog;

    function setWeather(string memory _city, string memory _condition) public {
        weatherLog.push(WeatherEntry({
            city: _city,
            condition: _condition,
            timestamp: block.timestamp,
            reporter: msg.sender
        }));
    }

    function getWeatherCount() public view returns (uint256) {
        return weatherLog.length;
    }

    function getWeatherByIndex(uint256 index) public view returns (string memory, string memory, uint256, address) {
        WeatherEntry memory entry = weatherLog[index];
        return (entry.city, entry.condition, entry.timestamp, entry.reporter);
    }
}
