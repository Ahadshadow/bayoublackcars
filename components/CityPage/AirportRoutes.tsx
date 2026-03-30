import { MapPin, Building2, Palmtree, ShoppingBag, Music, Building, Hotel, Home, LayoutGrid, Anchor, Ship } from 'lucide-react';

interface Route {
    from: string;
    to: string;
}

interface AirportRoutesProps {
    routes: Route[];
    title?: string;
    subtitle?: string;
}

const getRouteIcon = (to: string) => {
    const destination = to.toLowerCase();
    if (destination.includes('french quarter')) return Music;
    if (destination.includes('downtown')) return Building2;
    if (destination.includes('garden district')) return Palmtree;
    if (destination.includes('metairie')) return Home;
    if (destination.includes('convention center')) return LayoutGrid;
    if (destination.includes('hotel')) return Hotel;
    if (destination.includes('baton rouge')) return Building;
    if (destination.includes('cruise port')) return Anchor;
    if (destination.includes('kenner')) return Building2;
    return MapPin;
};

const AirportRoutes: React.FC<AirportRoutesProps> = ({ routes, title, subtitle }) => {
    return (
        <section className="bg-white py-16 font-poppins overflow-hidden">
            <div className="container-custom px-4">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-top-8 duration-1000">
                    <h2 className="text-[28px] md:text-[34px] font-bold text-navy-primary font-taviraj tracking-tight uppercase">
                        {title || "Popular Airport Travel Routes We Serve"}
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-2 mb-4"></div>
                    {subtitle && (
                        <p className="text-gray-600 text-[14px] max-w-3xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {routes.map((route, index) => {
                        const Icon = getRouteIcon(route.to);
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-white border-2 border-navy-primary/10 rounded-[10px] px-6 py-4 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-500 group cursor-default animate-in fade-in slide-in-from-bottom-8"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col">
                                    <span className="text-navy-primary text-[14px] font-bold font-taviraj uppercase tracking-wide">
                                        {route.from}
                                    </span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Icon size={24} className="text-gold group-hover:scale-125 transition-transform duration-500" />
                                </div>

                                <div className="flex flex-col items-end text-right">
                                    <span className="text-navy-primary text-[14px] font-bold font-taviraj uppercase tracking-wide">
                                        {route.to}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://customer.moovs.app/bayou-black-cars-llc/request/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-navy-primary text-white px-10 py-3 rounded-md font-bold text-[14px] uppercase tracking-widest hover:bg-gold transition-all shadow-lg active:scale-95"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AirportRoutes;
