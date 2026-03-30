export interface BookingPayload {
    customer_name: string;
    pickup_location: string;
    dropoff_location: string;
    vehicle_id: string;
    booking_type: 'hourly' | 'point_to_point';
}

export function validateBookingPayload(payload: any): { valid: boolean; error?: string } {
    const { customer_name, pickup_location, dropoff_location, vehicle_id, booking_type } = payload;

    if (!customer_name || typeof customer_name !== 'string' || customer_name.trim().length === 0) {
        return { valid: false, error: 'Customer name is required' };
    }

    if (!pickup_location || typeof pickup_location !== 'string' || pickup_location.trim().length === 0) {
        return { valid: false, error: 'Pickup location is required' };
    }

    if (!dropoff_location || typeof dropoff_location !== 'string' || dropoff_location.trim().length === 0) {
        return { valid: false, error: 'Dropoff location is required' };
    }

    if (!vehicle_id || typeof vehicle_id !== 'string' || !/^[0-9a-fA-F-]{36}$/.test(vehicle_id)) {
        return { valid: false, error: 'Valid vehicle ID is required' };
    }

    if (!['hourly', 'point_to_point'].includes(booking_type)) {
        return { valid: false, error: 'Invalid booking type' };
    }

    return { valid: true };
}
