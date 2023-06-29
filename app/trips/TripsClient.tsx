import { SafeReservation, SafeUser } from '../types';

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient = () => {
  return <div>TripsClient</div>;
};

export default TripsClient;
