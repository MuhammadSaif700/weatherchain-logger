class WeatherDashboard {
    constructor() {
        this.weatherData = null;
    }

    render() {
        if (this.weatherData) {
            // Code to display current weather information
            console.log(`Current Weather: ${this.weatherData.temperature}°C, ${this.weatherData.condition}`);
        } else {
            console.log("Weather data is not available.");
        }
    }

    updateWeather(data) {
        this.weatherData = data;
        this.render();
    }
}

export default WeatherDashboard;