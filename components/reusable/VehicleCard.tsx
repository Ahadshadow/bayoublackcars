import Image from 'next/image';
import { Users, Briefcase, ShieldCheck, Thermometer } from 'lucide-react';

interface VehicleCardProps {
    name: string;
    description: string;
    image: string;
    price?: string;
    capacity?: string;
    luggage?: string;
    features?: string[];
    href?: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
    name,
    description,
    image,
    price,
    capacity = "3-4",
    luggage = "2-3",
    features = ["Leather Seats", "Climate Control"],
    href = "https://customer.moovs.app/bayou-black-cars-llc/request/new"
}) => {
    return (
        <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full min-w-[280px] max-w-[350px]">
            {/* Image Container */}
            <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[20px] font-bold text-black font-taviraj leading-tight uppercase tracking-tight">
                        {name}
                    </h3>
                    {price && (
                        <span className="text-gold font-bold text-[18px]">
                            {price}
                        </span>
                    )}
                </div>

                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2 italic">
                    {description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-gray-700 text-[13px]">
                        <Users size={16} className="text-gold" />
                        <span>Up to {capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-[13px]">
                        <Briefcase size={16} className="text-gold" />
                        <span>{luggage} Bags</span>
                    </div>
                </div>

                {/* Footer / CTA */}
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <a
                        href={href}
                        target={href.startsWith('http') ? "_blank" : undefined}
                        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="bg-navy-primary text-pure-white px-6 py-2.5 rounded-full font-bold text-[14px] hover:bg-gold transition-colors uppercase tracking-wider"
                    >
                        Learn More
                    </a>
                    <a
                        href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold font-bold text-[14px] hover:underline flex items-center gap-1"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;
