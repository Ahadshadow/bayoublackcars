export interface FareCalculation {
    baseFare: number;
    distanceFare: number;
    durationFare: number;
    totalFare: number;
}

export function calculateFare(
    distance: number, // miles
    duration: number, // minutes
    hourlyRate: number,
    perMileRate: number
): FareCalculation {
    const baseFare = 0; // Can be adjusted as needed
    const distanceFare = distance * perMileRate;
    const durationFare = (duration / 60) * hourlyRate;
    const totalFare = baseFare + distanceFare + durationFare;

    return {
        baseFare: parseFloat(baseFare.toFixed(2)),
        distanceFare: parseFloat(distanceFare.toFixed(2)),
        durationFare: parseFloat(durationFare.toFixed(2)),
        totalFare: parseFloat(totalFare.toFixed(2)),
    };
}
