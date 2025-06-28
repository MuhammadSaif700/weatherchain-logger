import React from 'react';

interface WeatherCardProps {
    temperature: number;
    humidity: number;
    condition: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, humidity, condition }) => {
    return (
        <div className="weather-card">
            <h2>Weather Information</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Condition: {condition}</p>
        </div>
    );
};

export default WeatherCard;