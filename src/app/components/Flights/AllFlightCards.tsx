import { FlightCard } from './FlightCard';

interface AllFlightCardsPorps {
    flightsList: any[];
}
const AllFlightCards = ({ flightsList }: AllFlightCardsPorps) => {
    return (
        <>
            {flightsList.map((flight: any) => (
                <>
                    <FlightCard
                        key={flight.id}
                        id={flight.id}
                        flightData={flight}
                    ></FlightCard>
                </>
            ))}
        </>
    );
};

export default AllFlightCards
