export interface WeatherData {
    temperature: number;
    humidity: number;
    windSpeed: number;
    description: string;
    icon: string;
    location: string;
}

export interface ForecastData {
    date: string;
    temperature: number;
    description: string;
    icon: string;
}