import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';
import { fetchWeather } from '../services/weatherApi';

const Home: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (location: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeather(location);
            setWeatherData(data);
        } catch (err) {
            setError('Failed to fetch weather data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="weather-cards">
                {weatherData.map((weather, index) => (
                    <WeatherCard key={index} data={weather} />
                ))}
            </div>
        </div>
    );
};

export default Home;