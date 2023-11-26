import { SeatStyles } from '@/styles/FlightStyles/Seats.styles';

interface SeatProps {
    availabilityStatus: 'AVAILABLE' | 'BLOCKED';
}

const Seat = ({ availabilityStatus }: SeatProps) => {
    return <SeatStyles $availabl={availabilityStatus} />;
};

export default Seat;
