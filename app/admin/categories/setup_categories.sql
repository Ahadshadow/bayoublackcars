-- Create Vehicle Categories Table
CREATE TABLE IF NOT EXISTS vehicle_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL UNIQUE
);

-- Insert initial categories based on existing data
INSERT INTO vehicle_categories (name)
VALUES 
('SEDAN'),
('FIRST CLASS SEDAN'),
('ESCALADE SUV'),
('PREMIUM LUXURY SUV'),
('FULL SIZE SUV'),
('STRETCH LIMO'),
('SHUTTLE SPRINTER')
ON CONFLICT (name) DO NOTHING;
