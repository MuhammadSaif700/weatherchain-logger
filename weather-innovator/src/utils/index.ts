export function formatTemperature(temp: number): string {
    return `${temp.toFixed(1)} °C`;
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}