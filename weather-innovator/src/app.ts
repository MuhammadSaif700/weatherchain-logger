import { WeatherDashboard } from './components/WeatherDashboard';
import { ForecastChart } from './components/ForecastChart';
import { FeatureHighlights } from './components/FeatureHighlights';
import { fetchCurrentWeather, fetchForecast } from './services/weatherService';

class WeatherApp {
    private dashboard: WeatherDashboard;
    private forecastChart: ForecastChart;
    private featureHighlights: FeatureHighlights;

    constructor() {
        this.dashboard = new WeatherDashboard();
        this.forecastChart = new ForecastChart();
        this.featureHighlights = new FeatureHighlights();
    }

    public async initialize(location: string) {
        const currentWeather = await fetchCurrentWeather(location);
        const forecast = await fetchForecast(location);

        this.dashboard.updateWeather(currentWeather);
        this.forecastChart.updateChart(forecast);
        this.featureHighlights.render();
    }

    public render() {
        this.dashboard.render();
        this.forecastChart.render();
        this.featureHighlights.render();
    }
}

const app = new WeatherApp();
app.initialize('New York').then(() => {
    app.render();
});