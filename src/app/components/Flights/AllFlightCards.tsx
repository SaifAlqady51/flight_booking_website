import { FlightCard } from './FlightCard';

interface AllFlightCardsPorps {
    flightsList: any[];
}
// this function takes list of all flightoffers and then return them in flights card
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

export default AllFlightCards;
