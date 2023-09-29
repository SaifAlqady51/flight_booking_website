export type SegmentType = {
    departure: {
        iataCode: string;
        terminal: string;
        at: string;
    };
    arrival: {
        iataCode: string;
        terminal: string;
        at: string;
    };
    carrierCode: string;
    number: string;
    aircraft: {
        code: string;
    };
    operating: {
        carrierCode: string;
    };
    duration: string;
    id: string;
    numberOfStops: number;
    blacklistedInEU: boolean;
};

export type FlightType = {
    type: string;
    id: string;
    source: string;
    instantTicketingRequired: boolean;
    nonHomogeneous: boolean;
    oneWay: boolean;
    lastTicketingDate: string;
    lastTicketingDateTime: string;
    numberOfBookableSeats: number;
    itineraries: {
        duration: string;
        segments: SegmentType[];
    }[];
    price: {
        currency: string;
        total: string;
        base: string;
        fees: {
            amount: string;
            type: string;
        }[];
        grandTotal: string;
    };
    pricingOptions: {
        fareType: string[];
        includedCheckedBagsOnly: boolean;
    };
    validatingAirlineCodes: string[];
    travelerPricings: [
        {
            travelerId: string;
            fareOption: string;
            travelerType: string;
            price: {
                currency: string;
                total: string;
                base: string;
            };
            fareDetailsBySegment: {
                segmentId: string;
                cabin: string;
                fareBasis: string;
                class: string;
                includedCheckedBags: {
                    quantity: number;
                };
            }[];
        },
    ];
};
