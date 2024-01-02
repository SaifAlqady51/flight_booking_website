import axios from 'axios';
import { getAmadeusKey } from './getAmadeusKey';
interface FlightOffersProps {
    locationIATACode: string;
    distinationIATACode: string;
    flightDate: string;
    numberOfAdults: string;
    travelClass: string;
}
export const getFlightOffers = async ({
    locationIATACode,
    distinationIATACode,
    flightDate,
    numberOfAdults,
    travelClass,
}: FlightOffersProps) => {
    try {
        const URL = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=
			${locationIATACode}&destinationLocationCode=
			${distinationIATACode}&departureDate=
			${flightDate}&adults=
			${numberOfAdults}&travelClass=
			${travelClass}&nonStop=false&currencyCode=USD&max=10`;

        const config = {
            headers: {
                Authorization: await getAmadeusKey(),
            },
        };
        const flights = await axios.get(URL, config);

        return flights.data.data;
    } catch (error) {
        console.error(`Error : ${error}`);
    }
};

// export const addLogoToFlightsData = async (flightsData: any[]) => {
//     console.log(
//         'flightData at the begining of addLogoToFlightsData function: ' +
//             flightsData,
//     );
//     for (let i = 0; i < flightsData.length; i++) {
//         const response = await axios.get(
//             `https://logo-api-pi.vercel.app/api?filename=${flightsData[i].validatingAirlineCodes[0]}`,
//             { headers: { 'Access-Control-Allow-Origin': '*' } },
//         );
//         flightsData[i].airlineLogo = JSON.stringify(response.data.img);
//     }
//     // const flightsWithLogo = flightsData.map((flightData: any) => {
//     //     axios
//     //         .get(
//     //             `https://logo-api-pi.vercel.app/api?filename=${flightData.validatingAirlineCodes[0]}`,
//     //             { headers: { 'Access-Control-Allow-Origin': '*' } },
//     //         )
//     //         .then((res) => (flightData.airlineLogo = res.data.img))
//     //         .catch((error) => console.error(error));
//     // });
//     console.log(
//         'allFlights from addLogoToFlightsData function:  ' +
//             flightsData[4].airlineLogo,
//     );
//     return flightsData;
// };
