export async function fetchCurrentWeather(location: string): Promise<WeatherData> {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
    if (!response.ok) {
        throw new Error('Failed to fetch current weather data');
    }
    const data = await response.json();
    return data as WeatherData;
}

export async function fetchForecast(location: string): Promise<ForecastData> {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=7`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather forecast data');
    }
    const data = await response.json();
    return data as ForecastData;
}