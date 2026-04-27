"use client";

export default function SecondaryBanners() {
    return (
        <div className="w-full mt-8 space-y-4">
            {/* Two Banners Stacked One by One */}
            <div className="overflow-hidden rounded-2xl">
                <img 
                    src="/assets/banners/Group-72.png" 
                    alt="Collection Banner 1" 
                    className="w-full h-auto object-cover" 
                />
            </div>
            <div className="overflow-hidden rounded-2xl">
                <img 
                    src="/assets/banners/section-2.png" 
                    alt="Collection Banner 2" 
                    className="w-full h-auto object-cover" 
                />
            </div>
        </div>
    );
}


