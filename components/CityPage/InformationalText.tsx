import React from 'react';
import { CityData } from '@/data/cities/houston';

interface InformationalTextProps {
    data: CityData['informationalText'];
}

const InformationalText: React.FC<InformationalTextProps> = ({ data }) => {
    return (
        <section className="bg-white py-10 font-poppins text-black">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    {data.columns.map((column, index) => (
                        <div key={index} className="space-y-3">
                            <h3 className="text-navy-primary text-[15px] font-bold font-taviraj border-b border-gold/50 pb-0.5 inline-block uppercase tracking-wider">
                                {column.title}
                            </h3>
                            <div className="text-gray-600 text-[13px] leading-relaxed space-y-2">
                                {column.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InformationalText;
