export class FeatureHighlights {
    render() {
        const highlightsContainer = document.createElement('div');
        highlightsContainer.className = 'feature-highlights';

        const alertFeature = document.createElement('div');
        alertFeature.className = 'highlight';
        alertFeature.innerHTML = '<h3>Weather Alerts</h3><p>Get real-time alerts for severe weather conditions.</p>';

        const recommendationsFeature = document.createElement('div');
        recommendationsFeature.className = 'highlight';
        recommendationsFeature.innerHTML = '<h3>Personalized Recommendations</h3><p>Receive tailored suggestions based on your location and preferences.</p>';

        highlightsContainer.appendChild(alertFeature);
        highlightsContainer.appendChild(recommendationsFeature);

        return highlightsContainer;
    }
}