export interface DistanceMatrixResponse {
    distance: number; // in miles
    duration: number; // in minutes
}

export async function getDistanceMatrix(
    origin: string,
    destination: string
): Promise<DistanceMatrixResponse> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        throw new Error('GOOGLE_MAPS_API_KEY is not defined');
    }

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        origin
    )}&destinations=${encodeURIComponent(destination)}&units=imperial&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
        throw new Error(`Google Maps API error: ${data.status}`);
    }

    const element = data.rows[0].elements[0];

    if (element.status !== 'OK') {
        throw new Error(`Google Maps Route error: ${element.status}`);
    }

    // distance.value is in meters, duration.value is in seconds
    const distanceMiles = element.distance.value / 1609.34;
    const durationMinutes = element.duration.value / 60;

    return {
        distance: parseFloat(distanceMiles.toFixed(2)),
        duration: Math.ceil(durationMinutes),
    };
}
