export interface Vehicle {
    id: string;
    created_at?: string;
    category: string;
    models: string;
    description: string;
    price_per_hour: number;
    price_per_mile: number;
    passengers: number;
    bags: number;
    image: string;
    transmission: string;
    fuel: string;
    available: boolean;
    features: string[];
    highlight?: string;
}

export interface Booking {
    id: string;
    created_at?: string;
    customer_name: string;
    customer_email?: string;
    customer_phone?: string;
    pickup_location: string;
    dropoff_location: string;
    distance?: number;
    duration?: number;
    vehicle_id: string;
    pickup_date: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
    total_fare: number;
    vehicle?: Vehicle;
}
