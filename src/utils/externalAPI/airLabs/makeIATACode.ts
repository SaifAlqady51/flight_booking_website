import axios from 'axios';
import 'dotenv/config';

// convert city name to IATA code
export const getCityCodeFromCityName = async (city: string) => {
    try {
        // const URL = `https://airlabs.co/api/v9/suggest?q=${city}&api_key=${process.env.AIRLABS_API_KEY}`;
        const URL = `https://iata-code-api.vercel.app/get?cityName=${city}`;
        const response = await axios.get(URL);
        console.log(response.data.IATA);
        return response.data.IATA;
    } catch (error) {
        console.error(`Error : ${error}`);
    }
};
