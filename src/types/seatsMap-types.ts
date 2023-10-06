export type SeatsMapType = {
    cabin: string;
    number: string;
    characteristicsCodes: string[];
    travelerPricing: [
        {
            travelerId: string;
            seatAvailabilityStatus: 'AVAILABLE' | 'BLOCKED';
            price: {
                currency: 'USD';
                total: string;
                base: string;
                taxes: { amount: string; code: string }[];
            };
        },
    ];
    coordinates: { x: number; y: number };
};
