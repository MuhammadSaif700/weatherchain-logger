// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WeatherContract {
    string public city;
    int256 public temperature;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function updateWeather(string memory _city, int256 _temperature) public {
        require(msg.sender == owner, "Only owner can update");
        city = _city;
        temperature = _temperature;
    }

    function getWeather() public view returns (string memory, int256) {
        return (city, temperature);
    }
}
